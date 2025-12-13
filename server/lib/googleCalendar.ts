import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-calendar',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Google Calendar not connected');
  }
  return accessToken;
}

export async function getGoogleCalendarClient() {
  const accessToken = await getAccessToken();
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  return google.calendar({ version: 'v3', auth: oauth2Client });
}

export async function listCalendars() {
  const calendar = await getGoogleCalendarClient();
  const response = await calendar.calendarList.list();
  return response.data.items || [];
}

export async function listEvents(calendarId: string = 'primary', timeMin?: string, timeMax?: string) {
  const calendar = await getGoogleCalendarClient();
  const response = await calendar.events.list({
    calendarId,
    timeMin: timeMin || new Date().toISOString(),
    timeMax: timeMax || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  });
  return response.data.items || [];
}

export async function createEvent(
  calendarId: string = 'primary',
  summary: string,
  description: string,
  startDateTime: string,
  endDateTime: string,
  attendeeEmail?: string
) {
  const calendar = await getGoogleCalendarClient();
  
  const event: any = {
    summary,
    description,
    start: {
      dateTime: startDateTime,
      timeZone: 'Europe/Berlin',
    },
    end: {
      dateTime: endDateTime,
      timeZone: 'Europe/Berlin',
    },
  };

  if (attendeeEmail) {
    event.attendees = [{ email: attendeeEmail }];
  }

  const response = await calendar.events.insert({
    calendarId,
    requestBody: event,
  });
  
  return response.data;
}

export function isBusinessHour(date: Date): boolean {
  const day = date.getDay();
  const hour = date.getHours();
  
  // Monday = 1, Friday = 5, Saturday = 6, Sunday = 0
  if (day === 0 || day === 6) {
    return false; // Weekend
  }
  
  // Business hours: 8:00 - 17:00
  if (hour < 8 || hour >= 17) {
    return false;
  }
  
  return true;
}

export function getAvailableSlots(date: Date, existingEvents: any[]): string[] {
  const slots: string[] = [];
  const day = date.getDay();
  
  // No slots on weekends
  if (day === 0 || day === 6) {
    return slots;
  }
  
  // Generate hourly slots from 8:00 to 16:00 (last slot starts at 16:00, ends at 17:00)
  for (let hour = 8; hour < 17; hour++) {
    const slotStart = new Date(date);
    slotStart.setHours(hour, 0, 0, 0);
    
    const slotEnd = new Date(date);
    slotEnd.setHours(hour + 1, 0, 0, 0);
    
    // Check if slot conflicts with existing events (including 2-hour buffer)
    const hasConflict = existingEvents.some(event => {
      const startStr = event.start?.dateTime || event.start?.date;
      const endStr = event.end?.dateTime || event.end?.date;
      if (!startStr || !endStr) return false;
      
      const eventStart = new Date(startStr);
      const eventEnd = new Date(endStr);
      
      // Add 2-hour buffer: block 2 hours before event start and 2 hours after event end
      const bufferStart = new Date(eventStart.getTime() - 2 * 60 * 60 * 1000);
      const bufferEnd = new Date(eventEnd.getTime() + 2 * 60 * 60 * 1000);
      
      return slotStart < bufferEnd && slotEnd > bufferStart;
    });
    
    if (!hasConflict && slotStart > new Date()) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
    }
  }
  
  return slots;
}

// Get alternative slots across multiple days when requested slot is unavailable
export function getAlternativeSlots(
  requestedDate: Date, 
  existingEvents: any[], 
  count: number = 3
): { date: string; time: string; label: string }[] {
  const alternatives: { date: string; time: string; label: string }[] = [];
  const dayNames = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
  
  // Check next 14 days for available slots
  for (let dayOffset = 0; dayOffset < 14 && alternatives.length < count; dayOffset++) {
    const checkDate = new Date(requestedDate);
    checkDate.setDate(checkDate.getDate() + dayOffset);
    
    const day = checkDate.getDay();
    // Skip weekends
    if (day === 0 || day === 6) continue;
    
    const slots = getAvailableSlots(checkDate, existingEvents);
    
    for (const time of slots) {
      if (alternatives.length >= count) break;
      
      const dateStr = checkDate.toISOString().split('T')[0];
      const dayName = dayNames[checkDate.getDay()];
      const dateLabel = `${dayName}, ${checkDate.getDate()}.${checkDate.getMonth() + 1}.`;
      
      alternatives.push({
        date: dateStr,
        time: time,
        label: `${dateLabel} um ${time} Uhr`
      });
    }
  }
  
  return alternatives;
}

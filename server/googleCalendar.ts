// Google Calendar Integration - Replit Connector
import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
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
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.calendar({ version: 'v3', auth: oauth2Client });
}

export async function getAvailableSlots(date: string): Promise<{ time: string; available: boolean }[]> {
  try {
    const calendar = await getGoogleCalendarClient();
    
    const BUFFER_HOURS = 2;
    
    const startOfDay = new Date(date);
    startOfDay.setHours(6, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(19, 0, 0, 0);

    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: startOfDay.toISOString(),
        timeMax: endOfDay.toISOString(),
        items: [{ id: 'primary' }]
      }
    });

    const busySlots = response.data.calendars?.primary?.busy || [];
    
    const slots: { time: string; available: boolean }[] = [];
    for (let hour = 8; hour < 17; hour++) {
      const slotStart = new Date(date);
      slotStart.setHours(hour, 0, 0, 0);
      const slotEnd = new Date(date);
      slotEnd.setHours(hour + 1, 0, 0, 0);
      
      const bufferStart = new Date(slotStart);
      bufferStart.setHours(bufferStart.getHours() - BUFFER_HOURS);
      const bufferEnd = new Date(slotEnd);
      bufferEnd.setHours(bufferEnd.getHours() + BUFFER_HOURS);
      
      const isBusy = busySlots.some(busy => {
        const busyStart = new Date(busy.start!);
        const busyEnd = new Date(busy.end!);
        return bufferStart < busyEnd && bufferEnd > busyStart;
      });
      
      slots.push({
        time: `${hour.toString().padStart(2, '0')}:00`,
        available: !isBusy
      });
    }
    
    return slots;
  } catch (error) {
    console.error('Error fetching calendar slots:', error);
    return [];
  }
}

export async function createAppointment(data: {
  date: string;
  time: string;
  name: string;
  email: string;
  phone?: string;
  service: string;
  message?: string;
}): Promise<{ success: boolean; eventId?: string; error?: string }> {
  try {
    const calendar = await getGoogleCalendarClient();
    
    const [hours, minutes] = data.time.split(':').map(Number);
    const startDateTime = new Date(data.date);
    startDateTime.setHours(hours, minutes, 0, 0);
    
    const endDateTime = new Date(startDateTime);
    endDateTime.setHours(endDateTime.getHours() + 1);

    const event = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: {
        summary: `Beratungstermin: ${data.name} - ${data.service}`,
        description: `Kunde: ${data.name}\nE-Mail: ${data.email}\nTelefon: ${data.phone || 'Nicht angegeben'}\nService: ${data.service}\nNachricht: ${data.message || 'Keine'}`,
        start: {
          dateTime: startDateTime.toISOString(),
          timeZone: 'Europe/Berlin'
        },
        end: {
          dateTime: endDateTime.toISOString(),
          timeZone: 'Europe/Berlin'
        },
        attendees: [{ email: data.email }],
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 },
            { method: 'popup', minutes: 30 }
          ]
        }
      }
    });

    return { success: true, eventId: event.data.id || undefined };
  } catch (error: any) {
    console.error('Error creating calendar event:', error);
    return { success: false, error: error.message };
  }
}

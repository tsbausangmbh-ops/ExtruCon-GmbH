import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.ionos.de',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  message: string;
}

interface BookingConfirmationData {
  name: string;
  email: string;
  date: string;
  time: string;
  phone?: string;
  message?: string;
  language?: string;
}

const bookingTranslations: Record<string, {
  subject: string;
  greeting: string;
  confirmation: string;
  details: string;
  dateLabel: string;
  timeLabel: string;
  timeSuffix: string;
  phoneLabel: string;
  messageLabel: string;
  locationInfo: string;
  contact: string;
  closing: string;
  signature: string;
  tagline: string;
}> = {
  de: {
    subject: 'Ihre Terminbestätigung - ExtruCon GmbH',
    greeting: 'Guten Tag',
    confirmation: 'vielen Dank für Ihre Terminbuchung! Wir freuen uns auf das Gespräch mit Ihnen.',
    details: 'Ihre Termindetails',
    dateLabel: 'Datum',
    timeLabel: 'Uhrzeit',
    timeSuffix: 'Uhr',
    phoneLabel: 'Telefon',
    messageLabel: 'Ihre Nachricht',
    locationInfo: 'Das Gespräch findet telefonisch oder per Videocall statt. Wir melden uns zum vereinbarten Termin bei Ihnen.',
    contact: 'Bei Fragen erreichen Sie uns unter info@extrucon.de oder 089 444438879.',
    closing: 'Mit freundlichen Grüßen',
    signature: 'Ihr ExtruCon Team',
    tagline: 'KI-Agentur & Automatisierung'
  },
  en: {
    subject: 'Your Appointment Confirmation - ExtruCon GmbH',
    greeting: 'Hello',
    confirmation: 'Thank you for booking an appointment! We look forward to speaking with you.',
    details: 'Your Appointment Details',
    dateLabel: 'Date',
    timeLabel: 'Time',
    timeSuffix: '',
    phoneLabel: 'Phone',
    messageLabel: 'Your Message',
    locationInfo: 'The meeting will take place by phone or video call. We will contact you at the scheduled time.',
    contact: 'If you have any questions, please reach us at info@extrucon.de or +49 89 444438879.',
    closing: 'Best regards',
    signature: 'Your ExtruCon Team',
    tagline: 'AI Agency & Automation'
  },
  hr: {
    subject: 'Potvrda vašeg termina - ExtruCon GmbH',
    greeting: 'Poštovani',
    confirmation: 'Hvala vam na rezervaciji termina! Radujemo se razgovoru s vama.',
    details: 'Detalji vašeg termina',
    dateLabel: 'Datum',
    timeLabel: 'Vrijeme',
    timeSuffix: 'sati',
    phoneLabel: 'Telefon',
    messageLabel: 'Vaša poruka',
    locationInfo: 'Sastanak će se održati telefonski ili putem video poziva. Javit ćemo vam se u dogovoreno vrijeme.',
    contact: 'Za pitanja nas možete kontaktirati na info@extrucon.de ili +49 89 444438879.',
    closing: 'S poštovanjem',
    signature: 'Vaš ExtruCon Tim',
    tagline: 'AI Agencija & Automatizacija'
  },
  tr: {
    subject: 'Randevu Onayınız - ExtruCon GmbH',
    greeting: 'Merhaba',
    confirmation: 'Randevu rezervasyonunuz için teşekkür ederiz! Sizinle görüşmeyi dört gözle bekliyoruz.',
    details: 'Randevu Detaylarınız',
    dateLabel: 'Tarih',
    timeLabel: 'Saat',
    timeSuffix: '',
    phoneLabel: 'Telefon',
    messageLabel: 'Mesajınız',
    locationInfo: 'Görüşme telefon veya video arama ile gerçekleşecektir. Planlanan zamanda sizinle iletişime geçeceğiz.',
    contact: 'Sorularınız için bize info@extrucon.de veya +49 89 444438879 numarasından ulaşabilirsiniz.',
    closing: 'Saygılarımızla',
    signature: 'ExtruCon Ekibiniz',
    tagline: 'Yapay Zeka Ajansı & Otomasyon'
  }
};

export async function sendBookingConfirmation(data: BookingConfirmationData): Promise<boolean> {
  const { name, email, date, time, phone, message, language = 'de' } = data;
  const t = bookingTranslations[language] || bookingTranslations.de;

  const formattedDate = new Date(date).toLocaleDateString(language === 'de' ? 'de-DE' : language === 'hr' ? 'hr-HR' : language === 'tr' ? 'tr-TR' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); padding: 30px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">ExtruCon GmbH</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">${t.tagline}</p>
      </div>
      
      <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
        <p style="font-size: 16px; color: #374151;">${t.greeting} ${name},</p>
        <p style="font-size: 16px; color: #374151;">${t.confirmation}</p>
        
        <div style="background: white; border-radius: 8px; padding: 20px; margin: 20px 0; border: 1px solid #e5e7eb;">
          <h2 style="color: #6366f1; margin-top: 0; font-size: 18px;">${t.details}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 120px;">${t.dateLabel}:</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${formattedDate}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">${t.timeLabel}:</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${time}${t.timeSuffix ? ' ' + t.timeSuffix : ''}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">${t.phoneLabel}:</td>
              <td style="padding: 8px 0; color: #111827;">${phone}</td>
            </tr>
            ` : ''}
            ${message ? `
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">${t.messageLabel}:</td>
              <td style="padding: 8px 0; color: #111827;">${message}</td>
            </tr>
            ` : ''}
          </table>
        </div>
        
        <p style="font-size: 14px; color: #6b7280; background: #fef3c7; padding: 15px; border-radius: 6px; border-left: 4px solid #f59e0b;">
          ${t.locationInfo}
        </p>
        
        <p style="font-size: 14px; color: #6b7280;">${t.contact}</p>
        
        <p style="font-size: 16px; color: #374151; margin-top: 30px;">
          ${t.closing},<br>
          <strong>${t.signature}</strong>
        </p>
      </div>
      
      <div style="background: #1f2937; padding: 20px; border-radius: 0 0 10px 10px; text-align: center;">
        <p style="color: #9ca3af; margin: 0; font-size: 12px;">
          ExtruCon GmbH | Hasenheide 8, 82256 Fürstenfeldbruck<br>
          <a href="mailto:info@extrucon.de" style="color: #8b5cf6;">info@extrucon.de</a> | 
          <a href="tel:+4989444438879" style="color: #8b5cf6;">089 444438879</a>
        </p>
      </div>
    </div>
  `;

  const textContent = `
${t.greeting} ${name},

${t.confirmation}

${t.details}:
- ${t.dateLabel}: ${formattedDate}
- ${t.timeLabel}: ${time}${t.timeSuffix ? ' ' + t.timeSuffix : ''}
${phone ? `- ${t.phoneLabel}: ${phone}` : ''}
${message ? `- ${t.messageLabel}: ${message}` : ''}

${t.locationInfo}

${t.contact}

${t.closing},
${t.signature}

---
ExtruCon GmbH | ${t.tagline}
Hasenheide 8, 82256 Fürstenfeldbruck
info@extrucon.de | 089 444438879
  `.trim();

  try {
    await transporter.sendMail({
      from: `"ExtruCon GmbH" <${process.env.SMTP_USER}>`,
      to: email,
      subject: t.subject,
      text: textContent,
      html: htmlContent,
    });

    return true;
  } catch (error) {
    console.error('Booking confirmation email failed:', error);
    return false;
  }
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  const { name, email, company, phone, service, message } = data;

  const serviceLabels: Record<string, string> = {
    ki: 'KI-Agenten & Automatisierung',
    social: 'Social Media Marketing',
    web: 'Webentwicklung',
    marketing: 'Online Marketing',
    content: 'Content & Texterstellung',
    brand: 'Markenaufbau',
    other: 'Sonstiges',
  };

  const htmlContent = `
    <h2>Neue Kontaktanfrage über extrucon.de</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">E-Mail:</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
      </tr>
      ${company ? `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Unternehmen:</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${company}</td>
      </tr>
      ` : ''}
      ${phone ? `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
      </tr>
      ` : ''}
      ${service ? `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Interesse:</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${serviceLabels[service] || service}</td>
      </tr>
      ` : ''}
      <tr>
        <td style="padding: 10px; font-weight: bold; vertical-align: top;">Nachricht:</td>
        <td style="padding: 10px; white-space: pre-wrap;">${message}</td>
      </tr>
    </table>
  `;

  const textContent = `
Neue Kontaktanfrage über extrucon.de

Name: ${name}
E-Mail: ${email}
${company ? `Unternehmen: ${company}` : ''}
${phone ? `Telefon: ${phone}` : ''}
${service ? `Interesse: ${serviceLabels[service] || service}` : ''}

Nachricht:
${message}
  `.trim();

  try {
    await transporter.sendMail({
      from: `"ExtruCon Website" <${process.env.SMTP_USER}>`,
      to: 'info@extrucon.de',
      replyTo: email,
      subject: `Kontaktanfrage von ${name}${company ? ` (${company})` : ''}`,
      text: textContent,
      html: htmlContent,
    });

    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

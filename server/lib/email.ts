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
      from: `"Extrucon Agentur" <${process.env.SMTP_USER}>`,
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

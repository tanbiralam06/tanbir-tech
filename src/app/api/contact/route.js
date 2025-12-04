import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    // Check for credentials
    if (!emailUser || !emailPass) {
      console.warn('⚠️  Email credentials missing (EMAIL_USER, EMAIL_PASS).');
      
      // In development, we can mock the success to avoid breaking the UI
      if (process.env.NODE_ENV !== 'production') {
        console.log('📝 [DEV MODE] Mocking email send:');
        console.log(`   To: social.tanbir@gmail.com`);
        console.log(`   From: ${name} <${email}>`);
        console.log(`   Message: ${message}`);
        
        return NextResponse.json(
          { message: 'Email sent successfully (MOCKED)' },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: 'Server configuration error: Missing email credentials' },
        { status: 500 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: 'social.tanbir@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

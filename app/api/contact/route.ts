import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { isim, email, telefon, mesaj } = await req.json();

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'sarpsensan@fijytech.com',
      subject: `Yeni Teklif Talebi - ${isim}`,
      html: `
        <h2>Yeni Teklif Talebi</h2>
        <p><b>İsim:</b> ${isim}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefon:</b> ${telefon}</p>
        <p><b>Mesaj:</b> ${mesaj}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Mail gönderilemedi' }, { status: 500 });
  }
}

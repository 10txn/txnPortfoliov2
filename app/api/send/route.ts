import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;
    const discordWebhook = process.env.DISCORD_WEBHOOK_URL;

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Portfolio <portfolio@10txn.xyz>',
      to: [receiverEmail!],
      replyTo: email,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (emailError) {
      console.error("Resend Error:", emailError);
      return NextResponse.json({ error: emailError }, { status: 400 });
    }

    if (discordWebhook) {
      await fetch(discordWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          embeds: [{
            title: "New Portfolio Contact Received (10txn.xyz)",
            color: 0x9333ea, // Purple to match your site
            fields: [
              { name: "Name", value: name, inline: true },
              { name: "Email", value: email, inline: true },
              { name: "Message", value: message }
            ],
            timestamp: new Date().toISOString(),
          }]
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Internal Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
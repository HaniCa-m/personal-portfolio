import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

   await transporter.sendMail({
  from: {
    name: "Hani Portfolio",
    address: process.env.SMTP_USER!,
  },

  to: process.env.CONTACT_EMAIL,

  replyTo: email,

  subject: `New Portfolio Message from ${name}`,

  html: `
    <div>
      <h2>New Contact Message</h2>

      <p>
        <strong>Name:</strong> ${name}
      </p>

      <p>
        <strong>Email:</strong> ${email}
      </p>

      <p>
        <strong>Message:</strong>
      </p>

      <p>
        ${message}
      </p>
    </div>
  `,
});

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    if (!resend) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service not configured. Please set RESEND_API_KEY environment variable.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone, date, message, formType } = body;

    const emailContent =
      formType === "booking"
        ? `
New Tour Booking Request

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Preferred Date: ${date || "Not specified"}
Message: ${message || "No additional message"}
    `
        : `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message || "No message provided"}
    `;

    const data = await resend.emails.send({
      from: "Who Dat Ranch <onboarding@resend.dev>",
      to: ["kylebanashek@yahoo.com"],
      subject:
        formType === "booking"
          ? `New Tour Request from ${name}`
          : `Contact Form: ${name}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}


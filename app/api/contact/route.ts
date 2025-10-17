import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_CTRLGpnu_Gh4gNzuCYHF5Gg3jSxcUxmDs");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, message, formType } = body;

    // Log submission
    console.log("=".repeat(60));
    console.log("📧 NEW CONTACT FORM SUBMISSION");
    console.log("=".repeat(60));
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone || "Not provided");
    console.log("Date:", date || "Not specified");
    console.log("Message:", message || "No message");
    console.log("Form Type:", formType);
    console.log("=".repeat(60));

    const emailBody = `
New Contact Form Submission from Who Dat Ranch

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Preferred Date: ${date || "Not specified"}
Message: ${message || "No additional message"}

Form Type: ${formType || "contact"}
    `;

    const data = await resend.emails.send({
      from: "Who Dat Ranch <onboarding@resend.dev>",
      to: ["kylebanashek@yahoo.com"],
      subject: `Who Dat Ranch - ${formType === "booking" ? "Tour Request" : "Contact"} from ${name}`,
      text: emailBody,
      replyTo: email,
    });

    console.log("✅ Email sent successfully via Resend:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("❌ Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

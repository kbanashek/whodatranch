import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, message, formType } = body;

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY not configured");
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service not configured. Please see EMAIL_INSTRUCTIONS.md",
        },
        { status: 500 }
      );
    }

    // Create email content
    const emailBody = `
Tour Request Details:

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Preferred Date: ${date || "Not specified"}
Message: ${message || "No additional message"}

Form Type: ${formType || "contact"}
`;

    // Use Web3Forms API - free service
    const formData = new URLSearchParams();
    formData.append("access_key", accessKey);
    formData.append(
      "subject",
      `Who Dat Ranch - ${formType === "booking" ? "Tour Request" : "Contact"} from ${name}`
    );
    formData.append("from_name", name);
    formData.append("email", email);
    formData.append("message", emailBody);
    formData.append("redirect", "https://whodatranch.vercel.app");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Web3Forms error:", data);
      throw new Error(data.message || "Failed to send email");
    }
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

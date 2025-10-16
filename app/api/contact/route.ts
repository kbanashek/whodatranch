import { NextResponse } from "next/server";

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

    // Use FormSubmit.co - completely free, zero config, no API keys needed!
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone || "Not provided");
    formData.append("date", date || "Not specified");
    formData.append("message", message || "No message");
    formData.append(
      "_subject",
      `Who Dat Ranch - ${formType === "booking" ? "Tour Request" : "Contact"} from ${name}`
    );
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    const response = await fetch(
      "https://formsubmit.co/kylebanashek@yahoo.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    );

    if (response.ok) {
      console.log("✅ Email sent successfully to kylebanashek@yahoo.com");
      return NextResponse.json({ success: true });
    } else {
      console.error("FormSubmit error:", response.status, response.statusText);
      throw new Error("Failed to send email");
    }
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

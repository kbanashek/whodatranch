import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, message, formType } = body;

    // Use Formspree - completely free, no setup required!
    const formData = {
      name: name,
      email: email,
      phone: phone || "Not provided",
      date: date || "Not specified",
      message: message || "No message",
      _subject: `Who Dat Ranch - ${formType === "booking" ? "Tour Request" : "Contact"} from ${name}`,
      _replyto: email,
    };

    const response = await fetch("https://formspree.io/f/xanyonov", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
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

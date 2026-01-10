import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, contact, message } = await request.json();

    // Validate input
    if (!name || !email || !contact || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Submit to Google Sheets
    try {
      const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, contact, message }),
      });

      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
      return NextResponse.json(
        { error: "Failed to submit form" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

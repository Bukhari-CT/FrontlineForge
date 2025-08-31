import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const {
    name,
    email,
    subject,
    subjectOther,
    deadline,
    deadlineOther,
    message,
  } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required",
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address",
    });
  }

  try {
    // For now, we'll just log the email and return success
    // In production, you would integrate with an email service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Resend
    // - EmailJS

    console.log("New contact form submission:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log(
      "Subject:",
      subject === "other" ? subjectOther : subject || "Not specified"
    );
    console.log(
      "Deadline:",
      deadline === "other" ? deadlineOther : deadline || "Not specified"
    );
    console.log("Message:", message);
    console.log("Timestamp:", new Date().toISOString());

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "urmishzaman@gmail.com", // Aapka email
        pass: "didoiazrbnjnynvk", // Wo copy kiya hua code yahan dalein
      },
    });

    const mailOptions = {
      from: email,
      to: "urmishzaman@gmail.com", // Jidhar aap message receive karna chahte hain
      subject: `New Message from Portfolio: ${name}`,
      text: `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p> 

        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
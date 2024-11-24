import { transporter } from "@/nodemailer/config";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: any) {
  const my_email = process.env.NEXT_PUBLIC_EMAIL;

  const formData = await request.formData();
  const name = formData.get("user_name");
  const email = formData.get("user_email");
  const message = formData.get("user_message");

  try {
    await transporter.sendMail({
      from: my_email,
      to: my_email,
      cc: process.env.NEXT_PUBLIC_CC,
      subject: `Portfolio 2024 nouveau message `,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({
      message: "Message envoyé avec Succès!",
    });
  } catch (err) {
    return NextResponse.json({
      message: err,
    });
  }
}

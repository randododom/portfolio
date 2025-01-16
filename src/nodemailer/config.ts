import nodemailer from 'nodemailer'

const email = process.env.NEXT_PUBLIC_EMAIL
const password = process.env.NEXT_PUBLIC_PASSWORD

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // SMTP  TLS
    secure: false, // false 587 (TLS)  True 465 (SSL)
    auth: {
        user: email,
        pass: password
    }
});

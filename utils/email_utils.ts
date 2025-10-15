'use server'; // Marks this as a Server Action

import nodemailer from 'nodemailer';

export async function sendMail(name: string, email: string, subject: string, message: string) {
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USERNAME,
            to: process.env.EMAIL, 
            subject: subject,
            text: name+" : "+email+" : "+message,
        });
        return { success: true, message: 'Mail envoyé avec succes !' };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Échec, veuillez réessayer.' };
    }
}
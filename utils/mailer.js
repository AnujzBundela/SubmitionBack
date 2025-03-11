

require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (name, userEmail, message) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS,
            },
        });

        
        const adminMailOptions = {
            from: userEmail, 
            to: process.env.EMAIL_USER, 
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${userEmail}\nMessage: ${message}`,
            replyTo: userEmail, 
        };

        await transporter.sendMail(adminMailOptions);

        
        const userMailOptions = {
            from: process.env.EMAIL_USER, 
            to: userEmail, 
            subject: "Thank You for Contacting Us",
            text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will get back to you soon.\n\nBest Regards,\nYour Company`,
        };

        await transporter.sendMail(userMailOptions);

        return { success: true, message: "Emails sent successfully" };
    } catch (error) {
        console.error("Email send error:", error);
        return { success: false, message: "Failed to send emails", error };
    }
};

module.exports = sendEmail;












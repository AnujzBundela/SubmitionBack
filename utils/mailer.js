// require("dotenv").config();
// const nodemailer = require("nodemailer");

// const sendEmail = async (name, email, message) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com",
//             port: 465,
//             secure: true, // Use SSL
//             auth: {
//                 user: process.env.EMAIL_USER, // Fetch from .env
//                 pass: process.env.EMAIL_PASS, // Fetch from .env
//             },
//         });

//         const mailOptions = {
//             to: process.env.EMAIL_USER,
//             // to: process.env.EMAIL_RECEIVER,
//             subject: "New Contact Form Submission",
//             text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//         };

//         await transporter.sendMail(mailOptions);
//         return { success: true, message: "Email sent successfully" };
//     } catch (error) {
//         console.error("Email send error:", error);
//         return { success: false, message: "Failed to send email", error };
//     }
// };

// module.exports = sendEmail;


// require("dotenv").config();
// const nodemailer = require("nodemailer");

// const sendEmail = async (name, userEmail, message) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com",
//             port: 465,
//             secure: true,
//             auth: {
//                 user: process.env.EMAIL_USER, // Your email (receiver)
//                 pass: process.env.EMAIL_PASS,
//             },
//         });

//         const mailOptions = {
//             from: userEmail, // The email entered by the user
//             to: process.env.EMAIL_USER, // Send email to YOUR main email
//             subject: "New Contact Form Submission",
//             text: `Name: ${name}\nEmail: ${userEmail}\nMessage: ${message}`,
//             replyTo: userEmail, // When you reply, it will go to the user
//         };

//         await transporter.sendMail(mailOptions);
//         return { success: true, message: "Email sent successfully" };
//     } catch (error) {
//         console.error("Email send error:", error);
//         return { success: false, message: "Failed to send email", error };
//     }
// };

// module.exports = sendEmail;

require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (name, userEmail, message) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER, // Your main email
                pass: process.env.EMAIL_PASS,
            },
        });

        // 📨 1st Email: Send to YOUR email
        const adminMailOptions = {
            from: userEmail, // The email entered by the user
            to: process.env.EMAIL_USER, // Your main email
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${userEmail}\nMessage: ${message}`,
            replyTo: userEmail, // When you reply, it will go to the user
        };

        await transporter.sendMail(adminMailOptions);

        // ✅ 2nd Email: Send Confirmation to User
        const userMailOptions = {
            from: process.env.EMAIL_USER, // Your main email
            to: userEmail, // Send email to the user who submitted the form
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












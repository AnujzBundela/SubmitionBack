

// const sendEmail = require("../utils/mailer");

// const handleContactForm = async (req, res) => {
//     try {

//         const { name, email, message } = req.body;
//         console.log("📩 Received form data:", req.body); // Debugging line

//         if (!name || !email || !message) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         // Send email
//         const result = await sendEmail(name, email, message);

//         console.log("📨 Email send result:", result); // Debugging line

//         if (result.success) {
//             return res.status(200).json({ success: result.message });
//         } else {
//             return res.status(500).json({ error: result.message });
//         }
//     } catch (error) {
//         console.error("❌ Error in handleContactForm:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// module.exports = { handleContactForm };


const sendEmail = require("../utils/mailer");

const handleContactForm = async (req, res) => {
    try {
        console.log("📩 Received form data:", req.body);

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const result = await sendEmail(name, email, message);

        console.log("📨 Email send result:", result);
        if (result.success) {
            return res.status(200).json({ success: "Emails sent successfully!" });
        } else {
            return res.status(500).json({ error: result.message });
        }
    } catch (error) {
        console.error("❌ Error in handleContactForm:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { handleContactForm };



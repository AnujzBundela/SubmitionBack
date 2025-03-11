require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/router");

const app = express();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//     res.send("Backend is working");
// });


// Middleware
app.use(express.json()); // Allows Express to parse JSON requests
app.use(cors()); // Enables cross-origin requests

// Routes
app.use("/api", contactRoutes);

app.post("/send-email", async (req, res) => {
    console.log("Received request:", req.body); // Debugging log
    res.json({ message: "Testing API response!" }); // Send a test JSON response
});


// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://0.0.0.0:${PORT}`));




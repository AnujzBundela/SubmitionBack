require("dotenv").config();
const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/router");

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); 
app.use(cors()); 
// { origin: " https://anujzbundela.github.io/Submition/" }

app.use("/api", contactRoutes);

// app.post("sendEmail", async (req, res) => {
//     console.log("Received request:", req.body); 
//     res.json({ message: "Testing API response!" }); 
// });


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))


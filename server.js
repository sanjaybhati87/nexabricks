const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/leads", async (req, res) => {

    const lead = req.body;

    console.log("Lead Received:", lead);

    /*
    Save to database here
    */

    return res.status(200).json({
        success:true,
        message:"Lead submitted successfully"
    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
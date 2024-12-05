import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors()); // Enable CORS for frontend communication

// Function to fetch pincode details
async function fetchPincodeDetails(pincode) {
    try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
        if (response.data && response.data[0] && response.data[0].PostOffice) {
            return response.data[0].PostOffice; // Return the PostOffice data
        } else {
            console.error("No data found for this pincode.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching pincode details:", error.message);
        throw error;
    }
}

// Route for fetching pincode details via API
app.get("/api/pincode/:pincode", async (req, res) => {
    try {
        const pincode = req.params.pincode;
        const data = await fetchPincodeDetails(pincode);
        if (data) {
            res.json(data);
        } else {
            res.status(404).send("No data found for this pincode.");
        }
    } catch (error) {
        res.status(500).send("Error fetching pincode details.");
    }
});

// Handle input from command-line arguments
const pincode = process.argv[2]; // Take the second argument as input
if (!pincode) {
    console.error("Please provide a pincode as a command-line argument.");
    process.exit(1);
}

fetchPincodeDetails(pincode)
    .then((data) => {
        if (data) {
            console.log("Pincode Details:", data);
        } else {
            console.log("No details found for the entered pincode.");
        }
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });

// Start the server
const port = 5000;
app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});

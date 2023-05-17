const express = require("express");
const JBmovies = require("./routes/JBmovies.js");
const cors = require("cors");

const app = express();
const port = 3009;

// Configure CORS policy
const corsOptions = {
  origin: "http://localhost:3000", // Only allow requests from http://localhost:3000
};

// Apply CORS middleware to all routes
app.use(cors(corsOptions));

// Use JSON middleware
app.use(express.json());

const validApiKey = "5"; // Replace "YOUR_API_KEY" with your actual API key

// API key authentication middleware
const authenticateApiKey = (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res
      .status(401)
      .json({ message: "Access denied! API key is missing." });
  }

  if (apiKey !== validApiKey) {
    return res.status(403).json({ message: "Invalid API key" });
  }

  next();
};

// Apply API key authentication middleware to all routes
app.use((req, res, next) => {
  authenticateApiKey(req, res, next);
});

app.get("/", (req, res) => {
  res.send("Hello my name is Bond, James!");
});

app.use("/JBmovies", JBmovies);

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
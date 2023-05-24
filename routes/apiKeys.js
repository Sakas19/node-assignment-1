const express = require('express');
const router = express.Router();
const validApiKeys = require("../validApiKeys")
//const validApiKeys = ["5", "7", "9"];

const validApiKey = validApiKeys

const authenticApiKey = (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res
      .status(401)
      .json({ message: "API key is missing" });
  }

  if (!validApiKey.includes(apiKey)) { 
    return res
     .status(403)
     .json({ message: "Invalid API key" });
  }

  next();
};


router.post("/", (req, res) => {
  const newApiKey = req.body.apiKey;

  if (!newApiKey) {
    return res
      .status(400)
      .json({ message: "API key is required" });
  }

  if (validApiKey.includes(newApiKey)) {
    return res
      .status(409)
      .json({ message: "API key " + newApiKey + " already exists" });
  }

  validApiKey.push(newApiKey);
    res
      .status(201)
      .json({ message: "API key added ,Your new apiKey is: " + newApiKey });
});


router.delete("/:apiKey", (req, res) => {
  const apiKeyToDelete = req.params.apiKey;

  if (!validApiKey.includes(apiKeyToDelete)) {
    return res
      .status(404)
      .json({ message: "API key is not found" });
  }

  validApiKeys.splice(validApiKeys.indexOf(apiKeyToDelete), 1);
    res
      .status(200)
      .json({ message: "API key " + apiKeyToDelete + " deleted successfully" });
});


router.get("/", (req, res) => {
  res.json(validApiKeys)
});

module.exports = { router, authenticApiKey };
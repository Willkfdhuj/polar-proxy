const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Polar Proxy running");
});

app.get("/proxy", async (req, res) => {
  const url = req.query.url;

  if (!url) return res.send("No URL provided");

  try {
    const response = await axios.get(url, {
      responseType: "text",
    });

    res.send(response.data);
  } catch (err) {
    res.send("Error loading page");
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

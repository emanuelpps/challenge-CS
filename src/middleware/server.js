const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "https://challenge-cs.vercel.app/",
  })
);

app.post("/api/email", async (req, res) => {
  try {
    const response = await fetch("https://api.resend.com/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer re_KWnXVUjp_AQSdsmmudb8hf5uREftM76Tx`,
      },
      body: JSON.stringify({
        from: "emanuelpages.ps@gmail.com",
        to: "emanuel737@gmail.com",
        subject: "Cuestionario para ti",
        react: req.body.reactData,
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

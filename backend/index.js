const express = require("express");
const cors = require("cors");
const pool = require("./db");
const jwt = require("jsonwebtoken");

const PORT = 5000;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/test", (req, res) => {
  res.send("Api working");
});

app.post("/login", async (req, res) => {
  const { adminID, password } = req.body;
  try {
    const admin = await pool.query("SELECT * FROM admin WHERE name=$1", [
      adminID,
    ]);
    console.log(admin);
    if (!admin.rows.length) {
      res.json({ detail: "Wrong adminID" });
    }

    const token = jwt.sign({ adminID }, "secret", { expiresIn: "1hr" });

    if (admin.rows[0].password === password) {
      res.json({ success: "Login successful", token });
    } else {
      res.json({ error: "Incorrect password" });
    }
  } catch (error) {}
});

app.listen(PORT, console.log(`Server listening on PORT ${PORT}`));

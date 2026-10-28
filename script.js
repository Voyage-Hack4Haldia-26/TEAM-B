try { require("dotenv").config(); } catch (e) {}
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/health", (req, res) =>
  res.json({ status: "ok", project: "Team B: Live Whiteboard", stack: "node" })
);

app.post("/api/rooms", (req, res) => {
  // TODO: Create a room -> {roomId}
  res.status(501).json({ error: "Not implemented", todo: "Create a room -> {roomId}" });
});

app.get("/api/rooms/:id", (req, res) => {
  // TODO: Get the current board state
  res.status(501).json({ error: "Not implemented", todo: "Get the current board state" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Team B server running on http://localhost:${PORT}`));

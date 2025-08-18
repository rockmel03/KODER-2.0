const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.send("notes created successfully");
});

app.patch("/notes/:index", (req, res) => {
  const { index } = req.params;
  notes[index] = req.body;
  res.send("notes updated successfully");
});

app.delete("/notes/:index", (req, res) => {
  const { index } = req.params;
  notes.splice(index, 1);
  res.send("notes deleted successfully");
});

app.listen("3000", () => console.log("server is listing on port 3000"));

const express = require("express");
const Note = require("./models/note.model");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "hello world", status: true, statusCode: 200 });
});

app.post("/notes", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!(title && description))
      throw new Error("title and description are required");

    const note = await Note.create({
      title,
      description,
    });

    res.send({
      message: "note created",
      status: true,
      statusCode: 201,
      data: note,
    });
  } catch (error) {
    res.send({ error: error.message, status: false, statusCode: 500 });
  }
});

app.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.send({
      message: "notes fetched success",
      status: true,
      statusCode: 200,
      data: notes,
    });
  } catch (error) {
    res.send({ error: error.message, status: false, statusCode: 500 });
  }
});

app.get("/notes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    res.send({
      message: "note fetched success",
      status: true,
      statusCode: 200,
      data: note,
    });
  } catch (error) {
    res.send({ error: error.message, status: false, statusCode: 500 });
  }
});

app.put("/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!(title && description))
      throw new Error("title and description are required");

    const note = await Note.findByIdAndUpdate(id, { title, description });
    res.send({
      message: "note update success",
      status: true,
      statusCode: 200,
      data: note,
    });
  } catch (error) {
    res.send({ error: error.message, status: false, statusCode: 500 });
  }
});

app.get("/notes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findByIdAndDelete(id);
    res.send({
      message: "note delete success",
      status: true,
      statusCode: 200,
      data: note,
    });
  } catch (error) {
    res.send({ error: error.message, status: false, statusCode: 500 });
  }
});

module.exports = app;

const express = require("express");
const {
  getAllNotes,
  createNoteController,
  updatenote,
} = require("../controllers/notes.controller");

const rouert = express.Router();

rouert.get("/allnotes", getAllNotes);
rouert.post("/create", createNoteController);
rouert.put("/update/:id", updatenote)
module.exports = rouert;

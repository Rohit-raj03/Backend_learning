const express = require("express");
const { getAllNotes } = require("../controllers/notes.controller");

const rouert = express.Router();

rouert.get("/allnotes", getAllNotes);

module.exports = rouert;

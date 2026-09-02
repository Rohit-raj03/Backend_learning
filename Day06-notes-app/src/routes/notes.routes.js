const express = require("express");
const {
  notesCreaateController,
  getAllNotesController,
} = require("../controllers/notes.controller");

const router = express.Router();
console.log("this is router");
router.post("/create", notesCreaateController);
router.get("/allnotes", getAllNotesController);

module.exports = router;

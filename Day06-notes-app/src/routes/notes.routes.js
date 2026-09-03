const express = require("express");
const {
  notesCreaateController,
  getAllNotesController,
  getSingleNote,
  updateNoteController,
} = require("../controllers/notes.controller");

const router = express.Router();
console.log("this is router");
router.post("/create", notesCreaateController);
router.get("/allnotes", getAllNotesController);
router.get("/onenote/:id", getSingleNote)
router.put("/update/:id", updateNoteController)
module.exports = router;

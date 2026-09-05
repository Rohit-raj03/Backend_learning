const { models } = require("mongoose");
const notesModel = require("../models/note.models");

//create note
const createNoteController = async (req, res) => {
  try {
    const newNotes = await notesModel.create(req.body);
    res.status(201).json({
      message: "note create successfully",
      note: newNotes,
    });
  } catch (error) {}
  try {
  } catch (error) {}
};

//read note
const getAllNotes = async (req, res) => {
  try {
    const allNotes = await notesModel.find();
    res.status(200).json({
      message: "get all notes successfully ",
      notes: allNotes,
    });
  } catch (error) {
    res.status(500).json({
      message: "error form get all notes",
      error: error.message,
    });
  }
};

//update
const updatenote = async (req, res) => {
  const id = req.params.id;
  const note = req.body;
  try {
    const updatedNote = await notesModel.findByIdAndUpdate(id, note);
    req.status(200).json({
      message: "Updated note successfully",
      note: updatedNote,
    });
  } catch (error) {
    console.log("error form updata note ");
  }
};

module.exports = { getAllNotes, createNoteController, updatenote };

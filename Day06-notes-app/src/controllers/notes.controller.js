const notesModel = require("../models/note.model");

const notesCreaateController = async (req, res) => {
  try {
    const newNotes = await notesModel.create(req.body);
    res.status(201).json({
      message: "notes crete successfully!",
      note: newNotes,
    });
  } catch (error) {
    console.log("this is create error", error.message);
  }
};

const getAllNotesController = async (req, res) => {
  try {
    const getAllNotes = await notesModel.find();
    res.status(200).json({
      message: "get all notes ",
      notes: getAllNotes,
    });
  } catch (error) {
    console.log("this error form get all notes", error);
  }
};
module.exports = { notesCreaateController, getAllNotesController };

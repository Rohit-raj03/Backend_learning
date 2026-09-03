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
//single note
const getSingleNote = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const singleNote = await notesModel.findById(id);
    res.status(200).json({
      message: "this is single user",
      note: singleNote,
    });
  } catch (error) {
    console.log("this is error form find by ID ", error);
    res.status(500).json({
      message: "Failed to get note",
      error: error.message,
    });
  }
};

//updata data by id
const updateNoteController = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  try {
    const updateNote = await notesModel.findByIdAndUpdate(id, updateData);
    res.status(200).json({
      message: "note update successfully",
      note: updateData,
    });
  } catch (error) {
    console.log("this is update error", error);
    res.status(500).json({
      message: "Faild to update note",
      error: error.message,
    });
  }
};

module.exports = {
  notesCreaateController,
  getAllNotesController,
  getSingleNote,
  updateNoteController,
};

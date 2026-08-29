const notesModel = require("../models/note.model");

const notesCreaateController = async (req, res) => {
  try {
    const newNotes = await notesModel.create(res.body);
    res.status(201).json({
      message: "notes crete successfully!",
      note: newNotes,
    });
  } catch (error) {
    console.log("this is create error", error.message);
  }
};

module.exports = notesCreaateController;

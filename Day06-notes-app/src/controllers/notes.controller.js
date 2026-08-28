const notesModel = require("../models/note.model");

const notesCreaateController = async (req, res) => {
  try {
    const newNotes = await notesModel.create(res.body);
    res.status(201).json(newNotes);
  } catch (error) {
    console.log("this is create error", error);
  }
};

module.exports = notesCreaateController;

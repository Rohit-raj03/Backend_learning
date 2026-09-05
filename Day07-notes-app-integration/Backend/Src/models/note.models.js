const { default: mongoose } = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [20, "minimum 20 charcter are required "],
  },
});

const notesModel = mongoose.model("notes", NoteSchema);
module.exports = notesModel;

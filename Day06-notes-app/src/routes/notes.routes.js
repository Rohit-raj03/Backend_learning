const express = require("express");
const notesCreaateController = require("../controllers/notes.controller");

const router = express.Router();

router.post("/create", notesCreaateController);

module.exports = router;

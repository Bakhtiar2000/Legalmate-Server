const express = require("express");
const { addPracticeArea, addPracticeAreas, getAllPracticeArea, getPracticeAreaById } = require("../controllers/practiceAreaDataController");

const practiceAreaRoute = express.Router();

practiceAreaRoute.post("/", addPracticeArea);

practiceAreaRoute.post("/many", addPracticeAreas);

practiceAreaRoute.get("/", getAllPracticeArea);

practiceAreaRoute.get("/:id", getPracticeAreaById);

module.exports = practiceAreaRoute;

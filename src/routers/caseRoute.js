const express = require("express");
const { newCase, getAllCase, getPostById, getCaseByEmail, deleteCaseById } = require("../controllers/caseDataController");

const caseRoute = express.Router();

caseRoute.post("/", newCase);

caseRoute.get("/", getAllCase);

caseRoute.get("/id/:id", getPostById);

caseRoute.get("/email/:email", getCaseByEmail);

caseRoute.delete("/delete/:id", deleteCaseById);

// caseRoute.patch("/details", updateCaseDetails);

// caseRoute.patch("/profilePhoto", updateCaseProfilePhoto);

module.exports = caseRoute;

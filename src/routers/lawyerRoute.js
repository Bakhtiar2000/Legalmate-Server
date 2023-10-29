const express = require("express");
const { addLawyer, getAllLawyer,getLawyerByEmail, getLawyer, deleteLawyer, addLawyers, updateAttorneyProfile, updateAttorneyEducation, updateAttorneyExperience, updateAttorneyAwards, updateAttorneyProfilePhoto } = require("../controllers/lawyerController");

const lawyerRoute = express.Router();

lawyerRoute.post("/", addLawyer);

lawyerRoute.post("/many/", addLawyers);

lawyerRoute.get("/", getAllLawyer);

lawyerRoute.get("/email/:email", getLawyerByEmail);

lawyerRoute.get("/:id", getLawyer);

lawyerRoute.delete("/delete/:id", deleteLawyer);

lawyerRoute.patch("/basic", updateAttorneyProfile);

lawyerRoute.patch("/education", updateAttorneyEducation);

lawyerRoute.patch("/experience", updateAttorneyExperience);

lawyerRoute.patch("/awards", updateAttorneyAwards);

lawyerRoute.patch("/profilePhoto/:id", updateAttorneyProfilePhoto);

// lawyerRoute.get("/:chatId", getMessages);

module.exports = lawyerRoute;

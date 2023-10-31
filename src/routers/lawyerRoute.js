const express = require("express");
const { addLawyer, getAllLawyer,getLawyerByEmail, getLawyer, deleteLawyer, addLawyers, updateAttorneyProfile, updateAttorneyEducation, updateAttorneyExperience, updateAttorneyAwards, updateAttorneyProfilePhoto, updateAttorneyLicense, deleteAttorneyEducation, deleteAttorneyExperience, deleteAttorneyAward, updateAttorneyReviews } = require("../controllers/lawyerController");

const lawyerRoute = express.Router();

lawyerRoute.post("/", addLawyer);

lawyerRoute.post("/many/", addLawyers);

lawyerRoute.get("/", getAllLawyer);

lawyerRoute.get("/email/:email", getLawyerByEmail);

lawyerRoute.get("/:id", getLawyer);

lawyerRoute.delete("/delete/:id", deleteLawyer);

lawyerRoute.patch("/basic", updateAttorneyProfile);

lawyerRoute.patch("/license", updateAttorneyLicense);

lawyerRoute.patch("/review", updateAttorneyReviews);

lawyerRoute.patch("/education", updateAttorneyEducation);

lawyerRoute.patch("/deleteEdu", deleteAttorneyEducation);

lawyerRoute.patch("/experience", updateAttorneyExperience);

lawyerRoute.patch("/deleteExp", deleteAttorneyExperience);

lawyerRoute.patch("/awards", updateAttorneyAwards);

lawyerRoute.patch("/deleteAwd", deleteAttorneyAward);

lawyerRoute.patch("/profilePhoto/:id", updateAttorneyProfilePhoto);

// lawyerRoute.get("/:chatId", getMessages);

module.exports = lawyerRoute;

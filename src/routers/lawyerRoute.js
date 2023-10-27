const express = require("express");
const { addLawyer, getAllLawyer,getLawyerByEmail, getLawyer, deleteLawyer, addLawyers } = require("../controllers/lawyerController");

const lawyerRoute = express.Router();

lawyerRoute.post("/", addLawyer);

lawyerRoute.post("/many/", addLawyers);

lawyerRoute.get("/", getAllLawyer);

lawyerRoute.get("/email/:email", getLawyerByEmail);

lawyerRoute.get("/:id", getLawyer);

lawyerRoute.delete("/delete/:id", deleteLawyer);

// lawyerRoute.get("/:chatId", getMessages);

module.exports = lawyerRoute;

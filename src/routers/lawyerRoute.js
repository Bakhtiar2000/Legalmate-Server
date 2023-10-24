const express = require("express");
const { addLawyer, getAllLawyer, getLawyer, deleteLawyer } = require("../controllers/lawyerController");

const lawyerRoute = express.Router();

lawyerRoute.post("/", addLawyer);

lawyerRoute.get("/", getAllLawyer);

lawyerRoute.get("/:id", getLawyer);

lawyerRoute.delete("/delete/:id", deleteLawyer);

// lawyerRoute.get("/:chatId", getMessages);

module.exports = lawyerRoute;

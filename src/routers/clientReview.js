const express = require("express");

const { getAllClientReview, newClientReview, updateClientReviewStatus } = require("../controllers/clientReviewController");
const clientReviewRoute = express.Router();

clientReviewRoute.post("/", newClientReview);

clientReviewRoute.get("/", getAllClientReview);


clientReviewRoute.patch("/updateStatus/:id", updateClientReviewStatus);

// clientReviewRoute.get("/:chatId", getMessages);

module.exports = clientReviewRoute;

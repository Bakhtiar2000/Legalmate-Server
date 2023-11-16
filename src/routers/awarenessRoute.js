const express = require("express");
const { newPost, getAllPost, getPostById, newPosts } = require("../controllers/awarenessController");

const awarenessRoute = express.Router();

awarenessRoute.post("/", newPost);

awarenessRoute.post("/many", newPosts);

awarenessRoute.get("/", getAllPost);

awarenessRoute.get("/:id", getPostById);

module.exports = awarenessRoute;

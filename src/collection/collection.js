const { default: mongoose } = require("mongoose");
const chatModel = require("../models/chatModel");
const messageModel = require("../models/messageModel");

const chatCollection = new mongoose.model("chats", chatModel);
const messageCollection = new mongoose.model("message", messageModel);
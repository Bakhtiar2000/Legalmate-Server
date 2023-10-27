const { default: mongoose } = require("mongoose");
const chatModel = require("../models/chatModel");
const messageModel = require("../models/messageModel");
const reviewModel = require("../models/reviewModel");
const lawyerDataMOdel = require("../models/lawyerDataModel");
const userDataModel = require("../models/userDataModel");

const chatCollection = new mongoose.model("chats", chatModel);

const messageCollection = new mongoose.model("message", messageModel);

const reviewCollection = new mongoose.model("reviews", reviewModel);

const lawyerCollection = new mongoose.model("attorneys", lawyerDataMOdel);

const userCollection = new mongoose.model("user", userDataModel);

module.exports = { chatCollection, messageCollection, reviewCollection, lawyerCollection ,userCollection }
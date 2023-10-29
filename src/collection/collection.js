const { default: mongoose } = require("mongoose");
const chatModel = require("../models/chatModel");
const messageModel = require("../models/messageModel");
const reviewModel = require("../models/reviewModel");
const lawyerDataMOdel = require("../models/lawyerDataModel");
const userDataModel = require("../models/userDataModel");
const paymentDataModel = require("../models/paymentDataModel");
const practiceAreaDataModel = require("../models/practiceArea");

const chatCollection = new mongoose.model("chats", chatModel);

const messageCollection = new mongoose.model("message", messageModel);

const reviewCollection = new mongoose.model("reviews", reviewModel);

const lawyerCollection = new mongoose.model("attorneys", lawyerDataMOdel);

const practiceCollection = new mongoose.model("practiceArea", practiceAreaDataModel);

const userCollection = new mongoose.model("user", userDataModel);

const paymentCollection = new mongoose.model("payment", paymentDataModel);

module.exports = { chatCollection, messageCollection, reviewCollection, lawyerCollection ,practiceCollection,userCollection ,paymentCollection}
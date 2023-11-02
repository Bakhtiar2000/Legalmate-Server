const { caseCollection } = require("../collection/collection");

const newCase = async (req, res) => {
    const newData = req.body;
    console.log(newData)
    try {
        const insertPost = await caseCollection(newData).save();
        res.status(200).json(insertPost)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const getAllCase = async (req, res) => {
    console.log("result")
    try {
        const result = await caseCollection.find();
        // console.log(result)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
const getPostById = async (req, res) => {
    console.log("result id")
    try {
        const result = await caseCollection.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
const getCaseByEmail = async (req, res) => {

    try {
        const result = await caseCollection.find({ email: req.params.email });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteCaseById = async (req, res) => {
    console.log("delete id" , req.params.id)
    try {
        const result = await caseCollection.findByIdAndDelete(req.params.id);
        console.log("delete " , result)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getAllCase, getCaseByEmail, getPostById, newCase ,deleteCaseById
}
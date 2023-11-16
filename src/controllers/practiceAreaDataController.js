const { practiceCollection } = require("../collection/collection");



const addPracticeArea = async (req, res) => {
    const newData = req.body
    console.log(newData)
    try {
        const result = await practiceCollection(newData).save()
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
const addPracticeAreas = async (req, res) => {
    const newData = req.body
    try {
        const result = await practiceCollection.insertMany(newData)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
const getAllPracticeArea = async (req, res) => {
    try {
        const result = await practiceCollection.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
const getPracticeAreaById = async (req, res) => {
    const id=req.params.id
    try {
        const result = await practiceCollection.findById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}



module.exports = { addPracticeArea,addPracticeAreas, getAllPracticeArea ,getPracticeAreaById
}
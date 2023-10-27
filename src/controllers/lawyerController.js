const { lawyerCollection } = require("../collection/collection");

const addLawyer = async (req, res) => {
    const newData = req.body
    try {
        const result = await lawyerCollection(newData).save()
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
const addLawyers = async (req, res) => {
    const newData = req.body
    try {
        const result = await lawyerCollection.insertMany(newData)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}


const getAllLawyer = async (req, res) => {
    try {
        const result = await lawyerCollection.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getLawyer = async (req, res) => {
    const id=req.params.id
    try {
        const result = await lawyerCollection.findById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
const getLawyerByEmail = async (req, res) => {
    const email=req.params.email
    try {
        const result = await lawyerCollection.findOne({email:email});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteLawyer = async (req, res) => {
    const id=req.params.id
    try {
        const result = await lawyerCollection.findByIdAndDelete()(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}






module.exports = { addLawyer,addLawyers, getAllLawyer ,getLawyer,getLawyerByEmail,deleteLawyer}
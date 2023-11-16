const { awarenessCollection } = require("../collection/collection");

const newPost = async (req, res) => {
    const newData = req.body;
    console.log(newData)
    try {
        const insertPost = await awarenessCollection(newData).save();
        res.status(200).json(insertPost)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const newPosts = async (req, res) => {
    const newData = req.body;
    console.log(newData)
    try {
        const insertPost = await awarenessCollection.insertMany(newData);
        res.status(200).json(insertPost)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAllPost = async (req, res) => {
    console.log("result")
    try {
        const result = await awarenessCollection.find();
        // console.log(result)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getPostById = async (req, res) => {
    console.log("result id")
    try {
        const result = await awarenessCollection.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}



const deletePostById = async (req, res) => {
    console.log("update id", req.params.id)
    try {
        const result = await awarenessCollection.findByIdAndDelete(req.params.id);
        console.log("delete ", result)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    getAllPost, getPostById, newPost, deletePostById, newPosts
}
const { ourReviewsCollection } = require("../collection/collection");


const newClientReview = async (req, res) => {
    const newData = req.body
    console.log("newData", newData)
    try {
        const result = await ourReviewsCollection.insertMany(newData)
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}



const getAllClientReview = async (req, res) => {
    try {
        const result = await ourReviewsCollection.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
const updateClientReviewStatus = async (req, res) => {
    // console.log("req.params.id")
    try {
        const result = await ourReviewsCollection.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    status: req.body.status,
                },
            },
            { new: true }
        )
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getAllClientReview, newClientReview, updateClientReviewStatus
}
const { default: mongoose } = require("mongoose");

const reviewModel = new mongoose.Schema(
    {
        name: String,
        img: String,
        job: String,
        review: String,
        status: {
            type: String,
            default: "pending"
        }
    },
    {
        timestamps: true
    }
);

module.exports = reviewModel
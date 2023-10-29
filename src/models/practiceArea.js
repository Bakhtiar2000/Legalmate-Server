const { default: mongoose } = require("mongoose");

const practiceAreaDataModel = new mongoose.Schema(
   
    {
        name: String,
        img: String,
        attorneys: Number,
        content: [String],
        
    },
    {
        timestamps: true
    }
);

module.exports = practiceAreaDataModel
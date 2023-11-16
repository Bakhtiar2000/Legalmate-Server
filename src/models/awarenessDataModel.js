const { default: mongoose } = require("mongoose");

const awarenessDataModel = new mongoose.Schema(
          
    {
        blog: String,
        practiceArea: String,
        title: String,
        thumbnail: String,
        video: String,
        read_time: Number
       
    },
    {
        timestamps: true
    }
);

module.exports = awarenessDataModel
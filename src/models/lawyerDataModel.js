const { default: mongoose } = require("mongoose");

const lawyerDataMOdel = new mongoose.Schema(
   
    {
        name: String,
        img: String,
        practiceArea: String,
        about: String,
        solverCase: Number,
        workArea: String,
        facebook: String,
        linkedin: String,
        twitter: String,
        email: String,
        clintReview: Array,
        runningSerial:Number,
        experience:String,
        hourlyRate:Number,
        consultationHours:String,
        specializations:String,
        awards:String
    },
    {
        timestamps: true
    }
);

module.exports = lawyerDataMOdel
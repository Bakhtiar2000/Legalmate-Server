const { default: mongoose } = require("mongoose");

const lawyerDataMOdel = new mongoose.Schema(
   
    {
        name: String,
        img: String,
        about: String,
        practiceArea: String,
        contact: String,
        location: String,
        hourly_rate: String,
        rating: String,
        license: Array,
        experience: Array,
        education: Array,
        reviews: Array,
        awards: Array,
        solverCase: Number,
        workArea: String,
        facebook: String,
        linkedin: String,
        twitter: String,
        email: String,
        runningSerial:Number,
        consultationHours:String,
        specializations:String,
    },
    {
        timestamps: true
    }
);

module.exports = lawyerDataMOdel
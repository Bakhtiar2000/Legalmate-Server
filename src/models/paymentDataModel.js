const mongoose = require("mongoose");

const paymentDataModel = new mongoose.Schema({



    attorneyID: {
        type: String,
        require: true,
    },
    attorneyName: {
        type: String,
        require: true,
    },
    attorneyEmail: {
        type: String,
        require: true,
    },
    clintName: {
        type: String,
        require: true,
    },
    clintId: {
        type: String,
        require: true,
    },
    clintEmail: {
        type: String,
        require: true,
    },
    caseFile: {
        type: String,
        require: true,
    },
    caseCategory: {
        type: String,
        require: true,
    },
    amount: {
        type: Number,
        require: true,
    },
    tran_id: {
        type: String,
        require: true,
    },
    paymentDate: {
        type: Date,
        default: Date.now
    },
    isPaid: {
        type: Boolean,
        required: true
    }


});

module.exports = paymentDataModel;

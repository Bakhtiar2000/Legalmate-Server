const { default: mongoose } = require("mongoose");

const appointmentModel = new mongoose.Schema(
    {
        lawyerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Lawyer",
            required: true
        },
        clientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Client",
            required: true
        },
        appointmentDate: {
            type: Date,
            required: true
        },
        timeSlot: {
            type: String, // example: "10:00 AM - 10:30 AM"
            required: true
        },
        status: {
            type: String,
            enum: ["pending", "confirmed", "completed", "cancelled"],
            default: "pending"
        },
        notes: {
            type: String
        },
        createdBy: {
            type: String,
            enum: ["client", "lawyer"],
            required: true
        },
        isPaid: {
            type: Boolean,
            default: false
        },
        paymentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Payment"
        }
    },
    {
        timestamps: true
    }
);

appointmentModel.index({ lawyerId: 1, appointmentDate: 1, timeSlot: 1 }, { unique: true });

module.exports = appointmentModel

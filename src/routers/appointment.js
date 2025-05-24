const express = require("express");
const {
    createAppointment,
    getAllAppointments,
    getAppointmentsByLawyerEmail,
    getAppointmentsByUserEmail,
    updateAppointmentStatus,
    rescheduleAppointment,
    cancelAppointment,
    deleteAppointment,
    checkSlotAvailability,
} = require("../controllers/appointmentController");

const appointmentRoute = express.Router();

appointmentRoute.post("/", createAppointment);

appointmentRoute.get("/", getAllAppointments);

appointmentRoute.get("/lawyer/:email", getAppointmentsByLawyerEmail);

appointmentRoute.get("/user/:email", getAppointmentsByUserEmail);

appointmentRoute.patch("/status", updateAppointmentStatus);

appointmentRoute.patch("/reschedule", rescheduleAppointment);

appointmentRoute.patch("/cancel/:id", cancelAppointment);

appointmentRoute.delete("/delete/:id", deleteAppointment);

appointmentRoute.post("/check-slot", checkSlotAvailability);

module.exports = appointmentRoute;

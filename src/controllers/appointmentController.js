const { appointmentCollection } = require("../collection/collection");

// Create a new appointment
const createAppointment = async (req, res) => {
    try {
        const newAppointment = new appointmentCollection(req.body);
        const result = await newAppointment.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all appointments
const getAllAppointments = async (req, res) => {
    try {
        const result = await appointmentCollection.find().populate('lawyerId clientId');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get appointments by lawyerId
const getAppointmentsByLawyerId = async (req, res) => {
    const lawyerId = req.params.id;
    try {
        const result = await appointmentCollection.find({ lawyerId }).populate('clientId');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get appointments by clientId
const getAppointmentsByClientId = async (req, res) => {
    const clientId = req.params.id;
    try {
        const result = await appointmentCollection.find({ clientId }).populate('lawyerId');
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update appointment status
const updateAppointmentStatus = async (req, res) => {
    const { appointmentId, newStatus } = req.body;
    try {
        const result = await appointmentCollection.findByIdAndUpdate(
            appointmentId,
            { $set: { status: newStatus } },
            { new: true }
        );
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Reschedule appointment
const rescheduleAppointment = async (req, res) => {
    const { appointmentId, newDate, newTimeSlot } = req.body;
    try {
        const result = await appointmentCollection.findByIdAndUpdate(
            appointmentId,
            {
                $set: {
                    appointmentDate: newDate,
                    timeSlot: newTimeSlot
                }
            },
            { new: true }
        );
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Cancel appointment
const cancelAppointment = async (req, res) => {
    const appointmentId = req.params.id;
    try {
        const result = await appointmentCollection.findByIdAndUpdate(
            appointmentId,
            { $set: { status: "cancelled" } },
            { new: true }
        );
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete appointment
const deleteAppointment = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await appointmentCollection.findByIdAndDelete(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Check appointment slot availability
const checkSlotAvailability = async (req, res) => {
    const { lawyerId, appointmentDate, timeSlot } = req.body;
    try {
        const existing = await appointmentCollection.findOne({
            lawyerId,
            appointmentDate,
            timeSlot,
            status: { $ne: "cancelled" }
        });

        if (existing) {
            return res.status(200).json({ available: false, message: "Slot is already booked" });
        }

        res.status(200).json({ available: true, message: "Slot is available" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createAppointment,
    getAllAppointments,
    getAppointmentsByLawyerId,
    getAppointmentsByClientId,
    updateAppointmentStatus,
    rescheduleAppointment,
    cancelAppointment,
    deleteAppointment,
    checkSlotAvailability
};

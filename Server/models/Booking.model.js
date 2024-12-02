const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    user_id: String,
    user_name: String,
    provider: Number,
    reason: String,
    notes: String,
    appointment_timestamp: Date
},
    { timestamps: true }
)

const BookingSystem = mongoose.model('Booking', bookingSchema);


module.exports = BookingSystem;
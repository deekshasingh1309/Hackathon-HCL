const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    user_id: String,
    user_name: String,
    provider: String,
    reason: String,
    notes: String
},
    { timestamps: true }
)

const BookingSystem = mongoose.model('Booking', bookingSchema);


module.exports = BookingSystem;
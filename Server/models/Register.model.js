const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
    user_name: String,
    password: String,
    email_id: String,
    role: String
},
    { timestamps: true }
)

const Register = mongoose.model('Register', registerSchema);


module.exports = Register;
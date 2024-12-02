const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const Register = require('../models/Register.model');
dotenv.config();

exports.createUser = async (req, res) => {
    console.log('Register page');
    const userData = new Register(req.body);
    await userData.save();
    res.status(201).json({"message" : "Registered successfully" });
}
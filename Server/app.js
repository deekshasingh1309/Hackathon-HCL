const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./routes');
const cryptoJS = require('crypto-js');
const Register = require('./models/Register.model');
const Booking = require('./models/Booking.model');
const jwt = require('jsonwebtoken');
require('./dbConnection/connect');
require('dotenv').config();

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

app.get('/health' , async(req, res) => {
    console.log('Health check passed');
    res.json({ message : "Health check passed"});
});

/********* Registration Screen *********/
app.post('/register' , async (req, res) => {
    console.log("Registration ====>");
    const userData = new Register(req.body);
    await userData.save();
    res.status(201).json({"message" : "Registered successfully" });
});

/********** Login Screen ******/
app.post('/login' , async (req, res) => {
    console.log("Login =========>");
    const { email_id, password } = req.body;

    try {
        // Decrypt the password
        const decryptedBytes = cryptoJS.AES.decrypt(password, process.env.ENCRYPT_SECRETKEY);
        const decryptedPassword = decryptedBytes.toString(cryptoJS.enc.Utf8);
        console.log('decryptedPassword', decryptedPassword);
        const isMatch = await Register.find({ "email_id" : email_id});
        const comparePassword = isMatch[0].password === password;
            if (comparePassword) {
                const token = jwt.sign({ email_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.json({ token: token, email_id: email_id});
            } else {
                res.status(401).json({ message: 'Invalid email/password' });
            }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

/******* Booking System ********/
app.post('booking', async(req, res) => {
   console.log("Booking System =========>");
   const bookingData = new Booking(req.body);
   await bookingData.save();
   res.status(200).json({ message : "Appointment Booked Successfully"});
});

app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`));
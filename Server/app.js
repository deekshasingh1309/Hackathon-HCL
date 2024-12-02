const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Import the combined routes
const routes = require('./routes');

// Use the routes
app.use('/', routes);

const db = mongoose.connection;
db.on('error', console.error.bind(console, "error in connecting"));
db.once('open', () => console.log('Connected to mongo db'));
// Import the combined routes
const routes = require('./routes');

app.get('/health' , async(req, res) => {
    console.log('Health check passed');
    res.json({ message : "Health check passed"});
});

app.get('/register' , async(req, res) => {
    console.log('Register page');
    const userData = new Register(req.body);
    await userData.save();
    res.status(201).send();
})


app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`));
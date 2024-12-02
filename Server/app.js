const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 5000;
app.use(bodyParser.json());
app.use(cors());

app.get('/register' ,  (req, res) => {
    console.log("Hello healthcare");
})
app.listen(PORT, () => console.log(`Server listening on port : ${PORT}`));
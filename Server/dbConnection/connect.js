
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, "error in connecting"));
db.once('open', () => console.log('Connected to mongo db'));

module.exports = db;
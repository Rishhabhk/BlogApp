const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("db connetec successfuly"))
    .catch((error) => {
        console.log("not connected");
        process.exit(1);
    })
}

module.exports = connectWithDb;
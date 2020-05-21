const mongoose = require("mongoose");

const Role = mongoose.model(
    "ROLE",
    new mongoose.Schema({
        name: String
    })
);

module.exports = Role;
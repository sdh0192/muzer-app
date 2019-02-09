const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Base = require('./AccountBase');

const GoogleAccountSchema = new Schema({
    
    googleId: { type: String, required: true }
});

let GoogleAccount = Base.discriminator("GoogleAccount", GoogleAccountSchema);
module.exports = GoogleAccount;
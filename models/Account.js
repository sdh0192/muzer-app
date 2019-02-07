const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Base = require('./AccountBase');

const AccountSchema = new Schema({
    
    password: { type: String, required: true }
});

let Account = Base.discriminator("Account", AccountSchema);
module.exports = Account;
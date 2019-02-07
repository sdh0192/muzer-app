const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    
    email: { type: String, required: true },
    
    password: { type: String, required: true },
    
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
});

let Account = mongoose.model("Account", AccountSchema);
module.exports = Account;
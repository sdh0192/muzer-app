const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountBaseSchema = new Schema({
    
    email: { type: String, required: true },
    
    profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
},
{ collection : 'accounts', discriminatorKey : '_type' });

let Account = mongoose.model("AccountBase", AccountBaseSchema);
module.exports = Account;
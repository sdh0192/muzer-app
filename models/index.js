const mongoose = require("mongoose");

module.exports = {
    AccountBase: require('./AccountBase'),
    Account: require('./Account'),
    GoogleAccount: require('./GoogleAccount'),
    Profile: require('./Profile'),
    Musician: require('./Musician'),
    Band: require('./Band'),
    Venue: require('./Venue')
};
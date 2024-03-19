const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : true,
    },
    password : String,
    hostedEvents : [mongoose.Schema.Types.ObjectId],
})

const User = mongoose.model("User",userSchema);

module.exports = User;
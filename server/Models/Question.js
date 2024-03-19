const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    type : {
       type : String,
       required : true
    },
    question : {
        type : String,
        required : true,
    },
    options : {
        type : [mongoose.Schema.Types.Mixed],
    },
    answers : {
        type : [String],
        required : true,
    },
    eventCode : {
        type : String,
        required : true,
    }
})

const Question = mongoose.model("Question",questionSchema);

module.exports = Question;
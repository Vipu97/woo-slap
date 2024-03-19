const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "My new Event",
    },
    eventCode: {
        type: String,
        unique: true,
    },
    organiser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: Date,
        required: true,
    },
    responses: {
        type: [{
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            response : [mongoose.Schema.Types.Mixed],
        }]
    }
})

const Event = new mongoose.model('Event', eventSchema);

module.exports = Event;
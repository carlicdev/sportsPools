const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const poolSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Choose a name for your pool']
    },
    commish: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    participants: {
        type: [ObjectId],
        ref: 'User'
    },
    league: {
        type: String,
        required: [true, 'Please choose a league']
    }
});

module.exports = model('Pool', poolSchema);
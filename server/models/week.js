const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const weekSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Type a name for this week']
    },
    matches: {
        type: [ ObjectId ],
        required: true
    }
});

module.exports = model('Week', weekSchema);
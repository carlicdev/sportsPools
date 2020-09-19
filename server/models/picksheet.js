const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const picksheetSchema = new Schema({
    pool_id: {
        type: ObjectId,
        ref: 'Pool'
    },
    user_id: {
        type: ObjectId,
        ref: 'User'
    },
    picks: {
        type: [ ObjectId ],
        ref: 'Match'
    }
});

module.exports = model('Picksheet', picksheetSchema);
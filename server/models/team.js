const { Schema, model } = require('mongoose');

const teamSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Choose a name for the team']
    },
    city: {
        type: String,
        required: [true, 'Choose a city for the team']
    },
    division: {
        type: String,
    },
    conference: {
        type: String,
    },
    record: {
        type: String,
        default: '0-0-0'
    },
    teamImageUrl: {
        type: String
    }
});

module.exports = model('Team', teamSchema);


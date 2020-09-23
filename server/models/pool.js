const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;

const poolSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Choose a name for your pool'],
        unique: true
    },
    slug: {
        type: String,
        required: true
    },
    commish: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    participants: [{
        userId: { type: ObjectId, ref: 'User'},
        record: {
            wins: {type: Number, default: 0},
            losses: {type: Number, default: 0},
            draws: {type: Number, default: 0},
        }
    }],
    league: {
        type: String,
        required: [true, 'Choose a league']
    }
});

// Schema plugins
poolSchema.plugin(deepPopulate, {
    populate: {
        'participants.userId': {
            select: 'username'
        }
    }
});

poolSchema.pre('validate', function(next) {
    if (this.name) {
        this.slug = this.name.toLowerCase().replace(/ /g, '-');
    }
    next();
})

module.exports = model('Pool', poolSchema);
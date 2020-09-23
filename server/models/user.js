const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { ObjectId } = Schema.Types;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Choose a username'],
        unique: true
    },
    firstname: {
        type: String,
        required: [true, 'Include your firstname']
    },
    lastname: {
        type: String,
        required: [true, 'Include your lastname']
    },
    email: {
        type: String,
        required: [true, 'Include a valid email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Include a secure password'],
        minlength: [6, 'Password must be at least 6 characters long']
    },
    role: {
        type: String,
        default: 'user'
    },
    pools: [{
        pool: {type: ObjectId, ref: 'Pool'}
    }]
});

// Schema methods
userSchema.methods = {
    checkPassword: function(password) {
        return bcrypt.compareSync(password, this.password)
    },

    hashPassword: function(password) {
        return bcrypt.hashSync(password, 10)
    }
};

// Hash password pre save
userSchema.pre('save', function(next) {
    if (!this.password) {
        next();
    } else {
        this.password = this.hashPassword(this.password);
        next();
    }
});

module.exports = model('User', userSchema);
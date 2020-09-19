const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

// new localStrategy
const strategy = new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    },
    // callback
    async function(username, password, done) {
        // find user in database
        await User.findOne({username}, (err, user) => {
            // if err
            if (err) {
                return done(err);
            }
            // not user
            if (!user) {
                return done(null, false, {msg: 'incorrect username'});
            }
            // wrong password
            if (!user.checkPassword(password)) {
                return done(null, false, {msg: 'incorrect password'});
            }
            // success
            return done(null, user);
        });
    }
);

module.exports = strategy;
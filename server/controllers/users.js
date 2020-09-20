const User = require('../models/user');
const { handleErrors } = require('../lib/helpers')

exports.get_user = async (req, res) => {
    if (req.user) {
        res.status(200).json({user: req.user.username});
    } else {
        res.status(200).json({user: null});
    }
};

// signup user
exports.signup = async (req, res) => {
    try {
        await new User(req.body).save();
        res.status(201).json({msg: 'Thank you for registering'})
    } catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
};

exports.login = (req, res) => {
    res.sendStatus(200);
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.status(200).json({user: null})
};
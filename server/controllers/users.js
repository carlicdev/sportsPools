const User = require('../models/user');
const { handleErrors } = require('../lib/helpers')

exports.get_all_users = async (req, res) => {
    const users = await User.find();
    res.send({users})
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
    res.send('Hello from login');
};

exports.logout = (req, res) => {
    res.send('Hello from logout');
};
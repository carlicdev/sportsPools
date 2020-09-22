const Week = require('../models/week');

// Get all weeks
exports.get_all_weeks = (req, res) => {
    res.send('Hi from get_all_weeks')
}

// Post new week
exports.post_new_week = (req, res) => {
    res.send('Hi from post_new_week')
}

// Update week
exports.update_week = (req, res) => {
    res.send('Hi from update_week')
}

// Delete week
exports.delete_week = (req, res) => {
    res.send('Hi from delete_week')
}
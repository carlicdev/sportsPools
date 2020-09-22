
const Team = require('../models/team');

// Get all teams
exports.get_all_teams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json({teams});
    } catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
};

// create new team
exports.new_team = async (req, res) => {
    try {
        const newTeam = await new Team(req.body).save();
        res.status(201).json({newTeam});
    } catch(err) {
        console.log(err);
        res.sendStatus(400);
    }
};

// update team
exports.update_team = (req, res) => {
    res.send('Hello from update_team');
};

// delete team
exports.delete_team = (req, res) => {
    res.send('Hello from delete_team');
};
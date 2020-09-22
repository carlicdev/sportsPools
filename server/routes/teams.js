const { Router } = require('express');
const router = Router();

const teamsController = require('../controllers/teams');

// Get all teams
router.get('/', teamsController.get_all_teams);

// Create new team
router.post('/new-team', teamsController.new_team);

// Update team
router.put('/:id', teamsController.update_team);

// Delete team
router.delete('/:id', teamsController.delete_team);

module.exports = router;
const {Router } = require('express');
const router = Router();

const weeksController = require('../controllers/weeks');

// Get all weeks
router.get('/', weeksController.get_all_weeks);

// Post new week
router.post('/new-week', weeksController.post_new_week);

// Update week
router.put('/:id', weeksController.update_week);

// Delete week
router.delete('/:id', weeksController.delete_week);

module.exports = router;
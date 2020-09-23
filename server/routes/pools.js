const { Router } = require('express');
const router = Router();
const { isAuthenticated } = require('../lib/helpers');
const poolsController = require('../controllers/pools');

// Get all pools
router.get('/', poolsController.get_all_pools);

// Get single pool
router.get('/:slug', poolsController.get_single_pool);

// Create new pool
router.post('/new-pool', isAuthenticated, poolsController.new_pool);

// Join pool
router.put('/join-pool', isAuthenticated, poolsController.join_pool);

// Update pool
router.put('/update-pool/:id', poolsController.update_pool);

// Delete pool
router.delete('/delete-pool/:id', poolsController.delete_pool);

module.exports = router;
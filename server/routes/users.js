const { Router } = require('express');
const router = Router();

const passport = require('../passport/passport');
const userController = require('../controllers/users');

// get all
router.get('/', userController.get_all_users);

// register
router.post('/signup', userController.signup);

// Login user
router.post('/login', passport.authenticate('local'), userController.login);

// Logout user
router.get('/logout', userController.logout);

// Update user

module.exports = router;
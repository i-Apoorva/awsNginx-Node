var express = require('express');
var router = express.Router();
var authController = require('../controllers/AuthController');
var authMiddleware = require('../middleware/authMiddleware');
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/validate', authController.validate_token);
router.get('/auth/signout', authMiddleware.Validate,authController.signout)

module.exports = router;
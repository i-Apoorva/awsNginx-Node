var express = require('express');
var router = express.Router();
var authController = require('../controllers/AuthController');
var helloController = require('../controllers/helloController');
var authMiddleware = require('../middleware/authMiddleware');
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.post('/auth/validate', authController.validate_token);
router.post('/auth/signout', authController.signout)
router.get('/hello', authMiddleware.Validate, helloController.simple_hello);

module.exports = router;
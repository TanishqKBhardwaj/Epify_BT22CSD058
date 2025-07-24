const express = require('express');
const router = express.Router();
const authController = require('../controllers/user');

router.post('/', authController.login);         // POST /login
router.post('/register', authController.register);  // POST /login/register (used by script)

module.exports = router;

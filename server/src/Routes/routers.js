const express = require('express');
const { CreaterUser } = require('../controller/UserController.js')
const router = express.Router()

router.post('/CreaterUser', CreaterUser)

module.exports = router;
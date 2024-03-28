const express = require('express')
const router = express.Router()
const controller = require('../controller/userController')

router.post('/registerUser', controller.postregisterUser )

module.exports = router;
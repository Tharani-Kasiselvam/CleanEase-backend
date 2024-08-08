const express = require('express')
const router = express.Router()

const loginController = require('../contollers/loginController')

router.post('/login',loginController.login)
// router.post('/logout', auth.checkAuth, userController.logout); // POST /users/logout

//export router
module.exports = router
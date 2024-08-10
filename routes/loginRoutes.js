const express = require('express')
const router = express.Router()

const loginController = require('../contollers/loginController')

router.post('/login',loginController.login)
// router.post('/logout', auth.checkAuth, loginController.logout); // POST /users/logout
router.post('/logout', loginController.logout); // POST /users/logout

//export router
module.exports = router
const express = require('express')
const router = express.Router()

const pwdresetController = require('../contollers/pwdresetContoller')

router.post('/forgotpwd',pwdresetController.createToken)
router.post('/password-reset/:userId/:tokenStr',pwdresetController.passwordReset)

module.exports = router
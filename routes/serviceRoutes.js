const express = require('express')
const servicesController = require('../contollers/cleanServicesController')

const router = express.Router()

router.get('/services',servicesController)

module.exports = router
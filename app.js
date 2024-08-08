const morgan = require('morgan')
const cors = require('cors')
const cookieparser = require('cookie-parser')
const express = require('express')
const serviceRoutes = require('./routes/serviceRoutes')
const registerRoutes = require('./routes/registerRoutes')
const passwordResetRoutes = require('./routes/passwordResetRoutes')
const loginRoutes = require('./routes/loginRoutes')

const config = require('./utils/config')

const app = express()

app.use(cors())
app.use(cookieparser())
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/',serviceRoutes)
app.use('/', registerRoutes);
app.use('/', passwordResetRoutes);
app.use('/', loginRoutes);

app.get('/', (req,res)=>{
    res.send("Welcome to CleanEase App")
})

module.exports = app
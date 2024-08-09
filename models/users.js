const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    {
        firstname : String,
        lastname : String,
        email : String,
        password : String,
        is_active : {
            type : String,
            default : "I"
        },
        short_url : String,
        address : String,
        mobilenum : String
    },
    {
        collection : 'Users',
        versionKey : false
    }
)

module.exports = mongoose.model('Users',usersSchema,'users')
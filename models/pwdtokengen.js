const mongoose = require('mongoose')

const pwdokengenSchema = new mongoose.Schema(
    {
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'users'
        },
        tokenStr : String,
        createdAt : {
            type : Date,
            default : Date.now,
            expires : 36000
        }
    },
    {
        collection : 'Pwdtokengen',
        versionKey : false
    }
)
module.exports = mongoose.model('Pwdtokengen',pwdokengenSchema,'pwdtokengen')
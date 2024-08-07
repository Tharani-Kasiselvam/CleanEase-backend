const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    service_name : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    location : {
        type : Array,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    offer_price : {
        type : String,
        required : true
    },
    inclusions : {
        type : Array,
        required : true
    },
    exclusions : {
        type : Array,
        required : true
    },
    available_days : {
        type : String,
        required : true
    }, 
    available_time : {
        type : Array,
        required : true
    }, 
    duration : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('cleaning_services',serviceSchema)
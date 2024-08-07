// import dotenv from 'dotenv'
const serviceModel = require('../models/serviceModel')

// dotenv.config()

const servicesController = async (req,res) => {
    try{
        // const service = "HC"
        // res.send("testing Services list")
        const services_list = await serviceModel.find()
        res.status(200).send({services_list})
    }catch(error){
        console.log(error)
        res.status(400).send({error})
    }
}
module.exports = servicesController;
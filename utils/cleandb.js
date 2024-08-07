import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config

const connectToDB = async () => {
    try{
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MONGODB: ", conn.connection.host)
    }catch(error){
        console.log('connection error: ',error)
    }
}

export default connectToDB
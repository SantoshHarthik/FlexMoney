require('dotenv').config()
const conn=process.env.url

const mongoose= require('mongoose')

const connectDB= async()=>{
    try {
        await mongoose.connect(conn)
        // console.log('connected');
    } catch (error) {
        console.log(error);
    }
}
module.exports= connectDB
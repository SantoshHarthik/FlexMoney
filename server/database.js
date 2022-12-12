require('dotenv').config()
const conn=process.env.url

const mongoose= require('mongoose')

const connectDB= async()=>{
    try {
        await mongoose.connect(conn)
        // console.log('connected');
    } catch (error) {
        res.send(error);
    }
}
module.exports= connectDB
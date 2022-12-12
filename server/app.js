const express= require('express')
const mongoose= require('mongoose')
const bodyparser= require('body-parser')
const cors= require('cors')
const router=require('./routes')
const app= express()
const connectDB= require('./database')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
mongoose.set('strictQuery', false);


app.use(router)
connectDB()



app.listen(8000)  
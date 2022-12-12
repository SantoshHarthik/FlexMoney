const mongoose= require('mongoose')
mongoose.Promise = global.Promise
const usersschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
    },
    batch:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    },
    date:{
        // type:Date,
        type:String,
    }
})


const users=mongoose.model('users',usersschema)

module.exports=users

// module.exports=mongoose.Model('users',usersschema)


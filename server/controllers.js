const users=require('./model')

exports.home= async(req,res)=>{
    res.send('home')
}

exports.aboutus= async(req,res)=>{
    res.send('aboutus')
}

exports.add= async(req,res)=>{
    try {
        const data=await users.create(req.body)
        res.send('data sent')
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}

exports.getall= async(req,res)=>{
    try {
        const data= await users.find({})
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}

exports.getone= async(req,res)=>{
    try {
        const {id}= req.params
        const data=await users.findById(id) 
        res.send(data);
        // console.log(data); 
    } catch (error) {
        console.log(error);
    }
}




  
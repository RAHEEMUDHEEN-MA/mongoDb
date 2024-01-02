
const bcrypt=require('bcrypt')
const hashedUser = require('./hashSchema')

const newUser=async(req,res)=>{
    const {name,username,password}=req.body

    const salt=await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(password,salt)
    const userDetails=await hashedUser.create({
        name,username,password:hashedpassword
    })
    res.json(userDetails)
}

module.exports=newUser


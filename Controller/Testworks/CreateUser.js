const User = require("./UserSchema")

const createUser=async(req,res)=>{
    const {Name,email,password}=req.body
    const UserDetails = await User.create({Name,email,password})
    res.json(UserDetails)
    console.log("creating")
}

module.exports=createUser
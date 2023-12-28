const User = require("./UserSchema")


const Delete=async(req,res)=>{
    const _id=req.params.id
    const User1=await User.findByIdAndDelete(_id)
    res.json("User Deleted")
}

module.exports=Deletes
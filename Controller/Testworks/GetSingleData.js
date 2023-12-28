const User = require("./UserSchema")


const get1Item=async (req,res)=>{
    const _id=req.params.id
    const Userid=await User.findById(_id)
    res.json(Userid)
}
module.exports=get1Item
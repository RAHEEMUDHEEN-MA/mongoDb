const User = require("./UserSchema")

const Update=async(req,res)=>{
    const _id=req.params.id
    const {Name,email,password}=req.body;
    const arryupdate=await User.findByIdAndUpdate(_id,{Name,email,password})
    res.json(arryupdate)

}
module.exports=Update
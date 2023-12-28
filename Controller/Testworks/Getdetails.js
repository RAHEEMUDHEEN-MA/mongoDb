const User = require("./UserSchema")


const getitems=async(req,res)=>{

        const User1=await User.find()
        res.json(User1)
}
module.exports=getitems
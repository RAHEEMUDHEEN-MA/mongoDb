const student=require("./studentSchema")
const bcrypt=require("bcrypt")
const jwt=require('jsonwebtoken')

const StudentLogin=async(req,res)=>{
    const {username,password}=req.body

    const userData=await student.findOne({username})
    
    
    if(userData && await bcrypt.compare(password,userData.password)){
        const token=genarateToken(userData._id)
        return res.status(200).json({ message: "Login success", userData ,token});
       
    }
    else{

        
        if(!userData){
            return res.status(404).json({ message: "Username not found" });
        }
        else{
            return res.status(401).json({ message: "Incorrect password" });
        }

      
    }
}

const genarateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET_KEY,{expiresIn:"15 min"})

}

module.exports=StudentLogin

const student=require("./studentSchema")
const bcrypt=require("bcrypt")

const StudentLogin=async(req,res)=>{
    const {username,password}=req.body

    const userData=await student.findOne({username})
    
    
    if(userData && await bcrypt.compare(password,userData.password)){
        res.json("login success")
    }
    else{

        if(!userData){
            res.json("username not found")
        }
        else{
            res.json("incorrect password")
        }

      
    }
}

module.exports=StudentLogin

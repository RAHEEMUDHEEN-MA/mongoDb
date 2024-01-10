// const bcrypt=require('bcrypt')
// const student = require('./studentSchema')



// // const addStudent=async(req,res)=>{

//     const {name,email,username,password}=req.body

//     // const existingUser=student.findOne({email})
//     // if(existingUser){
//     //     res.json("email already used")
//     // }

//     const salt=await bcrypt.genSalt(10)
//     const encryptedPassword=await bcrypt.hash(password,salt)
//     const addedStudent=await student.create({
//         name,email,username,password:encryptedPassword
//     })
//     res.json("signup successfull",addedStudent)
// }

// module.exports=addStudent


const bcrypt=require('bcrypt')
const student = require('./studentSchema')

const addStudent =async(req,res)=>{
    const{name,email,username,password}=req.body;

    const existingEmail = await student.findOne({ email});

    if (existingEmail){
        return res.json({ message: "email already used" });
    }
  
    const salt=await bcrypt.genSalt(10)
    const encryptedPassword=await bcrypt.hash(password,salt)

    const Signupdetails=await student.create({
        name,email,username,password:encryptedPassword
    })
    res.json(Signupdetails);
    // console.log(student)

}

module.exports=addStudent

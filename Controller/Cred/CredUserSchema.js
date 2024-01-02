const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{type:String},
    email:{type:String},
    age:{type:String},
    password:{type:String},
})

const Creduser=mongoose.model("creduser",userSchema)

module.exports=Creduser
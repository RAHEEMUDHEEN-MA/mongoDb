const mongoose=require('mongoose')

const hashSchema=mongoose.Schema({
    name:{type:String},
    username:{type:String},
    password:{type:String}
})

const hashedUser=mongoose.model("HashedUser",hashSchema)
module.exports=hashedUser
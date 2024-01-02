const mongo=require("mongoose")

const studentschema=mongo.Schema({
    name:{type:String},
    email:{type:String},
    username:{type:String},
    password:{type:String}
})

const student=mongo.model("students",studentschema)
module.exports=student
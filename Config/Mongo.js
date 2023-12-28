const mongoose=require('mongoose')

const connection=async()=>{
    try{
        const connect=await mongoose.connect("mongodb+srv://raheemudheenma118:119881141@r4heem.4zbotc0.mongodb.net/?retryWrites=true&w=majority")
        console.log("Database connected")
    }
    catch(err){
        console.log(`Error: ${err}`);
                process.exit()
    }
}

module.exports=connection
const creduser = require("./CredUserSchema");

// new user
const adduser = async (req, res) => {
  const { name, email, age, password } = req.body;
  const Userdetails =await creduser.create({ name, email, age, password });
  res.json(Userdetails);
  // res.send("add")
};

// viewall users

const showallusers = async (req, res) => {
  const user = await creduser.find();
  res.json(user);
};

// userby Id

const finduser = async (req, res) => {
    const _id=req.params.id 
    const theUser= await creduser.findById(_id)
    res.json(theUser)
};




// edit

const edit=async(req,res)=>{
  const _id=req.params.id
  const { name, email, age, password } = req.body;
  const arrayupdate=await creduser.findByIdAndUpdate(_id,{name, email, age, password})
  res.json(arrayupdate)
}



// delete

const deleteuser=async(req,res)=>{
  const _id=req.params.id
  const user=await creduser.findByIdAndDelete(_id)
  res.json("deleted")
}

module.exports = { adduser, showallusers, finduser,edit,deleteuser};

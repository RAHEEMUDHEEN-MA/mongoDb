const express=require("express")
const { adduser, showallusers, finduser, edit, deleteuser } = require("../Controller/Cred/Cred")

const credrouter=express.Router()

credrouter.route('/add').post(adduser)
credrouter.route('/users').get(showallusers)
credrouter.route('/user/:id').get(finduser)
credrouter.route('/edit/:id').put(edit)
credrouter.route('/delete/:id').delete(deleteuser)

module.exports=credrouter
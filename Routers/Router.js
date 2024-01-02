const express=require("express")

const Demo=require("../Controller/Testworks/test")
const createUser = require("../Controller/Testworks/CreateUser")
const getitems = require("../Controller/Testworks/Getdetails")
const get1Item = require("../Controller/Testworks/GetSingleData")
const Delete = require("../Controller/Testworks/Delete")
const Update = require("../Controller/Testworks/Update")
const newUser = require("../Controller/hash/hashedPassword")
const addStudent = require("../Controller/Credential/signUp/signUp")

const router=express.Router()

router.route('/create').post(createUser)
router.route('/show').get(getitems)
router.route('/showone/:id').get(get1Item)
router.route('/delete/:id').delete(Delete)
router.route('/Update/:id').put(Update)

// router.route('/demo').get(Demo)

router.route('/hashuser').post(newUser)



router.route('/student/signup').post(addStudent)

module.exports=router
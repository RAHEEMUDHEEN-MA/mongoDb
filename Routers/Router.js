const express=require("express")


const Demo=require("../Controller/Testworks/test")
const createUser = require("../Controller/Testworks/CreateUser")
const getitems = require("../Controller/Testworks/Getdetails")
const get1Item = require("../Controller/Testworks/GetSingleData")
const Delete = require("../Controller/Testworks/Delete")
const Update = require("../Controller/Testworks/Update")
const newUser = require("../Controller/hash/hashedPassword")
const addStudent = require("../Controller/Credential/signUp/signUp")
const StudentSignUp = require("../Controller/Credential/signUp/SignUp2")
const StudentLogin = require("../Controller/Credential/signUp/login2")
const protect = require("../middleware/Token")

const middleware=[protect]

const router=express.Router()

router.route('/create').post(createUser)
router.route('/show').get(getitems)
router.route('/showone/:id').get(get1Item)
router.route('/delete/:id').delete(Delete)
router.route('/Update/:id').put(Update)

// router.route('/demo').get(Demo)

router.route('/hashuser').post(newUser)



router.route('/studentSignup').post(addStudent)

router.route('/student/signup').post(StudentSignUp)
router.route('/student/login').get(StudentLogin)

router.route('/student/verify').get(middleware,StudentSignUp)

module.exports=router
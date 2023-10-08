const express = require('express');
const router = express.Router();

 const {addUser, logUser} =require("../Controllers/users")

 router.post("/signUp",addUser)
 router.post("/signIn",logUser)

module.exports=router 
const express = require('express')
const app = express()
const port = 3000
const homesRoute =require('./routes/Home')
const usersRoute =require('./routes/users')
const cors=require('cors')
const jwt =require('jsonwebtoken')
const bcrypt =require("bcrypt")
const cookieParser=require("cookie-parser")
const mysql =require("mysql")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use(cookieParser())
app.use("/api/home",homesRoute)
app.use("/api/user",usersRoute)

app.get("/",(req,res)=>{
    res.send("heeeeelo")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
const users =require('../dataBase/models/users')
const bcrypt =require("bcrypt")
const jwt =require("jsonwebtoken")
const cookieParser=require("cookie-parser")
const cookie =require("cookie")
module.exports={
    addUser :function(req,res){
        const {users_FirstName  ,users_LastName,users_email,users_password}=req.body
 
        users.addUser(function(err,results){
            if(err){
                console.log(err)
            }else {
                res.status(201).json(results)
            }
        },users_FirstName  ,users_LastName,users_email,users_password)
    },

    logUser :function(req,res){
        const {email , password}=req.body
        
        users.logUser(function(err,results){
            if(err) return res.json({Error :"login error"})
            if(results.length>0){
                bcrypt.compare(password.toString(),results[0].users_password ,(err,response)=>{
                    if(err) return res.json({Error :"password compare error"})
                    if(response) {
                        // const name  =data[0].name
                        // const token = jwt.sign({name},"hich-hich",{expiresIn:"1d"})
                        // res.cookie('token',token)
                        return res.json({Status:"Success"})
                        
                    }else {
                        return res.json({Error :"passwoed not matched"})
                    }
                })
            }else {
                return res.json({Error :"no email existed"})
            }
                
            
        },email)

    }
}
const db = require('../index') 
const bcrypt =require("bcrypt")
const salt =10
module.exports={
    addUser : function(callBack,users_FirstName  ,users_LastName,users_email,users_password ){
        const sql = `insert into users (users_FirstName,users_LastName,users_email,users_password) values (?) `
        bcrypt.hash(users_password.toString(),salt,(err,hash)=>{
            if(err) return "error for hashing password"
            const values =[
                users_FirstName,
                users_LastName,
                users_email,
                hash
            ]
               db.query(sql,[values],function(error,results,fields){
            callBack(error,results)
        })
        })
     
    },

    logUser :function(callBack , users_email){
        const sql ="select * from users where users_email= ?"
        db.query(sql,[users_email],function(error,results){
            callBack(error , results)
        })
    }
}
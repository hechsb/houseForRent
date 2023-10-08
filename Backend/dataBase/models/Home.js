const db = require('../index')

module.exports={
    getAll : function (callBack){
        const sql = 'select * from Home' 
        db.query(sql,function(error,results,fields){
            callBack(error,results)
        })
    },

    addHome:function(callBack,Home_City,Home_Governorate,Home_Nature,Home_Type,users_users_id){
        const sql = 'insert into home SET ?'
        db.query(sql,{Home_City,Home_Governorate,Home_Nature,Home_Type,users_users_id},function(error,results,fields){
            callBack(error,results)
        })
    },

    addImages :function(callBack,HomeImages_data,Home_Home_id){
        const sql ='insert into HomeImages SET ? '
        db.query(sql,{HomeImages_data,Home_Home_id},function(error,results,fields){
            callBack(error,results)
        })
    },
    getImageByHouseId: function(callBack,houseId){
        const sql ="select HomeImages_data ,Home_Home_id  from homeImages  "
        db.query(sql,function(error,results){
            callBack(error,results)
        })
    }

}

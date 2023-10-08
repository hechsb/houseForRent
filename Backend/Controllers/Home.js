const Home =require("../dataBase/models/Home")

module.exports ={
    getAllHouses :function(req,res){
        Home.getAll(function(err,results){
            if(err){
                console.log(err)
            }else {
                res.status(200).json(results)
            }
        })
    },

    addHouse :function(req,res){
        const {Home_City,Home_Governorate,Home_Nature,Home_Type}=req.body
        const {id}=req.params
       
        Home.addHome(function(err,results){
            if(err){
                console.log(err)
            }else {
                res.status(201).json(results)
            }
        },Home_City,Home_Governorate,Home_Nature,Home_Type,id)
    },

    addImage :function(req,res){
        const {HomeImages_data}=req.body
        const{id_House}=req.params
        Home.addImages(function(err,results){
            if(err){
                console.log(err)
            }else {
                res.status(201).json(results)
            }
        }, HomeImages_data , id_House)
    },

    getImageById:function(req,res){
        const {houseId}=req.params

        Home.getImageByHouseId(function(err,results){
            if (err){
                console.log(err)
            }else {
                res.status(200).json(results)
            }
        })
    }
}
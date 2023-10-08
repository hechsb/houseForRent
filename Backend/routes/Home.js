const express = require('express');
const router = express.Router();

const {getAllHouses, addHouse, addImage, getImageById} =require('../Controllers/Home')

router.get('/getAll',getAllHouses);
router.post('/addHouse/:id',addHouse)
router.post('/addImage/:id_House',addImage)
router.get('/getImageById/',getImageById)

module.exports=router
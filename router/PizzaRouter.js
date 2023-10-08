
const express = require('express');
const router = express.Router();
const Pizza =require('../model/Pizzamodel');

router.get('/getallpizzas',async(req,res)=>{
    try{
        const pizzas = await Pizza.find({});
        res.send(pizzas);
    }catch(error){
        return res.send({message:error});
    }
})

module.exports=router;

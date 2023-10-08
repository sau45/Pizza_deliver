const express = require("express");
const router = express.Router();
const User = require('../model/Usermodel')


router.post("/register",async (req,res)=>{
    const {name,email,password}=req.body;
    const alreadyexist = await User.find({email});
   
    try{
       if(alreadyexist.length>0){
        return res.send(false)
       }else{
        const newUser = new User({name,email,password});
        newUser.save();
        return res.send(true);
       }
      
    }catch(error){
        res.status(400).json({message:error})
    }
})
router.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    const checkexist = await User.find({email,password});
    try{
        
        if(checkexist.length>0){
            const currentUser={
                name:checkexist[0].name,
                email:checkexist[0].email,
                isAdmin:checkexist[0].isAdmin,
                _id:checkexist[0]._id
            }
            res.send(currentUser);
            // res.send("User login Succesfully");
        }

    }catch(error){
        res.status(404).json({message:error});
    }
  
})

module.exports=router
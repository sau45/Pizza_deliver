const express=require('express');
const router=express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe=require("stripe")("sk_test_51NjnkASDXLqBIPDmDrt1CnHQhPZT9n1b2csfT9ItWayxvlNwfyddMBs7RFw19TccMsVXwZSkOR7xkExOmkwXO2fZ00c5PfjJ0P")
const orderModel = require("../model/Ordermodel")
router.post('/placeorders',async(req,res)=>{
    const {token,subtotal,currentUser,cartItems}= req.body;
    
    const idempotencyKey = uuidv4();
    try{
        const customer= await stripe.customers.create({
            email:token.email,
            source:token.id
        })
        const payment=await stripe.paymentIntents.create({
            amount: Math.round(subtotal * 100),
            currency:"inr",
            customer:customer.id,
            receipt_email:token.email,
    
    
        },{
            idempotencyKey: idempotencyKey 
        })
      
       if(payment){
        const order=new orderModel({
            name:currentUser.name,
            email:currentUser.email,
            userid:currentUser._id,
            orderItems:cartItems,
            orderAmount:subtotal,
            shippingAddress:{
                street:token.card.address_line1,
                city:token.card.address_country,
                pincode:token.card.address_zip
            },
            transactionId:payment.id
        })
        await order.save();
       return  res.send("Payment success")
       }else{
        return res.send("Payment failure")
       }

    }
    catch(error){
        res.status(400).json("Something facing Error"+error);
    }
 

})

router.post('/getuserorders',async(req,res)=>{
    const {userid}=req.body;
    try{
        const order= await orderModel.find({userid});
        if(order){
            return res.send(order);
        }
    }catch(error){
        res.status(400).json(error);
    }

})
module.exports=router;
const mongoose =require("mongoose");

const orderSchema = new mongoose.Schema({
    name:{type:String ,require},
    email:{type:String,require},
    userid:{type:String,require},
    orderItems:[],
    shippingAddress:{ 
        street: String,
        city: String,
        pincode: String,
    },
    orderAmount:{type:Number,require},
    isDelivered:{type:Boolean,require, default:false},
    transactionId:{type:String,require}
})
module.exports=mongoose.model("order",orderSchema);
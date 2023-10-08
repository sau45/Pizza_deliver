const express = require("express");
const app = express();
const pizzasRoute =require('./router/PizzaRouter')
const userRoute = require("./router/UserRouter")
const orderRoute=require("./router/OrderRoute")

const db = require('./db');
const cors = require('cors');

app.use(express.json());
app.use(cors());



app.get("/" , (req,res)=>{
    res.send("server working  🔥")
});
app.use("/api/pizzas/",pizzasRoute);
app.use("/api/users",userRoute);
app.use("/api/orders",orderRoute);
// app.get("/getalldata",async (req,res)=>{
//     const data = await pizza.find({});
//     res.send(data);
// })


const port =process.env.PORT || 4000;
app.listen(port,()=>"server running on port 👍 ");
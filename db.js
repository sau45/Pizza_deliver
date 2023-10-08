const mongoose = require("mongoose");

const url="mongodb+srv://bhartisaurav342:ixb4KqNz3bNXAQAM@pizzacluster0.e7l78ag.mongodb.net/mern-pizza";

mongoose.connect(url,{  useNewUrlParser: true,
    useUnifiedTopology: true})

const db=mongoose.connection;

db.on("connected", ()=>{
    console.log("MongoDB is Connected Successfully");
})

db.on("error",()=>{
    console.log("Mongo Db connection Error");
})

module.exports=mongoose
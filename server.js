const express=require("express");
const connectDB=require("./config/dbConnect")
const app=express();
const cors =require("cors");


require("dotenv").config();
//connect to DB
connectDB();

//routes
app.use(express.json());
app.use(cors());
app.use("/user",require("./routes/user"))
app.use("/Cart",require("./routes/Cart"))
app.use("uploads",express.static("uploads"));
app.use("/story/uploads",require("./routes/uploadRoutes"))
//server
const PORT=process.env.PORT;
app.listen(PORT,(err)=>
err?console.log(err):console.log(`server is running on ${PORT}`)
);
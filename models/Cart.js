const mongoose= require ("mongoose");
const schema=mongoose.Schema
const CartSchema= new schema({
    title:{
        type:String,
        required:true,
    },
    
    image:{
        type:String,
        
    },
    description:{
        type:String,
        
    },
    postedBy:{
        type:String,
    },
    price:{
        type:String,
    }
})
module.exports=mongoose.model("Cart",CartSchema)
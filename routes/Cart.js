const express = require("express");
const Cart = require("../models/Cart");

const router=express.Router()

//post
router.post('/',async(req,res)=>{
    try {
        const newCart=new Cart({...req.body})
        

        const result=await newCart.save()
        res.send({result})
    } catch (error) {
        res.status(400).send({message:'can not add Cart'})
    }
})
//get
router.get('/',async(req,res)=>{
    try {
        const result=await Cart.find()
        const response=result
        res.send({response})
    } catch (error) {
        res.status(400).send({message:'can not find Carts'})

    }
})
//get by id
router.get('/:id',async(req,res)=>{
    try {
        const result=await Cart.findOne({_id:req.params.id})
        res.send({response:result})
    } catch (error) {
        res.status(400).send({message:`can not find ${_id} Carts`})

    }
})
//delete
router.delete('/:id',async(req,res)=>{
    try {
        const result=await Cart.findOneAndDelete({_id:req.params.id})
        result.n?res.send({message:'Cart is already deleted'}):res.send({message:'Cart deleted'})


      
    } catch (error) {
        res.status(400).send({message:`can not delete this Cart`})

    }
})
//update
router.put('/:id',async(req,res)=>{
    try {
        const result=await Cart.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.send({message:'Cart updated'})
    } catch (error) {
        res.status(400).send({message:`can not update this Cart`})

    }
})
module.exports=router
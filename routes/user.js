const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");
const User =require("../models/User")
const jwt=require("jsonwebtoken")
const {loginRules,validation,registerRules}=require("../middleware/validator")
const isAuth=require("../middleware/passport")

// router.get("/",(req,res)=>{
//     res.send("hello world")
// });

//register
router.post("/register",registerRules(),validation, async(req,res)=>{
    const {name,lastName,email,password,image}=req.body;
    try {
        const newUser=new User({name,lastName,email,password,image})
        // check of the email exist
        const searchedUser= await User.findOne({email})
        if (searchedUser){
            return res.status(400).send({msg:"email already exist"});
        }



        //hash password
        const salt=10
        const genSalt=await bcrypt.genSalt(salt);
        const hashedPassword= await bcrypt.hash(password,genSalt);
        console.log(hashedPassword);
        newUser.password=hashedPassword;
//generate a token



        // save the user
        const newUserToken= await newUser.save()
        const payload={
            _id:newUserToken.id,
            name:newUserToken.name,
        }
        const token=await jwt.sign(payload,process.env.SecretOrKey,{expiresIn:3600});
        res.status(200).send({user:newUserToken,msg:"user is saved",token : `Bearer ${token}`})

    } catch (error) {
        res.status(500).send("can not save the user")
    }
});

//login
router.post("/login",loginRules(),validation, async(req,res)=>{
    const {email,password}=req.body
    try {
        //find if the user exist
        const searchedUser= await User.findOne({email})
        //if the email not exist
        if(!searchedUser){
            return res.status(400).send({msg:"bad credential"})
        }

        // password are equales
        const match =await bcrypt.compare(password,searchedUser.password)
        // send the user
        if(!match){
            return res.status(400).send({msg:"bad credential"})
        

        }
        // cree un token
        const payload={
            _id:searchedUser._id,
            name:searchedUser.name
        }
        const token=await jwt.sign(payload,process.env.SecretOrKey,{expiresIn:3600})
        console.log(token);
          // send the user
          res.status(200).send({user:searchedUser,msg:"succes",token:`Bearer ${token}`})

    } catch (error) {
        res.status(500).send({msg:"can not get the user"})
        
    }
})



router.get("/current",isAuth(),(req,res)=>{
    res.status(200).send({user:req.user});
});

module.exports=router;
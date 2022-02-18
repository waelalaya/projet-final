
const {check, validationResult}=require("express-validator")


exports.registerRules=()=>[
    check("name","name is required").notEmpty(),
    check("lastName","lastName is required").notEmpty(),
    check("email","email is required").notEmpty(),
    check("email","check email again").notEmpty(),
    check("password","password must be between 6 and 20 character").isLength({
        min:6,
        max:20,
    }),
];


exports.loginRules=()=>
    [
        
        check("email","email is required").notEmpty(),
        check("email","check email again").notEmpty(),
        check("password","password must be between 6 and 20 character").isLength({
            min:6,
            max:20,
        }),
    ];
    
exports.validation=(req,res,next)=>{
   const errors=validationResult(req)
  if ( ! errors.isEmpty() ){
      return res.status(400).send({errors:errors.array().map(el=>({msg:el.msg,}))})
  }
  next();
};
const express=require("express");
const router=express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).json({
        message:"This is facilty get request"
    })
})


router.post("/",(req,res,next)=>{
    res.status(200).json({
        message:"This is facilty post request"
    })
})




module.exports=router;

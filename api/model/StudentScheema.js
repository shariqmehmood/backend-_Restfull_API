const mongoose= require("mongoose");
const StudentScheema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:Number,
    password:String,
    gander:String

});

module.exports=mongoose.model("Student",StudentScheema);
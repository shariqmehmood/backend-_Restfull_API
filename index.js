const express = require("express");
const mongoose = require("mongoose");
const bodyparser=require("body-parser");
const cors =require("cors");
let app  =express();
mongoose.connect("mongodb+srv://vadioClass:vedioclasspassword@cluster0.t2oaq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
    console.log(' <-----Database Connected----->');
});
mongoose.connection.on('error', () => {
    console.log("<---data base not Connect--->")
});
app.use(cors());

const Student = require("./api/routes/students");
const Facilty=require("./api/routes/faculty");
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/student' ,Student);
app.use('/facilty' ,Facilty);
app.use((req,res,next)=>{
    res.status(404).json({
        error:"bad request"
    })
})
app.listen(3000, () => {
    console.log("run Port")
});



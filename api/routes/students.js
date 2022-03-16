const express = require("express");
const router = express.Router();
const bcrypt=require("bcrypt")
const Student = require("../model/StudentScheema")
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
    Student.find()
        .then(result => {
            console.log(result.length)
            res.status(200).json({
                studentdata: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

router.post("/", (req, res, next) => {
    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        phone: hashpass,
        gander: req.body.gander


    })
    student.save()

        .then(result => {
            console.log(result)


        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })

    res.status(200).json({
        message: "This is student post request"
    })
})

router.get('/:id', (req, res, next) => {
    let getid = req.params.id;
    console.log(getid)
    Student.findById(getid)
        .then(result => {
            res.status(200).json({
                student: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})
// <-----delete request ---->
router.delete("/:id", async (req, res) => {
    let getdeleteID = req.params.id;
    try {
        await Student.deleteOne({ _id: getdeleteID })

        return res.status(200).json({
            message: "student deleted"
        })
    } catch (err) {
        return res.status(500).json({
            masg: false,
            error: err,
        })
    }
}
)
router.put('/:id', (req, res) => {
    // console.log(req.params.id)
    Student.findByIdAndUpdate({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashpass,
            gander: req.body
        }
    })
        .then(result => {
            res.status(200).json({
                message:"user update"
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message:"user not update"
            })
        })
})


// put request mean update


module.exports = router;

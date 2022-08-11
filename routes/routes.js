const Register = require("../models/schemas/schemas")


const router = require("express").Router();

router.get("/",(req,res)=>{
    res.render("index")
})



router.post("/register",async(req,res)=>{
    try {
        const regis = new Register({
            firstname : req.body.firstname,
            email : req.body.email,
            subject: req.body.subject,
            message:req.body.message,
        })
        console.log(req.body.message);
        const registered = await regis.save();
        res.status(201).render("index")
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;
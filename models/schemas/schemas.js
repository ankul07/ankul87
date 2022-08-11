const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
       
        required:true
        
    },
    subject:{
        type:String,
        required:true

    },
    message : {
        type:String,
        required : true,
    }
   
})

const Register = new mongoose.model("Register",RegisterSchema);

module.exports = Register;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    regNumber:{
        type:String,
        required:true,
        uppercase:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('user',userSchema)
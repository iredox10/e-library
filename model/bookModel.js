const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    filename:{
        type:String,
        required:true
    },
    contentType:{
        type:String,
        required:true
    },
    imageBase64:{
        type:String,
        required:true
    },
    bookName: {
        type: String, 
        required: true
    },
    bookAuthor:{
        type: String,
        required: true
    },
    pages:{
        type: Number,
        required: true
    },
    section:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('book',bookSchema)
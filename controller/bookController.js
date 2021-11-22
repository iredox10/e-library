const fs = require('fs')
const Book = require('../model/bookModel')
exports.get_book_route = (req,res) =>{
    res.render('books-page')
}

exports.get_add_book = (req,res) =>{
    res.render('add-book')
}

exports.post_add_book = async (req,res) =>{
    let file = req.file
        let img = fs.readFileSync(file.path)
        let encoded_img =  img.toString('base64')
    let book = {
        filename : file.originalname,
        contentType:file.mimetype,
        imageBase64: encoded_img,
        bookName: req.body.bookName,
        bookAuthor: req.body.bookAuthor,
        pages: req.body.pages,
        section: req.body.section,
    }
    let newBook = new Book(book)
    try{
    let saveBook = await newBook.save()
    // res.redirect('/view-books')
    res.send(newBook)
   }catch(err){
       console.log(err)
   }
    
}

exports.get_books = async (req,res) =>{
    try{
        let books = await Book.find()
        res.render('view-books', {books})
    }catch(err){
        console.log(err)
    }
}

exports.get_edit_book = async (req,res) =>{
    let book = await Book.findById(req.params.id)
    res.render('edit-book',{book})
}
exports.patch_edit_book = async (req,res) =>{
    await Book.findByIdAndUpdate(req.params.id,req.body)
    res.redirect('/view-books')
}
exports.delete_book = async (req,res)=>{
    await Book.findByIdAndDelete(req.params.id)
    res.redirect('/view-books')
}


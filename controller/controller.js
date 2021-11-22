const User = require('../model/userModel')
const Book = require('../model/bookModel')
exports.get_home = (req,res) =>{
    res.render('home')
}

exports.get_admin = (req,res) =>{
    res.render('admin')
}

exports.get_users = (req,res) =>{
    res.render('users')
}

exports.get_add_user = (req,res)=>{
    res.render('register-user')
}

exports.post_add_user = async (req,res)=>{
    try{
        const newUser = new User(req.body)    
        const user = await newUser.save()
        res.redirect('/view-users')
    }catch(err){
        console.log(err)
    }
}

exports.get_view_users = async (req,res) =>{
    const users = await User.find()
    res.render('view-users', {users})
}

exports.get_login = (req,res) =>{
    res.render('login')
}
exports.post_login = async(req,res) =>{
    try{
        const user = await User.findOne({regNumber: req.body.regNumber})
        const password = await User.findOne({password: req.body.password})
        const books = await Book.find()
        console.log(books)
        user && password ? res.render('user-page',{user,books}) : res.send('wrong credentials')
    }catch(err){
        console.log(err)
    }
}

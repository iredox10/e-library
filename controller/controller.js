exports.get_home = (req,res) =>{
    res.render('home')
}

exports.get_admin = (req,res) =>{
    res.render('admin')
}

exports.get_users = (req,res) =>{
    res.render('users')
}
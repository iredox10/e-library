const multer = require('multer')


const Storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'upload')
    },
    filename: function(req,file,cb){
        const ext = file.filename.substr(file.originalname.lastIndexOf('.'))
        cb(null,file.filename + '-' + Date.now()+ ext)
    }
})

module.exports = multer{Storage}
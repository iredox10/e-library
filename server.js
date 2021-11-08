const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ejs = require('ejs')
const multer = require('multer');
const routes = require('./routes/userRoute')
const bookRoutes = require('./routes/bookRoute')

//* middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs')

app.use(routes)
app.use(bookRoutes)


mongoose.connect('mongodb://localhost/habu-project')
.then(res => app.listen(4000))
.catch(err => console.log(err))


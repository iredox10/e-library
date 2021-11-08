const {Router} = require('express')
const route = Router()
const bookCont = require('../controller/bookController')


route.get('/add-book', bookCont.get_registerBook)

module.exports = route
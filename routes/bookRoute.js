const {Router} = require('express')
const route = Router()
const bookCont = require('../controller/bookController')
const store = require('../middleware/multer')

route.get('/books', bookCont.get_book_route)

route.post('/add-book',store.single('bookCover'),bookCont.post_add_book)
route.get('/add-book',bookCont.get_add_book)

route.get('/view-books', bookCont.get_books)
route.delete('/delete/:id', bookCont.delete_book)
route.get('/edit-book/:id', bookCont.get_edit_book)

route.patch('/edit-book/:id', bookCont.patch_edit_book)




module.exports = route
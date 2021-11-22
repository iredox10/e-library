const {Router} = require('express')
const route = Router()
const controller = require('../controller/controller')


route.get('/', controller.get_home)

route.get('/login', controller.get_login)
route.post('/login', controller.post_login)

route.get('/admin', controller.get_admin)

route.get('/users', controller.get_users)
route.get('/add-user', controller.get_add_user)
route.post('/add-user', controller.post_add_user)

route.get('/view-users', controller.get_view_users)


module.exports = route



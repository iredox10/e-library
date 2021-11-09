const {Router} = require('express')
const route = Router()
const controller = require('../controller/controller')


route.get('/', controller.get_home)

route.get('/admin', controller.get_admin)

route.get('/users', controller.get_users)


module.exports = route



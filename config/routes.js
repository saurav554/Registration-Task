const express = require('express')
const router = express.Router()

const {aunthenticateUser} = require('../app/middlewares/authentication')

const usersController = require('../app/controllers/usersController')



router.post('/users/registration',usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', aunthenticateUser, usersController.account)
router.delete('/users/logout', aunthenticateUser, usersController.logout)





module.exports = router
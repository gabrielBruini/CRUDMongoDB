const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')


router.get('/teste', UserController.index)
router.post('/create', UserController.create)
router.delete("/user/:email", UserController.delete)
router.get('/users', UserController.read)
router.put('/user/alter', UserController.update)


module.exports = router
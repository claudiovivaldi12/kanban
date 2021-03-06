const express = require('express')
const router = express.Router()
const Controller = require('../controllers')
const authentication = require('../middlewares/authentication.js')
const authorization = require('../middlewares/authorization.js')
router.get('/org',Controller.getOrganisation)
router.post('/login',Controller.postLogin)
router.post('/register',Controller.postRegister)
router.use(authentication)
router.get('/',Controller.getTask)
router.post('/',Controller.postTask)
router.get('/:id',authorization,Controller.getTaskById)
router.delete('/:id', authorization,Controller.deleteTask)
router.patch('/:id', authorization,Controller.putTask)

module.exports = router

const controllers = require('../controllers/books')
const express = require('express')
const router = express.Router()
const {validator} = require('../middleware/validator')
const { valid } = require('joi')

router.post('/', controllers.addBook)
router.get('/', controllers.getBookBasedOnAuthor)
router.get('/t', controllers.getLike)

module.exports = router
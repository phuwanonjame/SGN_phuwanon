const express = require('express')
const router = express.Router()

const { login, register , getUserInfo } = require('../controllers/authController')

router.post('/login', login);
router.post('/register', register)
router.get('/me', getUserInfo)
module.exports = router
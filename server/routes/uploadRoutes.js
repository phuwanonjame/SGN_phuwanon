const express = require('express')
const multer = require('multer')
const path = require('path')
const { handleUpload } = require('../controllers/uploadController')
const { verifyToken } = require('../middleware/authMiddleware')  // สมมติว่ามี middleware นี้
const { checkfilesize } = require('../validation/filevalidation')
const router = express.Router()

const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => cb(null, Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname))
  })
})

router.post('/', verifyToken,checkfilesize, upload.single('file'), handleUpload)

module.exports = router

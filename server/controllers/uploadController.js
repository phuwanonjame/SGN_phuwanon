const { saveUploadedFile } = require('../services/uploadservice')
const checkfilesize = require('../validation/filevalidation')
exports.handleUpload = async (req, res) => {
  try {
    const result = await saveUploadedFile(req.file)
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

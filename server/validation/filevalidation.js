exports.checkfilesize = (req, res, next) => {
  const contentLengthHeader = req.headers['content-length'] || '0'
  const contentLength = parseInt(contentLengthHeader, 10)
  const maxSize = 120 * 1024 * 1024 // 120MB

  if (isNaN(contentLength)) {
    return res.status(400).json({ error: 'Invalid Content-Length header' })
  }

  if (contentLength > maxSize) {
    return res.status(413).json({ error: 'File too large (max 120MB)' })
  }

  next()
}

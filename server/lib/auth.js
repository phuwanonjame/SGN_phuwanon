const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET || 'your-secret-key'

function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET)
  } catch {
    return null
  }
}

module.exports = { verifyToken }

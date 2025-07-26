const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { findUserByEmail, registerUser: createUser, findUserById } = require('../models/userModel')
const { verifyToken } = require('../lib/auth')

async function authenticateUser(email, password) {
  const user = await findUserByEmail(email)
  if (!user) return null

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) return null

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  )
  return token
}

async function registerUser(name, email, password) {
  const existingUser = await findUserByEmail(email)
  if (existingUser) throw new Error('Email นี้มีผู้ใช้งานแล้ว')

  const hashedPassword = await bcrypt.hash(password, 10)
  const userId = await createUser(name, email, hashedPassword)
  return { id: userId, name, email }
}

async function getUserFromToken(token) {
  if (!token) return null

  const decoded = verifyToken(token)
  if (!decoded || !decoded.id) return null

  const user = await findUserById(decoded.id)
  return user || null
}

module.exports = {
  authenticateUser,
  registerUser,
  getUserFromToken
}

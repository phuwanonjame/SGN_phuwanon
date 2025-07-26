require('dotenv').config()
const jwt = require('jsonwebtoken')


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huQGV4YW1wbGUuY29tIiwiaWF0IjoxNzUzMzQ2NTY4LCJleHAiOjE3NTM0MzI5Njh9.ePd_JYcSSvFQ4IuExqxuPKgRzTfU3rG7ve6GT62evSE'

const decoded = jwt.decode(token)
console.log('Decoded (no verify):', decoded)

try {
  const verified = jwt.verify(token, process.env.JWT_SECRET)
  console.log('Verified:', verified)
} catch (err) {
  console.error('Invalid token', err)
}

const db = require('./db')

exports.findUserByEmail = async function(email) {
  console.log(email)
  
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email])
  console.log('Query result:', rows)
  
  return rows[0] || null
}

exports.findUserById = async function(id) {
  const [rows] = await db.query('SELECT id, name, email FROM users WHERE id = ? LIMIT 1', [id])
  return rows[0] || null
}

exports.registerUser = async function(name, email, password) {
  const [result] = await db.execute(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password]
  )
  return result.insertId
}

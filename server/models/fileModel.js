const pool = require('./db')  // import pool จริงๆ มาใช้

class FileModel {
  static async create(fileData) {
    const sql = `INSERT INTO files (name, size, path, mimetype, uploadedAt) VALUES (?, ?, ?, ?, NOW())`
    const values = [fileData.name, fileData.size, fileData.path, fileData.mimetype]
    const [result] = await pool.execute(sql, values)
    return result.insertId
  }

  static async findById(id) {
    const sql = `SELECT * FROM files WHERE id = ?`
    const [rows] = await pool.execute(sql, [id])
    return rows[0] || null
  }
}

module.exports = FileModel

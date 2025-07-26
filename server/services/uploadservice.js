const FileModel = require('../models/fileModel')

async function saveUploadedFile(file) {
  if (!file) throw new Error('No file provided')

  const fileData = {
    name: file.originalname,
    size: file.size,
    path: file.path,
    mimetype: file.mimetype,
    uploadedAt: new Date(),
  }

  const created = await FileModel.create(fileData)
  return {
    message: 'Upload successful',
    fileId: created.id,
  }
}

async function createFile(fileData) {
  if (!fileData.name) throw new Error('Missing file name')
  return await FileModel.create(fileData)
}

async function getFileById(id) {
  return await FileModel.findById(id)
}

module.exports = {
  saveUploadedFile,
  createFile,
  getFileById,
}

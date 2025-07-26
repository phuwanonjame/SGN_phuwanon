import formidable from 'formidable'
import fs from 'fs'
import path from 'path'

export const config = {
  api: {
    bodyParser: false, 
  },
}

const uploadDir = path.join(process.cwd(), 'public', 'uploads')


if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

export async function POST(req) {
  return new Promise((resolve) => {
    const form = new formidable.IncomingForm({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 120 * 1024 * 1024, // 120MB limit
    })

    form.parse(req, (err, fields, files) => {
      if (err) {
        resolve(
          new Response(
            JSON.stringify({ success: false, error: err.message }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
          )
        )
        return
      }

      const uploadedFile = files.file
      if (!uploadedFile) {
        resolve(
          new Response(
            JSON.stringify({ success: false, error: 'No file uploaded' }),
            { status: 400, headers: { 'Content-Type': 'application/json' } }
          )
        )
        return
      }

      resolve(
        new Response(
          JSON.stringify({
            success: true,
            filename: path.basename(uploadedFile.filepath || uploadedFile.path),
            size: uploadedFile.size,
            mimetype: uploadedFile.mimetype,
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        )
      )
    })
  })
}

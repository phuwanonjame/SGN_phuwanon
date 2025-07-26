import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

/**
 * @param {File} file - ไฟล์ที่ต้องการอัปโหลด
 * @param {(percent: number) => void} onProgress - Callback สำหรับอัปเดต progress
 */
export async function uploadFileToServer(file, onProgress) {
  const formData = new FormData()
  formData.append("file", file)

  try {
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true, 
      onUploadProgress: (event) => {
        if (event.lengthComputable && onProgress) {
          const percent = Math.round((event.loaded / event.total) * 100)
          onProgress(percent)
        }
      },
    })

    return { success: true, data: response.data }
  } catch (err) {
    return {
      success: false,
      error: err.response?.data?.error || err.message || "Upload failed",
    }
  }
}

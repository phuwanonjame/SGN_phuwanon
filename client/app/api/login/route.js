const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
const loginUrl = `${baseUrl}/auth/login`

// ตัวอย่างเรียก API ด้วย axios
import axios from 'axios'

export async function login(email, password) {
  try {
    const response = await axios.post(
      loginUrl,
      { email, password },
      { withCredentials: true }
    )
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

const axios = require('axios')

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000'
const loginUrl = `${baseUrl}/auth/me`

exports.getinformationuser = async () => {
  try {
    const res = await axios.get(loginUrl, {
      withCredentials: true, 
    })
    return res.data.user || res.data
  } catch (error) {
    console.error("getinformationuser error:", error.message)
    return null
  }
}

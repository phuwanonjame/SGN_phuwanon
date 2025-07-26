const Joi = require('joi')

// schema สำหรับ login
const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Email ห้ามว่าง',
    'string.email': 'รูปแบบ Email ไม่ถูกต้อง',
  }),
  password: Joi.string().min(4).required().messages({
    'string.empty': 'Password ห้ามว่าง',
    'string.min': 'Password ต้องมีความยาวอย่างน้อย 4 ตัวอักษร',
  }),
})

const registerSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    'string.empty': 'ชื่อห้ามว่าง',
    'string.min': 'ชื่อควรมีอย่างน้อย 2 ตัวอักษร',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email ห้ามว่าง',
    'string.email': 'รูปแบบ Email ไม่ถูกต้อง',
  }),
  password: Joi.string().min(4).required().messages({
    'string.empty': 'Password ห้ามว่าง',
    'string.min': 'Password ต้องมีความยาวอย่างน้อย 4 ตัวอักษร',
  }),
})

module.exports = {
  loginSchema,
  registerSchema, 
}
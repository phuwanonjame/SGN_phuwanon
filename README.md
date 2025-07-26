
คำอธิบายโปรเจกต์ฝั่ง Frontend (Client)
📌 คำอธิบายโปรเจกต์
โปรเจกต์นี้เป็น frontend application ที่พัฒนาด้วย Next.js ซึ่งใช้สำหรับระบบล็อกอินและการอัปโหลดไฟล์ ที่เชื่อมต่อกับ backend API โดยมีจุดเด่นและเทคโนโลยีดังนี้

ใช้ Next.js ในการสร้างเว็บแอปแบบ SSR (Server Side Rendering) และ SPA

ใช้ React ในการพัฒนา UI component-based

ใช้ TailwindCSS สำหรับจัดการดีไซน์และสไตล์เว็บให้ตอบโจทย์ทั้งมือถือและ desktop

ใช้ axios เป็น HTTP client สำหรับเรียก API backend (เช่น login, upload)

ใช้ js-cookie สำหรับจัดการ cookie เช่น การเก็บ token สำหรับ session หรือ authentication

ใช้ formidable สำหรับช่วยจัดการการอัปโหลดไฟล์ฝั่ง frontend (เช่นสร้าง form รับไฟล์)

🚀 ฟีเจอร์หลักระบบล็อกอิน

ฟอร์มกรอก username และ password

ส่งข้อมูลไปยัง API backend เพื่อตรวจสอบสิทธิ์

รับและเก็บ JWT token ผ่าน cookie เพื่อใช้สำหรับการยืนยันตัวตนใน session ต่อไป

ระบบอัปโหลดไฟล์

ฟอร์มรับไฟล์จากผู้ใช้

ส่งไฟล์ไปยัง backend ผ่าน API

รองรับการอัปโหลดไฟล์ที่มีขนาดไม่เกิน 120MB

UI ที่ตอบสนองและสวยงาม

ใช้ TailwindCSS ปรับแต่งสไตล์ให้เรียบง่าย ทันสมัย และรองรับ Responsive Design









คำอธิบายโปรเจกต์ฝั่ง backend server

สำหรับระบบจัดการผู้ใช้งาน (Login) และระบบอัปโหลดไฟล์ โดยมีข้อจำกัดให้รองรับการอัปโหลดไฟล์ขนาดไม่เกิน 120MB เพื่อความปลอดภัยและประสิทธิภาพ โดยใช้เทคโนโลยีหลักดังนี้

Node.js และ Express 5 เป็น framework สำหรับสร้าง RESTful API

รองรับการยืนยันตัวตนผู้ใช้ด้วย JWT (JSON Web Token)

ใช้ bcrypt สำหรับการเข้ารหัสรหัสผ่านผู้ใช้ (password hashing)

ใช้ multer สำหรับจัดการ multipart/form-data และการอัปโหลดไฟล์

ใช้ Joi สำหรับ validate ข้อมูลที่รับเข้ามา เช่น ข้อมูล login หรือข้อมูล upload

ใช้ dotenv สำหรับจัดการ environment variables เช่น การตั้งค่าฐานข้อมูล และ secret key

ใช้ cors เพื่อจัดการ policy การเข้าถึง API จากฝั่ง frontend

ใช้ cookie-parser สำหรับอ่านคุกกี้ที่อาจใช้เก็บ token หรือ session

ใช้ morgan เป็น middleware สำหรับ log การเรียกใช้งาน API

ใช้ nodemon ในโหมดพัฒนา (dev) เพื่อรีโหลด server อัตโนมัติเมื่อมีการเปลี่ยนแปลงโค้ด

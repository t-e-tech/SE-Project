export const URL = process.env.REACT_APP_SERVER_URL;

/*
export ตัวแปร URL โดยมีค่าเท่ากับค่าของ environment variable ชื่อ REACT_APP_SERVER_URL ซึ่งเป็น URL ของ server ที่ใช้ในการเชื่อมต่อกับ API ของแอปพลิเคชัน React นี้ โดยการใช้ environment variable เป็นวิธีการจัดการค่าที่เปลี่ยนแปลงได้บ่อยๆ โดยไม่ต้องแก้ไขโค้ดตรงๆ และสามารถกำหนดค่าได้ตามแต่ละ environment ที่รันแอปพลิเคชันนั้นๆ เช่น development, production, staging หรืออื่นๆ โดยค่า REACT_APP_SERVER_URL จะถูกกำหนดไว้ในไฟล์ .env หรือ .env.production 
หรือไฟล์ environment variable ของระบบที่ใช้งาน ซึ่งต้องเรียกใช้งานผ่าน process.env ใน Node.js หรือในแอปพลิเคชัน React ต้องเรียกใช้ผ่าน process.env.REACT_APP_{ชื่อตัวแปร} โดย {ชื่อตัวแปร} คือชื่อตัวแปรที่ต้องการใช้งาน
*/
//ไฟล์ index.js เป็นจุดเริ่มต้นในการรันแอปพลิเคชัน ReactJs โดยไฟล์นี้จะถูกเรียกใช้งานโดย index.html ผ่านไฟล์ JavaScript ที่ได้รับการเชื่อมต่อไว้
//โดยส่วน import ทั้งหมดนี้จะใช้ในไฟล์ index.js ของแอปพลิเคชันเพื่อเรียกใช้ App component และเชื่อมต่อกับ Redux store ด้วย Provider component
import React from "react"; //เป็นการ import library React เพื่อใช้สร้าง component ในแอปพลิเคชัน
import ReactDOM from "react-dom"; //เป็นการ import library ReactDOM เพื่อใช้ render component ในแอปพลิเคชัน
import App from "./App"; //เป็นการ import component App ที่ถูกสร้างขึ้นจากไฟล์ App.js ซึ่งเป็นหน้า view หลักของแอปพลิเคชัน
import store from "./Redux/store"; //เป็นการ import store ที่เก็บ state ของแอปพลิเคชัน ซึ่งเป็นส่วนหนึ่งของ Redux
import { Provider } from "react-redux"; //เป็นการ import Provider component จาก library react-redux เพื่อใช้เชื่อมต่อ Redux store กับ App

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

/*
ใน ReactDOM.render() จะมีการใช้ Provider เพื่อให้โมดูลใน store สามารถเข้าถึงได้จากคอมโพเนนต์อื่นๆในแอปพลิเคชัน React ผ่านทาง connect() ที่เป็นฟังก์ชันใน Redux ทำให้สามารถส่ง state จาก store ไปยังคอมโพเนนต์อื่นได้
สุดท้ายคือใช้ ReactDOM.render() เพื่อแสดงผล App ซึ่งเป็นคอมโพเนนต์หลักของแอปพลิเคชัน React ภายใน div ที่มี id ชื่อว่า root ในไฟล์ index.html ที่เป็นส่วนหน้าที่แสดงผลในหน้าเว็บไซต์
*/
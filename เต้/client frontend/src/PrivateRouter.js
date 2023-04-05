import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRouter({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      component={(props) => {
        const token = window.localStorage.getItem("userInfo");
        if (token) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/login"} />;
        }
      }}
    />
  );
}

export default PrivateRouter;

/*
ไฟล์ PrivateRouter.js นี้เป็นการสร้างคอมโพเนนต์ React ที่เรียกว่า PrivateRouter ซึ่งจะใช้สำหรับการรักษาความปลอดภัยของหน้าเว็บไซต์ โดยเมื่อผู้ใช้งานเข้าถึงหน้าเว็บที่มี PrivateRouter เราจะตรวจสอบว่ามีการลงชื่อเข้าใช้แล้วหรือไม่
ถ้าไม่มีการลงชื่อเข้าใช้ เราจะเปลี่ยนเส้นทาง URL ไปยังหน้า login แทนด้วยการใช้ Redirect แต่ถ้ามีการลงชื่อเข้าใช้ ก็จะแสดง Component ตามปกติ โดยใช้คุณสมบัติ Route ของ React Router และส่ง props ต่างๆ ไปยัง Component ด้วยการใช้ {...props} ในการเรียกใช้ Component
*/
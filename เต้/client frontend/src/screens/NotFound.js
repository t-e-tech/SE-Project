import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row justify-content-center align-items-center">
          <h4 className="text-center mb-2 mb-sm-5">Page Not Found</h4>
          <img
            style={{ width: "100%", height: "300px", objectFit: "contain" }}
            src="/images/not-found.png"
            alt="Not-found"
          />
          <button className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">
            <Link to="/" className="text-white text-decoration-none">
              Home page
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;

/*
NotFound.js เป็นหน้าแสดงผลเมื่อไม่พบหน้าเว็บที่ผู้ใช้เข้าถึง ซึ่งประกอบไปด้วย Header และรูปภาพ not-found.png พร้อมกับปุ่ม Home page เพื่อกลับไปยังหน้าแรกของเว็บไซต์ โดยมีการใช้ Bootstrap ในการจัดหน้าและกำหนดรูปแบบของปุ่ม
นอกจากนี้ยังมีการใช้ React Router เพื่อนำผู้ใช้กลับไปยังหน้าแรกของเว็บไซต์ หรือหน้าที่ผู้ใช้เคยเข้าชมก่อนหน้านี้ ถ้ามีการส่งพารามิเตอร์ redirect มาก็จะนำไปยังหน้านั้น ไม่เช่นนั้นก็จะนำไปยังหน้าแรกของเว็บไซต์ ในการแสดงผลจะแสดงข้อความ "Page Not Found" และรูปภาพ not-found.png ซึ่งเป็นรูปภาพแสดงผลเมื่อไม่พบหน้าเว็บไซต์ ใน tag img ได้กำหนดความกว้างและความสูงเพื่อให้ภาพไม่เกินขนาดและแสดงผลได้อย่างเหมาะสม โดยใช้ object-fit: contain ในการจัดขนาดภาพให้เหมาะสมกับพื้นที่ที่กำหนดให้แสดงผล
สุดท้ายจะมีการใช้ Link เพื่อทำให้ผู้ใช้สามารถกดปุ่ม Home page เพื่อกลับไปยังหน้าแรกได้ โดยใช้ปุ่มที่มี class="btn btn-success" และการใช้ Bootstrap class ในการจัดแสดงผลของปุ่มดังกล่าว
*/
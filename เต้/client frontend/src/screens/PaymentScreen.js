import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/cartActions";
import Header from "./../components/Header";

const PaymentScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">PayPal or Credit Card</label>
            </div>
          </div>

          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;

/*
โค้ดด้านบนเป็น React component ชื่อว่า PaymentScreen ที่รับ props เพียงตัวเดียวคือ history เพื่อใช้ในการ redirect หน้าเว็บไปยังหน้าอื่น ๆ ของเว็บไซต์
โดยทำงานหลักของ PaymentScreen คือในการแสดงหน้าจอการชำระเงินในระบบเว็บไซต์ โดยมีหลักการทำงานดังนี้
ใช้ React Hooks useState เพื่อสร้าง state สำหรับเก็บวิธีการชำระเงิน (paymentMethod) โดยกำหนดค่าเริ่มต้นให้เป็น "PayPal"
ใช้ React Hooks useSelector เพื่อเข้าถึงข้อมูลใน Redux store โดยเฉพาะ shippingAddress ซึ่งจะถูกใช้ในการตรวจสอบว่าผู้ใช้ได้กรอกข้อมูลที่อยู่ในการจัดส่งไว้หรือไม่ ถ้ายังไม่ได้กรอกจะถูก redirect ไปยังหน้า ShippingScreen
ใช้ React Hooks useDispatch เพื่อสร้าง dispatch function เพื่อใช้ในการ dispatch ตัว Action savePaymentMethod โดยจะเก็บวิธีการชำระเงินลงใน Redux store
สร้างฟังก์ชัน submitHandler สำหรับจัดการเหตุการณ์การ Submit ฟอร์ม โดยจะทำการ dispatch Action savePaymentMethod พร้อมกับข้อมูล paymentMethod ที่เก็บไว้ใน state และจะ redirect ไปยังหน้า PlaceOrderScreen
ใช้ tag HTML form เพื่อใช้ในการรวม element ต่าง ๆ ในฟอร์ม
ใช้ tag HTML input เพื่อสร้าง element ประเภท radio สำหรับเลือกวิธีการชำระเงิน
ใช้ tag HTML label เพื่อเป็น label ของ radio input
ใช้ tag HTML button เพื่อสร้างปุ่ม Submit สำหรับยืนยันการเลือกวิธีการชำระเงิน
*/
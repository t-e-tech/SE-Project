import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { saveShippingAddress } from "../Redux/Actions/cartActions";

const ShippingScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>DELIVERY ADDRESS</h6>
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;

/*
ไฟล์ ShippingScreen.js เป็นส่วนหนึ่งของโปรแกรมออนไลน์ร้านขายสินค้าที่เขียนด้วย ReactJS โดยไฟล์นี้เป็นหน้าที่ผู้ใช้จะกรอกข้อมูลที่อยู่ในการจัดส่งสินค้าก่อนการชำระเงิน โดยไฟล์นี้มีฟังก์ชันการทำงานต่าง ๆ ดังนี้

ฟังก์ชัน ShippingScreen: ฟังก์ชันหลักของไฟล์ ShippingScreen.js ซึ่งรับ props เป็น object ที่มีค่าเป็น history และทำหน้าที่ในการแสดงหน้าจอในการกรอกข้อมูลที่อยู่ในการจัดส่งสินค้า รวมถึงเมื่อผู้ใช้กรอกข้อมูลเรียบร้อยแล้ว จะส่งข้อมูลที่กรอกไปยังฟังก์ชัน saveShippingAddress และเมื่อเสร็จสิ้นจะเปลี่ยนหน้าไปยังหน้า payment
ตัวแปร cart: ตัวแปร cart จะดึงข้อมูลสินค้าในตะกร้าจาก store โดยใช้ useSelector เพื่อใช้งาน state ใน store
ตัวแปร shippingAddress: ตัวแปร shippingAddress จะถูกกำหนดค่าเท่ากับ shippingAddress ในตัวแปร cart เพื่อเติมค่าเริ่มต้นในการกรอกข้อมูลที่อยู่จัดส่งสินค้า
ตัวแปร address, city, postalCode, country: ตัวแปรเหล่านี้จะใช้สำหรับเก็บค่าที่ผู้ใช้กรอกไว้ในการจัดส่งสินค้า
ฟังก์ชัน submitHandler: ฟังก์ชันนี้จะถูกเรียกใช้เมื่อผู้ใช้กดปุ่ม Submit หลังจากกรอกข้อมูลที่อยู่เรียบร้อยแล้ว จากนั้นจะเรียกใช้ฟังก์ชัน saveShippingAddress เพื่อเก็บข้อมูลที่ผู้ใช้กรอกไว้ใน state
*/
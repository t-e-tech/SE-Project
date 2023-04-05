import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import PrivateRouter from "./PrivateRouter";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/page/:pagenumber" component={HomeScreen} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomeScreen}
          exact
        />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRouter path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <PrivateRouter path="/shipping" component={ShippingScreen} />
        <PrivateRouter path="/payment" component={PaymentScreen} />
        <PrivateRouter path="/placeorder" component={PlaceOrderScreen} />
        <PrivateRouter path="/order/:id" component={OrderScreen} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

/*
ไฟล์ App.js เป็นไฟล์หลักของแอปพลิเคชัน ซึ่งจะนำเสนอหน้าที่แตกต่างกันไปตาม Route ที่กำหนดไว้ โดยไฟล์นี้จะเรียกใช้ React Router เพื่อจัดการเปลี่ยนหน้าแต่ไม่ต้องโหลดหน้าใหม่ และสามารถนำ Component ต่าง ๆ มาใช้งานได้ เช่น HomeScreen, SingleProduct, Login, Register, CartScreen, ShippingScreen, ProfileScreen, PaymentScreen, PlaceOrderScreen, OrderScreen และ NotFound
โดยไฟล์นี้จะกำหนด Route สำหรับแต่ละหน้า เช่น Route path="/" จะแสดงหน้า HomeScreen โดย exact ใช้สำหรับกำหนดว่าต้องการให้ path ตรงกันเป๊ะกับ Route ที่กำหนด ถ้าไม่ใส่จะเป็นการ Match ทุก Route ที่มีคำว่า '/' แม้แต่ตำแหน่งเดียวกัน และ PrivateRouter จะเป็น Component ที่กำหนดให้ต้อง Login เข้าระบบก่อนถึงจะเข้าถึงได้ ในที่นี้มี PrivateRouter สำหรับ path="/profile", path="/shipping", path="/payment", path="/placeorder" และ path="/order/:id" โดยจะเช็คว่าผู้ใช้เข้าสู่ระบบหรือยัง ถ้ายังจะให้ redirect ไปยังหน้า login และหากเข้าสู่ระบบแล้วจะสามารถเข้าถึงได้
นอกจากนี้ยัง import ไฟล์ CSS ต่าง ๆ มาใช้งานเช่น App.css และ responsive.css รวมถึง import Component อื่น ๆ เพื่อนำมาใช้งานในแต่ละ Route ตามที่กำหนดไว้ในโค้ด
*/


//คำสั่ง const App = () => {} เป็นการประกาศฟังก์ชัน App ด้วยการใช้ syntax ของ Arrow Function ใน JavaScript โดยฟังก์ชัน App นี้เป็นหน้าจอหลักของเว็บไซต์ (Main Component) ที่ใช้เป็น entry point ของ React Application โดยการนำคำสั่งต่าง ๆ มาใส่ไว้ภายใน Route Component เพื่อให้เมื่อมีการเปลี่ยนแปลง path ใน URL แต่ละครั้ง จะสามารถโหลด component ต่าง ๆ ที่เกี่ยวข้องได้อัตโนมัติ โดยไม่ต้องโหลดหน้าใหม่ทุกครั้ง และ App นี้จะถูกส่งไป render ใน index.js ซึ่งเป็น entry point ของ React Application ด้วย ReactDOM.render() ซึ่งจะนำ Component นี้ไปแสดงผลใน HTML element ที่มี id ชื่อว่า "root" ภายในไฟล์ index.html ของเว็บไซต์

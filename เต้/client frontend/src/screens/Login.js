import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";

const Login = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;


/*
โค้ดข้างบนเป็นไฟล์ Login.js ซึ่งเป็นหน้าเข้าสู่ระบบของเว็บไซต์ โดยมีรายละเอียดดังนี้
ใช้ React Hooks อย่างต่อเนื่อง เช่น useState, useEffect
ใช้ React Redux ในการเชื่อมต่อ component ด้วย store
import Message และ Loading components มาใช้งานเพื่อแสดงผลเมื่อเกิด error หรือกำลังโหลด
มีการดึงข้อมูลจาก URL parameter โดยใช้ location และ history props
มีฟังก์ชัน submitHandler สำหรับส่งข้อมูล email และ password ไปยัง server โดยใช้ dispatch function ของ Redux
มีการแสดงผลข้อมูลเมื่อเกิด error หรือกำลังโหลด โดยใช้ Message และ Loading components
มีการตรวจสอบว่าผู้ใช้ได้เข้าสู่ระบบแล้วหรือไม่ ถ้าเข้าสู่ระบบแล้ว จะ redirect ไปยังหน้าที่ต้องการ
มีปุ่ม Link เพื่อเชื่อมต่อไปยังหน้าลงทะเบียนสมาชิก โดยสามารถกำหนด URL parameter redirect เพื่อ redirect หลังจากลงทะเบียนสำเร็จ
*/
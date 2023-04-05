import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from "axios";

const Nick_Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // ส่งข้อมูลไปยังเซิร์ฟเวอร์เพื่อตรวจสอบ
        Axios.post("http://localhost:5000/login", {
            email: email,
            password: password
        })
        .then((response) => {
            if (response.data.success) {
                // เข้าสู่ระบบสำเร็จ ให้เด้งไปยังหน้า Dashboard
                // history.push("/dashboard");
                console.log("Login success");
            } else {
                // เข้าสู่ระบบไม่สำเร็จ แสดงข้อความผิดพลาด
                setError(response.data.message);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
            <div className='bg-white p-3 rounded w-25' >
                <h2>เข้าสู่ระบบ</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>อีเมล์</strong></label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" //email pattern
                            onChange={(e) => setEmail(e.target.value)}
                            className='form-control rounded-0'
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>รหัสผ่าน</strong></label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='form-control rounded-0'
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>เข้าสู่ระบบ</button>
                    <p>คุณยอมรับข้อกำหนดและนโยบายของเรา</p>
                    <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>สร้างบัญชีผู้ใช้</Link>
                </form>
            </div>
        </div>
    );
};
export default Nick_Login
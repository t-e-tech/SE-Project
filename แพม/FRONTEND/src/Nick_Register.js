import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from "axios";

const Nick_Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() !== '' && password.trim() !== '' && email.trim() !== '') {
            Axios.post("http://localhost:5000/register", {
                username: username,
                password: password,
                email: email,
            });
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-black vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>ลงทะเบียนผู้ใช้</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name"><strong>ชื่อ-นามสกุล</strong></label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='form-control rounded-0'
                        />
                    </div>
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
                    <button type='submit' className='btn btn-success w-100 rounded-0'>ลงทะเบียนผู้ใช้</button>
                    <p>You are agree to our terms and policies</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}
export default Nick_Register
/*
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";

const Page2 = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleOldPasswordChange = (event) => {
        setOldPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validate input contains only English letters and numbers
        const inputRegex = /^[A-Za-z0-9]+$/;
        if (!inputRegex.test(newPassword) || !inputRegex.test(confirmPassword)) {
            alert('Passwords must contain only English letters and numbers');
            return;
        }
        // Check if newPassword and confirmPassword match
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Send PUT request to server to check if oldPassword is correct and update password in the database
        Axios.put('http://localhost:5000/changepassword', {
            oldPassword,
            newPassword,
        })
            .then(response => {
                // Handle successful response from server
                alert('Password changed successfully');
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
            })
            .catch(error => {
                // Handle error response from server
                alert('Failed to change password');
                console.log(error);
            });
    };



    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{ backgroundColor: '#09979B' }}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <i className="fa fa-arrow-left" /><span className="fs-5 d-none d-sm-inline p-3">ELEcREc</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li className="nav-item">
                                <Link to="#">
                                    <a href="#" className="nav-link align-middle px-0 text-white text-decoration-none">
                                        <i className="fa fa-user" /> <span className="ms-1 d-none d-sm-inline">บัญชีของฉัน</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/page1">
                                    <a href="#" className="nav-link align-middle px-0 text-white text-decoration-none">
                                        <i className="fa fa-map-marker" /> <span className="ms-1 d-none d-sm-inline">ที่อยู่</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/page2">
                                    <a href="#" className="nav-link px-0 align-middle text-white text-decoration-none">
                                        <i className="fa fa-lock" /> <span className="ms-1 d-none d-sm-inline">เปลี่ยนรหัสผ่าน</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#">
                                    <a href="#" className="nav-link align-middle px-0 text-white text-decoration-none">
                                        <i className="fa fa-shopping-basket" /> <span className="ms-1 d-none d-sm-inline">การขายของฉัน</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/page3">
                                    <a href="#" className="nav-link px-0 align-middle text-white text-decoration-none">
                                        <i className="fa fa-bell" /> <span className="ms-1 d-none d-sm-inline">การแจ้งเตือน</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/page4">
                                    <a href="#" className="nav-link align-middle px-0 text-white text-decoration-none">
                                        <i className="fa fa-line-chart" /> <span className="ms-1 d-none d-sm-inline">รายได้ของฉัน</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/page5">
                                    <a href="#" className="nav-link px-0 align-middle text-white text-decoration-none">
                                        <i className="fa fa-cube" /> <span className="ms-1 d-none d-sm-inline">สินค้าทั้งหมด</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <div className="col py-3" style={{ backgroundColor: '#BAEBE7' }}>
                    <nav class="navbar">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#" style={{ color: '#09979B' }}>เปลี่ยนรหัสผ่าน</a>
                            <div className="position-absolute bottom-0 end-0">
                                <button className="btn dropdown-toggle" data-bs-toggle="dropdown">
                                    <img src="https://media.istockphoto.com/id/1206439390/photo/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-circle-on-black.jpg?s=170667a&w=0&k=20&c=xIcUug38E_KlqT3HjxDYSQE7ZlMyV0y0vKmkXmr016U=" alt="SmallProfile" style={{ width: '40px' }} className="rounded-pill" />&nbsp;
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">บัญชีของฉัน</a></li>
                                    <li><a class="dropdown-item" href="#">แชท</a></li>
                                    <li><a class="dropdown-item" href="#">ออกจากระบบ</a></li>
                                </ul>
                                <button className="btn" type="button" style={{ background: '#ffcb42', margin: '5px' }}>บัญชีผู้ซื้อ</button>
                            </div>
                        </div>
                    </nav>
                    <div className="overflow-auto card" style={{ padding: '3%', margin: '5px', width: '100%', maxHeight: '550px' }}>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <label htmlFor="inputPasswordO" className="col-sm-2 col-form-label">รหัสผ่านปัจจุบัน :</label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="oldPassword"
                                            value={oldPassword}
                                            onChange={handleOldPasswordChange}
                                        />
                                        <span className="form-text small text-muted">Contain only English letters and numbers.</span>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputPasswordN" className="col-sm-2 col-form-label">รหัสผ่านใหม่ :</label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="newPassword"
                                            value={newPassword}
                                            onChange={handleNewPasswordChange}
                                        />
                                        <span className="form-text small text-muted">Contain only English letters and numbers.</span>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputPasswordV" className="col-sm-2 col-form-label">ยืนยันรหัสผ่านใหม่ :</label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="confirmPassword"
                                            value={confirmPassword}
                                            onChange={handleConfirmPasswordChange}
                                        />
                                        <span className="form-text small text-muted">Contain only English letters and numbers.</span>
                                    </div>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn" type="submit" style={{ backgroundColor: '#09979B', color: 'white' }} >ยืนยัน</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page2
*/
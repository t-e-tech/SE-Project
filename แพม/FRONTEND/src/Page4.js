import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Page4 = () => {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        const ctx = document.getElementById('revenue-chart');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
                datasets: [{
                    label: 'ยอดขายต่อเดือน',
                    data: [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000],
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    },
                    x: {
                        type: 'category',
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });

        setChart(myChart);

        return () => {
            myChart.destroy();
        }
    }, []);
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
                            <a class="navbar-brand" href="#" style={{ color: '#09979B' }}>รายได้ของฉัน</a>
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
                    <div className="card w-80" style={{ margin: '5px', padding: '1%' }}>
                        <h4>สรุปรายได้ทั้งหมด</h4>
                        <div className="row text-center">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">รายรับของฉันในเดือนนี้</h5>
                                        <p className="card-text">xxxx บาท</p>
                                        <br />
                                        <h5 className="card-title">รายรับทั้งหมดของฉัน</h5>
                                        <p className="card-text">xxxx บาท</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">จำนวนสินค้าที่ขายได้ในเดือนนี้</h5>
                                        <p className="card-text">xxxx บาท</p>
                                        <br />
                                        <h5 className="card-title">จำนวนสินค้าที่ขายได้ทั้งหมด</h5>
                                        <p className="card-text">xxxx บาท</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 style={{ paddingTop: '2%' }}>กราฟรวมยอดขายต่อเดือน</h4>
                        <div className="card-body">
                            <div>
                                <canvas id="revenue-chart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Page4
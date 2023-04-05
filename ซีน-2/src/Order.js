import React from "react";
import { Link } from "react-router-dom";
const Order = () =>{
    return(
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{ backgroundColor: '#09979B' }}>
                    <div className="d-flex flex-column flex-shrink-0  p-3 float-start  h-100 w-30 flex-top" style={{ width: 300, backgroundColor: "#009999" }}>
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <i className="fa fa-arrow-left" /><span className="fs-5 d-none d-sm-inline p-3">ELEcREc</span>
                        </a>
                    <div>
                        <a href="/"
                        className="d-flex align-items-center text-white text-decoration-none "
                        >
                        <img
                            src="./img/1.jpeg"
                            alt=""
                            width={128}
                            height={128}
                            className="rounded-circle me-2 h-100"
                            style={{ margin: 70 }}
                        />
                        </a>
                        <strong
                        className="text-white "
                        style={{ fontSize: 30, marginLeft: 120 }}
                        >
                        s
                        </strong>
                    </div>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start ">
                            <li className="nav-item">
                                <Link to="/">
                                    <a href="/" className="nav-link text-white " >
                                        
                                        <svg className="bi pe-none me-2" width={16} height={16}>
                                        <use xlinkHref="#home" />
                                        </svg>
                                        คำร้องร้านค้า
                                    </a>
                                </Link>
                            
                            </li>
                            <li >
                                <Link to="/order">
                                    <a
                                        href="/"
                                        className="nav-link active" style={{ backgroundColor: "#77acac" }}
                                        aria-current="page"
                                        
                                    >
                                        <svg className="bi pe-none me-2" width={16} height={16}>
                                        <use xlinkHref="#speedometer2" />
                                        </svg>
                                        ยืนยันคำร้อง
                                    </a>
                                </Link>
                            
                            </li>
                            <li >
                                <Link to="/point">
                                    <a href="/" className="nav-link text-white">
                                        <svg className="bi pe-none me-2" width={16} height={16}>
                                        <use xlinkHref="#table" />
                                        </svg>
                                        คำร้องการให้คะแนน
                                    </a>
                                </Link>
                            
                            </li>
                        </ul>
                    </div>
                </div>    
                <div className="col py-3" style={{ backgroundColor: '#BAEBE7' }}>

                    <div
                        className=" bi pe-none me-2"
                        style={{ margin: 40, fontSize: 30, color: "#009999" }}
                    >
                        คำร้องร้านค้า
                        <div
                        className="p-5 "
                        style={{
                            backgroundColor: "white",
                            borderRadius: 15,
                            marginTop: 20,
                            width: "80%"
                        }}
                        >
                        <div className=" align-items-center text-white  ">
                            <ul
                            className="p-3 ms-4 mb-3 nav-link"
                            style={{
                                backgroundColor: "#009999",
                                width: "95%",
                                borderRadius: 15
                            }}
                            >
                            <div className="d-flex">
                                <div>
                                <div className="" style={{ fontSize: 24 }}>
                                    ECOFLOW THAILAND DELTA PRO PORTABLE POWER
                                </div>
                                <div className="d-flex">
                                    <img
                                    src="./img/02-600x559.jpeg" alt=""
                                    style={{ width: 150, borderRadius: 10 }}
                                    className="w-15 me-4 mt-3"
                                    />
                                    <div className="mt-3" style={{ fontSize: 24 }}>
                                    แบตเตอรี่สำรองพกพา ECOFLOW BLACK 7200W
                                    </div>
                                </div>
                                </div>
                                <div style={{ marginLeft: 120 }}>
                                <div style={{ fontSize: 24, color: "#92ca8a" }}>
                                    คำสั่งซื้อได้รับการยื่นยันแล้ว
                                </div>
                                <div
                                    style={{ fontSize: 24, marginTop: 130, marginLeft: 200 }}
                                >
                                    ฿1,400
                                </div>
                                </div>
                            </div>
                            </ul>
                            <ul
                            className="p-3 ms-4 mb-3 nav-link"
                            style={{
                                backgroundColor: "#009999",
                                width: "95%",
                                borderRadius: 15
                            }}
                            >
                            <div className="d-flex">
                                <div>
                                <div className="" style={{ fontSize: 24 }}>
                                    แบตเตอรี่ลิเธียม Lithium Polymer 12v 12Ah
                                </div>
                                <div className="d-flex">
                                    <img
                                    src="./img/300455-20191108112105-29160764782055831.jpeg" alt=""
                                    style={{ width: 150, borderRadius: 10 }}
                                    className="w-15 me-4 mt-3"
                                    />
                                    <div className="mt-3" style={{ fontSize: 24 }}>
                                    แบตเตอรี่ลิเธียม Lithium Polymer 12v 12Ah
                                    </div>
                                </div>
                                </div>
                                <div style={{ marginLeft: 190 }}>
                                <div style={{ fontSize: 24, color: "#92ca8a" }}>
                                    คำสั่งซื้อได้รับการยื่นยันแล้ว
                                </div>
                                <div
                                    style={{ fontSize: 24, marginTop: 130, marginLeft: 200 }}
                                >
                                    ฿1,200
                                </div>
                                </div>
                            </div>
                            </ul>
                            <ul
                            className="p-3 ms-4 mb-3 nav-link"
                            style={{
                                backgroundColor: "#009999",
                                width: "95%",
                                borderRadius: 15
                            }}
                            >
                            <div className="d-flex">
                                <div>
                                <div className="" style={{ fontSize: 24 }}>
                                    Lithium Battery 12.8V 100Ah Solar LiFePO4 1280Wh with BMS
                                </div>
                                <div className="d-flex">
                                    <img
                                    src="./img/2607-CSpower-Battery-Lithium-12V-100Ah.jpeg" alt=""
                                    style={{ width: 150, borderRadius: 10 }}
                                    className="w-15 me-4 mt-3"
                                    />
                                    <div className="mt-3" style={{ fontSize: 24 }}>
                                    2.8V 100Ah Solar LiFePO4 1280Wh
                                    </div>
                                </div>
                                </div>
                                <div style={{ marginLeft: 150 }}>
                                <div style={{ fontSize: 24, color: "#92ca8a" }}>
                                    คำสั่งซื้อได้รับการยื่นยันแล้ว
                                </div>
                                <div
                                    style={{ fontSize: 24, marginTop: 130, marginLeft: 200 }}
                                >
                                    ฿2,400
                                </div>
                                </div>
                            </div>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Order;
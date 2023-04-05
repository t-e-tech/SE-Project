import React from "react";
import { Link } from "react-router-dom";
const Orderdetails = () =>{
    return(
        <div>
            <div className="container-fluid min-vh-100" style={{ backgroundColor: "#baebe7" }}>
                <div className="d-flex ">
                    <div className="d-flex flex-column flex-shrink-0  p-3 float-start  h-100 w-30 flex-top">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                    >
                        <img src="./icon/11.png" alt="" />
                    </a>
                    </div>
                    <div className=" flex-column flex-shrink-0 ">
                    <div
                        className=" bi pe-none me-2 "
                        style={{ margin: 40, fontSize: 30, color: "#009999" }}
                    >
                        <div
                        className="p-5   position-fixed"
                        style={{ backgroundColor: "white", borderRadius: 15 , marginTop: 20,  width: "85%" ,}}
                        >
                        <div className=" align-items-center text-white  ">
                            <div style={{ color: "black" }} className="ms-4">
                            รายละเอียดคำสั่งซื้อ
                            </div>
                            <div style={{ color: "black" }} className="mt-2 ms-4 mb-3">
                            สินค้าที่สั่งซื้อ
                            </div>
                            <ul
                            className="p-3 ms-4 mb-3 nav-link"
                            style={{ backgroundColor: "#009999", borderRadius: 15 }}
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
                            <div style={{ color: "black", fontSize: 24 }} className="ิmesss-2">
                            <div
                                className="my-3"
                                style={{ backgroundColor: "#e0e0e07c", borderRadius: 10 }}
                            >
                                <div className=" d-flex w-70 m-2">
                                <div className="mx-3 pb-1 pt-1 mt-1 mb-1">
                                    หมายเลขคำสั่งซื้อ :
                                </div>
                                <div className="mt-2" style={{ marginLeft: 50  }}>
                                    1234567891234567
                                </div>
                                </div>
                                <div className="d-flex ">
                                <div className="mx-3 pb-1 pt-1 mt-1 mb-1">
                                    เวลาที่ชำระเงิน :
                                </div>
                                <div className="mt-2 " style={{ marginLeft: 90  }}>
                                    20-02-2023 11.20
                                </div>
                                </div>
                            </div>
                            <div
                                className="mb-3"
                                style={{ backgroundColor: "#e0e0e07c", borderRadius: 10 }}
                            >
                                <div className="d-flex">
                                <div className="mx-3 pb-1 pt-1 mt-1 mb-1">
                                    เลขที่บัญชีร้านค้า :
                                </div>
                                <div className="mt-2 " style={{ marginLeft: 70  }}>
                                    1234567890
                                </div>
                                </div>
                            </div>
                            <div
                                className="mb-3 "
                                style={{ backgroundColor: "#e0e0e07c", borderRadius: 10 }}
                            >
                                <div className="d-flex">
                                <div className="mx-3 pb-1 pt-1 mt-1 mb-1">
                                    สถานะของร้านค้า :
                                </div>
                                <p className="mt-2 " style={{ marginLeft: 70  }}>
                                    ผู้ซื้อกดรับสินค้าแล้ว
                                </p>
                                </div>
                            </div>
                            <div style={{ backgroundColor: "#e0e0e07c", borderRadius: 10 }}>
                                <div className="d-flex mb-3">
                                <div className="mx-3 pb-1 pt-1 mt-1 mb-1">
                                    จำนวนเงินที่ต้องโอนให้ร้านค้า :
                                </div>
                                <div className="mt-2 " style={{ marginLeft: 50  }}>
                                    $99
                                </div>
                                </div>
                            </div>
                            <div
                                className="float-end"
                                style={{ color: "black", fontSize: 24 }}
                            >
                                <Link to="/order"> 
                                    <button
                                    className="p-2 m-2"
                                    style={{
                                        border: "none",
                                        borderRadius: 10,
                                        backgroundColor: "#09979B"
                                    }}
                                    >
                                        อนุมัติ
                                    </button>
                                </Link>
                                <Link to="/order"> 
                                    <button
                                    className="p-2 m-2"
                                    style={{
                                        border: "none",
                                        borderRadius: 10,
                                        backgroundColor: "#CA5252"
                                    }}
                                    >    
                                        ไม่อนุมัติ
                                    </button>
                                </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
  );
}
export default Orderdetails;
import React from "react";
import { Link } from 'react-router-dom';

const Shop = () =>{
    return(
        <div className="container-fluid">
             <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{ backgroundColor: '#09979B' }}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"> 
                        
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <i className="fa fa-arrow-left" /><span className="fs-5 d-none d-sm-inline p-3">ELEcREc</span>
                        </a>
                    <div>
                        <a href="/" className="d-flex align-items-center text-white text-decoration-none " >
                            <img src="./img/1.jpeg" alt="" width={128} height={128} className="rounded-circle me-2 h-100" style={{ margin: 70 }}  />
                        </a>
                        <span className="text-white " style={{ fontSize: 30, marginLeft: 120 }} >
                            s
                        </span>
                    </div>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start ">
                        <li className="nav-item">
                            <Link to="/">
                                <a href="/" className="nav-link active" style={{ backgroundColor: "#77acac" }}>
                                    
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
                                    className="nav-link text-white"
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
                        <div className="p-5 "
                            style={{ backgroundColor: "white",  borderRadius: 15,marginTop: 20, width: "90%"    }}  >
                            <div className=" align-items-center text-white nav nav-pills ">
                                
                                <div  className="d-flex p-3 ms-4 mb-3 nav-item" style={{  backgroundColor: "#009999",  width: "95%", borderRadius: 15  }} >       
                                    <img src="./img/backend.jpeg" alt=""  style={{ width: 200, border: "2px solid black" }}  className="w-20 d-inline"/>
                                    <a href="/shopdetails"  className="nav-link text-white d-inline m-5 text-decoration-none">ร้าน PAMMY ELECTRONICS  </a>
                                </div>
                                <li
                                className="d-flex p-3 ms-4 mb-3"
                                style={{
                                    backgroundColor: "#009999",
                                    width: "95%",
                                    borderRadius: 15
                                }}
                                >
                                    <img
                                        src="./img/backend.jpeg" alt=""
                                        style={{ width: 200, border: "2px solid black" }}
                                        className="w-20"
                                    />
                                    <a href="/" className="m-5">ร้าน สมศรีอิเล็กส์</a>
                                </li>
        
                                <li
                                className="d-flex p-3 ms-4"
                                style={{
                                    backgroundColor: "#009999",
                                    width: "95%",
                                    borderRadius: 15
                                }}
                                >
                                <img
                                    src="./img/backend.jpeg" alt=""
                                    style={{ width: 200, border: "2px solid black" }}
                                    className="w-20"
                                />
                                
                                <a href="/" className="m-5">ร้าน PAMMY ELECTRONICS</a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
  );
}
export default Shop;
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
const Point = () =>{

  const [donetList, setdonetList] = useState([]);

  useEffect(() => {
    getdonet();
  }, []);

  const getdonet = async () => {
    const response = await fetch("http://localhost:3000/donet");
    const data = await response.json();
    setproductList(data);
  };

  const deleteproduct = (id) => {
    Axios.delete(`http://localhost:5000/deleteproduct/${id}`).then((response) => {
      setproductList(
        productList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };
    return(
       <div className="container-fluid">
             <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{ backgroundColor: '#09979B' }}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"> 
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <i className="fa fa-arrow-left" /><span className="fs-5 d-none d-sm-inline p-3">ELEcREc</span>
                        </a>
                    <div>
                        <a href="/" className="d-flex align-items-center text-white text-decoration-none ">
                        <img src="./img/1.jpeg"
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
                                    <a href="/" className="nav-link active" style={{ backgroundColor: "#77acac" }}>
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
                            className="p-3 ms-4 mb-3 nav-item"
                            style={{
                                backgroundColor: "#009999",
                                width: "95%",
                                borderRadius: 15
                            }}
                            >
                            <div className="d-flex">
                                <div>
                                <div className="" style={{ fontSize: 24 }}>
                                    รายการที่ 1
                                </div>
                                <div className="d-flex">
                                    <img
                                    src="./img/02-600x559.jpeg" alt=""
                                    style={{ width: 150, borderRadius: 10 }}
                                    className="w-15 me-4 mt-3"
                                    />
                                    <div>
                                    <div className="mt-3" style={{ fontSize: 24 }}>
                                        อุปกรณ์ : โทรศัพท์มือถือ iphone 3s
                                    </div>
                                    <div className="mt-1" style={{ fontSize: 24 }}>
                                        สภาพ : ใช้งานไม่ได้
                                    </div>
                                    <div className="d-flex mt-4 pt-2">
                                        <div style={{ fontSize: 24 }}>ให้คะแนน :</div>
                                        <div
                                        className="px-5 pt-1 m-1"
                                        style={{
                                            fontSize: 20,
                                            color: "black",
                                            backgroundColor: "#FFCB42",
                                            border: "none",
                                            borderRadius: 10,
                                            alignContent: "center"
                                        }}
                                        >
                                        100
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div style={{ marginLeft: 230 }}>
                                <button className="btn btn-danger text-black m-1" style={{  fontSize: 20, color: "black",  backgroundColor: "#FFCB42", border: "none",  borderRadius: 10,alignContent: "center" }} onClick={() => {deletepoint(val.id)}}>ลบคำร้อง</button>
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
                                    รายการที่ 2
                                </div>
                                <div className="d-flex">
                                    <img
                                    src="./img/300455-20191108112105-29160764782055831.jpeg" alt=""
                                    style={{ width: 150, borderRadius: 10 }}
                                    className="w-15 me-4 mt-3"
                                    />
                                    <div>
                                    <div className="mt-3" style={{ fontSize: 24 }}>
                                        อุปกรณ์ : แบตเตอร์รี่รถยน์ GOLD
                                    </div>
                                    <div className="mt-1" style={{ fontSize: 24 }}>
                                        สภาพ : ใช้งานไม่ได้
                                    </div>
                                    <div className="d-flex mt-4 pt-2">
                                        <div style={{ fontSize: 24 }}>ให้คะแนน :</div>
                                        <div
                                        className="px-5 pt-1 m-1"
                                        style={{
                                            fontSize: 20,
                                            color: "black",
                                            backgroundColor: "#FFCB42",
                                            border: "none",
                                            borderRadius: 10,
                                            alignContent: "center"
                                        }}
                                        >
                                        100
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div style={{ marginLeft: 250 }}>
                                    <button className="btn btn-danger text-black m-1" style={{  fontSize: 20, color: "black",  backgroundColor: "#FFCB42", border: "none",  borderRadius: 10,alignContent: "center" }} onClick={() => {deletepoint(val.id)}}>ลบคำร้อง</button>
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
                                    รายการที่ 3
                                </div>
                                <div className="d-flex">
                                    <img
                                    src="./img/2607-CSpower-Battery-Lithium-12V-100Ah.jpeg" alt=""
                                    style={{ width: 150, borderRadius: 10 }}
                                    className="w-15 me-4 mt-3"
                                    />
                                    <div>
                                    <div className="mt-3" style={{ fontSize: 24 }}>
                                        อุปกรณ์ : Board Raspberry Pi2
                                    </div>
                                    <div className="mt-1" style={{ fontSize: 24 }}>
                                        สภาพ : ใช้งานไม่ได้
                                    </div>
                                    <div className="d-flex mt-4 pt-2">
                                        <div style={{ fontSize: 24 }}>ให้คะแนน :</div>
                                        <div
                                        className="px-5 pt-1 m-1"
                                        style={{
                                            fontSize: 20,
                                            color: "black",
                                            backgroundColor: "#FFCB42",
                                            border: "none",
                                            borderRadius: 10,
                                            alignContent: "center"
                                        }}
                                        >
                                        100
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div style={{ marginLeft: 270 }}>
                                    <button className="btn btn-danger text-black m-1" style={{  fontSize: 20, color: "black",  backgroundColor: "#FFCB42", border: "none",  borderRadius: 10,alignContent: "center" }} onClick={() => {deletepoint(val.id)}}>ลบคำร้อง</button>
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
export default Point;
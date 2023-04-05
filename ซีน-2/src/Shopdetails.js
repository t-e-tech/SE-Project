import React from "react";
import { Link } from "react-router-dom";
const Shopdetails = () =>{
    return(
        <div>
            <div className="container-fluid min-vh-100" style={{ backgroundColor: "#baebe7" }}>
                <div className=" p-3 float-start    ">
                    <a
                        href="/"
                        className=" align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                    >
                        <img src="./icon/11.png" alt=""/>
                    </a>
                </div>
                    <div
                        className=" bi pe-none me-2 "
                        style={{ fontSize: "180%" }}
                    >
                        <div className="text-center" style={{ fontSize: "100%", color: "#000" }}>
                                ข้อมูลร้านค้า
                        </div>
                        <div className="p-5 m-4 ms-5 ps-5 col position-fixed" style={{ backgroundColor: "white", borderRadius: 15, marginTop: 20,  width: "90%" ,height:"80%" }} >
                            <div className=" align-items-center text-white  ">
                                <div
                                className="d-flex"
                                style={{ fontSize: "smaller", color: "#626262" }}
                                >
                                <div className="m-5">
                                    <img src="./img/1111.jpeg" alt="" />
                                </div>
                                <div
                                    className=" m-5"
                                    style={{ color: "#626262", fontSize: "80%" }}
                                >
                                    <div
                                    className="m-2 ps-4 w-100 ms-5 p-2"
                                    style={{ backgroundColor: "#e0e0e07c", borderRadius: 10 }}
                                    >
                                    ชื่อร้านค้า
                                    </div>
                                    <div
                                    className="m-2 ps-4 w-100 ms-5 p-2"
                                    style={{ backgroundColor: "#e0e0e07c", borderRadius: 10 }}
                                    >
                                    ชื่อขนามสกุล
                                    </div>
                                    <div
                                    className="m-2 ps-4 w-100 ms-5 p-2"
                                    style={{ backgroundColor: "#e0e0e07c", borderRadius: 10 }}
                                    >
                                    เลขบัญชีธนาคาร
                                    </div>
                                    <div
                                    className="m-2 ps-4 w-100 ms-5 p-2"
                                    style={{ backgroundColor: "#e0e0e07c", borderRadius: 10 }}
                                    >
                                    หมายเลขโทรศัพท์
                                    </div>
                                </div>
                                
                            </div>
                            {/* <div style={{marginRight:"200px",marginBottom:'100px'}}> */}
                                    <div className="position-fixed end-0" style={{ color: "black", margin:"20px" ,marginRight:"250px", width:100}}>
                                        
                                        <Link to="/order">
                                            <a href="/"  className="ms-1 d-none d-sm-inline">อนุมัติ</a>
                                        </Link>
                                    </div>
                                    <div className=" position-fixed end-0 " style={{ margin: '20px',marginRight:"120px",  }}>
                                        
                                       
                                            <button className=" btn " type="button"  style={{ backgroundColor: "#CA5252", width : 100   }} onClick={'/order'}> ไม่อนุมัติ  </button>
                                   </div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                
            </div>

        </div>
  );
}
export default Shopdetails;
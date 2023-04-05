import { BrowserRouter as Router } from "react-router-dom";
import './page.css';
import { useState } from "react";
import dayjs from "dayjs";
import React from "react";


export default function Page5() {
    const [zipcode, setZipcode] = useState("");
    const [time, setTime] = React.useState(dayjs('2022-04-17T15:30'));
    const [code, setCode] = useState("");
    const [Cancel,SetCancel] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Success: &{zipcode}`);
    }
    const handleCancel = ()=>{
        SetCancel("");
    }

    return (
        <Router>
            <div className="container-fluid">
                <div className="row flex-nowarp">
                    <div className="box mt-2">
                        <p >รายละเอียดคำสั่งซื้อ</p>
                        <p >ที่อยู่ในการจัดส่ง</p>
                        <div className="box1">
                            <p>มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา | 0-3835-4580-4 | เลขที่ 199 หมู่ 6 ถนนสุขุมวิท ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230 </p>
                        </div>
                        <p className="mt-3">สินค้าที่สั่งซื้อ</p>
                        <div className='mt-2' style={{ width: '1000px' }}>
                            <div className='card w-80' style={{ margin: '10px', background: '#BAEBE7' }}>
                                <div className='card-body'>
                                    <h5 className='card-title'>
                                        ECOFLOW THAILAND  DELTA PRO PORTABLE POWER
                                    </h5>
                                    <div className="row g-0">
                                        <div className="col-md-3">
                                            <img src="https://www.lithiumbatterychina.com/file/2022/04/03-2.jpg" className="rounded mx-auto d-block" alt="" style={{ padding: '20px', maxWidth: '250px', maxHeight: '250px' }} />
                                        </div>
                                        <div className='col-md-8'>
                                            <div className='card-body'>
                                                <p className='card-text'>
                                                    แบตเตอรี่สำรองพกพา ECOFLOW BLACK 7200W
                                                </p>
                                                <div className="position-absolute top-50 end-0 translate-middle">
                                                    <p className='card-text'>$99</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div class="box4">
                                <span>หมายเลขคำสั่งซื้อ</span>
                                <span>
                                    <input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
                                </span>
                                <p>
                                    <span>เวลาชำระเงิน</span>
                                </p>
                            </div>
                            <div class="box4">
                                <span>กรอกหมายเลขพัสดุ</span>
                                <input type="text" value={zipcode} onChange={(e)=> setZipcode(e.target.value)}/>
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <p></p>
                                <button className="btn" type="submit" onClick={handleCancel} style={{ background: '#ffcb42', }}>
                                    ยกเลิก
                                </button>

                                <button className="btn" type="submit" style={{ background: '#09979B', color: 'white' }}>
                                    ตกลง
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </Router>
    );
}
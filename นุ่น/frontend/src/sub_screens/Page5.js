import { BrowserRouter as Router } from "react-router-dom";
import './page.css';
import { useState } from "react";
import dayjs from "dayjs";
import React from "react";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import {TimePicker} from "antd";
dayjs.extend(customParseFormat);
const onChange = (time,timeString)=>{
    console.log(time,timeString);
};
export default function Page5() {
    const [zipcode, setZipcode] = useState("");
    const [code, setCode] = useState("");
    

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Success: &{zipcode}`);
    }
    const handleCancel = ()=>{
        setZipcode("");
        setCode("");
        
    }

    return (
        <Router>
            <div className="container-fluid">
                <div className="row flex-nowarp" style={{paddingLeft:'50px'}}>
                    <div className=" mt-2" style={{width:'1200px',height:'725px',background:'#ffffff',paddingTop:'15px',paddingLeft:'20px',borderRadius:'20px'}}>
                        <p >รายละเอียดคำสั่งซื้อ</p>
                        <p >ที่อยู่ในการจัดส่ง</p>
                        <div className="box1">
                            มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา | 0-3835-4580-4 | เลขที่ 199 หมู่ 6 ถนนสุขุมวิท ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230
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
                                    <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00','HH:mm')}  style={{textAlign: 'end'}}/>
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
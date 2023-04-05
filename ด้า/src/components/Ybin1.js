import React, { Component } from 'react';
//หน้านี้ติดเรื่องรูปกลับจัดกล่องข้อความ
export default class Ybin1 extends Component {
    render() 
    {
        return(
            <div className="Ybin1">
                <div className ="container">
                    <div style={{display: 'block',marginLeft:'auto',marginRight:'auto',borderRadius:'40px',backgroundColor: '#FFFFFF',height:'400px',width:'900px',padding: '50px'}}>
                        <a href="/YPoint">
                            <div style={{fontSize: '30px',textAlign:'right',color:'black'}}>                            
                                    x               
                            </div>
                        </a>
                        <div style={{color: 'red',textAlign:'left',fontSize: '40px'}}>
                            ขั้นตอนต่อไป
                        </div>
                        <div style={{color:'black',textAlign:'left',fontSize: '25px'}}>
                            สามารถนำขยะอิเล็กทรอนิกส์ของคุณไปยังจุดรับทิ้งได้เลยค่ะ
                        </div>
                    </div>
                    <div style={{color:'white',textAlign:'left',fontSize: '20px'}}>
                            เมื่อไปยังจุดรับทิ้ง จะมีพนักงานในการยืนยันขยะอิเล็กทรอนิกส์ของคุณ และคุณสามารถสะสมแต้มคะแนนสำหรับ
                            การทิ้งขยะอิเล็กทรอนิกส์ เพื่อนำมาเป็นส่วนลด ในการซื้อ-ขาย สินค้าภายในเว็บไซต์ได้
                    </div>
                </div>
            </div>
        );
    }
}
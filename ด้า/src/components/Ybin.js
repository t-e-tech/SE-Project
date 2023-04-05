//ยืนยันการทิ้งขยะว่าจะทิ้งเองหรือว่าส่งเป็นพัสดุมา
//หน้านี้ติดเรื่องการจัดให้สวยงามอย่างเดียว
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
export default class Ybin extends Component {
    render() 
    {
        return(
            <div className="Ybin">
                <div className ="container">
                    <div style={{display: 'block',marginLeft:'auto',marginRight:'auto',borderRadius:'40px',backgroundColor: '#FFFFFF',height:'400px',width:'900px',padding: '90px'}}>
                        <a href="/App">
                            <div style={{fontSize: '30px',textAlign:'right',color:'black'}}>                            
                                    x               
                            </div>
                        </a>
                        <div style={{color: 'red',textAlign:'center',fontSize: '40px'}}>
                            คุณบริจาคขยะอิเล็กทรอนิกส์ด้วยวิธีการใด?
                        </div>
                        <a href="/Ybin1">
                            <div style={{color: 'black',textAlign:'left',fontSize: '20px'}}>
                                ไปจุดรับขยะเอง
                            </div>
                        </a>
                        <a href="/Ybin2">
                            <div style={{color:'black',textAlign:'right',fontSize: '20px'}}>
                                ส่งพัสดุไปโดยตรง
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

//ป๊อปอัพการให้คะแนนสำเร็จเเล้ว
import React, { Component } from 'react';
export default class Home extends Component {
    render() 
    {
        return(
            <div className="Home">
                <div className ="container">
                    <div style={{display: 'block',marginLeft:'auto',marginRight:'auto',borderRadius:'40px',backgroundColor: '#FFFFFF',height:'400px',width:'900px',padding: '100px'}}>
                        <a href="/App">
                            <div style={{fontSize: '30px',textAlign:'right',color:'black'}}>                            
                                    x               
                            </div>
                        </a>
                        <div style={{color: 'red',textAlign:'center',fontSize: '50px'}}>
                            ขอบคุณที่บริจาคของกับเรา!
                        </div>
                        <div style={{color:'black',textAlign:'center',fontSize: '30px'}}>
                            เมื่อเราได้รับของบริจาคแล้วแต้มจะถูกเพิ่มภายใน 7 วัน
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

 
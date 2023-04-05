import React, { Component } from 'react';
//import Modal from 'react-awesome-modal';
//import { Link } from 'react-router-dom';
//ป๊อปอัพต้องการรับคะแนนหรือไม่ต้องการรับคะแนน
export default class YPoint extends Component {
    render() 
    {
        return(
            <div className="YPoint">
                <div className ="container">
                    <div style={{display: 'block',marginLeft:'auto',marginRight:'auto',borderRadius:'40px',backgroundColor: '#FFFFFF',height:'400px',width:'900px',padding: '90px'}}>
                        <div style={{color: 'black',textAlign:'center',fontSize: '40px'}}>
                            คุณต้องการรับคะแนนหรือไม่
                        </div>
                        <a href="/App">
                            <div style={{color: 'black',textAlign:'left',fontSize: '20px'}}>
                                ไม่ต้องการ
                            </div>
                        </a>
                        <a href="/YFol">
                            <div style={{color:'black',textAlign:'right',fontSize: '20px'}}>
                                ต้องการ
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

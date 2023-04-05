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
                            คุณต้องการติดตามสถานะของขยะหรือไม่
                        </div>
                        <a href="/App">
                            <div style={{color: 'black',textAlign:'left',fontSize: '20px'}}>
                                ไม่ต้องการ
                            </div>
                        </a>
                        <a href="/KPass">
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
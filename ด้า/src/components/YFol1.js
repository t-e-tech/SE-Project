import React, { Component } from 'react';
export default class YFol1 extends Component {
    render() 
    {
        return(
            <div className="YFol1">
                <div className ="container">
                    <div style={{display: 'block',marginLeft:'auto',marginRight:'auto',backgroundColor: '#FFFFFF',height:'680px',width:'1400px'}}>
                        <a href="/App">
                            <div style={{fontSize: '30px',textAlign:'right',color:'black'}}>                            
                                    x              
                            </div>
                        </a>
                        <div style={{color: 'black',textAlign:'center',fontSize: '50px'}}>
                            สถานะการติดตาม  
                        </div>
                        <div style={{color: 'black',textAlign:'left',fontSize: '30px'}}>
                            รอรับอุปกรณ์อิเล็กทรอนิกส์รีไซเคิล
                            <div>
                                
                            </div>
                        </div>
                        <div style={{color:'black',textAlign:'left',fontSize: '30px'}}>
                            กำลังดำเนินการ
                        </div>
                        <a href="/YFol2">
                            <div style={{color:'black',textAlign:'center',fontSize: '20px'}}>
                                เสร็จสิ้น
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
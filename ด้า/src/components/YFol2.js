import React, { Component } from 'react';
export default class YFol2 extends Component {
    render() 
    {
        return(
            <div className="YFol2">
                <div className ="container">
                    <div style={{display: 'block',marginLeft:'auto',marginRight:'auto',borderRadius:'40px',backgroundColor: '#FFFFFF',height:'400px',width:'900px',padding: '100px'}}>
                        <a href="/App">
                            <div style={{fontSize: '30px',textAlign:'right',color:'black'}}>                            
                                    x               
                            </div>
                        </a>
                        <div style={{color: 'black',textAlign:'center',fontSize: '30px'}}>
                            สถานะของคุณ
                        </div>
                        <div style={{color:'red',textAlign:'center',fontSize: '50px'}}>
                            สำเร็จ !
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
export default class KPass extends Component {
    render() 
    {
        return(
            <div className="KPass">
                <div className ="container">
                    <div style={{display: 'block',marginLeft:'auto',marginRight:'auto',borderRadius:'40px',backgroundColor: '#FFFFFF',height:'400px',width:'900px',padding: '100px'}}>
                        <a href="/App">
                            <div style={{fontSize: '30px',textAlign:'right',color:'black'}}>                            
                                    x               
                            </div>
                        </a>
                        <div style={{color: 'black',textAlign:'center',fontSize: '50px'}}>
                            กรุณาป้อนรหัส
                        </div>
                        <div className="card card-body my-3">
                            <form>
                                <input type="text" class="form-control" value=""/>
                            </form>
                        </div>
                        <a href="/YFol1">
                            <div style={{color:'black',textAlign:'center',fontSize: '20px'}}>
                                ยืนยัน
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
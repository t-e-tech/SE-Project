
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './page.css';
import Process from './Process';

export default function Page3() {
    return (
        <Router>
            <div className="container-fluid">
                <Link style={{textDecoration: 'none',color: 'black'}} to='/ขั้นตอนการสั่งซื้อ'>
                <div className='mt-3' style={{ width: '1220px', }}>
                    <div className='card w-80' style={{ margin: '10px' }}>
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
                </Link>
                
            </div>

            <div>
                <Switch>
                    <Route path='/ขั้นตอนการสั่งซื้อ' component={Process}/>
                </Switch>
            </div>
        </Router>

    );
}
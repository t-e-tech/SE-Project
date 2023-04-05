import React from 'react';
import { BrowserRouter as Router, Route,NavLink as Link, Switch } from 'react-router-dom';
import './Page1.css';
import Avatar from 'react-avatar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Page4 from '../sub_screens/Page4';
import Page3 from '../sub_screens/Page3';
import Page5 from '../sub_screens/Page5';
import Admin from '../components/Admin';
import styled from '@emotion/styled';
export const NavLink = styled(Link)`
    color: #000000;
    &.active{
        color: #FFCB42;
    }
`;

export default function MySell() {
    return (
        <Router>
            <div className="container-fluid">
                <nav>
                    <div className="row">
                        <div className="col-sm mt-4" style={{ fontSize: '30px', color: '#09979B' }}>
                            การขายของฉัน
                        </div>

                        <div className='col-1 mt-3'>
                            <Avatar src='https://www.woolha.com/media/2020/03/eevee.png' variant="square" size='80px'/>
                        </div>

                        <div className='col-2 mt-5' style={{ fontSize: '20px' }}>
                            <Link to='/Admin'>
                                <button className="btn" type="button" style={{ background: '#ffcb42' }}>
                                    ไปยังบัญชีผู้ใช้
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>

                <nav>
                    <Container className='box3  mt-3' style={{ fontSize: '20px' }}>
                        <Row>
                            <Col><NavLink style={{textDecoration: 'none'}} to="/" activeStyle>ที่ยังไม่ได้จัดส่ง</NavLink></Col>
                            <Col><NavLink style={{textDecoration: 'none'}} to="/Page3" activeStyle>จัดส่งแล้ว</NavLink></Col>
                            <Col><NavLink style={{textDecoration: 'none'}} to="/Page4" activeStyle>สำเร็จ</NavLink></Col>
                        </Row>
                    </Container>
                </nav>

                <Link style={{textDecoration: 'none',color: 'black'}} to='/รายละเอียดคำสั่งซื้อ'>
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
                <div>
                    <Switch>
                        <Route exact path="/Page3"> <Page3 /> </Route>
                        <Route exact path="/Page4"> <Page4 /> </Route>
                        <Route exact path="/รายละเอียดคำสั่งซื้อ"> <Page5/></Route>
                        <Route exact path='/test' component={Admin} />
                    </Switch>
                </div>

            </div>


        </Router>

    );
}
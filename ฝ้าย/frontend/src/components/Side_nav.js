import { AccountCircleOutlined, PlaceOutlined, LockOutlined, ShoppingBagOutlined, NotificationsOutlined, TrendingUpOutlined, ViewInArOutlined } from "@mui/icons-material";
import Avatar from 'react-avatar';
export default function Side_nav() {
    return (
        <div className="container-fluid">

            <div className="row flex-nowrap">
                <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0' style={{ backgroundColor: '#09979B' }}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                        <h1 className="mt-3" >
                            ELEcREc
                        </h1>

                        <div className='mt-3'>
                            <Avatar src='https://www.woolha.com/media/2020/03/eevee.png' />

                        </div>

                        <div className='mt-3' style={{ fontSize: '30px' }}>
                            shop name
                        </div>


                        <div className="colunm">
                            <div className="col">
                                <nav>
                                    <div className="mt-5" style={{ color: 'white', fontSize: '15px' }}>
                                        <AccountCircleOutlined />
                                        <Link style={{ color: 'white' }} to="/">บัญชีของฉัน</Link>

                                    </div>


                                    <div className="mt-4" style={{ color: 'white', fontSize: '15px' }}>
                                        <PlaceOutlined />
                                        <Link style={{ color: 'white' }} to="/Page2">ที่อยู่</Link>
                                    </div>

                                    <div className="mt-4" style={{ color: 'white', fontSize: '15px' }}>
                                        <LockOutlined />
                                        <Link style={{ color: 'white' }} to="/password">เปลี่ยนรหัสผ่าน</Link>
                                    </div>

                                    <div className="mt-4" style={{ color: 'white', fontSize: '15px' }}>
                                        <ShoppingBagOutlined />

                                        <Link style={{ color: 'white' }} to="/mysell">การขายของฉัน</Link>
                                    </div>

                                    <div className="mt-4" style={{ color: 'white', fontSize: '15px' }}>
                                        <NotificationsOutlined />
                                        <Link style={{ color: 'white' }} to="/notification">การแจ้งเตือน</Link>
                                    </div>

                                    <div className="mt-4" style={{ color: 'white', fontSize: '15px' }}>
                                        <TrendingUpOutlined />
                                        <Link style={{ color: 'white' }} to="/profits">รายได้ของฉัน</Link>
                                    </div>

                                    <div className="mt-4" style={{ color: 'white', fontSize: '15px' }}>
                                        <ViewInArOutlined />
                                        <Link style={{ color: 'white' }} to="/admin">สินค้าทั้งหมด</Link>
                                    </div>

                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>       
    );
}

import {BrowserRouter as Router } from "react-router-dom";
import Avatar from "react-avatar";
import { Container, Row } from "react-bootstrap";


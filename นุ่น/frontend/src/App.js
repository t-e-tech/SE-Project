import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import MyAccount from "./screens/Page1";
import { AccountCircleOutlined, PlaceOutlined, LockOutlined, ShoppingBagOutlined, NotificationsOutlined, TrendingUpOutlined, ViewInArOutlined } from "@mui/icons-material";
import Avatar from 'react-avatar';
import MySell from './screens/Page2';
import Password from './components/Password';
import styled from '@emotion/styled';
import Profits from './components/Profits';
import Admin from './components/Admin';
import Notification from './components/Notification';
// {import { useMediaQuery } from 'react-responsive';}
import Setdescription from './sub_screens/Set';

export const NavSlide = styled(Link)`
  background: #09979B;
  &.active{
    color: #000000;
  }
`;


export default function App() {
  // {const isDesktop = useMediaQuery({
  //   query: "(min-width: 1224px)"
  // });
  // const isMobile = useMediaQuery({
  //   query: "(max-width: 786px)"
  // });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 1224px)"
  // });
  // const isPortrait = useMediaQuery({
  //   query: "(orientation: portrait)"
  // });
  // const isRetina = useMediaQuery({
  //   query: "(min-resolution: 300dpi)"
  // });}
  return (
    <Router>
      {/* {{isDesktop && <DesktopWindows />}
      {isMobile && <MobileFriendly />}
      {isTablet && <Tablet />}
      <p>This is {isPortrait ? 'portrait' : 'landscape'} orientation</p>
      {isRetina && <p>You are test retina</p>}} */}
      <div className="container-fluid">
        <div className="row">
          <div className='col-auto col-md-3 col-xl-2 px-sm-2 px-0' style={{ backgroundColor: '#09979B' }}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

              <h1 className="mt-3" >
                ELEcREc
              </h1>

              <div className='mt-3'>่
                <Avatar src='https://www.woolha.com/media/2020/03/eevee.png' />

              </div>

              <div className='mt-3' style={{ fontSize: '30px' }}>
                shop name
              </div>


              <div className="colunm">
                <div className="col">
                  <nav>
                    <div>
                      <Link to='/'></Link>
                    </div>


                    <div className="mt-5" style={{ color: 'white', fontSize: '15px' }}>
                      <AccountCircleOutlined />
                      <NavSlide style={{ color: 'white', textDecoration: 'none' }} to="/Page1" >บัญชีของฉัน</NavSlide>
                    </div>

                    <div className="mt-4" style={{ color: 'white', fontSize: '15px' }}>
                      <PlaceOutlined />
                      <NavSlide style={{ color: 'white', textDecoration: 'none' }} to="/Address" >ที่อยู่</NavSlide>
                    </div>

                    <div className="mt-4" style={{ color: 'white', fontSize: '15px' }}>
                      <LockOutlined />
                      <NavSlide style={{ color: 'white', textDecoration: 'none' }} to="/password">เปลี่ยนรหัสผ่าน</NavSlide>
                    </div>

                    <div className="mt-4" style={{ color: 'white', fontSize: '15px' }}>
                      <ShoppingBagOutlined />

                      <NavSlide style={{ color: 'white', textDecoration: 'none' }} to="/my sell">การขายของฉัน</NavSlide>
                    </div>

                    <div className="mt-4" style={{ color: 'white', fontSize: '15px' }}>
                      <NotificationsOutlined />
                      <NavSlide style={{ color: 'white', textDecoration: 'none' }} to="/notification">การแจ้งเตือน</NavSlide>
                    </div>

                    <div className="mt-4" style={{ color: 'white', fontSize: '15px' }}>
                      <TrendingUpOutlined />
                      <NavSlide style={{ color: 'white', textDecoration: 'none' }} to="/profits">รายได้ของฉัน</NavSlide>
                    </div>

                    <div className="mt-4" style={{ color: 'white', fontSize: '15px' }}>
                      <ViewInArOutlined />
                      <NavSlide style={{ color: 'white', textDecoration: 'none' }} to="/admin">สินค้าทั้งหมด</NavSlide>
                    </div>

                  </nav>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-10">
            <Switch>

              <Route exact path='/'>
                <MyAccount />
              </Route>

              <Route exact path="/Page1" >
                <MyAccount />
              </Route>

              <Route exact path="/Address">
                <Setdescription />
              </Route>

              <Route exact path="/password" >
                <Password />
              </Route>

              <Route path="/my sell" >
                <MySell />
              </Route>

              <Route exact path="/notification" >
                < Notification/>
              </Route>

              <Route exact path="/profits" >
                < Profits/>
              </Route>

              <Route exact path="/admin" >
                < Admin/>
              </Route>
            </Switch>

          </div>
        </div>
      </div>
      
    </Router>
  );
}
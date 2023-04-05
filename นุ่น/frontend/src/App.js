import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import MyAccount from "./screens/Page1";
import { AccountCircleOutlined, PlaceOutlined, LockOutlined, ShoppingBagOutlined, NotificationsOutlined, TrendingUpOutlined, ViewInArOutlined, Tablet, MobileFriendly, DesktopWindows } from "@mui/icons-material";
import Avatar from 'react-avatar';
import MySell from './screens/Page2';
import Page1 from './styles/src/Page1';
import Page2 from './styles/src/Page2';
import styled from '@emotion/styled';
import Page3 from './styles/src/Page3';
import Page4 from './styles/src/Page4';
import Page5 from './styles/src/Page5';
import { useMediaQuery } from 'react-responsive';

export const NavSlide = styled(Link)`
  background: #09979B;
  &.active{
    color: #000000;
  }
`;


export default function App() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 1224px)"
  });
  const isPortrait = useMediaQuery({
    query: "(orientation: portrait)"
  });
  const isRetina = useMediaQuery({
    query: "(min-resolution: 300dpi)"
  });
  return (
    <Router>
      {isDesktop && <DesktopWindows />}
      {isMobile && <MobileFriendly />}
      {isTablet && <Tablet />}
      <p>This is {isPortrait ? 'portrait' : 'landscape'} orientation</p>
      {isRetina && <p>You are test retina</p>}

      <div className="container-fluid">
        <div className="row">
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
                <Page1 />
              </Route>


              <Route path="/password" >
                <Page2 />
              </Route>

              <Route path="/my sell" >
                <MySell />
              </Route>

              <Route path="/notification" >
                <Page3 />
              </Route>

              <Route path="/profits" >
                <Page4 />
              </Route>

              <Route path="/admin" >
                <Page5 />
              </Route>
            </Switch>

          </div>
        </div>
      </div>
    </Router>
  );
}
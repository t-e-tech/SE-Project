import React from "react";
import { Link, Router, Switch,Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from "axios";
import Page7 from './Page7';

const Page1 = () => {
  const [addressList, setaddressList] = useState([]);

  useEffect(() => {
    getaddress();
  }, []);

  const getaddress = async () => {
    const response = await fetch("http://localhost:5000/address");
    const data = await response.json();
    setaddressList(data);
  };

  const deleteaddress = (id) => {
    Axios.delete(`http://localhost:5000/deleteaddress/${id}`).then((response) => {
      setaddressList(
        addressList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">

        <div className="col py-3" style={{ backgroundColor: '#BAEBE7' }}>
          <nav class="navbar">
            <div class="container-fluid">
              <a class="navbar-brand" href="#" style={{ color: '#09979B' }}>ที่อยู่ของฉัน</a>
              <div className="position-absolute bottom-0 end-0">
                <button className="btn dropdown-toggle" data-bs-toggle="dropdown">
                  <img src="https://media.istockphoto.com/id/1206439390/photo/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-circle-on-black.jpg?s=170667a&w=0&k=20&c=xIcUug38E_KlqT3HjxDYSQE7ZlMyV0y0vKmkXmr016U="
                    alt="SmallProfile" style={{ width: '40px' }} className="rounded-pill" />&nbsp;
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">บัญชีของฉัน</a></li>
                  <li><a class="dropdown-item" href="#">แชท</a></li>
                  <li><a class="dropdown-item" href="#">ออกจากระบบ</a></li>
                </ul>
                <button className="btn" type="button" style={{ background: '#ffcb42', margin: '5px' }}>บัญชีผู้ซื้อ</button>
              </div>
            </div>
          </nav>
          <div className="overflow-auto" style={{ width: '100%', maxHeight: '600px' }} onLoad={getaddress}>
            {addressList.map((val, key) => {
              return (
                <div className="card w-80" style={{ margin: '5px' }}>
                  <div className="card-body">
                    <h5 className="card-title">{val.name}</h5>
                    <div className="position-absolute  end-0 translate-middle">
                      <button className="btn btn-danger m-1" onClick={() => { deleteaddress(val.id) }}>ลบ</button>
                    </div>

                    <p className="card-text">{val.address} {val.add1} {val.add2} {val.add3} {val.addnum}</p>
                    <p className="card-text">{val.tel}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Router>
            <div className="position-fixed bottom-0 end-0" style={{ margin: '20px' }}>
              <Link to="/page7">
                <button className="btn" type="button" style={{ background: '#ffcb42' }}>+ เพิ่มที่อยู่</button>
              </Link>
            </div>

            <Switch>
              <Route exact path="/page7" component={Page7} />
            </Switch>
          </Router>

        </div>
      </div>
    </div>
  )
}

export default Page1
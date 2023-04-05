/*
import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from "axios";

const Page5 = () => {

  const [productList, setproductList] = useState([]);

  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    const response = await fetch("http://localhost:5000/product");
    const data = await response.json();
    setproductList(data);
  };

  const deleteproduct = (id) => {
    Axios.delete(`http://localhost:5000/deleteproduct/${id}`).then((response) => {
      setproductList(
        productList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" style={{ backgroundColor: '#09979B' }}>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <i className="fa fa-arrow-left" /><span className="fs-5 d-none d-sm-inline p-3">ELEcREc</span>
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <Link to="#">
                  <a href="#" className="nav-link align-middle px-0 text-white text-decoration-none">
                    <i className="fa fa-user" /> <span className="ms-1 d-none d-sm-inline">บัญชีของฉัน</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/page1">
                  <a href="#" className="nav-link align-middle px-0 text-white text-decoration-none">
                    <i className="fa fa-map-marker" /> <span className="ms-1 d-none d-sm-inline">ที่อยู่</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/page2">
                  <a href="#" className="nav-link px-0 align-middle text-white text-decoration-none">
                    <i className="fa fa-lock" /> <span className="ms-1 d-none d-sm-inline">เปลี่ยนรหัสผ่าน</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#">
                  <a href="#" className="nav-link align-middle px-0 text-white text-decoration-none">
                    <i className="fa fa-shopping-basket" /> <span className="ms-1 d-none d-sm-inline">การขายของฉัน</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/page3">
                  <a href="#" className="nav-link px-0 align-middle text-white text-decoration-none">
                    <i className="fa fa-bell" /> <span className="ms-1 d-none d-sm-inline">การแจ้งเตือน</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/page4">
                  <a href="#" className="nav-link align-middle px-0 text-white text-decoration-none">
                    <i className="fa fa-line-chart" /> <span className="ms-1 d-none d-sm-inline">รายได้ของฉัน</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/page5">
                  <a href="#" className="nav-link px-0 align-middle text-white text-decoration-none">
                    <i className="fa fa-cube" /> <span className="ms-1 d-none d-sm-inline">สินค้าทั้งหมด</span>
                  </a>
                </Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
        <div className="col py-3" style={{ backgroundColor: '#BAEBE7' }}>
          <nav class="navbar">
            <div class="container-fluid">
              <a class="navbar-brand" href="#" style={{ color: '#09979B' }}>สินค้าทั้งหมด</a>
              <div className="position-absolute bottom-0 end-0">
                <button className="btn dropdown-toggle" data-bs-toggle="dropdown">
                  <img src="https://media.istockphoto.com/id/1206439390/photo/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-circle-on-black.jpg?s=170667a&w=0&k=20&c=xIcUug38E_KlqT3HjxDYSQE7ZlMyV0y0vKmkXmr016U=" alt="SmallProfile" style={{ width: '40px' }} className="rounded-pill" />&nbsp;
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

          <div className="overflow-auto" style={{ width: '100%', margin: '5px', maxHeight: '550px' }} onLoad={getproducts}>
            {productList.map((val, key) => {
              return (
                <div className="card w-80" style={{ margin: '10px' }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={val.product_img} className="rounded mx-auto d-block" alt="" style={{ padding: '20px', maxWidth: '250px', maxHeight: '250px' }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-text">ชื่อสินค้า : {val.product_name}</p>
                        <div className="position-absolute top-5 end-0 translate-middle">
                          <button className="btn btn-danger m-1" onClick={() => { deleteproduct(val.id) }}>ลบ</button>
                        </div>
                        <p className="card-text">รายละเอียดสินค้า : {val.product_description}</p>
                        <p className="card-text">ประเภทสินค้า : {val.product_type}</p>
                        <p className="card-text">ราคาสินค้า : {val.product_price}</p>
                        <p className="card-text">ค่าจัดส่ง : {val.product_sendprice}</p>
                        <p className="card-text">จำนวนสินค้า : {val.product_amount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="card w-80" style={{ margin: '10px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://media.istockphoto.com/id/1206439390/photo/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-circle-on-black.jpg?s=170667a&w=0&k=20&c=xIcUug38E_KlqT3HjxDYSQE7ZlMyV0y0vKmkXmr016U="
                    className="rounded mx-auto d-block" alt="" style={{ padding: '20px', maxWidth: '250px', maxHeight: '250px' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">ชื่อสินค้า : test </p>
                    <div className="position-absolute top-5 end-0 translate-middle">
                      <button className="btn btn-danger m-1" onClick={() => { }}>ลบ</button>
                    </div>
                    <p className="card-text">รายละเอียดสินค้า : test</p>
                    <p className="card-text">ประเภทสินค้า : test</p>
                    <p className="card-text">ราคาสินค้า : test</p>
                    <p className="card-text">ค่าจัดส่ง : test</p>
                    <p className="card-text">จำนวนสินค้า : test</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card w-80" style={{ margin: '10px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://media.istockphoto.com/id/1206439390/photo/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-circle-on-black.jpg?s=170667a&w=0&k=20&c=xIcUug38E_KlqT3HjxDYSQE7ZlMyV0y0vKmkXmr016U="
                    className="rounded mx-auto d-block" alt="" style={{ padding: '20px', maxWidth: '250px', maxHeight: '250px' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">ชื่อสินค้า : test </p>
                    <div className="position-absolute top-5 end-0 translate-middle">
                      <button className="btn btn-danger m-1" onClick={() => { }}>ลบ</button>
                    </div>
                    <p className="card-text">รายละเอียดสินค้า : test</p>
                    <p className="card-text">ประเภทสินค้า : test</p>
                    <p className="card-text">ราคาสินค้า : test</p>
                    <p className="card-text">ค่าจัดส่ง : test</p>
                    <p className="card-text">จำนวนสินค้า : test</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card w-80" style={{ margin: '10px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="https://media.istockphoto.com/id/1206439390/photo/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-circle-on-black.jpg?s=170667a&w=0&k=20&c=xIcUug38E_KlqT3HjxDYSQE7ZlMyV0y0vKmkXmr016U="
                    className="rounded mx-auto d-block" alt="" style={{ padding: '20px', maxWidth: '250px', maxHeight: '250px' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">ชื่อสินค้า : test </p>
                    <div className="position-absolute top-5 end-0 translate-middle">
                      <button className="btn btn-danger m-1" onClick={() => { }}>ลบ</button>
                    </div>
                    <p className="card-text">รายละเอียดสินค้า : test</p>
                    <p className="card-text">ประเภทสินค้า : test</p>
                    <p className="card-text">ราคาสินค้า : test</p>
                    <p className="card-text">ค่าจัดส่ง : test</p>
                    <p className="card-text">จำนวนสินค้า : test</p>
                  </div>
                </div>
              </div>
            </div>




          </div>

          <div className="position-fixed bottom-0 end-0" style={{ margin: '20px' }}>
            <Link to="/page6">
              <button className="btn" type="button" style={{ background: '#ffcb42' }}>+ เพิ่มสินค้า</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page5
*/
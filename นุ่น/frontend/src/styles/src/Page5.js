import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from "axios";
import Page6 from "./Page6";

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

          <div className="overflow-auto" style={{ width: '100%', margin: '5px', maxHeight: '600px' }} onLoad ={getproducts}>
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
                          <button className="btn btn-danger m-1" onClick={() => {deleteproduct(val.id)}}>ลบ</button>
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
          </div>

          <div className="position-fixed bottom-0 end-0" style={{ margin: '20px' }}>
            <Link to="/page6">
              <button className="btn" type="button" style={{ background: '#ffcb42' }}>+ เพิ่มสินค้า</button>
            </Link>
          </div>
          <div>
            <Switch>
              <Route exact path="/page6" component={Page6} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page5
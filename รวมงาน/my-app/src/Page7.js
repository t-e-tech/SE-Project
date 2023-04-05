import { useState } from "react";
import AddressForm from "./AddressForm";
import { Link } from 'react-router-dom';
import Axios from "axios";

const Page7 = () => {

  const [addressList, setaddressList] = useState([]);

  //Checkout page functionality
  const [error, setError] = useState("");

  //Name and phone
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  //AddressForm state
  const [houseNumber, setHouseNumber] = useState("");
  const [subdistrict, setSubDistrict] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [fullAddress, setFullAddress] = useState({});

  function onSelect(fulladdress) {
    const { subdistrict, district, province, zipcode } = fulladdress;
    setSubDistrict(subdistrict);
    setDistrict(district);
    setProvince(province);
    setZipcode(zipcode);
    setFullAddress([houseNumber, subdistrict, district, province, zipcode]);
    setError("");
    console.log("some fulladdress: ", fullAddress);
  }

  const addaddress = () => {
    if (!name || !phone || !houseNumber || !subdistrict || !district || !province || !zipcode) {
      alert('Please fill in all field!');
      return;
    }
    Axios.post("http://localhost:5000/createaddress", {
      name: name,
      phone: phone,
      houseNumber: houseNumber,
      subdistrict: subdistrict,
      district: district,
      province: province,
      zipcode: zipcode,
    })
      .then(response => {
        // Handle successful response from server
        alert('Insert address success!');
        setName('');
        setPhone('');
        setHouseNumber('');
        setSubDistrict('');
        setDistrict('');
        setProvince('');
        setZipcode('');
      })
      .catch(error => {
        // Handle error response from server
        alert('Failed to add adress');
        console.log(error);
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
              <a class="navbar-brand" href="#" style={{ color: '#09979B' }}>เพิ่มที่อยู่</a>
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
          <div className="overflow-auto card w-80" style={{ margin: '5px', padding: '1%', maxHeight: '550px' }}>
            <div className="card-body">
              <AddressForm
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                setError={setError}
                houseNumber={houseNumber}
                setHouseNumber={setHouseNumber}
                subdistrict={subdistrict}
                setSubDistrict={setSubDistrict}
                district={district}
                setDistrict={setDistrict}
                province={province}
                setProvince={setProvince}
                zipcode={zipcode}
                setZipcode={setZipcode}
                fullAddress={fullAddress}
                setFullAddress={setFullAddress}
                onSelect={onSelect}
              />
              <div className="d-grid gap-2 col-6 mx-auto pt-1">
                <button className="btn" type="button" style={{ backgroundColor: '#09979B', color: 'white' }} onClick={addaddress}>ยืนยัน</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Page7
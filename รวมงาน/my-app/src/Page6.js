/*
import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from "axios";

const Page6 = () => {

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [shippingCost, setShippingCost] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create form data
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("price", price);
        formData.append("shippingCost", shippingCost);
        formData.append("quantity", quantity);

        try {
            // Send POST request to server to add product to database
            const response = await Axios.post(
                "http://localhost:5000/products/add",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            alert('Insert product successfully');
            console.log(response.data);
            // Reset form
            setImage(null);
            setName("");
            setDescription("");
            setCategory("");
            setPrice("");
            setShippingCost("");
            setQuantity("");
        } catch (error) {
            console.error(error);
        }
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
                    <div className="overflow-auto card w-80" style={{ margin: '5px', padding: '1%', maxHeight: '550px' }}>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <label htmlFor="inputimg" className="col-sm-2 col-form-label">รูปภาพ :</label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="file"
                                            id="image"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            required
                                        />
                                    </div>
                                </div><br />
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">ชื่อสินค้า :</label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                            required
                                        />
                                    </div>
                                </div><br />
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">รายละเอียดสินค้า :</label>
                                    <div className="col-sm-10">
                                        <textarea
                                            className="form-control" rows={2} defaultValue={""}
                                            id="description"
                                            value={description}
                                            onChange={(event) => setDescription(event.target.value)}
                                            required
                                        />
                                    </div>
                                </div><br />
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">ประเภทสินค้า :</label>
                                    <div className="col-sm-10">
                                        <select id="category"
                                            class="form-select"
                                            value={category}
                                            onChange={(event) => setCategory(event.target.value)}>
                                            <option selected>เลือกประเภทสินค้า</option>
                                            <option value="อุปกรณ์อิเล็กทรอนิกส์ทั่วไป">อุปกรณ์อิเล็กทรอนิกส์ทั่วไป</option>
                                            <option value="มอเตอร์">มอเตอร์</option>
                                            <option value="แบตเตอรี่">แบตเตอรี่</option>
                                        </select>
                                    </div>
                                </div><br />
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">ราคา :</label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="number"
                                            id="price"
                                            value={price}
                                            onChange={(event) => setPrice(event.target.value)}
                                            required
                                        />
                                    </div>
                                </div><br />
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">ค่าจัดส่ง :</label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            type="number"
                                            id="shippingCost"
                                            value={shippingCost}
                                            onChange={(event) => setShippingCost(event.target.value)}
                                            required
                                        />
                                    </div>
                                </div><br />
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">จำนวนสินค้า :</label>
                                    <div className="col-sm-10">
                                        <input
                                            className="form-control"
                                            min={0} step={1} defaultValue={1}
                                            type="number"
                                            id="quantity"
                                            value={quantity}
                                            onChange={(event) => setQuantity(event.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto pt-3">
                                    <button className="btn" type="submit" style={{ backgroundColor: '#09979B', color: 'white' }}>ยืนยัน</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page6
*/
import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductReview,
  listProductDetails,
} from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../Redux/Constants/ProductConstants";
import moment from "moment";

const SingleProduct = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const productId = match.params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successCreateReview) {
      alert("Review Submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(productId));
  }, [dispatch, productId, successCreateReview]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(productId, {
        rating,
        comment,
      })
    );
  };
  return (
    <>
      <Header />
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                  </div>
                  <p>{product.description}</p>

                  <div className="product-count col-lg-7 ">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Price</h6>
                      <span>${product.price}</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6>
                      {product.countInStock > 0 ? (
                        <span>In Stock</span>
                      ) : (
                        <span>unavailable</span>
                      )}
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Reviews</h6>
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                      />
                    </div>
                    {product.countInStock > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Quantity</h6>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <button
                          onClick={AddToCartHandle}
                          className="round-black-btn"
                        >
                          Add To Cart
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* RATING */}
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3">REVIEWS</h6>
                {product.reviews.length === 0 && (
                  <Message variant={"alert-info mt-3"}>No Reviews</Message>
                )}
                {product.reviews.map((review) => (
                  <div
                    key={review._id}
                    className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
                  >
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <span>{moment(review.createdAt).calendar()}</span>
                    <div className="alert alert-info mt-3">
                      {review.comment}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <h6>WRITE A CUSTOMER REVIEW</h6>
                <div className="my-4">
                  {loadingCreateReview && <Loading />}
                  {errorCreateReview && (
                    <Message variant="alert-danger">
                      {errorCreateReview}
                    </Message>
                  )}
                </div>
                {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <div className="my-4">
                      <strong>Rating</strong>
                      <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      >
                        <option value="">Select...</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                      </select>
                    </div>
                    <div className="my-4">
                      <strong>Comment</strong>
                      <textarea
                        row="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <button
                        disabled={loadingCreateReview}
                        className="col-12 bg-black border-0 p-3 rounded text-white"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="my-3">
                    <Message variant={"alert-warning"}>
                      Please{" "}
                      <Link to="/login">
                        " <strong>Login</strong> "
                      </Link>{" "}
                      to write a review{" "}
                    </Message>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleProduct;


/*
เป็นหน้าแสดงข้อมูลสินค้าเดี่ยวของร้านค้าออนไลน์ โดยมีฟังก์ชันหลักดังนี้

useEffect ใช้สำหรับเรียก API เพื่อเรียกข้อมูลสินค้าและอัปเดตข้อมูลหลังจากทำการ submit รีวิวสินค้า
useState ใช้สำหรับเก็บค่าของตัวแปรที่ต้องการเปลี่ยนแปลงค่าได้
useSelector ใช้สำหรับการเรียกใช้ค่าใน Redux store แบบสับติดตามค่าที่เปลี่ยนแปลง
dispatch ใช้สำหรับส่ง action ไปยัง Redux store เพื่อเปลี่ยนแปลงข้อมูล
Header คือ component ที่แสดงหัวเว็บไซต์
Rating คือ component ที่แสดงคะแนนการตั้งค่าสินค้า
Link คือ component ที่แสดงลิงค์ที่ใช้สำหรับเปลี่ยนหน้าไปยัง URL ที่กำหนด
Loading คือ component ที่แสดงสถานะการโหลดข้อมูล
Message คือ component ที่แสดงข้อความเมื่อเกิดข้อผิดพลาด หรือข้อความแสดงข้อมูล
moment คือ library ที่ใช้สำหรับจัดการเกี่ยวกับเวลาเพื่อแสดงผลให้อ่านง่ายขึ้น
*/


/*
ฟังก์ชันหลักที่มีในโค้ดคือ SingleProduct และ AddToCartHandle ดังนี้
1.SingleProduct: เป็น functional component ที่แสดงหน้าสินค้าเดี่ยว ซึ่งมีฟังก์ชันหลักดังนี้
useState: เพื่อเก็บค่าของตัวแปรที่ต้องการเปลี่ยนแปลงค่าได้ เช่น rating และ comment.
useSelector: เพื่อเรียกใช้ค่าใน Redux store แบบสับติดตามค่าที่เปลี่ยนแปลง เช่น productDetails และ userLogin.
useEffect: เพื่อเรียก API เพื่อเรียกข้อมูลสินค้า และอัปเดตข้อมูลหลังจากทำการ submit รีวิวสินค้า เมื่อ productDetails เปลี่ยนแปลง.
dispatch: เพื่อส่ง action ไปยัง Redux store เพื่อเปลี่ยนแปลงข้อมูล เช่น productDetails, productReviewCreate, และ productUpdate.
Header: component ที่แสดงหัวเว็บไซต์
Rating: component ที่แสดงคะแนนการตั้งค่าสินค้า
Link: component ที่แสดงลิงค์ที่ใช้สำหรับเปลี่ยนหน้าไปยัง URL ที่กำหนด
Loading: component ที่แสดงสถานะการโหลดข้อมูล
Message: component ที่แสดงข้อความเมื่อเกิดข้อผิดพลาด หรือข้อความแสดงข้อมูล
moment: library ที่ใช้สำหรับจัดการเกี่ยวกับเวลาเพื่อแสดงผลให้อ่านง่ายขึ้น

2.ฟังก์ชัน AddToCartHandle ในโค้ดด้านบนเป็น event handler ที่ใช้สำหรับการเพิ่มสินค้าลงในตะกร้าสินค้า เมื่อผู้ใช้คลิกที่ปุ่ม "Add to Cart" ซึ่งเป็นส่วนหนึ่งของหน้าแสดงสินค้าเดี่ยว
ฟังก์ชันนี้จะทำงานโดยใช้ hook สองตัวคือ useDispatch และ useSelector ซึ่งเป็น hook ของ Redux ในการเชื่อมต่อกับ Redux store และเรียกใช้ action ต่างๆ เพื่อจัดการกับข้อมูลสินค้าในตะกร้าสินค้า
ฟังก์ชันนี้จะเรียกใช้ useDispatch เพื่อเรียก dispatch ฟังก์ชัน addToCart ที่อยู่ใน action ของ Redux ซึ่งจะเพิ่มสินค้าเข้าไปในตะกร้าสินค้า และส่ง payload ของสินค้าไปยัง reducer เพื่ออัปเดตข้อมูลใน Redux store ทำให้สามารถเรียกใช้ได้จากทุกๆ component ในแอพพลิเคชัน
นอกจากนี้ฟังก์ชันนี้ยังเรียกใช้ useSelector เพื่อเรียกค่าของตัวแปรใน Redux store ที่เกี่ยวข้องกับสินค้า เช่น cartItems ซึ่งเป็นข้อมูลสินค้าที่อยู่ในตะกร้าสินค้า หลังจากที่เพิ่มสินค้าเข้าไป ฟังก์ชันจะทำการอัปเดตข้อมูลใน Redux store และแสดงผลให้ผู้ใช้เห็นว่าสินค้าถูกเพิ่มลงในตะกร้าสินค้าเรียบร้อยแล้วผ่าน Message component ที่แสดงผลบนหน้าแสดงสินค้าเดี่ยว
*/
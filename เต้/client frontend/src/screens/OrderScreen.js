import React, { useEffect, useState } from "react"; //เป็นการ import React และ hooks สำหรับการใช้งาน state และ effect
import { Link } from "react-router-dom"; //เป็นการ import Link ของ React Router สำหรับการทำ link ในเว็บไซต์
import Header from "./../components/Header"; //เป็นการ import Component Header ที่อยู่ในโฟลเดอร์ components ของโปรเจค
import { PayPalButton } from "react-paypal-button-v2"; //เป็นการ import Component PayPalButton สำหรับการใช้งาน PayPal API
import { useDispatch, useSelector } from "react-redux"; //เป็นการ import hooks ของ Redux สำหรับการใช้งาน state และ dispatch action
import { getOrderDetails, payOrder } from "../Redux/Actions/OrderActions"; //เป็นการ import action creators สำหรับการดึงข้อมูลรายละเอียดการสั่งซื้อและการชำระเงินจาก server
import Loading from "./../components/LoadingError/Loading"; //เป็นการ import Component Loading ที่อยู่ในโฟลเดอร์ components/LoadingError ของโปรเจค
import Message from "./../components/LoadingError/Error"; //เป็นการ import Component Message ที่อยู่ในโฟลเดอร์ components/LoadingError ของโปรเจค
import moment from "moment"; //เป็นการ import moment.js สำหรับการจัดการกับวันที่และเวลา
import axios from "axios"; //เป็นการ import axios สำหรับการทำ HTTP requests
import { ORDER_PAY_RESET } from "../Redux/Constants/OrderConstants"; //เป็นการ import constant สำหรับการ reset state ของการชำระเงิน
import { URL } from "../Redux/Url"; //เป็นการ import URL ของ server ที่จะใช้ในการทำ HTTP requests

const OrderScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const [sdkReady, setSdkReady] = useState(false);
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(`${URL}/api/config/paypal`);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, order]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  };

  return (
    <>
      <Header />
      <div className="container">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row  order-detail">
              <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="alert-success order-box">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="col-md-8 center">
                    <h5>
                      <strong>Customer</strong>
                    </h5>
                    <p>{order.user.name}</p>
                    <p>
                      <a href={`mailto:${order.user.email}`}>
                        {order.user.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="alert-success order-box">
                      <i className="fas fa-truck-moving"></i>
                    </div>
                  </div>
                  <div className="col-md-8 center">
                    <h5>
                      <strong>Order info</strong>
                    </h5>
                    <p>Shipping: {order.shippingAddress.country}</p>
                    <p>Pay method: {order.paymentMethod}</p>
                    {order.isPaid ? (
                      <div className="bg-info p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Paid on {moment(order.paidAt).calendar()}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-danger p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Not Paid
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="alert-success order-box">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="col-md-8 center">
                    <h5>
                      <strong>Deliver to</strong>
                    </h5>
                    <p>
                      Address: {order.shippingAddress.city},{" "}
                      {order.shippingAddress.address},{" "}
                      {order.shippingAddress.postalCode}
                    </p>
                    {order.isDelivered ? (
                      <div className="bg-info p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Delivered on {moment(order.deliveredAt).calendar()}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-danger p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Not Delivered
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row order-products justify-content-between">
              <div className="col-lg-8">
                {order.orderItems.length === 0 ? (
                  <Message variant="alert-info mt-5">
                    Your order is empty
                  </Message>
                ) : (
                  <>
                    {order.orderItems.map((item, index) => (
                      <div className="order-product row" key={index}>
                        <div className="col-md-3 col-6">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="col-md-5 col-6 d-flex align-items-center">
                          <Link to={`/products/${item.product}`}>
                            <h6>{item.name}</h6>
                          </Link>
                        </div>
                        <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                          <h4>QUANTITY</h4>
                          <h6>{item.qty}</h6>
                        </div>
                        <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                          <h4>SUBTOTAL</h4>
                          <h6>${item.qty * item.price}</h6>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              {/* total */}
              <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Products</strong>
                      </td>
                      <td>${order.itemsPrice}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Shipping</strong>
                      </td>
                      <td>${order.shippingPrice}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Tax</strong>
                      </td>
                      <td>${order.taxPrice}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td>${order.totalPrice}</td>
                    </tr>
                  </tbody>
                </table>
                {!order.isPaid && (
                  <div className="col-12">
                    {loadingPay && <Loading />}
                    {!sdkReady ? (
                      <Loading />
                    ) : (
                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      />
                    )}
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

export default OrderScreen;


/*
โค้ดด้านบนเป็นการสร้างหน้าจอ OrderScreen ในแอพพลิเคชันเว็บ React โดยมีการ import คอมโพเนนต์ Header, Loading, Error และ PayPalButton มาใช้งาน

โค้ดด้านบนนี้ได้รับข้อมูล order จาก API โดยใช้ getOrderDetails action จาก Redux และจะแสดงรายละเอียดของ order ออกมาบนหน้าจอ เช่น ชื่อลูกค้า ที่อยู่จัดส่ง วันที่สั่งซื้อ รายการสินค้า ราคารวม และสถานะการชำระเงิน

การชำระเงินจะใช้งาน PayPal API โดยใช้ PayPalButton และ payOrder action จาก Redux เพื่อจ่ายเงินให้กับ order นั้นๆ หากชำระเงินสำเร็จ สถานะการชำระเงินจะเปลี่ยนเป็น "Paid" และจะแสดงวันที่ชำระเงินเป็นข้อความบนหน้าจอด้วย moment.js

นอกจากนี้ โค้ดด้านบนยังมีการสร้างฟังก์ชัน addDecimals เพื่อปรับแต่งราคาของสินค้าให้เป็นทศนิยมสองตำแหน่ง และฟังก์ชัน addPayPalScript เพื่อโหลดสคริปต์ของ PayPal API ลงในหน้า HTML และกำหนดสถานะของ SDK ว่าพร้อมใช้งานหรือยัง

ในการแสดงผลส่วนต่างๆ ของหน้าจอ โค้ดด้านบนจะใช้งาน Bootstrap เพื่อเรียงลำดับองค์ประกอบต่างๆ ให้อยู่ในรูปแบบของตาราง และใช้ CSS เพื่อปรับแต่งสีและรูปแบบต่างๆ ขององค์ประกอบในหน้าจอนี้
*/
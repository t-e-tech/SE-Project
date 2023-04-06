import React, { useEffect } from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removefromcart } from "./../Redux/Actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  //เพิ่มสินค้าลงในตะกร้า

  const checkOutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  //นำผู้ใช้งานไปยังหน้า Login เพื่อทำการสั่งซื้อสินค้า โดยใช้ history.push()

  const removeFromCartHandle = (id) => {
    dispatch(removefromcart(id));
  };
  //ลบสินค้าออกจากตะกร้าโดยใช้ dispatch ในส่วนของ cartActions

  return (
    <>
      <Header />
      {/* Cart */}
      <div className="container">
        {cartItems.length === 0 ? (
          <div className=" alert alert-info text-center mt-3">
            Your cart is empty
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{
                fontSize: "12px",
              }}
            >
              SHOPPING NOW
            </Link>
          </div>
        ) : (
          <>
            <div className=" alert alert-info text-center mt-3">
              Total Cart Products
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>
            {/* cartiterm */}
            {cartItems.map((item) => (
              <div className="cart-iterm row">
                <div
                  onClick={() => removeFromCartHandle(item.product)}
                  className="remove-button d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/products/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                  <h6>QUANTITY</h6>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                  <h6>PRICE</h6>
                  <h4>${item.price}</h4>
                </div>
              </div>
            ))}

            {/* End of cart iterms */}
            <div className="total">
              <span className="sub">total:</span>
              <span className="total-price">${total}</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6 ">
                <button>Continue To Shopping</button>
              </Link>
              {total > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button onClick={checkOutHandler}>Checkout</button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartScreen;


/*
ไฟล์ CartScreen.js มีการ import React, useEffect, Header, Link, useDispatch, useSelector, addToCart, และ removefromcart จาก React, react-redux, และ actions ตามลำดับ โดยมีการใช้งาน Hook ต่าง ๆ เช่น useSelector เพื่อดึงค่าจาก Redux store ของ cart และ dispatch เพื่อ dispatch action ไปยัง Redux store ในการเพิ่มสินค้าลงในตะกร้าหรือลบสินค้าออกจากตะกร้า

ไฟล์นี้เป็นหน้าจอตะกร้าสินค้า โดยมีการ render สินค้าทั้งหมดที่อยู่ในตะกร้า โดยใช้ข้อมูลจาก Redux store ซึ่งแสดงผลเป็นรูปแบบต่าง ๆ เช่น รูปสินค้า, ชื่อสินค้า, ราคา, ปริมาณ, และราคารวมของสินค้าทั้งหมด และมีปุ่ม Checkout เพื่อไปยังหน้า Login หรือหน้า Shipping หากผู้ใช้เข้าสู่ระบบแล้ว ในกรณีที่ตะกร้าว่าง จะแสดงข้อความแจ้งเตือนว่า "Your cart is empty" และมีปุ่ม SHOPPING NOW เพื่อไปยังหน้าสินค้าทั้งหมด

นอกจากนี้ยังมีการใช้ useEffect เพื่อเพิ่มสินค้าในตะกร้าหากมีการส่ง productId และ qty มา โดยจะถูก trigger เมื่อพารามิเตอร์เหล่านี้เปลี่ยนหรือมีการเรียกใช้ dispatch เพื่อส่ง action ไปยัง Redux store โดยอ้างอิงจากข้อมูลจาก location และ match ของ React Router ในการดึงค่า params และ query string ของ URL ที่ใช้งานอยู่

นอกจากนี้ยังมีการใช้ window.scrollTo เพื่อให้หน้าเริ่มต้นที่ด้านบนของหน้าจอแต่ละครั้งที่โหลดหน้าใหม่
*/

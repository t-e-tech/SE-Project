import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { Navbar1 } from "../../components/navbar";
import axios from "axios";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const sendData = () => {
    axios.post("http://localhost:3000/view", {
      totalA: totalAmount,
    })
    .then((response) => {
      console.log(response.data);
    }); 
  };

  return (
    <div>
      <Navbar1 />
      <div className="cart">
        <div>
          <h1>ตะกร้าสินค้า</h1>
        </div>
        <div className="cart">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> รวม : {totalAmount} ฿</p>
            <button onClick={() => navigate("/")}> กลับไปหน้าหลัก</button>
            <button onClick={() => navigate("/payment")}> สั่งสินค้า </button>
          </div>
        ) : (
          <h1>ไม่มีสินค้าในตะกร้า</h1>
        )}
      </div>
    </div>
  );
};

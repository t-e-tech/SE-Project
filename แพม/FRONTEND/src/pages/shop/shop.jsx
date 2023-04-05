import React from "react";
import { Navbar1 } from "../../components/navbar";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div>
      <Navbar1 />
      <div className="shop">
        <div className="shopTitle">
          <h1>Product</h1>
        </div>

        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

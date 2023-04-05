import React from "react";
import { Link } from "react-router-dom";
import { AlignLeft, UserCircle } from "phosphor-react";
import { ShoppingCart } from "phosphor-react";
import "./payment.css";


export const Navbar1 = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> ELEcREc </Link>
        <Link to="/contact">
          <UserCircle size={32} />
        </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

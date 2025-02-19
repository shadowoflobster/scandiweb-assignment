import React from "react";
import "./Header.css";
import shoppingCartIcon from "../../assets/SVGs/shopping-cart.svg";

const Header: React.FC = () => {
  return (
    <div className="Header d-flex align-items-center justify-content-between">
      <nav className="navigation bg-white col-2 mt-auto">
        <ul className="nav-list d-flex p-0 h-100">
          <li className="nav-item">
            WOMEN
          </li>
          <li className="nav-item">
            MEN
          </li>
          <li className="nav-item">
            KIDS
          </li>
        </ul>
      </nav>
      <div className="logo-div col-2 d-flex align-items-center justify-content-center"><div className="logo"></div></div>
      <div className="shopping-cart-div justify-content-end d-flex col-2 ">
        <img src={shoppingCartIcon} style={{cursor:"pointer"}}></img>
</div>
    </div>
  );
};

export default Header;

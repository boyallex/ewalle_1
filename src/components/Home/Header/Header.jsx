import React from "react";
import "../../../css/Header.css";
import { NavLink } from "react-router-dom";
import LogoPic from "../../../pictures/Login/Logo.svg";
import MenuPic from "../../../pictures/Home/Menu.png"

const Header = (props) => {
  return (
    <div className="header">
      <NavLink to="/home">
        <div className="logo">
          <img className="" src={LogoPic}></img>
          <button className="logo__button">eWalle</button>
        </div>
      </NavLink>

      <NavLink to="/menu" className="header__menu">
        <button>
          <img src={MenuPic} alt="Menu" />
        </button>
      </NavLink>
    </div>
  );
};

export default Header;

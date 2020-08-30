import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import LogoPic from "../../../pictures/Login/Logo.svg";
import MenuPic from "../../../pictures/Home/Menu.png"

const Header = (props) => {
  return (
    <div className="header">
      <NavLink to="/home" className="link">
        <div className="logo">
          <img className="logo__img" src={LogoPic}></img>
          <p className="logo__button">eWalle</p>
        </div>
      </NavLink>

      <NavLink to="/menu">
        <button className="header__menu">
          <img src={MenuPic} alt="Menu" />
        </button>
      </NavLink>
    </div>
  );
};

export default Header;

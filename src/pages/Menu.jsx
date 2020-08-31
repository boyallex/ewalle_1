import React from "react";
import "./Menu.scss"
import Profile from "../components/Menu/Profile/Profile";
import { NavLink } from "react-router-dom";
import Cross from "../pictures/Menu/Cross.png"
import MenuList from "../components/Menu/MenuItem/MenuList";

const Menu = (props) => {
    return (
        <div className="Menu">
            <div className="Menu__header">
                <Profile/>
                <NavLink to="/home">
                    <img src={Cross} alt="крест" className="cross"/>
                </NavLink>
            </div>
            <ul className="Menu__list">
                <MenuList />
            </ul>
        </div>
    )
}

export default Menu;
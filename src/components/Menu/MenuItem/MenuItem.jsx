import React from "react";
import "./MenuItem.scss";

const MenuItem = (props) => {
    return (
        <div className="menu__button">

                { props.text }

        </div>
    )
};

export default MenuItem;
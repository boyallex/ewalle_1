import React from "react";
import "./PlusButton.css";
import PlusPic from "../../pictures/Home/plus.png"

const PlusButton = (props) => {
    return (
        <div>
            <button className="plus_button" onClick={props.function}>
                <img src={PlusPic} alt="Плюс"/>
            </button>
        </div>
    );
};

export default PlusButton;

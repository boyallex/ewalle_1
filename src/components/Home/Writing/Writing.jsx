import React from "react";
import "./Writing.scss"

const Writing = (props) => {
    return (
        <div className="writing">
            <p className="writing__text">
                {props.text}
            </p>
            <button className="writing__btn">
                <img src={props.button} alt=""/>
            </button>
        </div>
    )
};

export default Writing;
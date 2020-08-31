import React from "react";
import "./ServiceButton.scss";

const ServiceButton = (props) => {
    return (
        <div className="service">
            <button className="serviceBtn">
                <img src={props.img} alt=""/>
            </button>
            <p className="text">
                { props.text }
            </p>
        </div>
    );
};

export default ServiceButton;
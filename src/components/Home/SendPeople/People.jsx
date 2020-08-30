import React from "react";
import "./People.scss"

const People = (props) => {
    return (
        <div className="people">
            <img className="people__ava" src={props.ava} alt="ava" />
            <p>
                {props.name}
            </p>
        </div>
    )
};

export default People;
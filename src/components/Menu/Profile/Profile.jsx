import React from "react";
import "./Profile.scss"
import Ava from "../../../pictures/Menu/Ava.png"

const Profile = () => {
    return (
        <div className="Profile">
            <img className="Profile__ava" src={Ava} alt="ava"/>
            <div className="Profile__name">
                <p className="name">Carol Black</p>
                <p className="city">Seatle, Washington</p>
            </div>
        </div>
    )
};

export default Profile;
import React from "react";
import "./ServBtnList.scss";
import ServiceButton from "./ServiceButton";
import cashbackOffer from "../../../pictures/Home/Service/cashbackOffer.png";
import electricityBill from "../../../pictures/Home/Service/electricityBill.png";
import flightTickets from "../../../pictures/Home/Service/flightTickets.png";
import mobilePrepaid from "../../../pictures/Home/Service/mobilePrepaid.png";
import moreOptions from "../../../pictures/Home/Service/moreOptions.png";
import movieTickets from "../../../pictures/Home/Service/movieTickets.png";
import receiveMoney from "../../../pictures/Home/Service/receiveMoney.png";
import sendMoney from "../../../pictures/Home/Service/sendMoney.png";


const Service = () => {

    let btnList = [
        [sendMoney, "Send Money"],
        [receiveMoney, "Receive Money"],
        [mobilePrepaid, "Mobile Prepaid"],
        [electricityBill, "Electricity Bill"],
        [cashbackOffer, "Cashback Offer"],
        [movieTickets, "Movie Tickets"],
        [flightTickets, "Flight Tickets"],
        [moreOptions, "More Options"]
    ]

    const btnListHTML = btnList.map(b => (<ServiceButton img={b[0]} text={b[1]}/>));
    return (<div className="buttons">{btnListHTML}</div>);
};

export default Service;
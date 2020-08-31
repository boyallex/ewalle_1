import React from "react";
import First from "../../../pictures/Home/People1.png";
import Second from "../../../pictures/Home/People2.png";
import Third from "../../../pictures/Home/People3.png";
import People from "./People";
import "./PeopleList.scss";
import PlusButton from "../PlusButton";

const state = [
    [First, "Mike"],
    [Second, "Joshpeh"],
    [Third, "Ashly"]
]

const PeopleList = () => {

    const PeopleHTML = state.map(p => (<People ava={p[0]} name={p[1]}/>))

    return (
        <div className="list">
            <div className="plus">
                <PlusButton/>
            </div>
            {PeopleHTML}
        </div>
    );
};

export default PeopleList;
import React from "react";
import "./Balance.scss";
import PlusButton from "../PlusButton"

const Balance = (props) => {
    return (
        <div className="container">
            <div className="main">
                <div>
                    <p>
                        {props.balance_number}
                    </p>
                    <p className="cur_balance">
                        Current balance
                    </p>
                </div>
                <div className="plus">
                    <PlusButton/>
                </div>
            </div>
        </div>
    );
}

export default Balance;
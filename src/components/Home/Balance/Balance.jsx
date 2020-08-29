import React from "react";
import "../../../css/Balance.css";
import PlusButton from "../PlusButton"

const Balance = (props) => {
    return (
        <div className="main">
            <div>
                <p>
                    {props.balance_number}

                </p>
                <p className="cur_balance">
                    Current balance
                </p>

            </div>
            <PlusButton />
        </div>);
}

export default Balance;
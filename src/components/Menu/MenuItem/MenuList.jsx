import React from "react";
import MenuItem from "./MenuItem";

let Menu_list = [
    "Home",
    "Profile",
    "Accounts",
    "Transactions",
    "Stats",
    "Settings",
    "Help"
]

const MenuList = () => {

    const MenuHTML = Menu_list.map((p) => (<MenuItem text={p}/>))

    return (
        <div>
            {MenuHTML}
        </div>
    );
};

export default MenuList;
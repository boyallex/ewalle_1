import React from "react";
import Header from "../components/Home/Header/Header";
import Writing from '../components/Home/Writing/Writing';
import Balance from "../components/Home/Balance/Balance";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <Header/>
                <Writing text="Account Overview"/>
                <Balance balance_number={"20,600"}/>
            </div>
        </div>
    );
};

export default Home;
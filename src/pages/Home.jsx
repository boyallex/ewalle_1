import React from "react";
import "./Home.scss";
import Header from "../components/Home/Header/Header";
import Writing from '../components/Home/Writing/Writing';
import Balance from "../components/Home/Balance/Balance";
import PeopleList from "../components/Home/SendPeople/PeopleList"
import Service from "../components/Home/ServiceButton/ServBtnList";

const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <Header/>
                <Writing text="Account Overview"/>
                <Balance balance_number={"20,600"}/>
            </div>

            <div className="home__friends">
                <Writing text={"Send Money"}/>
                <PeopleList/>
            </div>

            <div className="home__footer">
                <div>
                    <Writing text={"Service"}/>
                </div>
                <Service/>
            </div>
        </div>
    );
};

export default Home;
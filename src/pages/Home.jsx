import React from "react";
import "./Home.scss";
import Header from "../components/Home/Header/Header";
import Writing from '../components/Home/Writing/Writing';
import Balance from "../components/Home/Balance/Balance";
import PlusButton from "../components/Home/PlusButton";
import PeopleList from "../components/Home/SendPeople/PeopleList"
import Service from "../components/Home/ServiceButton/ServBtnList";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <Header/>
                <Writing text="Account Overview"/>
                <Balance balance_number={"20,600"}/>
                <Writing text={"Send Money"}/>
            </div>

            <div className="home__friends">
                <PlusButton/>
                <PeopleList/>
            </div>

            <div className="home__container">
                <Writing text={"Service"}/>
                <Service/>
            </div>
        </div>
    );
};

export default Home;
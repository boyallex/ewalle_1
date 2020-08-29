import React from "react";
import styles from "./Login.module.css";
import SidePic from "../pictures/Login/Group5.png";
import Logo from "../pictures/Login/Logo.svg";
import {NavLink} from "react-router-dom";
import Home from "./Home"

const Login = (props) => {
  

  return (
    <div className={styles.login}>
      <img className={styles.back__img} src={SidePic} alt="Упс" />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.time__weather}>
            <div className={styles.login_time}>06:20 PM</div>
            <div className={styles.login_weather}>34°C</div>
          </div>
          <div className={styles.login_data}> Nov.10.2020 | Wednesday </div>
        </div>

        <div className={styles.body}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <div className={styles.discription}>
            <p className={styles.name}>eWalle</p>
            <div className={styles.about}>
              <p>Open An Account For Digital E-Wallet Solutions.Instant</p>
              <p>Join For Free.</p>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <NavLink to="/home">
            <button className={styles.footer__signIn}>Sign in</button>
          </NavLink>

          <div className={styles.container__createAcc}>
            <button className={styles.footer__createAcc} src="#">
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

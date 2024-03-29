// Hero.js

import React, { useState, useEffect } from "react";
import styles from "./hero.module.css";
import MagicScrollButton from "../../../components/MagicScrollButton/MagicScrollButton";
import herobg from "../../../assets/images/home/herobg.png";
import dice from "../../../assets/images/dice.png";
import diamond from "../../../assets/images/dimond.png";
import seven from "../../../assets/images/sevev.png";
import bell from "../../../assets/images/bell.png";

const Hero = () => {
  const [isShown, setIsShown] = useState(false);

  const bgStyle = {
    backgroundImage: `url(${herobg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
  };

  useEffect(() => {
    // Set a timeout to trigger the pop-up after a delay (adjust as needed)
    const timeout = setTimeout(() => {
      setIsShown(true);
    }, 500); // 1000 milliseconds = 1 second

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`inner-container d-flex justify-content-center flex-column ${
        styles.herobg
      } ${isShown && styles.show}`}
      style={bgStyle}
    >
      <h1 className={`text-center fw-bold ${styles.title}`}>
        Welcome to <span className="text-primary">sebm500.com</span>
      </h1>
      <p className="text-center">
        Exclusive Rewards, Bonuses & Monthly Leaderboard Competitions
      </p>
      <a href="#Bonuses" className="d-flex justify-content-center mt-5">
        <MagicScrollButton />
      </a>
      <div className="position-relative">
        <img className="width po1" src={seven} alt="" />
        <img className="width po2" src={dice} alt="" />
        <img className="width po3" src={diamond} alt="" />
        <img className="width po4" src={bell} alt="" />
      </div>
    </div>
  );
};

export default Hero;

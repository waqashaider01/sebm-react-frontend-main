import React, { useEffect } from "react";
import styles from "./index.module.css";
import img from "../../../assets/images/level-up.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const LevelUpReward = () => {
  useEffect(() => {
    AOS.init({
      offset: -140,
    });
  }, []);
  return (
    <div className="inner-container d-flex flex-column gap-5">
      <h1 id="Bonuses" className={`${styles.title} text-center py-4`}>
        Exclusive Level Up Rewards
      </h1>
      <div className="container">
        <div className="row gap-5 flex-column-reverse flex-md-row">
          <div className="col-md align-self-center">
            <p data-aos="fade-left">
              Here comes the GOOD Stuff! Enjoy a huge variety of{" "}
              <span className="text-primary">Exclusive Level Up Rewards.</span>{" "}
              You can earn a minimum of{" "}
              <span className="text-primary">$25 up to $10,000</span> just by
              playing on one the most rewarding Crypto Casino out there. You can
              claim Rewards by sending a DM to us!
            </p>
            <button className="btn btn-primary px-5">More Informations</button>
          </div>
          <div className="col-md">
            <img src={img} className="w-100 mb-3" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelUpReward;

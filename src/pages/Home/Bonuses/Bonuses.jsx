import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import styles from "./index.module.css";
import card_1_img from "../../../assets/images/card-1.png";
import card_2_img from "../../../assets/images/card-2.png";
import card_3_img from "../../../assets/images/card-3.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const Bonuses = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    AOS.init({
      offset: -40,
    });
  }, []);

  return (
    <div className="inner-container d-flex flex-column gap-5 ">
      <h1 id="Bonuses" className={`${styles.title} text-center py-4`}>
        Bonuses
      </h1>
      <div className="container " data-aos="fade-up">
        <div className="row ">
          <div className="col-md-4 my-2">
            <div className={`${styles.card} card my-2 h-100`}>
              <img
                src={card_1_img}
                className={`${styles.cardImgTop} card-img-top`}
                alt="..."
              />
              <div className="card-body">
                <h5 className="fw-bold text-center">
                  100% Deposit Bonus Up To $1,000
                </h5>
                <div className="card-text">
                  Bonus Conditions:
                  <ul>
                    <li>
                      Use code{" "}
                      <span className="text-primary fw-bold">"SEBM"</span> on
                      Sign Up
                    </li>
                    <li>Deposit Between $25-$1,000</li>
                    <li>Wager the Bonus 40x to Withdraw</li>
                  </ul>
                </div>
              </div>
              <Link to="bonuses" className="btn btn-primary mt-2">
                Claim Bonus
              </Link>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className={`${styles.card} card my-2 h-100`}>
              <img
                src={card_2_img}
                className={`${styles.cardImgTop} card-img-top`}
                alt="..."
              />
              <div className="card-body">
                <h5 className="fw-bold text-center">50 Free Spins</h5>
                <div className="card-text">
                  Bonus Conditions:
                  <ul>
                    <li>
                      Use code{" "}
                      <span className="text-primary fw-bold">"SEBM"</span> on
                      Sign Up
                    </li>
                    <li>Deposit Between $25-$1,000</li>
                    <li>Wager the Bonus 40x to Withdraw</li>
                  </ul>
                </div>
              </div>
              <Link to="bonuses" className="btn btn-primary mt-2">
                Claim Bonus
              </Link>
            </div>
          </div>
          <div className="col-md-4 my-2">
            <div className={`${styles.card} card my-2 h-100`}>
              <img
                src={card_3_img}
                className={`${styles.cardImgTop} card-img-top`}
                alt="..."
              />
              <div className="card-body">
                <h5 className="fw-bold text-center">
                  $10,000 Monthly Leaderboard
                </h5>
                <div className="card-text">
                  Bonus Conditions:
                  <ul>
                    <li>
                      Use code{" "}
                      <span className="text-primary fw-bold">"SEBM"</span> on
                      Sign Up
                    </li>
                    <li>Wager on 500.casino</li>
                    <li>1M XP ~ $600 Wager</li>
                  </ul>
                </div>
              </div>
              <a href="#" className="btn btn-primary mt-2">
                Leaderboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonuses;

import React from 'react';
import styles from "./hero.module.css";
import MagicScrollButton from '../../../components/MagicScrollButton/MagicScrollButton';
import herobg from "../../../assets/images/home/herobg.png";

const Hero = () => {
    const bgStyle = {
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
    }

    return (
        <div className={`inner-container d-flex justify-content-center flex-column ${styles.herobg}`} style={bgStyle}>
            <h1 className={`text-center fw-bold ${styles.title}`}>Welcome to <span className="text-primary">sebm500.com</span></h1>
            <p className='text-center'>Exclusive Rewards, Bonuses & Monthly Leaderboard Competitions</p>
            <a href='#Bonuses' className="d-flex justify-content-center mt-5">
                <MagicScrollButton />
            </a>
        </div>
    );
}

export default Hero;

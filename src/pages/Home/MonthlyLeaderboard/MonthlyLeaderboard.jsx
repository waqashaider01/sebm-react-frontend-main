import React from 'react';
import styles from './index.module.css';
import img from '../../../assets/images/monthly-leaderboard.png';

const MonthlyLeaderboard = () => {
    return (
        <div className='inner-container d-flex flex-column gap-5'>
            <h1 id='Bonuses' className={`${styles.title} text-center py-4`}>$10,000 Monthly Leaderboard</h1>
            <div className="container">
                <div className="row gap-5 flex-column-reverse flex-md-row">
                    <div className="col-md align-self-center">
                        <p>
                            If you Sign Up under Code <span className="text-primary">"SEBM"</span> you automatically enter the <span className="text-primary">$10,000 Monthly Leaderboard.</span> You Compete by playing Slots, LiveGame, House Games... on 500.casino. When it all comes down an End, the Prices of the Leaderboard get paid out to the first 10 Players. Prices between <span className="text-primary">$50-$5,000 per Person</span> get paid out Monthly!
                        </p>
                        <button className="btn btn-primary px-5">Leaderboard</button>
                    </div>
                    <div className="col-md text-center">
                        <img src={img} className={`mb-3 ${styles.img}`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MonthlyLeaderboard;

import React from 'react';
import styles from './index.module.css'
import img from '../../../assets/images/how-to-register/section-2.png'

const SectionTwo = () => {
    return (
        <div className="skewed-container">
            <div className="container">
                <div className="row gap-4">
                    <div className="col-md">
                        <img src={img} className='mw-100' alt="" />
                    </div>
                    <div className="col-md-4 align-self-center">
                        <h1><span className="title text-primary">Register</span> Account</h1>
                        <p>Fill your information, ensure you are <span className="text-primary">+18</span> to register.</p>
                        <p>If you own a Google, Facebook, Steam or MetaMask account, you can also login with one of those.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionTwo;

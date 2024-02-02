import React from 'react';
import styles from './index.module.css'
import img from '../../../assets/images/how-to-register/section-1.png'

const SectionOne = () => {
    return (
        <div className="">
            <h1 className="my-5 text-primary title text-center ">How to register on <div className='coin'>500</div>Casino</h1>
            <div className="container">
                <div className="row gap-4">
                    <div className="col-md-4 align-self-center">
                        <h1><span className="title text-primary">Visit</span> 500.casino</h1>
                        <p>Click on the register button at the top right!</p>
                        <button className="btn btn-primary">Visit 500.casino</button>
                    </div>
                    <div className="col-md">
                        <img src={img} className='mw-100' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionOne;

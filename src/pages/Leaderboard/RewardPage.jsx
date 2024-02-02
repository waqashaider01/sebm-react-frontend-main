import React from "react";
import MagicScrollButton from "../../components/MagicScrollButton/MagicScrollButton";

function RewardPage() {
  return (
    <>
      <div className="inner-container">
        <div className="container my-2">
          <h1 class="title text-center">
            {" "}
            <span class="text-primary">Over $16,000 in</span> Level Up Rewards
          </h1>
          <p className="text-center mb-5">
            if the deposit Bonuses / Leaderboard and Cashback of 500.casino
            isn't enough for you, here are Level Rewards. <br /> If you signed
            up under Code "SEBM" you will have access to these{" "}
            <span class="text-primary text-center">
              EXCLUSIVE Level Up Rewards
            </span>
            <div className="row my-5">
              <div className="col-md-3 my-2">
                <div className="card bgc1 p-2">
                  <p class="text-center fs-2 fw-bold">Level 300</p>
                  <div className="">
                    <p className="text-primary fs1 fw-bolder text-center tp">
                      $25
                    </p>
                    <p className="shad text-center">$25</p>

                    <div className="my-2 pt-2 d-flex justify-content-center align-items-center px-2">
                      <button className="btn btn-primary w-100">
                        Earn Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-2 align-self-center">
                <img className="img-fluid" src="/images/arrow.png" alt="" />
              </div>
              <div className="col-md-3 my-2">
                <div className="card bgc1 p-2">
                  <p class="text-center fs-2 fw-bold">Level 400</p>
                  <div className="">
                    <p className="text-primary fs1 fw-bolder text-center tp">
                      $50
                    </p>
                    <p className="shad text-center">$50</p>

                    <div className="my-2 pt-2 d-flex justify-content-center align-items-center px-2">
                      <button className="btn btn-primary w-100">
                        Earn Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-2 align-self-center">
                <img className="img-fluid" src="/images/arrow.png" alt="" />
                <p class="text-center fs-2 fw-bold">Level 500-600</p>
              </div>
            </div>
            <div className="my-2 mb-5 pb-5 d-flex justify-content-center align-items-center">
              <MagicScrollButton />
            </div>
            <p className="mt-5 text-center pt-5">
              <span className="text-primary">Scroll down</span>
              to reveal Level Up Rewards with a total value of
              <span className="text-primary ">over $16000</span>
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

export default RewardPage;

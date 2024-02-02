import React from "react";

function VideoPage() {
  return (
    <>
      <div className="inner-container">
        <div className="container my-2">
          <h1 class="title text-center">
            {" "}
            <span class="text-primary">Biggest </span>Wins
          </h1>
          <p className="text-center mb-5">
            Checkout some of my biggest wins here!
          </p>
          <div className="my-2 d-flex flex-column flex-md-row align-items-center justify-content-center ">
            <button className="btn btn-sec my-2 mx-2 px-5">YOUTUBE</button>
            <button className="btn btn-primary my-2 mx-2 px-5">TWITCH</button>
          </div>
          <div className="row mt-4 mb-5">
            <div className="col-md-6">
              <div className="vCard">
                <img className="imgv" src="/images/v2.png" alt="" />
                <p className="mt-1 vTitle mb-0 ">
                  WORLDS *FIRST* MAX WIN ON NET GAINS!
                </p>
                <div className="mb-2 d-flex">
                  <p class="textMuted">Date: 09.12.2022</p>
                  <p class="textMuted ms-4">Win: $15,000</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="vCard">
                <img className="imgv" src="/images/v1.png" alt="" />
                <p className="mt-1 vTitle mb-0 ">
                  WORLDS *FIRST* MAX WIN ON NET GAINS!
                </p>
                <div className="mb-2 d-flex">
                  <p class="textMuted">Date: 09.12.2022</p>
                  <p class="textMuted ms-4">Win: $15,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoPage;

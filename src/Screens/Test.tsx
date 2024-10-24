import React from "react";
import Brands from "./Brands";
import "./Test.css";

const Test: React.FC = () => {
  return (
    <div className="container diamond-container flex-grow relative ">
      <div className="top-section">
        <div className="left-half z-10 text-white flex justify-center items-center ">
          <div className="   mt-10 h-482 w-482">
            <p className="text-70  ">Who are we?</p>
            <p className="text-80 font-bold">Your Best Marketing Partner.</p>
          </div>
        </div>
        <div className="right-half text-white z-10 flex justify-center items-center">
          <div className=" mt-28  h-482 w-482 text-right">
            <p className="text-5xl ">
              Creating animated videos with visual effects
            </p>
            <button className="w-96 h-70 mt-10 manrope font-medium  bg-white text-black contact-button">
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <Brands></Brands>
      </div>
    </div>
  );
};

export default Test;

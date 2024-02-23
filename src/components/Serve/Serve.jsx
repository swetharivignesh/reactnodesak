import React from "react";
import "./Serve.css";
import ecomm from "../../img/products/Code typing-bro.png";
import ecomm2 from "../../img/products/coffee-5009730_1280.png";


const Serve = () => {
  return (
    <div>
    <div>
      <h1 className="headtraining1">Our Initiatives</h1>
      <h4 className="subheadtrain2">our initiatives for students of sak academy</h4>
      </div>
      <div className="t1">
        <div className="i1">
          <img src={ecomm} alt="" />
          <div className="text-overlay">
            <h2>Programming Knowledge</h2>
          </div>
        </div>

        <div className="i2">
          <img src={ecomm2} alt="" />
          <div className="text-overlay">
            <h2>Hackathons</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serve;

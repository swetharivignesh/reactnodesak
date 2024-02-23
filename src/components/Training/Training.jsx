import React from "react";
import "./training.css";
import Fiverr1 from "../../img/products/1.png";
import Fiverr2 from "../../img/products/2.png";
import Fiverr3 from "../../img/products/3.png";
import Fiverr4 from "../../img/products/4.png";


const Training = () => {
  return (
    <>
      <div className="header">
        <h1 className="headtraining">LEARN FROM EXPERTS</h1>
        <h4 className="subheadtrain"> Qualified trainers required to provide you with the most refined training that helps you grasp effortlessly. </h4>
      </div>

      <div className="cards">
        <div className="card">
        <img src={Fiverr1} alt="" />
          <div className="card-body">
            <h2>Well Experienced Trainers</h2>
            <p>Our trainers are qualified with the experience and
                 certifications required to provide you with the most 
                 refined training that helps you grasp effortlessly.</p>
          </div>
        </div>

        <div className="card">
        <img src={Fiverr2} alt="" />
          <div className="card-body">
            <h2> Hands-on Training </h2>
            <p>We primarily focus on providing you with hands-on
                 practical training, as we believe it is the best method to learn a skill-based. </p>
            
          </div>
        </div>

        <div className="card">
        <img src={Fiverr3} alt="" />
          <div className="card-body">
            <h2> Practice oriented training</h2>
            <p>You are not just learning,You are doing practically 
                exploring real world problems,we belive Learning by doing is the perfect  way of Teaching </p>
          </div>
        </div>

        <div className="card">
        <img src={Fiverr4} alt="" />
          <div className="card-body">
            <h2> Placement Assistance </h2>
            <p>We'll make u skilled person and guide through out your resume building process to 
                fetch job in your dream company or you can be a successfull enterprenur.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Training;

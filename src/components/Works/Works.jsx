import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            About us
          </span>
          <span>Learner-Friendly Approach</span>
          <spane>
             Hello, I'm Swetha Harivignesh, the founder of Sak Academy
            <br />
            I realized the importance of a well-rounded approach to technical abilities and a strong mindset
            <br />
            At Sak Academy, we equip people with knowledge and a mindset for triumph in the ever-changing world of today
            <br />
            Come and join us to embark on a rewarding IT journey
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Learn More</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" width="100px" height="100px"/>
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" width="100px" height="100px"/>
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" width="100px" height="100px"/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" width="100px" height="100px" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt=""width="100px" height="100px" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
import React from "react";
import { NavLink } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";
import "../styles/services.scss";

import pot1 from "../assets/pot1.jpeg";
import pot2 from "../assets/pot2.jpeg";
import pot3 from "../assets/pot3.jpeg";

const Services = () => {
  return (
    <div id="services" className="pot">
      <div className="pot_wrapper wrapper">
        <p className="res_subtitle">Enhance your skills</p>
        <h2 id="pot_title" className="res_title ">
          Unlock your programming potential today!
        </h2>

        <div className="pot_cards">
          <NavLink to={"/services1"}>
            <div className="pot_card">
              <img src={pot1} alt="" className="pot_img" />
              <div className="pot_box">
                <h4 className="pot_title">
                  Video tutorials <MdKeyboardArrowRight className="pot_icon" />
                </h4>
                <p className="res_description">
                  Engaging video content to elevate your programming knowledge.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to={"/services2"}>
            <div className="pot_card">
              <img src={pot2} alt="" className="pot_img" />
              <div className="pot_box">
                <h4 className="pot_title">
                  In-Depth articles{" "}
                  <MdKeyboardArrowRight className="pot_icon" />
                </h4>
                <p className="res_description">
                  Comprehensive articles covering various programming languages.
                </p>
              </div>
            </div>
          </NavLink>
          <NavLink to={"/services3"}>
            <div className="pot_card">
              <img src={pot3} alt="" className="pot_img" />
              <div className="pot_box">
                <h4 className="pot_title">
                  Community support{" "}
                  <MdKeyboardArrowRight className="pot_icon" />
                </h4>
                <p className="res_description">
                  Join a vibrant community of programmers for support and
                  networking.
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Services;

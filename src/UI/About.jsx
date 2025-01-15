import React from "react";
import "../styles/about.scss";
import { NavLink } from "react-router-dom";

import klaviatura from "../assets/klaviatura.jpeg";

const About = () => {
  return (
    <div id="about" className="jour">
      <div className="jour_wrapper wrapper">
        <div className="jour_left">
          <p className="res_subtitle">Empower your coding journey</p>
          <h3 className="res_title">Learn, practice, succeed</h3>
          <p className="res_description">
            General Programming is your ultimate destination for mastering
            programming languages. Based in Tashkent, UZ, we offer a rich
            collection of video tutorials and insightful articles designed to
            elevate your coding skills. Whether you're a novice or an
            experienced developer, our platform provides the tools you need to
            succeed in the ever-evolving tech landscape. Join us and take the
            next step in your programming journey!
          </p>
          <div id="jour_link" className="res_navigate">
            <a href="#contact" >Get in touch</a>
          </div>
        </div>
        <div className="jour_right">
          <img src={klaviatura} alt="" className="jour_img" />
        </div>
      </div>
    </div>
  );
};

export default About;

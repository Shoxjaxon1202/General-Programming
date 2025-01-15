import React from "react";
import "./intro.scss";
import { NavLink, useLocation } from "react-router-dom";

const Intro = () => {
  const location = useLocation().pathname;
  
  return (
    <div>
      {location === "/" || location.includes("/index") ? (
        <div id="home" className="intro">
          <div className="intro_wrapper wrapper">
            <div className="intro_card">
              <h1 className="intro_title">General Programming</h1>
              <p className="intro_text">
                Master programming with our tutorials and articles on various
                programming languages.
              </p>
              <a href="#services">
                <button className="intro_btn">View services</button>
              </a>
            </div>
          </div>
        </div>
      ) : location === "/how-it-works" ? (
        <div id="home" className="workintro">
          <div className="intro_wrapper wrapper">
            <div className="intro_card">
              <h1 className="intro_title">Elevate your coding skills</h1>
              <p className="intro_text">
                Unlock endless programming possibilities with us.
              </p>
            </div>
          </div>
        </div>
      ) : location === "/blog-feed" ? (
        <div id="home" className="blog_into">
          <div className="intro_wrapper wrapper">
            <div className="intro_card">
              <h1 className="intro_title">Enhance your coding skills</h1>
              <p className="intro_text">
                Unlock the secrets of programming languages
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Intro;

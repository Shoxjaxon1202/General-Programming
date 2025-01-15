import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  const location = useLocation().pathname;

  return (
    <div className="footer">
      {location === "/how-it-works" ? (
        <div className="footer_wrapper wrapper">
          <div className="footer_top">
            <div>
              <p className="footer_subtext">Get in touch</p>
              <h3 className="footer_subtitle">We're here to help you excel!</h3>
            </div>
            <NavLink to={"/index#contact"}>
              <button className="navbar_btn">Get in touch</button>
            </NavLink>
          </div>
          <ul className="footer_list">
            <NavLink>Schedule appointment</NavLink>
            <NavLink>Complete intake</NavLink>
            <NavLink>FAQ</NavLink>
            <NavLink>Resources</NavLink>
            <NavLink>Privacy Policy</NavLink>
          </ul>
          <div className="footer_bottom">
            <a href="https://t.me/abdusalimov_shoxjaxon" target="_blank">
              Web design by <span>Shoxjaxon</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="footer_wrapper wrapper">
          <ul className="footer_list">
            <NavLink>Schedule appointment</NavLink>
            <NavLink>Complete intake</NavLink>
            <NavLink>FAQ</NavLink>
            <NavLink>Resources</NavLink>
            <NavLink>Privacy Policy</NavLink>
          </ul>
          <div className="footer_bottom">
            <a href="https://t.me/abdusalimov_shoxjaxon" target="_blank">
              Web design by <span>Shoxjaxon</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;

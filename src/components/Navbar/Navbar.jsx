import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_wrapper wrapper">
        <NavLink to={"/index"}>
          <h1 className="navbar_title">GENERAL PROGRAMMING</h1>
        </NavLink>

        <ul className="navbar_list">
          <li className="navbar_item">
            <a href="/index/#home">Home</a>
          </li>
          <li className="navbar_item">
            <a href="/index/#about">About</a>
          </li>
          <li className="navbar_item">
            <a href="/index/#services">Services</a>
          </li>
          <li className="navbar_item">
            <a href="/index">
              More <MdOutlineArrowDropDown className="navbar_icon" />
            </a>
            <div className="dropdown">
              <a href="/how-it-works" className="menu1">
                How It Works
              </a>
              <a href="/blog-feed" className="menu2">
                Blog Feed
              </a>
            </div>
          </li>
          <a className="navbarbtn" href="/index#contact">
            <button className="navbar_btn">Contact</button>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

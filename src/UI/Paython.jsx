import React from 'react'

import "../styles/paython.scss"
import { NavLink } from 'react-router-dom';

import rasm from "../assets/paython.jpeg"
const Paython = () => {
  return (
    <div className="paython">
      <div className="paython_wrapper wrapper">
        <p className="res_subtitle">Latest insights</p>
        <h3 className="res_title">Stay ahead with expert tutorials</h3>

        <div className="paython_card">
          <div className="paython_left">
            <img src={rasm} alt="" className="paython_img" />
          </div>
          <div className="paython_right">
            <h4 className="paython_title">Mastering python basics</h4>
            <p className="paython_text" id="paython_date">
              December 12, 2024
            </p>
            <p className="paython_text">
              Unlock the power of Python with our essential tutorials designed
              specifically for beginners. In this blog post, we delve into the
              key insights that lay the foundation for mastering Python
              programming fundamentals. Whether you're just starting your coding
              journey or looking to solidify your skills, this comprehensive
              guide will equip you with essential techniques and best practices
              that every aspiring programmer should know. Dive in and discover
              how to transform your ideas into reality through the versatile
              language of Python!
            </p>
            <div className="res_navigate">
              <NavLink to={"/mastering-python-basics"}>Read more</NavLink>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Paython

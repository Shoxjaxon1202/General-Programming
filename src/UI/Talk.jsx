import React from 'react'

import "../styles/talk.scss"
import { NavLink } from 'react-router-dom';

const Talk = () => {
  return (
    <div className="talk">
      <div className="masterpaython_wrapper wrapper talk_wrapper">
        <div>
          <h1 className="talk_title">Let's talk</h1>
          <p className="talk_text">We would love to hear from you!</p>
        </div>
        <NavLink to={"/index#contact"}>
          <button className="talk_btn">Get in touch</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Talk

import React from 'react'

import "../styles/master.scss"
import img from "../assets/bottomImg.jpeg"
const MasterBottom = () => {
  return (
    <div className="master">
      <div className="master_wrapper wrapper">
        <img src={img} alt="" className="master_img" />
        <p className="res_subtitle">Unlock your potential</p>
        <h3 className="res_title master_title">Master programming with expert resources</h3>
      </div>
    </div>
  );
}

export default MasterBottom

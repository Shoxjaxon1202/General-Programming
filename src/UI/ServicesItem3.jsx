import React from 'react'
import pot1 from "../assets/pot3.jpeg"
import "../styles/servicesItem.scss"

const ServicesItem3 = () => {
  return (
    <div className='servicesItem'>
      <div className="servicesItem_wrapper wrapper">
            <div className="servicesItem_left">
                <img src={pot1} alt="" className="servicesItem_img" />   
            </div>
            <div className="servicesItem_right">
                <h3 className="res_subtitle">Community support</h3>
                <p className="res_description">
                Become part of our vibrant community where programmers come together to share knowledge, ask questions, and support each other. Engage in discussions, participate in coding challenges, and collaborate on projects with fellow enthusiasts. Our community is a safe space for learners of all levels, where you can gain insights, receive feedback, and make valuable connections in the programming world. Whether you're seeking help with a specific problem or simply want to network with like-minded individuals, our community offers the resources and camaraderie you need to thrive in your programming journey.
                  </p>
                <button className="intro_btn">
                Schedule appointment
                </button>
            </div>
      </div>
    </div>
  )
}

export default ServicesItem3

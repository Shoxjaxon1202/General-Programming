import React from 'react'
import pot1 from "../assets/pot1.jpeg"
import "../styles/servicesItem.scss"

const ServicesItem1 = () => {
  return (
    <div className='servicesItem'>
      <div className="servicesItem_wrapper wrapper">
            <div className="servicesItem_left">
                <img src={pot1} alt="" className="servicesItem_img" />   
            </div>
            <div className="servicesItem_right">
                <h3 className="res_subtitle">Video tutorials</h3>
                <p className="res_description">
                    Dive into a world of programming with our engaging video tutorials designed for all skill levels. Each tutorial breaks down complex concepts into manageable lessons, allowing you to grasp new programming languages and techniques with ease. Whether you're a beginner or looking to refine your expertise, our video series covers everything from the fundamentals to advanced topics. Plus, our interactive approach keeps you motivated and engaged. Join our community of learners and see your programming skills soar as you watch, learn, and apply your knowledge effectively.
                </p>
                <button className="intro_btn">
                    Schedule appointment
                </button>
            </div>

      </div>
    </div>
  )
}

export default ServicesItem1

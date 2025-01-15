import React from 'react'
import pot1 from "../assets/pot2.jpeg"
import "../styles/servicesItem.scss"

const ServicesItem2 = () => {
  return (
    <div className='servicesItem'>
      <div className="servicesItem_wrapper wrapper">
            <div className="servicesItem_left">
                <img src={pot1} alt="" className="servicesItem_img" />   
            </div>
            <div className="servicesItem_right">
                <h3 className="res_subtitle">In-Depth articles</h3>
                <p className="res_description">
                Enhance your programming prowess with our in-depth articles that cover a wide range of programming languages and technologies. Each article is meticulously researched and written by experienced programmers, ensuring that you receive accurate and relevant information. From beginner guides to advanced techniques, we cater to all learning needs. Our articles not only explain the theory but also provide practical examples and tips to apply your knowledge in real-world scenarios. Stay updated with the latest trends and best practices in programming by exploring our extensive library of articles.
                </p>
                <button className="intro_btn">
                    Schedule appointment
                </button>
            </div>
      </div>
    </div>
  )
}

export default ServicesItem2

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import komp1 from "../assets/komp.jpeg";
import komp2 from "../assets/komp2.jpeg";

import "../styles/resurces.scss";

const Resurces = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    img: null,
    header: "",
    body: "",
  });

const openModal = (img, header, body) => {
  setModalContent({ img, header, body });
  setIsModalOpen(true);
  document.body.style.overflow = "hidden"; // Scrollni bloklash
};

const closeModal = () => {
  setIsModalOpen(false);
  document.body.style.overflow = "auto"; // Scrollni tiklash
};

  return (
    <div className="res">
      <div className="res_wrapper wrapper">
        <p className="res_subtitle">Unlock your potential</p>
        <h2 className="res_title">
          Master programming with our expert resources
        </h2>

        <div className="res_cards">
          <div className="res_card">
            <img
              src={komp1}
              alt="Learn programming languages"
              className="res_img"
              onClick={() =>
                openModal(
                  komp1,
                  "Learn Programming Languages",
                  "At General Programming, you have access to an extensive library of video tutorials and articles that cover a variety of programming languages. Whether you want to master Python, Java, C++, or JavaScript, our platform provides you with the resources you need to excel. Each tutorial is designed to break down complex concepts into manageable segments, making learning more effective and enjoyable. With expert guidance and real-world examples, you can build a strong foundation and advance your programming skills at your own pace."
                )
              }
            />
            <h3 className="res_card_title">Learn programming languages</h3>
            <p className="res_description">
              Master multiple programming languages with our comprehensive
              resources.
            </p>
            <div className="res_navigate">
              <NavLink
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal(
                    komp1,
                    "Learn Programming Languages",
                    "At General Programming, you have access to an extensive library of video tutorials and articles that cover a variety of programming languages. Whether you want to master Python, Java, C++, or JavaScript, our platform provides you with the resources you need to excel. Each tutorial is designed to break down complex concepts into manageable segments, making learning more effective and enjoyable. With expert guidance and real-world examples, you can build a strong foundation and advance your programming skills at your own pace."
                  );
                }}
                id="res_img_link2">
                Learn More
              </NavLink>
            </div>
          </div>
          <div className="res_card">
            <img
              src={komp2}
              alt="Enhance your skills"
              className="res_img"
              onClick={() =>
                openModal(
                  komp2,
                  "Enhance Your Skills",
                  "Enhancing your programming skills has never been easier with General Programming. Our platform offers structured learning paths tailored to your skill level, ensuring you get the most out of each lesson. Engage with interactive content, quizzes, and practical exercises that reinforce your understanding and allow you to apply what you've learned. Whether you are a beginner looking to grasp the basics or an experienced programmer seeking to refine your craft, our resources will elevate your expertise and confidence in coding."
                )
              }
            />
            <h3 className="res_card_title">Enhance your skills</h3>
            <p className="res_description">
              Take your programming skills to the next level with tailored
              learning paths.
            </p>
            <div className="res_navigate">
              <NavLink
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal(
                    komp2,
                    "Enhance Your Skills",
                    "Enhancing your programming skills has never been easier with General Programming. Our platform offers structured learning paths tailored to your skill level, ensuring you get the most out of each lesson. Engage with interactive content, quizzes, and practical exercises that reinforce your understanding and allow you to apply what you've learned. Whether you are a beginner looking to grasp the basics or an experienced programmer seeking to refine your craft, our resources will elevate your expertise and confidence in coding."
                  );
                }}
                id="res_img_link2">
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div
            className={`res_overlay ${isModalOpen ? "open" : ""}`}
            onClick={closeModal}></div>
          <div className={`res_modal ${isModalOpen ? "open" : ""}`}>
            <button className="res_modal_close" onClick={closeModal}>
              &times;
            </button>
            <div className="res_modal_box">
              <div className="res_modal_left">
                <img className="res_modal_img" src={modalContent.img} alt="" />
              </div>
              <hr className="res_modal_hr" />
              <div className="res_modal_right">
                <div className="res_modal_header">{modalContent.header}</div>
                <div className="res_modal_body">{modalContent.body}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Resurces;

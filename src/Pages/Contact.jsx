import React, { useState } from "react";
import "../styles/contact.scss";
import axios from "axios";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { toast, Zoom } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error("Please agree to the consent checkbox.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
        transition: Zoom,
      });
      return;
    }

    const TELEGRAM_BOT_TOKEN = "7724048692:AAGnhI_7ODMCVrqYrE4TTXLYoRJL8e3l_2E";
    const CHAT_ID = "6575316231";
    const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const message = `
📬 New Contact Form Submission:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Message: ${formData.message || "No message provided"}
    `;

    try {
      setIsSubmitting(true);
      const response = await axios.post(TELEGRAM_API_URL, {
        chat_id: CHAT_ID,
        text: message,
      });

      if (response.status === 200) {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
          transition: Zoom,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          consent: false,
        });
      } else {
        toast.warning("Failed to send the message.", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
          theme: "light",
          transition: Zoom,
        });
      }
    } catch (error) {
      console.error("Error sending message to Telegram:", error);

      toast.error("An error occurred while sending the message.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
        transition: Zoom,
      });
      alert();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact_wrapper wrapper">
        <p className="res_subtitle">Get in touch</p>
        <h3 className="res_title">We're here to help you grow!</h3>
        <div className="contact_box">
          <form className="contact_left" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name <span>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className="form_input"
              required
            />

            <label htmlFor="email">
              Email address <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@website.com"
              className="form_input"
              required
            />

            <label htmlFor="phone">
              Phone number <span>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="555-555-5555"
              className="form_input"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form_input message_input"
              placeholder="Write your message here..."
            ></textarea>

            <div className="checkbox_container">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="checkbox_input"
              />
              <label htmlFor="consent">
                I allow this website to store my submission so they can respond
                to my inquiry. <span>*</span>
              </label>
            </div>

            <button
              type="submit"
              className="submit_btn intro_btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
          <div className="contact_right">
            <h4>Get in touch</h4>
            <p>
              <AiOutlinePhone className="contact_icon" />
              <a href="tel:+998970500207">+998970500207</a>
            </p>
            <p>
              <AiOutlineMail className="contact_icon" />
              <a href="mailto:akhmadjanovislamali00@gmail.com">
                akhmadjanovislamali00@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>
              <AiOutlineEnvironment className="contact_icon" />
              Tashkent, TK UZ
            </p>
            <h4>Hours</h4>
            <div className="contact_hours">
              <ul className="hours_list">
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
              </ul>
              <ul className="hours_list">
                <li>9:00am - 10:00pm</li>
                <li>9:00am - 10:00pm</li>
                <li>9:00am - 10:00pm</li>
                <li>9:00am - 10:00pm</li>
                <li>9:00am - 10:00pm</li>
                <li>9:00am - 6:00pm</li>
                <li>9:00am - 12:00pm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

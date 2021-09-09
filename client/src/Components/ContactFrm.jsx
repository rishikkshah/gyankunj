import React, { useState } from "react";
import axios from "axios";
import "./style/ContactFrm.css";
const ContactFrm = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      await axios.post("/sendContactDetail", contact);
      setContact({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container_ m-auto my-5">
      <h1>Contact Us</h1>
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">Gauriganj,03</div>
            <div className="text-two">Jhapa</div>
          </div>
          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+97712345678</div>
            <div className="text-two">+97787654321</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">abc@gmail.com</div>
            <div className="text-two">abc.alom@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Drop a message for Us!</div>
          <p></p>
          <form onSubmit={submitHandler}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                name="name"
                value={contact.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your email"
                id="mail"
                name="email"
                value={contact.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="number"
                name="phone"
                placeholder="Enter your Phone Number"
                id="phone"
                value={contact.phone}
                onChange={handleChange}
              />
            </div>
            <div className="input-box message-box">
              <textarea
                rows="2"
                type="Message"
                placeholder="Enter the message"
                id="textarea"
                name="message"
                value={contact.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFrm;

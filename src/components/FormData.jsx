import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
//  fetch()
// axios ...........
const initialData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
const FormData = () => {
  // hook state useState
  const [formData, setFormData] = useState(initialData);
  const [success, setSucess] = useState(false);
  const { name, email, phone, subject, message } = formData;
  const url = "http://localhost:5000/contacts/create";
  const submitFormData = (e) => {
    e.preventDefault();
    setSucess(true);
    axios.post(url, formData);
    // console.log(formData);
    handleCrearForm();

    setTimeout(() => {
      setSucess(false);
    }, 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // clear input filed
  const handleCrearForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className="contact">
      <div className="contact_image">
        <img className="contact_image_form" src="/form.svg" alt="contact" />
      </div>
      <div className="contact_form">
        <h1>Instruction</h1>
        <h3>
          Please fill in the form very carefully because all the data you will
          enter will be use to put into you record. Any false information in
          this form will be consider as a crime!
        </h3>
        <form onSubmit={submitFormData}>
          <div className="form_input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={handleChange}
              placeholder="Enter your name..."
            />
          </div>
          <div className="form_input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email..."
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form_input">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number..."
            />
          </div>
          <div className="form_input">
            <label htmlFor="subject">subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={handleChange}
              required
              placeholder="Enter the subject..."
            />
          </div>
          <div className="form_input">
            <label htmlFor="message">Message</label>
            <textarea
              className="contact_text_area"
              name="message"
              value={message}
              onChange={handleChange}
              type="text"
              id="message"
              rows={7}
              required
              placeholder="Enter the message body here..."
            />
          </div>
          <button type="submit" className="send_button">
            <div className="" style={{ display: "flex", alignItems: "center" }}>
              <span> Send</span>
              <IoIosSend />
            </div>
          </button>
          {success && (
            <div
              className=""
              style={{
                backgroundColor: "green",
                padding: "10px",
                marginTop: "20px",
                borderRadius: "10px",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>Your message has been sent successfull!🚀✨✨</h2>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default FormData;

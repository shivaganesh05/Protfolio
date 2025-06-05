import React, { Fragment, useState } from "react";
import axios from "axios";
import { FiMessageCircle } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

const SendMail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const collectData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required.";
    if (!formData.email) formErrors.email = "Email is required.";
    if (!formData.subject) formErrors.subject = "Subject is required.";
    if (!formData.message) formErrors.message = "Message is required.";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if there are errors
    }

    setSending(true);
    axios
      .post("/api/mail/new", formData)
      .then((res) => {
        console.log(res.data);
        setSending(false);
        alert("Message Sent Successfully");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      })
      .catch((err) => {
        console.log(err);
        setSending(false);
        alert("Error sending message");
      });
  };

  return (
    <Fragment>
      <section id="getInTouch" className="pt-6 mt-4 mx-6 px-6">
        <div className="mx-6 px-6">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
                    <CiMail size={28}/>

          <p><a href="mailto:chennashivaganesh@gmail.com">chennashivaganesh@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          
          <FaLinkedin size={28}/>

          <p><a href="https://www.linkedin.com/in/chennashivaganesh/">LinkedIn</a></p>
        </div>
      </div>
      </div>
    </section>
    </Fragment>
  );
};

export default SendMail;

import React, { Fragment, useState } from "react";
import axios from "axios";
import { FiMessageCircle } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
const SendMail = () => {
    const [state, handleSubmit] = useForm("mgvydkoz");

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });
  // const [sending, setSending] = useState(false);
  // const [errors, setErrors] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const collectData = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const validateForm = () => {
  //   let formErrors = {};

  //   if (!formData.name) formErrors.name = "Name is required.";
  //   if (!formData.email) formErrors.email = "Email is required.";
  //   if (!formData.subject) formErrors.subject = "Subject is required.";
  //   if (!formData.message) formErrors.message = "Message is required.";

  //   setErrors(formErrors);

  //   return Object.keys(formErrors).length === 0;
  // };

  // const sendMessage = (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) {
  //     return; // Stop submission if there are errors
  //   }

  //   setSending(true);
  //   axios
  //     .post("/api/mail/new", formData)
  //     .then((res) => {
  //       console.log(res.data);
  //       setSending(false);
  //       alert("Message Sent Successfully");
  //       setFormData({ name: "", email: "", subject: "", message: "" });
  //       setErrors({});
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setSending(false);
  //       alert("Error sending message");
  //     });
  // };

  return (
    <Fragment>
      {/* <section id="getInTouch" className="pt-6 mt-4 pb-5 mx-6 px-6">
        <div className="mx-6 px-6">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
     <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-6 pb-8">
  <div className="flex items-center gap-4">
    <CiMail size={28} />
    <p>
      <a
        href="mailto:chennashivaganesh@gmail.com"
        className="hover:underline text-black text-lg dark:text-white"
      >
        chennashivaganesh@gmail.com
      </a>
    </p>
  </div>

  <div className="flex items-center gap-4">
    <FaLinkedin size={28} />
    <p>
      <a
        href="https://www.linkedin.com/in/chennashivaganesh/"
        className="text-black dark:text-white hover:underline text-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </p>
  </div>
</div>

      </div>
    </section> */}

     <section id="contact" className="py-20 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 text-center dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss a collaboration? Feel free to reach out and I'll get back to you soon.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-black dark:bg-white rounded-full text-white dark:text-black">
                      <Mail size={20} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-gray-900 dark:text-white">chennashivagnesh@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-black dark:bg-white rounded-full text-white dark:text-black">
                      <Phone size={20} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-gray-900 dark:text-white">+91 8187092421</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-black dark:bg-white rounded-full text-white dark:text-black">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-gray-900 dark:text-white">Hyderabad, Telangana</p>
                    </div>
                  </div>
                </div>
              </div>

             <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
  <div className="flex space-x-4">
    {/* Twitter */}
    <a
      href="https://twitter.com/chennashivagan2?t=JzNy6n5lHD1ZU0w1kfskmQ&s=08"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/shivaganesh_chenna/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/chennashivaganesh/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zm7 0h3.8v2.1h.05c.53-1 1.8-2.1 3.7-2.1 3.95 0 4.68 2.6 4.68 6V24h-4v-8.3c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24h-4V8.5z"/>
      </svg>
    </a>

<a
  href="https://github.com/shivaganesh05"
  target="_blank"
  rel="noopener noreferrer"
  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.21 11.434c.6.113.82-.26.82-.577v-2.03c-3.338.726-4.033-1.61-4.033-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.107-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.932 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23A11.505 11.505 0 0112 6.845c1.02.005 2.045.138 3.004.404 2.29-1.554 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.628-5.475 5.922.43.37.815 1.096.815 2.21v3.282c0 .32.217.694.825.576A12.005 12.005 0 0024 12c0-6.627-5.373-12-12-12z" />
  </svg>
</a>

    {/* Email */}
    <a
      href="mailto:chennashivaganesh@gmail.com"
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2 0l8 5 8-5H4zm16 2.236l-8 5-8-5V20h16V6.236z"/>
      </svg>
    </a>
  </div>
</div>

            </div>

            <div className="lg:col-span-3">
              {state.succeeded && (
                <p className="text-green-500 text-center mb-4 text-lg font-medium">
                  Thanks for your message! I'll get back to you soon.
                </p>
              )}

              <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      placeholder="John Doe"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      placeholder="john.doe@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    placeholder="Subject"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    placeholder="Write message"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-6 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
                >
                  {state.submitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  );
};

export default SendMail;

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
      <section id="getInTouch" className="pt-6 mt-4 pb-5 mx-6 px-6">
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
    </section>

     <section id="contact" className="py-20 md:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
                      <p className="text-gray-900 dark:text-white">hello@davidhckh.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-black dark:bg-white rounded-full text-white dark:text-black">
                      <Phone size={20} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-gray-900 dark:text-white">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-black dark:bg-white rounded-full text-white dark:text-black">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-gray-900 dark:text-white">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  {/* <!-- Add your other social icons here --> */}
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
                    placeholder="Project Inquiry"
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
                    placeholder="Tell me about your project..."
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

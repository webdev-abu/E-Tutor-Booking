import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactAnimation from "../assets/contact-animation.json";
import { Helmet } from "react-helmet";
import HeaderTitle from "./HeaderTitle";

const ContactUs = () => {
  // Framer Motion Variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const slideInVariant = {
    hidden: { opacity: 0, x: 900 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Online Tutor Booking</title>
      </Helmet>
      <div className="min-h-screen text-[#1e1e1e] bg-gradient-to-r from-blue-50 to-purple-100 ">
        <HeaderTitle
          title={"Contact Our Tutors"}
          description={
            "Have questions or need guidance? Connect with our expert tutors and get the support you need!"
          }
        />
        <div className="flex items-center justify-center py-10 ">
          <div className="grid lg:grid-cols-2 gap-10 w-full max-w-6xl">
            {/* Left Section (Lottie Animation) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className="flex flex-col justify-center items-center text-center"
            >
              <div className="w-full max-w-md">
                <Lottie animationData={contactAnimation} loop />
              </div>
              <h1 className="text-4xl font-bold text-primary mt-6">
                We’d Love to Hear from You!
              </h1>
              <p className="text-gray-600 mt-3 max-w-md">
                Reach out for inquiries, support, or collaboration. Let’s create
                something amazing together.
              </p>
            </motion.div>

            {/* Right Section (Form) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariant}
              className="p-8 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Contact Us
              </h2>

              <form className="space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInVariant}
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered w-full"
                  />
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInVariant}
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full"
                  />
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInVariant}
                  className="form-control"
                >
                  <label className="label">
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea
                    placeholder="Type your message"
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary w-full"
                >
                  Send Message
                </motion.button>
              </form>

              {/* Contact Details */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInVariant}
                className="mt-8 space-y-4"
              >
                <div className="flex items-center">
                  <FaPhoneAlt className="text-primary text-lg mr-3" />
                  <p className="text-gray-700">+123 456 7890</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-primary text-lg mr-3" />
                  <p className="text-gray-700">support@example.com</p>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-primary text-lg mr-3" />
                  <p className="text-gray-700">
                    123 Main Street, City, Country
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

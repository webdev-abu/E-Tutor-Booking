import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFileContract } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Condition | Online Tutor Booking</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-6">
            <FaFileContract className="text-3xl text-blue-500 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">
              Terms and Conditions
            </h1>
          </div>

          <p className="text-gray-600 mb-4">
            Welcome to our platform. Please read these terms and conditions
            carefully before using our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-600 mb-4">
            By accessing our platform, you agree to be bound by these terms. If
            you do not agree with any part, you may not use our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            2. User Obligations
          </h2>
          <p className="text-gray-600 mb-4">
            Users must comply with all applicable laws and refrain from any
            harmful activities while using the platform.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
            3. Termination
          </h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to terminate access to our services if users
            violate these terms.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8"
          >
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Terms;

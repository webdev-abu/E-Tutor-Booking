import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Online Tutor Booking</title>
      </Helmet>
      <motion.div
        className="min-h-screen bg-gray-100 px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <motion.div
            className="flex items-center mb-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaShieldAlt className="text-blue-500 text-3xl mr-4" />
            <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
          </motion.div>

          <motion.p
            className="text-gray-600 mb-6 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Your privacy is important to us. This privacy policy explains how we
            collect, use, and protect your information when you visit or use our
            services.
          </motion.p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect personal information such as your name, email
              address, and usage data to improve our services.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use the collected data to provide and improve our services,
              communicate with you, and ensure a secure user experience.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Data Protection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement various security measures to maintain the safety of
              your personal information.
            </p>
          </section>

          <motion.div
            className="text-center mt-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-500">
              If you have any questions about this Privacy Policy, please
              contact us.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default PrivacyPolicy;

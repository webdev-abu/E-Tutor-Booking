import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaSadTear } from "react-icons/fa";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Not found Page | Online Tutor Booking</title>
      </Helmet>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center items-center text-center"
        >
          <FaSadTear className="text-6xl text-blue-500 mb-4 " />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            404 - Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
            >
              Go Back Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ErrorPage;

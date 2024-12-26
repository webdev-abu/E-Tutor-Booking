import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ tutor }) => {
  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariant}
      className="flex items-center flex-col md:flex-row justify-between bg-white text-[#1e1e1e] shadow-md rounded-lg p-4"
    >
      {/* Left Section - Tutor Info */}
      <div className="flex flex-col md:flex-row  md:items-center gap-4 mb-4">
        {/* Tutor Image */}
        <img
          src={tutor.image}
          alt={`${tutor.name}'s avatar`}
          className="w-full h-full md:w-36 md:h-36 rounded-sm "
        />

        {/* Tutor Details */}
        <div>
          <h2 className="text-xl font-bold flex items-center justify-between gap-6">
            {tutor.name}
            <span className="ml-2 text-sm text-gray-500 font-medium">🇵🇱</span>
          </h2>
          <p className="text-pink-500 font-medium">{tutor.badge}</p>
          <p className="text-gray-600 mt-1">{tutor.category}</p>
          <p className="text-gray-600 text-sm">
            {tutor.teachers} active students • {tutor.lessons} lessons
          </p>
          <p className="text-gray-600 text-sm">{tutor.languages}</p>
        </div>
      </div>

      {/* Right Section - Rating, Price & CTA */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-start md:flex-col md:items-end gap-3">
        {/* Rating */}
        <div className="flex md:items-center gap-1">
          <FaStar className="text-yellow-500" />
          <span className="text-lg font-bold">{tutor.rating}</span>
          <span className="text-sm text-gray-500">
            ({tutor.reviews} reviews)
          </span>
        </div>

        {/* Pricing */}
        <p className="text-lg font-bold">{tutor.price}</p>
        <p className="text-sm text-gray-500">{tutor.lessonTime}</p>

        {/* Action Button */}
        <Link
          to={`/tutor-details/${tutor?._id}`}
          className="btn btn-secondary w-full"
        >
          Show Detail
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;

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
    // <motion.div
    //   initial="hidden"
    //   whileInView="visible"
    //   variants={fadeInVariant}
    //   className="card  bg-white shadow-lg rounded-lg overflow-hidden"
    // >
    //   {/* Header Section */}
    //   <div className="flex items-center p-4 gap-4">
    //     {/* Avatar */}
    //     <img
    //       src={tutor.image}
    //       alt={`${tutor.name}'s avatar`}
    //       className="w-16 h-16 rounded-full border-2 border-primary"
    //     />
    //     <div>
    //       <h2 className="text-lg font-bold text-gray-800">
    //         {tutor.name}{" "}
    //         <span className="badge badge-success">{tutor.badge}</span>
    //       </h2>
    //       <p className="text-sm text-gray-500">{tutor.languages}</p>
    //     </div>
    //   </div>

    //   {/* Details Section */}
    //   <div className="p-4 border-t border-gray-200">
    //     <div className="flex items-center justify-between mb-2">
    //       <div className="flex items-center text-yellow-500 gap-1">
    //         <FaStar />
    //         <span className="font-bold">{tutor.rating}</span>
    //         <span className="text-sm text-gray-500">
    //           ({tutor.reviews} reviews)
    //         </span>
    //       </div>
    //       <p className="text-primary font-semibold">{tutor.price}</p>
    //     </div>
    //     <p className="text-sm text-gray-500">{tutor.lessonTime}</p>
    //     <p className="text-sm text-gray-500">
    //       {tutor.activeStudents} active students, {tutor.lessons} lessons
    //     </p>
    //   </div>

    //   {/* Action Button */}
    //   <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-center">
    //     <Link
    //       to={`/tutor-details/${tutor?._id}`}
    //       className="btn btn-secondary w-full"
    //     >
    //       Show Detail
    //     </Link>
    //   </div>
    // </motion.div>
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariant}
      className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
    >
      {/* Left Section - Tutor Info */}
      <div className="flex items-center gap-4">
        {/* Tutor Image */}
        <img
          src={tutor.image}
          alt={`${tutor.name}'s avatar`}
          className="w-32 h-32 rounded-sm"
        />

        {/* Tutor Details */}
        <div>
          <h2 className="text-xl font-bold flex items-center">
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
      <div className="flex flex-col items-end gap-2">
        {/* Rating */}
        <div className="flex items-center gap-1">
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

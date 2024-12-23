// import React from "react";
// import { FaStar, FaHeart } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import tutorAnimation from "../assets/contact-animation.json";

// const Card = () => {
//   // Animation Variants
//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.95 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   };

//   const hoverEffect = {
//     whileHover: { scale: 1.05, transition: { duration: 0.3 } },
//     whileTap: { scale: 0.95 },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={cardVariants}
//       className="card w-full lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden relative"
//     >
//       {/* Header Section */}
//       <div className="flex items-center p-4 gap-4">
//         {/* Animated Avatar */}
//         <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
//           <Lottie animationData={tutorAnimation} loop />
//         </div>
//         {/* Tutor Info */}
//         <div>
//           <h2 className="text-lg font-bold text-gray-800 flex items-center">
//             Kacper M.
//             <span className="badge badge-success ml-2">Super Tutor</span>
//           </h2>
//           <p className="text-sm text-gray-500">
//             Certified English Tutor with 10 years of experience — Hi!
//           </p>
//         </div>
//       </div>

//       {/* Details Section */}
//       <div className="p-4 border-t border-gray-200">
//         {/* Ratings & Pricing */}
//         <div className="flex items-center justify-between mb-2">
//           <div className="flex items-center text-yellow-500 gap-1">
//             <FaStar />
//             <span className="font-bold text-gray-800">5</span>
//             <span className="text-sm text-gray-500">(76 reviews)</span>
//           </div>
//           <p className="text-primary font-semibold">BDT 5,489</p>
//         </div>
//         {/* Lesson and Language Info */}
//         <p className="text-sm text-gray-500">
//           50-min lesson | 24 active students, 2,712 lessons
//         </p>
//         <p className="text-sm text-gray-500">
//           Speaks English (Proficient), Polish (Native)
//         </p>
//       </div>

//       {/* Action Section */}
//       <motion.div
//         {...hoverEffect}
//         className="p-4 flex justify-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-pink-600 cursor-pointer"
//       >
//         <button className="btn btn-secondary w-full">Book Trial Lesson</button>
//       </motion.div>

//       {/* Favorite Icon */}
//       <motion.div
//         whileHover={{ scale: 1.2 }}
//         className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg cursor-pointer"
//       >
//         <FaHeart className="text-gray-400" />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Card;

import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Card = ({ tutor }) => {
  // Animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  console.log(tutor);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariant}
      className="card  bg-white shadow-lg rounded-lg overflow-hidden"
    >
      {/* Header Section */}
      <div className="flex items-center p-4 gap-4">
        {/* Avatar */}
        <img
          src={tutor.image}
          alt={`${tutor.name}'s avatar`}
          className="w-16 h-16 rounded-full border-2 border-primary"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            {tutor.name}{" "}
            <span className="badge badge-success">{tutor.badge}</span>
          </h2>
          <p className="text-sm text-gray-500">{tutor.languages}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-yellow-500 gap-1">
            <FaStar />
            <span className="font-bold">{tutor.rating}</span>
            <span className="text-sm text-gray-500">
              ({tutor.reviews} reviews)
            </span>
          </div>
          <p className="text-primary font-semibold">{tutor.price}</p>
        </div>
        <p className="text-sm text-gray-500">{tutor.lessonTime}</p>
        <p className="text-sm text-gray-500">
          {tutor.activeStudents} active students, {tutor.lessons} lessons
        </p>
      </div>

      {/* Action Button */}
      <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-center">
        <button className="btn btn-secondary w-full">Book Trial Lesson</button>
      </div>
    </motion.div>
  );
};

export default Card;

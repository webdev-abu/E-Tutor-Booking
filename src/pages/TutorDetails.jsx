// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { FaStar, FaCalendarAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { motion } from "framer-motion";

// const TutorDetails = () => {
//   const { id } = useParams();
//   const [tutors, setTutors] = useState([]);

//   useEffect(() => {
//     fetchAllTutors();
//   }, []);

//   const fetchAllTutors = async () => {
//     try {
//       const { data } = await axios.get(
//         `${import.meta.env.VITE_API_URL}/tutor-detail/${id}`
//       );
//       setTutors(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   console.log(tutors);
//   return (
//     <motion.div
//       className="container mx-auto p-6 bg-base-100 rounded-lg shadow-lg"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row items-center gap-6">
//         {/* Profile Animation */}

//         <img
//           src={tutors.image}
//           alt={`${tutors.name}'s avatar`}
//           className="w-40 h-40 rounded-full shadow-md"
//         />
//         <div>
//           <h1 className="text-3xl font-bold text-primary">{tutors.name}</h1>
//           <p className="text-sm text-gray-600">Expert in {tutors.category}</p>
//           <div className="flex items-center gap-1">
//             <FaStar className="text-yellow-500" />
//             <span className="text-lg font-bold">{tutors.rating}</span>
//             <span className="text-sm text-gray-500">
//               ({tutors.reviews} reviews)
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* About Section */}
//       <motion.div
//         className="mt-6"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//       >
//         <h2 className="text-2xl font-semibold text-secondary">
//           About the Tutor
//         </h2>
//         <p className="text-gray-700 mt-2">
//           John Doe has 10+ years of experience teaching mathematics and physics
//           to high school and college students. His teaching methods are
//           interactive and designed to make complex topics easier to understand.
//         </p>
//       </motion.div>

//       {/* Contact & Schedule */}
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Contact Info */}
//         <motion.div
//           className="p-4 bg-gray-100 rounded-lg shadow"
//           whileHover={{ scale: 1.05 }}
//         >
//           <h3 className="text-xl font-semibold text-secondary">
//             Contact Information
//           </h3>
//           <div className="mt-3">
//             <p className="flex items-center gap-2">
//               <FaPhoneAlt className="text-primary" />
//               +1 (555) 123-4567
//             </p>
//             <p className="flex items-center gap-2 mt-2">
//               <FaEnvelope className="text-primary" />
//               john.doe@example.com
//             </p>
//           </div>
//         </motion.div>

//         {/* Available Schedule */}
//         <motion.div
//           className="p-4 bg-gray-100 rounded-lg shadow"
//           whileHover={{ scale: 1.05 }}
//         >
//           <h3 className="text-xl font-semibold text-secondary">
//             Available Schedule
//           </h3>
//           <ul className="mt-3 space-y-2">
//             <li className="flex items-center gap-2">
//               <FaCalendarAlt className="text-primary" />
//               Monday - Friday: 9:00 AM - 5:00 PM
//             </li>
//             <li className="flex items-center gap-2">
//               <FaCalendarAlt className="text-primary" />
//               Saturday: 10:00 AM - 2:00 PM
//             </li>
//           </ul>
//         </motion.div>
//       </div>

//       {/* Book a Session */}
//       <motion.div
//         className="mt-8 text-center"
//         whileHover={{ scale: 1.1 }}
//         transition={{ duration: 0.2 }}
//       >
//         <button className="btn btn-primary btn-wide">Book a Session</button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default TutorDetails;

import React, { useContext, useEffect, useState } from "react";
import { FaLanguage, FaStar, FaUsers, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const TutorDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [tutor, setTutor] = useState([]);

  useEffect(() => {
    fetchAllTutors();
  }, []);

  const fetchAllTutors = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/tutor-detail/${id}`
      );
      setTutor(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(tutor);
  const handleBookedTutors = async () => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/booked-tutorial`,
        {
          tutor_id: id,
          image: tutor.image,
          language: tutor.category,
          price: tutor.price,
          tutorEmail: tutor.tutorEmail,
          user_email: user.email,
        }
      );
      if (data.insertedId) {
        toast.success("Booked Successfully");
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    console.log();
  };

  return (
    <motion.div
      className="w-11/12 mx-auto p-6 bg-base-100 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <motion.img
          src={tutor?.image}
          alt={tutor?.name}
          className="w-40 h-40 rounded-full shadow-md object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div>
          <h1 className="text-3xl font-bold text-primary">{tutor?.name}</h1>
          <span className="badge badge-secondary">{tutor?.badge}</span>
          {/* <div className="flex items-center gap-2 mt-2">
            {[...Array(tutor?.rating)]?.map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
            <span className="text-sm text-gray-600">
              ({tutor?.reviews} Reviews)
            </span>
          </div> */}
          <div className="flex items-center gap-2 mt-2">
            <FaStar className="text-yellow-500" />
            <span className="text-lg font-bold">{tutor.rating}</span>
            <span className="text-sm text-gray-500">
              ({tutor.reviews} reviews)
            </span>
          </div>
          <p className="text-gray-700 mt-1">
            Category: <span className="font-semibold">{tutor?.category}</span>
          </p>
        </div>
      </div>

      {/* Pricing and Lesson Info */}
      <motion.div
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Price</h3>
          <p className="text-primary text-2xl">{tutor?.price}</p>
          <p className="text-gray-600">{tutor?.lessonTime}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Active Students</h3>
          <p className="text-primary text-2xl">{tutor?.activeStudents}</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Languages</h3>
          <p className="text-gray-700">{tutor?.languages}</p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow"
          whileHover={{ scale: 1.05 }}
        >
          <FaUsers className="text-primary text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">{tutor?.teachers}</h3>
            <p className="text-gray-600">Teachers</p>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow"
          whileHover={{ scale: 1.05 }}
        >
          <FaBook className="text-primary text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">{tutor?.lessons}</h3>
            <p className="text-gray-600">Lessons Conducted</p>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow"
          whileHover={{ scale: 1.05 }}
        >
          <FaLanguage className="text-primary text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">{tutor?.category}</h3>
            <p className="text-gray-600">Category</p>
          </div>
        </motion.div>
      </div>

      {/* Book a Lesson Button */}
      <motion.div
        className="mt-8 text-center"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={handleBookedTutors}
          className="btn btn-primary btn-wide"
        >
          Book a Lesson
        </button>
      </motion.div>
    </motion.div>
  );
};

export default TutorDetails;

import React, { useContext, useEffect, useState } from "react";
import { FaLanguage, FaStar, FaUsers, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const TutorDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
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
          reviews: 0,
          user_email: user.email,
        }
      );
      if (data.insertedId) {
        toast.success("Booked Successfully");
        navigate("/booked-tutors");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>Tutorial details | Online Tutor Booking</title>
      </Helmet>
      <motion.div
        className="w-11/12 mx-auto p-6 bg-base-100 rounded-lg shadow-lg mt-32 mb-16"
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
    </>
  );
};

export default TutorDetails;

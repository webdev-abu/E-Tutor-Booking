import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Navigation, Pagination, Autoplay } from "swiper";
import { FaStar } from "react-icons/fa";

const PopularTutors = () => {
  // Example tutor data
  const tutors = [
    {
      id: 1,
      name: "John Doe",
      subject: "English",
      rating: 4.8,
      reviews: 120,
      avatar: "https://via.placeholder.com/150", // Replace with actual image URLs
      animation: {
        hidden: { opacity: 0, x: -1000 },
        visible: { opacity: 1, x: 0 },
      },
    },
    {
      id: 2,
      name: "Jane Smith",
      subject: "Mathematics",
      rating: 4.9,
      reviews: 95,
      avatar: "https://via.placeholder.com/150",
      animation: {
        hidden: { opacity: 0, y: -1000 },
        visible: { opacity: 1, y: 0 },
      },
    },
    {
      id: 3,
      name: "Alice Brown",
      subject: "Spanish",
      rating: 4.7,
      reviews: 80,
      avatar: "https://via.placeholder.com/150",
      animation: {
        hidden: { opacity: 0, x: 1000 },
        visible: { opacity: 1, x: 0 },
      },
    },
    {
      id: 4,
      name: "David Wilson",
      subject: "Physics",
      rating: 4.6,
      reviews: 70,
      avatar: "https://via.placeholder.com/150",
      animation: {
        hidden: { opacity: 0, y: 1000 },
        visible: { opacity: 1, y: 0 },
      },
    },
  ];

  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1.1,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, x: 1000 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.9 }}
      className="w-11/12 mx-auto py-8 "
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        Most Popular Courses
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Keeps autoplay going after user interaction
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="swiper-container"
      >
        {tutors.map((tutor) => (
          <SwiperSlide key={tutor.id}>
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.05 }}
              className="card bg-base-100 my-10 shadow-md hover:shadow-lg group transition-all duration-300"
            >
              <Link to={`/tutors/${tutor.id}`}>
                <div className="flex justify-between items-center px-5 py-5">
                  <div className="flex items-center justify-between gap-3">
                    <img
                      src={tutor.avatar}
                      alt={`${tutor.name}'s avatar`}
                      className="w-16 h-16 rounded-full border"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e1e1e]">
                        {tutor.name}
                      </h3>
                      <p className="text-sm text-gray-600">{tutor.subject}</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className=" flex flex-col items-start justify-center">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar />
                        <span className="font-semibold">{tutor.rating}</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {tutor.reviews} reviews
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default PopularTutors;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Navigation, Pagination, Autoplay } from "swiper";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import HeaderTitle from "./HeaderTitle";

const PopularTutors = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetchAllTutors();
  }, []);

  const fetchAllTutors = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/tutors`
      );

      setTutors(data);
    } catch (error) {
      console.error(error);
    }
  };

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
      className="w-11/12 mx-auto pb-16"
    >
      {/* <h2 className="text-3xl font-bold text-center mb-8">
        Most Popular Courses
      </h2> */}
      <HeaderTitle
        title={"Most Popular Tutors"}
        description={
          "Learn from the Best – Meet Our Top-Rated Tutors Ready to Help You Succeed!"
        }
      />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
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
        className="swiper-container swiper-pagination-bullets-most"
      >
        {tutors.map((tutor) => (
          <SwiperSlide key={tutor._id}>
            <motion.div
              variants={cardVariant}
              whileHover={{ scale: 1.05 }}
              className="card bg-base-100 my-10 shadow-md hover:shadow-lg group transition-all duration-300"
            >
              <Link to={`/tutors/${tutor.id}`}>
                <div className="flex justify-between items-center px-5 py-5">
                  <div className="flex items-center justify-between gap-3">
                    <img
                      src={tutor.image}
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

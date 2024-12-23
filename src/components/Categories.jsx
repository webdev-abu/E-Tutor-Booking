import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaLanguage, FaBook, FaGlobe } from "react-icons/fa";
import { SiGeocaching, SiGoogletranslate } from "react-icons/si";
import { GiEarthAmerica } from "react-icons/gi";
import { MdTranslate } from "react-icons/md";
import { LuJapaneseYen } from "react-icons/lu";

const Categories = () => {
  // Categories with teacher count
  const categories = [
    { id: 1, title: "English", logo: <FaLanguage />, teachers: 120 },
    { id: 2, title: "Spanish", logo: <FaGlobe />, teachers: 85 },
    { id: 3, title: "French", logo: <FaBook />, teachers: 60 },
    { id: 4, title: "German", logo: <MdTranslate />, teachers: 45 },
    { id: 5, title: "Japanese", logo: <LuJapaneseYen />, teachers: 30 },
    { id: 6, title: "Chinese", logo: <SiGeocaching />, teachers: 50 },
    { id: 7, title: "Arabic", logo: <SiGoogletranslate />, teachers: 40 },
    { id: 8, title: "Korean", logo: <GiEarthAmerica />, teachers: 25 },
    { id: 9, title: "Italian", logo: <FaLanguage />, teachers: 35 },
  ];

  // Framer Motion Variants
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 1000 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.1 } },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2) shadow-md",
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-11/12 mx-auto px-4 py-8 "
    >
      <motion.h2
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Language Categories
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariant}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/find-tutors"
              className="card bg-base-100 shadow-md group transition-all duration-300"
            >
              <div className="card-body flex flex-row justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl text-primary">{category.logo}</div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <h3 className="text-xl font-semibold">
                    {category.teachers} teachers available
                  </h3>
                </div>
                <div className="flex justify-end mt-4">
                  <FaArrowRight className="text-xl text-gray-500 group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Categories;

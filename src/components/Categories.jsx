import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import HeaderTitle from "./HeaderTitle";

const Categories = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetchAllTutors();
  }, []);

  const fetchAllTutors = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/tutors/category`
      );

      setTutors(data);
    } catch (error) {
      console.error(error);
    }
  };
  // console.log(tutors);

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
    <motion.div initial="hidden" animate="visible" className="w-11/12 mx-auto">
      <HeaderTitle
        title={"Language Categories"}
        description={
          "Here are some Language Categories for your Online Tutor Booking Platform!"
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutors.map((category) => (
          <motion.div
            key={category._id}
            variants={cardVariant}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <Link
              to={`/find-tutors/${category?.category}`}
              className="card bg-base-100 shadow-md group transition-all duration-300"
            >
              <div className="card-body flex flex-row justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl text-primary">
                    <img
                      src={category.logo}
                      alt={category.category}
                      className="w-[50px] h-[50px]"
                    />
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <h3 className="text-xl font-semibold">{category.category}</h3>
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

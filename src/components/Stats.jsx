import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaComments,
  FaLanguage,
  FaChalkboardTeacher,
} from "react-icons/fa";
import HeaderTitle from "./HeaderTitle";

const Stats = () => {
  // Example stats
  const stats = [
    {
      id: 1,
      title: "Tutors",
      count: 1200,
      icon: <FaChalkboardTeacher />,
      animation: {
        hidden: { opacity: 0, x: -1000 },
        visible: { opacity: 1, x: 0 },
      },
    },
    {
      id: 2,
      title: "Reviews",
      count: 8450,
      icon: <FaComments />,
      animation: {
        hidden: { opacity: 0, y: -1000 },
        visible: { opacity: 1, y: 0 },
      },
    },
    {
      id: 3,
      title: "Languages",
      count: 50,
      icon: <FaLanguage />,
      animation: {
        hidden: { opacity: 0, y: 1000 },
        visible: { opacity: 1, y: 0 },
      },
    },
    {
      id: 4,
      title: "Users",
      count: 32000,
      icon: <FaUsers />,
      animation: {
        hidden: { opacity: 0, x: 1000 },
        visible: { opacity: 1, x: 0 },
      },
    },
  ];

  return (
    <motion.div initial="hidden" animate="visible" className="w-11/12 mx-auto">
      {/* <motion.h2
        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-[48px] font-bold text-center pt-[120px] pb-[60px] bg-red-500"
      >
        Our Statistics
      </motion.h2> */}
      <HeaderTitle
        title={"Our Statistics"}
        description={
          "We are proud to share the success of our eTutor platform!"
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            variants={stat.animation}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2 }}
            className="card bg-base-100 shadow-md hover:shadow-lg group transition-all duration-300"
          >
            <div className="card-body flex flex-col items-center text-center">
              <div className="text-5xl text-primary mb-4">{stat.icon}</div>
              <h3 className="text-xl font-semibold text-[#1e1e1e]">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold text-[#1e1e1e]">{stat.count}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Stats;

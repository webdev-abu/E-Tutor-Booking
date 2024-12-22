import React from "react";
import {
  FaChalkboardTeacher,
  FaStar,
  FaLanguage,
  FaUsers,
} from "react-icons/fa";

const Stats = () => {
  const stats = [
    {
      icon: <FaChalkboardTeacher size={30} className="text-primary" />,
      count: "250+",
      label: "Tutors",
    },
    {
      icon: <FaStar size={30} className="text-secondary" />,
      count: "500+",
      label: "Reviews",
    },
    {
      icon: <FaLanguage size={30} className="text-accent" />,
      count: "30+",
      label: "Languages",
    },
    {
      icon: <FaUsers size={30} className="text-info" />,
      count: "10K+",
      label: "Users",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-base-100 shadow-md rounded-lg p-6 flex flex-col items-center gap-4"
            >
              <div className="p-4 bg-gray-100 rounded-full">{stat.icon}</div>
              <h3 className="text-2xl font-bold">{stat.count}</h3>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

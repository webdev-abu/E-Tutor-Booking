import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLanguage, FaBook, FaGlobe } from "react-icons/fa";
import { SiGeocaching, SiGoogletranslate } from "react-icons/si";
import { GiEarthAmerica } from "react-icons/gi";
import { MdTranslate } from "react-icons/md";
import { LuJapaneseYen } from "react-icons/lu";

const Categories = () => {
  // List of language categories with React Icons as logos
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

  return (
    <div className="w-11/12 mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Language Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to="/find-tutors"
            className="card bg-base-100 hover:bg-primary shadow-sm hover:shadow-lg group transition-all duration-300"
          >
            <div className="card-body flex flex-row justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="text-4xl text-primary group-hover:text-[#ffffff]">
                  {category.logo}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  <h3 className="text-xl font-semibold group-hover:text-[#ffffff]">
                    {category.title}
                  </h3>
                  <p className="text-xl font-normal group-hover:text-[rgba(255,255,255,0.7)]">
                    {category.teachers} teachers available
                  </p>
                </div>
              </div>
              <div className="flex justify-end ">
                <FaArrowRight className="text-xl text-primary group-hover:text-[#ffffff] transition-colors duration-300" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;

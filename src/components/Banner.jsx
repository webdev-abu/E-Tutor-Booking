import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Banner = () => {
  const { user } = useContext(AuthContext);
  const slides = [
    {
      image: "https://i.ibb.co/MMrWF6b/carousel-1.jpg",
      title: "Best Online Courses",
      description: "Get Educated Online From Your Home!",
      link: "/find-tutors",
    },
    {
      image: "https://i.ibb.co/0jVzcVB/carousel-2.jpg",
      title: "Best Online Courses",
      description: "Save big on your favorite brands!",
      link: "/find-tutors",
    },
    {
      image: "https://i.ibb.co/VwN5MMv/course-3.jpg",
      title: "Best Online Courses",
      description: "Be part of our sports enthusiasts group!",
      link: "/find-tutors",
    },
  ];

  return (
    <div className="bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full h-[630px]  overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute -inset-0  bg-black/70 ">
                <div className="h-full flex justify-center items-center">
                  <div className="text-center text-white">
                    <h2 className="text-primary uppercase mb-3 text-[28px] font-semibold font-Heebo">
                      {slide.title}
                    </h2>
                    <p className="text-white uppercase mb-3 text-[48px] font-bold font-Rancho">
                      {slide.description}
                    </p>
                    <div className="static z-[999]">
                      <Link
                        to={slide.link}
                        className="btn btn-primary py-md-3 px-md-5 me-3"
                      >
                        Read More
                        <FaArrowRight />
                      </Link>
                      {user ? (
                        ""
                      ) : (
                        <Link
                          to="/login"
                          className="btn btn-light py-md-3 px-md-5 cursor-pointer"
                        >
                          Join Now
                          <FaArrowRight />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co/MMrWF6b/carousel-1.jpg",
      title: "Best Online Courses",
      description: "Get Educated Online From Your Home!",
      link: "/login",
    },
    {
      image: "https://i.ibb.co/0jVzcVB/carousel-2.jpg",
      title: "Best Online Courses",
      description: "Save big on your favorite brands!",
      link: "/login",
    },
    {
      image: "https://i.ibb.co/VwN5MMv/course-3.jpg",
      title: "Best Online Courses",
      description: "Be part of our sports enthusiasts group!",
      link: "/login",
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
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="text-center text-white z-10">
                <h2 className="text-primary uppercase mb-3 text-[28px] font-semibold font-Heebo">
                  {slide.title}
                </h2>
                <p className="text-white uppercase mb-3 text-[48px] font-bold font-Rancho">
                  {slide.description}
                </p>
                <div className="">
                  <Link
                    to={slide.link}
                    className="btn btn-primary py-md-3 px-md-5 me-3"
                  >
                    Read More
                    <FaArrowRight />
                  </Link>
                  <Link
                    to={slide.link}
                    className="btn btn-light py-md-3 px-md-5"
                  >
                    Join Now
                    <FaArrowRight />
                  </Link>
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

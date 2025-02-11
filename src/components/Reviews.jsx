import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import HeaderTitle from "./HeaderTitle";

const reviews = [
  {
    id: 1,
    name: "John Smith",
    review:
      "The tutor sessions were excellent! The tutor helped me understand complex concepts with ease. Highly recommended!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 2,
    name: "Emily Johnson",
    review:
      "Amazing platform! The tutors are knowledgeable and very supportive. My grades have improved a lot!",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 3,
    name: "Michael Brown",
    review:
      "The personalized approach to learning made a big difference. I gained confidence in my studies. Thank you!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=9",
  },
];

const Reviews = () => {
  return (
    <section className="pb-16">
      <div className="w-11/12 mx-auto">
        {/* Section Title */}

        <HeaderTitle
          title={"What Our Students Say"}
          description={
            "Hear from our students how personalized tutoring helped them achieve their goals!"
          }
        />
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: review.id * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{review.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

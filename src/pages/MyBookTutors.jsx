import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyBookTutors = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tutors, setTutors] = useState([]);
  const [tutorsReview, setTutorsReview] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/booked-tutorial/${user.email}`, {
        withCredentials: true,
      })
      .then((res) => setTutors(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleReview = (tutorId) => {
    axios
      .patch(`${import.meta.env.VITE_API_URL}/update-review/${tutorId}`) // API call to update reviews
      .then(() => {
        setTutors(
          tutors.map((tutor) =>
            tutor._id === tutorId
              ? { ...tutor, reviews: tutor.reviews + 1 }
              : tutor
          )
        );
        if (tutors.length > 0) {
          toast.success("Review submitted successfully");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <Helmet>
        <title>My Booked Tutorials | Online Tutor Booking</title>
      </Helmet>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <div className="w-11/12 mx-auto py-8 ">
          <h1 className="text-3xl font-bold text-primary mb-6">
            Booked Tutors
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {tutors.map((tutor) => (
              <div
                key={tutor._id}
                className="p-4 bg-base-100 rounded-lg shadow-lg flex flex-col items-center"
              >
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h2 className="text-lg font-semibold">{tutor.name}</h2>
                <p className="text-sm text-gray-600">{tutor.language}</p>
                <p className="text-primary font-semibold mt-2">{tutor.price}</p>
                {/* <div className="flex items-center gap-2 mt-2">
              <FaStar className="text-yellow-500" />
              <span>{tutor.reviews} Reviews</span>
            </div> */}
                <button
                  className="btn btn-primary btn-sm mt-4"
                  onClick={() => handleReview(tutor.tutor_id)}
                >
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookTutors;

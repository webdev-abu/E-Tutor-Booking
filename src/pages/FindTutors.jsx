import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
import FindTutor from "../components/FindTutor";
import { Helmet } from "react-helmet";

const FindTutors = () => {
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

  console.log(tutors);
  return (
    <>
      <Helmet>
        <title>Find Tutorials | Online Tutor Booking</title>
      </Helmet>
      <div className="mt-[140px] mb-16 ">
        <motion.h2
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="text-3xl font-bold text-center mb-10"
        >
          All Tutors
        </motion.h2>
        <FindTutor />
      </div>
    </>
  );
};

export default FindTutors;

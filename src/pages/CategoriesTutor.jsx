import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const CategoriesTutor = () => {
  const { category } = useParams();
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetchAllTutors();
  }, []);

  const fetchAllTutors = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/find-tutors/${category}`
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
        <title>Show Categories Tutorials | Online Tutor Booking</title>
      </Helmet>
      <div className="mt-[140px] mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="text-3xl font-bold text-center mb-10"
        >
          All {category} Tutors
        </motion.h2>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-5">
          {tutors.map((tutor) => (
            <Card key={tutor._id} tutor={tutor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoriesTutor;

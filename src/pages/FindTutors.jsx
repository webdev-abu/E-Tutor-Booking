import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

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
    <div>
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
        {tutors.map((tutor) => (
          <Card key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default FindTutors;

import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    <div className="my-16">
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
        {tutors.map((tutor) => (
          <Card key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesTutor;

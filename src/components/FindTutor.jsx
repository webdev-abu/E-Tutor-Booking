import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Card from "./Card";

const FindTutor = () => {
  const [searchText, setSearchText] = useState("");
  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);

  // Fetch tutors on component mount
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/find-tutors`
        ); // Replace with your API endpoint
        setTutors(response.data);
        setFilteredTutors(response.data);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      }
    };

    fetchTutors();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    // Filter tutors based on language match
    const filtered = tutors.filter((tutor) =>
      tutor.languages.toLowerCase().includes(value)
    );
    setFilteredTutors(filtered);
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex flex-col items-center py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-11/12 mx-auto bg-white text-[#1e1e1e] shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Find Tutors</h2>

        {/* Search Input */}
        <div className="form-control mb-6">
          <input
            type="text"
            placeholder="Search by language (e.g., English, Spanish)"
            className="input input-bordered w-full"
            value={searchText}
            onChange={handleSearch}
          />
        </div>

        {/* Tutors Table */}
        {/* <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Language</th>
                <th>Price</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {filteredTutors.length > 0 ? (
                filteredTutors.map((tutor, index) => (
                  <tr key={tutor._id}>
                    <td>{index + 1}</td>
                    <td>{tutor.name}</td>
                    <td>
                      <img
                        src={tutor.image}
                        alt={tutor.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td>{tutor.languages}</td>
                    <td>${tutor.price}</td>
                    <td>{tutor.reviews}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No tutors found matching "{searchText}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div> */}
      </div>
      <div className="w-11/12 mx-auto bg-white shadow-lg rounded-lg my-8">
        {filteredTutors.length > 0 ? (
          <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            {filteredTutors.map((tutor) => (
              <Card key={tutor._id} tutor={tutor} />
            ))}
          </div>
        ) : (
          <div className="text-center p-8 text-red-600">
            No tutors found matching "{searchText}"
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FindTutor;

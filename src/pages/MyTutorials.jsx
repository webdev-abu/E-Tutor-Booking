import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

const MyTutorials = () => {
  const [tutorials, setTutorials] = useState([]);

  // Fetch tutorials on component mount
  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const response = await axios.get("/user-tutorials"); // Replace with your API endpoint
        setTutorials(response.data);
      } catch (error) {
        console.error("Error fetching tutorials:", error);
      }
    };

    fetchTutorials();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this tutorial?")) {
      try {
        await axios.delete(`/tutorial/${id}`); // Replace with your API endpoint
        setTutorials(tutorials.filter((tutorial) => tutorial._id !== id));
      } catch (error) {
        console.error("Error deleting tutorial:", error);
      }
    }
  };

  // Handle update
  const handleUpdate = (id) => {
    // Navigate to the update tutorial page
    window.location.href = `/update-tutorial/${id}`;
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex flex-col items-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Your Tutorials</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Language</th>
                <th>Price</th>
                <th>Description</th>
                <th>Review</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tutorials.map((tutorial, index) => (
                <tr key={tutorial._id}>
                  <td className="text-center">{index + 1}</td>
                  <td>{tutorial.name}</td>
                  <td>
                    <img
                      src={tutorial.image}
                      alt={tutorial.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td>{tutorial.language}</td>
                  <td>${tutorial.price}</td>
                  <td>{tutorial.description}</td>
                  <td>{tutorial.review}</td>
                  <td className="flex items-center gap-2">
                    {/* Update Button */}
                    <button
                      className="btn btn-primary btn-sm flex items-center gap-1"
                      onClick={() => handleUpdate(tutorial._id)}
                    >
                      <FaEdit />
                      Update
                    </button>
                    {/* Delete Button */}
                    <button
                      className="btn btn-error btn-sm flex items-center gap-1"
                      onClick={() => handleDelete(tutorial._id)}
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default MyTutorials;

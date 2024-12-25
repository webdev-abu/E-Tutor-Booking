import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const MyTutorials = () => {
  const { user } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);

  // Fetch tutorials on component mount
  useEffect(() => {
    fetchTutorials();
  }, [user]);

  const fetchTutorials = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/my-tutorials/${user.email}`
      ); // Replace with your API endpoint
      setTutorials(response.data);
    } catch (error) {
      console.error("Error fetching tutorials:", error);
    }
  };

  const handleDeleteTutorial = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/delete-tutorial/${id}`
      ); // Replace with your API endpoint
      setTutorials(tutorials.filter((tutorial) => tutorial._id !== id));
      if (data.deletedCount > 0) {
        toast.success(`Tutorial deleted successfully`, data);
        fetchTutorials();
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDeleteTutorialConform = (id) => {
    toast((t) => (
      <div>
        <p>
          Are you <b>sure you want to delete</b> this tutorial?
        </p>
        <div className="flex justify-center gap-12 items-center mt-4">
          <button
            className="bg-red-400 text-white px-3 py-2 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDeleteTutorial(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-2 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  // Handle update
  const handleUpdate = (id) => {
    // Navigate to the update tutorial page
    window.location.href = `/update-tutorial/${id}`;
  };

  return (
    <>
      <Helmet>
        <title>My Tutorials | Online Tutor Booking</title>
      </Helmet>
      <motion.div
        className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex flex-col items-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-11/12 mx-auto bg-white text-[#1e1e1e] shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">
            Your Tutorials
          </h2>
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
                    <td>{tutorial.languages}</td>
                    <td>${tutorial.price}</td>
                    <td>{tutorial.description}</td>
                    <td>{tutorial.reviews}</td>
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
                        onClick={() =>
                          handleDeleteTutorialConform(tutorial._id)
                        }
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
    </>
  );
};

export default MyTutorials;

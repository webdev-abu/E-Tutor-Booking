import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const AddTutorials = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const logo = form.logo.value;
    const badge = form.badge.value;
    const rating = form.rating.value;
    const price = "BDT " + form.price.value;
    const lessonTime = form.lessonTime.value;
    const activeStudents = form.activeStudents.value;
    const teachers = form.teachers.value;
    const lessons = form.lessons.value;
    const image = form.image.value;
    const languages = form.languages.value;
    const category = form.category.value;
    const description = form.description.value;

    const formData = {
      name: user?.displayName,
      email: user?.email,
      logo,
      badge,
      rating,
      price,
      lessonTime,
      activeStudents,
      teachers,
      lessons,
      image,
      languages,
      description,
      category,
      reviews: 0,
    };
    console.log(formData);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-tutorial`,
        formData
      );
      console.log(data);
      if (data.insertedId) {
        toast.success("Job added successfully");
        navigate("/my-tutorials");
        form.reset();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to add job");
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="card w-11/12 mx-auto text-[#1e1e1e] bg-white shadow-lg rounded-lg p-6 my-16">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#1e1e1e]">
          Add Tutor Details
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Badge */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Badge</span>
            </label>
            <select
              name="badge"
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>
                Select a badge
              </option>
              <option value="Top Rated">Top Rated</option>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Recommended">Recommended</option>
            </select>
          </div>

          {/* Rating */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              className="input input-bordered w-full"
              placeholder="Enter rating (e.g., 5)"
            />
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              className="input input-bordered w-full"
              placeholder="Enter price per lesson"
            />
          </div>

          {/* Lesson Time */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Lesson Time</span>
            </label>
            <input
              type="text"
              name="lessonTime"
              className="input input-bordered w-full"
              placeholder="Enter lesson duration (e.g., 1 hour)"
            />
          </div>

          {/* Active Students */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Active Students</span>
            </label>
            <input
              type="number"
              name="activeStudents"
              className="input input-bordered w-full"
              placeholder="Enter number of active students"
            />
          </div>

          {/* Logo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Logo</span>
            </label>
            <input
              type="url"
              name="logo"
              className="input input-bordered w-full"
              placeholder="Enter logo URL"
            />
          </div>

          {/* Teachers */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Teachers</span>
            </label>
            <input
              type="number"
              name="teachers"
              className="input input-bordered w-full"
              placeholder="Enter number of teachers"
            />
          </div>

          {/* Lessons */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Lessons</span>
            </label>
            <input
              type="number"
              name="lessons"
              className="input input-bordered w-full"
              placeholder="Enter total lessons"
            />
          </div>

          {/* Languages */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Languages</span>
            </label>
            <input
              type="text"
              name="languages"
              className="input input-bordered w-full"
              placeholder="Enter languages (comma-separated)"
            />
          </div>

          {/* Image */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="url"
              name="image"
              className="input input-bordered w-full"
              placeholder="Enter image URL"
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              className="input input-bordered w-full"
              placeholder="Enter category (e.g., English , Hindi, etc.)"
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              placeholder="Enter description"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-control col-span-full mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Add Tutorial
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AddTutorials;

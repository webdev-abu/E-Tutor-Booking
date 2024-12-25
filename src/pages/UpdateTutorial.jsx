import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const UpdateTutorial = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [tutorials, setTutorials] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchTutorialData();
  }, [id]);

  const fetchTutorialData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/tutor-detail/${id}`
      );
      setTutorials(data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(tutorials);

  // Handle form submission
  const handleUpdateTutorial = async (e) => {
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
    };
    console.log(formData);

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/update-tutorials/${id}`,
        formData
      );
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Tutorials Updated successfully");
        navigate("/my-tutorials");
        form.reset();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to add Tutorials");
    }
  };

  return (
    <>
      <Helmet>
        <title>Update Tutorials | Online Tutor Booking</title>
      </Helmet>
      <motion.div
        className="flex justify-center items-center min-h-screen bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="card w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 my-16">
          <h2 className="text-2xl font-bold text-center mb-6">
            Update Tutor Details
          </h2>
          <form
            onSubmit={handleUpdateTutorial}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={tutorials.name}
                className="input input-bordered w-full"
                placeholder="Enter lesson duration (e.g., 1 hour)"
                disabled
              />
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={tutorials.email}
                className="input input-bordered w-full"
                placeholder="Enter lesson duration (e.g., 1 hour)"
                disabled
              />
            </div>
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
                defaultValue={tutorials.rating}
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
                defaultValue={tutorials.price}
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
                defaultValue={tutorials.lessonTime}
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
                defaultValue={tutorials.activeStudents}
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
                defaultValue={tutorials.logo}
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
                defaultValue={tutorials.teachers}
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
                defaultValue={tutorials.lessons}
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
                defaultValue={tutorials.languages}
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
                defaultValue={tutorials.image}
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
                defaultValue={tutorials.category}
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
                defaultValue={tutorials.description}
                className="textarea textarea-bordered w-full"
                placeholder="Enter description"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-control col-span-full mt-4">
              <button type="submit" className="btn btn-primary w-full">
                Update
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default UpdateTutorial;

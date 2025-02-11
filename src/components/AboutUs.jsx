import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg"
          >
            Learn more about our mission, team, and vision for empowering
            students worldwide.
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://via.placeholder.com/600x400"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              We are a team of passionate educators and technologists dedicated
              to making quality education accessible to everyone. Our online
              tutor platform connects students with highly skilled tutors from
              around the world, ensuring personalized learning experiences.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: member.id * 0.2 }}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-gray-100 rounded-lg shadow"
            >
              <FaGraduationCap className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Quality Education</h3>
              <p className="text-gray-600">
                Our goal is to provide high-quality education through
                experienced tutors and innovative learning solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-gray-100 rounded-lg shadow"
            >
              <FaUsers className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Global Community</h3>
              <p className="text-gray-600">
                We aim to build a global learning community where students and
                tutors can connect and grow together.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-gray-100 rounded-lg shadow"
            >
              <FaLightbulb className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace technology and innovation to create a better learning
                experience for students.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample team member data
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Lead Tutor",
    image: "https://i.pravatar.cc/150?img=6",
  },
];

export default AboutUs;

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-5">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          We’d love to hear from you! Reach out to us for any inquiries or
          feedback.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Contact Details */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaPhoneAlt className="text-primary text-xl mr-4" />
              <p className="text-gray-700">+123 456 7890</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-primary text-xl mr-4" />
              <p className="text-gray-700">support@example.com</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-primary text-xl mr-4" />
              <p className="text-gray-700">123 Main Street, City, Country</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Send a Message
          </h2>
          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                placeholder="Type your message"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

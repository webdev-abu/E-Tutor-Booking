// import React, { useContext, useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import axios from "axios";
// import { AuthContext } from "../providers/AuthProvider";
// import { useParams } from "react-router-dom";

// const MyBookTutors = () => {
//   const { id } = useParams();
//   const { user } = useContext(AuthContext);
//   const [tutors, setTutors] = useState([]);

//   // Fetch booked tutors from the backend

//   useEffect(() => {
//     fetchEmailTutors();
//   }, []);

//   const fetchEmailTutors = async () => {
//     try {
//       const { data } = await axios.get(
//         `${import.meta.env.VITE_API_URL}/booked-tutorial/${user.email}`
//       );
//       setTutors(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Handle Review Increment
//   const handleReview = async (tutorId) => {
//     await axios
//       .put(`${import.meta.env.VITE_API_URL}/booked-tutors/${tutorId}`, tutors) // Replace with your API endpoint
//       .then((response) => {
//         // Update the state with the incremented review count
//         setTutors((prevTutors) =>
//           prevTutors.map((tutor) =>
//             tutor._id === tutorId
//               ? { ...tutor, reviews: tutor.reviews + 1 }
//               : tutor
//           )
//         );
//       })
//       .catch((error) => {
//         console.error("Error updating review count:", error);
//       });
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-primary mb-6">Booked Tutors</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {tutors.map((tutor) => (
//           <div
//             key={tutor._id}
//             className="p-4 bg-base-100 rounded-lg shadow-lg flex flex-col items-center"
//           >
//             <img
//               src={tutor.image}
//               alt={tutor.name}
//               className="w-32 h-32 rounded-full object-cover mb-4"
//             />
//             <h2 className="text-lg font-semibold">{tutor.name}</h2>
//             <h2 className="text-lg font-semibold">{tutor.tutor_id}</h2>
//             <p className="text-sm text-gray-600">{tutor.language}</p>
//             <p className="text-primary font-semibold mt-2">{tutor.price}</p>
//             <div className="flex items-center gap-2 mt-2">
//               <FaStar className="text-yellow-500" />
//               <span>{tutor.reviews} Reviews</span>
//             </div>
//             <button
//               className="btn btn-primary btn-sm mt-4"
//               onClick={() => handleReview(tutor.tutor_id)}
//             >
//               Review
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyBookTutors;

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const MyBookTutors = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [tutors, setTutors] = useState([]);
  const [tutorsReview, setTutorsReview] = useState([]);
  console.log(tutorsReview);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/booked-tutorial/${user.email}`)
      .then((res) => setTutors(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleReview = (tutorId) => {
    axios
      .patch(`${import.meta.env.VITE_API_URL}/update-review/${tutorId}`) // API call to update reviews
      .then(() => {
        setTutors(
          tutors.map((tutor) =>
            tutor._id === tutorId
              ? { ...tutor, reviews: tutor.reviews + 1 }
              : tutor
          )
        );
        if (tutors.length > 0) {
          toast.success("Review submitted successfully");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //   {tutors.map((tutor) => (
    //     <div key={tutor._id} className="card bg-white shadow-lg p-4">
    //       <img
    //         src={tutor.image}
    //         alt={tutor.name}
    //         className="w-full h-40 object-cover"
    //       />
    //       <h3 className="text-lg font-bold mt-2">{tutor.name}</h3>
    //       <p>Language: {tutor.language}</p>
    //       <p>Price: ${tutor.price}</p>
    //       <p>Reviews: {tutor.reviews}</p>
    //       <button
    //         className="btn btn-primary mt-2"
    //         onClick={() => handleReview(tutor.tutor_id)}
    //       >
    //         Review
    //       </button>
    //     </div>
    //   ))}
    // </div>
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="w-11/12 mx-auto py-8 ">
        <h1 className="text-3xl font-bold text-primary mb-6">Booked Tutors</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="p-4 bg-base-100 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h2 className="text-lg font-semibold">{tutor.name}</h2>
              <p className="text-sm text-gray-600">{tutor.language}</p>
              <p className="text-primary font-semibold mt-2">{tutor.price}</p>
              {/* <div className="flex items-center gap-2 mt-2">
              <FaStar className="text-yellow-500" />
              <span>{tutor.reviews} Reviews</span>
            </div> */}
              <button
                className="btn btn-primary btn-sm mt-4"
                onClick={() => handleReview(tutor.tutor_id)}
              >
                Review
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookTutors;

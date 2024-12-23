import Card from "../components/Card";
import { motion } from "framer-motion";
const TutorList = () => {
  const tutors = [
    {
      name: "Kacper M.",
      badge: "Super Tutor",
      rating: 5,
      reviews: 76,
      price: "BDT 5,489",
      lessonTime: "50-min lesson",
      activeStudents: 24,
      lessons: 2712,
      languages: "Speaks English (Proficient), Polish (Native)",
      title: "English",
      logo: "<FaLanguage />",
      teachers: 120,
      image: "/path/to/avatar1.jpg",
      animation: {
        hidden: { opacity: 0, x: 1000 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
      },
    },
    {
      name: "Sophia L.",
      badge: "Expert Tutor",
      rating: 4.9,
      reviews: 150,
      price: "BDT 4,999",
      lessonTime: "60-min lesson",
      activeStudents: 30,
      title: "Spanish",
      logo: "<FaGlobe />",
      teachers: 85,
      lessons: 3500,
      languages: "Speaks English (Native), Spanish (Intermediate)",
      image: "/path/to/avatar2.jpg",
      animation: {
        hidden: { opacity: 0, x: -1000 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
      },
    },
    {
      name: "Liam T.",
      badge: "Popular Tutor",
      rating: 4.8,
      reviews: 120,
      price: "BDT 4,799",
      lessonTime: "45-min lesson",
      activeStudents: 20,
      lessons: 2500,
      title: "French",
      logo: "<FaBook />",
      teachers: 60,
      languages: "Speaks French (Native), English (Proficient)",
      image: "/path/to/avatar3.jpg",
      animation: {
        hidden: { opacity: 0, y: -1000 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
      },
    },
    {
      name: "Emma R.",
      badge: "Super Tutor",
      rating: 5,
      reviews: 200,
      price: "BDT 6,000",
      lessonTime: "50-min lesson",
      activeStudents: 35,
      title: "German",
      logo: "<MdTranslate />",
      teachers: 45,
      lessons: 4000,
      languages: "Speaks English (Native), German (Advanced)",
      image: "/path/to/avatar4.jpg",
      animation: {
        hidden: { opacity: 0, y: 1000 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
      },
    },
    {
      name: "Noah B.",
      badge: "Experienced Tutor",
      rating: 4.7,
      reviews: 90,
      price: "BDT 5,200",
      lessonTime: "60-min lesson",
      activeStudents: 25,
      lessons: 3100,
      title: "Japanese",
      logo: "<LuJapaneseYen />",
      teachers: 30,
      languages: "Speaks Italian (Native), English (Proficient)",
      image: "/path/to/avatar5.jpg",
      animation: {
        hidden: { opacity: 0, x: 1000 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.9 },
        },
      },
    },
    {
      name: "Olivia C.",
      badge: "Super Tutor",
      rating: 4.8,
      reviews: 85,
      price: "BDT 5,300",
      lessonTime: "45-min lesson",
      activeStudents: 28,
      title: "Chinese",
      logo: "<SiGeocaching />",
      teachers: 50,
      lessons: 2900,
      languages: "Speaks English (Proficient), French (Intermediate)",
      image: "/path/to/avatar6.jpg",
      animation: {
        hidden: { opacity: 0, x: -1000 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
      },
    },
    {
      name: "James D.",
      badge: "Highly Rated",
      rating: 4.9,
      reviews: 170,
      price: "BDT 5,750",
      lessonTime: "50-min lesson",
      activeStudents: 40,
      title: "Arabic",
      logo: "<SiGoogletranslate />",
      teachers: 40,
      lessons: 3600,
      languages: "Speaks Spanish (Native), English (Advanced)",
      image: "/path/to/avatar7.jpg",
      animation: {
        hidden: { opacity: 0, y: -1000 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
      },
    },
    {
      name: "Ava K.",
      badge: "Expert Tutor",
      rating: 5,
      reviews: 100,
      price: "BDT 5,800",
      lessonTime: "60-min lesson",
      activeStudents: 22,
      title: "Korean",
      logo: "<GiEarthAmerica />",
      teachers: 25,
      lessons: 3000,
      languages: "Speaks English (Proficient), Russian (Advanced)",
      image: "/path/to/avatar8.jpg",
      animation: {
        hidden: { opacity: 0, x: -1000 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
      },
    },
    {
      name: "Ethan F.",
      badge: "Super Tutor",
      rating: 5,
      reviews: 140,
      price: "BDT 5,999",
      lessonTime: "50-min lesson",
      activeStudents: 38,
      title: "Italian",
      logo: "<FaLanguage />",
      teachers: 35,
      lessons: 4100,
      languages: "Speaks English (Native), Chinese (Intermediate)",
      image: "/path/to/avatar9.jpg",
      animation: {
        hidden: { opacity: 0, x: 1000 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
      },
    },
  ];

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Our Popular Tutors
      </motion.h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
        {tutors.map((tutor) => (
          <Card key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </>
  );
};

export default TutorList;

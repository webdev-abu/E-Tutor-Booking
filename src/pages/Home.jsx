import React from "react";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
import PopularTutors from "../components/PopularTutors";
import ContactUs from "../components/ContactUs";
import TutorList from "../components/TutorList";
import { Helmet } from "react-helmet";
import Newsletter from "../components/Newsletter";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Online Tutor Booking</title>
      </Helmet>
      <div className=" bg-white dark:bg-gray-900 text-black dark:text-white">
        <Banner />
        <section className="my-0">
          <Stats />
        </section>

        <section className="my-0">
          <Categories />
        </section>

        <section className="my-0">
          <TutorList />
        </section>

        <section className="my-0">
          <PopularTutors />
        </section>
        <section className="my-0">
          {/* <ContactUs /> */}
          <Reviews />
        </section>
        <section className="my-0">
          <Newsletter />
        </section>
      </div>
    </>
  );
};

export default Home;

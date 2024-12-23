import React from "react";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import Categories from "../components/Categories";
import PopularTutors from "../components/PopularTutors";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <section className="my-10">
        <Stats />
      </section>

      <section className="my-10">
        <Categories />
      </section>

      <section className="my-10">
        <PopularTutors />
      </section>
      <section className="my-10">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;

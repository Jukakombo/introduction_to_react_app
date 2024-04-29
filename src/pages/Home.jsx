import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import HomePage from "../components/HomePage";

const Home = () => {
  return (
    <div className="home_page_section">
      <Header />
      <div className="">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

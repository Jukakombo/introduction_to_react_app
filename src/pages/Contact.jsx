import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import FormData from "../components/FormData";

const Contact = () => {
  return (
    <div
      className="home_page_section {
      "
    >
      <Header />
      <div className="">
        <FormData />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

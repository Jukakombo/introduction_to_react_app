import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
const About = () => {
  return (
    <div>
      <Header />
      <div className="about">
        <div className="about_image">
          <img className="about_image_source" src="/about.svg" alt="img" />
        </div>
        <div className="about_text">
          <h1>About Us</h1>
          <p style={{ fontStyle: "italic", fontSize: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            doloremque officiis nam sit quisquam delectus beatae. Explicabo
            ullam dolores esse neque, dolorem, tenetur nihil recusandae nemo
            itaque beatae, maiores ducimus?
          </p>
          <p style={{ fontSize: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            doloremque officiis nam sit quisquam delectus beatae. Explicabo
            ullam dolores esse neque, dolorem, tenetur nihil recusandae nemo
            itaque beatae, maiores ducimus?
          </p>
          <p className="" style={{ fontSize: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            doloremque officiis nam sit quisquam delectus beatae. Explicabo
            ullam dolores esse neque, dolorem, tenetur nihil recusandae nemo
            itaque beatae, maiores ducimus?
          </p>
          <p className="" style={{ fontSize: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            doloremque officiis nam sit quisquam delectus beatae. Explicabo
            ullam dolores esse neque, dolorem, tenetur nihil recusandae nemo
            itaque beatae, maiores ducimus?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;

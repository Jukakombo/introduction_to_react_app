import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home_page">
      {/* text_on the screen */}
      <div className="home_text">
        <h1 style={{ color: "blue" }}>Hello I'am A software Engineer</h1>
        <p>
          I am passionate about building a real world web application programm
          and designing web app.
        </p>
        <p>
          I am passionate about building a real world web application programm
          and designing web app.
        </p>
        <p>
          I am passionate about building a real world web application programm
          and designing web app.
        </p>
        <div className="home_button">
          <Link to="/contact">
            <button style={{ marginRight: "10px" }}>Contact Me</button>
          </Link>
          <a href="mailto:alisonmagid2016@gmail.com">
            <button>Email me</button>
          </a>
        </div>
      </div>

      {/* profile picture */}
      <div className="home_image">
        <img
          className="photo"
          src="/profilepicture.jpg"
          alt="profile_picture"
        />
      </div>
    </div>
  );
};

export default HomePage;

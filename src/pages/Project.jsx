import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ProjectCard from "../components/ProjectCard";
import { data_base } from "../utils/localDatabase";

const Project = () => {
  return (
    <div>
      <Header />
      <div className="">
        <ProjectCard donnée={data_base} />
      </div>
      <Footer />
    </div>
  );
};

export default Project;

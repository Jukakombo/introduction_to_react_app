import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { data_base } from "../utils/localDatabase";
import { Link, useParams } from "react-router-dom";
const ProjectDetail = () => {
  const param = useParams();
  const { id } = param;
  const projectdetail = data_base.find((x) => x._id === id);

  return (
    <div>
      <Header />
      <div
        className=""
        style={{
          alignItems: "center",
          width: "80%",
          margin: "auto",
        }}
      >
        <div className="project_detail">
          <img
            className="project_image"
            src={projectdetail.img}
            alt={projectdetail.titre}
          />
          <h1>{projectdetail.titre}</h1>
          <p>{projectdetail.desc}</p>
          <p>{projectdetail.paragraph}</p>
          <Link style={{ textDecoration: "none" }} to="/project">
            <div className="project_detail_link">Back</div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;

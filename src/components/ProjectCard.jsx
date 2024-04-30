import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ donnée }) => {
  const [search, setSearch] = useState("");

  const filtre_image = donnée.filter((x) =>
    x.titre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="">
        <h1
          style={{
            textAlign: "center",
            fontSize: "40px",
            color: "blue",
            fontWeight: "bold",
          }}
        >
          My projects
        </h1>
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Feel free to checkout my new projects and some recomendation from the
          people
        </p>
        <div className="card_search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search L'image par Titre..."
          />
        </div>
        <div className="cards">
          {filtre_image.length > 0 ? (
            filtre_image.map((x) => (
              <div className="card_div" key={x._id}>
                <div className="card">
                  <div className="card_image_container">
                    <img className="card_image" src={x.img} alt={x.titre} />
                  </div>
                  <div className="card_detail">
                    <h2 className="card_titre">{x.titre}</h2>
                    <p className="card_description">
                      {x.desc.slice(0, 40)}...
                      <Link
                        to={`/project-detail/${x._id}`}
                        style={{ color: "blue", textDecoration: "none" }}
                      >
                        Read More
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="">
              <h3
                style={{
                  color: "red",
                  backgroundColor: "lightgray",
                  padding: "12px",
                  borderRadius: "10px",
                  marginTop: "20px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Sorry the title you have entered doen't exist!
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

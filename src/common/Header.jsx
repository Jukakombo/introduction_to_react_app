import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const links = [
  {
    _id: "4CRRRE344",
    titre: "Home",
    path: "/",
  },
  {
    _id: "4CRRRddE344",
    titre: "About",
    path: "/about",
  },
  {
    _id: "4CRRRqxsE344",
    titre: "Project",
    path: "/project",
  },
  {
    _id: "4CRRddsdRE344",
    titre: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <div>
      <div className="header">
        <Link style={{ listStyle: "none", textDecoration: "none" }} to="/">
          <div className="logo">
            <img src="/logo.png" alt="logo" className="logo_" />
          </div>
        </Link>
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          {links.map((item, index) => (
            <ul key={index}>
              <Link
                style={{ listStyle: "none", textDecoration: "none" }}
                to={`${item.path}`}
              >
                <li>{item.titre}</li>
              </Link>
            </ul>
          ))}
          <div className="" style={{ marginLeft: "15px" }}>
            |
          </div>
          <div className="incons">
            <a href="https://twitter.com/AlisonJuma7" target="blank">
              <FaTwitter size={20} />
            </a>
            <a href="https://twitter.com/AlisonJuma7" target="blank">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

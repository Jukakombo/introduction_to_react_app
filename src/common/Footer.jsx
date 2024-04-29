import React from "react";

const Footer = () => {
  const jours = new Date();
  const année = jours.getFullYear();
  return (
    <div className="footer">
      <p>All rights reserved {année}</p>
      <span>Developed by : Alison De Best</span>
    </div>
  );
};

export default Footer;

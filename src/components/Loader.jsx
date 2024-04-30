import React from "react";

const Loader = () => {
  return (
    <div
      className="loader"
      style={{  width: "100vh", height: "100vh" }}
    >
      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img className="loader_image" src="/loading.gif" alt="loading" />
        <h2 style={{ color: "#ffc0cb" }}>Loading...</h2>
      </div>
    </div>
  );
};

export default Loader;

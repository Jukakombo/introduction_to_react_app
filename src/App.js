import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import ProjectDetail from "./components/ProjectDetail";
import Loader from "./components/Loader";
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loading && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-detail/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

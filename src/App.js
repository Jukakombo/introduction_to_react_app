import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import ProjectDetail from "./components/ProjectDetail";
const App = () => {
  return (
    <div>
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

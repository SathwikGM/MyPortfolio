import { Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Skills from "../pages/skills/skills";
import Projects from "../pages/projects/projects";
import Contact from "../pages/contact/contact";
import Notfound from "../pages/notfound/notfound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default Router;

import React, { useState } from "react";
import { FaBlog, FaEnvelope, FaHome, FaProjectDiagram, FaUserAlt, FaBars } from "react-icons/fa";
import "../styles/sidebar.css";

const Sidebar = ({ setActiveSection, activeSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className="burger-menu" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="profile-image">
          <img src="Ermibk.jpg" alt="Ermi's profile picture" />
        </div>
        <nav>
          <ul>
            <li
              className={activeSection === "Home" ? "active" : ""}
              onClick={() => setActiveSection("Home")}
            >
              <FaHome /> Home
            </li>
            <li
              className={activeSection === "About" ? "active" : ""}
              onClick={() => setActiveSection("About")}
            >
              <FaUserAlt /> About Me
            </li>
            <li
              className={activeSection === "Projects" ? "active" : ""}
              onClick={() => setActiveSection("Projects")}
            >
              <FaProjectDiagram /> Projects
            </li>
            <li
              className={activeSection === "Blog" ? "active" : ""}
              onClick={() => setActiveSection("Blog")}
            >
              <FaBlog /> Blog
            </li>
            <li
              className={activeSection === "Contact" ? "active" : ""}
              onClick={() => setActiveSection("Contact")}
            >
              <FaEnvelope /> Contact
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

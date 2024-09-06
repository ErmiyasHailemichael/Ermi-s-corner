import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBlog, FaEnvelope, FaHome, FaProjectDiagram, FaUserAlt, FaBars } from "react-icons/fa";
import "../styles/sidebar.css";

const Sidebar = ({ setActiveSection, activeSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsSidebarOpen(false); // Close sidebar after clicking a link
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
            <li className={activeSection === "Home" ? "active" : ""}>
              <Link to="/" onClick={() => handleLinkClick("Home")}>
                <FaHome /> Home
              </Link>
            </li>
            <li className={activeSection === "About" ? "active" : ""}>
              <Link to="/about" onClick={() => handleLinkClick("About")}>
                <FaUserAlt /> About Me
              </Link>
            </li>
            <li className={activeSection === "Projects" ? "active" : ""}>
              <Link to="/projects" onClick={() => handleLinkClick("Projects")}>
                <FaProjectDiagram /> Projects
              </Link>
            </li>
            <li className={activeSection === "Blog" ? "active" : ""}>
              <Link to="/blog" onClick={() => handleLinkClick("Blog")}>
                <FaBlog /> Blog
              </Link>
            </li>
            <li className={activeSection === "Contact" ? "active" : ""}>
              <Link to="/contact" onClick={() => handleLinkClick("Contact")}>
                <FaEnvelope /> Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

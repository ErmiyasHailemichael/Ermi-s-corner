import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBlog, FaEnvelope, FaHome, FaProjectDiagram, FaUserAlt, FaBars } from "react-icons/fa";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const activeSection = (() => {
    if (location.pathname.startsWith("/projects")) return "Projects";
    if (location.pathname.startsWith("/about")) return "About";
    if (location.pathname.startsWith("/blog")) return "Blog";
    if (location.pathname.startsWith("/contact")) return "Contact";
    return "Home";
  })();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (section) => {
    setIsSidebarOpen(false); // Close sidebar after clicking a link
  };

  return (
    <>
      <button className="burger-menu" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="profile-image">
          <img src="Ermibk.jpg" alt="Ermi's profile" />
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

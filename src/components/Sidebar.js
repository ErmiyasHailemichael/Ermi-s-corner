import React from "react";
import {FaHome} from 'react-icons/fa';
const Sidebar = ({setActiveSection, activeSection}) =>{
    return (
        <div className="sidebar">
            <div className="profile-image">
                <img src="../Files/Logo/Ermibk.jpg" alt="Ermi's profile picture"/>
            </div>
            <nav>
                <ul>
                    <li 
                    className={activeSection === 'Home' ? 'active' :''} 
                    onClick={() => setActiveSection('Home')}>
                        <FaHome /> Home
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}

export default Sidebar;
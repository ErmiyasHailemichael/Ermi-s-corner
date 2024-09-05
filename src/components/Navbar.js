import React, {useState} from "react";


function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <img src="../Files/Logo/1.png" alt="brand"/>
            </div>
            <button className="menu-burger" onClick={toggleMenu}>
                
            </button>
            <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
                <a href=""></a>
            </div>
        </div>
    );
} 


export default Navbar;
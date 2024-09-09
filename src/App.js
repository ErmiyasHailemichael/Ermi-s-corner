import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';


function App() {
  const [activeSection, setActiveSection] = useState('Home');

  return (
    <Router>
      <div className="App">
        <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
        {/* Ensure Routes are set up correctly */}
        <div className="content"> {/* Wrap your routes in a div to avoid overlap */}
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />  */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

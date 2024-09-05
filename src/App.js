import React, {useState} from 'react';
import Home from './components/Home'
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('Home');
  return (
    <div className="App">
    <Sidebar activeSection = {activeSection} setActiveSection={setActiveSection} />
    <div className='content'>
      {activeSection == '' && < Home/>}

    </div>
    </div>
  );
}

export default App;

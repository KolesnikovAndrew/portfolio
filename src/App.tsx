import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Contacts from './components/Pages/Contacts/Contacts';

function App() {
  return (
    
      <div className="App">
        <header className="AppHeader">
            <div>
             <Header/>
            </div>
           
            <Navbar/>
            <div className='content'>
              <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="projects" element={<Projects/>}/>
                <Route path="contacts" element={<Contacts/>}/>
              </Routes>
            </div>
        </header>
      </div>
    
    
  );
}

export default App;

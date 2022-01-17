import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/Pages/About/About';
import Projects from './components/Pages/Projects/Projects';
import Contacts from './components/Pages/Contacts/Contacts';
import Footer from './components/Footer/Footer'

function App() {
  return (
      <div className="App">
        <header className="AppHeader">
            <div className={styles.headerContainer}>
             <Header/>
            </div> 
            <Navbar/>
            <div className='content'>
              <Routes>
                <Route path="/portfolio" element={<About/>}/>
                <Route path="/portfolio/about" element={<About/>}/>
                <Route path="/portfolio/projects" element={<Projects/>}/>
                <Route path="/portfolio/contacts" element={<Contacts/>}/>
              </Routes>
            </div>
        </header>
        <div className={styles.footer}>
          <Footer/>
        </div>
        
      </div>
    
    
    
  );
}

export default App;

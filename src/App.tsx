import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contacts from './Pages/Contacts/Contacts';
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
                <Route path="/" element={<About/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
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

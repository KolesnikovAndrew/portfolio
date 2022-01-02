import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Link} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
          <Header/>
          <Navbar/>
        <div>
          Content
        </div>
      </header>
    </div>
    
  );
}

export default App;

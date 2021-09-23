import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navigation/Navbar";

function App() {

  return (
            <div className="App">
              <Navbar/>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <h3>Hello react from django</h3>
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
    </div>
  );
}

export default App;

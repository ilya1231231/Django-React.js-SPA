import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

    const [people, setPeople ] = useState([])

    useEffect(() =>{
        axios({
             method: "GET",
             url: "http://127.0.0.1:8000/api/testapi/"
        }).then(response => {
            setPeople(response.data)
        })
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <h3>Hello react from django</h3>
                <ui>
                    {people.map(p =>(
                            <li key={p.id}>{p.name}</li>
                    ))}
                </ui>
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

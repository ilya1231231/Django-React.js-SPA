import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const[instrument, setInstrument] = useState([])

    useEffect( () => {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api/instrument/'

        }).then(response => {
             setInstrument(response.data)
        })
   }, [])
  return (
            <div className="App">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                    {instrument.map(s=>(
                        <Link className="nav_link" to={{ pathname: `/instrument/${s.id}/`, fromDashboard: false }}>{s.name}</Link>
                    ))}
              </div>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;
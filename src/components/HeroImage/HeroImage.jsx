import React from 'react';

// Bootstrap
import { Button } from 'react-bootstrap';

// Custom Styles
import './HeroImage.css';
  
function HeroImage() {

    
  return (
            <div className="fluid hero-image px-4 py-5  text-center align-items-center">
                <h1 className="display-5 fw-bold title">Sport Support</h1>
                <p class="lead fw-bold title">Achieve your team's dream</p>
                <a href="/create-project" class="btn btn-secondary text-light fw-bold" role="button">
                Create A Project
                </a>
            </div>
  );
}

export default HeroImage;
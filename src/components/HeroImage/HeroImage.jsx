import React from 'react';

// Bootstrap
import { Button, Container } from 'react-bootstrap';

// Components
import LoginForm from '../LoginForm/LoginForm';

// Custom Styles
import './HeroImage.css';
  
function HeroImage() {

    
  return (
    <>
        <div className="fluid hero-image p-5 mb-4" >

            <Container className="row align-items-center g-lg-5 py-5">
                <Container className="col-lg-7 text-center text-lg-start">
                    <h1 className="display-5 fw-bold title">Sport Support</h1>
                    <p class="lead fw-bold title">Achieve your team's dream</p>
                    <Button variant="primary">
                    Post a Project
                    </Button>
                </Container>

            <Container className="col-md-10 mx-auto col-lg-5">
                <LoginForm />
            </Container>
                
            </Container>
        </div>
    </>
  );
}

export default HeroImage;
import React from "react";
import { Link } from "react-router-dom";

// Bootstrap
import { Container, Nav, NavItem, NavLink } from 'react-bootstrap';

// Images
import logo from "../../images/SportSupport.png"

function Footer() {
    return (
        <Container>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">© 2022 Suelee Christie</p> 
                
                <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img src={logo} height="50"/>
                </a>

                <Nav className="col-md-4 justify-content-end">
                        <NavItem>
                            <NavLink className="nav-link px-2 text-muted" as={Link} to="/">Home</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink className="nav-link px-2 text-muted" as={Link} to="/login">Login</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink className="nav-link px-2 text-muted" as={Link} to="/create-project">Create Project</NavLink>
                        </NavItem>
                </Nav>
                
            </footer>
        </Container>
    )
};

export default Footer;
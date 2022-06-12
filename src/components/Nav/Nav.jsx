import React from "react";
import { Link } from "react-router-dom";

// Bootstrap
import { Navbar, Nav, NavLink, NavItem } from 'react-bootstrap';

// Custom Styles
import './Nav.css';

// Images
import logo from "../../images/SportSupport.png"

function NavBar() {
   
    let id = window.localStorage.getItem("id")
    let profileUrl =(`users/${id}`)
    let username = window.localStorage.getItem("username")
    let isUserLoggedIn = window.localStorage.getItem("token");
    
    return(
        <>
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" className="sticky-top ps-5 pe-5">
                <Navbar.Brand href="/"><img src={logo} alt="Sport Support Logo" height="100"/></Navbar.Brand> 
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav>
                       
                        <NavItem>
                            <NavLink className="mx-auto fs-3" as={Link} to="/">Home</NavLink>
                        </NavItem>

                        {isUserLoggedIn ? (
                            <NavItem>
                                <NavLink className="mx-auto fs-3" as={Link} to={profileUrl}>{username}</NavLink>
                            </NavItem>
                        ) : (
                            ""
                        )}
                        
                        {isUserLoggedIn ? (
                            <NavItem>
                                <NavLink className="mx-auto fs-3" as={Link} to="/logout">Logout</NavLink>
                            </NavItem>
                        ) : (
                            <NavItem>
                                <NavLink className="mx-auto fs-3" as={Link} to="/login">Login</NavLink>
                            </NavItem>
                        )}
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default NavBar;
import React, { useState } from "react";
import { Link, useNavigate, Router, useParams } from "react-router-dom";

// Styles
import "./Nav.css"

// Images
import logo from "../../images/SportSupport.png"

function Nav() {

    //State
    const [usersData, setUsersData] = useState();

    //Hooks
    const navigate = useNavigate();
    const { id } = useParams();

    const username = window.localStorage.getItem("id")


    const reloadPage = () => {
        navigate("/login")
    }

    const handleSignOut = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("id")
        reloadPage()
    }

    const checkUser = () => {
        const isUserLoggedIn = !!window.localStorage.getItem("token");
        return isUserLoggedIn ? <button className="nav-button" onClick={handleSignOut}>Sign out</button> : <button className="nav-button" onClick={reloadPage}>Login</button>
    }

    const checkProfile = () => {
        const isUserLoggedIn = !!window.localStorage.getItem("token");
        return !isUserLoggedIn ? <div className="nav-button"><Link to="/users/register">Create account</Link></div> : <div className="nav-button"><Link to={`users/${id}`}>My Profile</Link></div>
    }

    const createProject = () => {
        const isUserLoggedIn = !!window.localStorage.getItem("token");
        return !isUserLoggedIn ? <div className="nav-button"><Link to="/create-project">Create Project</Link></div> : ""
    }
    
    return(
        <nav className="nav">
            <div className="logoDiv">
                <Link to="/"><img className="logo" src={logo}/></Link>
            </div>
            <div className="profileBut">{checkProfile()}</div>
            <div className="homeBut"><Link to="/">Home</Link></div>
            <div className="log">{checkUser()}</div>
        </nav>
    )
}


export default Nav;
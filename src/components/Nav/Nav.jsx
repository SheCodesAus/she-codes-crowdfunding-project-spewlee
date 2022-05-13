import React, { useState } from "react";
import { Link, useNavigate, Router, useParams } from "react-router-dom";

function Nav() {

    //State
    const [usersData, setUsersData] = useState();

        //Hooks
    
    const navigate = useNavigate();
    const { id } = useParams();

    const username = window.localStorage.getItem("username")


    const reloadPage = () => {
        navigate("/login")
    }

    const handleSignOut = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("username")
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
        <nav className="navHeader">
            <div>{checkProfile()}</div>
            <div><Link to="/">Home</Link></div>
            <div>{checkUser()}</div>
        </nav>
    )
}


export default Nav;
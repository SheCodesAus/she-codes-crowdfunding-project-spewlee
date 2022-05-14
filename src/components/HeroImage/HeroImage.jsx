import React from "react";
import { useNavigate } from "react-router-dom";

//CSS
import "./HeroImage.css";



function HeroImage() {

    // Hooks
    const navigate = useNavigate("/create-project");

    // Actions
    const handleClick = () => {
        return navigate;
    }

    return(
        <div className="heroImage">
          <button onclick={ handleClick }>Post a Project</button>
          <h1>Achieve your team's dream</h1>
        </div>
    )
};

export default HeroImage;

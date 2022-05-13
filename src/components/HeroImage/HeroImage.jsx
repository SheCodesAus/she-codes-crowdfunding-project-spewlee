import React from "react";
import { useNavigate } from "react-router-dom";

//CSS
import "./HeroImage.css";

// Hooks
const navigate = useNavigate();
const handleClick = navigate("/create-project")

function HeroImage() {
    return(
        <div className="heroImage">
          <button onclick={ handleClick }>Post a Project</button>
          <h1>Achieve your team's dream</h1>
        </div>
    )
};

export default HeroImage;

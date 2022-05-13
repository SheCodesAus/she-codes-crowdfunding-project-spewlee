import React from "react";

//CSS
import "./HeroImage.css";

function HeroImage() {
    return(
        <div className="heroImage">
          <button onclick={useNavigate("/create-project")}>Post a Project</button>
          <h1>Achieve your team's dream</h1>
        </div>
    )
};

export default HeroImage;

import React from "react";
import { Link } from "react-router-dom";

// Bootstrap
import {} from "react-bootstrap";

// // Styles
// import "./ProjectCard.css"

function ProjectCard({ projectData }) {
    return (
        <div class="card" style="width: 18rem;">
            <Link to={`/project/${projectData?.id}`}>
                <img src={projectData?.img} class="card-img-top" alt="alt={`${projectData?.title}`}"/>
                <div class="card-body">
                    <h3 class="card-title">{projectData?.title}</h3>
                    
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow={projectData?.amount_raised} aria-valuemin="0" aria-valuemax={projectData?.goal_amount}></div>
                    </div>

                    <a href={`/project/${projectData?.id}`} class="btn btn-primary text-light fw-bold" role="button">
                        Pledge
                    </a>
                </div>
            </Link>
        </div>
        
        // {/* <div className="project-card">
        //     <Link to={`/project/${projectData.id}`}>
        //         <img src={projectData.image} alt="the project" />
        //         <h3>{projectData.title}</h3>
        //     </Link>
        // </div> */}
    );
}

export default ProjectCard;
import React from "react";
import { Link } from "react-router-dom";

// Bootstrap
import { Card } from "react-bootstrap";

function ProjectCard({ projectData }) {

    const maths = projectData.amount_raised/projectData.goal_amount;
    const scale = `width: '${maths}%'`;

    return (
        <div className="col p-5">
            <Card className="card shadow-sm" style={{ width: '18rem' }}>
                <Link to={`/project/${projectData?.id}`}>
                    <Card.Img variant="top" src={projectData?.image} />
                    <Card.Body>
                        <Card.Title>{projectData?.title}</Card.Title>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ scale }} aria-valuenow={projectData?.amount_raised} aria-valuemin="0" aria-valuemax={projectData?.goal_amount}></div>
                        </div>
                    </Card.Body>
                </Link>
                <Card.Body>
                    <a href={`/pledges/${projectData?.id}`} class="btn btn-primary text-light fw-bold" role="button">
                        Pledge
                    </a>
                </Card.Body>
            
            </Card>

        </div>
        
    );
}

export default ProjectCard;
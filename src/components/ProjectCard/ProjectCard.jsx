import React, { useState } from "react";
import { Link } from "react-router-dom";

// Bootstrap
import { Card, Button } from "react-bootstrap";

//Components
import PledgeModal from "../PledgeModal/PledgeModal";

function ProjectCard({ projectData }) {
    // States
    const [show, setShow] = useState(false);

    // Actions
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="col">
            <Card className="card shadow-sm" style={{ width: '18rem' }}>
                <Link to={`/project/${projectData?.id}`}>
                    <Card.Img variant="top" src={projectData?.img} />
                    <Card.Body>
                        <Card.Title>{projectData?.title}</Card.Title>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow={projectData?.amount_raised} aria-valuemin="0" aria-valuemax={projectData?.goal_amount}></div>
                        </div>
                    </Card.Body>
                </Link>
                <Card.Body>
                    <Button variant="primary" onClick={handleShow}>
                        Pledge
                    </Button>
                    <PledgeModal projectData={projectData} />
                </Card.Body>
            
            </Card>

        </div>
        
    );
}

export default ProjectCard;
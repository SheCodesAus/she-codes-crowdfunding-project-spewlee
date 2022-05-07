import React, { useState, UseEffect, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import PledgeForm from "../components/PledgeForm/PledgeForm";

// Data
import { oneProject } from "../data";

function ProjectPage() {

    // State
    const [projectData, setProjectData] = useState();
    
    // Hooks
    const { id } = useParams();

    // Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectData(data);
            });
    }, [id]);

// Loading State
if (!projectData) {
    return <h3>Loading Project...</h3>
};

// Normal State
    return (
        <div>
            <h2>{projectData.title}</h2>
            <h3>Created at {projectData.date_created}</h3>
            <h3>{`Status: ${projectData.active}`}</h3>
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
            <PledgeForm projectId={id} />
        </div>
    );
}

export default ProjectPage;
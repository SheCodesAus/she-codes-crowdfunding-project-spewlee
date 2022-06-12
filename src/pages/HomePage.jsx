import React, { useState, useEffect } from "react";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

// Bootstrap
import { Container } from "react-bootstrap"


function HomePage() {
    // States
    const [projectList, setProjectList] = useState([]);

    // Action & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProjectList(data);
            });
        }, []);

    return (
        <Container>

            <Container className="px-4 py-5">
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 text-center">
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <i class="bi bi-cash-coin text-primary fs-1"></i>
                        </div>
                        <h2>Raise Funds</h2>
                        <p>Use Sport Support to achieve your fundraising goals! Sport Support has been helping sporting clubs achieve their dreams since 2022.</p>
                    </div>

                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <i class="bi bi-people-fill text-primary fs-1"></i>
                        </div>
                        <h2>Help The Community</h2>
                        <p>Use Sport Support to help your community! Sport Support has allowed people to contribute and make a difference to the community.</p>
                    </div>

                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                            <i class="bi bi-emoji-smile text-primary fs-1"></i>
                        </div>
                        <h2>Easy To Use</h2>
                        <p>Sport Support is simple and easy to use! Spend less time learning how to use a platform and more time achieving your team's dream.</p>
                    </div>
                </div>


            </Container>

            <div id="project-list">
                {projectList.map((projectData) => {
                    return (
                        <ProjectCard
                            key={`project-${projectData.id}`}
                            projectData={projectData} 
                        />
                    );
                })}
            </div>

        </Container>
    );
}

export default HomePage;
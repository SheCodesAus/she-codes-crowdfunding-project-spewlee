import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

// Bootstrap
import { Form, Button, Container, Alert } from "react-bootstrap";

function ProjectForm() {
    // States
    const token =  window.localStorage.getItem("token")
    const userId = window.localStorage.getItem("id")
    const [project, setProjects] = useState({
        title: "",
        description: "",
        image: "",
        goal_amount: 0,
        due_date: "",
    });

    // Hooks
    const navigate = useNavigate();

// Actions and Helpers
    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjects((prevProject) => ({
            ...prevProject,
            [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
          try {
            const res = await fetch(
              `${process.env.REACT_APP_API_URL}projects/`,
              {
                method: "post",
                headers: ({
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                }),
                body: JSON.stringify({
                    title: project.title,
                    description: project.description,
                    amount_raised: 0,
                    goal_amount: project.goal_amount,
                    image: project.image,
                    date_created: Date.now(),
                    due_date: project.due_date,
                    owner_id: userId,

                }),
              }
            );
            const data = await res.json();
            <Alert variant="success">
                <Alert.Heading>Project Created!</Alert.Heading>
            </Alert>
            navigate("/");
          } catch (err) {
            console.log(err);
          }
        };


    if (!token) {
        return (
            <Container className="mx-auto fluid text-center align-items-center pt-5 ">
                <h3 class="lead fw-bold title text-secondary">Please Login To Create A Project</h3>
                <a href="/login" class="btn btn-primary text-light fw-bold" role="button">
                Login
                </a>
            </Container>
        )
    }

    return (
        <Form className="p-4 m-5 rounded-3 login">
            <h1 className="h3 mb-3 fw-normal text-center">
            Create A Project
            </h1>

            <Form.Group className="mb-3">
                <Form.Label for="title">Title:</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="Enter Title" id="title" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label for="description">Description:</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="Enter Description" id="description" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="image">Image:</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="Enter Image URL" id="image" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="goal_amount">Goat Amount:</Form.Label>
                <Form.Control type="number" className="form-control" placeholder="Enter Goal Amount.." id="goal_amount" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="due_date">Due Date:</Form.Label>
                <Form.Control type="date" className="form-control" placeholder="Enter Due Date.." id="due_date" onChange={handleChange}/>
            </Form.Group>
                
            <Button className="w-100 btn btn-lg fw-bold" variant="primary" type="submit" onClick={handleSubmit}>
            Submit Project
            </Button>
        </Form>
    );
}

export default ProjectForm;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Bootstrap
import { Form, Button, Card } from "react-bootstrap";

// Custom Styles
import './LoginForm.css';

function LoginForm() {
// States
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

// Hooks
    const navigate = useNavigate();

// Actions and Helpers
    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
          try {
            const response = await fetch(
              `${process.env.REACT_APP_API_URL}authenticate/`,
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
              }
            );
            const data = await response.json();
            window.localStorage.setItem("username", credentials.username);
            window.localStorage.setItem("token", data.token);
            window.localStorage.setItem("id", data.id);
            if (data.token === undefined) {
                return (
                    <div>
                        <h1>Unable to create account!</h1>
                    </div>
                );
            }
            else {
                navigate("/");
            };
            } catch (err) {
                console.log(err);
            }
        }
      };

    return (
        <Form className="p-4 m-5 rounded-3 login">
            <h1 className="h3 mb-3 fw-normal text-center">
            Login
            </h1>

            <Form.Group className="mb-3">
                <Form.Label for="username">Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" id="username" onChange={handleChange} />
                </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label for="password">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" id="password" onChange={handleChange} />
            </Form.Group>
                
            <Button className="w-100 btn btn-lg fw-bold" variant="primary" type="submit" onClick={handleSubmit}>
            Login
            </Button>
        </Form>
        
    );
}

export default LoginForm;
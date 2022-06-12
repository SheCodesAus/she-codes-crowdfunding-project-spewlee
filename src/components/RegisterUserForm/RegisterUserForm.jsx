import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Bootstrap
import { Form, Button } from "react-bootstrap";

function RegisterUserForm() {
// States
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email: "",
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
              `${process.env.REACT_APP_API_URL}register/`,
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: credentials.username,
                    email: credentials.email,
                    password: credentials.password,
                    profile_pic : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max,"
                }),
              }
            );
            const data = await response.json();
            
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
            Create An Account
            </h1>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="username">Username:</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" id="username" onChange={handleChange} />
              </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email Address" id="email" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" id="password" onChange={handleChange} />
            </Form.Group>
                
            <Button className="w-100 btn btn-lg fw-bold" variant="primary" type="submit" onClick={handleSubmit}>
            Create Account
            </Button>
        </Form>
    );
}

export default RegisterUserForm;
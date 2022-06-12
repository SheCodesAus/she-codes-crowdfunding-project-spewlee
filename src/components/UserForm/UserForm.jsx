import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Bootstrap 
import { Alert, Form, Button } from "react-bootstrap";

function UserForm({ userData }) {
    // States
    const { id } = useParams;
    const token =  window.localStorage.getItem("token")
    const [user, setUser] = useState({
        profile_pic: "",
    });

// Hooks
    const navigate = useNavigate();

// Actions and Helpers
    const handleChange = (event) => {
        const { id, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
          try {
            const res = await fetch(
              `${process.env.REACT_APP_API_URL}users/${id}`,
              {
                method: "put",
                headers: ({
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                }),
                body: JSON.stringify({ 
                    profile_pic: user.profile_pic,
                }),
              }
            );
            const data = await res.json();
            <Alert variant="success">
                <Alert.Heading>Updated Profile Photo Successfully!</Alert.Heading>
            </Alert>
            navigate('/');
          } catch (err) {
            console.log(err);
          }
        };


    return (
      <Form className="p-4 m-5 rounded-3 login">
        <h1 className="h3 mb-3 fw-normal text-center">
        Update Profile Photo
        </h1>

        <Form.Group className="mb-3">
            <Form.Label htmlFor="profile_pic">Profile Photo:</Form.Label>
            <Form.Control type="text" placeholder="Enter Profile Photo URL" id="profile_pic" onChange={handleChange} />
            </Form.Group>
            
        <Button className="w-100 btn btn-lg fw-bold" variant="primary" type="submit" onClick={handleSubmit}>
        Update
        </Button>
      </Form>
    );
}

export default UserForm;
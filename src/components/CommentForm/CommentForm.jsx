import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

function PledgeForm({ projectId }) {
    // States
    const token =  window.localStorage.getItem("token")
    const [comment, setComment] = useState({
        comment: ""
    });

// Actions and Helpers
    const handleChange = (event) => {
        const { id, value } = event.target;
        setComment((prevComment) => ({
            ...prevComment,
            [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
          try {
            const res = await fetch(
              `${process.env.REACT_APP_API_URL}pledges/`,
              {
                method: "post",
                headers: ({
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                }),
                body: JSON.stringify({
                    project: projectId,
                    comment: comment.comment,
                }),
              }
            );
            const data = await res.json();
          } catch (err) {
            console.log(err);
          }
        };


    if (!token) {
        return (
            <Link to="/login">Please login to pledge to this amazing project</Link>
        );
    }

    return (
        <Form className="p-4 m-5 rounded-3 login">
            <h1 className="h3 mb-3 fw-normal text-center">
            Leave A Comment
            </h1>

            <Form.Group className="mb-3">
                <Form.Label for="comment">Comment:</Form.Label>
                <Form.Control type="text" placeholder="comment.." id="comment" onChange={handleChange} />
            </Form.Group>

            <Button className="w-100 btn btn-lg fw-bold" variant="primary" type="submit" onSubmit={handleSubmit}>
            Submit Comment
            </Button>
        </Form>
    );
}

export default PledgeForm;
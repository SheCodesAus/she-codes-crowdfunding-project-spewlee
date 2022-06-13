import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Button, Alert, Container } from "react-bootstrap";

function PledgeForm({ projectId }) {
    const navigate = useNavigate();

    // States
    const token =  window.localStorage.getItem("token")
    const [pledge, setPledges] = useState({
        amount: "",
        pledgeComment: "",
        anonymous: "",
    });

// Actions and Helpers
    const handleChange = (event) => {
        const { id, value } = event.target;
        setPledges((prevPledge) => ({
            ...prevPledge,
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
                    amount: pledge.amount,
                    comment: pledge.pledgeComment,
                    anonymous: pledge.anonymous,
                }),
              }
            );
            const data = await res.json();
            <Alert variant="success">
                <Alert.Heading>Pledged Successfully!</Alert.Heading>
            </Alert>
            navigate("/");
          } catch (err) {
            console.log(err);
          }
        };


    if (!token) {
        return (
            <Container className="mx-auto fluid text-center align-items-center pt-5 ">
                <h3 class="lead fw-bold title text-secondary">Please Login To Pledge</h3>
                <a href="/login" class="btn btn-primary text-light fw-bold" role="button">
                Pledge
                </a>
            </Container>
        );
    }

    return (
        <Form className="p-4 m-5 rounded-3 login">
            <h1 className="h3 mb-3 fw-normal text-center">
            Make a Pledge
            </h1>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="amount">Amount:</Form.Label>
                <Form.Control type="number" placeholder="Enter Pledge Amount.." id="amount" onChange={handleChange} />
                </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="pledgeComment">Comment:</Form.Label>
                <Form.Control type="text" placeholder="Enter Comment.." id="pledgeComment" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="form-check mb-3">
                <Form.Label htmlFor="anonymous">Anonymous:</Form.Label>
                <Form.Control type="checkbox" id="anonymous" onChange={handleChange} />
            </Form.Group>

            <Button className="w-100 btn btn-lg fw-bold" variant="primary" type="submit" onClick={handleSubmit}>
            Submit Pledge
            </Button>
        </Form>


        // <form>
        //     <div> 
        //         <label htmlFor="amount">Amount:</label>
        //         <input 
        //             type="number"
        //             id="amount"
        //             placeholder="Enter Pledge Amount"
        //             onChange={handleChange}
        //         />
        //     </div>
        //     <div>
        //         <label htmlFor="pledgeComment">Pledge Comment:</label>
        //         <input 
        //             type="text"
        //             id="pledgeComment"
        //             placeholder="Enter Comment.."
        //             onChange={handleChange}
        //         />
        //     </div>
        //     <div>
        //         <label htmlFor="anonymous">Anonymous:</label>
        //         <select id="anonymous" onChange={handleChange}>
        //             <option value="">--Please choose an option--</option>
        //             <option value="True">True</option>
        //             <option value="False">False</option>
        //         </select>
        //     </div>
        //     <button type="submit" onClick={handleSubmit}>Sumbit</button>
        // </form>
    );
}

export default PledgeForm;
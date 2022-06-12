import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

function PledgeForm({ projectId }) {
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
            Make a Pledge
            </h1>

            <Form.Group className="mb-3">
                <Form.Label for="amount">Amount:</Form.Label>
                <Form.Control type="number" placeholder="Enter Pledge Amount.." id="amount" onChange={handleChange} />
                </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label for="pledgeComment">Comment:</Form.Label>
                <Form.Control type="text" placeholder="Enter Comment.." id="pledgeComment" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="form-check mb-3">
                <Form.Label for="anonymous">Anonymous:</Form.Label>
                <Form.Control type="checkbox" id="anonymous" onChange={handleChange} />
            </Form.Group>

            <Button className="w-100 btn btn-lg fw-bold" variant="primary" type="submit" onSubmit={handleSubmit}>
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
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <form>
            <div> 
                <label htmlFor="amount">Amount:</label>
                <input 
                    type="number"
                    id="amount"
                    placeholder="Enter Pledge Amount"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="pledgeComment">Pledge Comment:</label>
                <input 
                    type="text"
                    id="pledgeComment"
                    placeholder="Enter Comment.."
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="anonymous">Anonymous:</label>
                <select id="anonymous" onChange={handleChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="True">True</option>
                    <option value="False">False</option>
                </select>
            </div>
            <button type="submit" onClick={handleSubmit}>Sumbit</button>
        </form>
    );
}

export default PledgeForm;
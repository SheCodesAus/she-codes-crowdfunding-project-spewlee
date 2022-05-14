import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProjectForm() {
    // States
    const token =  window.localStorage.getItem("token")
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
                    amount: 0,
                    goal_amount: project.goal_amount,
                    image: project.image,
                    date_created: Date.now(),
                }),
              }
            );
            const data = await res.json();
            navigate("/");
          } catch (err) {
            console.log(err);
          }
        };


    if (!token) {
        return (
            <Link to="/login">Please login to create a project.</Link>
        )
    }

    return (
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input 
                    type="text"
                    id="title"
                    placeholder="Enter Title.."
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input 
                    type="text"
                    id="description"
                    placeholder="Enter Description.."
                    onChange={handleChange}
                />
            </div>
            <div> 
                <label htmlFor="image">Image:</label>
                <input 
                    type="text"
                    id="image"
                    placeholder="Enter Image URL"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="goal_amount">Goal Amount:</label>
                <input 
                    type="number"
                    id="goal_amount"
                    placeholder="Enter Goal Amount.."
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="due_date">Due Date:</label>
                <input 
                    type="date"
                    id="due_date"
                    placeholder="Enter Due Date.."
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default ProjectForm;
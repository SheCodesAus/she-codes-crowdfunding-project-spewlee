import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProjectForm() {
    // States
    const token =  window.localStorage.getItem("token")
    const [project, setProjects] = useState({
        title: "",
        description: "",
        other_ways_to_help: "",
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
                    other_ways_to_help: project.other_ways_to_help,
                    goal_amount: project.goal_amount,
                    image: project.image,
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
        );
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
                <label htmlFor="other_ways_to_help">Other Ways To Help:</label>
                <input 
                    type="text"
                    id="other_ways_to_help"
                    placeholder="Enter Text.."
                    onChange={handleChange}
                />
            </div>
            <div> 
                <label htmlFor="image">Amount:</label>
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
            <button type="submit" onClick={handleSubmit}>Sumbit</button>
        </form>
    );
}

export default ProjectForm;
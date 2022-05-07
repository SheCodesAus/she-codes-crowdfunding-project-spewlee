import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
              `${process.env.REACT_APP_API_URL}users/`,
              {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
              }
            );
            navigate("/");
          } catch (err) {
            console.log(err);
          }
        }
      };

    return (
        <form>
            <div> 
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    placeholder="Enter Username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    id="email"
                    placeholder="email"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Create Account</button>
        </form>
    );
}

export default RegisterUserForm;
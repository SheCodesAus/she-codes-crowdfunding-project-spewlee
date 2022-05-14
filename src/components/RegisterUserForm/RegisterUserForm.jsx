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

    const postData = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}api-token-auth/`,
            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  username: credentials.username,
                  password: credentials.password,
              }),
            }
          );
          return response.json();
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
                body: JSON.stringify({
                    username: credentials.username,
                    email: credentials.email,
                    password: credentials.password,
                    admin: false,
                    profile_pic : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max,"
                }),
              }
            );
            const data = await response.json();
            window.localStorage.setItem("id",data.id);
            postData().then((response) => {
                window.localStorage.setItem("token", response.token);
            });
            
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
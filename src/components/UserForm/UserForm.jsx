import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UserForm({ userId }) {
    // States
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
              `${process.env.REACT_APP_API_URL}users/`,
              {
                method: "post",
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
            navigate('/');
          } catch (err) {
            console.log(err);
          }
        };


    return (
        <form>
            <div>
                <label htmlFor="profile_pic">Profile Photo:</label>
                <input 
                    type="text"
                    id="profile_pic"
                    placeholder="EnterImage URL"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Sumbit</button>
        </form>
    );
}

export default UserForm;
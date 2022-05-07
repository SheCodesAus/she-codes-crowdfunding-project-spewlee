import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserForm() {
    // States
    const token =  window.localStorage.getItem("token")
    const [user, setUser] = useState({
        email: "",
        admin: "",
        club: "",
        profile_pic: "",
    });

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
                method: "post",
                headers: ({
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                }),
                body: JSON.stringify({
                    email: user.email,
                    admin: user.admin,
                    club: user.club,
                    profile_pic: user.profile_pic,
                }),
              }
            );
            const data = await res.json();
          } catch (err) {
            console.log(err);
          }
        };


    return (
        <form>
            <div> 
                <label htmlFor="email">Email:</label>
                <input 
                    type="text"
                    id="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="profile_pic">Profile Photo:</label>
                <input 
                    type="text"
                    id="profile_pic"
                    placeholder="EnterImage URL"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="admin">Admin of a club?:</label>
                <input 
                    type="checkbox"
                    id="admin"
                    onChange={handleChange}
                />
            </div>
            {/* Look at making this be a drop down of the clubs created */}
            <div>
                <label htmlFor="club">Club:</label>
                <input 
                    type="text"
                    id="club"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Sumbit</button>
        </form>
    );
}

export default UserForm;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import UserForm from "../components/UserForm/UserForm";


function ProfilePage() {

    // State
    const [profileData, setProfileData] = useState();
    
    // Hooks
    const { id } = useParams();

    // Actions and Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setProfileData(data);
            });
    }, [id]);


// Normal State
    return (
        <div>
            <h1>Welcome {profileData.username}!</h1>
            <h3>Would you like to update your account?</h3>
            <UserForm />
        </div>
    );
}

export default ProfilePage;
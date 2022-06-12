import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import UserForm from "../components/UserForm/UserForm";

// Bootstrap
import { Container } from "react-bootstrap";


function ProfilePage() {

    // State
    const [profileData, setProfileData] = useState([]);
    
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
        <Container className="m-2 p-2 text-center mx-auto">
            <h1>Welcome {profileData.username}!</h1>
            <h3>Would you like to update your account?</h3>
            <UserForm />
        </Container>
    );
}

export default ProfilePage;
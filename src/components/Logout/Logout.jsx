import React from "react";

// Bootstrap
import { Container, Alert } from "react-bootstrap";

function Logout() {

    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("id");

    return (
        <Container className="p-5 m-2 text-center mx-auto">
            <Alert variant="success">
                <Alert.Heading>Logged Out Successfully!</Alert.Heading>
            </Alert>
        </Container>
    )
}

export default Logout;
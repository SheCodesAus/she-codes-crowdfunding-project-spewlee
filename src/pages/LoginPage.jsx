import React from "react";

// Bootstrap
import { Container } from "react-bootstrap";

//Components
import LoginForm from "../components/LoginForm/LoginForm";

function LoginPage() {
    return (
        <div>
            <LoginForm />

            <Container className="m-5 text-center" >
                <h3>Don't have an account?</h3>
                <a href="/register" class="btn btn-secondary text-light fw-bold" role="button">
                    Create An Account
                </a>
            </Container>
        </div>
    )
};

export default LoginPage;
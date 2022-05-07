import React from "react";
import { Link } from "react-router-dom";

//Components
import LoginForm from "../components/LoginForm/LoginForm";

function LoginPage() {
    return (
        <div>
            <h2>Login</h2>
            <LoginForm />;
            <h3>Don't have an account?</h3>
            <Link to="/register">Click Here To Register</Link>
        </div>
    )
};

export default LoginPage;
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// Components
import Nav from "./components/Nav/Nav";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterUserPage from "./pages/RegisterUserPage";
import CreateProjectPage from "./pages/CreateProjectPage";

// Styles
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/users/:id" element={<ProfilePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterUserPage />} />
          <Route path="/create-project" element={<CreateProjectPage />} />
        </Routes>
        <div className="heroImage">
          <button onclick={useNavigate("/create-project")}>Post a Project</button>
          <h1>Achieve your team's dream</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;

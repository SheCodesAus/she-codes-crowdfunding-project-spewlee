import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/Nav/Nav";
import HeroImage from "./components/HeroImage/HeroImage";
import Footer from "./components/Footer/Footer";

// Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterUserPage from "./pages/RegisterUserPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import LogoutPage from "./pages/LogoutPage";
import PledgePage from "./pages/PledgePage";



function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <HeroImage />
        <Routes>
          <Route path="/register" element={<RegisterUserPage />} />
          <Route path="/create-project" element={<CreateProjectPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/users/:id" element={<ProfilePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/pledges/:id" element={<PledgePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

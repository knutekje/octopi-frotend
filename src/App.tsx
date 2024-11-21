import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import {Toolbar} from "@mui/material";
import TemperaturePage from "./pages/TemperaturePage.tsx";
import Layout from "./components/Layout.tsx";
import {SafetyDiscPage} from "./pages/SafetyDiscPage.tsx";

interface AppProps {
    toggleTheme: () => void;
    darkMode: boolean;
}

const App: React.FC<AppProps> = ({ toggleTheme, darkMode }) => {
    return (
        <Router>
            <Layout>
            <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
            <Toolbar />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/temperature" element={<TemperaturePage />} />
                <Route path="/safety" element={<SafetyDiscPage />} />

            </Routes>
            </Layout>
        </Router>
    );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import {TestLogin} from "./components/TestLogin.tsx";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar /> {/* Add the navbar */}
                <TestLogin/>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;


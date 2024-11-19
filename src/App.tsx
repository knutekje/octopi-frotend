import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPanel from "./pages/AdminPanel.tsx";

function App() {
    return (
        <Router>
            <ToastContainer /> {/* Place it here */}
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute adminOnly>
                            <AdminPanel />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;

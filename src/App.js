import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import EntryList from './components/EntryList'; 
import AddEntry from './components/AddEntry'; 
import EditEntry from './components/EditEntry'; 
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    if (token && storedUsername) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = (token, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setIsAuthenticated(true);
    setUsername(username);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} username={username} onLogout={handleLogout} />
        
        <Routes>
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/entries" element={isAuthenticated ? <EntryList /> : <Navigate to="/login" />} />
          <Route path="/add" element={isAuthenticated ? <AddEntry /> : <Navigate to="/login" />} />
          <Route path="/edit/:id" element={isAuthenticated ? <EditEntry /> : <Navigate to="/login" />} />
          <Route path="/about" element={<AboutUs isAuthenticated={isAuthenticated} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <footer style={{
          position: 'fixed',
          bottom: 0,
          width: '100%',
          textAlign: 'center',
          padding: '1px',
          backgroundColor: '#f8f9fa',
          borderTop: '1px solid #dee2e6'
        }}>
          <a 
            href="https://www.linkedin.com/in/anshuman55a/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              textDecoration: 'none', 
              color: '#6c757d'
            }}
          >
            Developed by Anshuman Singh © 2024
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;

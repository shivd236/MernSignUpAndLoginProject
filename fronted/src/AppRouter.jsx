import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Dashboard component import

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
      <Route path="/" element={<Register />} /> {/* Default route */}
    </Routes>
  </Router>
);

export default AppRouter;
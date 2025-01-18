import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
//import AdminDashboard from './components/AdminDashboard';
//import ReviewerDashboard from './components/ReviewerDashboard';

import AdminDashboardPage from './pages/AdminDashboardPage';
import ReviewerDashboardPage from './pages/ReviewerDashboardPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/reviewer" element={<ReviewerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import ApplicationForm from '../components/AdminDashboard/ApplicationForm';
import ApplicationList from '../components/AdminDashboard/ApplicationList';


const AdminDashboardPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <p>This is where Admin functionality will go.</p>
    </div>
  );
};

const AdminDashboardPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ApplicationForm />
      <ApplicationList />
    </div>
  );
};

export default AdminDashboardPage;

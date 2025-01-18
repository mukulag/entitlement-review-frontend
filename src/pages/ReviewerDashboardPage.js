import React from 'react';
import PendingTasks from '../components/ReviewerDashboard/PendingTasks';
import HistoricalApprovals from '../components/ReviewerDashboard/HistoricalApprovals';

const ReviewerDashboardPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Reviewer Dashboard</h1>
      <p>This is where Reviewer functionality will go.</p>
    </div>
  );
};

const ReviewerDashboardPage = () => {
  return (
    <div>
      <h1>Reviewer Dashboard</h1>
      <PendingTasks />
      <HistoricalApprovals />
    </div>
  );
};

export default ReviewerDashboardPage;

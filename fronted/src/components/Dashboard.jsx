import React from 'react';
import '../styles/styles.css'; // Import CSS file from the styles folder

const Dashboard = () => (
  <div className="dashboard-container">
    <h2 className='dmh2'>Welcome to the Dashboard</h2>
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>Users</h3>
        <p>100</p>
      </div>
      <div className="stat-card">
        <h3>Orders</h3>
        <p>50</p>
      </div>
      <div className="stat-card">
        <h3>Sales</h3>
        <p>$5000</p>
      </div>
    </div>
    <div className="dashboard-actions">
      <button className="action-button">View Users</button>
      <button className="action-button">Create New Order</button>
    </div>
  </div>
);

export default Dashboard;

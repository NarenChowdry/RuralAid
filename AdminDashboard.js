import React from 'react';
import Topbar from '../AdminComponents/Topbar';
import Sidebar from '../AdminComponents/Sidebar';
import '../AdminComponents/AdminDashboard.css';
import { Routes, Route } from 'react-router-dom';
import UserList from '../AdminComponents/UserList';
import SummaryPage from '../Components/SummaryPage';
import ComplaintListPage from '../Components/ComplaintListPage';

function AdminDashboard() {
  return (
    <div className="adminDashboard">
      <Topbar />
      <div className="dashboardContainer">
        <Sidebar />
        <div className="dashboardContent">
          <Routes>
            
            <Route path="/ulist" element={<UserList />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/posts" element={<ComplaintListPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
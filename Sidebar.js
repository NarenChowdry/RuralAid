import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarMenu">
          <li className="sidebarListItem">
            <Link to="/ulist">Users</Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/summary">Donations</Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/posts">Complaints</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
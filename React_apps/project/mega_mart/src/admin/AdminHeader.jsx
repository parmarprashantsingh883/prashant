import React from "react";

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <input className="search-input" type="text" placeholder="Search..." />
      
      <div className="header-right">
        <span className="icon">🔔</span>
        <span className="icon">👤</span>
      </div>
    </header>
  );
}

import React from "react";

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h2 className="logo">Mega Mart<br /><span>Admin Panel</span></h2>

      <ul className="sidebar-menu">
        <li className="active">📊 Dashboard</li>
        <li>🛒 Products</li>
        <li>📦 Orders</li>
        <li>👤 Users</li>
        <li>💬 Messages</li>
        <li>⚙ Settings</li>
      </ul>
    </aside>
  );
}

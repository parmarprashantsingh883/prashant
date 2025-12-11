import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminCards from "./AdminCards";
import AdminTable from "./AdminTable";
import "./admin.css";

export default function AdminDashboard() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      
      <div className="admin-content">
        <AdminHeader />
        <AdminCards />
        <AdminTable />
      </div>
    </div>
  );
}

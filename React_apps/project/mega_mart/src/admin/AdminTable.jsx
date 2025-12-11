import React from "react";

export default function AdminTable() {
  return (
    <div className="admin-table">
      <h3>Recent Orders</h3>

      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Prashant Singh</td>
            <td>Organic Avocados</td>
            <td>$12.50</td>
            <td><span className="status success">Completed</span></td>
          </tr>
          <tr>
            <td>Harsh Patel</td>
            <td>Fresh Almonds</td>
            <td>$8.99</td>
            <td><span className="status pending">Pending</span></td>
          </tr>
          <tr>
            <td>Riya Mehta</td>
            <td>Strawberries</td>
            <td>$5.99</td>
            <td><span className="status cancelled">Cancelled</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

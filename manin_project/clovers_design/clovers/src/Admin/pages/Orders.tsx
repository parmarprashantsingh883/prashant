import Header from "../components/Header";
import { Search } from "lucide-react";

const orders = [
  { id: "#ORD-7352", customer: "Sarah Johnson", email: "sarah@email.com", items: 8, total: "$124.99", status: "Delivered", date: "Dec 18, 2024" },
  { id: "#ORD-7351", customer: "Michael Chen", email: "michael@email.com", items: 3, total: "$45.50", status: "Processing", date: "Dec 18, 2024" },
  { id: "#ORD-7350", customer: "Emily Davis", email: "emily@email.com", items: 12, total: "$198.00", status: "Shipped", date: "Dec 18, 2024" },
  { id: "#ORD-7349", customer: "James Wilson", email: "james@email.com", items: 5, total: "$87.25", status: "Pending", date: "Dec 17, 2024" },
  { id: "#ORD-7348", customer: "Anna Smith", email: "anna@email.com", items: 2, total: "$32.00", status: "Delivered", date: "Dec 17, 2024" },
];

const statusColors: Record<string, string> = {
  Delivered: "bg-success/10 text-success border-success/20",
  Processing: "bg-info/10 text-info border-info/20",
  Shipped: "bg-warning/10 text-warning border-warning/20",
  Pending: "bg-destructive/10 text-destructive border-destructive/20",
};

const Orders = () => {
  return (
    <div>
      <Header title="Orders" subtitle="Track and manage customer orders" />

      <div className="p-6 space-y-6">
        <div className="relative w-fit">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search orders..."
            className="pl-10 w-80 h-10 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Order ID</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Customer</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Items</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Total</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-muted-foreground">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{order.id}</td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-sm font-medium text-foreground">{order.customer}</p>
                      <p className="text-xs text-muted-foreground">{order.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-foreground">{order.items}</td>
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{order.total}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;

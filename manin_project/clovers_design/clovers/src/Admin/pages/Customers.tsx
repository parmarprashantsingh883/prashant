import { useState } from "react";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { Search, Pencil, Trash2, AlertTriangle } from "lucide-react";

interface Customer {
  id: number;
  name: string;
  email: string;
  orders: number;
  spent: string;
  joined: string;
  status: string;
}

const initialCustomers: Customer[] = [
  { id: 1, name: "Sarah Johnson", email: "sarah@email.com", orders: 12, spent: "$1,249.99", joined: "Jan 15, 2024", status: "Active" },
  { id: 2, name: "Michael Chen", email: "michael@email.com", orders: 8, spent: "$856.50", joined: "Feb 22, 2024", status: "Active" },
  { id: 3, name: "Emily Davis", email: "emily@email.com", orders: 24, spent: "$2,198.00", joined: "Nov 10, 2023", status: "Inactive" },
  { id: 4, name: "James Wilson", email: "james@email.com", orders: 6, spent: "$487.25", joined: "Mar 05, 2024", status: "Active" },
  { id: 5, name: "Anna Smith", email: "anna@email.com", orders: 15, spent: "$1,532.00", joined: "Dec 01, 2023", status: "Suspended" },
];

const statusColors: Record<string, string> = {
  Active: "bg-success/10 text-success border-success/20",
  Inactive: "bg-warning/10 text-warning border-warning/20",
  Suspended: "bg-destructive/10 text-destructive border-destructive/20",
};

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [deletingCustomer, setDeletingCustomer] = useState<Customer | null>(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", status: "" });

  const handleEditClick = (customer: Customer) => {
    setEditingCustomer(customer);
    setEditForm({ name: customer.name, email: customer.email, status: customer.status });
  };

  const handleEditSave = () => {
    if (editingCustomer) {
      setCustomers(customers.map(c => 
        c.id === editingCustomer.id 
          ? { ...c, name: editForm.name, email: editForm.email, status: editForm.status }
          : c
      ));
      setEditingCustomer(null);
    }
  };

  const handleDelete = () => {
    if (deletingCustomer) {
      setCustomers(customers.filter(c => c.id !== deletingCustomer.id));
      setDeletingCustomer(null);
    }
  };

  return (
    <div>
      <Header title="Customers" subtitle="Manage your customer base" />

      <div className="p-4 sm:p-6 space-y-6">
        <div className="relative w-full sm:w-fit">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search customers..."
            className="pl-10 w-full sm:w-80 h-10 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Mobile card view */}
        <div className="sm:hidden space-y-4">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-card rounded-xl border border-border p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-sm font-medium">
                      {customer.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{customer.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{customer.email}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[customer.status]}`}>
                  {customer.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{customer.orders} orders</span>
                <span className="font-medium text-foreground">{customer.spent}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">Joined {customer.joined}</p>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleEditClick(customer)}
                    className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => setDeletingCustomer(customer)}
                    className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table view */}
        <div className="hidden sm:block bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="text-left py-3 px-4 lg:px-6 text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="text-left py-3 px-4 lg:px-6 text-sm font-medium text-muted-foreground hidden md:table-cell">Orders</th>
                  <th className="text-left py-3 px-4 lg:px-6 text-sm font-medium text-muted-foreground">Total Spent</th>
                  <th className="text-left py-3 px-4 lg:px-6 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 lg:px-6 text-sm font-medium text-muted-foreground hidden lg:table-cell">Joined</th>
                  <th className="text-right py-3 px-4 lg:px-6 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-4 lg:px-6">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm font-medium">
                            {customer.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{customer.name}</p>
                          <p className="text-xs text-muted-foreground truncate">{customer.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 lg:px-6 text-sm text-foreground hidden md:table-cell">{customer.orders}</td>
                    <td className="py-4 px-4 lg:px-6 text-sm font-medium text-foreground">{customer.spent}</td>
                    <td className="py-4 px-4 lg:px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColors[customer.status]}`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 lg:px-6 text-sm text-muted-foreground hidden lg:table-cell">{customer.joined}</td>
                    <td className="py-4 px-4 lg:px-6">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => handleEditClick(customer)}
                          className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => setDeletingCustomer(customer)}
                          className="p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal 
        isOpen={!!editingCustomer} 
        onClose={() => setEditingCustomer(null)}
        title="Edit Customer"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
            <input
              type="text"
              value={editForm.name}
              onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
              className="w-full h-10 px-3 bg-background border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
            <input
              type="email"
              value={editForm.email}
              onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
              className="w-full h-10 px-3 bg-background border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Status</label>
            <select
              value={editForm.status}
              onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
              className="w-full h-10 px-3 bg-background border border-border rounded-md text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setEditingCustomer(null)}
              className="flex-1 h-10 px-4 border border-border rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleEditSave}
              className="flex-1 h-10 px-4 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal 
        isOpen={!!deletingCustomer} 
        onClose={() => setDeletingCustomer(null)}
        title="Delete Customer"
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <p className="text-sm text-foreground">
                Are you sure you want to delete <span className="font-medium">{deletingCustomer?.name}</span>?
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                This action cannot be undone.
              </p>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setDeletingCustomer(null)}
              className="flex-1 h-10 px-4 border border-border rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 h-10 px-4 bg-destructive text-destructive-foreground rounded-md text-sm font-medium hover:bg-destructive/90 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Customers;

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Package, Truck, CheckCircle, Clock, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumb from "@/components/Breadcrumb";


const orders = [
  {
    id: "ORD-2024-001",
    date: "Dec 15, 2024",
    status: "Delivered",
    total: 87.45,
    items: 12,
    statusIcon: CheckCircle,
    statusColor: "text-fresh",
  },
  {
    id: "ORD-2024-002",
    date: "Dec 14, 2024",
    status: "In Transit",
    total: 54.99,
    items: 6,
    statusIcon: Truck,
    statusColor: "text-accent",
  },
  {
    id: "ORD-2024-003",
    date: "Dec 12, 2024",
    status: "Processing",
    total: 123.50,
    items: 18,
    statusIcon: Clock,
    statusColor: "text-primary",
  },
  {
    id: "ORD-2024-004",
    date: "Dec 10, 2024",
    status: "Delivered",
    total: 45.00,
    items: 5,
    statusIcon: CheckCircle,
    statusColor: "text-fresh",
  },
  {
    id: "ORD-2024-005",
    date: "Dec 5, 2024",
    status: "Delivered",
    total: 198.75,
    items: 24,
    statusIcon: CheckCircle,
    statusColor: "text-fresh",
  },
];

const OrdersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
     
      <main>
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-foreground to-foreground/90 py-12">
          <div className="container">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Package className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground animate-fade-up">
                  My Orders
                </h1>
                <p className="text-primary-foreground/70 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  Track and manage your orders
                </p>
              </div>
            </div>
          </div>
        </section>
        <Breadcrumb />

        {/* Order Stats */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container">
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div className="animate-fade-up">
                <div className="text-2xl md:text-4xl font-bold text-foreground">{orders.length}</div>
                <div className="text-muted-foreground text-sm md:text-base">Total Orders</div>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-2xl md:text-4xl font-bold text-fresh">3</div>
                <div className="text-muted-foreground text-sm md:text-base">Delivered</div>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl md:text-4xl font-bold text-accent">2</div>
                <div className="text-muted-foreground text-sm md:text-base">In Progress</div>
              </div>
            </div>
          </div>
        </section>

        {/* Orders List */}
        <section className="py-12">
          <div className="container">
            <div className="space-y-4">
              {orders.map((order, index) => (
                <div
                  key={order.id}
                  className="bg-card rounded-2xl shadow-soft p-6 hover:shadow-card transition-shadow animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        <ShoppingBag className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{order.id}</div>
                        <div className="text-sm text-muted-foreground">{order.date} • {order.items} items</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className={`flex items-center gap-2 ${order.statusColor}`}>
                        <order.statusIcon className="w-5 h-5" />
                        <span className="font-medium">{order.status}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-foreground">${order.total.toFixed(2)}</div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty state would go here if no orders */}
            {orders.length === 0 && (
              <div className="text-center py-16">
                <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">No Orders Yet</h2>
                <p className="text-muted-foreground mb-6">Start shopping to see your orders here!</p>
                <Link to="/deals">
                  <Button variant="hero">Start Shopping</Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrdersPage;

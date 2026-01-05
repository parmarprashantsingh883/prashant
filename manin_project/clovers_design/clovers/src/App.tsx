import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DealsPage from "./pages/DealsPage";
import FoodPage from "./pages/FoodPage";
import BeveragesPage from "./pages/BeveragesPage";
import HouseholdPage from "./pages/HouseholdPage";
import PersonalCarePage from "./pages/PersonalCarePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OrdersPage from "./pages/OrdersPage";
import NotFound from "./pages/NotFound";
import Adminapp from "./Admin/components/Adminapp";
import { Categories } from "./components/Categories";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/beverages" element={<BeveragesPage />} />
          <Route path="/household" element={<HouseholdPage />} />
          <Route path="/personal-care" element={<PersonalCarePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/orders" element={<OrdersPage />} /><Route path="/" element={<Categories />} />
         
          {/* 🔐 Admin Panel MUST BE ABOVE "*" */}
          <Route path="/admin/*" element={<Adminapp />} />

          {/* Catch-all must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

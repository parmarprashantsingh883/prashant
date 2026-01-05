import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { Tag, Percent, Clock } from "lucide-react";

const DealsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
          <div className="container text-center text-primary-foreground">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Percent className="w-8 h-8" />
              <span className="text-lg font-medium">Limited Time Offers</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 animate-fade-up">
              Best Deals of the Week
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Save big on your favorite products. Fresh deals every week!
            </p>
          </div>
        </section>

        {/* Deal Stats */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container">
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
              <div className="animate-fade-up">
                {/* <div className="text-2xl md:text-4xl font-bold text-primary">{.length}+</div> */}
                <div className="text-muted-foreground text-sm md:text-base">Products on Sale</div>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-2xl md:text-4xl font-bold text-fresh">40%</div>
                <div className="text-muted-foreground text-sm md:text-base">Max Discount</div>
              </div>
              <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center gap-1 text-2xl md:text-4xl font-bold text-accent">
                  <Clock className="w-6 h-6 md:w-8 md:h-8" />
                  <span>3</span>
                </div>
                <div className="text-muted-foreground text-sm md:text-base">Days Left</div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container">
            <div className="flex items-center gap-2 mb-8">
              <Tag className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {/* All Deals ({dealProducts.length}) */}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
             
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DealsPage;

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Courses } from "@/components/Courses";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-all hover:scale-110 hover:shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Widget Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md">
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute -right-12 -top-12 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <ChatWidget />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

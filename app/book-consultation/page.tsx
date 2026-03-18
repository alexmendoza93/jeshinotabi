"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function BookConsultationPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScheduled, setIsScheduled] = useState(false);

  useEffect(() => {
    // Dynamically load the Calendly script since we couldn't install the react-calendly package
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Listen for Calendly lifecycle events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf("calendly.event_scheduled") === 0) {
        setIsScheduled(true);
        // We'll skip canvas-confetti for now since the package installation failed
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col relative overflow-hidden font-sans">
      {/* Subtle background glow effect matching Jeshinotabi brand */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#7f13ec]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#7f13ec]/10 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between relative z-10">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
        >
          <div className="bg-white/5 border border-white/10 p-2 rounded-full group-hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium tracking-wide">Back to Home</span>
        </Link>
        <div className="text-xl font-bold tracking-widest text-white/90">
          JESHINOTABI
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 relative z-10 pb-20">
        
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            Ready to Plan Your <span className="font-semibold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Jeshinotabi?</span>
          </h1>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            Book a free 30-minute consultation with our expert travel planners to customize your dream itinerary for Japan or South Korea.
          </p>
        </div>

        {/* Glassmorphism Container for Calendly */}
        <div className="w-full max-w-[1060px] mx-auto">
          {!isScheduled ? (
            <div className="relative bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(127,19,236,0.1)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(127,19,236,0.15)] group">
              {/* Decorative top border glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7f13ec]/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div 
                ref={containerRef}
                className="calendly-inline-widget w-full" 
                data-url="https://calendly.com/jeshinotabitravel/45min?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=7f13ec" 
                style={{ minWidth: '320px', height: '700px' }} 
              />
            </div>
          ) : (
            <div className="relative bg-[#111111]/80 backdrop-blur-xl border border-[#7f13ec]/30 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(127,19,236,0.15)] p-12 text-center animate-in fade-in zoom-in duration-500">
               <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7f13ec]/80 to-transparent" />
               <div className="w-20 h-20 bg-[#7f13ec]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 className="w-10 h-10 text-[#7f13ec]" />
               </div>
               <h2 className="text-3xl font-medium mb-4">Consultation Confirmed</h2>
               <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
                 Your time is reserved. An invitation has been sent to your email, and Jess will reach out to you shortly via WhatsApp to begin planning your journey.
               </p>
               <Link 
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
                >
                  Return to Home
               </Link>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}

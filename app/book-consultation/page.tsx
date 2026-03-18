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
      if (
        e.data.event &&
        e.data.event.indexOf("calendly.event_scheduled") === 0
      ) {
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
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden font-sans">
      {/* Subtle background glow effect matching Jeshinotabi brand */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between relative z-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors group"
        >
          <div className="bg-foreground/5 border border-foreground/10 p-2 rounded-full group-hover:bg-primary/10 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium tracking-wide">
            Volver al Inicio
          </span>
        </Link>
        <div className="font-serif text-2xl font-bold text-primary tracking-wider">
          Jeshinotabi
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 relative z-10 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.1] tracking-tight">
            ¿Listo para diseñar tus <span className="italic">Recuerdos?</span>
          </h1>
          <p className="text-lg text-foreground/80 font-light leading-relaxed">
            Agenda una consulta gratuita de 45 minutos con nuestros expertos en
            viajes para personalizar tu itinerario soñado para Japón o Corea del
            Sur.
          </p>
        </div>

        {/* Container for Calendly */}
        <div className="w-full max-w-[1060px] mx-auto">
          {!isScheduled ? (
            <div className="w-full">
              <div
                ref={containerRef}
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/jeshinotabitravel/45min?hide_gdpr_banner=1&background_color=fffafa&text_color=4a2b38&primary_color=d8437a"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
          ) : (
            <div className="relative bg-card/80 backdrop-blur-xl border border-primary/30 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 p-12 text-center animate-in fade-in zoom-in duration-500">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-serif text-foreground mb-4">
                Consulta Confirmada
              </h2>
              <p className="text-foreground/70 text-lg mb-8 max-w-md mx-auto font-light">
                Tu cita está reservada. Se ha enviado una invitación a tu correo
                electrónico.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105"
              >
                Volver al Inicio
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

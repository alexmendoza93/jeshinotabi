"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import NavbarLogo from "@/components/NavbarLogo";

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
        <NavbarLogo />
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start pt-4 px-4 sm:px-6 relative z-10 pb-20">
        <div className="text-center max-w-2xl mx-auto mb-0 space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-[1.1] tracking-tight">
            ¿Listo para diseñar tus <span className="italic">Recuerdos?</span>
          </h1>
          <p className="text-lg text-foreground/80 font-light leading-relaxed">
            Agenda una consulta gratuita de 20 minutos con nuestros expertos en
            viajes para personalizar tu itinerario soñado para Japón o Corea del
            Sur.
          </p>
          <div className="pt-2 flex flex-col items-center">
            <p className="text-sm text-foreground/60 mb-2">¿Prefieres contacto directo?</p>
            <a
              href="https://api.whatsapp.com/send?phone=523335842694"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#e8f5e9] hover:bg-[#c8e6c9] text-[#2e7d32] rounded-full font-serif tracking-wide transition-all shadow-sm flex items-center gap-2 active:scale-95 translate-y-0 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5 fill-[#2e7d32]" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>

        {/* Container for Calendly */}
        <div className="w-full max-w-[1060px] mx-auto -mt-6">
          {!isScheduled ? (
            <div className="w-full">
              <div
                ref={containerRef}
                className="calendly-inline-widget w-full"
                data-url="https://calendly.com/jeshinotabitravel/20min?hide_gdpr_banner=1&hide_landing_page_details=1&background_color=fffafa&text_color=4a2b38&primary_color=d8437a"
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

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.895-5.335 11.898-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

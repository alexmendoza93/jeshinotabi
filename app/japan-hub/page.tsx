"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  ArrowRight, 
  MapPin, 
  Compass, 
  Video, 
  FileText, 
  Headphones, 
  Train, 
  Ticket,
  CheckCircle2,
  Calendar,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import NavbarLogo from "@/components/NavbarLogo";

export default function JapanHub() {
  const stagger: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <NavbarLogo />
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8 text-sm font-medium text-foreground/80">
              <Link href="/#destinations" className="hover:text-primary transition-colors">Destinos</Link>
              <Link href="#experiences" className="hover:text-primary transition-colors">Experiencias</Link>
              <Link href="/#process" className="hover:text-primary transition-colors">Cómo Funciona</Link>
            </nav>
            <Button variant="default" size="sm" className="rounded-full shadow-lg shadow-primary/20" asChild>
              <Link href="/book-consultation">Agendar Consulta</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop"
            alt="Japan Landscape"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div 
          className="relative z-20 max-w-4xl mx-auto space-y-8"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/30 backdrop-blur-md text-white border border-white/20 text-sm font-medium mb-4 shadow-xl">
            <Compass className="w-5 h-5 text-primary" />
            <span className="tracking-wide uppercase text-xs">Exclusivo de Jeshinotabi</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight text-shadow-lg">
            Japón: La Delicada Armonía de <br/>
            <span className="text-primary italic">Tradición e Innovación</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed text-shadow-md">
            Viajes a medida que orquestan rituales ancestrales, destellos de neón y picos sagrados. Sigue nuestra ruta curada o explora a tu propio ritmo.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="rounded-full text-base px-8 py-6 shadow-xl shadow-primary/20 group hover:scale-105 transition-transform duration-300" asChild>
              <Link href="/book-consultation">
                Consultar Sobre Este Viaje
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* DIGITAL GUIDES & VIP BENEFITS */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Tu Planificación de Viaje y Beneficios VIP</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-light">
              Nos encargamos de la logística para que te enfoques en la experiencia.
            </p>
          </div>
          <motion.div 
            className="grid md:grid-cols-4 gap-6 text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {[
              { icon: FileText, title: "Itinerario PDF Diario", desc: "Se entrega 1 mes antes. Síguelo al pie de la letra o ve a tu ritmo." },
              { icon: Video, title: "Llamada de Bienvenida", desc: "Asesoría 1-a-1 por Zoom/WhatsApp para apps como Suica, VisitJapan y tips." },
              { icon: Headphones, title: "Soporte Dedicado 24/7", desc: "Asistencia antes, durante y después de todo tu viaje." },
              { icon: MapPin, title: "Guías de Atracciones", desc: "PDFs con consejos de expertos y rutas óptimas para Disney y Universal." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-background/60 backdrop-blur-md rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/70 text-sm font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ACCOMMODATIONS */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl text-foreground">Tus Hospedajes Prémium</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-light">
              Estancias de lujo con estándar asiático ubicadas en el corazón de Tokio y Osaka.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { title: "Tokyo Grand Residence", city: "Tokyo", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop" },
              { title: "Osaka Imperial Suite", city: "Osaka", image: "https://images.unsplash.com/photo-1590005354167-850c9afb33ec?q=80&w=1974&auto=format&fit=crop" }
            ].map((hotel, i) => (
              <Card key={i} className="overflow-hidden border-border/50">
                <div className="relative h-64 overflow-hidden">
                  <Image src={hotel.image} alt={hotel.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-border/50">
                    {hotel.city}
                  </div>
                </div>
                <CardContent className="p-8">
                  <CardTitle className="mb-4 text-2xl font-serif text-primary">{hotel.title}</CardTitle>
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-foreground/80 font-light">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Baño Privado</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Secadora y Toallas</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Limpieza Diaria</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Wifi Gratis</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Amenidades Prémium</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED EXPERIENCES & TRANSIT */}
      <section id="experiences" className="py-24 px-6 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl text-foreground">Experiencias Curadas y Tránsito Prémium</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-light">
              Todas las entradas y boletos de tren bala entre ciudades están incluidos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Train, title: "Tren Bala Shinkansen", info: "Experiencia en tren bala Tokio ⇆ Osaka incluida." },
              { icon: Ticket, title: "Tokyo Disney Resort", info: "Boleto de acceso para un día incluido." },
              { icon: Ticket, title: "Tokyo Disney Sea", info: "Acceso al parque temático incluido." },
              { icon: Ticket, title: "Universal Studios Japan", info: "Entrada estándar incluida." },
              { icon: Ticket, title: "Observatorio Shibuya Sky", info: "Vistas espectaculares desde el rooftop incluidas." },
              { icon: Ticket, title: "TeamLab Planets", info: "Entrada al arte inmersivo incluida." }
            ].map((exp, i) => (
              <div key={i} className="flex gap-4 items-start bg-background p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow hover:border-primary/30">
                <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-foreground mb-1">{exp.title}</h4>
                  <p className="text-sm text-foreground/70 font-light">{exp.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY BREAKDOWN */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl text-foreground">Desglose de Tu Viaje</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-light">
              Nuestros itinerarios recomendados por destino.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                city: "Destino Tokio",
                locations: [
                  { name: "Tokyo Sky Tree y Torre de Tokio", type: "Arquitectura (Gratis)" },
                  { name: "Asakusa y Shinjuku", type: "Distritos" },
                  { name: "Cruce de Shibuya y Estatua de Hachiko", type: "Gratis" },
                  { name: "Shibuya Sky", type: "Incluido" },
                  { name: "Tokyo Disney y Disney Sea", type: "Incluido" },
                  { name: "TeamLab Planets", type: "Incluido" },
                  { name: "Akihabara", type: "Distrito" },
                  { name: "Parques de Sakura", type: "Estacional (Mar-Abr)" }
                ]
              },
              {
                city: "Destino Osaka",
                locations: [
                  { name: "Castillo de Osaka", type: "Gratis por fuera" },
                  { name: "Universal Studios Japan", type: "Incluido" },
                  { name: "Namba y Dotonbori", type: "Distrito Gastronómico" },
                  { name: "Shinsekai Hondori", type: "Distrito" },
                  { name: "Mercado Kuromon", type: "Mercado de Comida" }
                ]
              },
              {
                city: "Atracciones en Kioto",
                locations: [
                  { name: "Bosque de Bambú de Arashiyama", type: "Gratis" },
                  { name: "Santuario Fushimi Inari", type: "Gratis" },
                  { name: "Ninenzaka y Sanneizaka", type: "Gratis" },
                  { name: "Gion (Distrito Geisha)", type: "Gratis" },
                  { name: "Kinkaku-ji (Pabellón dorado)", type: "Templo" }
                ]
              },
              {
                city: "Excursión a Nara",
                locations: [
                  { name: "Parque de Nara (Ciervos)", type: "Gratis" },
                  { name: "Templo Todai-ji", type: "Templo" },
                  { name: "Kasuga Taisha y Kofuku-ji", type: "Santuarios" },
                  { name: "Probar Mochis Famosos", type: "Experiencia" }
                ]
              }
            ].map((hub, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/3 pt-2">
                  <h3 className="font-serif text-2xl text-primary">{hub.city}</h3>
                </div>
                <div className="md:w-2/3 bg-muted/20 p-6 md:p-8 rounded-2xl border border-border/50">
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {hub.locations.map((loc, j) => (
                      <li key={j} className="flex gap-3">
                        <MapPin className="w-5 h-5 text-primary shrink-0 opacity-70" />
                        <div>
                          <div className="text-foreground font-medium text-sm">{loc.name}</div>
                          {loc.type && <div className="text-xs text-foreground/50 font-light mt-0.5">{loc.type}</div>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-primary/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">¿Listo para hacer realidad tu sueño japonés?</h2>
          <p className="text-foreground/70 text-lg mb-10 font-light">
            Agenda una llamada de descubrimiento completamente gratuita con nuestro equipo.
          </p>
          <Button size="lg" className="rounded-full text-lg px-10 py-7 shadow-2xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
            <Link href="/book-consultation">Agenda Tu Llamada de Descubrimiento</Link>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="font-serif text-3xl font-bold tracking-wider text-primary-foreground">Jeshinotabi</Link>
            <p className="text-background/70 font-light max-w-sm leading-relaxed">
              Diseñando viajes exquisitos y a medida por el corazón de Japón y Corea del Sur.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold tracking-wider uppercase text-sm text-primary">Explorar</h4>
            <ul className="space-y-2 text-background/70 font-light">
              <li><Link href="/japan-hub" className="hover:text-primary transition-colors">Destino Japón</Link></li>
              <li><Link href="/south-korea-hub" className="hover:text-primary transition-colors">Destino Corea del Sur</Link></li>
              <li><Link href="/#experiences" className="hover:text-primary transition-colors">Experiencias</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold tracking-wider uppercase text-sm text-primary">Contacto</h4>
            <ul className="space-y-2 text-background/70 font-light">
              <li>jeshinotabitravel@hotmail.com</li>
              <li>(+52) 33 3584 2694</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl mt-16 pt-8 border-t border-background/20 text-center text-sm text-background/50 font-light">
          © {new Date().getFullYear()} Jeshinotabi. Todos los derechos reservados. Experiencias de Viaje Exquisitas.
        </div>
      </footer>
    </div>
  );
}

"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { 
  ArrowRight, 
  MapPin, 
  Compass, 
  Building,
  CheckCircle2,
  Ticket,
  Train,
  Camera,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import NavbarLogo from "@/components/NavbarLogo";

export default function SouthKoreaHub() {
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
              <Link href="/#experiences" className="hover:text-primary transition-colors">Experiencias</Link>
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
            src="https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1974&auto=format&fit=crop"
            alt="South Korea Palace"
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
            Corea del Sur: Patrimonio Ancestral <br/>
            <span className="text-primary italic">se encuentra con Maravillas Modernas</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed text-shadow-md">
            Experimenta una aventura a medida diseñada hasta el último detalle. Desde el pulso de neón de Seúl hasta las tranquilas costas de la isla de Jeju.
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

      {/* ITINERARY PDF BENEFITS (Mirroring Japan setup but keeping it generic or tailored to the trip) */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-3xl p-8 md:p-12 text-center shadow-lg shadow-primary/5">
            <Star className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
            <h2 className="font-serif text-3xl mb-4 text-foreground">Tu Itinerario Guiado Personalizado</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Cada detalle está meticulosamente planeado. Recibirás un itinerario PDF diario a medida que detalla exactamente cómo aprovechar al máximo tus días en Seúl, Busan y Jeju. El lujo es tener un plan, la libertad es elegir cuándo seguirlo.
            </p>
          </div>
        </div>
      </section>

      {/* ACCOMMODATIONS */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl text-foreground">Tus Estancias y Servicios Prémium</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-light">
              Descansa en ubicaciones de primer nivel seleccionadas en Seúl, Busan y Jeju.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Hospedaje Seúl", image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1932&auto=format&fit=crop" },
              { title: "Hospedaje Busan", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1974&auto=format&fit=crop" },
              { title: "Retiro en Isla Jeju", image: "https://images.unsplash.com/photo-1590219602462-8e0c8d1fcbe2?q=80&w=2070&auto=format&fit=crop" }
            ].map((hotel, i) => (
              <Card key={i} className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                <div className="relative h-56 overflow-hidden">
                  <Image src={hotel.image} alt={hotel.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h3 className="text-white font-serif text-xl font-medium">{hotel.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-sm text-foreground/80 font-light">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Baño Privado</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Secadora y Toallas</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Limpieza Diaria</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Wifi Gratis de Alta Velocidad</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Amenidades Prémium</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CURATED EXPERIENCES (TICKETS) */}
      <section id="experiences" className="py-24 px-6 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl text-foreground">Experiencias Curadas</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-light">
              Nosotros proveemos las entradas, tú coleccionas los recuerdos. Todos estos accesos están incluidos en tu viaje.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Ticket, title: "Entrada a Lotte World", info: "Vive el 'Disney de Corea'." },
              { icon: Train, title: "Teleférico de Namsan 🚠", info: "Paseo panorámico a la cima de Namsan." },
              { icon: Camera, title: "Observatorio Torre Namsan", info: "Vistas panorámicas desde la torre." },
              { icon: Building, title: "Observatorio Seoul Sky", info: "Vistas espectaculares de la metrópolis." },
              { icon: Building, title: "Busan X the SKY", info: "Vistas al océano desde las alturas en Busan." },
              { icon: Train, title: "Haeundae Blueline 🚗", info: "Tren costero nostálgico y panorámico." },
              { icon: Camera, title: "Puente Colgante de Songdo", info: "Vistas dramáticas del acantilado sobre el agua." }
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
              Nuestros grupos regionales curados aseguran que aproveches al máximo cada destino sin sentirte apresurado.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                city: "Exploración en Seúl",
                locations: [
                  { name: "Palacio Gyeongbokgung", type: "Entrada gratis con Hanbok tradicional" },
                  { name: "Estatua del Rey Sejong", type: "Cultura" },
                  { name: "Ikseon-dong y calle cultural Insa", type: "Paseo Gratis" },
                  { name: "Bukchon Hanok village", type: "Aldea Tradicional" },
                  { name: "Torre Namsan y Ayuntamiento de Seúl", type: "Incluido/Gratis" },
                  { name: "Seoul Sky", type: "Entrada Incluida" },
                  { name: "Myeongdong", type: "Comida Callejera" },
                  { name: "Cheonggyecheon y DDP", type: "Vistas Gratis" },
                  { name: "Lotte World", type: "Parque Temático Incluido" },
                  { name: "Calle Hongdae y Gangnam", type: "Centros de Tendencias" },
                  { name: "Biblioteca Starfield y templo Bongeunsa", type: "Vistas Gratis" },
                  { name: "K star road", type: "Fans del K-Pop" },
                  { name: "Puente Banpo y Río Han", type: "Show de agua/luces Gratis" }
                ]
              },
              {
                city: "La Costa de Busan",
                locations: [
                  { name: "Playa Haeundae y The Bay 101", type: "Playas y Vistas Gratis" },
                  { name: "Templo Yonggungsa", type: "Templo junto al mar" },
                  { name: "Puente colgante de Yonggung", type: "Teleférico Incluido" },
                  { name: "Haeundae Blueline", type: "Tren Costero Incluido" },
                  { name: "Playa Guangalli y playa Songdo", type: "Gratis" },
                  { name: "Gamcheon culture village", type: "Aldea Colorida" },
                  { name: "Montaña Hwangnyeongsan", type: "Mejor vista nocturna Gratis" }
                ]
              },
              {
                city: "Escapada a la Isla Jeju",
                locations: [
                  { name: "Playa Hyeopjae", type: "Playa Gratis" },
                  { name: "Paseo costero Handam", type: "Paseo Panorámico" },
                  { name: "Aldea folclórica de Seongeup", type: "Aldea Histórica" },
                  { name: "Buzos Haenyeo", type: "Cultura/Museo" },
                  { name: "Seongsan Ilchulbong", type: "Caminata en la naturaleza" }
                ]
              }
            ].map((hub, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/3 pt-2">
                  <h3 className="font-serif text-2xl text-primary">{hub.city}</h3>
                </div>
                <div className="md:w-2/3 bg-muted/20 p-6 md:p-8 rounded-2xl border border-border/50">
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-5">
                    {hub.locations.map((loc, j) => (
                      <li key={j} className="flex gap-3">
                        <MapPin className="w-5 h-5 text-primary shrink-0 opacity-70" />
                        <div>
                          <div className="text-foreground font-medium text-sm">{loc.name}</div>
                          <div className="text-xs text-foreground/50 font-light mt-0.5">{loc.type}</div>
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
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Inicia Tu Aventura Coreana</h2>
          <p className="text-foreground/70 text-lg mb-10 font-light">
            Planifica tu viaje exclusivo hoy a través de una consulta completamente gratuita.
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

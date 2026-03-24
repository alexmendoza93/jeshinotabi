"use client";

import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Compass,
  Star,
  Heart,
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import Link from "next/link";
import NavbarLogo from "@/components/NavbarLogo";

const heroImages = [
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop", // Japan zen
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop", // Tokyo neon
  "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1170&auto=format&fit=crop", // Seoul palace
  "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1176&auto=format&fit=crop", // Mount Fuji
  "https://images.unsplash.com/photo-1525762867061-21c9fb70b15a?q=80&w=1170&auto=format&fit=crop", // Bukchon Hanok Village Korea
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <NavbarLogo />
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8 text-sm font-medium text-foreground/80">
              <a
                href="#destinations"
                className="hover:text-primary transition-colors"
              >
                Destinos
              </a>
              <a
                href="#experiences"
                className="hover:text-primary transition-colors"
              >
                Experiencias
              </a>
              <a
                href="#process"
                className="hover:text-primary transition-colors"
              >
                Cómo Funciona
              </a>
            </nav>
            <Button
              variant="default"
              size="sm"
              className="rounded-full shadow-lg shadow-primary/20"
              asChild
            >
              <Link href="/book-consultation">Agendar Consulta</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH SLIDER */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden min-h-[90vh] sm:min-h-screen">
        {/* Background Slider */}
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
            {/* Added a subtle gradient to ensure text readability */}
            <div />
            <Image
              src={src}
              alt={`Jeshinotabi Destination ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        <motion.div
          className="relative z-20 max-w-4xl mx-auto space-y-8"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight text-shadow-lg"
          >
            Viajes a medida por <br />
            <span className="text-primary-foreground italic">
              Japón y Corea del Sur
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed text-shadow-md"
          >
            Experimenta la delicada armonía entre tradiciones ancestrales y
            maravillas modernas. Tu aventura a medida, perfeccionada hasta el
            mínimo detalle.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Button
              size="lg"
              className="rounded-full text-base px-8 py-6 shadow-xl shadow-primary/20 group hover:scale-105 transition-transform duration-300"
              asChild
            >
              <Link href="/book-consultation">
                Inicia Tu Viaje
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full text-base px-8 py-6 bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 hover:text-white transition-colors duration-300"
              asChild
            >
              <a href="#destinations">Explorar Destinos</a>
            </Button>
          </motion.div>

          {/* Slider Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-2 pt-12"
          >
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentImage
                    ? "bg-primary w-6"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-muted/30 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4 mb-36">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              ¿Por qué elegir <span className="text-primary">Jeshinotabi</span>?
            </h2>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-12 text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {[
              { icon: Compass, title: "Somos especialistas en Asia" },
              { icon: Camera, title: "Itinerarios Super Instagramables" },
              { icon: MapPin, title: "Te damos la asesoría completa" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2 shadow-inner">
                  <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="max-w-[250px]">
                  <h3 className="font-serif text-2xl text-foreground">
                    {feature.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section
        id="destinations"
        className="py-24 px-3 min-h-screen flex flex-col justify-center"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Destinos Destacados
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Sumérgete en nuestros destinos diseñados meticulosamente, pensados
              para mostrar lo mejor que cada país tiene para ofrecer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
            {[
              {
                title: "Japón Clásico",
                subtitle: "Tokio - Kyoto - Osaka",
                image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/japonMix.jpeg`,
                link: "/japan-hub",
              },
              {
                title: "Corea Trendy",
                subtitle: "Seúl - Busan - Jeju",
                image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/koreaMix.jpeg`,
                link: "/south-korea-hub",
              },
              {
                title: "Japón + Corea",
                subtitle: "Aventuras combinadas",
                image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/japonKoreaMix.jpeg`,
                link: "/japan-hub",
              },
            ].map((hub, i) => (
              <div
                key={i}
                className={i === 2 ? "md:col-span-2 flex justify-center" : ""}
              >
                <Link
                  href={hub.link}
                  className={`block group w-full ${i === 2 ? "md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.25rem)]" : ""}`}
                >
                  <Card className="cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 relative h-[340px] rounded-2xl w-full">
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-500 z-10" />
                    <Image
                      src={hub.image}
                      alt={hub.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0 z-0"
                    />

                    {/* Top Header Overlay - superposed absolute with superposed transparency */}
                    <div className="absolute top-0 left-0 right-0 p-6 text-center z-20 flex flex-col items-center pt-8">
                      <h3 className="font-serif text-2xl text-white font-semibold drop-shadow-sm">
                        {hub.title}
                      </h3>
                      <div className="w-10 h-[1px] bg-white/40 my-1"></div>
                      <p className="text-white/80 text-xs font-light tracking-wide uppercase">
                        {hub.subtitle}
                      </p>
                    </div>

                    {/* Red Button Centered at Bottom over image */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
                      <Button className="bg-[#cc2d4a] hover:bg-[#cc2d4a]/90 text-white font-serif tracking-widest px-8 rounded-md shadow-md text-sm flex items-center gap-1 group/btn">
                        Ver Más{" "}
                        <span className="text-lg leading-none transition-transform group-hover/btn:translate-x-1">
                          &rsaquo;
                        </span>
                      </Button>
                    </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="process"
        className="py-24 px-6 bg-primary text-primary-foreground relative overflow-hidden min-h-screen flex flex-col justify-center"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Viaja en tres simples pasos
            </h2>
            <p className="opacity-90 max-w-2xl mx-auto text-lg font-light">
              Organizamos tu aventura de manera sencilla.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center pt-8">
            {[
              {
                step: "01",
                title: "Comunícate con nosotros",
                desc: "Agenda tu sesión de 20 min o contáctanos directamente por whatsapp",
              },
              {
                step: "02",
                title: "Organizamos tu itinerario",
                desc: "Nuestros expertos diseñan un itinerario adaptado a tus gustos.",
              },
              {
                step: "03",
                title: "Prepara tus maletas",
                desc: "Relajate y disfruta de tu viaje.",
              },
            ].map((process, i) => (
              <div key={i} className="relative p-6">
                <div className="text-6xl font-serif text-primary-foreground/20 italic mb-4">
                  {process.step}
                </div>
                <h3 className="font-serif text-2xl mb-3">{process.title}</h3>
                <p className="font-light opacity-90 leading-relaxed">
                  {process.desc}
                </p>
                {i < 2 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 opacity-30 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA SECTION */}
      <section className="py-24 px-6 bg-primary/5 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground">
              Síguenos en las Redes
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto font-light">
              Vive el viaje en directo. Encuentra inspiración diaria, consejos
              de viaje y vistas mágicas de Japón y Corea del Sur.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full shadow-sm bg-background/50 hover:bg-background"
                asChild
              >
                <a
                  href="https://instagram.com/jeshinotabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-primary" /> @jeshinotabi
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full shadow-sm bg-background/50 hover:bg-background"
                asChild
              >
                <a
                  href="https://tiktok.com/@jeshinotabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <TikTokIcon className="w-4 h-4 fill-primary" /> @jeshinotabi
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-primary/5 min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Lo que dicen nuestros viajeros
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {[
              {
                text: "Cada momento estuvo perfectamente coordinado. De la ceremonia de té privada en Kioto a los mercados nocturnos de Seúl, Jeshinotabi superó nuestras expectativas.",
                author: "Elena y Marcos",
                details: "Viajaron en Oct 2025 • Japón & Corea",
                initials: "EM",
              },
              {
                text: "La atención al detalle fue increíble. Tener todo organizado sin sentirnos apresurados nos permitió disfrutar cada templo y rincón de Tokio con total calma y armonía.",
                author: "Alejandro G.",
                details: "Viajó en Nov 2025 • Japón Clásico",
                initials: "AG",
              },
              {
                text: "Viajar con niños a Corea parecía un reto, pero el equipo de Jeshinotabi diseñó un itinerario tan ameno y fluido que todos la pasamos de maravilla. ¡Excepcional!",
                author: "Sofía y Familia",
                details: "Viajaron en Ene 2026 • Corea Trendy",
                initials: "SF",
              },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="bg-background/60 backdrop-blur-md border border-border/40 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 text-left h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 text-[#f59e0b] mb-4">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                    </div>
                    <QuoteIcon className="w-8 h-8 text-primary/20 mb-4" />
                    <p className="text-foreground/80 font-light leading-relaxed mb-6 italic">
                      "{t.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-border/30 pt-5 mt-auto">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-serif text-base text-foreground font-semibold">
                        {t.author}
                      </div>
                      <div className="text-xs text-foreground/60">
                        {t.details}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="pt-12 border-t border-border/50 flex flex-col items-center justify-center">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">
              ¿Listo para empezar?
            </h2>
            <Button
              size="lg"
              className="rounded-full text-lg px-10 py-7 shadow-2xl shadow-primary/20 hover:scale-105 transition-transform"
              asChild
            >
              <Link href="/book-consultation">
                Agenda Tu Llamada de Descubrimiento
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-foreground text-background py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-4">
            <div className="font-serif text-3xl font-bold tracking-wider text-primary-foreground">
              Jeshinotabi
            </div>
            <p className="text-background/70 font-light max-w-sm leading-relaxed">
              Diseñando viajes exquisitos y a medida por el corazón de Japón y
              Corea del Sur.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://instagram.com/jeshinotabi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@jeshinotabi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
              >
                <TikTokIcon className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold tracking-wider uppercase text-sm text-primary">
              Explorar
            </h4>
            <ul className="space-y-2 text-background/70 font-light">
              <li>
                <Link
                  href="/japan-hub"
                  className="hover:text-primary transition-colors"
                >
                  Destino Japón
                </Link>
              </li>
              <li>
                <Link
                  href="/south-korea-hub"
                  className="hover:text-primary transition-colors"
                >
                  Destino Corea del Sur
                </Link>
              </li>
              <li>
                <Link
                  href="#experiences"
                  className="hover:text-primary transition-colors"
                >
                  Experiencias
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  Acerca de
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold tracking-wider uppercase text-sm text-primary">
              Contacto
            </h4>
            <ul className="space-y-2 text-background/70 font-light">
              <li>jeshinotabitravel@hotmail.com</li>
              <li>(+52) 33 3584 2694</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl mt-16 pt-8 border-t border-background/20 text-center text-sm text-background/50 font-light">
          © {new Date().getFullYear()} Jeshinotabi. Todos los derechos
          reservados. Experiencias de Viaje Exquisitas.
        </div>
      </footer>
    </div>
  );
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

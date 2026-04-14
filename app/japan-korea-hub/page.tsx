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
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import NavbarLogo from "@/components/NavbarLogo";

export default function JapanKoreaHub() {
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
              <Link
                href="/#destinations"
                className="hover:text-primary transition-colors"
              >
                Destinos
              </Link>
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

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden min-h-[90vh] sm:min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
          <Image
            src="https://images.unsplash.com/photo-1604928141064-207cea6f571f?q=80&w=1228&auto=format"
            alt="Japan and South Korea Landscape"
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
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight text-shadow-lg"
          >
            Japón & Corea del Sur: <br />
            <span className="text-primary italic">La Odisea a Medida</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed text-shadow-md"
          >
            Combina la delicada armonía de Japón con el patrimonio ancestral y
            la vitalidad de Corea del Sur. Un itinerario que conecta lo mejor de
            ambos mundos.
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
                Consultar Sobre Este Viaje
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ACCOMMODATIONS */}
      <section className="py-24 px-6 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl text-foreground">
              Tus Hospedajes Prémium en Ambos Países
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-light">
              Desde el corazón de Tokio y Osaka, hasta las vibrantes ubicaciones
              en Seúl, Busan y la tranquila Jeju.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tokyo Grand Residence",
                city: "Japón",
                image:
                  "https://www.tokyo.grandnikko.com/eng/files/images/home/img_rooms.webp",
              },
              {
                title: "Osaka Imperial Suite",
                city: "Japón",
                image:
                  "https://www.imperialhotel.co.jp/sites/default/files/img/2023-11/51121b458ca07780def1aa16132468fe.webp",
              },
              {
                title: "Hospedaje Seúl",
                city: "Corea",
                image:
                  "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1932&auto=format&fit=crop",
              },
              {
                title: "Hospedaje Busan",
                city: "Corea",
                image:
                  "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1974&auto=format&fit=crop",
              },
              {
                title: "Retiro en Isla Jeju*",
                city: "Corea (>21 días)",
                image:
                  "https://st.perplexity.ai/estatic/0123e9b222f2dfb3635134e625f17c27a77de4c677b5d0e565c515c919925208b5a7a5b4df31beb3d4edf60811368809ecce59639e0f3daa822402dbc67eea0f9969308fc16c6497e53bdb559e7ff8ad8ac9b7355cb00caacb1fe61bf4efde4daf805b391bad3745a6c7e00a8706c696d642907330ba46fcee98358ed584c5bb64e9490989a82ca10f6522568c5d0bc765ab3995f57d2419ecf43a989d569e1dd8fcbb1d016abf2ec2c05e18045cf98df877550ff8c5bf01518c8310f250dbb9",
              },
            ].map((hotel, i) => (
              <Card
                key={i}
                className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-border/50">
                    {hotel.city}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <h3 className="text-white font-serif text-xl font-medium">
                      {hotel.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-sm text-foreground/80 font-light">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> Baño
                      Privado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> Secadora
                      y Toallas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> Limpieza
                      Diaria
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> Wifi
                      Alta Velocidad
                    </li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-foreground/60 italic">
            * El retiro en la Isla Jeju está disponible exclusivamente para
            itinerarios de más de 21 días.
          </div>
        </div>
      </section>

      {/* CURATED EXPERIENCES */}
      <section
        id="experiences"
        className="py-24 px-6 bg-primary/5 min-h-screen flex flex-col justify-center"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl text-foreground">
              Experiencias Curadas en Japón y Corea
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-light">
              Entradas y tránsitos incluidos para que sólo te preocupes por
              disfrutar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Train,
                title: "Tren Bala Shinkansen",
                info: "Experiencia en tren bala Tokio ⇆ Osaka.",
                image:
                  "https://tkp.travel/wp-content/uploads/2024/11/TREN-BALA.jpg",
                country: "Japón",
              },
              {
                icon: Ticket,
                title: "TeamLab Planets",
                info: "Entrada al arte inmersivo en Tokio.",
                image: "https://www.japan-guide.com/ad/g/teamlab_00.jpg",
                country: "Japón",
              },
              {
                icon: Ticket,
                title: "Universal Studios Japan",
                info: "Entrada estándar incluida en Osaka.",
                image:
                  "https://cdn-imgix.headout.com/media/images/f92e5c2effbd914fea2f9700d604bacf-10621-japan-universal-studios-japan-1-day-pass-04.jpg",
                country: "Japón",
              },
              {
                icon: Ticket,
                title: "Disney Tokyo",
                info: "Boleto de acceso para un día incluido.",
                image:
                  "https://cms-image-bucket-productionv3-ap-northeast-1-a7d2.s3.ap-northeast-1.amazonaws.com/images/4/0/2/2/46762204-4-eng-GB/Cropped-1698673099N%20Disney%20Halloween.jpg",
                country: "Japón",
              },
              {
                icon: Ticket,
                title: "Disney Sea Tokyo",
                info: "Acceso al parque temático incluido.",
                image:
                  "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/13/cc/e6/ca.jpg",
                country: "Japón",
              },
              {
                icon: Ticket,
                title: "Observatorio Shibuya Sky",
                info: "Vistas espectaculares desde el rooftop.",
                image:
                  "https://en.japantravel.com/photo/poi-98-214195/1200x630/tokyo-shibuya-sky-214195.jpg",
                country: "Japón",
              },
              {
                icon: Building,
                title: "Observatorio Seoul Sky",
                info: "Vistas espectaculares de la metrópolis.",
                image:
                  "https://staybook.in/_next/image?url=https%3A%2F%2Fcdn-imgix.headout.com%2Fmedia%2Fimages%2F523a612c02e41c8bbcfea7e6576e99ca-11957-seoul-lotte-world-tower-seoul-sky-admission-07.jpg%3Fw%3D1120%26h%3D630%26crop%3Dfaces%26auto%3Dcompress%252Cformat%26fit%3Dmin&w=1080&q=75",
                country: "Corea",
              },
              {
                icon: Ticket,
                title: "Entrada a Lotte World",
                info: "Vive el 'Disney de Corea' en Seúl.",
                image:
                  "https://www.pelago.com/img/products/KR-South%20Korea/lotte-world-theme-park/4cf217de-22b1-4d57-baf5-6bedbb89bfc7_lotte-world-adventure-seoul-ticket.jpg",
                country: "Corea",
              },
              {
                icon: Train,
                title: "Haeundae Blueline",
                info: "Tren costero panorámico en Busan.",
                image:
                  "https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/iewij5wcrmvdefurbnuv/Haeundae%20Blueline%20Park%20Ticket%20in%20Busan.jpg",
                country: "Corea",
              },
              {
                icon: Train,
                title: "Teleférico de Namsan",
                info: "Paseo panorámico a la cima de Namsan.",
                image:
                  "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/16/16/ba/d4.jpg",
                country: "Corea",
              },
              {
                icon: Camera,
                title: "Observatorio Torre Namsan",
                info: "Vistas panorámicas desde la torre.",
                image:
                  "https://cdn-imgix.headout.com/media/images/70f01e3b-233e-4592-901b-00744d54b607-1747212946902-274256.png",
                country: "Corea",
              },
              {
                icon: Building,
                title: "Busan X the SKY",
                info: "Vistas al océano desde las alturas en Busan.",
                image:
                  "https://d3h30waly5w5yx.cloudfront.net/images/tour/pictures/thumb_xthesky3.jpg",
                country: "Corea",
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="group overflow-hidden bg-background rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 hover:border-primary/30 flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium border border-border/50">
                    {exp.country}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="font-serif text-lg font-medium text-foreground mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-foreground/70 font-light leading-relaxed">
                    {exp.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY BREAKDOWN */}
      <section className="py-24 px-6 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl text-foreground">
              Desglose de Tu Viaje Combinado
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-light">
              Combina las tres principales urbes de Japón con los tesoros de
              Seúl y Busan.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                city: "Destino Tokio (Japón)",
                locations: [
                  {
                    name: "Tokyo Sky Tree y Torre de Tokio",
                    type: "Arquitectura (Gratis)",
                  },
                  { name: "Asakusa y Shinjuku", type: "Distritos" },
                  {
                    name: "Cruce de Shibuya y Estatua de Hachiko",
                    type: "Gratis",
                  },
                  { name: "Tokyo Disney y Disney Sea", type: "Incluido" },
                  { name: "TeamLab Planets", type: "Incluido" },
                ],
              },
              {
                city: "Atracciones en Kioto (Japón)",
                locations: [
                  { name: "Bosque de Bambú de Arashiyama", type: "Gratis" },
                  { name: "Santuario Fushimi Inari", type: "Gratis" },
                  { name: "Gion (Distrito Geisha)", type: "Gratis" },
                  { name: "Kinkaku-ji (Pabellón dorado)", type: "Templo" },
                ],
              },
              {
                city: "Destino Osaka (Japón)",
                locations: [
                  { name: "Castillo de Osaka", type: "Gratis por fuera" },
                  { name: "Universal Studios Japan", type: "Incluido" },
                  { name: "Namba y Dotonbori", type: "Distrito Gastronómico" },
                ],
              },
              {
                city: "Exploración en Seúl (Corea)",
                locations: [
                  {
                    name: "Palacio Gyeongbokgung",
                    type: "Entrada gratis con Hanbok",
                  },
                  {
                    name: "Torre Namsan y Ayuntamiento de Seúl",
                    type: "Incluido/Gratis",
                  },
                  { name: "Seoul Sky", type: "Entrada Incluida" },
                  { name: "Myeongdong", type: "Comida Callejera" },
                  { name: "Lotte World", type: "Parque Temático Incluido" },
                ],
              },
              {
                city: "La Costa de Busan (Corea)",
                locations: [
                  {
                    name: "Playa Haeundae y The Bay 101",
                    type: "Playas y Vistas Gratis",
                  },
                  { name: "Templo Yonggungsa", type: "Templo junto al mar" },
                  { name: "Haeundae Blueline", type: "Tren Costero Incluido" },
                  { name: "Gamcheon culture village", type: "Aldea Colorida" },
                ],
              },
              {
                city: "Escapada a la Isla Jeju (Corea)",
                note: "Disponible para itinerarios mayores a 21 días",
                locations: [
                  { name: "Playa Hyeopjae", type: "Playa Gratis" },
                  {
                    name: "Aldea folclórica de Seongeup",
                    type: "Aldea Histórica",
                  },
                  { name: "Buzos Haenyeo", type: "Cultura/Museo" },
                  { name: "Seongsan Ilchulbong", type: "Caminata" },
                ],
              },
            ].map((hub, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="md:w-1/3 pt-2">
                  <h3 className="font-serif text-2xl text-primary">
                    {hub.city}
                  </h3>
                  {hub.note && (
                    <p className="text-primary/70 text-sm italic mt-2">
                      * {hub.note}
                    </p>
                  )}
                </div>
                <div className="md:w-2/3 bg-muted/20 p-6 md:p-8 rounded-2xl border border-border/50">
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-5">
                    {hub.locations.map((loc, j) => (
                      <li key={j} className="flex gap-3">
                        <MapPin className="w-5 h-5 text-primary shrink-0 opacity-70" />
                        <div>
                          <div className="text-foreground font-medium text-sm">
                            {loc.name}
                          </div>
                          {loc.type && (
                            <div className="text-xs text-foreground/50 font-light mt-0.5">
                              {loc.type}
                            </div>
                          )}
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
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center bg-primary/5 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Inicia Tu Experiencia Binacional
          </h2>
          <p className="text-foreground/70 text-lg mb-10 font-light">
            Planifica tu gran viaje a Japón y Corea. Agenda una llamada gratuita
            con nuestro equipo.
          </p>
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
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="font-serif text-3xl font-bold tracking-wider text-primary-foreground"
            >
              Jeshinotabi
            </Link>
            <p className="text-background/70 font-light max-w-sm leading-relaxed">
              Diseñando viajes asombrosos y a medida por el corazón de Japón y
              Corea del Sur.
            </p>
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
                  href="/japan-korea-hub"
                  className="hover:text-primary transition-colors"
                >
                  Destino Japón y Corea del Sur
                </Link>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=523335842694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  ¿Te interesa ser agente de viajes?
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold tracking-wider uppercase text-sm text-primary">
              Contacto
            </h4>
            <ul className="space-y-2 text-background/70 font-light">
              <li>jeshinotabitravel@hotmail.com</li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=523335842694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" /> (+52) 33 3584 2694
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl mt-16 pt-8 border-t border-background/20 text-center text-sm text-background/50 font-light">
          © {new Date().getFullYear()} Jeshinotabi. Todos los derechos
          reservados. Experiencias de Viaje Asombrosas.
        </div>
      </footer>
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

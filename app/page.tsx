"use client";

import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Compass, Star, Heart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState, useEffect } from "react";
import Link from "next/link";

const heroImages = [
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop", // Japan zen
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop", // Tokyo neon
  "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1974&auto=format&fit=crop", // Seoul palace
  "https://images.unsplash.com/photo-1623916962453-90d5757d5423?q=80&w=2070&auto=format&fit=crop", // Mount Fuji
  "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2070&auto=format&fit=crop", // Bukchon Hanok Village Korea
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
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold text-primary tracking-wider">Jeshinotabi</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-foreground/80">
            <a href="#destinations" className="hover:text-primary transition-colors">Destinations</a>
            <a href="#experiences" className="hover:text-primary transition-colors">Experiences</a>
            <a href="#process" className="hover:text-primary transition-colors">How it Works</a>
          </nav>
          <Button variant="default" size="sm" className="rounded-full shadow-lg shadow-primary/20">
            Book Consultation
          </Button>
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
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
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
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/30 backdrop-blur-md text-white border border-white/20 text-sm font-medium mb-4 shadow-xl">
            <Compass className="w-5 h-5 text-primary" />
            <span className="tracking-wide uppercase text-xs">Curated Luxury Travel</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-white leading-[1.1] tracking-tight text-shadow-lg">
            Tailor-made journeys through <br/>
            <span className="text-primary-foreground italic">Japan & South Korea</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed text-shadow-md">
            Experience the delicate harmony of ancient traditions and modern wonders. Your bespoke adventure, perfected to the smallest detail.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="rounded-full text-base px-8 py-6 shadow-xl shadow-primary/20 group hover:scale-105 transition-transform duration-300">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base px-8 py-6 bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 hover:text-white transition-colors duration-300">
              Explore Destinations
            </Button>
          </motion.div>

          {/* Slider Indicators */}
          <motion.div variants={fadeInUp} className="flex justify-center gap-2 pt-12">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentImage ? "bg-primary w-6" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="grid md:grid-cols-3 gap-12 text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {[
              { icon: MapPin, title: "Local Expertise", desc: "Unlock hidden gems and exclusive access curated by our regional specialists." },
              { icon: Star, title: "Luxury Concierge", desc: "Seamless logistics, premium accommodations, and 24/7 dedicated support." },
              { icon: Heart, title: "Authentic Experiences", desc: "Connect deeply with the culture through immersive, private encounters." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2 shadow-inner">
                  <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section id="destinations" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Featured Hubs</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
              Immerse yourself in our meticulously crafted regional hubs, designed to showcase the very best each country has to offer.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Japan Hub",
                desc: "From the serene temples of Kyoto to the neon pulse of Tokyo. Savour omakase sushi and rest in traditional ryokans.",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
                tags: ["Culture", "Gastronomy", "Nature"],
                link: "/japan-hub"
              },
              {
                title: "South Korea Hub",
                desc: "Discover the dynamic energy of Seoul and the tranquil beauty of Jeju Island. Royal palaces meet cutting-edge trends.",
                image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=1974&auto=format&fit=crop",
                tags: ["K-Trends", "History", "Wellness"],
                link: "/south-korea-hub"
              }
            ].map((hub, i) => (
              <Link href={hub.link} key={i} className="block group">
                <Card className="cursor-pointer overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image 
                      src={hub.image} 
                      alt={hub.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                      {hub.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-xs font-medium text-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <CardTitle className="mb-3 text-3xl group-hover:text-primary transition-colors">{hub.title}</CardTitle>
                    <CardDescription className="text-base text-foreground/80 font-light mb-6">
                      {hub.desc}
                    </CardDescription>
                    <div className="flex items-center text-primary font-medium text-sm group-hover:underline underline-offset-4">
                      Explore Hub <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="py-24 px-6 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Your Seamless Journey</h2>
            <p className="opacity-90 max-w-2xl mx-auto text-lg font-light">We handle every detail, so you can focus on creating memories.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center pt-8">
            {[
              { step: "01", title: "Consultation", desc: "We learn about your preferences, travel style, and dreams." },
              { step: "02", title: "Curation", desc: "Our experts design a bespoke itinerary tailored perfectly to you." },
              { step: "03", title: "Experience", desc: "Travel with peace of mind, supported by our local concierge." }
            ].map((process, i) => (
              <div key={i} className="relative p-6">
                <div className="text-6xl font-serif text-primary-foreground/20 italic mb-4">{process.step}</div>
                <h3 className="font-serif text-2xl mb-3">{process.title}</h3>
                <p className="font-light opacity-90 leading-relaxed">{process.desc}</p>
                {i < 2 && <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 opacity-30 transform -translate-y-1/2" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CTA */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-6">
            <QuoteIcon className="w-12 h-12 text-primary/30 mx-auto" />
            <p className="font-serif text-2xl md:text-4xl text-foreground leading-relaxed italic">
              "Every moment was orchestrated perfectly. From the private tea ceremony in Kyoto to the vibrant night markets of Seoul, Jeshinotabi delivered beyond our wildest expectations."
            </p>
            <div className="text-foreground/60 font-medium tracking-widest uppercase text-sm">
              — Elena & Marcos, Traveled Oct 2025
            </div>
          </div>
          
          <div className="pt-12 border-t border-border/50">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to begin?</h2>
            <Button size="lg" className="rounded-full text-lg px-10 py-7 shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
              Schedule Your Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-16 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-4">
            <div className="font-serif text-3xl font-bold tracking-wider text-primary-foreground">Jeshinotabi</div>
            <p className="text-background/70 font-light max-w-sm leading-relaxed">
              Crafting exquisite, tailor-made journeys through the heart of Japan and South Korea.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold tracking-wider uppercase text-sm text-primary">Explore</h4>
            <ul className="space-y-2 text-background/70 font-light">
              <li><Link href="/japan-hub" className="hover:text-primary transition-colors">Japan Hub</Link></li>
              <li><Link href="/south-korea-hub" className="hover:text-primary transition-colors">South Korea Hub</Link></li>
              <li><Link href="#experiences" className="hover:text-primary transition-colors">Experiences</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold tracking-wider uppercase text-sm text-primary">Contact</h4>
            <ul className="space-y-2 text-background/70 font-light">
              <li>hello@jeshinotabi.com</li>
              <li>+1 (800) 123-4567</li>
              <li>New York | Tokyo | Seoul</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto max-w-6xl mt-16 pt-8 border-t border-background/20 text-center text-sm text-background/50 font-light">
          © {new Date().getFullYear()} Jeshinotabi. All rights reserved. Exquisite Travel Experiences.
        </div>
      </footer>
    </div>
  );
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
    </svg>
  );
}

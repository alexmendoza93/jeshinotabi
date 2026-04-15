"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { WhatsAppIcon, TikTokIcon } from "./Icons";


export default function Footer() {
  return (
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
            <li>jeshinotabitravel@gmail.com</li>
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
  );
}



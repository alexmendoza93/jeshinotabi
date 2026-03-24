"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavbarLogo() {
  const pathname = usePathname();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link 
      href="/" 
      onClick={handleScrollToTop} 
      className="flex items-center gap-3 group"
    >
      <motion.div 
        className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image 
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/jeshinotabi_img.jpeg`} 
          alt="Logo Jeshinotabi" 
          width={40} 
          height={40} 
          className="object-cover"
        />
      </motion.div>
      <span className="font-serif text-2xl font-bold text-primary tracking-wider group-hover:text-primary/90 transition-colors">
        Jeshinotabi
      </span>
    </Link>
  );
}

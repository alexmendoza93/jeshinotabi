"use client";

import { useEffect } from "react";

export default function WhatsAppRedirect() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=523335842694";

  useEffect(() => {
    window.location.href = whatsappUrl;
  }, []);

  return (
    <html>
      <head>
        <title>Redirigiendo a WhatsApp...</title>
        <meta http-equiv="refresh" content={`0;url=${whatsappUrl}`} />
      </head>
      <body className="flex items-center justify-center min-h-screen bg-[#0A0A0A] text-white font-sans">
        <div className="text-center space-y-4 p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <h1 className="text-2xl font-semibold">Redirigiendo a WhatsApp</h1>
          <p className="text-gray-400">
            Si no eres redirigido automáticamente,{" "}
            <a 
              href={whatsappUrl} 
              className="text-white underline hover:text-gray-300 transition-colors"
            >
              haz clic aquí
            </a>.
          </p>
        </div>
      </body>
    </html>
  );
}

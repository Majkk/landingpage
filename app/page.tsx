'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-foreground">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        .glimmer-card {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .glimmer-card::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .glimmer-pill {
          position: relative;
          background: rgb(23, 23, 23);
          border-radius: 9999px;
          overflow: hidden;
        }
        
        .glimmer-pill::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(236, 72, 153, 0.03),
            rgba(236, 72, 153, 0.06),
            rgba(236, 72, 153, 0.03),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          top: 85%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140%;
          height: 600px;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.03) 35%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          filter: blur(50px);
        }

        .scroll-animation {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .scroll-delay-1 { transition-delay: 0.1s; }
        .scroll-delay-2 { transition-delay: 0.2s; }
        .scroll-delay-3 { transition-delay: 0.3s; }
      `}</style>

      {/* Navigation */}
      <header className="flex items-center justify-between py-4 px-6 border-b border-neutral-800/50">
        <Link href="/" className="text-lg font-semibold">
          Neualtwil Quartier IT Support
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <Link href="tel:+41712345678">+41 71 234 56 78</Link>
          </Button>
          <Button size="sm">
            Termin Buchen
          </Button>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-6 relative">
          <div className="hero-glow" />
          <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-3 py-1 text-sm text-neutral-400 mb-8 glimmer-pill fade-in">
              <span>Professioneller IT-Support in Neualtwil</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight fade-in delay-1">
              Experten IT-Support<br />Zu Ihren Diensten
            </h1>
            <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto fade-in delay-2">
              Windows, Mac, Mobile Geräte, Drucker & Netzwerke.<br />
              Professioneller IT-Support für Privat und Kleinunternehmen.
            </p>
            <div className="fade-in delay-3">
              <Button size="lg" className="rounded-full">
                Termin Vereinbaren
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 scroll-animation">Unsere Dienstleistungen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Windows & Mac",
                  description: "Experten-Support für alle Computer-Probleme",
                  icon: "💻"
                },
                {
                  title: "Handy & Tablets",
                  description: "iOS und Android Geräte-Support",
                  icon: "📱"
                },
                {
                  title: "Drucker-Einrichtung",
                  description: "Installation und Fehlerbehebung",
                  icon: "🖨️"
                },
                {
                  title: "Netzwerklösungen",
                  description: "WLAN und Netzwerk-Optimierung",
                  icon: "🌐"
                },
                {
                  title: "Sicherheit",
                  description: "Schutz Ihrer digitalen Werte",
                  icon: "🔒"
                },
                {
                  title: "Web-Hosting",
                  description: "Zuverlässige Hosting-Lösungen",
                  icon: "☁️"
                },
                {
                  title: "Webseiten-Entwicklung",
                  description: "Individuelle Website-Erstellung",
                  icon: "🎨"
                },
                {
                  title: "IT-Beratung",
                  description: "Professionelle technische Beratung",
                  icon: "💡"
                }
              ].map((service, index) => (
                <div 
                  key={service.title}
                  className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors scroll-animation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-neutral-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 px-6 border-t border-neutral-800">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Working Hours */}
              <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 scroll-animation">
                <div className="text-2xl mb-6">⏰</div>
                <h3 className="text-xl font-semibold mb-4">Öffnungszeiten</h3>
                <ul className="space-y-2 text-neutral-400">
                  <li className="flex justify-between">
                    <span>Montag - Freitag</span>
                    <span>8:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samstag</span>
                    <span>9:00 - 16:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sonntag</span>
                    <span>Nach Vereinbarung</span>
                  </li>
                  <li className="flex justify-between text-green-500">
                    <span>Notfall-Support</span>
                    <span>24/7</span>
                  </li>
                </ul>
              </div>

              {/* Location */}
              <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 scroll-animation">
                <div className="text-2xl mb-6">📍</div>
                <h3 className="text-xl font-semibold mb-4">Standort</h3>
                <address className="not-italic text-neutral-400">
                  <p>Hauptstrasse 123</p>
                  <p>9240 Neualtwil</p>
                  <p>Schweiz</p>
                </address>
              </div>

              {/* Contact */}
              <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800 scroll-animation">
                <div className="text-2xl mb-6">📞</div>
                <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
                <div className="space-y-2 text-neutral-400">
                  <p>Telefon: +41 71 234 56 78</p>
                  <p>E-Mail: support@neualtwil-it.ch</p>
                  <p>WhatsApp: +41 71 234 56 78</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 border-t border-neutral-800/50">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-400">
            © 2024 Neualtwil Quartier IT Support. Alle Rechte vorbehalten.
          </div>
          <div className="text-sm text-neutral-400">
            CHE-123.456.789 | support@neualtwil-it.ch
          </div>
        </div>
      </footer>
    </div>
  )
}
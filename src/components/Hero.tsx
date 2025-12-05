import { Phone, MapPin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Hero() {
  const t = useTranslation();

  return (
    <div className="relative bg-gradient-to-br from-[#1B3A5F] via-[#2a4a6f] to-slate-900 text-white overflow-hidden min-h-screen flex items-center">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/luxury-sports-car-wheels-close-up-dramatic-lightin.jpg')",
          backgroundBlendMode: 'overlay'
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#1B3A5F]/90 via-[#1B3A5F]/70 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 py-32 md:py-40 mt-20">
        <div className="max-w-4xl">
          <div className="inline-block bg-[#E31E24]/20 backdrop-blur-sm border border-[#E31E24]/30 rounded-full px-6 py-3 mb-8">
            <span className="text-[#E31E24] text-sm font-bold">📍 {t.hero.location}</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t.hero.title}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] to-white">
              {t.hero.titleHighlight}
            </span>
          </h2>

          <p className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="bg-[#E31E24] text-white px-8 py-4 rounded-lg hover:bg-[#c41820] transition-all transform hover:scale-105 font-bold text-center shadow-lg shadow-[#E31E24]/30"
            >
              {t.hero.bookAppointment}
            </a>
            <a
              href="tel:+16172821000"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all font-bold text-center flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>{t.hero.phone}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#E31E24]" />
              <span className="font-semibold">{t.hero.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">{t.hero.support247}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}

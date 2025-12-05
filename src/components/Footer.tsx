import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-br from-[#1B3A5F] via-slate-800 to-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#E31E24] p-2 rounded-lg">
                <img src="/D&L logo svg.svg" alt="D&L Auto Logo" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">D&L Auto</h3>
                <p className="text-xs text-gray-400">Xưởng Sửa Chữa Ô Tô</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#E31E24] rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#E31E24] rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t.footer.servicesTitle}</h4>
            <ul className="space-y-3">
              {t.footer.services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-[#E31E24] transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#E31E24] rounded-full group-hover:scale-150 transition-transform"></span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t.footer.quickLinksTitle}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#E31E24] transition-colors flex items-center space-x-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#E31E24] rounded-full group-hover:scale-150 transition-transform"></span>
                  <span>{t.footer.quickLinks.home}</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#E31E24] transition-colors flex items-center space-x-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#E31E24] rounded-full group-hover:scale-150 transition-transform"></span>
                  <span>{t.footer.quickLinks.services}</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#E31E24] transition-colors flex items-center space-x-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#E31E24] rounded-full group-hover:scale-150 transition-transform"></span>
                  <span>{t.footer.quickLinks.about}</span>
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-[#E31E24] transition-colors flex items-center space-x-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#E31E24] rounded-full group-hover:scale-150 transition-transform"></span>
                  <span>{t.footer.quickLinks.testimonials}</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#E31E24] transition-colors flex items-center space-x-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-[#E31E24] rounded-full group-hover:scale-150 transition-transform"></span>
                  <span>{t.footer.quickLinks.contact}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{t.footer.contactTitle}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-400 group hover:text-white transition-colors">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-[#E31E24]" />
                <div>
                  <div>1856 Dorchester Ave</div>
                  <div>780 Blue Hill Ave</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 group hover:text-white transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1 text-[#E31E24]" />
                <div>
                  <a href="tel:+18579993979" className="block hover:text-[#E31E24]">(857) 999-3979 (Nguyệt Anh)</a>
                  <a href="tel:+18575443757" className="block hover:text-[#E31E24]">(857) 544-3757 (Phương Hoàng)</a>
                  <a href="tel:+16176186789" className="block hover:text-[#E31E24]">(617) 618-6789</a>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 group hover:text-white transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#E31E24]" />
                <a href="mailto:info@dlautoboston.com">info@dlautoboston.com</a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="text-sm font-semibold mb-2">{t.footer.hoursTitle}</div>
              <div className="text-sm text-gray-400">
                <div>{t.footer.hoursLine1}</div>
                <div>{t.footer.hoursLine2}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {t.footer.copyright}
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#E31E24] transition-colors">{t.footer.privacyPolicy}</a>
              <a href="#" className="hover:text-[#E31E24] transition-colors">{t.footer.terms}</a>
              <a href="#" className="hover:text-[#E31E24] transition-colors">{t.footer.warranty}</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-[#E31E24] to-[#1B3A5F] px-6 py-3 rounded-full">
            <p className="text-white text-sm font-semibold">
              {t.footer.communityMessage}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

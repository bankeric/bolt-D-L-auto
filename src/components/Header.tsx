import { useState, useEffect } from 'react';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  const languages = [
    { code: 'en' as Language, label: 'English', flag: '🇺🇸' },
    { code: 'vi' as Language, label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'es' as Language, label: 'Español', flag: '🇪🇸' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/ChatGPT Image Nov 20, 2025, 12_29_35 AM.png"
              alt="D&L Auto Logo"
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm"
            >
              {t.nav.services}
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm"
            >
              {t.nav.about}
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm"
            >
              {t.nav.testimonials}
            </a>
            <a
              href="#faq"
              className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm"
            >
              {t.nav.faq}
            </a>

            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-[#1B3A5F] to-[#2a4a6f] text-white rounded-lg hover:from-[#153049] hover:to-[#1f3554] transition-all transform hover:scale-105 font-semibold shadow-md text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage?.flag}</span>
                <span>{currentLanguage?.label}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                        language === lang.code ? 'bg-[#E31E24]/10 text-[#E31E24] font-bold' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:+18579993979"
              className="bg-[#E31E24] text-white px-5 py-2.5 rounded-lg hover:bg-[#c41820] transition-all transform hover:scale-105 font-semibold flex items-center space-x-2 shadow-md text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>(857) 999-3979</span>
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-[#1B3A5F] to-[#2a4a6f] text-white rounded-lg font-semibold text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage?.flag}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 transition-colors text-sm ${
                        language === lang.code ? 'bg-[#E31E24]/10 text-[#E31E24] font-bold' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:+18579993979"
              className="bg-[#E31E24] text-white px-4 py-2 rounded-lg hover:bg-[#c41820] transition-all font-semibold flex items-center space-x-2 text-sm"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-[#E31E24] p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <a
                href="#services"
                onClick={handleLinkClick}
                className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm py-2"
              >
                {t.nav.services}
              </a>
              <a
                href="#about"
                onClick={handleLinkClick}
                className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm py-2"
              >
                {t.nav.about}
              </a>
              <a
                href="#testimonials"
                onClick={handleLinkClick}
                className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm py-2"
              >
                {t.nav.testimonials}
              </a>
              <a
                href="#faq"
                onClick={handleLinkClick}
                className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm py-2"
              >
                {t.nav.faq}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

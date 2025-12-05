import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              Dịch Vụ
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm"
            >
              Về Chúng Tôi
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm"
            >
              Đánh Giá
            </a>
            <a
              href="#faq"
              className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm"
            >
              FAQ
            </a>
            <a
              href="tel:+18579993979"
              className="bg-[#E31E24] text-white px-5 py-2.5 rounded-lg hover:bg-[#c41820] transition-all transform hover:scale-105 font-semibold flex items-center space-x-2 shadow-md text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>(857) 999-3979</span>
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <a
              href="tel:+18579993979"
              className="bg-[#E31E24] text-white px-4 py-2 rounded-lg hover:bg-[#c41820] transition-all font-semibold flex items-center space-x-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>(857) 999-3979</span>
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
                Dịch Vụ
              </a>
              <a
                href="#about"
                onClick={handleLinkClick}
                className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm py-2"
              >
                Về Chúng Tôi
              </a>
              <a
                href="#testimonials"
                onClick={handleLinkClick}
                className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm py-2"
              >
                Đánh Giá
              </a>
              <a
                href="#faq"
                onClick={handleLinkClick}
                className="text-gray-800 hover:text-[#E31E24] transition-colors font-medium text-sm py-2"
              >
                FAQ
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

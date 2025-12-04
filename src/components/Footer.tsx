import { MapPin, Phone, Mail, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const services = [
    'Sửa xe chất lượng - Làm xe CŨ như MỚI',
    'Giải quyết Bảo Hiểm & Accident',
    'Làm Inspection (tiếng Việt)',
    'Xe Rental cho khách',
    'Xe Tow 24/7',
    'Chăm sóc khách hàng tận tâm'
  ];

  const quickLinks = [
    { name: 'Trang Chủ', href: '#' },
    { name: 'Dịch Vụ', href: '#services' },
    { name: 'Về Chúng Tôi', href: '#about' },
    { name: 'Đánh Giá', href: '#testimonials' },
    { name: 'Liên Hệ', href: '#contact' }
  ];

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
              Chuyên nghiệp, uy tín và chất lượng. Chúng tôi cam kết mang đến dịch vụ chăm sóc xe tốt nhất cho khách hàng.
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
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Dịch Vụ</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
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
            <h4 className="text-lg font-bold mb-6">Liên Kết Nhanh</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#E31E24] transition-colors flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#E31E24] rounded-full group-hover:scale-150 transition-transform"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Liên Hệ</h4>
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
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 group hover:text-white transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#E31E24]" />
                <a href="mailto:info@dlautoboston.com">info@dlautoboston.com</a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="text-sm font-semibold mb-2">Giờ Làm Việc</div>
              <div className="text-sm text-gray-400">
                <div>Mon - Sat: 7:00 AM - 7:00 PM</div>
                <div>Sunday: 9:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 D&L Auto. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#E31E24] transition-colors">Chính Sách Bảo Mật</a>
              <a href="#" className="hover:text-[#E31E24] transition-colors">Điều Khoản Dịch Vụ</a>
              <a href="#" className="hover:text-[#E31E24] transition-colors">Bảo Hành</a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-[#E31E24] to-[#1B3A5F] px-6 py-3 rounded-full">
            <p className="text-white text-sm font-semibold">
              🚗 Phục Vụ Cộng Đồng Người Việt Tại Boston
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

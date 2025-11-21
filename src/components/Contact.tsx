import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carModel: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        carModel: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Địa Chỉ',
      content: '1856 Dorchester Ave',
      subContent: '780 Blue Hill Ave',
      color: 'text-[#E31E24]',
      bgColor: 'bg-[#E31E24]/10'
    },
    {
      icon: Phone,
      title: 'Điện Thoại',
      content: '(857) 999-3979 (Nguyệt Anh)',
      subContent: '(857) 544-3757 (Phương Hoàng)',
      color: 'text-[#1B3A5F]',
      bgColor: 'bg-[#1B3A5F]/10'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@dlautoboston.com',
      subContent: 'contact@dlautoboston.com',
      color: 'text-[#1B3A5F]',
      bgColor: 'bg-[#1B3A5F]/10'
    },
    {
      icon: Clock,
      title: 'Giờ Làm Việc',
      content: 'Mon - Sat: 7:00 AM - 7:00 PM',
      subContent: 'Sunday: 9:00 AM - 5:00 PM',
      color: 'text-[#E31E24]',
      bgColor: 'bg-[#E31E24]/10'
    }
  ];

  return (
    <div id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#E31E24]/10 text-[#E31E24] px-4 py-2 rounded-full text-sm font-bold mb-4">
            LIÊN HỆ VỚI CHÚNG TÔI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Đặt Lịch Hẹn<br />Ngay Hôm Nay
          </h2>
          <p className="text-xl text-gray-600">
            Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gradient-to-br from-[#1B3A5F] to-slate-900 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Thông Tin Liên Hệ</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`flex-shrink-0 p-3 ${info.bgColor} ${info.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-300 mb-1">{info.title}</div>
                      <div className="font-bold text-white">{info.content}</div>
                      <div className="text-gray-400 text-sm">{info.subContent}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E31E24]/5 to-[#1B3A5F]/5 rounded-2xl p-8 border border-[#E31E24]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tại Sao Chọn D&L Auto?</h3>
              <ul className="space-y-3">
                {[
                  'Vietnamese-speaking staff',
                  'State-of-the-art equipment',
                  'Insurance claims handling',
                  'Rental cars available',
                  '24/7 towing service',
                  'Transparent pricing'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E31E24] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cảm Ơn Bạn!</h3>
                <p className="text-gray-600 max-w-md">
                  Chúng tôi đã nhận được thông tin. Đội ngũ của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Gửi Yêu Cầu</h3>

                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Họ và Tên *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all"
                    placeholder="Nguyễn Văn A"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      Số Điện Thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all"
                      placeholder="0123 456 789"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="carModel" className="block text-sm font-bold text-gray-700 mb-2">
                      Dòng Xe
                    </label>
                    <input
                      type="text"
                      id="carModel"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all"
                      placeholder="VD: Honda CR-V 2020"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
                      Dịch Vụ Cần Tư Vấn
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Chọn dịch vụ</option>
                      <option value="repair">Sửa Chữa Cơ Khí</option>
                      <option value="diagnostic">Chẩn Đoán Điện Tử</option>
                      <option value="upgrade">Nâng Cấp Hiệu Suất</option>
                      <option value="maintenance">Bảo Dưỡng Định Kỳ</option>
                      <option value="fuel">Hệ Thống Nhiên Liệu</option>
                      <option value="cooling">Hệ Thống Làm Mát</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Mô Tả Vấn Đề
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all resize-none"
                    placeholder="Mô tả chi tiết về tình trạng xe hoặc dịch vụ bạn quan tâm..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#E31E24] to-[#1B3A5F] text-white py-4 rounded-lg hover:from-[#c41820] hover:to-[#153049] transition-all transform hover:scale-105 font-bold flex items-center justify-center space-x-2 shadow-lg shadow-[#E31E24]/30"
                >
                  <Send className="w-5 h-5" />
                  <span>Gửi Yêu Cầu</span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
          <a
            href="https://maps.app.goo.gl/Ds7wgtTRQ7CGLNur9"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            <img
              src="/image.png"
              alt="D&L Auto Location Map - 1856 Dorchester Ave, Boston MA 02124"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-[#E31E24] font-bold flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>View on Google Maps</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

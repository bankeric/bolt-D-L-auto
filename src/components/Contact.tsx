import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Contact() {
  const t = useTranslation();
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
      title: t.contact.info.address,
      content: t.contact.info.addressLine1,
      subContent: t.contact.info.addressLine2,
      color: 'text-[#E31E24]',
      bgColor: 'bg-[#E31E24]/10'
    },
    {
      icon: Phone,
      title: t.contact.info.phone,
      content: t.contact.info.phoneLine1,
      subContent: t.contact.info.phoneLine2,
      thirdContent: t.contact.info.phoneLine3,
      color: 'text-[#1B3A5F]',
      bgColor: 'bg-[#1B3A5F]/10'
    },
    {
      icon: Mail,
      title: t.contact.info.email,
      content: t.contact.info.emailLine1,
      subContent: t.contact.info.emailLine2,
      color: 'text-[#1B3A5F]',
      bgColor: 'bg-[#1B3A5F]/10'
    },
    {
      icon: Clock,
      title: t.contact.info.hours,
      content: t.contact.info.hoursLine1,
      subContent: t.contact.info.hoursLine2,
      color: 'text-[#E31E24]',
      bgColor: 'bg-[#E31E24]/10'
    }
  ];

  return (
    <div id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#E31E24]/10 text-[#E31E24] px-4 py-2 rounded-full text-sm font-bold mb-4">
            {t.contact.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.title}<br />{t.contact.titleLine2}
          </h2>
          <p className="text-xl text-gray-600">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gradient-to-br from-[#1B3A5F] to-slate-900 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">{t.contact.contactInfo}</h3>
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
                      {'thirdContent' in info && (
                        <div className="text-gray-400 text-sm">{info.thirdContent}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#E31E24]/5 to-[#1B3A5F]/5 rounded-2xl p-8 border border-[#E31E24]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.contact.whyChoose}</h3>
              <ul className="space-y-3">
                {t.contact.reasons.map((item, index) => (
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
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.contact.thankYou}</h3>
                <p className="text-gray-600 max-w-md">
                  {t.contact.thankYouMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.formTitle}</h3>

                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all"
                      placeholder={t.contact.form.phonePlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all"
                      placeholder={t.contact.form.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="carModel" className="block text-sm font-bold text-gray-700 mb-2">
                      {t.contact.form.carModel}
                    </label>
                    <input
                      type="text"
                      id="carModel"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all"
                      placeholder={t.contact.form.carModelPlaceholder}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">
                      {t.contact.form.service}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all bg-white"
                    >
                      <option value="">{t.contact.form.servicePlaceholder}</option>
                      <option value="repair">{t.contact.form.serviceOptions.repair}</option>
                      <option value="diagnostic">{t.contact.form.serviceOptions.diagnostic}</option>
                      <option value="upgrade">{t.contact.form.serviceOptions.upgrade}</option>
                      <option value="maintenance">{t.contact.form.serviceOptions.maintenance}</option>
                      <option value="fuel">{t.contact.form.serviceOptions.fuel}</option>
                      <option value="cooling">{t.contact.form.serviceOptions.cooling}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#E31E24] focus:ring-2 focus:ring-[#E31E24]/20 outline-none transition-all resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#E31E24] to-[#1B3A5F] text-white py-4 rounded-lg hover:from-[#c41820] hover:to-[#153049] transition-all transform hover:scale-105 font-bold flex items-center justify-center space-x-2 shadow-lg shadow-[#E31E24]/30"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.contact.form.submit}</span>
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
                  <span>{t.contact.viewOnMap}</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

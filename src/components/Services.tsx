import { useState } from 'react';
import { Wrench, Shield, FileCheck, Car, Truck, Users, X } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

interface ServiceDetail {
  title: string;
  description: string;
  details: string[];
}

export default function Services() {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services = [
    {
      icon: Wrench,
      title: t.services.qualityRepair.title,
      subtitle: t.services.qualityRepair.subtitle,
      color: 'from-[#E31E24] to-[#c41820]',
      details: {
        title: t.services.qualityRepair.title,
        description: t.services.qualityRepair.description,
        details: t.services.qualityRepair.details
      }
    },
    {
      icon: Shield,
      title: t.services.insurance.title,
      subtitle: t.services.insurance.subtitle,
      color: 'from-[#1B3A5F] to-[#153049]',
      details: {
        title: t.services.insurance.title,
        description: t.services.insurance.description,
        details: t.services.insurance.details
      }
    },
    {
      icon: FileCheck,
      title: t.services.inspection.title,
      subtitle: t.services.inspection.subtitle,
      color: 'from-[#E31E24] to-[#1B3A5F]',
      details: {
        title: t.services.inspection.title,
        description: t.services.inspection.description,
        details: t.services.inspection.details
      }
    },
    {
      icon: Car,
      title: t.services.rental.title,
      subtitle: t.services.rental.subtitle,
      color: 'from-[#1B3A5F] to-[#0f2438]',
      details: {
        title: t.services.rental.title,
        description: t.services.rental.description,
        details: t.services.rental.details
      }
    },
    {
      icon: Truck,
      title: t.services.towing.title,
      subtitle: t.services.towing.subtitle,
      color: 'from-[#E31E24] to-[#1B3A5F]',
      details: {
        title: t.services.towing.title,
        description: t.services.towing.description,
        details: t.services.towing.details
      }
    },
    {
      icon: Users,
      title: t.services.customerService.title,
      subtitle: t.services.customerService.subtitle,
      color: 'from-[#1B3A5F] to-[#E31E24]',
      details: {
        title: t.services.customerService.title,
        description: t.services.customerService.description,
        details: t.services.customerService.details
      }
    }
  ];

  const openModal = (service: ServiceDetail) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('/high-end-luxury-car-wheel-close-up-dark-automotive.jpg')"
        }}
      ></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#E31E24]/10 text-[#E31E24] px-4 py-2 rounded-full text-sm font-bold mb-4">
              {t.services.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.services.title}<br />{t.services.titleLine2}
            </h2>
            <p className="text-xl text-gray-600">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => openModal(service.details)}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${service.color}`}></div>

                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.subtitle}</p>

                  <button className="w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>{t.services.learnMore}</span>
                    <span>→</span>
                  </button>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={closeModal}>
          <div className="bg-white rounded-2xl max-w-3xl w-full my-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-3xl font-bold text-gray-900 pr-8">{selectedService.title}</h3>
                <button
                  onClick={closeModal}
                  className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{selectedService.description}</p>

              <div className="space-y-4">
                {selectedService.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500 mt-2"></div>
                    <p className="text-gray-700 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="#contact"
                  onClick={closeModal}
                  className="block w-full bg-gradient-to-r from-[#E31E24] to-[#1B3A5F] text-white py-4 rounded-lg hover:from-[#c41820] hover:to-[#153049] transition-all transform hover:scale-105 font-bold text-center"
                >
                  {t.services.bookNow}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

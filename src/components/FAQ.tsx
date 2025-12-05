import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function FAQ() {
  const t = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="py-20 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cnc-machined-car-wheel-precision-finish-automotive.jpg')"
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#E31E24]/10 text-[#E31E24] px-4 py-2 rounded-full text-sm font-bold mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.faq.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {t.faq.questions.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-100 hover:border-[#E31E24]/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#E31E24] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-[1000px] opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-[#E31E24]/5 to-[#1B3A5F]/5 rounded-2xl p-8 border-2 border-[#E31E24]/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t.faq.stillHaveQuestions}
          </h3>
          <p className="text-gray-600 mb-6">
            {t.faq.contactTeam}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16172821000"
              className="inline-block bg-gradient-to-r from-[#E31E24] to-[#1B3A5F] text-white px-8 py-4 rounded-lg hover:from-[#c41820] hover:to-[#153049] transition-all transform hover:scale-105 font-bold shadow-lg"
            >
              {t.faq.call}
            </a>
            <a
              href="#contact"
              className="inline-block bg-white border-2 border-[#1B3A5F] text-[#1B3A5F] px-8 py-4 rounded-lg hover:bg-[#1B3A5F] hover:text-white transition-all transform hover:scale-105 font-bold"
            >
              {t.faq.sendMessage}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

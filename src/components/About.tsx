import { CheckCircle2, Search, Wrench, Sparkles, ThumbsUp } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function About() {
  const { t } = useTranslation();

  const processIcons = [Search, Wrench, Sparkles, ThumbsUp];

  return (
    <div id="about" className="py-20 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('/before-and-after-car-wheel-restoration-damaged-whe.jpg')"
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#1B3A5F]/10 text-[#1B3A5F] px-4 py-2 rounded-full text-sm font-bold mb-4">
            {t.about.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.about.title}<br />
            {t.about.titleLine2}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1B3A5F] to-slate-900 rounded-3xl p-12 mb-16 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">{t.about.processTitle}</h3>

          <div className="mb-12">
            <img
              src="/image copy.png"
              alt="Quy trình sửa chữa của D&L Auto"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.process.map((step, index) => {
              const Icon = processIcons[index];
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-6 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 hover:bg-white/20 transition-all duration-300">
                    <Icon className="w-12 h-12 text-[#E31E24]" />
                  </div>
                  <div className="text-xl font-bold mb-3">{step.title}</div>
                  <p className="text-gray-300 leading-relaxed text-sm">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border-2 border-gray-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">{t.about.guaranteesTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {t.about.guarantees.map((guarantee, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#E31E24] to-[#1B3A5F] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{guarantee.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#E31E24] to-[#1B3A5F] rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{t.about.ctaTitle}</h3>
          <p className="text-xl mb-8 opacity-90">
            {t.about.ctaSubtitle}
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[#1B3A5F] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-bold shadow-xl"
          >
            {t.about.contactNow}
          </a>
        </div>
      </div>
    </div>
  );
}

import { Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Testimonials() {
  const t = useTranslation();

  const beforeAfterProjects = t.testimonials.projects.map((project: any, index: number) => ({
    beforeImage: [`/1a.jpg`, `/2a.jpg`, `/3a.jpg`][index],
    afterImage: [`/1b.jpg`, `/2b.jpg`, `/3b.jpg`][index],
    title: project.title,
    description: project.description
  }));

  const testimonials = t.testimonials.reviews;

  return (
    <div id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#E31E24]/10 text-[#E31E24] px-4 py-2 rounded-full text-sm font-bold mb-4">
            {t.testimonials.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.testimonials.title}<br />{t.testimonials.titleLine2}
          </h2>
          <p className="text-xl text-gray-600">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {beforeAfterProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={project.beforeImage}
                  alt={`${project.title} - Before`}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="relative">
                <img
                  src={project.afterImage}
                  alt={`${project.title} - After`}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#1B3A5F]/10 text-[#1B3A5F] px-4 py-2 rounded-full text-sm font-bold mb-4">
              {t.testimonials.reviewsBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.testimonials.reviewsTitle}<br />{t.testimonials.reviewsTitleLine2}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#E31E24]"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-[#1B3A5F] font-semibold">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#E31E24] to-[#1B3A5F] rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">{t.testimonials.ctaTitle}</h3>
          <p className="text-xl mb-8 opacity-90">
            {t.testimonials.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block bg-white text-[#1B3A5F] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-bold shadow-xl"
            >
              {t.testimonials.bookAppointment}
            </a>
            <a
              href="tel:+16172821000"
              className="inline-block bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all transform hover:scale-105 font-bold"
            >
              {t.testimonials.call}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

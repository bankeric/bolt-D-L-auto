import { Users, Wrench, Clock, Award } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Stats() {
  const t = useTranslation();

  const stats = [
    {
      icon: Users,
      value: '10+',
      label: t.stats.yearsServing,
      color: 'text-[#1B3A5F]',
      bgColor: 'bg-[#1B3A5F]/10'
    },
    {
      icon: Wrench,
      value: '1000+',
      label: t.stats.vehiclesRepaired,
      color: 'text-[#E31E24]',
      bgColor: 'bg-[#E31E24]/10'
    },
    {
      icon: Clock,
      value: '98%',
      label: t.stats.onTimeCompletion,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Award,
      value: '100%',
      label: t.stats.serviceSatisfaction,
      color: 'text-[#1B3A5F]',
      bgColor: 'bg-[#1B3A5F]/10'
    }
  ];

  return (
    <div className="py-16 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cnc-machined-car-wheel-precision-finish-automotive.jpg')"
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl border-2 border-gray-100 hover:border-[#E31E24] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`inline-flex p-4 rounded-xl ${stat.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>

              <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

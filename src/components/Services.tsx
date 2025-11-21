import { useState } from 'react';
import { Wrench, Shield, FileCheck, Car, Truck, Users, X } from 'lucide-react';

interface ServiceDetail {
  title: string;
  description: string;
  details: string[];
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services = [
    {
      icon: Wrench,
      title: 'Đội ngũ Sửa xe chất lượng',
      subtitle: 'Làm xe CŨ như MỚI',
      color: 'from-[#E31E24] to-[#c41820]',
      details: {
        title: 'Dịch Vụ Sửa Chữa Chuyên Nghiệp - Làm Xe CŨ Như MỚI',
        description: 'Thời gian ngừng hoạt động là thời gian bị lãng phí. Đội ngũ kỹ thuật viên được đào tạo bài bản của chúng tôi sẽ đưa xe của bạn trở lại trạng thái sẵn sàng và hoạt động trở lại nhanh nhất có thể.',
        details: [
          'Làm mới xe cũ giúp tối đa hóa giá trị bán lại và cải thiện xe cũ để bán nhanh',
          'D&L AUTO giúp bạn chọn giải pháp tiết kiệm chi phí, tối đa hóa lợi nhuận bất kể giá trị xe',
          'Chúng tôi phục hồi cấu trúc xe và làm cho chúng trông như mới để bạn có thể bán được giá cao',
          'Chúng tôi áp dụng sửa chữa cần thiết và đánh bóng vừa đủ cho xe cũ và xe giá trị thấp để bạn có thể bán nhanh',
          'Sửa chữa cấu trúc và thân xe chuyên nghiệp, sau đó sơn và hoàn thiện',
          'Thiết bị và kỹ thuật hiện đại nhất'
        ]
      }
    },
    {
      icon: Shield,
      title: 'Giải quyết vấn đề Bảo Hiểm',
      subtitle: 'Hỗ Trợ Bảo Hiểm & Tai Nạn',
      color: 'from-[#1B3A5F] to-[#153049]',
      details: {
        title: 'Giải Quyết Bảo Hiểm & Tai Nạn',
        description: 'D&L Auto có đội ngũ bảo hiểm có kinh nghiệm và trình độ cao nhất trong ngành, tận tâm xử lý mọi nhu cầu của bạn nhanh chóng và hiệu quả với dịch vụ cá nhân và chuyên nghiệp.',
        details: [
          'Tổng cộng hơn 10 năm kinh nghiệm trực tiếp với công ty bảo hiểm',
          'Điểm liên hệ duy nhất cho các công ty bảo hiểm',
          'Vận hành cơ sở sửa chữa va chạm giúp các công ty bảo hiểm làm việc dễ dàng và hiệu quả',
          'Dịch vụ sửa chữa va chạm và sửa chữa điểm hoàn chỉnh',
          'Khách hàng kiểm soát quá trình yêu cầu bồi thường',
          'Truy cập trực tiếp vào phụ tùng OEM và aftermarket',
          'Quan hệ DRP với các công ty bảo hiểm lớn',
          'Kiểm soát chi phí - tiết kiệm tiền với một nguồn, một cuộc gọi, một hóa đơn'
        ]
      }
    },
    {
      icon: FileCheck,
      title: 'Làm Inspection',
      subtitle: 'Có người giải thích bằng tiếng Việt',
      color: 'from-[#E31E24] to-[#1B3A5F]',
      details: {
        title: 'Dịch Vụ Kiểm Tra Xe',
        description: 'Kiểm tra xe toàn diện với hỗ trợ tiếng Việt. Chúng tôi đảm bảo bạn hiểu rõ mọi chi tiết về tình trạng xe của mình.',
        details: [
          'Dịch vụ kiểm tra xe hoàn chỉnh',
          'Giải thích và hỗ trợ đầy đủ bằng tiếng Việt',
          'Báo cáo kiểm tra chi tiết',
          'Kiểm tra trước khi mua xe',
          'Kiểm tra an toàn hàng năm',
          'Kiểm tra khí thải',
          'Giao tiếp rõ ràng bằng ngôn ngữ của bạn',
          'Đánh giá chuyên nghiệp và kỹ lưỡng'
        ]
      }
    },
    {
      icon: Car,
      title: 'Có Xe Rental cho khách',
      subtitle: 'Ngay và Liền',
      color: 'from-[#1B3A5F] to-[#0f2438]',
      details: {
        title: 'Dịch Vụ Cho Thuê Xe Ngay Lập Tức',
        description: 'Khi xe của bạn đang được sửa chữa, chúng tôi cung cấp dịch vụ cho thuê xe ngay lập tức để bạn có thể tiếp tục di chuyển.',
        details: [
          'Xe cho thuê có sẵn tại chỗ',
          'Có sẵn ngay lập tức - không phải chờ đợi',
          'Xe sạch sẽ và được bảo dưỡng tốt',
          'Giá thuê cạnh tranh',
          'Có thể phối hợp với bảo hiểm',
          'Tùy chọn thuê theo ngày, theo tuần',
          'Nhiều loại xe để lựa chọn',
          'Giao và nhận xe thuận tiện'
        ]
      }
    },
    {
      icon: Truck,
      title: 'Có Xe Tow cho khách khi cần',
      subtitle: 'Không ngại đường xa, 24/7',
      color: 'from-[#E31E24] to-[#1B3A5F]',
      details: {
        title: 'Dịch Vụ Kéo Xe 24/7 - Không Ngại Đường Xa',
        description: 'Dịch vụ kéo xe của chúng tôi luôn sẵn sàng suốt ngày đêm, sẵn sàng giúp đỡ bạn bất cứ khi nào và ở đâu bạn cần.',
        details: [
          'Dịch vụ kéo xe khẩn cấp 24/7',
          'Không ngại đường xa - chúng tôi đến nơi bạn cần',
          'Nhân viên kéo xe chuyên nghiệp và có kinh nghiệm',
          'Vận chuyển xe an toàn và bảo mật',
          'Có xe kéo sàn phẳng',
          'Dịch vụ kéo xe máy',
          'Hỗ trợ tại hiện trường tai nạn',
          'Thời gian phản hồi nhanh',
          'Phối hợp yêu cầu bảo hiểm'
        ]
      }
    },
    {
      icon: Users,
      title: 'Đội ngũ nhân viên chăm sóc khách hàng',
      subtitle: 'Thân thiện, nhiệt tình, đặt khách hàng lên hàng đầu',
      color: 'from-[#1B3A5F] to-[#E31E24]',
      details: {
        title: 'Dịch Vụ Khách Hàng Xuất Sắc',
        description: 'Đội ngũ chăm sóc khách hàng của chúng tôi thân thiện, nhiệt tình và luôn đặt khách hàng lên hàng đầu.',
        details: [
          'Có nhân viên nói tiếng Việt',
          'Môi trường thân thiện và chào đón',
          'Giải thích kiên nhẫn và kỹ lưỡng',
          'Sự hài lòng của khách hàng là ưu tiên hàng đầu',
          'Giao tiếp rõ ràng ở mọi bước',
          'Lịch trình linh hoạt để đáp ứng nhu cầu của bạn',
          'Dịch vụ theo dõi sau khi sửa chữa',
          'Đại diện chăm sóc khách hàng tận tâm',
          'Chúng tôi đối xử với mọi khách hàng như gia đình'
        ]
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
              DỊCH VỤ CỦA CHÚNG TÔI
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dịch Vụ Toàn Diện<br />Cho Cộng Đồng Boston
            </h2>
            <p className="text-xl text-gray-600">
              Phục vụ người Việt tại Boston với đội ngũ nói tiếng Việt và dịch vụ chuyên nghiệp
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
                    <span>Tìm Hiểu Thêm</span>
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
                  Đặt Lịch Hẹn Ngay
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { Star } from 'lucide-react';

export default function Testimonials() {
  const beforeAfterProjects = [
    {
      beforeImage: '/1a.jpg',
      afterImage: '/1b.jpg',
      title: 'Toyota Camry - Body Repair',
      description: 'Sửa chữa va chạm nghiêm trọng, phục hồi như mới'
    },
    {
      beforeImage: '/2a.jpg',
      afterImage: '/2b.jpg',
      title: 'Range Rover Evoque - Rear End Repair',
      description: 'Khôi phục hoàn toàn phần đuôi xe sau tai nạn'
    },
    {
      beforeImage: '/3a.jpg',
      afterImage: '/3b.jpg',
      title: 'Ford Mustang - Collision Repair',
      description: 'Phục hồi và sơn lại toàn bộ sau va chạm nghiêm trọng'
    }
  ];

  const testimonials = [
    {
      name: 'Anh Nguyễn Văn Hùng',
      role: 'Chủ xe Toyota Camry',
      content: 'Xe tôi bị tai nạn nặng, tôi nghĩ không thể sửa được. Nhưng D&L Auto đã làm nên điều kỳ diệu! Xe như mới, không thể tin được. Đội ngũ rất chuyên nghiệp và tận tâm.',
      rating: 5
    },
    {
      name: 'Chị Trần Thị Mai',
      role: 'Chủ xe Honda Accord',
      content: 'Giá cả hợp lý, làm việc nhanh chóng. Quan trọng nhất là có người nói tiếng Việt giải thích rõ ràng về tình trạng xe và quy trình sửa chữa. Rất hài lòng!',
      rating: 5
    },
    {
      name: 'Anh Lê Minh Tuấn',
      role: 'Chủ xe Lexus',
      content: 'Bảo hiểm được xử lý rất suôn sẻ, không phải lo lắng gì. D&L Auto lo hết mọi thứ. Xe được sửa chữa tuyệt vời, không thấy vết tích gì của tai nạn.',
      rating: 5
    },
    {
      name: 'Chị Phạm Thu Hương',
      role: 'Chủ xe Subaru',
      content: 'Lần đầu tiên tôi tìm thấy xưởng sửa xe đáng tin cậy ở Boston. Nhân viên thân thiện, giá cả minh bạch. Xe được trả lại đúng hẹn và đẹp hơn cả mong đợi!',
      rating: 5
    },
    {
      name: 'Anh Đỗ Văn Thành',
      role: 'Chủ xe Toyota RAV4',
      content: 'D&L Auto có dịch vụ xe rental ngay lập tức nên tôi không bị gián đoạn công việc. Đội ngũ kỹ thuật giỏi, thiết bị hiện đại. Tôi sẽ giới thiệu cho bạn bè.',
      rating: 5
    },
    {
      name: 'Chị Vũ Thị Lan',
      role: 'Chủ xe Mazda CX-5',
      content: 'Tư vấn rất kỹ, không ép buộc. Họ giải thích từng bước sửa chữa và cho xem hình ảnh. Giá cả hợp lý so với chất lượng nhận được. Xưởng sạch sẽ, chuyên nghiệp.',
      rating: 5
    }
  ];

  return (
    <div id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#E31E24]/10 text-[#E31E24] px-4 py-2 rounded-full text-sm font-bold mb-4">
            TRƯỚC & SAU - BEFORE & AFTER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chất Lượng Công Việc<br />Nói Lên Tất Cả
          </h2>
          <p className="text-xl text-gray-600">
            Làm xe CŨ như MỚI - Chuyên nghiệp từng chi tiết
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
              KHÁCH HÀNG NÓI VỀ CHÚNG TÔI
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cộng Đồng Boston<br />Tin Tưởng Chúng Tôi
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
          <h3 className="text-3xl font-bold mb-4">Bạn Cũng Muốn Trải Nghiệm?</h3>
          <p className="text-xl mb-8 opacity-90">
            Đặt lịch hẹn ngay hôm nay và cảm nhận sự khác biệt trong dịch vụ chăm sóc xe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block bg-white text-[#1B3A5F] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-bold shadow-xl"
            >
              Đặt Lịch Hẹn Ngay
            </a>
            <a
              href="tel:+16172821000"
              className="inline-block bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-all transform hover:scale-105 font-bold"
            >
              Gọi (617) 282-1000
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

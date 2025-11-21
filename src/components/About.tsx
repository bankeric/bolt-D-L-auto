import { CheckCircle2, Search, Wrench, Sparkles, ThumbsUp } from 'lucide-react';

export default function About() {
  const repairProcess = [
    {
      icon: Search,
      title: 'Đánh Giá Chuyên Nghiệp',
      description: 'Chất lượng đánh giá hư hỏng cũng quan trọng như chất lượng sửa chữa. Các kỹ thuật viên chuyên nghiệp của chúng tôi sẽ đánh giá cẩn thận xe của bạn về cả hư hỏng nhìn thấy được và hư hỏng ẩn để đảm bảo một dự án sửa chữa chính xác.'
    },
    {
      icon: Wrench,
      title: 'Sửa Chữa Hiện Đại',
      description: 'Sử dụng thiết bị hiện đại nhất, các kỹ thuật viên được đào tạo bài bản và giàu kinh nghiệm của chúng tôi sẽ tiến hành sửa chữa thân xe để sửa khung, chắn bùn hoặc cửa xe. Chúng tôi cung cấp hệ thống phối màu chuyên nghiệp để sơn và hoàn thiện xe của bạn sau khi sửa chữa.'
    },
    {
      icon: Sparkles,
      title: 'Kiểm Soát Chất Lượng',
      description: 'Chúng tôi tự hào về tất cả công việc chúng tôi thực hiện, đó là lý do tại sao chúng tôi liên tục tiến hành kiểm tra chất lượng ở các giai đoạn khác nhau của quá trình sửa chữa, bao gồm kiểm tra kiểm soát chất lượng và đảm bảo chất lượng.'
    },
    {
      icon: ThumbsUp,
      title: 'Kiểm Tra Cuối Cùng',
      description: 'Trước khi chúng tôi trả xe của bạn, nó trải qua một cuộc kiểm tra cuối cùng toàn diện để đảm bảo mọi thứ đáp ứng tiêu chuẩn cao của chúng tôi và mong đợi của bạn.'
    }
  ];

  const guarantees = [
    {
      title: 'Sửa Chữa Hiện Đại',
      description: 'Chúng tôi đảm bảo bạn có chuyên môn và tính chuyên nghiệp. Sử dụng thiết bị hiện đại nhất, các kỹ thuật viên được đào tạo bài bản và giàu kinh nghiệm của chúng tôi sẽ tiến hành sửa chữa thân xe để sửa khung, chắn bùn hoặc cửa xe.'
    },
    {
      title: 'Kiểm Soát Hoàn Toàn',
      description: 'Chúng tôi sẽ không làm gì mà không có bạn. Sau khi đánh giá thiệt hại, bạn sẽ được cung cấp một kế hoạch sửa chữa chi tiết và các lựa chọn, để bạn có thể chọn những gì tốt nhất cho bạn. Trong toàn bộ quá trình, chúng tôi sẽ liên tục cập nhật cho bạn.'
    },
    {
      title: 'Dịch Vụ Khách Hàng Xuất Sắc',
      description: 'Chúng tôi hiểu sự căng thẳng và thất vọng khi xe của bạn ở trong xưởng, vì vậy chúng tôi sẽ làm cho quá trình này càng dễ dàng nhất có thể cho bạn và dịch vụ khách hàng của chúng tôi sẽ luôn sẵn sàng hỗ trợ.'
    },
    {
      title: 'Không Quan Liêu',
      description: 'Điều cuối cùng bạn cần sau khi bị va chạm là phải đối phó với bảo hiểm hoặc giấy tờ. Chúng tôi sẽ lo mọi thứ cho bạn và đảm bảo một quá trình không căng thẳng.'
    }
  ];

  const services = [
    {
      title: 'Sửa Chữa Vết Lõm Không Sơn',
      description: 'Sửa chữa va chạm ô tô luôn bắt đầu với một đánh giá kỹ lưỡng về thiệt hại. Nếu mức độ và vị trí hư hỏng của xe của bạn cho phép, thì sửa chữa vết lõm không sơn là một giải pháp nhanh chóng và giá cả phải chăng để sửa xe của bạn. Đây là một lựa chọn tuyệt vời cho các vết lõm và vết móp nhỏ.'
    },
    {
      title: 'Sửa Chữa Thông Thường',
      description: 'Đối với những hư hỏng không cho phép sửa chữa vết lõm không sơn, Xưởng D&L cung cấp Sửa chữa Thông thường, bao gồm sửa chữa cấu trúc và thân xe chuyên nghiệp, sau đó sơn và hoàn thiện. Quá trình này thường mất nhiều thời gian hơn PDR.'
    }
  ];

  const ourServices = [
    {
      title: 'Hỗ Trợ 24/7',
      description: 'Đi xa hơn là những gì chúng tôi làm. Tại D&L Auto, bạn có thể tin tưởng chúng tôi giúp kéo xe của bạn, giao xe và liên lạc với công ty bảo hiểm của bạn để bạn không gặp thêm bất kỳ rắc rối nào.'
    },
    {
      title: 'Đánh Giá Chuyên Nghiệp',
      description: 'Chất lượng đánh giá hư hỏng cũng quan trọng như chất lượng sửa chữa. Các kỹ thuật viên chuyên nghiệp của chúng tôi sẽ đánh giá cẩn thận xe của bạn về cả hư hỏng nhìn thấy được và hư hỏng ẩn để đảm bảo một dự án sửa chữa chính xác.'
    },
    {
      title: 'Chất Lượng Trên Hết',
      description: 'Chúng tôi tự hào về tất cả công việc chúng tôi thực hiện, đó là lý do tại sao chúng tôi liên tục tiến hành kiểm tra chất lượng ở các giai đoạn khác nhau của quá trình sửa chữa, bao gồm kiểm tra kiểm soát chất lượng và đảm bảo chất lượng.'
    }
  ];

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
            VỀ CHÚNG TÔI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sửa Chữa Chất Lượng Cao<br />
            Khách Hàng Hài Lòng Là Ưu Tiên
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            D&L Auto cung cấp dịch vụ sửa chữa chất lượng cao và là đơn vị hàng đầu trong ngành về độ hài lòng của khách hàng. Xưởng D&L Auto của chúng tôi tự hào cung cấp một môi trường sạch sẽ và thân thiện. Chúng tôi sử dụng thiết bị sửa chữa khung và thân xe hiện đại nhất, cùng với kỹ thuật sơn chuyên nghiệp, để bạn có thể yên tâm rằng chiếc xe của mình sẽ được sửa nhanh chóng và không rắc rối.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#1B3A5F] to-slate-900 rounded-3xl p-12 mb-16 text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Quy Trình Sửa Chữa</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-6 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 hover:bg-white/20 transition-all duration-300">
                  <step.icon className="w-12 h-12 text-[#E31E24]" />
                </div>
                <div className="text-xl font-bold mb-3">{step.title}</div>
                <p className="text-gray-300 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Dịch Vụ Sửa Chữa</h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#1B3A5F] hover:shadow-lg transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Dịch Vụ Bao Gồm</h3>
            <div className="space-y-6">
              {ourServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-[#E31E24]/5 to-[#1B3A5F]/5 rounded-xl p-6 border-2 border-[#E31E24]/20 hover:border-[#E31E24] hover:shadow-lg transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border-2 border-gray-100">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Cam Kết Của Chúng Tôi</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {guarantees.map((guarantee, index) => (
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
          <h3 className="text-3xl font-bold mb-4">Sẵn Sàng Phục Vụ Quý Khách</h3>
          <p className="text-xl mb-8 opacity-90">
            Đội ngũ chuyên nghiệp, thiết bị hiện đại, phục vụ người Việt tại Boston
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[#1B3A5F] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-bold shadow-xl"
          >
            Liên Hệ Ngay
          </a>
        </div>
      </div>
    </div>
  );
}

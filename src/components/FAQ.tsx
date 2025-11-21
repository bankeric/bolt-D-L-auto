import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Tôi nên làm gì khi gặp tai nạn?',
      answer: 'Trước tiên, hãy bình tĩnh. Nếu có người bị thương, gọi 911 ngay lập tức. Không di chuyển xe trừ khi bạn đang gặp nguy hiểm và sẽ an toàn hơn nếu di chuyển xe đến vị trí khác. Bạn nên lấy tên của người lái xe khác liên quan cùng với số điện thoại, giấy phép lái xe, giấy tờ xe và thông tin bảo hiểm của họ. Gọi cho công ty bảo hiểm và thông báo về tai nạn. Họ sẽ hỏi chi tiết, vì vậy hãy cố gắng lấy tên và số điện thoại của nhân chứng và cũng ghi chú vị trí, thời gian và ngày tháng. Sử dụng điện thoại camera để chụp ảnh hiện trường, hư hỏng xe và nhân chứng.'
    },
    {
      question: 'Quy trình sửa chữa xe sau tai nạn hoạt động như thế nào?',
      answer: 'Quy trình sửa chữa bắt đầu với việc bạn mang xe đến để nhận báo giá với chuyên viên đánh giá được đào tạo. Chúng tôi sẽ làm việc với đại lý bảo hiểm của bạn để xử lý yêu cầu bồi thường sửa chữa. Các kỹ thuật viên chuyên nghiệp của chúng tôi sẽ tiến hành tháo rời toàn bộ các khu vực bị hư hỏng của xe để xác định bất kỳ hư hỏng cấu trúc hoặc cơ khí nào. Bạn sẽ được trình bày một kế hoạch sửa chữa chi tiết và nếu bạn đồng ý, chúng tôi sẽ đặt hàng các bộ phận cần thiết cho xe của bạn và sau đó hoàn thành việc sửa chữa. Sau khi sửa chữa hoàn tất, chúng tôi sẽ tiến hành kiểm tra chi tiết bên trong và bên ngoài xe của bạn để đảm bảo chất lượng sửa chữa.'
    },
    {
      question: 'Chi phí sửa chữa là bao nhiêu?',
      answer: 'Chi phí sửa chữa phụ thuộc rất nhiều vào loại hư hỏng xe của bạn gặp phải, các bộ phận cần thiết để sửa chữa và các quy trình liên quan. Sau khi đánh giá hư hỏng hoàn tất, bạn sẽ được cung cấp không chỉ một kế hoạch sửa chữa chi tiết mà còn một báo giá. Báo giá của bạn nên bao gồm một cuộc kiểm tra kỹ lưỡng về công việc cần thực hiện trên xe của bạn, mô tả về các bộ phận sửa chữa sẽ được sử dụng, những mục bảo hiểm của bạn sẽ và sẽ không bao gồm và số tiền dự kiến cho việc sửa chữa. Một trong những lý do báo giá có thể khác với xưởng khác là tính kỹ lưỡng của quy trình đánh giá. Một số báo giá có thể bỏ qua các sửa chữa cần thiết khỏi báo giá ban đầu, gây ra số tiền khác với cơ sở khác. Tại D&L Auto, chúng tôi kỹ lưỡng trong việc xác định các bước cần thiết để sửa chữa chất lượng và an toàn cho xe của bạn.'
    },
    {
      question: 'Khoản khấu trừ bảo hiểm hoạt động như thế nào?',
      answer: 'Bảo hiểm của bên có lỗi thường chi trả chi phí sửa chữa. Nếu đó là công ty bảo hiểm của bạn, thì bạn có thể có khoản khấu trừ mà bạn phải chi trả. Các trang tuyên bố chính sách xe của bạn sẽ cho biết khoản khấu trừ áp dụng. Luôn quan trọng là kiểm tra kỹ tính chính xác của thông tin chính sách của bạn với công ty bảo hiểm trước và sau khi có tổn thất. Khoản khấu trừ của bạn phải trả khi bạn nhận xe sau khi sửa chữa hoàn tất. Tìm xưởng sửa xe cung cấp tài chính cho khoản khấu trừ nếu bạn không muốn trả tiền này.'
    },
    {
      question: 'Chúng tôi làm việc với loại xe nào?',
      answer: 'D&L Auto được trang bị để làm việc trên tất cả các nhãn hiệu và mẫu mã. Chúng tôi có quan hệ với mọi nhà cung cấp phụ tùng trong cả nước, có nghĩa là nếu bộ phận có sẵn, chúng tôi có thể đặt hàng. Chúng tôi tự hào về việc tìm nguồn cung cấp các bộ phận ô tô tốt nhất có sẵn để khôi phục xe của bạn về tình trạng trước tai nạn.'
    },
    {
      question: 'Điều gì làm cho xưởng sửa chữa ô tô của chúng tôi vượt trội?',
      answer: 'Dịch vụ khách hàng. D&L Auto không thể phủ nhận là tốt nhất về dịch vụ khách hàng. Sự chú ý đến chi tiết, kiểm soát chất lượng và an toàn khách hàng của chúng tôi là không thể sánh kịp. Chúng tôi cố gắng hết sức để trả lời mọi cuộc gọi điện thoại trong giờ mở cửa, chúng tôi kiểm tra tất cả các xe trước khi trả lại cho khách hàng và chúng tôi đứng sau công việc của mình. Có lý do tại sao chúng tôi được coi là một trong những xưởng sửa chữa ô tô tốt nhất ở Boston.'
    },
    {
      question: 'Chúng tôi sử dụng loại phụ tùng nào?',
      answer: 'D&L Auto sử dụng nhiều loại phụ tùng khác nhau (OEM, phụ tùng thị trường phụ hoặc đã qua sử dụng). Điều này được xác định bởi yêu cầu của từng công ty bảo hiểm cũng như yêu cầu của khách hàng. Chúng tôi thảo luận với khách hàng, từng trường hợp cụ thể, về những gì công ty bảo hiểm đã xác định chúng tôi sử dụng và sau đó, với sự hướng dẫn của Chuyên viên Đánh giá của chúng tôi, quyết định những gì tốt nhất cho một chiếc xe cụ thể.'
    }
  ];

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
            <span>CÂU HỎI THƯỜNG GẶP</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Câu trả lời cho những thắc mắc phổ biến về dịch vụ sửa chữa xe
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
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
            Vẫn Còn Thắc Mắc?
          </h3>
          <p className="text-gray-600 mb-6">
            Đội ngũ chuyên viên của chúng tôi sẵn sàng tư vấn miễn phí và giải đáp mọi thắc mắc của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16172821000"
              className="inline-block bg-gradient-to-r from-[#E31E24] to-[#1B3A5F] text-white px-8 py-4 rounded-lg hover:from-[#c41820] hover:to-[#153049] transition-all transform hover:scale-105 font-bold shadow-lg"
            >
              Gọi (617) 282-1000
            </a>
            <a
              href="#contact"
              className="inline-block bg-white border-2 border-[#1B3A5F] text-[#1B3A5F] px-8 py-4 rounded-lg hover:bg-[#1B3A5F] hover:text-white transition-all transform hover:scale-105 font-bold"
            >
              Gửi Tin Nhắn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

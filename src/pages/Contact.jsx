import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Địa chỉ",
      details: "123 Đường ABC, Quận 1, TP.HCM",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: "fas fa-phone",
      title: "Điện thoại",
      details: "+84 123 456 789",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      details: "info@traveltech.vn",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: "fas fa-clock",
      title: "Giờ làm việc",
      details: "Thứ 2 - Chủ nhật: 8:00 - 22:00",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      color: "hover:text-blue-600",
      href: "#",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      color: "hover:text-pink-600",
      href: "#",
    },
    {
      name: "TikTok",
      icon: "fab fa-tiktok",
      color: "hover:text-gray-900",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-gradient-to-br from-primary-600 via-blue-700 to-indigo-800 text-white py-20"
        style={{
          backgroundImage:
            "url('https://resource.ti-net.com.cn/attachs/article/content/image/zxpic/call20211111-92.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-pink-500/15 rounded-full blur-lg"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center ring-4 ring-white/20">
            <i className="fas fa-headset text-white text-3xl"></i>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-10 leading-relaxed">
            Đội ngũ chuyên gia du lịch của chúng tôi luôn sẵn sàng hỗ trợ bạn
            24/7. Hãy liên hệ để được tư vấn miễn phí và tạo ra những trải
            nghiệm du lịch tuyệt vời!
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-200">Hỗ trợ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-blue-200">Khách hàng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-blue-200">Đánh giá</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15 phút</div>
              <div className="text-blue-200">Phản hồi</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full transform -translate-x-12 translate-y-12"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-white text-lg"></i>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Gửi tin nhắn cho chúng tôi
                    </h2>
                    <p className="text-gray-600">
                      Chúng tôi sẽ phản hồi trong vòng 15 phút
                    </p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Họ và tên *
                      </label>
                      <div className="relative">
                        <i className="fas fa-user absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors"></i>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:ring-0 transition-all duration-300 text-gray-900 placeholder-gray-500"
                          placeholder="Nhập họ và tên của bạn"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Email *
                      </label>
                      <div className="relative">
                        <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors"></i>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:ring-0 transition-all duration-300 text-gray-900 placeholder-gray-500"
                          placeholder="Nhập email của bạn"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Số điện thoại
                      </label>
                      <div className="relative">
                        <i className="fas fa-phone absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors"></i>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:ring-0 transition-all duration-300 text-gray-900 placeholder-gray-500"
                          placeholder="Nhập số điện thoại"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-800 mb-3">
                        Chủ đề
                      </label>
                      <div className="relative">
                        <i className="fas fa-tag absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors"></i>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:ring-0 transition-all duration-300 text-gray-900 appearance-none bg-white"
                        >
                          <option value="">Chọn chủ đề</option>
                          <option value="tour">Tư vấn tour</option>
                          <option value="booking">Đặt tour</option>
                          <option value="complaint">Khiếu nại</option>
                          <option value="partnership">Hợp tác</option>
                          <option value="other">Khác</option>
                        </select>
                        <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Nội dung tin nhắn *
                    </label>
                    <div className="relative">
                      <i className="fas fa-comment-dots absolute left-4 top-6 text-gray-400 group-focus-within:text-primary-500 transition-colors"></i>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-primary-500 focus:ring-0 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none"
                        placeholder="Mô tả chi tiết yêu cầu của bạn..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-bold text-lg py-5 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] group"
                  >
                    <i className="fas fa-paper-plane mr-3 group-hover:scale-110 transition-transform"></i>
                    Gửi tin nhắn ngay
                    <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            {/* <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform translate-x-12 -translate-y-12"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-3">
                    <i className="fas fa-info-circle text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Thông tin liên hệ
                  </h3>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <i className={`${info.icon} text-white text-xl`}></i>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2 text-lg">
                            {info.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {info.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Quick Contact */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Background with overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/60 to-blue-700/80"></div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-yellow-400/20 rounded-full blur-md"></div>

              <div className="relative z-10 text-white p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                    <i className="fas fa-headset text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Cần hỗ trợ nhanh?
                    </h3>
                    <p className="text-white text-sm">
                      Chúng tôi luôn sẵn sàng
                    </p>
                  </div>
                </div>

                <p className="text-blue-100 mb-6 leading-relaxed">
                  Gọi ngay cho chúng tôi để được tư vấn miễn phí từ đội ngũ
                  chuyên gia du lịch
                </p>

                <a
                  href="tel:+84123456789"
                  className="w-full bg-white text-primary-600 hover:bg-blue-50 font-bold text-lg py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center group"
                >
                  <i className="fas fa-phone mr-3 group-hover:scale-110 transition-transform"></i>
                  Gọi ngay: 0123 456 789
                </a>

                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center space-x-6 text-white text-sm">
                    <div className="flex items-center">
                      <i className="fas fa-clock mr-2"></i>
                      <span>24/7</span>
                    </div>
                    <div className="flex items-center">
                      <i className="fas fa-shield-alt mr-2"></i>
                      <span>Miễn phí</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-100 to-purple-100 rounded-full transform -translate-x-10 translate-y-10"></div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center space-x-4 p-4 rounded-2xl border-2 border-gray-100 hover:border-primary-200 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gray-100 group-hover:bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                        <i
                          className={`${social.icon} text-gray-600 text-lg ${social.color}`}
                        ></i>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                          {social.name}
                        </span>
                      </div>
                      <i className="fas fa-arrow-right text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="card p-6">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 text-center">
              Vị trí văn phòng
            </h3>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4984879090163!2d106.70042311533491!3d10.776889992322073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3dfb8f1dcd%3A0x6b6f!2zVGjhu5FuZyBUaOG6oW4gUXXhuq1u!5e0!3m2!1svi!2s!4v1633605827819!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>

                {/* <iframe
                  width="600"
                  height="450"
                  style="border:0"
                  loading="lazy"
                  allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"
                ></iframe> */}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Câu hỏi thường gặp
            </h3>
            <p className="text-xl text-gray-600">
              Những câu hỏi phổ biến từ khách hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Làm thế nào để đặt tour?
              </h4>
              <p className="text-gray-600">
                Bạn có thể đặt tour trực tiếp trên website, qua hotline hoặc sử
                dụng AI Planner để tạo kế hoạch cá nhân hóa.
              </p>
            </div>

            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Có hỗ trợ thanh toán online không?
              </h4>
              <p className="text-gray-600">
                Có, chúng tôi hỗ trợ thanh toán qua thẻ tín dụng, chuyển khoản
                ngân hàng và ví điện tử.
              </p>
            </div>

            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                Có thể hủy tour không?
              </h4>
              <p className="text-gray-600">
                Có, bạn có thể hủy tour trước 24h và được hoàn tiền 100%. Hủy
                trong vòng 24h sẽ có phí hủy.
              </p>
            </div>

            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                AI Planner hoạt động như thế nào?
              </h4>
              <p className="text-gray-600">
                AI Planner sử dụng trí tuệ nhân tạo để phân tích sở thích và tạo
                lộ trình du lịch cá nhân hóa cho bạn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

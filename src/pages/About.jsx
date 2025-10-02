import React from "react";
import { Link } from "react-router-dom";
import TeamSlider from "../components/TeamSlider";

const About = () => {
  const values = [
    {
      icon: "fas fa-heart",
      title: "Tận tâm",
      description:
        "Chúng tôi luôn đặt khách hàng làm trung tâm và cố gắng hết sức để mang đến trải nghiệm tốt nhất.",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: "fas fa-star",
      title: "Chất lượng",
      description:
        "Cam kết mang đến dịch vụ chất lượng cao với các tour được thiết kế kỹ lưỡng và chuyên nghiệp.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: "fas fa-handshake",
      title: "Tin cậy",
      description:
        "Xây dựng mối quan hệ lâu dài dựa trên sự tin tưởng và minh bạch trong mọi hoạt động.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Sáng tạo",
      description:
        "Luôn tìm kiếm những cách thức mới để cải thiện dịch vụ và mang đến trải nghiệm độc đáo.",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const team = [
    {
      name: "Nguyễn Văn A",
      position: "Giám đốc điều hành",
      image: "https://i.redd.it/y2kma8yx80m71.png",
      description:
        "Với hơn 15 năm kinh nghiệm trong ngành du lịch, anh A đã dẫn dắt công ty phát triển mạnh mẽ.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Trần Thị B",
      position: "Trưởng phòng Marketing",
      image: "https://i.redd.it/y2kma8yx80m71.png",
      description:
        "Chuyên gia marketing với nhiều năm kinh nghiệm trong việc quảng bá du lịch Việt Nam.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Lê Văn C",
      position: "Trưởng phòng Tours",
      image: "https://i.redd.it/y2kma8yx80m71.png",
      description:
        "Chuyên gia thiết kế tour với kiến thức sâu rộng về các điểm đến du lịch Việt Nam.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Nguyễn Văn D",
      position: "Giám đốc điều hành",
      image: "https://i.redd.it/y2kma8yx80m71.png",
      description:
        "Với hơn 15 năm kinh nghiệm trong ngành du lịch, anh A đã dẫn dắt công ty phát triển mạnh mẽ.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Trần Thị E",
      position: "Trưởng phòng Marketing",
      image: "https://i.redd.it/y2kma8yx80m71.png",
      description:
        "Chuyên gia marketing với nhiều năm kinh nghiệm trong việc quảng bá du lịch Việt Nam.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Lê Văn C",
      position: "Trưởng phòng Tours",
      image: "https://i.redd.it/y2kma8yx80m71.png",
      description:
        "Chuyên gia thiết kế tour với kiến thức sâu rộng về các điểm đến du lịch Việt Nam.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  const stats = [
    { number: "500+", label: "Tours đã tổ chức", icon: "fas fa-route" },
    { number: "10K+", label: "Khách hàng hài lòng", icon: "fas fa-users" },
    { number: "50+", label: "Điểm đến", icon: "fas fa-map-marker-alt" },
    { number: "5★", label: "Đánh giá trung bình", icon: "fas fa-star" },
  ];

  return (
    <div className="min-h-screen">
      {/* Mission & Vision */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://media.vov.vn/sites/default/files/styles/large/public/2020-09/99-thuyen_hoa.jpg')`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-blue-900/85 to-purple-900/90"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 bg-green-400/15 rounded-full blur-lg animate-bounce"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            {/* <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 mb-6 shadow-2xl">
              <i className="fas fa-compass text-yellow-400 mr-3 text-xl"></i>
              <span className="text-white font-semibold">Định Hướng</span>
            </div> */}
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Sứ Mệnh & Tầm Nhìn
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Những giá trị cốt lõi định hướng mọi hoạt động và quyết định của
              TravelTech
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group relative">
              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-10 h-full border border-white/30 hover:border-yellow-400/50 shadow-2xl hover:shadow-yellow-400/25 transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/20">
                {/* Decorative Elements */}
                {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform translate-x-16 -translate-y-16 opacity-50 group-hover:opacity-70 transition-opacity"></div> */}

                <div className="relative z-10">
                  {/* <div className="flex items-start mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl mr-6 flex-shrink-0">
                      <i className="fas fa-bullseye text-white text-3xl"></i>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">
                        Sứ Mệnh
                      </h3>
                      <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <p className="text-sm text-blue-600 font-semibold mt-2 uppercase tracking-wide">
                        Mission Statement
                      </p>
                    </div>
                  </div> */}

                  <div className="space-y-6">
                    <p className="text-lg text-white/95 leading-relaxed drop-shadow-sm">
                      Chúng tôi cam kết{" "}
                      <strong className="text-yellow-400">cách mạng hóa</strong>{" "}
                      trải nghiệm du lịch thông qua công nghệ AI tiên tiến, mang
                      đến những hành trình được cá nhân hóa hoàn hảo cho từng du
                      khách.
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/15 transition-colors">
                        <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                          <i className="fas fa-heart text-white"></i>
                        </div>
                        <span className="text-white/90 font-medium drop-shadow-sm">
                          Tạo ra những trải nghiệm du lịch đáng nhớ
                        </span>
                      </div>

                      <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/15 transition-colors">
                        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                          <i className="fas fa-robot text-white"></i>
                        </div>
                        <span className="text-white/90 font-medium drop-shadow-sm">
                          Ứng dụng AI để cá nhân hóa lộ trình
                        </span>
                      </div>

                      <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/15 transition-colors">
                        <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                          <i className="fas fa-map-marked-alt text-white"></i>
                        </div>
                        <span className="text-white/90 font-medium drop-shadow-sm">
                          Kết nối du khách với văn hóa Việt Nam
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-10 h-full border border-white/30 hover:border-emerald-400/50 shadow-2xl hover:shadow-emerald-400/25 transition-all duration-500 transform hover:-translate-y-2 hover:bg-white/20">
                {/* Decorative Elements */}
                {/* <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-emerald-100 to-teal-100 rounded-full transform -translate-x-14 translate-y-14 opacity-50 group-hover:opacity-70 transition-opacity"></div> */}

                <div className="relative z-10">
                  {/* <div className="flex items-start mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl mr-6 flex-shrink-0">
                      <i className="fas fa-eye text-white text-3xl"></i>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">
                        Tầm Nhìn
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"></div>
                      <p className="text-sm text-emerald-600 font-semibold mt-2 uppercase tracking-wide">
                        Vision Statement
                      </p>
                    </div>
                  </div> */}

                  <div className="space-y-6">
                    <p className="text-lg text-white/95 leading-relaxed drop-shadow-sm">
                      Trở thành{" "}
                      <strong className="text-emerald-400">
                        nền tảng du lịch thông minh số 1
                      </strong>{" "}
                      Đông Nam Á, tiên phong trong việc ứng dụng AI vào ngành du
                      lịch và được công nhận quốc tế.
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/15 transition-colors">
                        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                          <i className="fas fa-globe-asia text-white"></i>
                        </div>
                        <span className="text-white/90 font-medium drop-shadow-sm">
                          Mở rộng ra toàn khu vực Đông Nam Á
                        </span>
                      </div>

                      <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/15 transition-colors">
                        <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                          <i className="fas fa-award text-white"></i>
                        </div>
                        <span className="text-white/90 font-medium drop-shadow-sm">
                          Được công nhận quốc tế về chất lượng
                        </span>
                      </div>

                      <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 group-hover:bg-white/15 transition-colors">
                        <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                          <i className="fas fa-users text-white"></i>
                        </div>
                        <span className="text-white/90 font-medium drop-shadow-sm">
                          Phục vụ hàng triệu du khách mỗi năm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Thành tựu của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những con số ấn tượng thể hiện sự tin tưởng của khách hàng
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${stat.icon} text-white text-2xl`}></i>
                </div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những giá trị định hướng hoạt động và phát triển của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`${value.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with Swiper */}
      <TeamSlider team={team} />
    </div>
  );
};

export default About;

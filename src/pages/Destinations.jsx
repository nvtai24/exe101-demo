import React, { useState } from "react";
import { Link } from "react-router-dom";

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const destinations = [
    {
      id: 1,
      name: "Hà Nội",
      region: "Miền Bắc",
      image:
        "https://static.vinwonders.com/production/gioi-thieu-ve-ha-noi-banner.jpg",
      description: "Thủ đô ngàn năm văn hiến với phố cổ, văn hóa truyền thống",
      highlights: ["Văn Miếu", "Phố cổ", "Hồ Hoàn Kiếm", "Múa rối nước"],
      rating: 4.8,
      category: "Culture",
      bestTime: "Tháng 10-4",
      duration: "2-3 ngày",
    },
    {
      id: 2,
      name: "Hạ Long Bay",
      region: "Miền Bắc",
      image: "https://wallpaperaccess.com/full/200944.jpg",
      description: "Di sản thế giới với hàng nghìn đảo đá vôi tuyệt đẹp",
      highlights: ["Du thuyền", "Chèo kayak", "Hang động", "Hoàng hôn"],
      rating: 4.9,
      category: "Nature",
      bestTime: "Tháng 10-4",
      duration: "2-3 ngày",
    },
    {
      id: 3,
      name: "Sapa",
      region: "Miền Bắc",
      image:
        "https://impresstravel.com/wp-content/uploads/2021/03/Sapa-Trekking-Homestay-Market-6.jpg",
      description: "Ruộng bậc thang tuyệt đẹp và văn hóa dân tộc thiểu số",
      highlights: ["Ruộng bậc thang", "Fansipan", "Bản Cát Cát", "Chợ Sapa"],
      rating: 4.7,
      category: "Nature",
      bestTime: "Tháng 9-11",
      duration: "3-4 ngày",
    },
    {
      id: 4,
      name: "Hội An",
      region: "Miền Trung",
      image:
        "https://focusasiatravel.vn/wp-content/uploads/2018/09/Ph%E1%BB%91-C%E1%BB%95-H%E1%BB%99i-An1.jpg",
      description: "Phố cổ UNESCO với kiến trúc cổ kính và đèn lồng",
      highlights: ["Phố cổ", "Đèn lồng", "Ẩm thực", "Sông Hoài"],
      rating: 4.8,
      category: "Culture",
      bestTime: "Tháng 2-8",
      duration: "2-3 ngày",
    },
    {
      id: 5,
      name: "Đà Nẵng",
      region: "Miền Trung",
      image: "https://btnmt.1cdn.vn/2023/07/04/302-202307041611213.jpg",
      description:
        "Thành phố biển hiện đại với bãi biển đẹp và ẩm thực phong phú",
      highlights: ["Bãi biển", "Cầu Rồng", "Bà Nà Hills", "Ẩm thực"],
      rating: 4.6,
      category: "Beach",
      bestTime: "Tháng 2-8",
      duration: "3-4 ngày",
    },
    {
      id: 6,
      name: "Huế",
      region: "Miền Trung",
      image:
        "https://dulichconvoi.com/wp-content/uploads/2024/03/352521770_6922050131.jpg",
      description: "Cố đô với kiến trúc cung đình và lăng tẩm cổ kính",
      highlights: ["Đại Nội", "Lăng Tự Đức", "Chùa Thiên Mụ", "Cơm hến"],
      rating: 4.5,
      category: "Culture",
      bestTime: "Tháng 1-4",
      duration: "2-3 ngày",
    },
    {
      id: 7,
      name: "Nha Trang",
      region: "Miền Nam",
      image:
        "https://th.bing.com/th/id/R.966392878fff0d549c42218f5ffcfc80?rik=H5NcVjNlNyAUTw&pid=ImgRaw&r=0",
      description:
        "Thành phố biển với bãi cát trắng và hoạt động thể thao nước",
      highlights: ["Bãi biển", "Lặn biển", "Vinpearl", "Tháp Bà"],
      rating: 4.4,
      category: "Beach",
      bestTime: "Tháng 1-8",
      duration: "3-4 ngày",
    },
    {
      id: 8,
      name: "Đà Lạt",
      region: "Miền Nam",
      image:
        "https://ik.imagekit.io/tvlk/loc-asset/gNr3hLh55ZCkPJisyxFK-v9MmzxPu57ZRVI+10VZ2S4b1PNW4T++cbA6yK4gzhAhs9o2HLZ9vs7gy3rpcIU+oKi5EygzQLRjTUv7fRblEVA=/images/1548760200339-1500x1125-FIT_AND_TRIM-035bfa2b07fa55cd6db5652d8c2a62e0.jpeg?tr=dpr-3",
      description:
        "Thành phố ngàn hoa với khí hậu mát mẻ và cảnh quan thiên nhiên",
      highlights: ["Hồ Xuân Hương", "Vườn hoa", "Dinh Bảo Đại", "Cà phê"],
      rating: 4.7,
      category: "Nature",
      bestTime: "Quanh năm",
      duration: "3-4 ngày",
    },
    {
      id: 9,
      name: "Phú Quốc",
      region: "Miền Nam",
      image:
        "https://static.vinwonders.com/production/how-many-days-in-phu-quoc-2.jpg",
      description: "Đảo ngọc với bãi biển đẹp và resort cao cấp",
      highlights: ["Bãi Trường", "Vinpearl Land", "Lặn biển", "Hải sản"],
      rating: 4.8,
      category: "Beach",
      bestTime: "Tháng 11-4",
      duration: "4-5 ngày",
    },
    {
      id: 10,
      name: "TP. Hồ Chí Minh",
      region: "Miền Nam",
      image:
        "https://vietnamnomad.com/wp-content/uploads/2021/01/Ho-Chi-Minh-City-Travel-Guide-2021-Vietnamnomad.jpg",
      description:
        "Thành phố năng động với ẩm thực phong phú và cuộc sống về đêm",
      highlights: [
        "Chợ Bến Thành",
        "Nhà thờ Đức Bà",
        "Ẩm thực",
        "Cuộc sống đêm",
      ],
      rating: 4.3,
      category: "Culture",
      bestTime: "Tháng 12-4",
      duration: "2-3 ngày",
    },
  ];

  const regions = [
    { id: "all", name: "Tất cả", icon: "" },
    { id: "Miền Bắc", name: "Miền Bắc", icon: "🏔️" },
    { id: "Miền Trung", name: "Miền Trung", icon: "🏛️" },
    { id: "Miền Nam", name: "Miền Nam", icon: "🏖️" },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesRegion =
      selectedRegion === "all" || dest.region === selectedRegion;
    const matchesSearch =
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
    }

    if (hasHalfStar) {
      stars.push(
        <i key="half" className="fas fa-star-half-alt text-yellow-400"></i>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="far fa-star text-gray-300"></i>
      );
    }

    return stars;
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Culture":
        return "bg-purple-100 text-purple-800";
      case "Nature":
        return "bg-green-100 text-green-800";
      case "Beach":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner with Background Image */}
      <div className="relative h-[600px] bg-gradient-to-r from-blue-900/80 to-purple-900/80">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('./src/assets/images/destinations-banner.jpg')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70" />

        {/* Banner Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Khám phá Việt Nam
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Những điểm đến tuyệt vời nhất từ Bắc đến Nam
            </p>
          </div>

          {/* Quick Stats Overlay */}
          <div className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">
                  {/* {destinations.length} */}
                  36+
                </div>
                <div className="text-sm text-blue-100">Điểm đến</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">4.6 ★</div>
                <div className="text-sm text-blue-100">Đánh giá TB</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">3 miền</div>
                <div className="text-sm text-blue-100">Khắp Việt Nam</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-blue-100">Tours có sẵn</div>
              </div>
            </div>
          </div>

          {/* Search and Filter Overlay */}
          <div className="max-w-4xl mx-auto w-full">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
                <div className="lg:col-span-3">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <i className="fas fa-search text-white/70"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Tìm kiếm điểm đến..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-white/50 focus:border-white/50 backdrop-blur-sm"
                  >
                    {regions.map((region) => (
                      <option
                        key={region.id}
                        value={region.id}
                        className="text-gray-900"
                      >
                        {region.icon} {region.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-3">
                <span className="text-sm font-medium text-white/90">
                  Lọc nhanh:
                </span>
                <button
                  onClick={() => setSelectedRegion("Miền Bắc")}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors border ${
                    selectedRegion === "Miền Bắc"
                      ? "bg-white/30 text-white border-white/50"
                      : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20"
                  }`}
                >
                  🏔️ Miền Bắc
                </button>
                <button
                  onClick={() => setSelectedRegion("Miền Trung")}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors border ${
                    selectedRegion === "Miền Trung"
                      ? "bg-white/30 text-white border-white/50"
                      : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20"
                  }`}
                >
                  🏛️ Miền Trung
                </button>
                <button
                  onClick={() => setSelectedRegion("Miền Nam")}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors border ${
                    selectedRegion === "Miền Nam"
                      ? "bg-white/30 text-white border-white/50"
                      : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20"
                  }`}
                >
                  🏖️ Miền Nam
                </button>
                <button
                  onClick={() => {
                    setSelectedRegion("all");
                    setSearchTerm("");
                  }}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <i className="fas fa-refresh mr-1"></i>
                  Xóa bộ lọc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group h-full flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {destination.region}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(
                      destination.category
                    )}`}
                  >
                    {destination.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="flex items-center space-x-1 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <i className="fas fa-star text-yellow-400 text-xs"></i>
                    <span className="text-xs font-semibold text-gray-900">
                      {destination.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary-600 transition-colors">
                  {destination.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                  {destination.description}
                </p>

                <div className="mb-4 flex-grow">
                  <div className="flex flex-wrap gap-1.5 min-h-[2rem]">
                    {destination.highlights
                      .slice(0, 3)
                      .map((highlight, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                        >
                          {highlight}
                        </span>
                      ))}
                    {destination.highlights.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded-md">
                        +{destination.highlights.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <span className="flex items-center">
                      <i className="fas fa-clock mr-1.5 text-gray-400"></i>
                      {destination.duration}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-calendar mr-1.5 text-gray-400"></i>
                      {destination.bestTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center space-x-0.5">
                      {renderStars(destination.rating)}
                      <span className="ml-2 text-xs text-gray-600">
                        ({destination.rating})
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  // to={`/destinations/${destination.id}`}
                  className="btn btn-primary w-full text-sm py-2.5 mt-auto"
                >
                  <i className="fas fa-info-circle mr-2"></i>
                  Xem chi tiết
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <i className="fas fa-search text-gray-400 text-3xl"></i>
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Không tìm thấy điểm đến nào
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Hãy thử thay đổi từ khóa tìm kiếm hoặc bộ lọc để tìm điểm đến phù
              hợp
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedRegion("all");
              }}
              className="btn btn-primary"
            >
              <i className="fas fa-refresh mr-2"></i>
              Xem tất cả điểm đến
            </button>
          </div>
        )}

        {/* CTA Sections */}
        <div className="mt-16 space-y-8">
          {/* Popular Categories */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Khám phá theo chủ đề
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Văn hóa - Lịch sử */}
              <div
                className="text-center p-6 rounded-lg hover:shadow-md transition-all cursor-pointer relative overflow-hidden group"
                style={{
                  backgroundImage:
                    "url('https://congdankhuyenhoc.qltns.mediacdn.vn/449484899827462144/2022/8/24/imge1742-16613197159321913372738.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-purple-900/30 group-hover:bg-purple-900/40 transition-all"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-700/70 rounded-full flex items-center justify-center">
                    <i className="fas fa-landmark text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-white mb-2">
                    Văn hóa - Lịch sử
                  </h4>
                  <p className="text-sm text-blue-100">
                    Khám phá di sản và văn hóa Việt Nam
                  </p>
                </div>
              </div>
              {/* Thiên nhiên */}
              <div
                className="text-center p-6 rounded-lg hover:shadow-md transition-all cursor-pointer relative overflow-hidden group"
                style={{
                  backgroundImage:
                    "url('https://vietrektravel.com/Upload/News/Chiem-Nguong-Cac-Ky-Quan-Thien-Nhien-The-Gioi-Tai-Viet-Nam.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-green-900/30 group-hover:bg-green-900/40 transition-all"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-500/80 rounded-full flex items-center justify-center">
                    <i className="fas fa-mountain text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Thiên nhiên</h4>
                  <p className="text-sm text-blue-100">
                    Hòa mình vào thiên nhiên tuyệt đẹp
                  </p>
                </div>
              </div>
              {/* Biển đảo */}
              <div
                className="text-center p-6 rounded-lg hover:shadow-md transition-all cursor-pointer relative overflow-hidden group"
                style={{
                  backgroundImage:
                    "url('https://petrotimes.vn/stores/news_dataimages/nguyenhoan/062019/10/15/2337_Di_sYn_vYn_hoa_du_lYch_biYn_YYo_ViYt_Nam.jpg?randTime=1560369037')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-blue-900/40 transition-all"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/80 rounded-full flex items-center justify-center">
                    <i className="fas fa-umbrella-beach text-white text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-white mb-2">Biển đảo</h4>
                  <p className="text-sm text-blue-100">
                    Thư giãn tại những bãi biển đẹp
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl text-white p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <i className="fas fa-robot text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Để AI lên kế hoạch cho bạn
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Chỉ cần cho biết sở thích và ngân sách, AI sẽ tạo lịch trình hoàn
              hảo
            </p>
            <Link
              to="/ai-planner"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-magic mr-2"></i>
              Bắt đầu ngay
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Destinations;

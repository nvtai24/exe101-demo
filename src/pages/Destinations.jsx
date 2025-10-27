import React, { useState } from "react";
import { Link } from "react-router-dom";
import { locations, regions as regionsData } from "../data/location";

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = locations.filter((dest) => {
    const matchesRegion =
      selectedRegion === "all" || dest.region === selectedRegion;
    const matchesSearch =
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  // Ratings/stars removed for the Destinations list UI per request

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
              "url('https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-cover.jpeg')",
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
                  {locations.length}
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
                    {regionsData.map((region) => (
                      <option
                        key={region.id}
                        value={region.id}
                        className="text-gray-900"
                      >
                        {region.name}
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
                  src={
                    destination.images?.[0] ||
                    "https://via.placeholder.com/800x450?text=No+Image"
                  }
                  alt={destination.name}
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/800x450?text=No+Image")
                  }
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
                {/* rating removed */}
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
                    {(destination.highlights || [])
                      .slice(0, 3)
                      .map((highlight, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                        >
                          {highlight}
                        </span>
                      ))}
                    {(destination.highlights || []).length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded-md">
                        +{(destination.highlights || []).length - 3}
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
                </div>

                <Link
                  to={`/destinations/${destination.id}`}
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

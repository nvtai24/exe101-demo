import React, { useState } from "react";
import { Link } from "react-router-dom";
import { locations, regions as regionsData } from "../data/location";

const getCategoryIcon = (category) => {
  switch ((category || "").toLowerCase()) {
    case "nature":
    case "countryside":
      return "fa-tree";
    case "culture":
      return "fa-landmark";
    case "beach":
    case "coastal":
      return "fa-umbrella-beach";
    default:
      return "fa-map-marker-alt";
  }
};

const getCategoryColor = (category) => {
  switch ((category || "").toLowerCase()) {
    case "nature":
    case "countryside":
      return "bg-green-100 text-green-700 border-green-200";
    case "culture":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "beach":
    case "coastal":
      return "bg-blue-100 text-blue-700 border-blue-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const filteredDestinations = locations.filter((dest) => {
    const matchesRegion =
      selectedRegion === "all" || dest.region === selectedRegion;
    const destCategoryNormalized = dest.category || "Khác";
    const matchesCategory =
      selectedCategory === "all" || destCategoryNormalized === selectedCategory;
    const q = searchTerm.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      (dest.name || "").toLowerCase().includes(q) ||
      (dest.description || "").toLowerCase().includes(q);
    return matchesRegion && matchesCategory && matchesSearch;
  });

  const uniqueCategories = Array.from(
    new Set(locations.map((l) => l.category || "Khác"))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1528127269322-539801943592?w=1600')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Khám Phá Việt Nam
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Từ núi rừng hùng vĩ đến bãi biển tuyệt đẹp, từ phố cổ lãng mạn đến
              thành phố hiện đại - Hãy để chúng tôi đưa bạn đi khắp mọi miền đất
              nước
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl mx-auto bg-white rounded-full shadow-2xl p-2 flex items-center">
              <i className="fas fa-search text-gray-400 ml-6 mr-4"></i>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm điểm đến mơ ước của bạn..."
                className="flex-1 outline-none text-gray-700 px-2 py-3"
              />
              <button className="btn btn-primary px-8 py-3 rounded-full">
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {locations.length}+
              </div>
              <div className="text-gray-600 font-medium">Điểm đến</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {regionsData.length}
              </div>
              <div className="text-gray-600 font-medium">Vùng miền</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                50K+
              </div>
              <div className="text-gray-600 font-medium">Du khách</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">
                4.8★
              </div>
              <div className="text-gray-600 font-medium">Đánh giá</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {/* Region Filter */}
              <div className="relative">
                <i className="fas fa-map-marked-alt absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white cursor-pointer"
                >
                  <option value="all">🌏 Tất cả vùng</option>
                  {regionsData.map((r) => (
                    <option key={r.id} value={r.name}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="relative">
                <i className="fas fa-filter absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white cursor-pointer"
                >
                  <option value="all">📋 Tất cả danh mục</option>
                  {uniqueCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex-1 py-2 px-4 rounded-md transition-all ${
                    viewMode === "grid"
                      ? "bg-white shadow-sm text-primary-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <i className="fas fa-th mr-2"></i>
                  Lưới
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex-1 py-2 px-4 rounded-md transition-all ${
                    viewMode === "list"
                      ? "bg-white shadow-sm text-primary-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <i className="fas fa-list mr-2"></i>
                  Danh sách
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedRegion !== "all" ||
            selectedCategory !== "all" ||
            searchTerm) && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-600 font-medium">
                  Đang lọc:
                </span>
                {selectedRegion !== "all" && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center">
                    {selectedRegion}
                    <button
                      onClick={() => setSelectedRegion("all")}
                      className="ml-2 hover:text-blue-900"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </span>
                )}
                {selectedCategory !== "all" && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm flex items-center">
                    {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="ml-2 hover:text-green-900"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </span>
                )}
                {searchTerm && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center">
                    "{searchTerm}"
                    <button
                      onClick={() => setSearchTerm("")}
                      className="ml-2 hover:text-purple-900"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSelectedRegion("all");
                    setSelectedCategory("all");
                    setSearchTerm("");
                  }}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Xóa tất cả
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredDestinations.length} điểm đến
          </h2>
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
            <option>Phổ biến nhất</option>
            <option>Đánh giá cao nhất</option>
            <option>Mới nhất</option>
          </select>
        </div>

        {/* Destinations Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destinations/${destination.id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={
                      destination.images?.[0] ||
                      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800"
                    }
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getCategoryColor(
                        destination.category
                      )}`}
                    >
                      <i
                        className={`fas ${getCategoryIcon(
                          destination.category
                        )} mr-1`}
                      ></i>
                      {destination.category || "Khác"}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {destination.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                    {destination.description}
                  </p>

                  {destination.highlights &&
                    destination.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {destination.highlights
                          .slice(0, 3)
                          .map((highlight, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        {destination.highlights.length > 3 && (
                          <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                            +{destination.highlights.length - 3} thêm
                          </span>
                        )}
                      </div>
                    )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      <i className="fas fa-map-marker-alt text-primary-500 mr-1"></i>
                      {destination.region}
                    </span>
                    <span className="text-primary-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
                      Khám phá
                      <i className="fas fa-arrow-right ml-2"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destinations/${destination.id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row"
              >
                <div className="relative md:w-1/3 h-64 md:h-auto overflow-hidden">
                  <img
                    src={
                      destination.images?.[0] ||
                      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800"
                    }
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getCategoryColor(
                        destination.category
                      )}`}
                    >
                      <i
                        className={`fas ${getCategoryIcon(
                          destination.category
                        )} mr-1`}
                      ></i>
                      {destination.category || "Khác"}
                    </span>
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {destination.name}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  {destination.highlights &&
                    destination.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {destination.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      <i className="fas fa-map-marker-alt text-primary-500 mr-2"></i>
                      {destination.region}
                    </span>
                    <span className="btn btn-primary group-hover:translate-x-2 transition-transform inline-flex items-center">
                      Khám phá ngay
                      <i className="fas fa-arrow-right ml-2"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {filteredDestinations.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <i className="fas fa-search text-4xl text-gray-400"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Không tìm thấy điểm đến
            </h3>
            <p className="text-gray-600 mb-6">
              Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
            </p>
            <button
              onClick={() => {
                setSelectedRegion("all");
                setSelectedCategory("all");
                setSearchTerm("");
              }}
              className="btn btn-primary"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;

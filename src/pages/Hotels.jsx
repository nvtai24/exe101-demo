import React, { useState } from "react";
import { Link } from "react-router-dom";
import { hotels, cities, categories, priceRanges } from "../data/hotels";

const Hotels = () => {
  const [selectedCity, setSelectedCity] = useState("Tất cả");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular"); // popular, price-low, price-high, rating

  // Filter hotels
  const filteredHotels = hotels.filter((hotel) => {
    const matchesCity =
      selectedCity === "Tất cả" || hotel.location.city === selectedCity;
    const matchesCategory =
      selectedCategory === "Tất cả" || hotel.category === selectedCategory;
    const matchesPrice =
      hotel.startingPrice >= selectedPriceRange.min &&
      hotel.startingPrice <= selectedPriceRange.max;
    const matchesSearch =
      searchTerm === "" ||
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCity && matchesCategory && matchesPrice && matchesSearch;
  });

  // Sort hotels
  const sortedHotels = [...filteredHotels].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.startingPrice - b.startingPrice;
      case "price-high":
        return b.startingPrice - a.startingPrice;
      case "rating":
        return b.rating - a.rating;
      case "popular":
      default:
        return b.reviewCount - a.reviewCount;
    }
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4">
            Đặt phòng khách sạn
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Khám phá và đặt phòng tại các khách sạn, resort cao cấp trên toàn
            quốc
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Search & Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm khách sạn theo tên, địa điểm..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>

          {/* Filter Options */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* City Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fas fa-map-marker-alt mr-2 text-primary-600"></i>
                Thành phố
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fas fa-hotel mr-2 text-primary-600"></i>
                Loại hình
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fas fa-dollar-sign mr-2 text-primary-600"></i>
                Giá phòng
              </label>
              <select
                value={priceRanges.indexOf(selectedPriceRange)}
                onChange={(e) =>
                  setSelectedPriceRange(priceRanges[e.target.value])
                }
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {priceRanges.map((range, index) => (
                  <option key={index} value={index}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fas fa-sort mr-2 text-primary-600"></i>
                Sắp xếp
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="popular">Phổ biến nhất</option>
                <option value="rating">Đánh giá cao</option>
                <option value="price-low">Giá thấp đến cao</option>
                <option value="price-high">Giá cao đến thấp</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Tìm thấy{" "}
            <span className="font-semibold text-gray-900">
              {sortedHotels.length}
            </span>{" "}
            khách sạn
          </p>
        </div>

        {/* Hotels Grid */}
        {sortedHotels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedHotels.map((hotel) => (
              <Link
                key={hotel.id}
                to={`/booking/hotels/${hotel.id}`}
                className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Hotel Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={hotel.images[0]}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/800x600?text=Hotel+Image";
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="text-xs font-semibold text-gray-700">
                      {hotel.category}
                    </span>
                  </div>
                  {/* Rating Badge */}
                  <div className="absolute bottom-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-lg shadow-lg flex items-center space-x-1">
                    <i className="fas fa-star text-yellow-300"></i>
                    <span className="font-semibold">{hotel.rating}</span>
                    <span className="text-xs">({hotel.reviewCount})</span>
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {hotel.name}
                  </h3>

                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <i className="fas fa-map-marker-alt mr-2 text-primary-600"></i>
                    <span>{hotel.location.city}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {hotel.description}
                  </p>

                  {/* Amenities Preview */}
                  <div className="flex items-center space-x-3 mb-4 text-gray-500">
                    {hotel.amenities.slice(0, 4).map((amenity, index) => (
                      <i
                        key={index}
                        className={`fas ${amenity.icon} text-sm`}
                        title={amenity.name}
                      ></i>
                    ))}
                    {hotel.amenities.length > 4 && (
                      <span className="text-xs text-gray-400">
                        +{hotel.amenities.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">Giá từ</p>
                      <p className="text-xl font-bold text-primary-600">
                        {formatPrice(hotel.startingPrice)}
                      </p>
                      <p className="text-xs text-gray-500">/đêm</p>
                    </div>
                    <button className="btn btn-primary btn-sm group-hover:bg-primary-700">
                      Xem chi tiết
                      <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Không tìm thấy khách sạn phù hợp
            </h3>
            <p className="text-gray-500">
              Vui lòng thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;

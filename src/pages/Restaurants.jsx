import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  restaurants,
  cities,
  cuisines,
  priceRanges,
} from "../data/restaurants";

const Restaurants = () => {
  const [selectedCity, setSelectedCity] = useState("Tất cả");
  const [selectedCuisine, setSelectedCuisine] = useState("Tất cả");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Filter restaurants
  const filteredRestaurants = restaurants
    .filter((restaurant) => {
      const cityMatch =
        selectedCity === "Tất cả" || restaurant.location.city === selectedCity;
      const cuisineMatch =
        selectedCuisine === "Tất cả" || restaurant.cuisine === selectedCuisine;
      const priceMatch =
        restaurant.averagePrice >= selectedPriceRange.min &&
        restaurant.averagePrice <= selectedPriceRange.max;
      const searchMatch =
        searchTerm === "" ||
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.location.city
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        restaurant.description.toLowerCase().includes(searchTerm.toLowerCase());
      return cityMatch && cuisineMatch && priceMatch && searchMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.reviewCount - a.reviewCount;
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return a.averagePrice - b.averagePrice;
        case "price-high":
          return b.averagePrice - a.averagePrice;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Đặt bàn nhà hàng
            </h1>
            <p className="text-xl">
              Khám phá và đặt bàn tại các nhà hàng ngon nhất Việt Nam
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center">
            <i className="fas fa-search text-gray-400 mr-3"></i>
            <input
              type="text"
              placeholder="Tìm kiếm nhà hàng, món ăn, địa điểm..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* City Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Thành phố
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Cuisine Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loại hình ẩm thực
              </label>
              <select
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {cuisines.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Khoảng giá
              </label>
              <select
                value={selectedPriceRange.label}
                onChange={(e) =>
                  setSelectedPriceRange(
                    priceRanges.find((range) => range.label === e.target.value)
                  )
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {priceRanges.map((range) => (
                  <option key={range.label} value={range.label}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sắp xếp theo
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
        <div className="mb-6">
          <p className="text-gray-600">
            Tìm thấy{" "}
            <span className="font-semibold">{filteredRestaurants.length}</span>{" "}
            nhà hàng
          </p>
        </div>

        {/* Restaurant Cards Grid */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={restaurant.images[0]}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800";
                    }}
                  />
                  {/* Cuisine Badge */}
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="text-sm font-semibold text-gray-700">
                      {restaurant.cuisine}
                    </span>
                  </div>
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center">
                    <i className="fas fa-star text-yellow-400 text-sm mr-1"></i>
                    <span className="text-sm font-bold text-gray-900">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <i className="fas fa-map-marker-alt mr-2 text-primary-600"></i>
                    <span>{restaurant.location.city}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {restaurant.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {restaurant.features.slice(0, 4).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-xs text-gray-600"
                      >
                        <i
                          className={`fas ${feature.icon} text-primary-600 mr-1`}
                        ></i>
                        <span>{feature.name}</span>
                      </div>
                    ))}
                    {restaurant.features.length > 4 && (
                      <span className="text-xs text-gray-500">
                        +{restaurant.features.length - 4} tiện nghi
                      </span>
                    )}
                  </div>

                  {/* Price and Reviews */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-xs text-gray-500">Giá trung bình</p>
                      <p className="text-lg font-bold text-primary-600">
                        {formatPrice(restaurant.averagePrice)}
                      </p>
                      <p className="text-xs text-gray-500">/người</p>
                    </div>
                    <Link
                      to={`/booking/restaurants/${restaurant.id}`}
                      className="btn btn-primary"
                    >
                      Xem chi tiết
                    </Link>
                  </div>

                  {/* Review Count */}
                  <div className="mt-3 text-center">
                    <span className="text-xs text-gray-500">
                      {restaurant.reviewCount} đánh giá
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <i className="fas fa-utensils text-6xl text-gray-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Không tìm thấy nhà hàng
            </h3>
            <p className="text-gray-500">
              Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Restaurants;

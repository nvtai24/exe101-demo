import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getRestaurantById } from "../data/restaurants";
import RestaurantBookingModal from "../components/RestaurantBookingModal";
import ChatBox from "../components/ChatBox";

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = getRestaurantById(id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview"); // overview, menu, reviews, features

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-utensils text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Không tìm thấy nhà hàng
          </h2>
          <button
            onClick={() => navigate("/booking/restaurants")}
            className="btn btn-primary mt-4"
          >
            Quay lại danh sách
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const tabs = [
    { id: "overview", label: "Tổng quan", icon: "fa-info-circle" },
    { id: "menu", label: "Thực đơn", icon: "fa-utensils" },
    { id: "features", label: "Tiện nghi", icon: "fa-concierge-bell" },
    { id: "reviews", label: "Đánh giá", icon: "fa-star" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-primary-600">
              Trang chủ
            </Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <Link to="/booking/restaurants" className="hover:text-primary-600">
              Nhà hàng
            </Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-gray-900 font-medium">{restaurant.name}</span>
          </nav>

          {/* Main Image and Thumbnails */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Main Image */}
            <div className="lg:col-span-3">
              <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden group">
                <img
                  src={restaurant.images[selectedImage]}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Navigation Arrows */}
                {restaurant.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setSelectedImage(
                          selectedImage === 0
                            ? restaurant.images.length - 1
                            : selectedImage - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                    >
                      <i className="fas fa-chevron-left text-gray-700"></i>
                    </button>
                    <button
                      onClick={() =>
                        setSelectedImage(
                          selectedImage === restaurant.images.length - 1
                            ? 0
                            : selectedImage + 1
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                    >
                      <i className="fas fa-chevron-right text-gray-700"></i>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 h-full">
                {restaurant.images.slice(0, 4).map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-28 lg:h-[116px] rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedImage === index
                        ? "ring-4 ring-primary-500"
                        : "hover:ring-2 hover:ring-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${restaurant.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {selectedImage === index && (
                      <div className="absolute inset-0 bg-primary-600/20"></div>
                    )}
                  </div>
                ))}
                {restaurant.images.length > 4 && (
                  <div className="relative h-28 lg:h-[116px] rounded-lg overflow-hidden bg-gray-900 flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
                    <span className="text-white text-lg font-semibold">
                      +{restaurant.images.length - 4} ảnh
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Restaurant Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                      {restaurant.cuisine}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                      {restaurant.priceRange}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star text-sm ${
                            i < Math.floor(restaurant.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        ></i>
                      ))}
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {restaurant.name}
                  </h1>
                  <div className="flex items-center text-gray-600 space-x-4">
                    <div className="flex items-center">
                      <i className="fas fa-map-marker-alt mr-2 text-primary-600"></i>
                      <span>{restaurant.location.address}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-2 mb-2">
                    <div className="bg-primary-600 text-white px-3 py-1 rounded-lg font-bold text-lg">
                      {restaurant.rating}
                    </div>
                    <div className="text-sm text-gray-600">
                      ({restaurant.reviewCount} đánh giá)
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Tuyệt vời</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-center text-sm text-gray-600 space-x-4 pt-4 border-t">
                <div className="flex items-center">
                  <i className="fas fa-clock mr-2 text-primary-600"></i>
                  <span>Thứ 2-6: {restaurant.openingHours.weekday}</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-calendar-weekend mr-2 text-primary-600"></i>
                  <span>Cuối tuần: {restaurant.openingHours.weekend}</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? "border-primary-600 text-primary-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <i className={`fas ${tab.icon} mr-2`}></i>
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Giới thiệu
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {restaurant.description}
                      </p>
                    </div>

                    {/* Policies */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Chính sách nhà hàng
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                          <i className="fas fa-calendar-check text-primary-600 mt-1"></i>
                          <div>
                            <p className="font-medium text-gray-900">Đặt bàn</p>
                            <p className="text-sm text-gray-600">
                              {restaurant.policies.reservation}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="fas fa-undo text-primary-600 mt-1"></i>
                          <div>
                            <p className="font-medium text-gray-900">Hủy bàn</p>
                            <p className="text-sm text-gray-600">
                              {restaurant.policies.cancellation}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="fas fa-money-bill text-primary-600 mt-1"></i>
                          <div>
                            <p className="font-medium text-gray-900">Đặt cọc</p>
                            <p className="text-sm text-gray-600">
                              {restaurant.policies.deposit}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <i className="fas fa-baby text-primary-600 mt-1"></i>
                          <div>
                            <p className="font-medium text-gray-900">Trẻ em</p>
                            <p className="text-sm text-gray-600">
                              {restaurant.policies.children}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Menu Tab */}
                {activeTab === "menu" && (
                  <div className="space-y-8">
                    {restaurant.menuCategories.map((category) => (
                      <div key={category.id}>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                          {category.name}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {category.dishes.map((dish) => (
                            <div
                              key={dish.id}
                              className="border border-gray-200 rounded-xl p-4 hover:border-primary-300 transition-colors relative"
                            >
                              {dish.popular && (
                                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                  Phổ biến
                                </div>
                              )}
                              <div className="flex gap-4">
                                <img
                                  src={dish.image}
                                  alt={dish.name}
                                  className="w-24 h-24 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                  <h3 className="font-semibold text-gray-900 mb-1">
                                    {dish.name}
                                  </h3>
                                  <p className="text-sm text-gray-600 mb-2">
                                    {dish.description}
                                  </p>
                                  <p className="text-lg font-bold text-primary-600">
                                    {formatPrice(dish.price)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features Tab */}
                {activeTab === "features" && (
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">
                      Tiện nghi nhà hàng
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {restaurant.features.map((feature, index) => (
                        <div
                          key={index}
                          className={`flex items-center space-x-3 p-4 rounded-lg ${
                            feature.available
                              ? "bg-green-50"
                              : "bg-gray-50 opacity-50"
                          }`}
                        >
                          <i
                            className={`fas ${feature.icon} text-xl ${
                              feature.available
                                ? "text-green-600"
                                : "text-gray-400"
                            }`}
                          ></i>
                          <span
                            className={`font-medium ${
                              feature.available
                                ? "text-gray-900"
                                : "text-gray-500"
                            }`}
                          >
                            {feature.name}
                          </span>
                          {feature.available && (
                            <i className="fas fa-check text-green-600 ml-auto"></i>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === "reviews" && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-gray-900">
                        Đánh giá từ khách hàng
                      </h2>
                      <div className="flex items-center space-x-2">
                        <div className="bg-primary-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                          {restaurant.rating}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">
                            Tuyệt vời
                          </p>
                          <p className="text-xs text-gray-500">
                            {restaurant.reviewCount} đánh giá
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {restaurant.reviews.map((review) => (
                        <div
                          key={review.id}
                          className="border-b border-gray-200 pb-6 last:border-0"
                        >
                          <div className="flex items-start space-x-4">
                            <img
                              src={review.userAvatar}
                              alt={review.userName}
                              className="w-12 h-12 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <h4 className="font-semibold text-gray-900">
                                    {review.userName}
                                  </h4>
                                  <p className="text-sm text-gray-500">
                                    {new Date(review.date).toLocaleDateString(
                                      "vi-VN"
                                    )}
                                  </p>
                                </div>
                                <div className="flex items-center space-x-1">
                                  {[...Array(5)].map((_, i) => (
                                    <i
                                      key={i}
                                      className={`fas fa-star text-sm ${
                                        i < review.rating
                                          ? "text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    ></i>
                                  ))}
                                </div>
                              </div>
                              <p className="text-gray-700 mb-3">
                                {review.comment}
                              </p>
                              <button className="text-sm text-gray-500 hover:text-primary-600">
                                <i className="far fa-thumbs-up mr-1"></i>
                                Hữu ích ({review.helpful})
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Giá trung bình</p>
                <p className="text-3xl font-bold text-primary-600">
                  {formatPrice(restaurant.averagePrice)}
                </p>
                <p className="text-sm text-gray-500">/người</p>
              </div>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full btn btn-primary py-3 text-lg mb-4"
              >
                <i className="fas fa-calendar-check mr-2"></i>
                Đặt bàn ngay
              </button>

              {/* Host Info */}
              <div className="border-t pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Thông tin chủ nhà hàng
                </h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <img
                      src={restaurant.hostInfo.avatar}
                      alt={restaurant.hostInfo.name}
                      className="w-12 h-12 rounded-full"
                    />
                    {restaurant.hostInfo.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {restaurant.hostInfo.name}
                    </p>
                    <p className="text-xs text-gray-500">Chủ nhà hàng</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Tỷ lệ phản hồi:</span>
                    <span className="font-semibold text-gray-900">
                      {restaurant.hostInfo.responseRate}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Thời gian phản hồi:</span>
                    <span className="font-semibold text-gray-900">
                      {restaurant.hostInfo.responseTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t mt-6 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Liên hệ
                </h3>
                <div className="space-y-3">
                  <a
                    href={`tel:${restaurant.contact.phone}`}
                    className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <i className="fas fa-phone w-5"></i>
                    <span className="text-sm">{restaurant.contact.phone}</span>
                  </a>
                  <a
                    href={`mailto:${restaurant.contact.email}`}
                    className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <i className="fas fa-envelope w-5"></i>
                    <span className="text-sm">{restaurant.contact.email}</span>
                  </a>
                  <a
                    href={`https://${restaurant.contact.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    <i className="fas fa-globe w-5"></i>
                    <span className="text-sm">
                      {restaurant.contact.website}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <RestaurantBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        restaurant={restaurant}
      />

      {/* Chat Box */}
      <ChatBox hostInfo={restaurant.hostInfo} hotelName={restaurant.name} />
    </div>
  );
};

export default RestaurantDetail;

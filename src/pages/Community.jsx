import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreatePostModal from "../components/CreatePostModal";
import {
  currentUser,
  suggestedUsers,
  reviews,
  achievements,
  leaderboard,
} from "../data/community";

const Community = () => {
  const [activeTab, setActiveTab] = useState("reviews");
  const [userPoints, setUserPoints] = useState(9999);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [friendRequests, setFriendRequests] = useState({});

  const handleAddFriend = (userId) => {
    setFriendRequests({ ...friendRequests, [userId]: "pending" });
  };

  const handleCancelRequest = (userId) => {
    const updated = { ...friendRequests };
    delete updated[userId];
    setFriendRequests(updated);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fas fa-star ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        ></i>
      );
    }
    return stars;
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Gold":
        return "bg-yellow-100 text-yellow-800";
      case "Silver":
        return "bg-gray-100 text-gray-800";
      case "Bronze":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const handleCreatePost = (newPost) => {
    console.log("New post created:", newPost);
    // TODO: Add post to reviews list and call API
    setShowCreatePost(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* <div className="relative bg-gradient-to-br from-primary-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <i className="fas fa-users text-white text-2xl"></i>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Cộng đồng TravelTech
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Chia sẻ trải nghiệm, nhận điểm thưởng và kết nối với cộng đồng du
            lịch
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold">2.5K+</div>
              <div className="text-blue-200">Thành viên</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">850+</div>
              <div className="text-blue-200">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">320+</div>
              <div className="text-blue-200">Điểm đến</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.8</div>
              <div className="text-blue-200">Đánh giá TB</div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User Profile Banner */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold overflow-hidden">
                <img
                  src="https://www.bleepstatic.com/content/hl-images/2022/03/11/kali-linux.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Devip666</h2>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-red-500 text-yellow-400 text-sm font-medium rounded-full">
                    Super User
                  </span>
                  <span className="text-gray-600">
                    {userPoints.toLocaleString()} điểm
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                to={`/community/profile/${currentUser.id}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors flex items-center"
              >
                <i className="fas fa-user mr-2"></i>
                Trang cá nhân
              </Link>
              <button
                onClick={() => setShowCreatePost(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center"
              >
                <i className="fas fa-plus mr-2"></i>
                Chia sẻ trải nghiệm
              </button>
            </div>
          </div>
        </div>
        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-4 px-2 border-b-2 font-semibold transition-colors ${
                  activeTab === "reviews"
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <i className="fas fa-comments mr-2"></i>
                Bảng tin
              </button>
              <button
                onClick={() => setActiveTab("people")}
                className={`py-4 px-2 border-b-2 font-semibold transition-colors ${
                  activeTab === "people"
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <i className="fas fa-users mr-2"></i>
                Mọi người
              </button>
              <button
                onClick={() => setActiveTab("leaderboard")}
                className={`py-4 px-2 border-b-2 font-semibold transition-colors ${
                  activeTab === "leaderboard"
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <i className="fas fa-trophy mr-2"></i>
                Bảng xếp hạng
              </button>
              <button
                onClick={() => setActiveTab("achievements")}
                className={`py-4 px-2 border-b-2 font-semibold transition-colors ${
                  activeTab === "achievements"
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <i className="fas fa-medal mr-2"></i>
                Thành tựu
              </button>
            </nav>
          </div>
        </div>
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === "reviews" && (
              <div className="space-y-6">
                {/* Reviews Feed */}
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                  >
                    {/* Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <Link
                          to={`/community/profile/${review.user.id}`}
                          className="flex items-center space-x-3"
                        >
                          <img
                            src={review.user.avatar}
                            alt={review.user.name}
                            // className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-100"
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-100 hover:ring-primary-300 transition-all cursor-pointer"
                          />
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold text-gray-900 hover:text-primary-600 transition-colors flex items-center">
                                {review.user.name}
                              </h4>
                              {review.verified && (
                                <i className="fas fa-check-circle text-blue-500 text-sm"></i>
                              )}
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <i className="fas fa-map-marker-alt"></i>
                              <span>{review.destination}</span>
                              <span>•</span>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </Link>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(
                              review.user.level
                            )}`}
                          >
                            {review.user.level}
                          </span>
                          <div className="flex items-center space-x-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>

                      <h5 className="text-lg font-bold text-gray-900 mb-3">
                        {review.title}
                      </h5>
                      <p className="text-gray-600 leading-relaxed">
                        {review.content}
                      </p>
                    </div>

                    {/* Images */}
                    {review.images.length > 0 && (
                      <div className="px-6 pb-4">
                        <div
                          className={`grid gap-2 ${
                            review.images.length === 1
                              ? "grid-cols-1"
                              : "grid-cols-2"
                          }`}
                        >
                          {review.images.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Review ${index + 1}`}
                              className={`object-cover rounded-xl ${
                                review.images.length === 1 ? "h-128" : "h-64"
                              } w-full`}
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors group">
                            <i className="fas fa-heart group-hover:scale-110 transition-transform"></i>
                            <span className="font-medium">{review.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors group">
                            <i className="fas fa-comment-dots group-hover:scale-110 transition-transform"></i>
                            <span className="font-medium">
                              {review.comments}
                            </span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors group">
                            <i className="fas fa-share-alt group-hover:scale-110 transition-transform"></i>
                            <span className="font-medium">Chia sẻ</span>
                          </button>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-primary-600 font-medium">
                          <i className="fas fa-coins"></i>
                          <span>+{review.likes * 2} điểm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "leaderboard" && (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <i className="fas fa-trophy mr-3"></i>
                    Bảng xếp hạng tháng này
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {leaderboard.map((user, index) => (
                      <div
                        key={user.rank}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all hover:shadow-sm ${
                          index < 3
                            ? "bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                              user.rank === 1
                                ? "bg-yellow-500 text-white"
                                : user.rank === 2
                                ? "bg-gray-400 text-white"
                                : user.rank === 3
                                ? "bg-orange-600 text-white"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {user.rank <= 3 ? (
                              <i
                                className={`fas fa-trophy ${
                                  user.rank === 1
                                    ? "text-yellow-200"
                                    : user.rank === 2
                                    ? "text-gray-200"
                                    : "text-orange-200"
                                }`}
                              ></i>
                            ) : (
                              user.rank
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">
                              {user.name}
                            </h4>
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(
                                user.level
                              )}`}
                            >
                              {user.level}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600">
                            {user.points.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">điểm</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "achievements" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`bg-white rounded-2xl shadow-sm p-6 transition-all hover:shadow-md ${
                        achievement.unlocked
                          ? "ring-2 ring-green-200 bg-gradient-to-br from-green-50 to-emerald-50"
                          : "opacity-75"
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`text-4xl ${
                            achievement.unlocked ? "" : "grayscale opacity-50"
                          }`}
                        >
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2">
                            {achievement.name}
                          </h4>
                          <p className="text-gray-600 text-sm mb-3">
                            {achievement.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-primary-600 font-bold">
                              +{achievement.points} điểm
                            </span>
                            {achievement.unlocked && (
                              <div className="flex items-center text-green-600">
                                <i className="fas fa-check-circle mr-1"></i>
                                <span className="text-sm font-medium">
                                  Đã mở khóa
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "people" && (
              <div className="space-y-6">
                {/* Suggested Users Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {suggestedUsers.map((user) => (
                    <div
                      key={user.id}
                      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
                    >
                      {/* User Card Header */}
                      <div className="relative h-32 bg-gradient-to-r from-blue-400 to-purple-500">
                        <div className="absolute -bottom-12 left-6">
                          <Link to={`/community/profile/${user.id}`}>
                            <img
                              src={user.avatar}
                              alt={user.name}
                              className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover hover:scale-105 transition-transform"
                            />
                          </Link>
                        </div>
                      </div>

                      {/* User Info */}
                      <div className="pt-16 px-6 pb-6">
                        <div className="mb-3">
                          <Link
                            to={`/community/profile/${user.id}`}
                            className="hover:text-primary-600 transition-colors"
                          >
                            <h4 className="font-bold text-lg text-gray-900">
                              {user.name}
                            </h4>
                          </Link>
                          <div className="flex items-center space-x-2 mt-1">
                            <span
                              className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                                user.level === "Gold"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : user.level === "Silver"
                                  ? "bg-gray-100 text-gray-800"
                                  : "bg-orange-100 text-orange-800"
                              }`}
                            >
                              {user.level}
                            </span>
                            <span className="text-gray-400">•</span>
                            <i className="fas fa-map-marker-alt text-gray-400 text-sm"></i>
                            <span className="text-gray-600 text-sm">
                              {user.location}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {user.bio}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-100">
                          <div className="text-center">
                            <div className="font-bold text-gray-900">
                              {user.posts}
                            </div>
                            <div className="text-xs text-gray-500">
                              Bài viết
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-gray-900">
                              {user.friends}
                            </div>
                            <div className="text-xs text-gray-500">Bạn bè</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-primary-600">
                              {user.points}
                            </div>
                            <div className="text-xs text-gray-500">Điểm</div>
                          </div>
                        </div>

                        {/* Mutual Friends */}
                        {user.mutualFriends > 0 && (
                          <div className="flex items-center text-sm text-gray-600 mb-4">
                            <i className="fas fa-user-friends mr-2 text-primary-500"></i>
                            <span>{user.mutualFriends} bạn chung</span>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex space-x-3">
                          {friendRequests[user.id] === "pending" ? (
                            <button
                              onClick={() => handleCancelRequest(user.id)}
                              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center"
                            >
                              <i className="fas fa-clock mr-2"></i>
                              Đã gửi lời mời
                            </button>
                          ) : (
                            <>
                              <button
                                onClick={() => handleAddFriend(user.id)}
                                className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2.5 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center"
                              >
                                <i className="fas fa-user-plus mr-2"></i>
                                Kết nối
                              </button>
                              <Link
                                to={`/community/profile/${user.id}`}
                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center"
                              >
                                <i className="fas fa-eye mr-2"></i>
                                Xem trang
                              </Link>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats Card */}
            {/* <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-chart-line mr-2 text-primary-600"></i>
                Hoạt động của bạn
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">12</div>
                  <div className="text-sm text-blue-800">Reviews</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <div className="text-sm text-green-800">Check-ins</div>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600">45</div>
                  <div className="text-sm text-red-800">Likes</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">23</div>
                  <div className="text-sm text-purple-800">Shares</div>
                </div>
              </div>
            </div> */}

            {/* Recent Achievements */}
            {/* <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-medal mr-2 text-yellow-600"></i>
                Thành tựu gần đây
              </h3>
              <div className="space-y-3">
                {achievements
                  .filter((a) => a.unlocked)
                  .slice(0, 3)
                  .map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200"
                    >
                      <span className="text-2xl">{achievement.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 text-sm">
                          {achievement.name}
                        </div>
                        <div className="text-xs text-green-600 font-medium">
                          +{achievement.points} điểm
                        </div>
                      </div>
                      <i className="fas fa-check-circle text-green-500"></i>
                    </div>
                  ))}
              </div>
            </div> */}

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-zap mr-2 text-orange-600"></i>
                Kiếm điểm nhanh
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-xl font-semibold transition-all flex items-center justify-between group">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-3"></i>
                    <span>Check-in địa điểm</span>
                  </div>
                  <span className="text-blue-200 text-sm">+20 điểm</span>
                </button>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-xl font-semibold transition-all flex items-center justify-between group">
                  <div className="flex items-center">
                    <i className="fas fa-star mr-3"></i>
                    <span>Đánh giá tour</span>
                  </div>
                  <span className="text-green-200 text-sm">+30 điểm</span>
                </button>
                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-3 rounded-xl font-semibold transition-all flex items-center justify-between group">
                  <div className="flex items-center">
                    <i className="fas fa-camera mr-3"></i>
                    <span>Chia sẻ ảnh</span>
                  </div>
                  <span className="text-purple-200 text-sm">+10 điểm</span>
                </button>
              </div>
            </div>

            {/* Top Contributors */}
            {/* <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-users mr-2 text-indigo-600"></i>
                Top Contributors
              </h3>
              <div className="space-y-3">
                {leaderboard.slice(0, 5).map((user, index) => (
                  <div key={user.rank} className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0
                          ? "bg-yellow-100 text-yellow-800"
                          : index === 1
                          ? "bg-gray-100 text-gray-800"
                          : index === 2
                          ? "bg-orange-100 text-orange-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {user.rank}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm">
                        {user.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {user.points.toLocaleString()} điểm
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Trending Topics */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-fire mr-2 text-orange-500"></i>
                Trending
              </h3>
              <div className="space-y-3">
                {[
                  "#DaLat2025",
                  "#HaLongBay",
                  "#SapaTravel",
                  "#PhuQuocBeach",
                ].map((tag, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="font-semibold text-primary-600">{tag}</div>
                    <div className="text-sm text-gray-500">
                      {Math.floor(Math.random() * 1000)} bài viết
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      {showCreatePost && (
        <CreatePostModal
          isOpen={showCreatePost}
          onClose={() => setShowCreatePost(false)}
          onSubmit={handleCreatePost}
        />
      )}
    </div>
  );
};

export default Community;

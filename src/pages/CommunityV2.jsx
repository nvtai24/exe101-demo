import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreatePostModal from "../components/CreatePostModal";
import UserProfileCard from "../components/UserProfileCard";

const CommunityV2 = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [activeTab, setActiveTab] = useState("newsfeed");

  // Current user - TODO: Get from auth context
  const currentUser = {
    id: "current-user-id",
    name: "Devip666",
    avatar:
      "https://www.bleepstatic.com/content/hl-images/2022/03/11/kali-linux.jpg",
    level: "Super User",
    points: 9999,
  };

  // Mock data - Replace with API calls
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        id: "user-1",
        name: "Rô Nan Đô",
        avatar:
          "https://tse2.mm.bing.net/th/id/OIP.cvtvy8bhCp0nMsXFIf52fQHaEK?cb=12&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
        level: "Gold",
        verified: true,
        isFriend: false,
      },
      destination: "Hạ Long Bay",
      content:
        "Tour du thuyền rất đẹp, hướng dẫn viên nhiệt tình. Cảnh quan thiên nhiên tuyệt vời!",
      images: [
        "https://www.chudu24.com/wp-content/uploads/2018/06/H%E1%BA%A1.Long_.Bay_.original.1986.jpg",
      ],
      rating: 5,
      likes: 24,
      comments: 8,
      shares: 3,
      date: "2 ngày trước",
    },
    {
      id: 2,
      user: {
        id: "user-2",
        name: "Trần Văn Mười",
        avatar:
          "https://tse1.mm.bing.net/th/id/OIP.kMAI7IpT9DIy1LzoNjBIdgHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        level: "Silver",
        verified: false,
        isFriend: true,
      },
      destination: "Hội An",
      content:
        "Đèn lồng rất đẹp, ẩm thực phong phú. Tuy nhiên khá đông khách du lịch.",
      images: [
        "https://static.vinwonders.com/production/hoi-an-vietnam-map-banner.jpg",
      ],
      rating: 4,
      likes: 18,
      comments: 5,
      shares: 2,
      date: "1 tuần trước",
    },
  ]);

  const suggestedUsers = [
    {
      id: "user-3",
      name: "Nguyễn Thị B",
      avatar: "https://i.pravatar.cc/150?img=5",
      level: "Gold",
      points: 2200,
      verified: true,
      bio: "Travel blogger | 50+ countries visited",
      isFriend: false,
    },
    {
      id: "user-4",
      name: "Lê Văn C",
      avatar: "https://i.pravatar.cc/150?img=12",
      level: "Silver",
      points: 1800,
      verified: false,
      bio: "Passionate about nature and adventure",
      isFriend: false,
    },
  ];

  const handleCreatePost = (newPost) => {
    setPosts([{ ...newPost, id: Date.now() }, ...posts]);
  };

  const handleAddFriend = (userId) => {
    console.log("Add friend:", userId);
    // TODO: Call API to add friend
  };

  const handleMessage = (userId) => {
    console.log("Message user:", userId);
    // TODO: Open message modal
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fas fa-star text-sm ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      ></i>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              <i className="fas fa-users mr-3 text-primary-600"></i>
              Cộng đồng TravelTech
            </h1>
            <button
              onClick={() => setShowCreatePost(true)}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-colors flex items-center"
            >
              <i className="fas fa-plus mr-2"></i>
              Tạo bài đăng
            </button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab("newsfeed")}
              className={`pb-4 px-2 border-b-2 font-semibold transition-colors ${
                activeTab === "newsfeed"
                  ? "border-primary-500 text-primary-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <i className="fas fa-newspaper mr-2"></i>
              Bảng tin
            </button>
            <button
              onClick={() => setActiveTab("people")}
              className={`pb-4 px-2 border-b-2 font-semibold transition-colors ${
                activeTab === "people"
                  ? "border-primary-500 text-primary-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <i className="fas fa-user-friends mr-2"></i>
              Mọi người
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            {activeTab === "newsfeed" && (
              <div className="space-y-6">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Post Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Link to={`/community/profile/${post.user.id}`}>
                            <img
                              src={post.user.avatar}
                              alt={post.user.name}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-100 hover:ring-primary-300 transition-all cursor-pointer"
                            />
                          </Link>
                          <div>
                            <Link to={`/community/profile/${post.user.id}`}>
                              <h4 className="font-semibold text-gray-900 hover:text-primary-600 transition-colors flex items-center">
                                {post.user.name}
                                {post.user.verified && (
                                  <i className="fas fa-check-circle text-blue-500 text-sm ml-2"></i>
                                )}
                              </h4>
                            </Link>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <i className="fas fa-map-marker-alt"></i>
                              <span>{post.destination}</span>
                              <span>•</span>
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {renderStars(post.rating)}
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-4">
                        {post.content}
                      </p>
                    </div>

                    {/* Post Images */}
                    {post.images && post.images.length > 0 && (
                      <div className="px-6 pb-4">
                        <img
                          src={post.images[0]}
                          alt={post.destination}
                          className="w-full h-96 object-cover rounded-xl"
                        />
                      </div>
                    )}

                    {/* Post Actions */}
                    <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors group">
                          <i className="far fa-heart group-hover:fas group-hover:scale-110 transition-transform"></i>
                          <span className="font-medium">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors group">
                          <i className="far fa-comment-dots group-hover:scale-110 transition-transform"></i>
                          <span className="font-medium">{post.comments}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors group">
                          <i className="far fa-share-square group-hover:scale-110 transition-transform"></i>
                          <span className="font-medium">{post.shares}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "people" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Gợi ý kết bạn
                </h2>
                {suggestedUsers.map((user) => (
                  <UserProfileCard
                    key={user.id}
                    user={user}
                    currentUserId={currentUser.id}
                    onAddFriend={handleAddFriend}
                    onMessage={handleMessage}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* User Profile Summary */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">
                    {currentUser.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-red-500 text-yellow-400 text-xs font-medium rounded-full">
                      {currentUser.level}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {currentUser.points} điểm
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">12</div>
                  <div className="text-xs text-gray-600">Bài viết</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">45</div>
                  <div className="text-xs text-gray-600">Bạn bè</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">23</div>
                  <div className="text-xs text-gray-600">Check-ins</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-bolt mr-2 text-yellow-500"></i>
                Hoạt động nhanh
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-xl font-semibold transition-all flex items-center justify-between">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-3"></i>
                    <span>Check-in</span>
                  </div>
                  <span className="text-blue-200 text-sm">+20 điểm</span>
                </button>
                <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-xl font-semibold transition-all flex items-center justify-between">
                  <div className="flex items-center">
                    <i className="fas fa-star mr-3"></i>
                    <span>Đánh giá</span>
                  </div>
                  <span className="text-green-200 text-sm">+30 điểm</span>
                </button>
              </div>
            </div>

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
      <CreatePostModal
        isOpen={showCreatePost}
        onClose={() => setShowCreatePost(false)}
        onSubmit={handleCreatePost}
        currentUser={currentUser}
      />
    </div>
  );
};

export default CommunityV2;

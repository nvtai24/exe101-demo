import React, { useState } from "react";
import { Link } from "react-router-dom";

const AIPlanner = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: "",
    duration: "",
    budget: "",
    interests: [],
    groupSize: "",
    travelStyle: "",
    accommodation: "",
    transportation: "",
    activities: [],
    specialRequirements: "",
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);

  const steps = [
    {
      number: 1,
      title: "Điểm đến",
      description: "Chọn nơi bạn muốn khám phá",
      icon: "fas fa-map-marker-alt",
    },
    {
      number: 2,
      title: "Sở thích",
      description: "Chia sẻ những gì bạn yêu thích",
      icon: "fas fa-heart",
    },
    {
      number: 3,
      title: "Chi tiết",
      description: "Hoàn thiện kế hoạch của bạn",
      icon: "fas fa-cog",
    },
  ];

  const interestOptions = [
    { id: "culture", label: "Văn hóa & Lịch sử", icon: "fas fa-landmark" },
    { id: "nature", label: "Thiên nhiên", icon: "fas fa-mountain" },
    { id: "adventure", label: "Phiêu lưu", icon: "fas fa-hiking" },
    { id: "food", label: "Ẩm thực", icon: "fas fa-utensils" },
    { id: "relax", label: "Thư giãn", icon: "fas fa-spa" },
  ];

  const handleInterestToggle = (interestId) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter((id) => id !== interestId)
        : [...prev.interests, interestId],
    }));
  };

  const handleActivityToggle = (activityId) => {
    setFormData((prev) => ({
      ...prev,
      activities: prev.activities.includes(activityId)
        ? prev.activities.filter((id) => id !== activityId)
        : [...prev.activities, activityId],
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const activityOptions = [
    { id: "sightseeing", label: "Tham quan", icon: "fas fa-camera" },
    { id: "shopping", label: "Mua sắm", icon: "fas fa-shopping-bag" },
    { id: "nightlife", label: "Cuộc sống về đêm", icon: "fas fa-moon" },
    { id: "museums", label: "Bảo tàng", icon: "fas fa-university" },
    { id: "beaches", label: "Bãi biển", icon: "fas fa-umbrella-beach" },
    { id: "hiking", label: "Đi bộ đường dài", icon: "fas fa-hiking" },
    { id: "photography", label: "Chụp ảnh", icon: "fas fa-camera-retro" },
    { id: "local-food", label: "Ẩm thực địa phương", icon: "fas fa-utensils" },
    { id: "festivals", label: "Lễ hội", icon: "fas fa-music" },
  ];

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generatePlan = async () => {
    setIsGenerating(true);

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setGeneratedPlan({
      title: `Kế hoạch du lịch ${formData.destination}`,
      duration: formData.duration,
      budget: formData.budget,
      itinerary: [
        {
          day: 1,
          title: "Khám phá trung tâm thành phố",
          activities: [
            "Tham quan chợ Bến Thành",
            "Tham quan Nhà thờ Đức Bà",
            "Ăn trưa tại nhà hàng địa phương",
            "Tham quan Bưu điện Trung tâm",
            "Tản bộ trên phố đi bộ Nguyễn Huệ",
          ],
          meals: ["Sáng: Phở", "Trưa: Cơm tấm", "Tối: Bún bò Huế"],
          accommodation: "Khách sạn 3 sao trung tâm",
          budget: "500,000₫",
        },
        {
          day: 2,
          title: "Khám phá văn hóa và lịch sử",
          activities: [
            "Tham quan Dinh Độc Lập",
            "Tham quan Bảo tàng Chứng tích Chiến tranh",
            "Ăn trưa tại khu vực quận 1",
            "Tham quan Chợ Bình Tây",
            "Thưởng thức cà phê Sài Gòn",
          ],
          meals: ["Sáng: Bánh mì", "Trưa: Cơm gà", "Tối: Lẩu cá"],
          accommodation: "Khách sạn 3 sao trung tâm",
          budget: "450,000₫",
        },
      ],
      totalBudget: "1,500,000₫",
      tips: [
        "Mang theo kem chống nắng và mũ",
        "Đổi tiền tại ngân hàng để có tỷ giá tốt",
        "Tải app Grab để di chuyển dễ dàng",
        "Mặc quần áo thoải mái, phù hợp thời tiết",
      ],
    });

    setIsGenerating(false);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Bạn muốn đi đâu?
              </h2>
              <p className="text-gray-600">
                Hãy cho chúng tôi biết về chuyến đi trong mơ của bạn
              </p>
            </div>

            {/* Destination Cards */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-6">
                Điểm đến mong muốn
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  {
                    value: "hanoi",
                    name: "Hà Nội",
                    icon: "🏛️",
                    color: "from-red-400 to-red-600",
                  },
                  {
                    value: "halong",
                    name: "Hạ Long",
                    icon: "⛵",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    value: "sapa",
                    name: "Sapa",
                    icon: "🏔️",
                    color: "from-green-400 to-green-600",
                  },
                  {
                    value: "hue",
                    name: "Huế",
                    icon: "🏯",
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    value: "hoian",
                    name: "Hội An",
                    icon: "🏮",
                    color: "from-yellow-400 to-yellow-600",
                  },
                  {
                    value: "danang",
                    name: "Đà Nẵng",
                    icon: "🌉",
                    color: "from-orange-400 to-orange-600",
                  },
                  {
                    value: "nhatrang",
                    name: "Nha Trang",
                    icon: "🏖️",
                    color: "from-cyan-400 to-cyan-600",
                  },
                  {
                    value: "dalat",
                    name: "Đà Lạt",
                    icon: "🌸",
                    color: "from-pink-400 to-pink-600",
                  },
                  {
                    value: "hcmc",
                    name: "TP.HCM",
                    icon: "🏙️",
                    color: "from-indigo-400 to-indigo-600",
                  },
                  {
                    value: "phuquoc",
                    name: "Phú Quốc",
                    icon: "🏝️",
                    color: "from-teal-400 to-teal-600",
                  },
                ].map((dest) => (
                  <button
                    key={dest.value}
                    type="button"
                    onClick={() => handleInputChange("destination", dest.value)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-200 transform hover:scale-105 ${
                      formData.destination === dest.value
                        ? "border-primary-500 bg-primary-50 shadow-lg"
                        : "border-gray-200 hover:border-primary-300 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${dest.color} flex items-center justify-center text-white text-xl`}
                    >
                      {dest.icon}
                    </div>
                    <div className="font-medium text-gray-900 text-sm">
                      {dest.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Duration and Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Thời gian du lịch
                </label>
                <div className="space-y-3">
                  {[
                    { value: "1-2", label: "1-2 ngày", desc: "Cuối tuần ngắn" },
                    { value: "3-4", label: "3-4 ngày", desc: "Nghỉ lễ" },
                    { value: "5-7", label: "5-7 ngày", desc: "Tuần du lịch" },
                    { value: "8-14", label: "8-14 ngày", desc: "Kỳ nghỉ dài" },
                    {
                      value: "15+",
                      label: "Trên 15 ngày",
                      desc: "Khám phá sâu",
                    },
                  ].map((dur) => (
                    <button
                      key={dur.value}
                      type="button"
                      onClick={() => handleInputChange("duration", dur.value)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                        formData.duration === dur.value
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-gray-200 hover:border-primary-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="font-semibold">{dur.label}</div>
                      <div className="text-sm text-gray-500">{dur.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Ngân sách dự kiến
                </label>
                <div className="space-y-3">
                  {[
                    {
                      value: "under-1m",
                      label: "Dưới 1 triệu",
                      desc: "Tiết kiệm",
                    },
                    { value: "1-3m", label: "1-3 triệu", desc: "Phổ biến" },
                    { value: "3-5m", label: "3-5 triệu", desc: "Thoải mái" },
                    { value: "5-10m", label: "5-10 triệu", desc: "Cao cấp" },
                    {
                      value: "over-10m",
                      label: "Trên 10 triệu",
                      desc: "Sang trọng",
                    },
                  ].map((budget) => (
                    <button
                      key={budget.value}
                      type="button"
                      onClick={() => handleInputChange("budget", budget.value)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                        formData.budget === budget.value
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-gray-200 hover:border-primary-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="font-semibold">{budget.label}</div>
                      <div className="text-sm text-gray-500">{budget.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Group Size */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Số lượng người
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { value: "1", label: "1 người", icon: "👤" },
                  { value: "2", label: "2 người", icon: "👫" },
                  { value: "3-4", label: "3-4 người", icon: "👨‍👩‍👦" },
                  { value: "5-8", label: "5-8 người", icon: "👨‍👩‍👧‍👦" },
                  { value: "9+", label: "Trên 9 người", icon: "👥" },
                ].map((size) => (
                  <button
                    key={size.value}
                    type="button"
                    onClick={() => handleInputChange("groupSize", size.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                      formData.groupSize === size.value
                        ? "border-primary-500 bg-primary-50 text-primary-700"
                        : "border-gray-200 hover:border-primary-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="text-2xl mb-2">{size.icon}</div>
                    <div className="font-medium text-sm">{size.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Bạn thích gì?
              </h2>
              <p className="text-gray-600">
                Hãy chia sẻ sở thích để chúng tôi tạo kế hoạch phù hợp nhất
              </p>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-6">
                Sở thích của bạn{" "}
                <span className="text-sm text-gray-500">(chọn nhiều)</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {interestOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleInterestToggle(option.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-200 transform hover:scale-105 text-center ${
                      formData.interests.includes(option.id)
                        ? "border-primary-500 bg-gradient-to-br from-primary-50 to-accent-50 text-primary-700 shadow-lg"
                        : "border-gray-200 hover:border-primary-300 hover:bg-gray-50 hover:shadow-md"
                    }`}
                  >
                    <i
                      className={`${option.icon} text-3xl mb-3 block ${
                        formData.interests.includes(option.id)
                          ? "text-primary-600"
                          : "text-gray-500"
                      }`}
                    ></i>
                    <span className="text-sm font-semibold">
                      {option.label}
                    </span>
                    {formData.interests.includes(option.id) && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Style */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-6">
                Phong cách du lịch
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    value: "budget",
                    label: "Tiết kiệm",
                    desc: "Tối ưu chi phí",
                    icon: "💰",
                    color: "from-green-400 to-green-600",
                  },
                  {
                    value: "comfort",
                    label: "Thoải mái",
                    desc: "Cân bằng giá và chất lượng",
                    icon: "✨",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    value: "luxury",
                    label: "Sang trọng",
                    desc: "Trải nghiệm cao cấp",
                    icon: "👑",
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    value: "adventure",
                    label: "Mạo hiểm",
                    desc: "Thích thú thách",
                    icon: "🏔️",
                    color: "from-orange-400 to-orange-600",
                  },
                  {
                    value: "cultural",
                    label: "Văn hóa",
                    desc: "Khám phá lịch sử",
                    icon: "🏛️",
                    color: "from-red-400 to-red-600",
                  },
                  {
                    value: "relax",
                    label: "Thư giãn",
                    desc: "Nghỉ ngơi, tái tạo",
                    icon: "🧘",
                    color: "from-teal-400 to-teal-600",
                  },
                ].map((style) => (
                  <button
                    key={style.value}
                    type="button"
                    onClick={() =>
                      handleInputChange("travelStyle", style.value)
                    }
                    className={`p-6 rounded-2xl border-2 transition-all duration-200 transform hover:scale-105 ${
                      formData.travelStyle === style.value
                        ? "border-primary-500 bg-primary-50 shadow-lg"
                        : "border-gray-200 hover:border-primary-300 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${style.color} flex items-center justify-center text-white text-xl`}
                    >
                      {style.icon}
                    </div>
                    <div className="font-semibold text-gray-900 mb-2">
                      {style.label}
                    </div>
                    <div className="text-sm text-gray-500">{style.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Accommodation and Transportation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Loại hình lưu trú
                </label>
                <div className="space-y-3">
                  {[
                    {
                      value: "hostel",
                      label: "Hostel",
                      desc: "Giá rẻ, gặp gỡ bạn bè",
                      icon: "🏠",
                    },
                    {
                      value: "hotel",
                      label: "Khách sạn",
                      desc: "Tiện nghi đầy đủ",
                      icon: "🏨",
                    },
                    {
                      value: "resort",
                      label: "Resort",
                      desc: "Nghỉ dưỡng cao cấp",
                      icon: "🏖️",
                    },
                    {
                      value: "homestay",
                      label: "Homestay",
                      desc: "Trải nghiệm địa phương",
                      icon: "🏡",
                    },
                    {
                      value: "villa",
                      label: "Villa",
                      desc: "Riêng tư, sang trọng",
                      icon: "🏘️",
                    },
                  ].map((acc) => (
                    <button
                      key={acc.value}
                      type="button"
                      onClick={() =>
                        handleInputChange("accommodation", acc.value)
                      }
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center ${
                        formData.accommodation === acc.value
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-gray-200 hover:border-primary-300 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-2xl mr-4">{acc.icon}</span>
                      <div>
                        <div className="font-semibold">{acc.label}</div>
                        <div className="text-sm text-gray-500">{acc.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Phương tiện di chuyển
                </label>
                <div className="space-y-3">
                  {[
                    {
                      value: "bus",
                      label: "Xe khách",
                      desc: "Tiết kiệm, phổ biến",
                      icon: "🚌",
                    },
                    {
                      value: "train",
                      label: "Tàu hỏa",
                      desc: "Thoải mái, ngắm cảnh",
                      icon: "🚂",
                    },
                    {
                      value: "plane",
                      label: "Máy bay",
                      desc: "Nhanh chóng, thuận tiện",
                      icon: "✈️",
                    },
                    {
                      value: "car",
                      label: "Ô tô riêng",
                      desc: "Tự do, linh hoạt",
                      icon: "🚗",
                    },
                    {
                      value: "motorbike",
                      label: "Xe máy",
                      desc: "Phiêu lưu, khám phá",
                      icon: "🏍️",
                    },
                  ].map((trans) => (
                    <button
                      key={trans.value}
                      type="button"
                      onClick={() =>
                        handleInputChange("transportation", trans.value)
                      }
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center ${
                        formData.transportation === trans.value
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-gray-200 hover:border-primary-300 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-2xl mr-4">{trans.icon}</span>
                      <div>
                        <div className="font-semibold">{trans.label}</div>
                        <div className="text-sm text-gray-500">
                          {trans.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
                Hoàn thiện kế hoạch
              </h2>
              <p className="text-gray-600">
                Một vài chi tiết cuối để tạo ra kế hoạch hoàn hảo cho bạn
              </p>
            </div>

            {/* Activities */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-6">
                Hoạt động yêu thích{" "}
                <span className="text-sm text-gray-500">(chọn nhiều)</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {activityOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleActivityToggle(option.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-200 transform hover:scale-105 text-center relative ${
                      formData.activities.includes(option.id)
                        ? "border-primary-500 bg-gradient-to-br from-primary-50 to-accent-50 text-primary-700 shadow-lg"
                        : "border-gray-200 hover:border-primary-300 hover:bg-gray-50 hover:shadow-md"
                    }`}
                  >
                    <i
                      className={`${option.icon} text-2xl mb-3 block ${
                        formData.activities.includes(option.id)
                          ? "text-primary-600"
                          : "text-gray-500"
                      }`}
                    ></i>
                    <span className="text-sm font-semibold">
                      {option.label}
                    </span>
                    {formData.activities.includes(option.id) && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Special Requirements */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Yêu cầu đặc biệt
              </label>
              <div className="bg-gray-50 rounded-2xl p-6">
                <textarea
                  value={formData.specialRequirements}
                  onChange={(e) =>
                    handleInputChange("specialRequirements", e.target.value)
                  }
                  placeholder="Ví dụ: Ăn chay, khuyết tật, dị ứng thức ăn, cần phòng không hút thuốc, muốn có hướng dẫn viên nói tiếng Anh..."
                  className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 focus:border-primary-500 focus:outline-none transition-colors duration-200 resize-none"
                  rows={4}
                />
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <i className="fas fa-info-circle mr-2"></i>
                  Những thông tin này giúp chúng tôi tạo kế hoạch phù hợp nhất
                  với bạn
                </div>
              </div>
            </div>

            {/* Summary Preview */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-eye text-primary-600 mr-2"></i>
                Xem trước kế hoạch
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl mb-2">📍</div>
                  <div className="font-semibold text-gray-900">
                    {formData.destination
                      ? formData.destination.charAt(0).toUpperCase() +
                        formData.destination.slice(1)
                      : "Chưa chọn"}
                  </div>
                  <div className="text-xs text-gray-500">Điểm đến</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl mb-2">⏰</div>
                  <div className="font-semibold text-gray-900">
                    {formData.duration || "Chưa chọn"}
                  </div>
                  <div className="text-xs text-gray-500">Thời gian</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-semibold text-gray-900">
                    {formData.budget || "Chưa chọn"}
                  </div>
                  <div className="text-xs text-gray-500">Ngân sách</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl mb-2">❤️</div>
                  <div className="font-semibold text-gray-900">
                    {formData.interests.length} sở thích
                  </div>
                  <div className="text-xs text-gray-500">Đã chọn</div>
                </div>
              </div>
              {formData.destination &&
                formData.duration &&
                formData.budget &&
                formData.interests.length > 0 && (
                  <div className="mt-4 p-4 bg-green-100 rounded-xl flex items-center justify-center text-green-700">
                    <i className="fas fa-check-circle mr-2"></i>
                    <span className="font-medium">
                      Sẵn sàng tạo kế hoạch AI!
                    </span>
                  </div>
                )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (generatedPlan) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <i className="fas fa-check text-white text-3xl"></i>
            </div>
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Kế hoạch du lịch đã sẵn sàng!
            </h1>
            <p className="text-xl text-gray-600">
              AI đã tạo ra kế hoạch du lịch hoàn hảo dành riêng cho bạn
            </p>
          </div>

          <div className="card p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold text-gray-900">
                {generatedPlan.title}
              </h2>
              <div className="flex space-x-4">
                <button className="btn btn-outline">
                  <i className="fas fa-download mr-2"></i>
                  Tải PDF
                </button>
                <button className="btn btn-primary">
                  <i className="fas fa-share mr-2"></i>
                  Chia sẻ
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <i className="fas fa-clock text-blue-600 text-2xl mb-2"></i>
                <div className="font-semibold text-gray-900">
                  {generatedPlan.duration}
                </div>
                <div className="text-sm text-gray-600">Thời gian</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <i className="fas fa-wallet text-green-600 text-2xl mb-2"></i>
                <div className="font-semibold text-gray-900">
                  {generatedPlan.totalBudget}
                </div>
                <div className="text-sm text-gray-600">Tổng ngân sách</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <i className="fas fa-route text-purple-600 text-2xl mb-2"></i>
                <div className="font-semibold text-gray-900">
                  {generatedPlan.itinerary.length} ngày
                </div>
                <div className="text-sm text-gray-600">Lịch trình</div>
              </div>
            </div>

            <div className="space-y-6">
              {generatedPlan.itinerary.map((day, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6"
                >
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                    Ngày {day.day}: {day.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <i className="fas fa-list-ul text-primary-600 mr-2"></i>
                        Hoạt động
                      </h4>
                      <ul className="space-y-2">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start">
                            <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                            <span className="text-gray-700">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <i className="fas fa-utensils text-primary-600 mr-2"></i>
                        Ẩm thực
                      </h4>
                      <ul className="space-y-2">
                        {day.meals.map((meal, mealIndex) => (
                          <li key={mealIndex} className="text-gray-700">
                            {meal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <i className="fas fa-bed mr-1"></i>
                      {day.accommodation}
                    </div>
                    <div className="font-semibold text-primary-600">
                      {day.budget}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-yellow-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-lightbulb text-yellow-600 mr-2"></i>
                Mẹo du lịch
              </h4>
              <ul className="space-y-2">
                {generatedPlan.tips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-star text-yellow-500 mr-3 mt-1"></i>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setGeneratedPlan(null);
                setCurrentStep(1);
                setFormData({
                  destination: "",
                  duration: "",
                  budget: "",
                  interests: [],
                  groupSize: "",
                  travelStyle: "",
                  accommodation: "",
                  transportation: "",
                  activities: [],
                  specialRequirements: "",
                });
              }}
              className="btn btn-outline mr-4"
            >
              <i className="fas fa-redo mr-2"></i>
              Tạo kế hoạch mới
            </button>
            <Link to="/tours" className="btn btn-primary">
              <i className="fas fa-calendar-check mr-2"></i>
              Đặt tour ngay
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden py-24"
        style={{
          backgroundImage: "url('./src/assets/images/ai-planner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <i className="fas fa-magic text-white text-4xl"></i>
          </div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-white mb-6 text-shadow-lg">
            AI Trip Planner
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 text-shadow">
            Tạo kế hoạch du lịch thông minh trong vài phút với sức mạnh của AI
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1M+</div>
              <div className="text-white/80 text-sm">Kế hoạch tạo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-white/80 text-sm">Điểm đến</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.9★</div>
              <div className="text-white/80 text-sm">Đánh giá</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-white/80 text-sm">Hỗ trợ</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Progress Steps */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      currentStep >= step.number
                        ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg scale-110"
                        : currentStep === step.number
                        ? "bg-primary-100 text-primary-600 border-2 border-primary-300"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <i className={`${step.icon} text-lg`}></i>
                  </div>
                  <div className="mt-3 text-center">
                    <div
                      className={`text-sm font-semibold ${
                        currentStep >= step.number
                          ? "text-primary-600"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 max-w-24">
                      {step.description}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-8 mt-8">
                    <div
                      className={`h-1 rounded-full transition-all duration-300 ${
                        currentStep > step.number
                          ? "bg-gradient-to-r from-primary-600 to-accent-600"
                          : "bg-gray-200"
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Step Counter */}
          <div className="text-center mb-8">
            <div className="text-sm text-gray-500">
              Bước {currentStep} / {steps.length}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form Content */}
          <div className="min-h-96">{renderStepContent()}</div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                currentStep === 1
                  ? "text-gray-400 cursor-not-allowed invisible"
                  : "text-gray-600 hover:text-primary-600 hover:bg-primary-50"
              }`}
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Quay lại
            </button>

            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index + 1 <= currentStep ? "bg-primary-600" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>

            {currentStep < 3 ? (
              <button
                onClick={nextStep}
                className="flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-accent-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Tiếp theo
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            ) : (
              <button
                onClick={generatePlan}
                disabled={isGenerating}
                className={`flex items-center px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg ${
                  isGenerating
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                } text-white`}
              >
                {isGenerating ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-3"></i>
                    Đang tạo kế hoạch...
                  </>
                ) : (
                  <>
                    <i className="fas fa-sparkles mr-3"></i>
                    Tạo kế hoạch AI
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
              <i className="fas fa-brain text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">
              AI Thông minh
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Sử dụng trí tuệ nhân tạo để phân tích sở thích và tạo lộ trình tối
              ưu cho từng cá nhân
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
              <i className="fas fa-clock text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">
              Tiết kiệm thời gian
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Tạo kế hoạch du lịch hoàn chỉnh chỉ trong vài phút thay vì hàng
              giờ nghiên cứu
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
              <i className="fas fa-user-cog text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">
              Cá nhân hóa
            </h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Lộ trình được thiết kế riêng theo sở thích, ngân sách và phong
              cách du lịch của bạn
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-gray-600">
              Hơn 10,000+ khách hàng đã tin tưởng sử dụng dịch vụ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "AI Planner đã giúp tôi tạo ra chuyến du lịch Sapa tuyệt vời.
                Mọi thứ được sắp xếp chi tiết và phù hợp với ngân sách."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <div className="font-semibold">Nguyễn Văn An</div>
                  <div className="text-sm text-gray-500">Khách hàng VIP</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Dịch vụ tuyệt vời! AI hiểu rõ sở thích của tôi và tạo ra kế
                hoạch hoàn hảo cho chuyến đi Phú Quốc."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <div>
                  <div className="font-semibold">Trần Thị Mai</div>
                  <div className="text-sm text-gray-500">
                    Du khách thường xuyên
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPlanner;

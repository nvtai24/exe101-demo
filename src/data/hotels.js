// Hotels data structure
export const hotels = [
  {
    id: "hotel-1",
    name: "Luxury Da Nang Beach Resort",
    slug: "luxury-danang-beach-resort",
    category: "Resort",
    location: {
      city: "Đà Nẵng",
      address: "Võ Nguyên Giáp, Phước Mỹ, Sơn Trà",
      coordinates: { lat: 16.0544, lng: 108.251 },
    },
    rating: 4.8,
    reviewCount: 245,
    priceRange: "1,500,000 - 5,000,000",
    startingPrice: 1500000,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    ],
    description:
      "Resort cao cấp bên bờ biển Đà Nẵng với view tuyệt đẹp, phòng nghỉ sang trọng và đầy đủ tiện nghi hiện đại. Nơi lý tưởng cho kỳ nghỉ của gia đình và các cặp đôi.",
    amenities: [
      { icon: "fa-wifi", name: "WiFi miễn phí", available: true },
      { icon: "fa-swimming-pool", name: "Hồ bơi ngoài trời", available: true },
      { icon: "fa-spa", name: "Spa & Massage", available: true },
      { icon: "fa-dumbbell", name: "Phòng gym", available: true },
      { icon: "fa-utensils", name: "Nhà hàng", available: true },
      { icon: "fa-cocktail", name: "Bar & Lounge", available: true },
      { icon: "fa-parking", name: "Bãi đỗ xe miễn phí", available: true },
      {
        icon: "fa-concierge-bell",
        name: "Dịch vụ phòng 24/7",
        available: true,
      },
      { icon: "fa-plane-departure", name: "Đưa đón sân bay", available: true },
      { icon: "fa-baby", name: "Dịch vụ trông trẻ", available: false },
    ],
    roomTypes: [
      {
        id: "room-1",
        name: "Deluxe Ocean View",
        description: "Phòng Deluxe với view biển tuyệt đẹp, diện tích 35m²",
        price: 1500000,
        maxGuests: 2,
        size: "35m²",
        bedType: "1 King bed hoặc 2 Single beds",
        amenities: ["Balcony", "Ocean View", "Mini Bar", "Smart TV"],
        images: [
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
        ],
        available: true,
      },
      {
        id: "room-2",
        name: "Suite Premium",
        description: "Suite cao cấp với phòng khách riêng và view panoramic",
        price: 3000000,
        maxGuests: 4,
        size: "65m²",
        bedType: "1 King bed + 1 Sofa bed",
        amenities: [
          "Living Room",
          "Jacuzzi",
          "Premium Minibar",
          "Butler Service",
        ],
        images: [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
        ],
        available: true,
      },
      {
        id: "room-3",
        name: "Family Villa",
        description: "Villa rộng rãi dành cho gia đình với hồ bơi riêng",
        price: 5000000,
        maxGuests: 6,
        size: "120m²",
        bedType: "2 King beds + 2 Single beds",
        amenities: ["Private Pool", "Kitchen", "BBQ Area", "Garden View"],
        images: [
          "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800",
          "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=800",
        ],
        available: true,
      },
    ],
    reviews: [
      {
        id: "review-1",
        userName: "Nguyễn Minh Anh",
        userAvatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        date: "2024-01-15",
        comment:
          "Resort tuyệt vời! Phòng sạch sẽ, view đẹp, nhân viên thân thiện. Chắc chắn sẽ quay lại.",
        helpful: 24,
      },
      {
        id: "review-2",
        userName: "Trần Văn Hùng",
        userAvatar: "https://i.pravatar.cc/150?img=2",
        rating: 4,
        date: "2024-01-10",
        comment:
          "Khách sạn đẹp, vị trí thuận tiện. Tuy nhiên giá hơi cao một chút.",
        helpful: 15,
      },
      {
        id: "review-3",
        userName: "Lê Thị Hương",
        userAvatar: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        date: "2024-01-05",
        comment:
          "Gia đình mình rất hài lòng với dịch vụ tại đây. Hồ bơi đẹp, đồ ăn ngon!",
        helpful: 32,
      },
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "12:00",
      cancellation: "Miễn phí hủy phòng trước 24 giờ",
      children: "Trẻ em dưới 6 tuổi được miễn phí",
      pets: "Không cho phép mang theo thú cưng",
    },
    contact: {
      phone: "0236 3847 333",
      email: "info@luxurydanang.com",
      website: "www.luxurydanang.com",
    },
    hostInfo: {
      name: "Mr. Nguyễn Văn A",
      avatar: "https://i.pravatar.cc/150?img=10",
      responseRate: "95%",
      responseTime: "Trong vòng 1 giờ",
      verified: true,
    },
  },
  {
    id: "hotel-2",
    name: "Hanoi Boutique Hotel & Spa",
    slug: "hanoi-boutique-hotel-spa",
    category: "Hotel",
    location: {
      city: "Hà Nội",
      address: "36 Phố Hàng Trống, Hoàn Kiếm",
      coordinates: { lat: 21.0285, lng: 105.8542 },
    },
    rating: 4.6,
    reviewCount: 189,
    priceRange: "800,000 - 2,500,000",
    startingPrice: 800000,
    images: [
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      "https://images.unsplash.com/photo-1596178060671-7a80e0a13b0e?w=800",
    ],
    description:
      "Khách sạn boutique sang trọng ở trung tâm Hà Nội, gần Hồ Gươm. Thiết kế kết hợp phong cách Đông Dương cổ điển và hiện đại.",
    amenities: [
      { icon: "fa-wifi", name: "WiFi miễn phí", available: true },
      { icon: "fa-spa", name: "Spa", available: true },
      { icon: "fa-utensils", name: "Nhà hàng", available: true },
      { icon: "fa-coffee", name: "Quán café", available: true },
      { icon: "fa-parking", name: "Bãi đỗ xe", available: true },
      { icon: "fa-concierge-bell", name: "Lễ tân 24/7", available: true },
      { icon: "fa-shuttle-van", name: "Đưa đón sân bay", available: true },
      { icon: "fa-luggage-cart", name: "Giữ hành lý", available: true },
    ],
    roomTypes: [
      {
        id: "room-4",
        name: "Superior Room",
        description: "Phòng tiện nghi với thiết kế hiện đại",
        price: 800000,
        maxGuests: 2,
        size: "25m²",
        bedType: "1 Queen bed",
        amenities: ["City View", "Work Desk", "Mini Bar", "Cable TV"],
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
        ],
        available: true,
      },
      {
        id: "room-5",
        name: "Deluxe Suite",
        description: "Suite rộng rãi với view Hồ Gươm",
        price: 1500000,
        maxGuests: 3,
        size: "45m²",
        bedType: "1 King bed",
        amenities: [
          "Lake View",
          "Bathtub",
          "Premium Amenities",
          "Nespresso Machine",
        ],
        images: [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
        ],
        available: true,
      },
    ],
    reviews: [
      {
        id: "review-4",
        userName: "Phạm Thị Mai",
        userAvatar: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        date: "2024-01-18",
        comment:
          "Vị trí tuyệt vời, đi bộ đến Hồ Gươm chỉ 5 phút. Phòng sạch sẽ, nhân viên nhiệt tình!",
        helpful: 18,
      },
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "12:00",
      cancellation: "Miễn phí hủy phòng trước 48 giờ",
      children: "Trẻ em dưới 5 tuổi được miễn phí",
      pets: "Không cho phép",
    },
    contact: {
      phone: "024 3926 0808",
      email: "info@hanoiboutique.com",
      website: "www.hanoiboutique.com",
    },
    hostInfo: {
      name: "Ms. Trần Thị B",
      avatar: "https://i.pravatar.cc/150?img=11",
      responseRate: "98%",
      responseTime: "Trong vòng 30 phút",
      verified: true,
    },
  },
  {
    id: "hotel-3",
    name: "Saigon Central Hotel",
    slug: "saigon-central-hotel",
    category: "Hotel",
    location: {
      city: "TP. Hồ Chí Minh",
      address: "123 Nguyễn Huệ, Quận 1",
      coordinates: { lat: 10.7769, lng: 106.7009 },
    },
    rating: 4.5,
    reviewCount: 312,
    priceRange: "900,000 - 3,000,000",
    startingPrice: 900000,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
      "https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800",
    ],
    description:
      "Khách sạn 4 sao tại trung tâm Sài Gòn, gần phố đi bộ Nguyễn Huệ. Hoàn hảo cho công tác và du lịch.",
    amenities: [
      { icon: "fa-wifi", name: "WiFi miễn phí", available: true },
      {
        icon: "fa-swimming-pool",
        name: "Hồ bơi trên tầng thượng",
        available: true,
      },
      { icon: "fa-dumbbell", name: "Fitness center", available: true },
      { icon: "fa-utensils", name: "Nhà hàng", available: true },
      { icon: "fa-briefcase", name: "Phòng họp", available: true },
      { icon: "fa-parking", name: "Bãi đỗ xe", available: true },
      { icon: "fa-concierge-bell", name: "Concierge", available: true },
    ],
    roomTypes: [
      {
        id: "room-6",
        name: "Standard Double",
        description: "Phòng tiêu chuẩn với view thành phố",
        price: 900000,
        maxGuests: 2,
        size: "28m²",
        bedType: "1 Double bed",
        amenities: ["City View", "Work Desk", "Mini Fridge", "Smart TV"],
        images: [
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
        ],
        available: true,
      },
      {
        id: "room-7",
        name: "Executive Suite",
        description: "Suite sang trọng với view sông Sài Gòn",
        price: 2200000,
        maxGuests: 3,
        size: "55m²",
        bedType: "1 King bed",
        amenities: [
          "River View",
          "Living Area",
          "Premium Minibar",
          "Nespresso",
        ],
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
        ],
        available: true,
      },
    ],
    reviews: [
      {
        id: "review-5",
        userName: "David Johnson",
        userAvatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        date: "2024-01-20",
        comment:
          "Perfect location for business trip. Clean rooms and excellent service!",
        helpful: 28,
      },
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "12:00",
      cancellation: "Miễn phí hủy phòng trước 24 giờ",
      children: "Trẻ em dưới 6 tuổi được miễn phí",
      pets: "Không cho phép",
    },
    contact: {
      phone: "028 3822 9999",
      email: "info@saigoncentral.com",
      website: "www.saigoncentral.com",
    },
    hostInfo: {
      name: "Mr. Lê Văn C",
      avatar: "https://i.pravatar.cc/150?img=13",
      responseRate: "92%",
      responseTime: "Trong vòng 2 giờ",
      verified: true,
    },
  },
  {
    id: "hotel-4",
    name: "Hoi An Riverside Resort",
    slug: "hoian-riverside-resort",
    category: "Resort",
    location: {
      city: "Hội An",
      address: "Cẩm Kim, Hội An",
      coordinates: { lat: 15.8801, lng: 108.338 },
    },
    rating: 4.9,
    reviewCount: 178,
    priceRange: "1,200,000 - 4,000,000",
    startingPrice: 1200000,
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    ],
    description:
      "Resort yên bình bên bờ sông Thu Bồn, thiết kế mang đậm phong cách Hội An cổ kính. Nơi lý tưởng để thư giãn và khám phá phố cổ.",
    amenities: [
      { icon: "fa-wifi", name: "WiFi miễn phí", available: true },
      { icon: "fa-swimming-pool", name: "Hồ bơi", available: true },
      { icon: "fa-spa", name: "Spa", available: true },
      { icon: "fa-bicycle", name: "Cho thuê xe đạp", available: true },
      { icon: "fa-utensils", name: "Nhà hàng", available: true },
      { icon: "fa-shuttle-van", name: "Xe đưa đón phố cổ", available: true },
    ],
    roomTypes: [
      {
        id: "room-8",
        name: "Riverside Bungalow",
        description: "Bungalow riêng biệt với view sông tuyệt đẹp",
        price: 1200000,
        maxGuests: 2,
        size: "32m²",
        bedType: "1 King bed",
        amenities: [
          "River View",
          "Private Terrace",
          "Outdoor Shower",
          "Mini Bar",
        ],
        images: [
          "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800",
        ],
        available: true,
      },
      {
        id: "room-9",
        name: "Pool Villa",
        description: "Villa với hồ bơi riêng và vườn nhiệt đới",
        price: 4000000,
        maxGuests: 4,
        size: "90m²",
        bedType: "2 King beds",
        amenities: [
          "Private Pool",
          "Garden",
          "Outdoor Dining",
          "Butler Service",
        ],
        images: [
          "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=800",
        ],
        available: true,
      },
    ],
    reviews: [
      {
        id: "review-6",
        userName: "Sarah Williams",
        userAvatar: "https://i.pravatar.cc/150?img=15",
        rating: 5,
        date: "2024-01-22",
        comment:
          "Absolutely beautiful resort! The riverside setting is magical. Highly recommend!",
        helpful: 42,
      },
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "11:00",
      cancellation: "Miễn phí hủy phòng trước 72 giờ",
      children: "Trẻ em dưới 5 tuổi được miễn phí",
      pets: "Cho phép với phí phụ thu",
    },
    contact: {
      phone: "0235 3919 555",
      email: "info@hoianriverside.com",
      website: "www.hoianriverside.com",
    },
    hostInfo: {
      name: "Mr. Hoàng Văn D",
      avatar: "https://i.pravatar.cc/150?img=14",
      responseRate: "100%",
      responseTime: "Trong vòng 15 phút",
      verified: true,
    },
  },
];

// Cities filter
export const cities = [
  "Tất cả",
  "Hà Nội",
  "TP. Hồ Chí Minh",
  "Đà Nẵng",
  "Hội An",
  "Nha Trang",
  "Phú Quốc",
  "Đà Lạt",
];

// Categories filter
export const categories = ["Tất cả", "Hotel", "Resort", "Villa", "Homestay"];

// Price ranges
export const priceRanges = [
  { label: "Tất cả", min: 0, max: Infinity },
  { label: "Dưới 1 triệu", min: 0, max: 1000000 },
  { label: "1-2 triệu", min: 1000000, max: 2000000 },
  { label: "2-3 triệu", min: 2000000, max: 3000000 },
  { label: "Trên 3 triệu", min: 3000000, max: Infinity },
];

// Helper function to get hotel by id
export const getHotelById = (id) => {
  return hotels.find((hotel) => hotel.id === id);
};

// Helper function to get hotel by slug
export const getHotelBySlug = (slug) => {
  return hotels.find((hotel) => hotel.slug === slug);
};

// Restaurant data for booking feature
export const restaurants = [
  {
    id: "1",
    name: "Nhà Hàng Hải Sản Biển Đông",
    slug: "hai-san-bien-dong",
    cuisine: "Hải sản",
    location: {
      city: "Đà Nẵng",
      address: "123 Võ Nguyên Giáp, Phước Mỹ, Sơn Trà, Đà Nẵng",
      coordinates: { lat: 16.0544, lng: 108.2442 },
    },
    rating: 4.7,
    reviewCount: 245,
    priceRange: "$$",
    averagePrice: 350000,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800",
    ],
    description:
      "Nhà hàng hải sản cao cấp với view biển tuyệt đẹp, chuyên các món hải sản tươi sống được chế biến theo phong cách Việt Nam truyền thống và hiện đại. Không gian sang trọng, phục vụ tận tình, phù hợp cho gia đình và tiệc tùng.",
    features: [
      {
        icon: "fa-utensils",
        name: "Buffet hải sản",
        available: true,
      },
      {
        icon: "fa-water",
        name: "View biển",
        available: true,
      },
      {
        icon: "fa-wifi",
        name: "WiFi miễn phí",
        available: true,
      },
      {
        icon: "fa-parking",
        name: "Bãi đỗ xe",
        available: true,
      },
      {
        icon: "fa-snowflake",
        name: "Điều hòa",
        available: true,
      },
      {
        icon: "fa-music",
        name: "Nhạc sống",
        available: true,
      },
      {
        icon: "fa-glass-cheers",
        name: "Bar",
        available: true,
      },
      {
        icon: "fa-wheelchair",
        name: "Tiện nghi cho người khuyết tật",
        available: false,
      },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Món khai vị",
        dishes: [
          {
            id: "1",
            name: "Gỏi ngó sen tôm thịt",
            price: 120000,
            description: "Ngó sen giòn, tôm tươi, thịt ba chỉ",
            image:
              "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
          },
          {
            id: "2",
            name: "Salad hải sản",
            price: 150000,
            description: "Tôm, mực, cua với rau trộn",
            image:
              "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
          },
        ],
      },
      {
        id: "2",
        name: "Món chính",
        dishes: [
          {
            id: "3",
            name: "Tôm hùm nướng phô mai",
            price: 850000,
            description: "Tôm hùm tươi sống nướng với phô mai Úc",
            image:
              "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400",
            popular: true,
          },
          {
            id: "4",
            name: "Cua hoàng đế hấp",
            price: 1200000,
            description: "Cua hoàng đế Alaska hấp gừng",
            image:
              "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400",
          },
          {
            id: "5",
            name: "Cá song nướng muối ớt",
            price: 680000,
            description: "Cá song tươi nướng muối ớt Thái",
            image:
              "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400",
            popular: true,
          },
          {
            id: "6",
            name: "Nghêu hấp xả",
            price: 180000,
            description: "Nghêu tươi hấp sả, gừng",
            image:
              "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400",
          },
        ],
      },
      {
        id: "3",
        name: "Món tráng miệng",
        dishes: [
          {
            id: "7",
            name: "Chè dừa dầm",
            price: 45000,
            description: "Chè dừa dầm truyền thống",
            image:
              "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
          },
          {
            id: "8",
            name: "Kem dừa tươi",
            price: 55000,
            description: "Kem dừa tươi handmade",
            image:
              "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400",
          },
        ],
      },
    ],
    openingHours: {
      weekday: "10:00 - 22:00",
      weekend: "09:00 - 23:00",
    },
    reviews: [
      {
        id: "1",
        userName: "Nguyễn Minh Anh",
        userAvatar: "https://i.pravatar.cc/150?img=1",
        rating: 5,
        date: "2024-10-15",
        comment:
          "Nhà hàng tuyệt vời! Hải sản tươi ngon, không gian đẹp, view biển cực kỳ lãng mạn. Đặc biệt món tôm hùm nướng phô mai rất ngon. Nhân viên phục vụ nhiệt tình. Sẽ quay lại!",
        helpful: 24,
      },
      {
        id: "2",
        userName: "Trần Văn Hùng",
        userAvatar: "https://i.pravatar.cc/150?img=12",
        rating: 4,
        date: "2024-10-10",
        comment:
          "Đồ ăn ngon, giá hơi cao nhưng chất lượng xứng đáng. Cua hoàng đế tươi ngon. Bãi đỗ xe rộng rãi, tiện lợi.",
        helpful: 18,
      },
      {
        id: "3",
        userName: "Lê Thị Mai",
        userAvatar: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        date: "2024-10-05",
        comment:
          "Đi ăn gia đình rất hài lòng. Món ăn đa dạng, phong phú. Nhạc sống buổi tối rất hay. Không gian thoáng mát.",
        helpful: 15,
      },
    ],
    policies: {
      reservation: "Nên đặt bàn trước từ 1-2 ngày",
      cancellation: "Hủy miễn phí trước 24 giờ",
      deposit: "Yêu cầu đặt cọc 30% cho nhóm từ 10 người",
      children: "Chào đón trẻ em, có ghế cao cho em bé",
      pets: "Không cho phép mang thú cưng",
    },
    contact: {
      phone: "0236 3999 888",
      email: "contact@haisanbienlong.vn",
      website: "haisanbienlong.vn",
    },
    hostInfo: {
      name: "Nguyễn Văn Hải",
      avatar: "https://i.pravatar.cc/150?img=33",
      verified: true,
      responseRate: "98%",
      responseTime: "Trong vòng 1 giờ",
    },
  },
  {
    id: "2",
    name: "Quán Ăn Phố Cổ Hà Nội",
    slug: "quan-an-pho-co-hanoi",
    cuisine: "Món Việt",
    location: {
      city: "Hà Nội",
      address: "45 Hàng Bạc, Hoàn Kiếm, Hà Nội",
      coordinates: { lat: 21.0285, lng: 105.8542 },
    },
    rating: 4.8,
    reviewCount: 312,
    priceRange: "$",
    averagePrice: 150000,
    images: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    ],
    description:
      "Quán ăn truyền thống giữa lòng phố cổ Hà Nội, chuyên các món ăn đặc sản Hà Thành như phở, bún chả, chả cá Lã Vọng. Không gian nhỏ nhắn, ấm cúng với phong cách cổ điển, mang đậm nét văn hóa Việt Nam.",
    features: [
      {
        icon: "fa-utensils",
        name: "Món ăn truyền thống",
        available: true,
      },
      {
        icon: "fa-home",
        name: "Không gian ấm cúng",
        available: true,
      },
      {
        icon: "fa-wifi",
        name: "WiFi miễn phí",
        available: true,
      },
      {
        icon: "fa-parking",
        name: "Bãi đỗ xe",
        available: false,
      },
      {
        icon: "fa-snowflake",
        name: "Điều hòa",
        available: true,
      },
      {
        icon: "fa-credit-card",
        name: "Thanh toán thẻ",
        available: true,
      },
      {
        icon: "fa-baby",
        name: "Thân thiện với trẻ em",
        available: true,
      },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Món ăn sáng",
        dishes: [
          {
            id: "1",
            name: "Phở bò Hà Nội",
            price: 65000,
            description: "Phở bò truyền thống với nước dùng hầm xương 12 tiếng",
            image:
              "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400",
            popular: true,
          },
          {
            id: "2",
            name: "Bún chả Hà Nội",
            price: 60000,
            description: "Bún chả nướng than hồng thơm phức",
            image:
              "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400",
            popular: true,
          },
        ],
      },
      {
        id: "2",
        name: "Món ăn chính",
        dishes: [
          {
            id: "3",
            name: "Chả cá Lã Vọng",
            price: 180000,
            description: "Chả cá truyền thống Hà Nội với mẻ và riềng",
            image:
              "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400",
          },
          {
            id: "4",
            name: "Bún đậu mắm tôm",
            price: 70000,
            description: "Bún đậu mắm tôm đặc sản Hà Thành",
            image:
              "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
          },
        ],
      },
    ],
    openingHours: {
      weekday: "06:00 - 22:00",
      weekend: "06:00 - 22:30",
    },
    reviews: [
      {
        id: "1",
        userName: "David Smith",
        userAvatar: "https://i.pravatar.cc/150?img=15",
        rating: 5,
        date: "2024-10-20",
        comment:
          "Authentic Vietnamese food in the heart of Old Quarter! The pho is amazing, best I've had in Hanoi. Very reasonable prices.",
        helpful: 32,
      },
      {
        id: "2",
        userName: "Phạm Thu Hà",
        userAvatar: "https://i.pravatar.cc/150?img=9",
        rating: 5,
        date: "2024-10-12",
        comment:
          "Quán ăn ngon, phục vụ nhanh, giá cả phải chăng. Phở bò và bún chả đều rất ngon, nước phở đậm đà.",
        helpful: 28,
      },
    ],
    policies: {
      reservation: "Nhận đặt bàn qua điện thoại",
      cancellation: "Hủy miễn phí trước 2 giờ",
      deposit: "Không yêu cầu đặt cọc",
      children: "Chào đón trẻ em",
      pets: "Không cho phép thú cưng",
    },
    contact: {
      phone: "024 3828 5555",
      email: "quananphoco@gmail.com",
      website: "quananphoco.vn",
    },
    hostInfo: {
      name: "Bà Nguyễn Thị Lan",
      avatar: "https://i.pravatar.cc/150?img=20",
      verified: true,
      responseRate: "100%",
      responseTime: "Trong vòng 30 phút",
    },
  },
  {
    id: "3",
    name: "BBQ Garden Sài Gòn",
    slug: "bbq-garden-saigon",
    cuisine: "BBQ & Nướng",
    location: {
      city: "TP. Hồ Chí Minh",
      address: "78 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
      coordinates: { lat: 10.7769, lng: 106.7009 },
    },
    rating: 4.6,
    reviewCount: 189,
    priceRange: "$$",
    averagePrice: 400000,
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
      "https://images.unsplash.com/photo-1529385101632-76a9e9dd6c0e?w=800",
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
    ],
    description:
      "Nhà hàng BBQ buffet cao cấp với vườn xanh mát, chuyên các món nướng Hàn Quốc, Nhật Bản và Việt Nam. Menu buffet đa dạng với hơn 100 món, bao gồm thịt bò Mỹ, hải sản tươi sống và rau củ hữu cơ.",
    features: [
      {
        icon: "fa-fire",
        name: "BBQ Buffet",
        available: true,
      },
      {
        icon: "fa-tree",
        name: "Vườn ngoài trời",
        available: true,
      },
      {
        icon: "fa-wifi",
        name: "WiFi miễn phí",
        available: true,
      },
      {
        icon: "fa-parking",
        name: "Bãi đỗ xe",
        available: true,
      },
      {
        icon: "fa-snowflake",
        name: "Điều hòa",
        available: true,
      },
      {
        icon: "fa-users",
        name: "Phòng riêng",
        available: true,
      },
      {
        icon: "fa-birthday-cake",
        name: "Dịch vụ tiệc",
        available: true,
      },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Buffet Packages",
        dishes: [
          {
            id: "1",
            name: "Buffet Premium",
            price: 499000,
            description:
              "Buffet cao cấp với thịt bò Mỹ, hải sản tươi, và hơn 100 món",
            image:
              "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
            popular: true,
          },
          {
            id: "2",
            name: "Buffet Standard",
            price: 299000,
            description: "Buffet tiêu chuẩn với đa dạng món nướng và lẩu",
            image:
              "https://images.unsplash.com/photo-1529385101632-76a9e9dd6c0e?w=400",
          },
        ],
      },
    ],
    openingHours: {
      weekday: "11:00 - 23:00",
      weekend: "10:00 - 23:30",
    },
    reviews: [
      {
        id: "1",
        userName: "Võ Hoàng Long",
        userAvatar: "https://i.pravatar.cc/150?img=13",
        rating: 5,
        date: "2024-10-18",
        comment:
          "Buffet BBQ tuyệt vời! Thịt bò Mỹ rất ngon, tươi. Không gian vườn rất đẹp và thoáng mát. Giá hơi cao nhưng đáng đồng tiền.",
        helpful: 21,
      },
      {
        id: "2",
        userName: "Kim Min Jung",
        userAvatar: "https://i.pravatar.cc/150?img=25",
        rating: 4,
        date: "2024-10-08",
        comment:
          "Good BBQ buffet with Korean style. Fresh ingredients and nice garden atmosphere. Staff is friendly.",
        helpful: 16,
      },
    ],
    policies: {
      reservation: "Đặt bàn trước từ 1 ngày",
      cancellation: "Hủy trước 24 giờ để được hoàn tiền",
      deposit: "Đặt cọc 50% cho buffet",
      children: "Trẻ em dưới 1m: miễn phí, 1m-1m3: giảm 50%",
      pets: "Không cho phép thú cưng",
    },
    contact: {
      phone: "028 3822 9999",
      email: "bbqgarden@saigon.vn",
      website: "bbqgarden.vn",
    },
    hostInfo: {
      name: "Park Ji Hoon",
      avatar: "https://i.pravatar.cc/150?img=30",
      verified: true,
      responseRate: "95%",
      responseTime: "Trong vòng 2 giờ",
    },
  },
  {
    id: "4",
    name: "Nhà Hàng Chay An Lạc",
    slug: "nha-hang-chay-an-lac",
    cuisine: "Chay",
    location: {
      city: "Đà Lạt",
      address: "25 Phan Đình Phùng, Phường 2, Đà Lạt, Lâm Đồng",
      coordinates: { lat: 11.9404, lng: 108.4583 },
    },
    rating: 4.9,
    reviewCount: 156,
    priceRange: "$",
    averagePrice: 120000,
    images: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800",
    ],
    description:
      "Nhà hàng chay thanh tịnh giữa lòng Đà Lạt, chuyên các món chay đặc sắc từ nguyên liệu hữu cơ. Không gian yên tĩnh, trang trí theo phong cách Zen, phù hợp cho người ăn chay và những ai muốn tìm sự bình yên.",
    features: [
      {
        icon: "fa-leaf",
        name: "100% Chay",
        available: true,
      },
      {
        icon: "fa-spa",
        name: "Không gian Zen",
        available: true,
      },
      {
        icon: "fa-seedling",
        name: "Nguyên liệu hữu cơ",
        available: true,
      },
      {
        icon: "fa-wifi",
        name: "WiFi miễn phí",
        available: true,
      },
      {
        icon: "fa-parking",
        name: "Bãi đỗ xe",
        available: true,
      },
      {
        icon: "fa-mountain",
        name: "View núi đồi",
        available: true,
      },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Món chính",
        dishes: [
          {
            id: "1",
            name: "Bún riêu chay",
            price: 55000,
            description: "Bún riêu chay với nước dùng đậu nành thơm ngon",
            image:
              "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
          },
          {
            id: "2",
            name: "Cơm niêu chay",
            price: 65000,
            description: "Cơm niêu chay với rau củ hữu cơ Đà Lạt",
            image:
              "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
            popular: true,
          },
          {
            id: "3",
            name: "Lẩu nấm chay",
            price: 280000,
            description: "Lẩu nấm các loại cho 2-3 người",
            image:
              "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
          },
        ],
      },
    ],
    openingHours: {
      weekday: "07:00 - 21:00",
      weekend: "07:00 - 21:00",
    },
    reviews: [
      {
        id: "1",
        userName: "Trần Thị Hương",
        userAvatar: "https://i.pravatar.cc/150?img=10",
        rating: 5,
        date: "2024-10-22",
        comment:
          "Nhà hàng chay tuyệt vời nhất Đà Lạt! Đồ ăn ngon, không gian yên tĩnh, view đẹp. Cơm niêu chay rất đáng thử!",
        helpful: 19,
      },
      {
        id: "2",
        userName: "Nguyễn Văn An",
        userAvatar: "https://i.pravatar.cc/150?img=11",
        rating: 5,
        date: "2024-10-15",
        comment:
          "Mình không ăn chay nhưng ghé vào đây và rất bất ngờ. Món ăn ngon, giá cả hợp lý, nhân viên thân thiện.",
        helpful: 14,
      },
    ],
    policies: {
      reservation: "Nhận đặt bàn qua điện thoại",
      cancellation: "Hủy miễn phí trước 1 giờ",
      deposit: "Không yêu cầu đặt cọc",
      children: "Chào đón trẻ em",
      pets: "Không cho phép thú cưng",
    },
    contact: {
      phone: "0263 3555 777",
      email: "nhahangchayanlac@gmail.com",
      website: "nhahangchayanlac.vn",
    },
    hostInfo: {
      name: "Thầy Minh Tuệ",
      avatar: "https://i.pravatar.cc/150?img=35",
      verified: true,
      responseRate: "100%",
      responseTime: "Trong vòng 30 phút",
    },
  },
];

// Filter data
export const cities = [
  "Tất cả",
  "Hà Nội",
  "TP. Hồ Chí Minh",
  "Đà Nẵng",
  "Đà Lạt",
  "Nha Trang",
  "Hội An",
  "Phú Quốc",
  "Vũng Tàu",
];

export const cuisines = [
  "Tất cả",
  "Món Việt",
  "Hải sản",
  "BBQ & Nướng",
  "Lẩu",
  "Chay",
  "Món Á",
  "Món Âu",
];

export const priceRanges = [
  { label: "Tất cả", min: 0, max: Infinity },
  { label: "$ (< 200k)", min: 0, max: 200000 },
  { label: "$$ (200k - 500k)", min: 200000, max: 500000 },
  { label: "$$$ (500k - 1tr)", min: 500000, max: 1000000 },
  { label: "$$$$ (> 1tr)", min: 1000000, max: Infinity },
];

// Helper functions
export const getRestaurantById = (id) => {
  return restaurants.find((restaurant) => restaurant.id === id);
};

export const getRestaurantBySlug = (slug) => {
  return restaurants.find((restaurant) => restaurant.slug === slug);
};

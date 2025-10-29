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
  {
    id: "5",
    name: "Quán Cơm Bình Dân Sài Gòn",
    slug: "com-binh-dan-saigon",
    cuisine: "Món Việt",
    location: {
      city: "TP. Hồ Chí Minh",
      address: "89 Pasteur, Quận 1, TP. HCM",
      coordinates: { lat: 10.7797, lng: 106.6986 },
    },
    rating: 4.4,
    reviewCount: 523,
    priceRange: "$",
    averagePrice: 60000,
    images: [
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
    ],
    description:
      "Quán cơm bình dân giá rẻ phục vụ các món ăn Việt Nam truyền thống. Thực đơn đa dạng, giá cả phải chăng, phù hợp cho sinh viên và người lao động. Không gian đơn giản nhưng sạch sẽ.",
    features: [
      { icon: "fa-utensils", name: "Cơm tấm", available: true },
      { icon: "fa-bowl-rice", name: "Cơm phần", available: true },
      { icon: "fa-clock", name: "Phục vụ nhanh", available: true },
      { icon: "fa-money-bill-wave", name: "Giá rẻ", available: true },
      { icon: "fa-box", name: "Đóng gói mang đi", available: true },
      { icon: "fa-motorcycle", name: "Giao hàng", available: true },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Cơm phần",
        dishes: [
          {
            id: "1",
            name: "Cơm sườn bì chả",
            price: 45000,
            description: "Sườn nướng, bì, chả",
            image:
              "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=400",
          },
          {
            id: "2",
            name: "Cơm gà xối mỡ",
            price: 50000,
            description: "Gà luộc xối mỡ hành",
            image:
              "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400",
          },
        ],
      },
    ],
    openingHours: "6:00 - 22:00 hàng ngày",
    reviews: [
      {
        id: 1,
        userName: "Nguyễn Minh",
        userAvatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        date: "2024-10-15",
        comment: "Cơm ngon, giá rẻ, phục vụ nhanh. Rất hợp túi tiền sinh viên!",
        helpful: 23,
      },
      {
        id: 2,
        userName: "Trần Thị Thu",
        userAvatar: "https://i.pravatar.cc/150?img=25",
        rating: 4,
        date: "2024-10-10",
        comment: "Quán sạch sẽ, món ăn đa dạng. Giờ cao điểm hơi đông.",
        helpful: 15,
      },
    ],
    policies: {
      reservation: "Không cần đặt bàn trước",
      cancellation: "Không áp dụng",
      deposit: "Không yêu cầu đặt cọc",
      children: "Chào đón trẻ em",
    },
    contact: {
      phone: "028 3824 5678",
      email: "combinhdansaigon@gmail.com",
    },
    hostInfo: {
      name: "Chị Loan",
      avatar: "https://i.pravatar.cc/150?img=40",
      verified: true,
      responseRate: "95%",
      responseTime: "Trong vòng 2 giờ",
    },
  },
  {
    id: "6",
    name: "Phở Gia Truyền Bát Đàn",
    slug: "pho-gia-truyen-bat-dan",
    cuisine: "Món Việt",
    location: {
      city: "Hà Nội",
      address: "49 Bát Đàn, Hoàn Kiếm, Hà Nội",
      coordinates: { lat: 21.0285, lng: 105.8542 },
    },
    rating: 4.7,
    reviewCount: 892,
    priceRange: "$",
    averagePrice: 70000,
    images: [
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800",
      "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800",
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
    ],
    description:
      "Quán phở gia truyền nổi tiếng Hà Nội với công thức nước dùng truyền thống. Thịt bò tươi ngon, bánh phở dai, nước dùng trong ngọt. Luôn đông khách từ sáng đến tối.",
    features: [
      { icon: "fa-utensils", name: "Phở bò truyền thống", available: true },
      { icon: "fa-history", name: "Hơn 50 năm", available: true },
      { icon: "fa-clock", name: "Mở cửa sớm", available: true },
      { icon: "fa-star", name: "Nổi tiếng", available: true },
      { icon: "fa-box", name: "Mang đi", available: true },
      { icon: "fa-parking", name: "Gửi xe gần", available: true },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Phở",
        dishes: [
          {
            id: "1",
            name: "Phở bò tái",
            price: 65000,
            description: "Phở với thịt bò tái",
            image:
              "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
          },
          {
            id: "2",
            name: "Phở bò chín",
            price: 70000,
            description: "Phở với thịt bò chín",
            image:
              "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400",
          },
          {
            id: "3",
            name: "Phở đặc biệt",
            price: 80000,
            description: "Phở đầy đủ các loại thịt",
            image:
              "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
          },
        ],
      },
    ],
    openingHours: "6:00 - 21:00 hàng ngày",
    reviews: [
      {
        id: 1,
        userName: "Lê Văn Hùng",
        userAvatar: "https://i.pravatar.cc/150?img=18",
        rating: 5,
        date: "2024-10-18",
        comment:
          "Phở ngon nhất Hà Nội! Nước dùng ngọt thanh, thịt bò tươi mềm.",
        helpful: 45,
      },
      {
        id: 2,
        userName: "Mai Phương",
        userAvatar: "https://i.pravatar.cc/150?img=28",
        rating: 5,
        date: "2024-10-12",
        comment:
          "Quán phở gia truyền 50 năm, chất lượng không bàn cãi. Sáng nào cũng đông!",
        helpful: 32,
      },
    ],
    policies: {
      reservation: "Không cần đặt bàn",
      cancellation: "Không áp dụng",
      deposit: "Không yêu cầu",
      children: "Chào đón gia đình có trẻ nhỏ",
    },
    contact: {
      phone: "024 3826 1234",
      email: "phobatdan@gmail.com",
    },
    hostInfo: {
      name: "Ông Tuấn",
      avatar: "https://i.pravatar.cc/150?img=62",
      verified: true,
      responseRate: "90%",
      responseTime: "Trong vòng 3 giờ",
    },
  },
  {
    id: "7",
    name: "Bún Chả Hương Liên",
    slug: "bun-cha-huong-lien",
    cuisine: "Món Việt",
    location: {
      city: "Hà Nội",
      address: "24 Lê Văn Hưu, Hai Bà Trưng, Hà Nội",
      coordinates: { lat: 21.0164, lng: 105.8486 },
    },
    rating: 4.6,
    reviewCount: 1245,
    priceRange: "$",
    averagePrice: 80000,
    images: [
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    ],
    description:
      "Quán bún chả nổi tiếng được Tổng thống Obama ghé thăm năm 2016. Bún chả thơm ngon với chả nướng than hoa, nước mắm chua ngọt đậm đà. Không gian bình dân, giá cả phải chăng.",
    features: [
      { icon: "fa-fire", name: "Nướng than hoa", available: true },
      { icon: "fa-star", name: "Obama set", available: true },
      { icon: "fa-utensils", name: "Bún chả Hà Nội", available: true },
      { icon: "fa-box", name: "Mang về", available: true },
      { icon: "fa-clock", name: "Phục vụ cả ngày", available: true },
      { icon: "fa-parking", name: "Gửi xe", available: true },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Món chính",
        dishes: [
          {
            id: "1",
            name: "Bún chả Hà Nội",
            price: 50000,
            description: "Bún chả truyền thống",
            image:
              "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
          },
          {
            id: "2",
            name: "Combo Obama",
            price: 80000,
            description: "Bún chả + chả giò + bia Hà Nội",
            image:
              "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400",
            popular: true,
          },
        ],
      },
    ],
    openingHours: "8:00 - 21:00 hàng ngày",
    reviews: [
      {
        id: 1,
        userName: "Barack Obama",
        userAvatar: "https://i.pravatar.cc/150?img=50",
        rating: 5,
        date: "2016-05-23",
        comment:
          "Great food! The bun cha was delicious. Very authentic Vietnamese cuisine.",
        helpful: 999,
      },
      {
        id: 2,
        userName: "Hoàng Anh",
        userAvatar: "https://i.pravatar.cc/150?img=22",
        rating: 5,
        date: "2024-10-20",
        comment:
          "Bún chả thơm ngon, chả nướng than hoa rất đặc biệt. Combo Obama là must-try!",
        helpful: 67,
      },
    ],
    policies: {
      reservation: "Không cần đặt bàn",
      cancellation: "Không áp dụng",
      deposit: "Không yêu cầu",
      children: "Thân thiện với gia đình",
    },
    contact: {
      phone: "024 3943 4106",
      email: "bunchahuonglien@gmail.com",
    },
    hostInfo: {
      name: "Bà Liên",
      avatar: "https://i.pravatar.cc/150?img=45",
      verified: true,
      responseRate: "85%",
      responseTime: "Trong vòng 4 giờ",
    },
  },
  {
    id: "8",
    name: "Nhà Hàng Lẩu Nướng Kichi Kichi",
    slug: "kichi-kichi-buffet",
    cuisine: "Lẩu",
    location: {
      city: "TP. Hồ Chí Minh",
      address: "19 Cao Thắng, Quận 3, TP. HCM",
      coordinates: { lat: 10.7753, lng: 106.6922 },
    },
    rating: 4.5,
    reviewCount: 678,
    priceRange: "$$",
    averagePrice: 250000,
    images: [
      "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=800",
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
    ],
    description:
      "Nhà hàng buffet lẩu và nướng với hơn 200 món ăn đa dạng. Nguyên liệu tươi sống, gia vị phong phú, không gian hiện đại. Giá buffet cố định, ăn thoải mái không giới hạn.",
    features: [
      { icon: "fa-infinity", name: "Buffet không giới hạn", available: true },
      { icon: "fa-fish", name: "Hải sản tươi sống", available: true },
      { icon: "fa-fire", name: "Lẩu & nướng", available: true },
      { icon: "fa-ice-cream", name: "Tráng miệng", available: true },
      { icon: "fa-snowflake", name: "Điều hòa", available: true },
      { icon: "fa-parking", name: "Bãi đỗ xe", available: true },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Buffet",
        dishes: [
          {
            id: "1",
            name: "Buffet Premium",
            price: 299000,
            description: "Buffet lẩu nướng cao cấp",
            image:
              "https://images.unsplash.com/photo-1541417904950-b855846fe074?w=400",
            popular: true,
          },
          {
            id: "2",
            name: "Buffet Standard",
            price: 249000,
            description: "Buffet lẩu nướng tiêu chuẩn",
            image:
              "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
          },
        ],
      },
    ],
    openingHours: "10:00 - 22:00 hàng ngày",
    reviews: [
      {
        id: 1,
        userName: "Phạm Thị Hương",
        userAvatar: "https://i.pravatar.cc/150?img=30",
        rating: 4,
        date: "2024-10-22",
        comment:
          "Buffet đa dạng, hải sản tươi. Phù hợp cho gia đình và nhóm bạn.",
        helpful: 28,
      },
      {
        id: 2,
        userName: "Đặng Minh Tuấn",
        userAvatar: "https://i.pravatar.cc/150?img=15",
        rating: 5,
        date: "2024-10-18",
        comment: "Giá buffet hợp lý, món ăn ngon, nhân viên phục vụ tốt.",
        helpful: 19,
      },
    ],
    policies: {
      reservation: "Nên đặt bàn trước vào cuối tuần",
      cancellation: "Hủy miễn phí trước 2 giờ",
      deposit: "Cọc 100k/người cho nhóm từ 8 người",
      children: "Trẻ em dưới 1m tính nửa giá",
    },
    contact: {
      phone: "028 3930 5555",
      email: "kichikichi@gmail.com",
      website: "kichikichi.com.vn",
    },
    hostInfo: {
      name: "Kichi Kichi Group",
      avatar: "https://i.pravatar.cc/150?img=63",
      verified: true,
      responseRate: "100%",
      responseTime: "Trong vòng 15 phút",
    },
  },
  {
    id: "9",
    name: "La Verticale Restaurant",
    slug: "la-verticale-restaurant",
    cuisine: "Món Âu",
    location: {
      city: "Hà Nội",
      address: "19 Ngô Văn Sở, Ba Đình, Hà Nội",
      coordinates: { lat: 21.0343, lng: 105.8325 },
    },
    rating: 4.9,
    reviewCount: 234,
    priceRange: "$$$",
    averagePrice: 850000,
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
    ],
    description:
      "Nhà hàng Fine Dining cao cấp phục vụ ẩm thực Pháp đương đại. Đầu bếp từng đạt sao Michelin, không gian sang trọng trong biệt thự Pháp cổ, wine cellar phong phú. Lý tưởng cho các dịp đặc biệt.",
    features: [
      { icon: "fa-wine-glass", name: "Wine cellar", available: true },
      { icon: "fa-star", name: "Đầu bếp Michelin", available: true },
      { icon: "fa-landmark", name: "Biệt thự Pháp", available: true },
      { icon: "fa-user-tie", name: "Dress code", available: true },
      { icon: "fa-concierge-bell", name: "Private dining", available: true },
      { icon: "fa-parking", name: "Valet parking", available: true },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Set Menu",
        dishes: [
          {
            id: "1",
            name: "Degustation Menu 5 courses",
            price: 1200000,
            description: "5 món signature của chef",
            image:
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
            popular: true,
          },
          {
            id: "2",
            name: "A la carte",
            price: 850000,
            description: "Gọi món theo menu",
            image:
              "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400",
          },
        ],
      },
    ],
    openingHours: "18:00 - 23:00 (Đóng cửa thứ 2)",
    reviews: [
      {
        id: 1,
        userName: "Catherine Martin",
        userAvatar: "https://i.pravatar.cc/150?img=47",
        rating: 5,
        date: "2024-10-25",
        comment:
          "Exceptional French cuisine in Hanoi! The degustation menu was outstanding.",
        helpful: 56,
      },
      {
        id: 2,
        userName: "Nguyễn Quốc Anh",
        userAvatar: "https://i.pravatar.cc/150?img=19",
        rating: 5,
        date: "2024-10-20",
        comment:
          "Nhà hàng Pháp đẳng cấp nhất Hà Nội. Không gian sang trọng, món ăn tinh tế.",
        helpful: 42,
      },
    ],
    policies: {
      reservation: "Bắt buộc đặt bàn trước ít nhất 3 ngày",
      cancellation: "Hủy miễn phí trước 48 giờ",
      deposit: "Yêu cầu cọc 50% giá trị bàn ăn",
      children: "Không khuyến khích trẻ em dưới 12 tuổi",
    },
    contact: {
      phone: "024 3944 6317",
      email: "info@laverticale.com",
      website: "verticale-hanoi.com",
    },
    hostInfo: {
      name: "Chef Didier Corlou",
      avatar: "https://i.pravatar.cc/150?img=64",
      verified: true,
      responseRate: "100%",
      responseTime: "Trong vòng 10 phút",
    },
  },
  {
    id: "10",
    name: "The Deck Saigon",
    slug: "the-deck-saigon",
    cuisine: "Món Âu",
    location: {
      city: "TP. Hồ Chí Minh",
      address: "38 Nguyễn U Dĩ, Thảo Điền, Quận 2, TP. HCM",
      coordinates: { lat: 10.8085, lng: 106.7359 },
    },
    rating: 4.8,
    reviewCount: 567,
    priceRange: "$$$",
    averagePrice: 750000,
    images: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    ],
    description:
      "Nhà hàng fine dining view sông Sài Gòn tuyệt đẹp, chuyên ẩm thực Địa Trung Hải và Châu Âu. Không gian lãng mạn với live music, phù hợp cho các buổi hẹn hò và kỷ niệm đặc biệt.",
    features: [
      { icon: "fa-water", name: "View sông", available: true },
      { icon: "fa-music", name: "Live music", available: true },
      { icon: "fa-wine-glass", name: "Wine bar", available: true },
      { icon: "fa-utensils", name: "Fine dining", available: true },
      { icon: "fa-cocktail", name: "Signature cocktails", available: true },
      { icon: "fa-parking", name: "Valet parking", available: true },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Main courses",
        dishes: [
          {
            id: "1",
            name: "Grilled Australian Beef",
            price: 890000,
            description: "Thịt bò Úc nướng",
            image:
              "https://images.unsplash.com/photo-1558030006-450675393462?w=400",
            popular: true,
          },
          {
            id: "2",
            name: "Mediterranean Seafood Platter",
            price: 950000,
            description: "Hải sản Địa Trung Hải",
            image:
              "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400",
          },
        ],
      },
    ],
    openingHours: "11:00 - 23:00 hàng ngày",
    reviews: [
      {
        id: 1,
        userName: "Jennifer Lee",
        userAvatar: "https://i.pravatar.cc/150?img=38",
        rating: 5,
        date: "2024-10-23",
        comment: "Amazing riverside dining! Live music and romantic ambiance.",
        helpful: 51,
      },
      {
        id: 2,
        userName: "Trần Văn Khánh",
        userAvatar: "https://i.pravatar.cc/150?img=14",
        rating: 5,
        date: "2024-10-19",
        comment:
          "View sông Sài Gòn tuyệt đẹp, món ăn ngon, phù hợp hẹn hò và kỷ niệm.",
        helpful: 38,
      },
    ],
    policies: {
      reservation: "Đề xuất đặt bàn trước 1-2 ngày",
      cancellation: "Hủy miễn phí trước 24 giờ",
      deposit: "Cọc 50% cho bàn từ 6 người trở lên",
      children: "Chào đón trẻ em",
    },
    contact: {
      phone: "028 3744 6632",
      email: "info@thedecksaigon.com",
      website: "thedecksaigon.com",
    },
    hostInfo: {
      name: "The Deck Management",
      avatar: "https://i.pravatar.cc/150?img=65",
      verified: true,
      responseRate: "100%",
      responseTime: "Trong vòng 20 phút",
    },
  },
  {
    id: "11",
    name: "Sushi Hokkaido Sachi",
    slug: "sushi-hokkaido-sachi",
    cuisine: "Món Nhật",
    location: {
      city: "Đà Nẵng",
      address: "Tầng 19, Vincom Center, 910A Ngô Quyền, Đà Nẵng",
      coordinates: { lat: 16.0544, lng: 108.2022 },
    },
    rating: 4.9,
    reviewCount: 189,
    priceRange: "$$$",
    averagePrice: 900000,
    images: [
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800",
      "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800",
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800",
    ],
    description:
      "Nhà hàng sushi Nhật Bản chính thống với chef người Nhật, nguyên liệu nhập khẩu trực tiếp từ chợ cá Tsukiji. Omakase experience cao cấp, không gian zen đẹp, view biển tuyệt vời.",
    features: [
      { icon: "fa-fish", name: "Cá tươi Nhật Bản", available: true },
      { icon: "fa-user-chef", name: "Chef Nhật", available: true },
      { icon: "fa-water", name: "View biển", available: true },
      { icon: "fa-utensils", name: "Omakase", available: true },
      { icon: "fa-wine-glass", name: "Sake premium", available: true },
      { icon: "fa-snowflake", name: "Phòng riêng", available: true },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Omakase",
        dishes: [
          {
            id: "1",
            name: "Omakase Premium 12 pieces",
            price: 1500000,
            description: "12 miếng sushi do chef chọn",
            image:
              "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
            popular: true,
          },
          {
            id: "2",
            name: "Sashimi Deluxe",
            price: 950000,
            description: "Sashimi cao cấp",
            image:
              "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400",
          },
        ],
      },
    ],
    openingHours: "11:30 - 14:00, 17:30 - 22:00 (Đóng cửa thứ 2)",
    reviews: [
      {
        id: 1,
        userName: "Yamamoto Kenji",
        userAvatar: "https://i.pravatar.cc/150?img=52",
        rating: 5,
        date: "2024-10-26",
        comment: "本格的な日本料理！新鮮な魚と素晴らしいサービス。",
        helpful: 34,
      },
      {
        id: 2,
        userName: "Lê Minh Châu",
        userAvatar: "https://i.pravatar.cc/150?img=27",
        rating: 5,
        date: "2024-10-21",
        comment: "Sushi tươi ngon nhất Đà Nẵng! Omakase experience đỉnh cao.",
        helpful: 29,
      },
    ],
    policies: {
      reservation: "Bắt buộc đặt bàn trước",
      cancellation: "Hủy miễn phí trước 24 giờ",
      deposit: "Cọc 30% giá trị đơn hàng",
      children: "Phù hợp cho trẻ em từ 10 tuổi trở lên",
    },
    contact: {
      phone: "0236 3888 999",
      email: "sachi@sushihokkaido.vn",
      website: "sushihokkaido.vn",
    },
    hostInfo: {
      name: "Chef Tanaka",
      avatar: "https://i.pravatar.cc/150?img=68",
      verified: true,
      responseRate: "100%",
      responseTime: "Trong vòng 15 phút",
    },
  },
  {
    id: "12",
    name: "EON51 Fine Dining",
    slug: "eon51-fine-dining",
    cuisine: "Fusion",
    location: {
      city: "TP. Hồ Chí Minh",
      address: "Tầng 51, Bitexco Tower, 2 Hải Triều, Quận 1, TP. HCM",
      coordinates: { lat: 10.7718, lng: 106.7042 },
    },
    rating: 4.9,
    reviewCount: 423,
    priceRange: "$$$$",
    averagePrice: 1800000,
    images: [
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    ],
    description:
      "Nhà hàng fine dining trên tầng 51 tòa Bitexco với view 360 độ Sài Gòn. Ẩm thực fusion sáng tạo kết hợp Âu - Á, wine pairing cao cấp, không gian sang trọng bậc nhất. Cần đặt bàn trước.",
    features: [
      { icon: "fa-building", name: "Tầng 51", available: true },
      { icon: "fa-city", name: "View 360°", available: true },
      { icon: "fa-wine-glass", name: "Wine cellar 500+", available: true },
      { icon: "fa-star", name: "Fine dining", available: true },
      { icon: "fa-user-tie", name: "Dress code nghiêm", available: true },
      {
        icon: "fa-concierge-bell",
        name: "Personal sommelier",
        available: true,
      },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Degustation",
        dishes: [
          {
            id: "1",
            name: "Signature Degustation 8 courses",
            price: 2500000,
            description: "8 món signature + wine pairing",
            image:
              "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=400",
            popular: true,
          },
          {
            id: "2",
            name: "Chef's Selection 6 courses",
            price: 1800000,
            description: "6 món của chef",
            image:
              "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400",
          },
        ],
      },
    ],
    openingHours: "18:00 - 23:00 (Đóng cửa Chủ nhật)",
    reviews: [
      {
        id: 1,
        userName: "Michael Chen",
        userAvatar: "https://i.pravatar.cc/150?img=55",
        rating: 5,
        date: "2024-10-27",
        comment:
          "Best fine dining in Saigon! Panoramic city views from 51st floor.",
        helpful: 67,
      },
      {
        id: 2,
        userName: "Phạm Thị Lan",
        userAvatar: "https://i.pravatar.cc/150?img=31",
        rating: 5,
        date: "2024-10-24",
        comment:
          "Trải nghiệm ẩm thực đỉnh cao với view 360 độ tuyệt vời. Đắt nhưng xứng đáng!",
        helpful: 53,
      },
    ],
    policies: {
      reservation: "Bắt buộc đặt bàn trước tối thiểu 5 ngày",
      cancellation: "Hủy miễn phí trước 72 giờ",
      deposit: "Yêu cầu cọc 100% giá trị bàn ăn",
      children: "Chỉ dành cho khách từ 16 tuổi trở lên",
    },
    contact: {
      phone: "028 3915 6156",
      email: "reservation@eon51.com",
      website: "eon51.com",
    },
    hostInfo: {
      name: "EON51 Management",
      avatar: "https://i.pravatar.cc/150?img=70",
      verified: true,
      responseRate: "100%",
      responseTime: "Trong vòng 10 phút",
    },
  },
  {
    id: "13",
    name: "Salt Restaurant & Bar",
    slug: "salt-restaurant-bar",
    cuisine: "Món Âu",
    location: {
      city: "Nha Trang",
      address: "Tầng 42, Havana Nha Trang, 38 Trần Phú, Nha Trang",
      coordinates: { lat: 12.2485, lng: 109.1914 },
    },
    rating: 4.8,
    reviewCount: 312,
    priceRange: "$$$$",
    averagePrice: 1500000,
    images: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
    ],
    description:
      "Rooftop restaurant cao nhất Nha Trang với view biển 360 độ tuyệt đẹp. Chuyên ẩm thực Âu đương đại, hải sản cao cấp, bar cocktails sáng tạo. Lý tưởng cho sunset dinner và các dịp đặc biệt.",
    features: [
      { icon: "fa-building", name: "Rooftop cao nhất", available: true },
      { icon: "fa-water", name: "View biển 360°", available: true },
      { icon: "fa-cocktail", name: "Signature cocktails", available: true },
      { icon: "fa-music", name: "Live DJ", available: true },
      { icon: "fa-utensils", name: "Fine dining", available: true },
      { icon: "fa-parking", name: "Valet parking", available: true },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Premium Selection",
        dishes: [
          {
            id: "1",
            name: "Wagyu Beef Tenderloin",
            price: 2200000,
            description: "Thăn bò Wagyu A5",
            image:
              "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
            popular: true,
          },
          {
            id: "2",
            name: "Lobster Thermidor",
            price: 1800000,
            description: "Tôm hùm nướng phô mai",
            image:
              "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400",
          },
        ],
      },
    ],
    openingHours: "17:00 - 01:00 hàng ngày",
    reviews: [
      {
        id: 1,
        userName: "David Brown",
        userAvatar: "https://i.pravatar.cc/150?img=58",
        rating: 5,
        date: "2024-10-28",
        comment:
          "Spectacular rooftop dining with 360° ocean views. Perfect for sunset!",
        helpful: 48,
      },
      {
        id: 2,
        userName: "Võ Thị Mai",
        userAvatar: "https://i.pravatar.cc/150?img=33",
        rating: 5,
        date: "2024-10-25",
        comment:
          "Rooftop cao nhất Nha Trang, view biển tuyệt đẹp. Wagyu beef tuyệt vời!",
        helpful: 41,
      },
    ],
    policies: {
      reservation: "Đề xuất đặt bàn trước 2-3 ngày",
      cancellation: "Hủy miễn phí trước 48 giờ",
      deposit: "Cọc 50% cho nhóm từ 6 người",
      children: "Phù hợp cho trẻ em trên 12 tuổi",
    },
    contact: {
      phone: "0258 3525 252",
      email: "salt@havananhatrang.com",
      website: "saltrestaurant.vn",
    },
    hostInfo: {
      name: "Havana Group",
      avatar: "https://i.pravatar.cc/150?img=72",
      verified: true,
      responseRate: "100%",
      responseTime: "Trong vòng 20 phút",
    },
  },
  {
    id: "14",
    name: "La Maison 1888",
    slug: "la-maison-1888",
    cuisine: "Món Âu",
    location: {
      city: "Đà Nẵng",
      address: "InterContinental Danang, Bãi Bắc, Sơn Trà, Đà Nẵng",
      coordinates: { lat: 16.0627, lng: 108.2492 },
    },
    rating: 5.0,
    reviewCount: 156,
    priceRange: "$$$$",
    averagePrice: 2500000,
    images: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    ],
    description:
      "Nhà hàng 3 sao Michelin duy nhất tại Việt Nam do Chef Pierre Gagnaire điều hành. Ẩm thực Pháp haute cuisine trong không gian resort 5 sao, wine cellar hàng nghìn chai. Trải nghiệm ẩm thực đỉnh cao.",
    features: [
      { icon: "fa-star", name: "3 sao Michelin", available: true },
      { icon: "fa-user-chef", name: "Chef Pierre Gagnaire", available: true },
      { icon: "fa-wine-glass", name: "Wine cellar 5000+", available: true },
      { icon: "fa-water", name: "View biển riêng", available: true },
      { icon: "fa-concierge-bell", name: "Butler service", available: true },
      { icon: "fa-parking", name: "Valet parking", available: true },
    ],
    menuCategories: [
      {
        id: "1",
        name: "Haute Cuisine",
        dishes: [
          {
            id: "1",
            name: "Menu Dégustation 10 courses",
            price: 4500000,
            description: "10 món haute cuisine + wine pairing",
            image:
              "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400",
            popular: true,
          },
          {
            id: "2",
            name: "Menu Prestige 7 courses",
            price: 2800000,
            description: "7 món signature",
            image:
              "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
          },
        ],
      },
    ],
    openingHours: "18:30 - 22:30 (Thứ 3 - Chủ nhật, đóng cửa thứ 2)",
    reviews: [
      {
        id: 1,
        userName: "Sophie Laurent",
        userAvatar: "https://i.pravatar.cc/150?img=42",
        rating: 5,
        date: "2024-10-29",
        comment:
          "Authentique cuisine française! Chef Pierre Gagnaire est un génie. Meilleur restaurant au Vietnam!",
        helpful: 89,
      },
      {
        id: 2,
        userName: "Nguyễn Đức Minh",
        userAvatar: "https://i.pravatar.cc/150?img=20",
        rating: 5,
        date: "2024-10-26",
        comment:
          "Nhà hàng Michelin 3 sao duy nhất VN. Trải nghiệm haute cuisine đẳng cấp thế giới!",
        helpful: 76,
      },
    ],
    policies: {
      reservation: "Bắt buộc đặt bàn trước tối thiểu 1 tuần",
      cancellation: "Hủy miễn phí trước 1 tuần, sau đó phí 100%",
      deposit: "Yêu cầu thanh toán trước 100%",
      children: "Chỉ phục vụ khách từ 18 tuổi trở lên",
    },
    contact: {
      phone: "0236 3938 888",
      email: "lamaison1888@ihg.com",
      website: "lamaison1888.com",
    },
    hostInfo: {
      name: "Chef Pierre Gagnaire",
      avatar: "https://i.pravatar.cc/150?img=75",
      verified: true,
      responseRate: "100%",
      responseTime: "Trong vòng 5 phút",
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

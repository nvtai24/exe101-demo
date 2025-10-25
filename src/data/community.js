// Community Data - Users, Reviews, Achievements, Leaderboard

export const currentUser = {
  id: "current-user-id",
  name: "Devip666",
  avatar:
    "https://www.bleepstatic.com/content/hl-images/2022/03/11/kali-linux.jpg",
  level: "Super User",
  points: 9999,
};

export const suggestedUsers = [
  {
    id: "user-4",
    name: "Nguyễn Văn An",
    avatar: "https://i.pravatar.cc/150?img=12",
    level: "Gold",
    points: 2100,
    mutualFriends: 5,
    location: "Hà Nội",
    bio: "Yêu thích khám phá các địa danh lịch sử",
    posts: 45,
    friends: 120,
  },
  {
    id: "user-5",
    name: "Lê Thị Bình",
    avatar: "https://i.pravatar.cc/150?img=5",
    level: "Silver",
    points: 1650,
    mutualFriends: 3,
    location: "Đà Nẵng",
    bio: "Đam mê ẩm thực và văn hóa địa phương",
    posts: 32,
    friends: 89,
  },
  {
    id: "user-6",
    name: "Trần Minh Cường",
    avatar: "https://i.pravatar.cc/150?img=33",
    level: "Gold",
    points: 2800,
    mutualFriends: 8,
    location: "TP.HCM",
    bio: "Nhiếp ảnh gia phong cảnh nghiệp dư",
    posts: 67,
    friends: 234,
  },
  {
    id: "user-7",
    name: "Phạm Thu Hà",
    avatar: "https://i.pravatar.cc/150?img=9",
    level: "Bronze",
    points: 850,
    mutualFriends: 2,
    location: "Huế",
    bio: "Khám phá vẻ đẹp Việt Nam",
    posts: 23,
    friends: 56,
  },
  {
    id: "user-8",
    name: "Hoàng Đức Tài",
    avatar: "https://i.pravatar.cc/150?img=51",
    level: "Silver",
    points: 1450,
    mutualFriends: 4,
    location: "Nha Trang",
    bio: "Du lịch biển là đam mê của tôi",
    posts: 38,
    friends: 102,
  },
  {
    id: "user-9",
    name: "Vũ Mai Linh",
    avatar: "https://i.pravatar.cc/150?img=10",
    level: "Gold",
    points: 3200,
    mutualFriends: 12,
    location: "Hội An",
    bio: "Travel blogger & content creator",
    posts: 89,
    friends: 456,
  },
];

export const reviews = [
  {
    id: 1,
    user: {
      id: "user-1",
      name: "Rô Nan Đô",
      avatar:
        "https://tse2.mm.bing.net/th/id/OIP.cvtvy8bhCp0nMsXFIf52fQHaEK?cb=12&w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3",
      level: "Gold",
      points: 2500,
    },
    destination: "Hạ Long Bay",
    rating: 5,
    title: "Trải nghiệm tuyệt vời tại Vịnh Hạ Long",
    content:
      "Tour du thuyền rất đẹp, hướng dẫn viên nhiệt tình. Cảnh quan thiên nhiên tuyệt vời, đặc biệt là lúc hoàng hôn. Sẽ quay lại lần nữa!",
    images: [
      "https://www.chudu24.com/wp-content/uploads/2018/06/H%E1%BA%A1.Long_.Bay_.original.1986.jpg",
      "https://trekkingtoursapa.com/wp-content/uploads/2023/12/28-3.webp",
    ],
    likes: 24,
    comments: 8,
    date: "2 ngày trước",
    verified: true,
  },
  {
    id: 2,
    user: {
      id: "user-2",
      name: "Trần Văn Mười",
      avatar:
        "https://tse1.mm.bing.net/th/id/OIP.kMAI7IpT9DIy1LzoNjBIdgHaFj?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
      level: "Silver",
      points: 1800,
    },
    destination: "Hội An",
    rating: 4,
    title: "Phố cổ Hội An đẹp như mơ",
    content:
      "Đèn lồng rất đẹp, ẩm thực phong phú. Tuy nhiên khá đông khách du lịch. Nên đi vào buổi tối để tránh nắng.",
    images: [
      "https://static.vinwonders.com/production/hoi-an-vietnam-map-banner.jpg",
    ],
    likes: 18,
    comments: 5,
    date: "1 tuần trước",
    verified: false,
  },
  {
    id: 3,
    user: {
      id: "user-3",
      name: "Pôn Pốc Ba",
      avatar:
        "https://images.performgroup.com/di/library/GOAL/30/36/paul-pogba-manchester-united-2018-19_1im0iegikqvsf19h3klr8paoq1.jpg?t=-1354357906&quality=100",
      level: "Bronze",
      points: 950,
    },
    destination: "Sapa",
    rating: 5,
    title: "Ruộng bậc thang Sapa tuyệt đẹp",
    content:
      "Trekking ruộng bậc thang rất thú vị, gặp gỡ người dân tộc thân thiện. Cảnh quan thiên nhiên hùng vĩ. Cần chuẩn bị giày leo núi tốt.",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/59/37/1a/caption.jpg?w=800&h=400&s=1",
      "https://toigingiuvedep.vn/wp-content/uploads/2021/07/hinh-anh-ruong-bac-thang-mua-nuoc-do-dep-nhu-tranh-ve.jpg",
    ],
    likes: 32,
    comments: 12,
    date: "3 ngày trước",
    verified: true,
  },
];

export const achievements = [
  {
    id: 1,
    name: "Người khám phá",
    description: "Đã check-in tại 10 điểm đến",
    icon: "🏆",
    points: 100,
    unlocked: true,
  },
  {
    id: 2,
    name: "Nhà phê bình",
    description: "Đã viết 20 review",
    icon: "✍️",
    points: 150,
    unlocked: true,
  },
  {
    id: 3,
    name: "Người chia sẻ",
    description: "Đã chia sẻ 50 bài viết",
    icon: "📤",
    points: 200,
    unlocked: false,
  },
  {
    id: 4,
    name: "Thành viên VIP",
    description: "Đạt 5000 điểm",
    icon: "💎",
    points: 500,
    unlocked: false,
  },
];

export const leaderboard = [
  { rank: 1, name: "Nguyễn Văn A", points: 2500, level: "Gold" },
  { rank: 2, name: "Trần Thị B", points: 2200, level: "Gold" },
  { rank: 3, name: "Lê Văn C", points: 1800, level: "Silver" },
  { rank: 4, name: "Phạm Thị D", points: 1600, level: "Silver" },
  { rank: 5, name: "Hoàng Văn E", points: 1400, level: "Silver" },
];

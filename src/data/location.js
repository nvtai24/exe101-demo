export const locations = [
  {
    id: "hanoi",
    name: "Hà Nội",
    region: "Miền Bắc",
    category: "Culture",
    description:
      "Thủ đô ngàn năm văn hiến với phố cổ, kiến trúc, văn hóa và ẩm thực đặc sắc.",
    highlights: ["Văn Miếu", "Hồ Hoàn Kiếm", "Phố cổ", "Ẩm thực đường phố"],
    history:
      "Hà Nội là trung tâm chính trị, văn hoá của Việt Nam từ nhiều thế kỷ. Có lịch sử lâu đời với nhiều di tích như Văn Miếu, Hoàng thành Thăng Long.",
    openingHours: "Mở cửa: 24/7 (tùy điểm tham quan)",
    price: "Miễn phí/Tham quan trả phí tùy điểm",
    coordinates: { lat: 21.0277644, lng: 105.8341598 },
    images: [
      "https://static.vinwonders.com/production/gioi-thieu-ve-ha-noi-banner.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Hoan_Kiem_Lake_Hanoi.jpg",
    ],
    videos: ["https://www.youtube.com/watch?v=sample"],
    audioStory: null,
    faqs: [
      {
        q: "Nên đến Hà Nội vào mùa nào?",
        a: "Thời điểm đẹp nhất: tháng 10 đến tháng 4.",
      },
      {
        q: "Phương tiện di chuyển phổ biến?",
        a: "Xe máy, taxi, xe buýt và đi bộ trong phố cổ.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Lan",
        text: "Khá tuyệt vời, nhiều chỗ để ăn và chụp ảnh.",
        rating: 5,
        images: [],
      },
      {
        id: 2,
        author: "An",
        text: "Phố cổ rất thú vị vào ban đêm.",
        rating: 4,
        images: [],
      },
    ],
  },
  {
    id: "halong",
    name: "Hạ Long Bay",
    region: "Miền Bắc",
    category: "Nature",
    description: "Di sản thế giới với hàng nghìn đảo đá vôi tuyệt đẹp.",
    highlights: ["Du thuyền", "Hang động", "Chèo kayak", "Ngắm hoàng hôn"],
    history:
      "Vịnh Hạ Long được UNESCO công nhận là Di sản thiên nhiên thế giới.",
    openingHours: "Mở cửa: 6:00 - 18:00 (tùy hoạt động)",
    price: "Từ 200.000 VND - 2.500.000 VND tùy chương trình",
    coordinates: { lat: 20.910051, lng: 107.183902 },
    images: [
      "https://wallpaperaccess.com/full/200944.jpg",
      "https://dulichvietnam.com.vn/wp-content/uploads/2019/05/ha-long-bay.jpg",
    ],
    videos: [],
    audioStory: null,
    faqs: [
      {
        q: "Cần chuẩn bị gì khi đi Hạ Long?",
        a: "Mang theo mũ, kem chống nắng, giấy tờ tùy thân.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Minh",
        text: "Phong cảnh tuyệt đẹp.",
        rating: 5,
        images: [],
      },
    ],
  },
  {
    id: "hoian",
    name: "Hội An",
    region: "Miền Trung",
    category: "Culture",
    description:
      "Phố cổ Hội An nổi tiếng với kiến trúc cổ, đèn lồng, và ẩm thực địa phương.",
    highlights: ["Phố cổ", "Đèn lồng", "Thưởng thức cao lầu", "Làm đèn lồng"],
    history:
      "Hội An từng là một cảng thương mại quốc tế, lưu giữ nhiều công trình kiến trúc truyền thống.",
    openingHours: "Mở cửa: 7:00 - 22:00 (khu phố cổ)",
    price: "Phí tham quan một số điểm: 30.000 - 120.000 VND",
    coordinates: { lat: 15.880058, lng: 108.338047 },
    images: [
      "https://focusasiatravel.vn/wp-content/uploads/2018/09/Ph%E1%BB%91-C%E1%BB%95-H%E1%BB%99i-An1.jpg",
    ],
    videos: [],
    audioStory: null,
    faqs: [],
    reviews: [],
  },
  {
    id: "sapa",
    name: "Sapa",
    region: "Miền Bắc",
    category: "Nature",
    description:
      "Thị trấn vùng cao nổi tiếng với ruộng bậc thang và khí hậu mát mẻ.",
    highlights: ["Ruộng bậc thang", "Trekking", "Bản Cát Cát", "Fansipan"],
    history:
      "Sapa phát triển từ thời Pháp thuộc, là điểm đến trek và khám phá văn hoá dân tộc.",
    openingHours: "Mở cửa: 24/7 (điểm tham quan khác nhau)",
    price: "Miễn phí/Chi phí tour tùy lịch trình",
    coordinates: { lat: 22.3371, lng: 103.8448 },
    images: [
      "https://dulichviet.com.vn/images/bandidau/ruong-bac-thang-sapa(4).jpg",
      "https://i.imgur.com/6zKZ1Qm.jpg",
    ],
    videos: ["https://www.youtube.com/watch?v=sample_sapa"],
    audioStory: null,
    faqs: [
      {
        q: "Thời tiết Sapa thế nào?",
        a: "Mát mẻ quanh năm, lạnh nhất vào mùa đông.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Huy",
        text: "Tuyệt vời cho trekking và tham quan bản làng.",
        rating: 5,
        images: [],
      },
    ],
  },
  {
    id: "hue",
    name: "Huế",
    region: "Miền Trung",
    category: "Culture",
    description: "Cố đô với hệ thống lăng tẩm, đền đài và kiến trúc cung đình.",
    highlights: ["Đại Nội", "Lăng Tự Đức", "Chùa Thiên Mụ", "Sông Hương"],
    history:
      "Huế là trung tâm của triều đại Nguyễn, lưu giữ nhiều di sản lịch sử.",
    openingHours: "Mở cửa: 7:00 - 17:30 (các di tích)",
    price: "Một số điểm thu phí: 50.000 - 200.000 VND",
    coordinates: { lat: 16.4637, lng: 107.5909 },
    images: [
      "https://khamphahue.com.vn/Portals/0/Medias/Nam2022/T10/QuanTheDiTichCoDoHue-NgoMonHue_5_10_2022_13_48_46_416_CH.jpg",
    ],
    videos: [],
    audioStory: null,
    faqs: [
      {
        q: "Nên tham quan gì ở Huế?",
        a: "Đại Nội, lăng Tự Đức, chùa Thiên Mụ và sông Hương.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Thu",
        text: "Đậm chất lịch sử, nên đi cùng hướng dẫn viên.",
        rating: 4,
        images: [],
      },
    ],
  },
  {
    id: "danang",
    name: "Đà Nẵng",
    region: "Miền Trung",
    category: "Beach",
    description:
      "Thành phố biển với bãi biển rộng và nhiều điểm tham quan hiện đại.",
    highlights: [
      "Bãi biển Mỹ Khê",
      "Cầu Rồng",
      "Bà Nà Hills",
      "Ẩm thực địa phương",
    ],
    history:
      "Phát triển nhanh trong những thập kỷ gần đây, là trung tâm du lịch miền Trung.",
    openingHours: "Mở cửa: 24/7 (bãi biển công cộng)",
    price: "Miễn phí/Chi phí dịch vụ tại điểm",
    coordinates: { lat: 16.0544, lng: 108.2022 },
    images: ["https://btnmt.1cdn.vn/2023/07/04/302-202307041611213.jpg"],
    videos: [],
    audioStory: null,
    faqs: [
      {
        q: "Biển Đà Nẵng an toàn không?",
        a: "Các bãi tắm công cộng có cứu hộ vào mùa cao điểm.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Linh",
        text: "Bãi biển sạch và nhiều hoạt động vui chơi.",
        rating: 4,
        images: [],
      },
    ],
  },
  {
    id: "phuquoc",
    name: "Phú Quốc",
    region: "Miền Nam",
    category: "Beach",
    description:
      "Đảo ngọc nổi tiếng với bãi biển, lặn ngắm san hô và resort cao cấp.",
    highlights: [
      "Bãi Trường",
      "Lặn ngắm san hô",
      "Vinpearl",
      "Hải sản địa phương",
    ],
    history: "Phú Quốc phát triển du lịch mạnh mẽ trong những năm gần đây.",
    openingHours: "Mở cửa: 24/7 (khu du lịch)",
    price: "Chi phí tour và dịch vụ thay đổi theo mùa",
    coordinates: { lat: 10.3157, lng: 103.9848 },
    images: [
      "https://static.vinwonders.com/production/how-many-days-in-phu-quoc-2.jpg",
    ],
    videos: [],
    audioStory: null,
    faqs: [
      {
        q: "Cách di chuyển đến Phú Quốc?",
        a: "Bay thẳng từ các thành phố lớn hoặc phà từ Rạch Giá/Ha Tien.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Nga",
        text: "Resort đẹp, biển xanh; phù hợp nghỉ dưỡng.",
        rating: 5,
        images: [],
      },
    ],
  },
  {
    id: "dalat",
    name: "Đà Lạt",
    region: "Miền Nam",
    category: "Nature",
    description:
      "Thành phố ngàn hoa với khí hậu mát mẻ, rừng thông và vườn hoa.",
    highlights: ["Vườn hoa", "Hồ Xuân Hương", "Dinh Bảo Đại", "Chợ đêm Đà Lạt"],
    history: "Đà Lạt được xếp loại là khu nghỉ dưỡng từ thời Pháp thuộc.",
    openingHours: "Mở cửa: 24/7 (điểm tham quan khác nhau)",
    price: "Chi phí vào các vườn hoa và khu du lịch thường thấp (20k-150k)",
    coordinates: { lat: 11.9404, lng: 108.4583 },
    images: ["https://i.mie-eetoko.com/2A8A1490-1280x854.jpg"],
    videos: [],
    audioStory: null,
    faqs: [
      {
        q: "Nên mang theo gì khi đến Đà Lạt?",
        a: "Áo ấm vì buổi tối thường lạnh.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Vy",
        text: "Không khí dễ chịu, nhiều cảnh đẹp cho chụp ảnh.",
        rating: 5,
        images: [],
      },
    ],
  },
  {
    id: "ninhbinh",
    name: "Ninh Bình",
    region: "Miền Bắc",
    category: "Nature",
    description: "Quần thể Tràng An, Tam Cốc với cảnh quan sông núi hùng vĩ.",
    highlights: [
      "Chèo thuyền Tràng An",
      "Hang động",
      "Chùa Bái Đính",
      "Hang Múa",
    ],
    history:
      "Khu vực có nhiều giá trị văn hoá lịch sử và cảnh quan thiên nhiên nổi bật.",
    openingHours: "Mở cửa: 6:00 - 18:00 (khu du lịch)",
    price: "Phí tham quan Tràng An/Tam Cốc khoảng 200k-250k",
    coordinates: { lat: 20.2539, lng: 105.9749 },
    images: [
      "https://vietnamdiscovery.com/wp-content/uploads/2019/10/Trang-An-Complex-Featured.jpg",
    ],
    videos: [],
    audioStory: null,
    faqs: [
      {
        q: "Nên đi Tam Cốc hay Tràng An?",
        a: "Cả hai đều đẹp; Tràng An có nhiều hang động lớn hơn.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Quân",
        text: "Phong cảnh tuyệt vời, chuyên nghiệp dịch vụ chèo thuyền.",
        rating: 5,
        images: [],
      },
    ],
  },
  {
    id: "nhatrang",
    name: "Nha Trang",
    region: "Miền Nam",
    category: "Beach",
    description: "Thành phố biển nổi tiếng với bãi biển dài và điểm lặn biển.",
    highlights: [
      "Bãi biển Nha Trang",
      "Lặn Hòn Mun",
      "Vinpearl",
      "Ẩm thực hải sản",
    ],
    history:
      "Nha Trang phát triển du lịch biển từ lâu, có nhiều resort và hoạt động biển.",
    openingHours: "Mở cửa: 24/7 (bãi biển công cộng)",
    price: "Chi phí dịch vụ thay đổi theo mùa",
    coordinates: { lat: 12.2388, lng: 109.1967 },
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1280&q=80",
    ],
    videos: [],
    audioStory: null,
    faqs: [
      { q: "Nên đi lặn ở đâu?", a: "Hòn Mun là điểm lặn nổi bật ở Nha Trang." },
    ],
    reviews: [
      {
        id: 1,
        author: "Phong",
        text: "Nhiều đảo đẹp và dịch vụ lặn tốt.",
        rating: 4,
        images: [],
      },
    ],
  },
  {
    id: "phongnha",
    name: "Phong Nha - Kẻ Bàng",
    region: "Miền Trung",
    category: "Nature",
    description:
      "Vườn quốc gia với các hệ thống hang động lớn và kỳ quan tự nhiên.",
    highlights: [
      "Hang Sơn Đoòng (gần)",
      "Hang Én",
      "Động Phong Nha",
      "Sông Chày - Hang Tối",
    ],
    history:
      "Phong Nha là nơi có nhiều hang động karst lớn, được UNESCO công nhận.",
    openingHours: "Mở cửa: 6:00 - 17:00 (tùy tour)",
    price: "Chi phí tour hang động: 200k-1.5tr tùy loại tour",
    coordinates: { lat: 17.5208, lng: 106.2956 },
    images: [
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c0?auto=format&fit=crop&w=1280&q=80",
    ],
    videos: [],
    audioStory: null,
    faqs: [
      {
        q: "Có thể tham quan tự do không?",
        a: "Một số hang cần tour có hướng dẫn; kiểm tra trước khi đi.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Bảo",
        text: "Hang động ấn tượng, nên đi cùng hướng dẫn viên.",
        rating: 5,
        images: [],
      },
    ],
  },
  {
    id: "mytho",
    name: "Mỹ Tho & Tiền Giang (Miền Tây)",
    region: "Miền Nam",
    category: "Culture",
    description:
      "Trải nghiệm sông nước miền Tây: chợ nổi, vườn trái cây và nét văn hoá địa phương.",
    highlights: [
      "Chợ nổi",
      "Vườn trái cây",
      "Du thuyền sông",
      "Ăn uống địa phương",
    ],
    history:
      "Khu vực sông nước có truyền thống nghề chài lưới và thương mại đường sông.",
    openingHours: "Mở cửa: 6:00 - 18:00 (chợ nổi và tour)",
    price: "Chi phí tour nửa ngày: ~200k-500k",
    coordinates: { lat: 10.3579, lng: 106.3576 },
    images: [
      "https://valitravel.vn/wp-content/uploads/2022/10/kinh-nghiem-du-lich-cho-noi-cai-rang-moi-nhat-2022-1428.jpg",
    ],
    videos: [],
    audioStory: null,
    faqs: [
      {
        q: "Có thể đi chợ nổi quanh năm?",
        a: "Có, nhưng thời gian hoạt động mạnh là buổi sáng.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Nam",
        text: "Trải nghiệm sông nước rất thú vị và ấm cúng.",
        rating: 4,
        images: [],
      },
    ],
  },
];

export const regions = [
  { id: "all", name: "Tất cả" },
  { id: "Miền Bắc", name: "Miền Bắc" },
  { id: "Miền Trung", name: "Miền Trung" },
  { id: "Miền Nam", name: "Miền Nam" },
];

export const categories = [
  { id: "Culture", name: "Văn hóa" },
  { id: "Nature", name: "Thiên nhiên" },
  { id: "Beach", name: "Biển" },
];

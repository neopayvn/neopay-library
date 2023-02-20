const LIST_PROVINCE = [
	{id: 1, name: "Hồ Chí Minh"},
	{id: 20, name: "Đồng Nai"},
	{id: 15, name: "Cần Thơ"},

	{id: 3, name: "An Giang"},
	{id: 58, name: "Bà Rịa–Vũng Tàu"},
	{id: 5, name: "Bắc Kạn"},
	{id: 6, name: "Bắc Giang"},
	{id: 7, name: "Bạc Liêu"},
	{id: 8, name: "Bắc Ninh"},
	{id: 9, name: "Bến Tre"},
	{id: 61, name: "Bình Dương"},
	{id: 11, name: "Bình Định"},
	{id: 12, name: "Bình Phước"},
	{id: 13, name: "Bình Thuận"},

	{id: 14, name: "Cà Mau"},
	{id: 16, name: "Cao Bằng"},
	{id: 17, name: "Đà Nẵng"},
	{id: 18, name: "Đắk Lắk"},
	{id: 62, name: "Đắk Nông"},
	{id: 19, name: "Điện Biên"},
	{id: 63, name: "Đồng Tháp"},
	{id: 21, name: "Gia Lai"},

	{id: 22, name: "Hà Giang"},
	{id: 23, name: "Hà Nam"},
	{id: 2, name: "Hà Nội"},
	{id: 24, name: "Hậu Giang"},
	{id: 25, name: "Hà Tĩnh"},
	{id: 26, name: "Hải Dương"},
	{id: 27, name: "Hải Phòng"},
	{id: 28, name: "Hòa Bình"},
	{id: 52, name: "Huế"},
	{id: 64, name: "Hưng Yên"},
	{id: 30, name: "Khánh Hòa"},
	{id: 56, name: "Kiên Giang"},
	{id: 65, name: "Kon Tum"},
	{id: 32, name: "Lai Châu"},
	{id: 33, name: "Lâm Đồng"},
	{id: 34, name: "Lạng Sơn"},
	{id: 35, name: "Lào Cai"},
	{id: 36, name: "Long An"},
	{id: 37, name: "Nam Định"},
	{id: 38, name: "Nghệ An"},
	{id: 66, name: "Ninh Bình"},
	{id: 39, name: "Ninh Thuận"},
	{id: 40, name: "Phú Thọ"},
	{id: 41, name: "Phú Yên"},
	{id: 42, name: "Quảng Bình"},
	{id: 43, name: "Quảng Nam"},
	{id: 44, name: "Quảng Ngãi"},
	{id: 45, name: "Quảng Ninh"},
	{id: 46, name: "Quảng Trị"},
	{id: 47, name: "Sóc Trăng"},
	{id: 67, name: "Sơn La"},
	{id: 48, name: "Tây Ninh"},
	{id: 49, name: "Thái Bình"},
	{id: 50, name: "Thái Nguyên"},
	{id: 51, name: "Thanh Hóa"},

	{id: 53, name: "Tiền Giang"},
	{id: 54, name: "Trà Vinh"},
	{id: 55, name: "Tuyên Quang"},
	{id: 60, name: "Vĩnh Long"},
	{id: 57, name: "Vĩnh Phúc"},
	{id: 59, name: "Yên Bái"}
];

const LIST_DISTRICT = [
	{id: 1, name: "Quận 1", province: 1},
	{id: 2, name: "Quận 2", province: 1},
	{id: 3, name: "Quận 3", province: 1},
	{id: 4, name: "Quận 4", province: 1},
	{id: 5, name: "Quận 5", province: 1},
	{id: 6, name: "Quận 6", province: 1},
	{id: 7, name: "Quận 7", province: 1},
	{id: 8, name: "Quận 8", province: 1},
	{id: 9, name: "Quận 9", province: 1},
	{id: 10, name: "Quận 10", province: 1},
	{id: 11, name: "Quận 11", province: 1},
	{id: 12, name: "Quận 12", province: 1},
	{id: 13, name: "Quận Phú Nhuận", province: 1},
	{id: 14, name: "Quận Bình Thạnh", province: 1},
	{id: 15, name: "Quận Tân Bình", province: 1},
	{id: 16, name: "Quận Tân Phú", province: 1},
	{id: 17, name: "Quận Gò Vấp", province: 1},
	{id: 18, name: "Quận Thủ Đức", province: 1},
	{id: 19, name: "Quận Bình Tân", province: 1},
	{id: 20, name: "Huyện Bình Chánh", province: 1},
	{id: 703, name: "Huyện Hóc Môn", province: 1},
	{id: 704, name: "Huyện Cần Giờ", province: 1},
	{id: 705, name: "Huyện Củ Chi", province: 1},
	{id: 713, name: "Huyện Nhà Bè", province: 1},
	{id: 21, name: "Quận Ba Đình", province: 2},
	{id: 22, name: "Quận Hoàn Kiếm", province: 2},
	{id: 23, name: "Quận Hai Bà Trưng", province: 2},
	{id: 24, name: "Quận Đống Đa", province: 2},
	{id: 25, name: "Quận Tây Hồ", province: 2},
	{id: 26, name: "Quận Cầu Giấy", province: 2},
	{id: 27, name: "Quận Thanh Xuân", province: 2},
	{id: 28, name: "Quận Hoàng Mai", province: 2},
	{id: 29, name: "Quận Long Biên", province: 2},
	{id: 30, name: "Quận Nam Từ Liêm", province: 2},
	{id: 31, name: "Huyện Thanh Trì", province: 2},
	{id: 32, name: "Huyện Gia Lâm", province: 2},
	{id: 33, name: "Huyện Đông Anh", province: 2},
	{id: 34, name: "Huyện Sóc Sơn", province: 2},
	{id: 265, name: "Quận Hà Đông", province: 2},
	{id: 266, name: "Thị xã Sơn Tây", province: 2},
	{id: 267, name: "Huyện Ba Vì", province: 2},
	{id: 268, name: "Huyện Phúc Thọ", province: 2},
	{id: 269, name: "Huyện Thạch Thất", province: 2},
	{id: 270, name: "Huyện Quốc Oai", province: 2},
	{id: 271, name: "Huyện Chương Mỹ", province: 2},
	{id: 272, name: "Huyện Đan Phượng", province: 2},
	{id: 273, name: "Huyện Hoài Đức", province: 2},
	{id: 274, name: "Huyện Thanh Oai", province: 2},
	{id: 275, name: "Huyện Mỹ Đức", province: 2},
	{id: 276, name: "Huyện Ứng Hòa", province: 2},
	{id: 277, name: "Huyện Thường Tín", province: 2},
	{id: 278, name: "Huyện Phú Xuyên", province: 2},
	{id: 716, name: "Huyện Mê Linh", province: 2},
	{id: 749, name: "Quận Bắc Từ Liêm", province: 2},
	{id: 66, name: "Thành phố Châu Đốc", province: 3},
	{id: 67, name: "Thành phố Long Xuyên", province: 3},
	{id: 68, name: "Huyện An Phú", province: 3},
	{id: 69, name: "Thị xã Tân Châu", province: 3},
	{id: 70, name: "Huyện Phú Tân", province: 3},
	{id: 71, name: "Huyện Tịnh Biên", province: 3},
	{id: 72, name: "Huyện Tri Tôn", province: 3},
	{id: 73, name: "Huyện Châu Phú", province: 3},
	{id: 74, name: "Huyện Chợ Mới", province: 3},
	{id: 75, name: "Huyện Châu Thành", province: 3},
	{id: 76, name: "Huyện Thoại Sơn", province: 3},
	{id: 127, name: "Thành phố Bắc Kạn", province: 5},
	{id: 128, name: "Huyện Chợ Đồn", province: 5},
	{id: 129, name: "Huyện Bạch Thông", province: 5},
	{id: 130, name: "Huyện Na Rì", province: 5},
	{id: 131, name: "Huyện Ngân Sơn", province: 5},
	{id: 132, name: "Huyện Ba Bể", province: 5},
	{id: 133, name: "Huyện Chợ Mới", province: 5},
	{id: 134, name: "Huyện Pắc Nặm", province: 5},
	{id: 135, name: "Thành phố Bắc Giang", province: 6},
	{id: 136, name: "Huyện Yên Thế", province: 6},
	{id: 137, name: "Huyện Sơn Động", province: 6},
	{id: 138, name: "Huyện Lục Ngạn", province: 6},
	{id: 139, name: "Huyện Lục Nam", province: 6},
	{id: 140, name: "Huyện Tân Yên", province: 6},
	{id: 141, name: "Huyện Hiệp Hòa", province: 6},
	{id: 142, name: "Huyện Lạng Giang", province: 6},
	{id: 143, name: "Huyện Việt Yên", province: 6},
	{id: 144, name: "Huyện Yên Dũng", province: 6},
	{id: 121, name: "Thành phố Bạc Liêu", province: 7},
	{id: 122, name: "Huyện Vĩnh Lợi", province: 7},
	{id: 123, name: "Huyện Hồng Dân", province: 7},
	{id: 124, name: "Huyện Giá Rai", province: 7},
	{id: 125, name: "Huyện Phước Long", province: 7},
	{id: 126, name: "Huyện Đông Hải", province: 7},
	{id: 721, name: "Huyện Hòa Bình", province: 7},
	{id: 145, name: "Thành phố Bắc Ninh", province: 8},
	{id: 146, name: "Huyện Yên Phong", province: 8},
	{id: 147, name: "Huyện Tiên Du", province: 8},
	{id: 148, name: "Huyện Quế Võ", province: 8},
	{id: 149, name: "Thị xã Từ Sơn", province: 8},
	{id: 150, name: "Huyện Thuận Thành", province: 8},
	{id: 151, name: "Huyện Gia Bình", province: 8},
	{id: 152, name: "Huyện Lương Tài", province: 8},
	{id: 153, name: "Thành phố Bến Tre", province: 9},
	{id: 154, name: "Huyện Chợ Lách", province: 9},
	{id: 155, name: "Huyện Châu Thành", province: 9},
	{id: 156, name: "Huyện Mỏ Cày Bắc", province: 9},
	{id: 157, name: "Huyện Giồng Trôm", province: 9},
	{id: 158, name: "Huyện Bình Đại", province: 9},
	{id: 159, name: "Huyện Ba Tri", province: 9},
	{id: 160, name: "Huyện Thạnh Phú", province: 9},
	{id: 722, name: "Huyện Mỏ Cày Nam", province: 9},
	{id: 109, name: "Thành phố Quy Nhơn", province: 11},
	{id: 110, name: "Huyện An Lão", province: 11},
	{id: 112, name: "Huyện Hoài Ân", province: 11},
	{id: 113, name: "Huyện Hoài Nhơn", province: 11},
	{id: 114, name: "Huyện Phù Mỹ", province: 11},
	{id: 115, name: "Huyện Phù Cát", province: 11},
	{id: 116, name: "Huyện Vĩnh Thạnh", province: 11},
	{id: 117, name: "Huyện Tây Sơn", province: 11},
	{id: 118, name: "Huyện Vân Canh", province: 11},
	{id: 119, name: "Thị xã An Nhơn", province: 11},
	{id: 120, name: "Huyện Tuy Phước", province: 11},
	{id: 92, name: "Thị xã Đồng Xoài", province: 12},
	{id: 93, name: "Huyện Đồng Phù", province: 12},
	{id: 94, name: "Huyện Chơn Thành", province: 12},
	{id: 95, name: "Thị xã Bình Long", province: 12},
	{id: 96, name: "Huyện Lộc Ninh", province: 12},
	{id: 97, name: "Huyện Bù Đốp", province: 12},
	{id: 98, name: "Thị xã Phước Long", province: 12},
	{id: 99, name: "Huyện Bù Đăng", province: 12},
	{id: 723, name: "Huyện Bù Gia Mập", province: 12},
	{id: 724, name: "Huyện Hớn Quản", province: 12},
	{id: 756, name: "Huyện Phú Riềng", province: 12},
	{id: 100, name: "Thành phố Phan Thiết", province: 13},
	{id: 101, name: "Huyện Tuy Phong", province: 13},
	{id: 102, name: "Huyện Bắc Bình", province: 13},
	{id: 103, name: "Huyện Hàm Thuận Bắc", province: 13},
	{id: 104, name: "Huyện Hàm Thuận Nam", province: 13},
	{id: 105, name: "Huyện Hàm Tân", province: 13},
	{id: 106, name: "Huyện Đức Linh", province: 13},
	{id: 107, name: "Huyện Tánh Linh", province: 13},
	{id: 108, name: "Huyện Phú Quí", province: 13},
	{id: 719, name: "Thị xã La Gi", province: 13},
	{id: 182, name: "Thành phố Cà Mau", province: 14},
	{id: 183, name: "Huyện Cái Nước", province: 14},
	{id: 184, name: "Huyện Trần Văn Thời", province: 14},
	{id: 185, name: "Huyện U Minh", province: 14},
	{id: 186, name: "Huyện Thới Bình", province: 14},
	{id: 187, name: "Huyện Đầm Dơi", province: 14},
	{id: 188, name: "Huyện Ngọc Hiển", province: 14},
	{id: 189, name: "Huyện Năm Căn", province: 14},
	{id: 190, name: "Huyện Phú Tân", province: 14},
	{id: 174, name: "Quận Bình Thủy", province: 15},
	{id: 175, name: "Quận Ninh Kiều", province: 15},
	{id: 176, name: "Quận Cái Răng", province: 15},
	{id: 177, name: "Quận Ô Môn", province: 15},
	{id: 178, name: "Huyện Phong Điền", province: 15},
	{id: 179, name: "Huyện Cờ Đỏ", province: 15},
	{id: 180, name: "Huyện Vĩnh Thạnh", province: 15},
	{id: 181, name: "Quận Thốt Nốt", province: 15},
	{id: 725, name: "Huyện Thới Lai", province: 15},
	{id: 161, name: "Thành phố Cao Bằng", province: 16},
	{id: 162, name: "Huyện Trùng Khánh", province: 16},
	{id: 163, name: "Huyện Bảo Lạc", province: 16},
	{id: 164, name: "Huyện Thông Nông", province: 16},
	{id: 165, name: "Huyện Hà Quảng", province: 16},
	{id: 166, name: "Huyện Trà Lĩnh", province: 16},
	{id: 167, name: "Huyện Nguyên Bình", province: 16},
	{id: 168, name: "Huyện Hòa An", province: 16},
	{id: 169, name: "Huyện Quảng Uyên", province: 16},
	{id: 170, name: "Huyện Thạch An", province: 16},
	{id: 171, name: "Huyện Hạ Lang", province: 16},
	{id: 172, name: "Huyện Bảo Lâm", province: 16},
	{id: 173, name: "Huyện Phục Hòa", province: 16},
	{id: 42, name: "Quận Hải Châu", province: 17},
	{id: 43, name: "Quận Thanh Khê", province: 17},
	{id: 44, name: "Quận Ngũ Hành Sơn", province: 17},
	{id: 46, name: "Quận Sơn Trà", province: 17},
	{id: 47, name: "Quận Liên Chiểu", province: 17},
	{id: 48, name: "Quận Cẩm Lệ", province: 17},
	{id: 49, name: "Huyện Hòa Vang", province: 17},
	{id: 191, name: "Thành Phố Buôn Ma Thuột", province: 18},
	{id: 192, name: "Huyện Cư MGar", province: 18},
	{id: 193, name: "Huyện Krông Búk", province: 18},
	{id: 194, name: "Huyện Ea H'leo", province: 18},
	{id: 195, name: "Huyện Krông Năng", province: 18},
	{id: 196, name: "Huyện Ea Súp", province: 18},
	{id: 197, name: "Huyện Krông Pắc", province: 18},
	{id: 198, name: "Huyện Ea Kar", province: 18},
	{id: 199, name: "Huyện M'đrắk", province: 18},
	{id: 200, name: "Huyện Krông Ana", province: 18},
	{id: 201, name: "Huyện Krông Bông", province: 18},
	{id: 202, name: "Huyện Lăk", province: 18},
	{id: 203, name: "Huyện Buôn Đôn", province: 18},
	{id: 717, name: "Thị xã Buôn Hồ", province: 18},
	{id: 726, name: "Huyện Cư Kuin", province: 18},
	{id: 694, name: "Thành phố Điện Biên Phủ", province: 19},
	{id: 695, name: "Thị xã Mường Lay", province: 19},
	{id: 696, name: "Huyện Mường Chà", province: 19},
	{id: 697, name: "Huyện Mường Nhé", province: 19},
	{id: 698, name: "Huyện Mường Ảng", province: 19},
	{id: 699, name: "Huyện Tuần Giáo", province: 19},
	{id: 700, name: "Huyện Tủa Chùa", province: 19},
	{id: 701, name: "Huyện Điện Biên", province: 19},
	{id: 702, name: "Huyện Điện Biên Đông", province: 19},
	{id: 745, name: "Huyện Nậm Pồ", province: 19},
	{id: 550, name: "Thành phố Biên Hòa", province: 20},
	{id: 551, name: "Huyện Vĩnh Cửu", province: 20},
	{id: 552, name: "Huyện Tân Phú", province: 20},
	{id: 553, name: "Huyện Định Quán", province: 20},
	{id: 554, name: "Huyện Thống Nhất", province: 20},
	{id: 555, name: "Thị xã Long Khánh", province: 20},
	{id: 556, name: "Huyện Xuân Lộc", province: 20},
	{id: 557, name: "Huyện Long Thành", province: 20},
	{id: 558, name: "Huyện Nhơn Trạch", province: 20},
	{id: 559, name: "Huyện Trảng Bom", province: 20},
	{id: 560, name: "Huyện Cẩm Mỹ", province: 20},
	{id: 244, name: "Thành phố Pleiku", province: 21},
	{id: 245, name: "Huyện Chư Păh", province: 21},
	{id: 246, name: "Huyện Mang Yang", province: 21},
	{id: 247, name: "Huyện KBang", province: 21},
	{id: 248, name: "Thị xã An Khê", province: 21},
	{id: 249, name: "Huyện Kông Chro", province: 21},
	{id: 250, name: "Huyện Đức Cơ", province: 21},
	{id: 251, name: "Huyện Chư Prông", province: 21},
	{id: 252, name: "Huyện Chư Sê", province: 21},
	{id: 253, name: "Thị xã AYun Pa", province: 21},
	{id: 254, name: "Huyện Krông Pa", province: 21},
	{id: 255, name: "Huyện Ia Grai", province: 21},
	{id: 256, name: "Huyện Đăk Đoa", province: 21},
	{id: 257, name: "Huyện Ia Pa", province: 21},
	{id: 258, name: "Huyện Đăk Pơ", province: 21},
	{id: 727, name: "Huyện Chư Pưh", province: 21},
	{id: 728, name: "Huyện Phú Thiện", province: 21},
	{id: 302, name: "Thành phố Hà Giang", province: 22},
	{id: 303, name: "Huyện Đồng Văn", province: 22},
	{id: 304, name: "Huyện Mèo Vạc", province: 22},
	{id: 305, name: "Huyện Yên Minh", province: 22},
	{id: 306, name: "Huyện Quản Bạ", province: 22},
	{id: 307, name: "Huyện Vị Xuyên", province: 22},
	{id: 308, name: "Huyện Bắc Mê", province: 22},
	{id: 309, name: "Huyện Hoàng Su Phì", province: 22},
	{id: 310, name: "Huyện Xín Mần", province: 22},
	{id: 311, name: "Huyện Bắc Quang", province: 22},
	{id: 312, name: "Huyện Quang Bình", province: 22},
	{id: 259, name: "Thành phố Phủ Lý", province: 23},
	{id: 260, name: "Huyện Duy Tiên", province: 23},
	{id: 261, name: "Huyện Kim Bảng", province: 23},
	{id: 262, name: "Huyện Lý Nhân", province: 23},
	{id: 263, name: "Huyện Thanh Liêm", province: 23},
	{id: 264, name: "Huyện Bình Lục", province: 23},
	{id: 706, name: "Thành phố Vị Thanh", province: 24},
	{id: 707, name: "Thị xã Ngã Bảy", province: 24},
	{id: 708, name: "Huyện Vị Thủy", province: 24},
	{id: 709, name: "Huyện Long Mỹ", province: 24},
	{id: 710, name: "Huyện Phụng Hiệp", province: 24},
	{id: 711, name: "Huyện Châu Thành", province: 24},
	{id: 712, name: "Huyện Châu Thành A", province: 24},
	{id: 758, name: "Thị xã Long Mỹ", province: 24},
	{id: 279, name: "Thành phố Hà Tĩnh", province: 25},
	{id: 280, name: "Thị xã Hồng Lĩnh", province: 25},
	{id: 281, name: "Huyện Hương Sơn", province: 25},
	{id: 282, name: "Huyện Đức Thọ", province: 25},
	{id: 283, name: "Huyện Nghi Xuân", province: 25},
	{id: 284, name: "Huyện Can Lộc", province: 25},
	{id: 285, name: "Huyện Hương Khê", province: 25},
	{id: 286, name: "Huyện Thạch Hà", province: 25},
	{id: 287, name: "Huyện Cẩm Xuyên", province: 25},
	{id: 288, name: "Huyện Kỳ Anh", province: 25},
	{id: 289, name: "Huyện Vũ Quang", province: 25},
	{id: 729, name: "Huyện Lộc Hà", province: 25},
	{id: 755, name: "Thị xã Kỳ Anh", province: 25},
	{id: 290, name: "Thành phố Hải Dương", province: 26},
	{id: 291, name: "Thị xã Chí Linh", province: 26},
	{id: 292, name: "Huyện Nam Sách", province: 26},
	{id: 293, name: "Huyện Kinh Môn", province: 26},
	{id: 294, name: "Huyện Gia Lộc", province: 26},
	{id: 295, name: "Huyện Tứ Kỳ", province: 26},
	{id: 296, name: "Huyện Thanh Miện", province: 26},
	{id: 297, name: "Huyện Ninh Giang", province: 26},
	{id: 298, name: "Huyện Cẩm Giàng", province: 26},
	{id: 299, name: "Huyện Thanh Hà", province: 26},
	{id: 300, name: "Huyện Kim Thành", province: 26},
	{id: 301, name: "Huyện Bình Giang", province: 26},
	{id: 52, name: "Quận Hồng Bàng", province: 27},
	{id: 53, name: "Quận Lê Chân", province: 27},
	{id: 54, name: "Quận Ngô Quyền", province: 27},
	{id: 55, name: "Quận Kiến An", province: 27},
	{id: 56, name: "Quận Hải An", province: 27},
	{id: 57, name: "Quận Đồ Sơn", province: 27},
	{id: 58, name: "Huyện An Lão", province: 27},
	{id: 59, name: "Huyện Kiến Thụy", province: 27},
	{id: 60, name: "Huyện Thủy Nguyên", province: 27},
	{id: 61, name: "Huyện An Dương", province: 27},
	{id: 62, name: "Huyện Tiên Lãng", province: 27},
	{id: 63, name: "Huyện Vĩnh Bảo", province: 27},
	{id: 64, name: "Huyện Cát Hải", province: 27},
	{id: 65, name: "Huyện Bạch Long Vĩ", province: 27},
	{id: 730, name: "Quận Dương Kinh", province: 27},
	{id: 313, name: "Thành phố Hòa Bình", province: 28},
	{id: 314, name: "Huyện Đà Bắc", province: 28},
	{id: 315, name: "Huyện Mai Châu", province: 28},
	{id: 316, name: "Huyện Tân Lạc", province: 28},
	{id: 317, name: "Huyện Lạc Sơn", province: 28},
	{id: 318, name: "Huyện Kỳ Sơn", province: 28},
	{id: 319, name: "Huyện Lương Sơn", province: 28},
	{id: 340, name: "Huyện Kim Bôi", province: 28},
	{id: 341, name: "Huyện Lạc Thủy", province: 28},
	{id: 342, name: "Huyện Yên Thủy", province: 28},
	{id: 343, name: "Huyện Cao Phong", province: 28},
	{id: 354, name: "Thành phố Nha Trang", province: 30},
	{id: 355, name: "Huyện Vạn Ninh", province: 30},
	{id: 356, name: "Huyện Ninh Hòa", province: 30},
	{id: 357, name: "Huyện Diên Khánh", province: 30},
	{id: 358, name: "Huyện Khánh Vĩnh", province: 30},
	{id: 359, name: "Thành phố Cam Ranh", province: 30},
	{id: 360, name: "Huyện Khánh Sơn", province: 30},
	{id: 731, name: "Huyện Cam Lâm", province: 30},
	{id: 384, name: "Thành phố Lai Châu", province: 32},
	{id: 385, name: "Huyện Tam Đường", province: 32},
	{id: 386, name: "Huyện Phong Thổ", province: 32},
	{id: 387, name: "Huyện Sìn Hồ", province: 32},
	{id: 388, name: "Huyện Mường Tè", province: 32},
	{id: 389, name: "Huyện Than Uyên", province: 32},
	{id: 714, name: "Huyện Tân Uyên", province: 32},
	{id: 715, name: "Huyện Nậm Nhùn", province: 32},
	{id: 399, name: "Thành phố Đà Lạt", province: 33},
	{id: 400, name: "Thành phố Bảo Lộc", province: 33},
	{id: 401, name: "Huyện Đức Trọng", province: 33},
	{id: 402, name: "Huyện Di Linh", province: 33},
	{id: 403, name: "Huyện Đơn Dương", province: 33},
	{id: 404, name: "Huyện Lạc Dương", province: 33},
	{id: 405, name: "Huyện Đạ Huoai", province: 33},
	{id: 406, name: "Huyện Đạ Tẻh", province: 33},
	{id: 407, name: "Huyện Cát Tiên", province: 33},
	{id: 408, name: "Huyện Lâm Hà", province: 33},
	{id: 409, name: "Huyện Bảo lâm", province: 33},
	{id: 410, name: "Huyện Đam Rông", province: 33},
	{id: 411, name: "Thành phố Lạng Sơn", province: 34},
	{id: 412, name: "Huyện Tràng Định", province: 34},
	{id: 413, name: "Huyện Bình Gia", province: 34},
	{id: 414, name: "Huyện Văn Lãng", province: 34},
	{id: 415, name: "Huyện Bắc Sơn", province: 34},
	{id: 416, name: "Huyện Văn Quan", province: 34},
	{id: 417, name: "Huyện Cao Lộc", province: 34},
	{id: 418, name: "Huyện Lộc Bình", province: 34},
	{id: 419, name: "Huyện Chi Lăng", province: 34},
	{id: 420, name: "Huyện Đình Lập", province: 34},
	{id: 421, name: "Huyện Hữu Lũng", province: 34},
	{id: 390, name: "Thành phố Lào Cai", province: 35},
	{id: 391, name: "Huyện Si Ma Cai", province: 35},
	{id: 392, name: "Huyện Bát Xát", province: 35},
	{id: 393, name: "Huyện Bảo Thắng", province: 35},
	{id: 394, name: "Huyện Sa Pa", province: 35},
	{id: 395, name: "Huyện Văn Bàn", province: 35},
	{id: 396, name: "Huyện Bảo Yên", province: 35},
	{id: 397, name: "Huyện Bắc Hà", province: 35},
	{id: 398, name: "Huyện Mường Khương", province: 35},
	{id: 422, name: "Thành phố Tân An", province: 36},
	{id: 423, name: "Huyện Vĩnh Hưng", province: 36},
	{id: 424, name: "Huyện Mộc Hóa", province: 36},
	{id: 425, name: "Huyện Tân Thạnh", province: 36},
	{id: 426, name: "Huyện Thạnh Hóa", province: 36},
	{id: 427, name: "Huyện Đức Huệ", province: 36},
	{id: 428, name: "Huyện Đức Hòa", province: 36},
	{id: 429, name: "Huyện Bến Lức", province: 36},
	{id: 430, name: "Huyện Thủ Thừa", province: 36},
	{id: 431, name: "Huyện Châu Thành", province: 36},
	{id: 432, name: "Huyện Tân Trụ", province: 36},
	{id: 433, name: "Huyện Cần Đước", province: 36},
	{id: 434, name: "Huyện Cần Giuộc", province: 36},
	{id: 435, name: "Huyện Tân Hưng", province: 36},
	{id: 748, name: "Thị xã Kiến Tường", province: 36},
	{id: 454, name: "Thành phố Nam Định", province: 37},
	{id: 455, name: "Huyện Mỹ Lộc", province: 37},
	{id: 456, name: "Huyện Xuân Trường", province: 37},
	{id: 457, name: "Huyện Giao Thủy", province: 37},
	{id: 458, name: "Huyện Ý Yên", province: 37},
	{id: 459, name: "Huyện Vụ Bản", province: 37},
	{id: 460, name: "Huyện Nam Trực", province: 37},
	{id: 461, name: "Huyện Trực Ninh", province: 37},
	{id: 462, name: "Huyện Nghĩa Hưng", province: 37},
	{id: 463, name: "Huyện Hải Hậu", province: 37},
	{id: 464, name: "Thành phố Vinh", province: 38},
	{id: 465, name: "Thị xã Cửa Lò", province: 38},
	{id: 466, name: "Huyện Quỳ Châu", province: 38},
	{id: 467, name: "Huyện Quỳ Hợp", province: 38},
	{id: 468, name: "Huyện Nghĩa Đàn", province: 38},
	{id: 469, name: "Huyện Quỳnh Lưu", province: 38},
	{id: 470, name: "Huyện Kỳ Sơn", province: 38},
	{id: 471, name: "Huyện Tương Dương", province: 38},
	{id: 472, name: "Huyện Con Cuông", province: 38},
	{id: 473, name: "Huyện Tân Kỳ", province: 38},
	{id: 474, name: "Huyện Yên Thành", province: 38},
	{id: 475, name: "Huyện Diễn Châu", province: 38},
	{id: 476, name: "Huyện Anh Sơn", province: 38},
	{id: 477, name: "Huyện Đô Lương", province: 38},
	{id: 478, name: "Huyện Thanh Chương", province: 38},
	{id: 479, name: "Huyện Nghi Lộc", province: 38},
	{id: 480, name: "Huyện Nam Đàn", province: 38},
	{id: 481, name: "Huyện Hưng Nguyên", province: 38},
	{id: 482, name: "Huyện Quế Phong", province: 38},
	{id: 736, name: "Thị xã Thái Hoà", province: 38},
	{id: 747, name: "Thị xã Hoàng Mai", province: 38},
	{id: 483, name: "Thành phố Phan Rang-Tháp Chàm", province: 39},
	{id: 484, name: "Huyện Ninh Sơn", province: 39},
	{id: 485, name: "Huyện Ninh Hải", province: 39},
	{id: 486, name: "Huyện Ninh Phước", province: 39},
	{id: 487, name: "Huyện Bác Ái", province: 39},
	{id: 488, name: "Huyện Thuận Bắc", province: 39},
	{id: 738, name: "Huyện Thuận Nam", province: 39},
	{id: 232, name: "Thành phố Việt Trì", province: 40},
	{id: 233, name: "Thị xã Phú Thọ", province: 40},
	{id: 234, name: "Huyện Đoan Hùng", province: 40},
	{id: 235, name: "Huyện Thanh Ba", province: 40},
	{id: 236, name: "Huyện Hạ Hòa", province: 40},
	{id: 237, name: "Huyện Cẩm Khê", province: 40},
	{id: 238, name: "Huyện Yên Lập", province: 40},
	{id: 239, name: "Huyện Thanh Sơn", province: 40},
	{id: 240, name: "Huyện Phù Ninh", province: 40},
	{id: 241, name: "Huyện Lâm Thao", province: 40},
	{id: 242, name: "Huyện Tam Nông", province: 40},
	{id: 243, name: "Huyện Thanh Thủy", province: 40},
	{id: 734, name: "Huyện Tân Sơn", province: 40},
	{id: 503, name: "Thành phố Tuy Hòa", province: 41},
	{id: 504, name: "Huyện Đồng Xuân", province: 41},
	{id: 505, name: "Thị Xã Sông Cầu", province: 41},
	{id: 506, name: "Huyện Tuy An", province: 41},
	{id: 507, name: "Huyện Sơn Hòa", province: 41},
	{id: 508, name: "Huyện Song Hinh", province: 41},
	{id: 509, name: "Huyện Đông Hòa", province: 41},
	{id: 510, name: "Huyện Phú Hòa", province: 41},
	{id: 511, name: "Huyện Tây Hòa", province: 41},
	{id: 512, name: "Thành phố Đồng Hới", province: 42},
	{id: 513, name: "Huyện Tuyên Hóa", province: 42},
	{id: 514, name: "Huyện Minh Hóa", province: 42},
	{id: 515, name: "Huyện Quảng Trạch", province: 42},
	{id: 516, name: "Huyện Bố Trạch", province: 42},
	{id: 517, name: "Huyện Quảng Ninh", province: 42},
	{id: 518, name: "Huyện Lệ Thủy", province: 42},
	{id: 750, name: "Thị xã Ba Đồn", province: 42},
	{id: 519, name: "Thành phố Tam Kỳ", province: 43},
	{id: 520, name: "Thành phố Hội An", province: 43},
	{id: 521, name: "Huyện Duy Xuyên", province: 43},
	{id: 522, name: "Huyện Điện Bàn", province: 43},
	{id: 523, name: "Huyện Đại Lộc", province: 43},
	{id: 524, name: "Huyện Quế Sơn", province: 43},
	{id: 525, name: "Huyện Hiệp Đức", province: 43},
	{id: 526, name: "Huyện Thăng Bình", province: 43},
	{id: 527, name: "Huyện Núi Thành", province: 43},
	{id: 528, name: "Huyện Tiên Phước", province: 43},
	{id: 529, name: "Huyện Bắc Trà My", province: 43},
	{id: 530, name: "Huyện Đông Giang", province: 43},
	{id: 531, name: "Huyện Nam Giang", province: 43},
	{id: 532, name: "Huyện Phước Sơn", province: 43},
	{id: 533, name: "Huyện Nam Trà My", province: 43},
	{id: 534, name: "Huyện Tây Giang", province: 43},
	{id: 535, name: "Huyện Phú Ninh", province: 43},
	{id: 737, name: "Huyện Nông Sơn", province: 43},
	{id: 536, name: "Thành phố Quảng Ngãi", province: 44},
	{id: 537, name: "Huyện Lý Sơn", province: 44},
	{id: 538, name: "Huyện Bình Sơn", province: 44},
	{id: 539, name: "Huyện Trà Bồng", province: 44},
	{id: 540, name: "Huyện Sơn Tịnh", province: 44},
	{id: 541, name: "Huyện Sơn Hà", province: 44},
	{id: 542, name: "Huyện Tư Nghĩa", province: 44},
	{id: 543, name: "Huyện Nghĩa Hành", province: 44},
	{id: 544, name: "Huyện Minh Long", province: 44},
	{id: 545, name: "Huyện Mộ Đức", province: 44},
	{id: 546, name: "Huyện Đức Phổ", province: 44},
	{id: 547, name: "Huyện Ba Tơ", province: 44},
	{id: 548, name: "Huyện Sơn Tây", province: 44},
	{id: 549, name: "Huyện Tây Trà", province: 44},
	{id: 489, name: "Thành phố Hạ Long", province: 45},
	{id: 490, name: "Thành phố Cẩm Phả", province: 45},
	{id: 491, name: "Thành phố Uông Bí", province: 45},
	{id: 492, name: "Thành phố Móng Cái", province: 45},
	{id: 493, name: "Huyện Bình Liêu", province: 45},
	{id: 494, name: "Huyện Đầm Hà", province: 45},
	{id: 495, name: "Huyện Hải Hà", province: 45},
	{id: 496, name: "Huyện Tiên Yên", province: 45},
	{id: 497, name: "Huyện Ba Chế", province: 45},
	{id: 498, name: "Huyện Đông Triều", province: 45},
	{id: 499, name: "Thị xã Quảng Yên", province: 45},
	{id: 500, name: "Huyện Hoành Bồ", province: 45},
	{id: 501, name: "Huyện Vân Đồn", province: 45},
	{id: 502, name: "Huyện Cô Tô", province: 45},
	{id: 561, name: "Thành phố Đông Hà", province: 46},
	{id: 562, name: "Thị xã Quảng Trị", province: 46},
	{id: 563, name: "Huyện Vĩnh Linh", province: 46},
	{id: 564, name: "Huyện Gio Linh", province: 46},
	{id: 565, name: "Huyện Cam Lộ", province: 46},
	{id: 566, name: "Huyện Triệu Phong", province: 46},
	{id: 567, name: "Huyện Hải Lăng", province: 46},
	{id: 568, name: "Huyện Hướng Hóa", province: 46},
	{id: 569, name: "Huyện Đa Krông", province: 46},
	{id: 570, name: "Huyện Cồn Cỏ", province: 46},
	{id: 571, name: "Thành phố Sóc Trăng", province: 47},
	{id: 572, name: "Huyện Kế Sách", province: 47},
	{id: 573, name: "Huyện Mỹ Tú", province: 47},
	{id: 574, name: "Huyện Mỹ Xuyên", province: 47},
	{id: 575, name: "Huyện Thạnh Trị", province: 47},
	{id: 576, name: "Huyện Long Phú", province: 47},
	{id: 577, name: "Thị xã Vĩnh Châu", province: 47},
	{id: 578, name: "Huyện Cù Lao Dung", province: 47},
	{id: 741, name: "Huyện Châu Thành", province: 47},
	{id: 742, name: "Thị xã Ngã Năm", province: 47},
	{id: 743, name: "Huyện Trần Đề", province: 47},
	{id: 591, name: "Thành phố Tây Ninh", province: 48},
	{id: 592, name: "Huyện Tân Biên", province: 48},
	{id: 593, name: "Huyện Tân Châu", province: 48},
	{id: 594, name: "Huyện Dương Minh Châu", province: 48},
	{id: 595, name: "Huyện Châu Thành", province: 48},
	{id: 596, name: "Huyện Hòa Thành", province: 48},
	{id: 597, name: "Huyện Bến Cầu", province: 48},
	{id: 598, name: "Huyện Gò Dầu", province: 48},
	{id: 599, name: "Huyện Trảng Bàng", province: 48},
	{id: 627, name: "Thành phố Thái Bình", province: 49},
	{id: 628, name: "Huyện Quỳnh Phụ", province: 49},
	{id: 629, name: "Huyện Hưng Hà", province: 49},
	{id: 630, name: "Huyện Đông Hưng", province: 49},
	{id: 631, name: "Huyện Vũ Thư", province: 49},
	{id: 632, name: "Huyện Kiến Xương", province: 49},
	{id: 633, name: "Huyện Tiền Hải", province: 49},
	{id: 634, name: "Huyện Thái Thụy", province: 49},
	{id: 635, name: "Thành phố Thái Nguyên", province: 50},
	{id: 636, name: "Thành phố Sông Công", province: 50},
	{id: 637, name: "Huyện Định Hóa", province: 50},
	{id: 638, name: "Huyện Phú Lương", province: 50},
	{id: 639, name: "Huyện Võ Nhai", province: 50},
	{id: 640, name: "Huyện Đại Từ", province: 50},
	{id: 641, name: "Huyện Đồng Hỷ", province: 50},
	{id: 642, name: "Huyện Phú Bình", province: 50},
	{id: 643, name: "Thị Xã Phổ Yên", province: 50},
	{id: 600, name: "Thành phố Thanh Hóa", province: 51},
	{id: 601, name: "Thị xã Bỉm Sơn", province: 51},
	{id: 602, name: "Thị xã Sầm Sơn", province: 51},
	{id: 603, name: "Huyện Quan Hóa", province: 51},
	{id: 604, name: "Huyện Quan Sơn", province: 51},
	{id: 605, name: "Huyện Mường Lát", province: 51},
	{id: 606, name: "Huyện Bá Thước", province: 51},
	{id: 607, name: "Huyện Thường Xuân", province: 51},
	{id: 608, name: "Huyện Như Xuân", province: 51},
	{id: 609, name: "Huyện Như Thanh", province: 51},
	{id: 610, name: "Huyện Lang Chánh", province: 51},
	{id: 611, name: "Huyện Ngọc Lặc", province: 51},
	{id: 612, name: "Huyện Thạch Thành", province: 51},
	{id: 613, name: "Huyện Cẩm Thủy", province: 51},
	{id: 614, name: "Huyện Thọ Xuân", province: 51},
	{id: 615, name: "Huyện Vĩnh Lộc", province: 51},
	{id: 616, name: "Huyện Thiệu Hóa", province: 51},
	{id: 617, name: "Huyện Triệu Sơn", province: 51},
	{id: 618, name: "Huyện Nông Cống", province: 51},
	{id: 619, name: "Huyện Hà Trung", province: 51},
	{id: 620, name: "Huyện Hoằng Hóa", province: 51},
	{id: 621, name: "Huyện Nga Sơn", province: 51},
	{id: 622, name: "Huyện Hậu Lộc", province: 51},
	{id: 623, name: "Huyện Tĩnh Gia", province: 51},
	{id: 624, name: "Huyện Yên Định", province: 51},
	{id: 625, name: "Huyện Quảng Xương", province: 51},
	{id: 626, name: "Huyện Đông Sơn", province: 51},
	{id: 644, name: "Thành phố Huế", province: 52},
	{id: 645, name: "Huyện Phong Điền", province: 52},
	{id: 646, name: "Huyện Quảng Điền", province: 52},
	{id: 647, name: "Thị xã Hương Trà", province: 52},
	{id: 648, name: "Huyện Phú Vang", province: 52},
	{id: 649, name: "Thị xã Hương Thủy", province: 52},
	{id: 650, name: "Huyện Phú Lộc", province: 52},
	{id: 651, name: "Huyện Nam Đông", province: 52},
	{id: 652, name: "Huyện A Lưới", province: 52},
	{id: 653, name: "Thành phố Mỹ Tho", province: 53},
	{id: 654, name: "Thị xã Gò Công", province: 53},
	{id: 655, name: "Huyện Cái Bè", province: 53},
	{id: 656, name: "Huyện Cai Lậy", province: 53},
	{id: 657, name: "Huyện Châu Thành", province: 53},
	{id: 658, name: "Huyện Chợ Gạo", province: 53},
	{id: 659, name: "Huyện Gò Công Đông", province: 53},
	{id: 660, name: "Huyện Gò Công Tây", province: 53},
	{id: 661, name: "Huyện Tân Phước", province: 53},
	{id: 720, name: "Huyện Tân Phú Đông", province: 53},
	{id: 753, name: "Thị xã Cai Lậy", province: 53},
	{id: 662, name: "Thành phố Trà Vinh", province: 54},
	{id: 663, name: "Huyện Càng Long", province: 54},
	{id: 664, name: "Huyện Cầu Kè", province: 54},
	{id: 665, name: "Huyện Tiểu Cần", province: 54},
	{id: 666, name: "Huyện Châu Thành", province: 54},
	{id: 667, name: "Huyện Trà Cú", province: 54},
	{id: 668, name: "Huyện Cầu Ngang", province: 54},
	{id: 669, name: "Huyện Duyên Hải", province: 54},
	{id: 759, name: "Thị xã Duyên Hải", province: 54},
	{id: 670, name: "Thành phố Tuyên Quang", province: 55},
	{id: 671, name: "Huyện Nà Hang", province: 55},
	{id: 672, name: "Huyện Chiêm Hóa", province: 55},
	{id: 673, name: "Huyện Hàm Yên", province: 55},
	{id: 674, name: "Huyện Yên Sơn", province: 55},
	{id: 675, name: "Huyện Sơn Dương", province: 55},
	{id: 744, name: "Huyện Lâm Bình", province: 55},
	{id: 362, name: "Thành phố Rạch Giá", province: 56},
	{id: 363, name: "Thị xã Hà Tiên", province: 56},
	{id: 364, name: "Huyện Kiên Lương", province: 56},
	{id: 365, name: "Huyện Hòn Đất", province: 56},
	{id: 366, name: "Huyện Tân Hiệp", province: 56},
	{id: 367, name: "Huyện Châu Thành", province: 56},
	{id: 368, name: "Huyện Giồng Riềng", province: 56},
	{id: 369, name: "Huyện Gò Quao", province: 56},
	{id: 370, name: "Huyện An Biên", province: 56},
	{id: 371, name: "Huyện An Minh", province: 56},
	{id: 372, name: "Huyện Vĩnh Thuận", province: 56},
	{id: 373, name: "Huyện Phú Quốc", province: 56},
	{id: 374, name: "Huyện Kiên Hải", province: 56},
	{id: 732, name: "Huyện U Minh Thượng", province: 56},
	{id: 733, name: "Huyện Giang Thành", province: 56},
	{id: 685, name: "Thành phố Vĩnh Yên", province: 57},
	{id: 686, name: "Huyện Tam Dương", province: 57},
	{id: 687, name: "Huyện Lập Thạch", province: 57},
	{id: 688, name: "Huyện Vĩnh Tường", province: 57},
	{id: 689, name: "Huyện Yên Lạc", province: 57},
	{id: 690, name: "Huyện Bình Xuyên", province: 57},
	{id: 692, name: "Thị xã Phúc Yên", province: 57},
	{id: 693, name: "Huyện Tam Đảo", province: 57},
	{id: 735, name: "Huyện Sông Lô", province: 57},
	{id: 77, name: "Thành phố Vũng Tàu", province: 58},
	{id: 78, name: "Thành phố Bà Rịa", province: 58},
	{id: 79, name: "Huyện Xuyên Mộc", province: 58},
	{id: 80, name: "Huyện Long Điền", province: 58},
	{id: 82, name: "Huyện Tân Thành", province: 58},
	{id: 83, name: "Huyện Châu Đức", province: 58},
	{id: 84, name: "Huyện Đất Đỏ", province: 58},
	{id: 754, name: "Huyện Côn Đảo", province: 58},
	{id: 676, name: "Thành phố Yên Bái", province: 59},
	{id: 677, name: "Thị xã Nghĩa Lộ", province: 59},
	{id: 678, name: "Huyện Văn Yên", province: 59},
	{id: 679, name: "Huyện Yên Bình", province: 59},
	{id: 680, name: "Huyện Mù Cang Chải", province: 59},
	{id: 681, name: "Huyện Văn Chấn", province: 59},
	{id: 682, name: "Huyện Trấn Yên", province: 59},
	{id: 683, name: "Huyện Trạm Tấu", province: 59},
	{id: 684, name: "Huyện Lục Yên", province: 59},
	{id: 35, name: "Thành phố Vĩnh Long", province: 60},
	{id: 36, name: "Huyện Long Hồ", province: 60},
	{id: 37, name: "Huyện Mang Thít", province: 60},
	{id: 38, name: "Thị xã Bình Minh", province: 60},
	{id: 39, name: "Huyện Trà Ôn", province: 60},
	{id: 40, name: "Huyện Tam Bình", province: 60},
	{id: 41, name: "Huyện Vũng Liêm", province: 60},
	{id: 739, name: "Huyện Bình Tân", province: 60},
	{id: 85, name: "Thành phố Thủ Dầu Một", province: 61},
	{id: 86, name: "Huyện Bàu Bàng", province: 61},
	{id: 87, name: "Huyện Bắc Tân Uyên", province: 61},
	{id: 88, name: "Thị xã Thuận An", province: 61},
	{id: 89, name: "Thị xã Dĩ An", province: 61},
	{id: 90, name: "Huyện Phú Giáo", province: 61},
	{id: 91, name: "Huyện Dầu Tiếng", province: 61},
	{id: 751, name: "Thị xã Bến Cát", province: 61},
	{id: 752, name: "Thị xã Tân Uyên", province: 61},
	{id: 204, name: "Thị xã Gia Nghĩa", province: 62},
	{id: 205, name: "Huyện Đắk Song", province: 62},
	{id: 206, name: "Huyện Cư Jút", province: 62},
	{id: 207, name: "Huyện Krông Nô", province: 62},
	{id: 208, name: "Huyện Đắk Glong", province: 62},
	{id: 209, name: "Huyện Đắk Mil", province: 62},
	{id: 210, name: "Huyện Đắk R'lấp", province: 62},
	{id: 718, name: "Huyện Tuy Đức", province: 62},
	{id: 211, name: "Thành phố Sa Đéc", province: 63},
	{id: 212, name: "Thành phố Cao Lãnh", province: 63},
	{id: 213, name: "Huyện Tân Hồng", province: 63},
	{id: 214, name: "Huyện Hồng Ngự", province: 63},
	{id: 215, name: "Huyện Tam Nông", province: 63},
	{id: 216, name: "Huyện Thanh Bình", province: 63},
	{id: 217, name: "Huyện Cao Lãnh", province: 63},
	{id: 218, name: "Huyện Lấp Vò", province: 63},
	{id: 219, name: "Huyện Tháp Mười", province: 63},
	{id: 230, name: "Huyện Lai Vung", province: 63},
	{id: 231, name: "Huyện Châu Thành", province: 63},
	{id: 740, name: "Thị xã Hồng Ngự", province: 63},
	{id: 344, name: "Thành phố Hưng Yên", province: 64},
	{id: 345, name: "Huyện Kim Động", province: 64},
	{id: 346, name: "Huyện Ân Thi", province: 64},
	{id: 347, name: "Huyện Khoái Châu", province: 64},
	{id: 348, name: "Huyện Yên Mỹ", province: 64},
	{id: 349, name: "Huyện Tiên Lữ", province: 64},
	{id: 350, name: "Huyện Phù Cừ", province: 64},
	{id: 351, name: "Huyện Mỹ Hào", province: 64},
	{id: 352, name: "Huyện Văn Lâm", province: 64},
	{id: 353, name: "Huyện Văn Giang", province: 64},
	{id: 375, name: "Thành phố Kon Tum", province: 65},
	{id: 376, name: "Huyện Đắk Glei", province: 65},
	{id: 377, name: "Huyện Ngọc Hồi", province: 65},
	{id: 378, name: "Huyện Đắk Tô", province: 65},
	{id: 379, name: "Huyện Sa Thầy", province: 65},
	{id: 380, name: "Huyện Kon Plông", province: 65},
	{id: 381, name: "Huyện Đắk Hà", province: 65},
	{id: 382, name: "Huyện Kon Rẫy", province: 65},
	{id: 383, name: "Huyện Tu Mơ Rông", province: 65},
	{id: 436, name: "Thành phố Ninh Bình", province: 66},
	{id: 437, name: "Thị xã Tam Điệp", province: 66},
	{id: 438, name: "Huyện Nho Quan", province: 66},
	{id: 439, name: "Huyện Gia Viễn", province: 66},
	{id: 450, name: "Huyện Hoa Lư", province: 66},
	{id: 451, name: "Huyện Yên Mô", province: 66},
	{id: 452, name: "Huyện Kim Sơn", province: 66},
	{id: 453, name: "Huyện Yên Khánh", province: 66},
	{id: 580, name: "Thành phố Sơn La", province: 67},
	{id: 581, name: "Huyện Quỳnh Nhai", province: 67},
	{id: 582, name: "Huyện Mường La", province: 67},
	{id: 583, name: "Huyện Thuận Châu", province: 67},
	{id: 584, name: "Huyện Bắc Yên", province: 67},
	{id: 585, name: "Huyện Phù Yên", province: 67},
	{id: 586, name: "Huyện Mai Sơn", province: 67},
	{id: 587, name: "Huyện Yên Châu", province: 67},
	{id: 588, name: "Huyện Sông Mã", province: 67},
	{id: 589, name: "Huyện Mộc Châu", province: 67},
	{id: 590, name: "Huyện Sốp Cộp", province: 67},
	{id: 746, name: "Huyện Vân Hồ", province: 67}
];

const LIST_WARD = [
	{
		id: 26734, name: "Phường Tân Định", province: 1, district: 1
	},
	{
		id: 26737, name: "Phường Đa Kao", province: 1, district: 1
	},
	{
		id: 26740, name: "Phường Bến Nghé", province: 1, district: 1
	},
	{
		id: 26743, name: "Phường Bến Thành", province: 1, district: 1
	},
	{
		id: 26746, name: "Phường Nguyễn Thái Bình", province: 1, district: 1
	},
	{
		id: 26749, name: "Phường Phạm Ngũ Lão", province: 1, district: 1
	},
	{
		id: 26752, name: "Phường Cầu Ông Lãnh", province: 1, district: 1
	},
	{
		id: 26755, name: "Phường Cô Giang", province: 1, district: 1
	},
	{
		id: 26758, name: "Phường Nguyễn Cư Trinh", province: 1, district: 1
	},
	{
		id: 26761, name: "Phường Cầu Kho", province: 1, district: 1
	},
	{
		id: 27088, name: "Phường Thảo Điền", province: 1, district: 2
	},
	{
		id: 27091, name: "Phường An Phú", province: 1, district: 2
	},
	{
		id: 27094, name: "Phường Bình An", province: 1, district: 2
	},
	{
		id: 27097, name: "Phường Bình Trưng Đông", province: 1, district: 2
	},
	{
		id: 27100, name: "Phường Bình Trưng Tây", province: 1, district: 2
	},
	{
		id: 27103, name: "Phường Bình Khánh", province: 1, district: 2
	},
	{
		id: 27106, name: "Phường An Khánh", province: 1, district: 2
	},
	{
		id: 27109, name: "Phường Cát Lái", province: 1, district: 2
	},
	{
		id: 27112, name: "Phường Thạnh Mỹ Lợi", province: 1, district: 2
	},
	{
		id: 27115, name: "Phường An Lợi Đông", province: 1, district: 2
	},
	{
		id: 27118, name: "Phường Thủ Thiêm", province: 1, district: 2
	},
	{
		id: 27121, name: "Phường 08", province: 1, district: 3
	},
	{
		id: 27124, name: "Phường 07", province: 1, district: 3
	},
	{
		id: 27127, name: "Phường 14", province: 1, district: 3
	},
	{
		id: 27130, name: "Phường 12", province: 1, district: 3
	},
	{
		id: 27133, name: "Phường 11", province: 1, district: 3
	},
	{
		id: 27136, name: "Phường 13", province: 1, district: 3
	},
	{
		id: 27139, name: "Phường 06", province: 1, district: 3
	},
	{
		id: 27142, name: "Phường 09", province: 1, district: 3
	},
	{
		id: 27145, name: "Phường 10", province: 1, district: 3
	},
	{
		id: 27148, name: "Phường 04", province: 1, district: 3
	},
	{
		id: 27151, name: "Phường 05", province: 1, district: 3
	},
	{
		id: 27154, name: "Phường 03", province: 1, district: 3
	},
	{
		id: 27157, name: "Phường 02", province: 1, district: 3
	},
	{
		id: 27160, name: "Phường 01", province: 1, district: 3
	},
	{
		id: 27256, name: "Phường 12", province: 1, district: 4
	},
	{
		id: 27259, name: "Phường 13", province: 1, district: 4
	},
	{
		id: 27262, name: "Phường 09", province: 1, district: 4
	},
	{
		id: 27265, name: "Phường 06", province: 1, district: 4
	},
	{
		id: 27268, name: "Phường 08", province: 1, district: 4
	},
	{
		id: 27271, name: "Phường 10", province: 1, district: 4
	},
	{
		id: 27274, name: "Phường 05", province: 1, district: 4
	},
	{
		id: 27277, name: "Phường 18", province: 1, district: 4
	},
	{
		id: 27280, name: "Phường 14", province: 1, district: 4
	},
	{
		id: 27283, name: "Phường 04", province: 1, district: 4
	},
	{
		id: 27286, name: "Phường 03", province: 1, district: 4
	},
	{
		id: 27289, name: "Phường 16", province: 1, district: 4
	},
	{
		id: 27292, name: "Phường 02", province: 1, district: 4
	},
	{
		id: 27295, name: "Phường 15", province: 1, district: 4
	},
	{
		id: 27298, name: "Phường 01", province: 1, district: 4
	},
	{
		id: 27301, name: "Phường 04", province: 1, district: 5
	},
	{
		id: 27304, name: "Phường 09", province: 1, district: 5
	},
	{
		id: 27307, name: "Phường 03", province: 1, district: 5
	},
	{
		id: 27310, name: "Phường 12", province: 1, district: 5
	},
	{
		id: 27313, name: "Phường 02", province: 1, district: 5
	},
	{
		id: 27316, name: "Phường 08", province: 1, district: 5
	},
	{
		id: 27319, name: "Phường 15", province: 1, district: 5
	},
	{
		id: 27322, name: "Phường 07", province: 1, district: 5
	},
	{
		id: 27325, name: "Phường 01", province: 1, district: 5
	},
	{
		id: 27328, name: "Phường 11", province: 1, district: 5
	},
	{
		id: 27331, name: "Phường 14", province: 1, district: 5
	},
	{
		id: 27334, name: "Phường 05", province: 1, district: 5
	},
	{
		id: 27337, name: "Phường 06", province: 1, district: 5
	},
	{
		id: 27340, name: "Phường 10", province: 1, district: 5
	},
	{
		id: 27343, name: "Phường 13", province: 1, district: 5
	},
	{
		id: 27346, name: "Phường 14", province: 1, district: 6
	},
	{
		id: 27349, name: "Phường 13", province: 1, district: 6
	},
	{
		id: 27352, name: "Phường 09", province: 1, district: 6
	},
	{
		id: 27355, name: "Phường 06", province: 1, district: 6
	},
	{
		id: 27358, name: "Phường 12", province: 1, district: 6
	},
	{
		id: 27361, name: "Phường 05", province: 1, district: 6
	},
	{
		id: 27364, name: "Phường 11", province: 1, district: 6
	},
	{
		id: 27367, name: "Phường 02", province: 1, district: 6
	},
	{
		id: 27370, name: "Phường 01", province: 1, district: 6
	},
	{
		id: 27373, name: "Phường 04", province: 1, district: 6
	},
	{
		id: 27376, name: "Phường 08", province: 1, district: 6
	},
	{
		id: 27379, name: "Phường 03", province: 1, district: 6
	},
	{
		id: 27382, name: "Phường 07", province: 1, district: 6
	},
	{
		id: 27385, name: "Phường 10", province: 1, district: 6
	},
	{
		id: 27466, name: "Phường Tân Thuận Đông", province: 1, district: 7
	},
	{
		id: 27469, name: "Phường Tân Thuận Tây", province: 1, district: 7
	},
	{
		id: 27472, name: "Phường Tân Kiểng", province: 1, district: 7
	},
	{
		id: 27475, name: "Phường Tân Hưng", province: 1, district: 7
	},
	{
		id: 27478, name: "Phường Bình Thuận", province: 1, district: 7
	},
	{
		id: 27481, name: "Phường Tân Quy", province: 1, district: 7
	},
	{
		id: 27484, name: "Phường Phú Thuận", province: 1, district: 7
	},
	{
		id: 27487, name: "Phường Tân Phú", province: 1, district: 7
	},
	{
		id: 27490, name: "Phường Tân Phong", province: 1, district: 7
	},
	{
		id: 27493, name: "Phường Phú Mỹ", province: 1, district: 7
	},
	{
		id: 27388, name: "Phường 08", province: 1, district: 8
	},
	{
		id: 27391, name: "Phường 02", province: 1, district: 8
	},
	{
		id: 27394, name: "Phường 01", province: 1, district: 8
	},
	{
		id: 27397, name: "Phường 03", province: 1, district: 8
	},
	{
		id: 27400, name: "Phường 11", province: 1, district: 8
	},
	{
		id: 27403, name: "Phường 09", province: 1, district: 8
	},
	{
		id: 27406, name: "Phường 10", province: 1, district: 8
	},
	{
		id: 27409, name: "Phường 04", province: 1, district: 8
	},
	{
		id: 27412, name: "Phường 13", province: 1, district: 8
	},
	{
		id: 27415, name: "Phường 12", province: 1, district: 8
	},
	{
		id: 27418, name: "Phường 05", province: 1, district: 8
	},
	{
		id: 27421, name: "Phường 14", province: 1, district: 8
	},
	{
		id: 27424, name: "Phường 06", province: 1, district: 8
	},
	{
		id: 27427, name: "Phường 15", province: 1, district: 8
	},
	{
		id: 27430, name: "Phường 16", province: 1, district: 8
	},
	{
		id: 27433, name: "Phường 07", province: 1, district: 8
	},
	{
		id: 26830, name: "Phường Long Bình", province: 1, district: 9
	},
	{
		id: 26833, name: "Phường Long Thạnh Mỹ", province: 1, district: 9
	},
	{
		id: 26836, name: "Phường Tân Phú", province: 1, district: 9
	},
	{
		id: 26839, name: "Phường Hiệp Phú", province: 1, district: 9
	},
	{
		id: 26842, name: "Phường Tăng Nhơn Phú A", province: 1, district: 9
	},
	{
		id: 26845, name: "Phường Tăng Nhơn Phú B", province: 1, district: 9
	},
	{
		id: 26848, name: "Phường Phước Long B", province: 1, district: 9
	},
	{
		id: 26851, name: "Phường Phước Long A", province: 1, district: 9
	},
	{
		id: 26854, name: "Phường Trường Thạnh", province: 1, district: 9
	},
	{
		id: 26857, name: "Phường Long Phước", province: 1, district: 9
	},
	{
		id: 26860, name: "Phường Long Trường", province: 1, district: 9
	},
	{
		id: 26863, name: "Phường Phước Bình", province: 1, district: 9
	},
	{
		id: 26866, name: "Phường Phú Hữu", province: 1, district: 9
	},
	{
		id: 27163, name: "Phường 15", province: 1, district: 10
	},
	{
		id: 27166, name: "Phường 13", province: 1, district: 10
	},
	{
		id: 27169, name: "Phường 14", province: 1, district: 10
	},
	{
		id: 27172, name: "Phường 12", province: 1, district: 10
	},
	{
		id: 27175, name: "Phường 11", province: 1, district: 10
	},
	{
		id: 27178, name: "Phường 10", province: 1, district: 10
	},
	{
		id: 27181, name: "Phường 09", province: 1, district: 10
	},
	{
		id: 27184, name: "Phường 01", province: 1, district: 10
	},
	{
		id: 27187, name: "Phường 08", province: 1, district: 10
	},
	{
		id: 27190, name: "Phường 02", province: 1, district: 10
	},
	{
		id: 27193, name: "Phường 04", province: 1, district: 10
	},
	{
		id: 27196, name: "Phường 07", province: 1, district: 10
	},
	{
		id: 27199, name: "Phường 05", province: 1, district: 10
	},
	{
		id: 27202, name: "Phường 06", province: 1, district: 10
	},
	{
		id: 27205, name: "Phường 03", province: 1, district: 10
	},
	{
		id: 27208, name: "Phường 15", province: 1, district: 11
	},
	{
		id: 27211, name: "Phường 05", province: 1, district: 11
	},
	{
		id: 27214, name: "Phường 14", province: 1, district: 11
	},
	{
		id: 27217, name: "Phường 11", province: 1, district: 11
	},
	{
		id: 27220, name: "Phường 03", province: 1, district: 11
	},
	{
		id: 27223, name: "Phường 10", province: 1, district: 11
	},
	{
		id: 27226, name: "Phường 13", province: 1, district: 11
	},
	{
		id: 27229, name: "Phường 08", province: 1, district: 11
	},
	{
		id: 27232, name: "Phường 09", province: 1, district: 11
	},
	{
		id: 27235, name: "Phường 12", province: 1, district: 11
	},
	{
		id: 27238, name: "Phường 07", province: 1, district: 11
	},
	{
		id: 27241, name: "Phường 06", province: 1, district: 11
	},
	{
		id: 27244, name: "Phường 04", province: 1, district: 11
	},
	{
		id: 27247, name: "Phường 01", province: 1, district: 11
	},
	{
		id: 27250, name: "Phường 02", province: 1, district: 11
	},
	{
		id: 27253, name: "Phường 16", province: 1, district: 11
	},
	{
		id: 26764, name: "Phường Thạnh Xuân", province: 1, district: 12
	},
	{
		id: 26767, name: "Phường Thạnh Lộc", province: 1, district: 12
	},
	{
		id: 26770, name: "Phường Hiệp Thành", province: 1, district: 12
	},
	{
		id: 26773, name: "Phường Thới An", province: 1, district: 12
	},
	{
		id: 26776, name: "Phường Tân Chánh Hiệp", province: 1, district: 12
	},
	{
		id: 26779, name: "Phường An Phú Đông", province: 1, district: 12
	},
	{
		id: 26782, name: "Phường Tân Thới Hiệp", province: 1, district: 12
	},
	{
		id: 26785, name: "Phường Trung Mỹ Tây", province: 1, district: 12
	},
	{
		id: 26787, name: "Phường Tân Hưng Thuận", province: 1, district: 12
	},
	{
		id: 26788, name: "Phường Đông Hưng Thuận", province: 1, district: 12
	},
	{
		id: 26791, name: "Phường Tân Thới Nhất", province: 1, district: 12
	},
	{
		id: 27043, name: "Phường 04", province: 1, district: 13
	},
	{
		id: 27046, name: "Phường 05", province: 1, district: 13
	},
	{
		id: 27049, name: "Phường 09", province: 1, district: 13
	},
	{
		id: 27052, name: "Phường 07", province: 1, district: 13
	},
	{
		id: 27055, name: "Phường 03", province: 1, district: 13
	},
	{
		id: 27058, name: "Phường 01", province: 1, district: 13
	},
	{
		id: 27061, name: "Phường 02", province: 1, district: 13
	},
	{
		id: 27064, name: "Phường 08", province: 1, district: 13
	},
	{
		id: 27067, name: "Phường 15", province: 1, district: 13
	},
	{
		id: 27070, name: "Phường 10", province: 1, district: 13
	},
	{
		id: 27073, name: "Phường 11", province: 1, district: 13
	},
	{
		id: 27076, name: "Phường 17", province: 1, district: 13
	},
	{
		id: 27079, name: "Phường 14", province: 1, district: 13
	},
	{
		id: 27082, name: "Phường 12", province: 1, district: 13
	},
	{
		id: 27085, name: "Phường 13", province: 1, district: 13
	},
	{
		id: 26905, name: "Phường 13", province: 1, district: 14
	},
	{
		id: 26908, name: "Phường 11", province: 1, district: 14
	},
	{
		id: 26911, name: "Phường 27", province: 1, district: 14
	},
	{
		id: 26914, name: "Phường 26", province: 1, district: 14
	},
	{
		id: 26917, name: "Phường 12", province: 1, district: 14
	},
	{
		id: 26920, name: "Phường 25", province: 1, district: 14
	},
	{
		id: 26923, name: "Phường 05", province: 1, district: 14
	},
	{
		id: 26926, name: "Phường 07", province: 1, district: 14
	},
	{
		id: 26929, name: "Phường 24", province: 1, district: 14
	},
	{
		id: 26932, name: "Phường 06", province: 1, district: 14
	},
	{
		id: 26935, name: "Phường 14", province: 1, district: 14
	},
	{
		id: 26938, name: "Phường 15", province: 1, district: 14
	},
	{
		id: 26941, name: "Phường 02", province: 1, district: 14
	},
	{
		id: 26944, name: "Phường 01", province: 1, district: 14
	},
	{
		id: 26947, name: "Phường 03", province: 1, district: 14
	},
	{
		id: 26950, name: "Phường 17", province: 1, district: 14
	},
	{
		id: 26953, name: "Phường 21", province: 1, district: 14
	},
	{
		id: 26956, name: "Phường 22", province: 1, district: 14
	},
	{
		id: 26959, name: "Phường 19", province: 1, district: 14
	},
	{
		id: 26962, name: "Phường 28", province: 1, district: 14
	},
	{
		id: 26965, name: "Phường 02", province: 1, district: 15
	},
	{
		id: 26968, name: "Phường 04", province: 1, district: 15
	},
	{
		id: 26971, name: "Phường 12", province: 1, district: 15
	},
	{
		id: 26974, name: "Phường 13", province: 1, district: 15
	},
	{
		id: 26977, name: "Phường 01", province: 1, district: 15
	},
	{
		id: 26980, name: "Phường 03", province: 1, district: 15
	},
	{
		id: 26983, name: "Phường 11", province: 1, district: 15
	},
	{
		id: 26986, name: "Phường 07", province: 1, district: 15
	},
	{
		id: 26989, name: "Phường 05", province: 1, district: 15
	},
	{
		id: 26992, name: "Phường 10", province: 1, district: 15
	},
	{
		id: 26995, name: "Phường 06", province: 1, district: 15
	},
	{
		id: 26998, name: "Phường 08", province: 1, district: 15
	},
	{
		id: 27001, name: "Phường 09", province: 1, district: 15
	},
	{
		id: 27004, name: "Phường 14", province: 1, district: 15
	},
	{
		id: 27007, name: "Phường 15", province: 1, district: 15
	},
	{
		id: 27010, name: "Phường Tân Sơn Nhì", province: 1, district: 16
	},
	{
		id: 27013, name: "Phường Tây Thạnh", province: 1, district: 16
	},
	{
		id: 27016, name: "Phường Sơn Kỳ", province: 1, district: 16
	},
	{
		id: 27019, name: "Phường Tân Quý", province: 1, district: 16
	},
	{
		id: 27022, name: "Phường Tân Thành", province: 1, district: 16
	},
	{
		id: 27025, name: "Phường Phú Thọ Hoà", province: 1, district: 16
	},
	{
		id: 27028, name: "Phường Phú Thạnh", province: 1, district: 16
	},
	{
		id: 27031, name: "Phường Phú Trung", province: 1, district: 16
	},
	{
		id: 27034, name: "Phường Hoà Thạnh", province: 1, district: 16
	},
	{
		id: 27037, name: "Phường Hiệp Tân", province: 1, district: 16
	},
	{
		id: 27040, name: "Phường Tân Thới Hoà", province: 1, district: 16
	},
	{
		id: 26869, name: "Phường 15", province: 1, district: 17
	},
	{
		id: 26872, name: "Phường 13", province: 1, district: 17
	},
	{
		id: 26875, name: "Phường 17", province: 1, district: 17
	},
	{
		id: 26876, name: "Phường 06", province: 1, district: 17
	},
	{
		id: 26878, name: "Phường 16", province: 1, district: 17
	},
	{
		id: 26881, name: "Phường 12", province: 1, district: 17
	},
	{
		id: 26882, name: "Phường 14", province: 1, district: 17
	},
	{
		id: 26884, name: "Phường 10", province: 1, district: 17
	},
	{
		id: 26887, name: "Phường 05", province: 1, district: 17
	},
	{
		id: 26890, name: "Phường 07", province: 1, district: 17
	},
	{
		id: 26893, name: "Phường 04", province: 1, district: 17
	},
	{
		id: 26896, name: "Phường 01", province: 1, district: 17
	},
	{
		id: 26897, name: "Phường 09", province: 1, district: 17
	},
	{
		id: 26898, name: "Phường 08", province: 1, district: 17
	},
	{
		id: 26899, name: "Phường 11", province: 1, district: 17
	},
	{
		id: 26902, name: "Phường 03", province: 1, district: 17
	},
	{
		id: 26794, name: "Phường Linh Xuân", province: 1, district: 18
	},
	{
		id: 26797, name: "Phường Bình Chiểu", province: 1, district: 18
	},
	{
		id: 26800, name: "Phường Linh Trung", province: 1, district: 18
	},
	{
		id: 26803, name: "Phường Tam Bình", province: 1, district: 18
	},
	{
		id: 26806, name: "Phường Tam Phú", province: 1, district: 18
	},
	{
		id: 26809, name: "Phường Hiệp Bình Phước", province: 1, district: 18
	},
	{
		id: 26812, name: "Phường Hiệp Bình Chánh", province: 1, district: 18
	},
	{
		id: 26815, name: "Phường Linh Chiểu", province: 1, district: 18
	},
	{
		id: 26818, name: "Phường Linh Tây", province: 1, district: 18
	},
	{
		id: 26821, name: "Phường Linh Đông", province: 1, district: 18
	},
	{
		id: 26824, name: "Phường Bình Thọ", province: 1, district: 18
	},
	{
		id: 26827, name: "Phường Trường Thọ", province: 1, district: 18
	},
	{
		id: 27436, name: "Phường Bình Hưng Hòa", province: 1, district: 19
	},
	{
		id: 27439, name: "Phường Binh Hưng Hoà A", province: 1, district: 19
	},
	{
		id: 27442, name: "Phường Binh Hưng Hoà B", province: 1, district: 19
	},
	{
		id: 27445, name: "Phường Bình Trị Đông", province: 1, district: 19
	},
	{
		id: 27448, name: "Phường Bình Trị Đông A", province: 1, district: 19
	},
	{
		id: 27451, name: "Phường Bình Trị Đông B", province: 1, district: 19
	},
	{
		id: 27454, name: "Phường Tân Tạo", province: 1, district: 19
	},
	{
		id: 27457, name: "Phường Tân Tạo A", province: 1, district: 19
	},
	{
		id: 27460, name: "Phường An Lạc", province: 1, district: 19
	},
	{
		id: 27463, name: "Phường An Lạc A", province: 1, district: 19
	},
	{
		id: 27595, name: "Thị trấn Tân Túc", province: 1, district: 20
	},
	{
		id: 27598, name: "Xã Phạm Văn Hai", province: 1, district: 20
	},
	{
		id: 27601, name: "Xã Vĩnh Lộc A", province: 1, district: 20
	},
	{
		id: 27604, name: "Xã Vĩnh Lộc B", province: 1, district: 20
	},
	{
		id: 27607, name: "Xã Bình Lợi", province: 1, district: 20
	},
	{
		id: 27610, name: "Xã Lê Minh Xuân", province: 1, district: 20
	},
	{
		id: 27613, name: "Xã Tân Nhựt", province: 1, district: 20
	},
	{
		id: 27616, name: "Xã Tân Kiên", province: 1, district: 20
	},
	{
		id: 27619, name: "Xã Bình Hưng", province: 1, district: 20
	},
	{
		id: 27622, name: "Xã Phong Phú", province: 1, district: 20
	},
	{
		id: 27625, name: "Xã An Phú Tây", province: 1, district: 20
	},
	{
		id: 27628, name: "Xã Hưng Long", province: 1, district: 20
	},
	{
		id: 27631, name: "Xã Đa Phước", province: 1, district: 20
	},
	{
		id: 27634, name: "Xã Tân Quý Tây", province: 1, district: 20
	},
	{
		id: 27637, name: "Xã Bình Chánh", province: 1, district: 20
	},
	{
		id: 27640, name: "Xã Quy Đức", province: 1, district: 20
	},
	{
		id: 27559, name: "Thị trấn Hóc Môn", province: 1, district: 703
	},
	{
		id: 27562, name: "Xã Tân Hiệp", province: 1, district: 703
	},
	{
		id: 27565, name: "Xã Nhị Bình", province: 1, district: 703
	},
	{
		id: 27568, name: "Xã Đông Thạnh", province: 1, district: 703
	},
	{
		id: 27571, name: "Xã Tân Thới Nhì", province: 1, district: 703
	},
	{
		id: 27574, name: "Xã Thới Tam Thôn", province: 1, district: 703
	},
	{
		id: 27577, name: "Xã Xuân Thới Sơn", province: 1, district: 703
	},
	{
		id: 27580, name: "Xã Tân Xuân", province: 1, district: 703
	},
	{
		id: 27583, name: "Xã Xuân Thới Đông", province: 1, district: 703
	},
	{
		id: 27586, name: "Xã Trung Chánh", province: 1, district: 703
	},
	{
		id: 27589, name: "Xã Xuân Thới Thượng", province: 1, district: 703
	},
	{
		id: 27592, name: "Xã Bà Điểm", province: 1, district: 703
	},
	{
		id: 27664, name: "Thị trấn Cần Thạnh", province: 1, district: 704
	},
	{
		id: 27667, name: "Xã Bình Khánh", province: 1, district: 704
	},
	{
		id: 27670, name: "Xã Tam Thôn Hiệp", province: 1, district: 704
	},
	{
		id: 27673, name: "Xã An Thới Đông", province: 1, district: 704
	},
	{
		id: 27676, name: "Xã Thạnh An", province: 1, district: 704
	},
	{
		id: 27679, name: "Xã Long Hòa", province: 1, district: 704
	},
	{
		id: 27682, name: "Xã Lý Nhơn", province: 1, district: 704
	},
	{
		id: 27496, name: "Thị trấn Củ Chi", province: 1, district: 705
	},
	{
		id: 27499, name: "Xã Phú Mỹ Hưng", province: 1, district: 705
	},
	{
		id: 27502, name: "Xã An Phú", province: 1, district: 705
	},
	{
		id: 27505, name: "Xã Trung Lập Thượng", province: 1, district: 705
	},
	{
		id: 27508, name: "Xã An Nhơn Tây", province: 1, district: 705
	},
	{
		id: 27511, name: "Xã Nhuận Đức", province: 1, district: 705
	},
	{
		id: 27514, name: "Xã Phạm Văn Cội", province: 1, district: 705
	},
	{
		id: 27517, name: "Xã Phú Hòa Đông", province: 1, district: 705
	},
	{
		id: 27520, name: "Xã Trung Lập Hạ", province: 1, district: 705
	},
	{
		id: 27523, name: "Xã Trung An", province: 1, district: 705
	},
	{
		id: 27526, name: "Xã Phước Thạnh", province: 1, district: 705
	},
	{
		id: 27529, name: "Xã Phước Hiệp", province: 1, district: 705
	},
	{
		id: 27532, name: "Xã Tân An Hội", province: 1, district: 705
	},
	{
		id: 27535, name: "Xã Phước Vĩnh An", province: 1, district: 705
	},
	{
		id: 27538, name: "Xã Thái Mỹ", province: 1, district: 705
	},
	{
		id: 27541, name: "Xã Tân Thạnh Tây", province: 1, district: 705
	},
	{
		id: 27544, name: "Xã Hòa Phú", province: 1, district: 705
	},
	{
		id: 27547, name: "Xã Tân Thạnh Đông", province: 1, district: 705
	},
	{
		id: 27550, name: "Xã Bình Mỹ", province: 1, district: 705
	},
	{
		id: 27553, name: "Xã Tân Phú Trung", province: 1, district: 705
	},
	{
		id: 27556, name: "Xã Tân Thông Hội", province: 1, district: 705
	},
	{
		id: 27643, name: "Thị trấn Nhà Bè", province: 1, district: 713
	},
	{
		id: 27646, name: "Xã Phước Kiển", province: 1, district: 713
	},
	{
		id: 27649, name: "Xã Phước Lộc", province: 1, district: 713
	},
	{
		id: 27652, name: "Xã Nhơn Đức", province: 1, district: 713
	},
	{
		id: 27655, name: "Xã Phú Xuân", province: 1, district: 713
	},
	{
		id: 27658, name: "Xã Long Thới", province: 1, district: 713
	},
	{
		id: 27661, name: "Xã Hiệp Phước", province: 1, district: 713
	},
	{
		id: 1, name: "Phường Phúc Xá", province: 2, district: 21
	},
	{
		id: 4, name: "Phường Trúc Bạch", province: 2, district: 21
	},
	{
		id: 6, name: "Phường Vĩnh Phúc", province: 2, district: 21
	},
	{
		id: 7, name: "Phường Cống Vị", province: 2, district: 21
	},
	{
		id: 8, name: "Phường Liễu Giai", province: 2, district: 21
	},
	{
		id: 10, name: "Phường Nguyễn Trung Trực", province: 2, district: 21
	},
	{
		id: 13, name: "Phường Quán Thánh", province: 2, district: 21
	},
	{
		id: 16, name: "Phường Ngọc Hà", province: 2, district: 21
	},
	{
		id: 19, name: "Phường Điện Biên", province: 2, district: 21
	},
	{
		id: 22, name: "Phường Đội Cấn", province: 2, district: 21
	},
	{
		id: 25, name: "Phường Ngọc Khánh", province: 2, district: 21
	},
	{
		id: 28, name: "Phường Kim Mã", province: 2, district: 21
	},
	{
		id: 31, name: "Phường Giảng Võ", province: 2, district: 21
	},
	{
		id: 34, name: "Phường Thành Công", province: 2, district: 21
	},
	{
		id: 37, name: "Phường Phúc Tân", province: 2, district: 22
	},
	{
		id: 40, name: "Phường Đồng Xuân", province: 2, district: 22
	},
	{
		id: 43, name: "Phường Hàng Mã", province: 2, district: 22
	},
	{
		id: 46, name: "Phường Hàng Buồm", province: 2, district: 22
	},
	{
		id: 49, name: "Phường Hàng Đào", province: 2, district: 22
	},
	{
		id: 52, name: "Phường Hàng Bồ", province: 2, district: 22
	},
	{
		id: 55, name: "Phường Cửa Đông", province: 2, district: 22
	},
	{
		id: 58, name: "Phường Lý Thái Tổ", province: 2, district: 22
	},
	{
		id: 61, name: "Phường Hàng Bạc", province: 2, district: 22
	},
	{
		id: 64, name: "Phường Hàng Gai", province: 2, district: 22
	},
	{
		id: 67, name: "Phường Chương Dương Độ", province: 2, district: 22
	},
	{
		id: 70, name: "Phường Hàng Trống", province: 2, district: 22
	},
	{
		id: 73, name: "Phường Cửa Nam", province: 2, district: 22
	},
	{
		id: 76, name: "Phường Hàng Bông", province: 2, district: 22
	},
	{
		id: 79, name: "Phường Tràng Tiền", province: 2, district: 22
	},
	{
		id: 82, name: "Phường Trần Hưng Đạo", province: 2, district: 22
	},
	{
		id: 85, name: "Phường Phan Chu Trinh", province: 2, district: 22
	},
	{
		id: 88, name: "Phường Hàng Bài", province: 2, district: 22
	},
	{
		id: 241, name: "Phường Nguyễn Du", province: 2, district: 23
	},
	{
		id: 244, name: "Phường Bạch Đằng", province: 2, district: 23
	},
	{
		id: 247, name: "Phường Phạm Đình Hổ", province: 2, district: 23
	},
	{
		id: 250, name: "Phường Bùi Thị Xuân", province: 2, district: 23
	},
	{
		id: 253, name: "Phường Ngô Thì Nhậm", province: 2, district: 23
	},
	{
		id: 256, name: "Phường Lê Đại Hành", province: 2, district: 23
	},
	{
		id: 259, name: "Phường Đồng Nhân", province: 2, district: 23
	},
	{
		id: 262, name: "Phường Phố Huế", province: 2, district: 23
	},
	{
		id: 265, name: "Phường Đống Mác", province: 2, district: 23
	},
	{
		id: 268, name: "Phường Thanh Lương", province: 2, district: 23
	},
	{
		id: 271, name: "Phường Thanh Nhàn", province: 2, district: 23
	},
	{
		id: 274, name: "Phường Cầu Dền", province: 2, district: 23
	},
	{
		id: 277, name: "Phường Bách Khoa", province: 2, district: 23
	},
	{
		id: 280, name: "Phường Đồng Tâm", province: 2, district: 23
	},
	{
		id: 283, name: "Phường Vĩnh Tuy", province: 2, district: 23
	},
	{
		id: 286, name: "Phường Bạch Mai", province: 2, district: 23
	},
	{
		id: 289, name: "Phường Quỳnh Mai", province: 2, district: 23
	},
	{
		id: 292, name: "Phường Quỳnh Lôi", province: 2, district: 23
	},
	{
		id: 295, name: "Phường Minh Khai", province: 2, district: 23
	},
	{
		id: 298, name: "Phường Trương Định", province: 2, district: 23
	},
	{
		id: 178, name: "Phường Cát Linh", province: 2, district: 24
	},
	{
		id: 181, name: "Phường Văn Miếu", province: 2, district: 24
	},
	{
		id: 184, name: "Phường Quốc Tử Giám", province: 2, district: 24
	},
	{
		id: 187, name: "Phường Láng Thượng", province: 2, district: 24
	},
	{
		id: 190, name: "Phường Ô Chợ Dừa", province: 2, district: 24
	},
	{
		id: 193, name: "Phường Văn Chương", province: 2, district: 24
	},
	{
		id: 196, name: "Phường Hàng Bột", province: 2, district: 24
	},
	{
		id: 199, name: "Phường Láng Hạ", province: 2, district: 24
	},
	{
		id: 202, name: "Phường Khâm Thiên", province: 2, district: 24
	},
	{
		id: 205, name: "Phường Thổ Quan", province: 2, district: 24
	},
	{
		id: 208, name: "Phường Nam Đồng", province: 2, district: 24
	},
	{
		id: 211, name: "Phường Trung Phụng", province: 2, district: 24
	},
	{
		id: 214, name: "Phường Quang Trung", province: 2, district: 24
	},
	{
		id: 217, name: "Phường Trung Liệt", province: 2, district: 24
	},
	{
		id: 220, name: "Phường Phương Liên", province: 2, district: 24
	},
	{
		id: 223, name: "Phường Thịnh Quang", province: 2, district: 24
	},
	{
		id: 226, name: "Phường Trung Tự", province: 2, district: 24
	},
	{
		id: 229, name: "Phường Kim Liên", province: 2, district: 24
	},
	{
		id: 232, name: "Phường Phương Mai", province: 2, district: 24
	},
	{
		id: 235, name: "Phường Ngã Tư Sở", province: 2, district: 24
	},
	{
		id: 238, name: "Phường Khương Thượng", province: 2, district: 24
	},
	{
		id: 91, name: "Phường Phú Thượng", province: 2, district: 25
	},
	{
		id: 94, name: "Phường Nhật Tân", province: 2, district: 25
	},
	{
		id: 97, name: "Phường Tứ Liên", province: 2, district: 25
	},
	{
		id: 100, name: "Phường Quảng An", province: 2, district: 25
	},
	{
		id: 103, name: "Phường Xuân La", province: 2, district: 25
	},
	{
		id: 106, name: "Phường Yên Phụ", province: 2, district: 25
	},
	{
		id: 109, name: "Phường Bưởi", province: 2, district: 25
	},
	{
		id: 112, name: "Phường Thuỵ Khuê", province: 2, district: 25
	},
	{
		id: 157, name: "Phường Nghĩa Đô", province: 2, district: 26
	},
	{
		id: 160, name: "Phường Nghĩa Tân", province: 2, district: 26
	},
	{
		id: 163, name: "Phường Mai Dịch", province: 2, district: 26
	},
	{
		id: 166, name: "Phường Dịch Vọng", province: 2, district: 26
	},
	{
		id: 167, name: "Phường Dịch Vọng Hậu", province: 2, district: 26
	},
	{
		id: 169, name: "Phường Quan Hoa", province: 2, district: 26
	},
	{
		id: 172, name: "Phường Yên Hoà", province: 2, district: 26
	},
	{
		id: 175, name: "Phường Trung Hoà", province: 2, district: 26
	},
	{
		id: 343, name: "Phường Nhân Chính", province: 2, district: 27
	},
	{
		id: 346, name: "Phường Thượng Đình", province: 2, district: 27
	},
	{
		id: 349, name: "Phường Khương Trung", province: 2, district: 27
	},
	{
		id: 352, name: "Phường Khương Mai", province: 2, district: 27
	},
	{
		id: 355, name: "Phường Thanh Xuân Trung", province: 2, district: 27
	},
	{
		id: 358, name: "Phường Phương Liệt", province: 2, district: 27
	},
	{
		id: 361, name: "Phường Hạ Đình", province: 2, district: 27
	},
	{
		id: 364, name: "Phường Khương Đình", province: 2, district: 27
	},
	{
		id: 367, name: "Phường Thanh Xuân Bắc", province: 2, district: 27
	},
	{
		id: 370, name: "Phường Thanh Xuân Nam", province: 2, district: 27
	},
	{
		id: 373, name: "Phường Kim Giang", province: 2, district: 27
	},
	{
		id: 301, name: "Phường Thanh Trì", province: 2, district: 28
	},
	{
		id: 304, name: "Phường Vĩnh Hưng", province: 2, district: 28
	},
	{
		id: 307, name: "Phường Định Công", province: 2, district: 28
	},
	{
		id: 310, name: "Phường Mai Động", province: 2, district: 28
	},
	{
		id: 313, name: "Phường Tương Mai", province: 2, district: 28
	},
	{
		id: 316, name: "Phường Đại Kim", province: 2, district: 28
	},
	{
		id: 319, name: "Phường Tân Mai", province: 2, district: 28
	},
	{
		id: 322, name: "Phường Hoàng Văn Thụ", province: 2, district: 28
	},
	{
		id: 325, name: "Phường Giáp Bát", province: 2, district: 28
	},
	{
		id: 328, name: "Phường Lĩnh Nam", province: 2, district: 28
	},
	{
		id: 331, name: "Phường Thịnh Liệt", province: 2, district: 28
	},
	{
		id: 334, name: "Phường Trần Phú", province: 2, district: 28
	},
	{
		id: 337, name: "Phường Hoàng Liệt", province: 2, district: 28
	},
	{
		id: 340, name: "Phường Yên Sở", province: 2, district: 28
	},
	{
		id: 115, name: "Phường Thượng Thanh", province: 2, district: 29
	},
	{
		id: 118, name: "Phường Ngọc Thuỵ", province: 2, district: 29
	},
	{
		id: 121, name: "Phường Giang Biên", province: 2, district: 29
	},
	{
		id: 124, name: "Phường Đức Giang", province: 2, district: 29
	},
	{
		id: 127, name: "Phường Việt Hưng", province: 2, district: 29
	},
	{
		id: 130, name: "Phường Gia Thuỵ", province: 2, district: 29
	},
	{
		id: 133, name: "Phường Ngọc Lâm", province: 2, district: 29
	},
	{
		id: 136, name: "Phường Phúc Lợi", province: 2, district: 29
	},
	{
		id: 139, name: "Phường Bồ Đề", province: 2, district: 29
	},
	{
		id: 142, name: "Phường Sài Đồng", province: 2, district: 29
	},
	{
		id: 145, name: "Phường Long Biên", province: 2, district: 29
	},
	{
		id: 148, name: "Phường Thạch Bàn", province: 2, district: 29
	},
	{
		id: 151, name: "Phường Phúc Đồng", province: 2, district: 29
	},
	{
		id: 154, name: "Phường Cự Khối", province: 2, district: 29
	},
	{
		id: 592, name: "Phường Cầu Diễn", province: 2, district: 30
	},
	{
		id: 622, name: "Phường Xuân Phương", province: 2, district: 30
	},
	{
		id: 623, name: "Phường Phương Canh", province: 2, district: 30
	},
	{
		id: 625, name: "Phường Mỹ Đình 1", province: 2, district: 30
	},
	{
		id: 626, name: "Phường Mỹ Đình 2", province: 2, district: 30
	},
	{
		id: 628, name: "Phường Tây Mỗ", province: 2, district: 30
	},
	{
		id: 631, name: "Phường Mễ Trì", province: 2, district: 30
	},
	{
		id: 632, name: "Phường Phú Đô", province: 2, district: 30
	},
	{
		id: 634, name: "Phường Đại Mỗ", province: 2, district: 30
	},
	{
		id: 637, name: "Phường Trung Văn", province: 2, district: 30
	},
	{
		id: 640, name: "Thị trấn Văn Điển", province: 2, district: 31
	},
	{
		id: 643, name: "Xã Tân Triều", province: 2, district: 31
	},
	{
		id: 646, name: "Xã Thanh Liệt", province: 2, district: 31
	},
	{
		id: 649, name: "Xã Tả Thanh Oai", province: 2, district: 31
	},
	{
		id: 652, name: "Xã Hữu Hoà", province: 2, district: 31
	},
	{
		id: 655, name: "Xã Tam Hiệp", province: 2, district: 31
	},
	{
		id: 658, name: "Xã Tứ Hiệp", province: 2, district: 31
	},
	{
		id: 661, name: "Xã Yên Mỹ", province: 2, district: 31
	},
	{
		id: 664, name: "Xã Vĩnh Quỳnh", province: 2, district: 31
	},
	{
		id: 667, name: "Xã Ngũ Hiệp", province: 2, district: 31
	},
	{
		id: 670, name: "Xã Duyên Hà", province: 2, district: 31
	},
	{
		id: 673, name: "Xã Ngọc Hồi", province: 2, district: 31
	},
	{
		id: 676, name: "Xã Vạn Phúc", province: 2, district: 31
	},
	{
		id: 679, name: "Xã Đại Áng", province: 2, district: 31
	},
	{
		id: 682, name: "Xã Liên Ninh", province: 2, district: 31
	},
	{
		id: 685, name: "Xã Đông Mỹ", province: 2, district: 31
	},
	{
		id: 526, name: "Thị trấn Yên Viên", province: 2, district: 32
	},
	{
		id: 529, name: "Xã Yên Thường", province: 2, district: 32
	},
	{
		id: 532, name: "Xã Yên Viên", province: 2, district: 32
	},
	{
		id: 535, name: "Xã Ninh Hiệp", province: 2, district: 32
	},
	{
		id: 538, name: "Xã Đình Xuyên", province: 2, district: 32
	},
	{
		id: 541, name: "Xã Dương Hà", province: 2, district: 32
	},
	{
		id: 544, name: "Xã Phù Đổng", province: 2, district: 32
	},
	{
		id: 547, name: "Xã Trung Mầu", province: 2, district: 32
	},
	{
		id: 550, name: "Xã Lệ Chi", province: 2, district: 32
	},
	{
		id: 553, name: "Xã Cổ Bi", province: 2, district: 32
	},
	{
		id: 556, name: "Xã Đặng Xá", province: 2, district: 32
	},
	{
		id: 559, name: "Xã Phú Thị", province: 2, district: 32
	},
	{
		id: 562, name: "Xã Kim Sơn", province: 2, district: 32
	},
	{
		id: 565, name: "Thị trấn Trâu Quỳ", province: 2, district: 32
	},
	{
		id: 568, name: "Xã Dương Quang", province: 2, district: 32
	},
	{
		id: 571, name: "Xã Dương Xá", province: 2, district: 32
	},
	{
		id: 574, name: "Xã Đông Dư", province: 2, district: 32
	},
	{
		id: 577, name: "Xã Đa Tốn", province: 2, district: 32
	},
	{
		id: 580, name: "Xã Kiêu Kỵ", province: 2, district: 32
	},
	{
		id: 583, name: "Xã Bát Tràng", province: 2, district: 32
	},
	{
		id: 586, name: "Xã Kim Lan", province: 2, district: 32
	},
	{
		id: 589, name: "Xã Văn Đức", province: 2, district: 32
	},
	{
		id: 454, name: "Thị trấn Đông Anh", province: 2, district: 33
	},
	{
		id: 457, name: "Xã Xuân Nộn", province: 2, district: 33
	},
	{
		id: 460, name: "Xã Thuỵ Lâm", province: 2, district: 33
	},
	{
		id: 463, name: "Xã Bắc Hồng", province: 2, district: 33
	},
	{
		id: 466, name: "Xã Nguyên Khê", province: 2, district: 33
	},
	{
		id: 469, name: "Xã Nam Hồng", province: 2, district: 33
	},
	{
		id: 472, name: "Xã Tiên Dương", province: 2, district: 33
	},
	{
		id: 475, name: "Xã Vân Hà", province: 2, district: 33
	},
	{
		id: 478, name: "Xã Uy Nỗ", province: 2, district: 33
	},
	{
		id: 481, name: "Xã Vân Nội", province: 2, district: 33
	},
	{
		id: 484, name: "Xã Liên Hà", province: 2, district: 33
	},
	{
		id: 487, name: "Xã Việt Hùng", province: 2, district: 33
	},
	{
		id: 490, name: "Xã Kim Nỗ", province: 2, district: 33
	},
	{
		id: 493, name: "Xã Kim Chung", province: 2, district: 33
	},
	{
		id: 496, name: "Xã Dục Tú", province: 2, district: 33
	},
	{
		id: 499, name: "Xã Đại Mạch", province: 2, district: 33
	},
	{
		id: 502, name: "Xã Vĩnh Ngọc", province: 2, district: 33
	},
	{
		id: 505, name: "Xã Cổ Loa", province: 2, district: 33
	},
	{
		id: 508, name: "Xã Hải Bối", province: 2, district: 33
	},
	{
		id: 511, name: "Xã Xuân Canh", province: 2, district: 33
	},
	{
		id: 514, name: "Xã Võng La", province: 2, district: 33
	},
	{
		id: 517, name: "Xã Tầm Xá", province: 2, district: 33
	},
	{
		id: 520, name: "Xã Mai Lâm", province: 2, district: 33
	},
	{
		id: 523, name: "Xã Đông Hội", province: 2, district: 33
	},
	{
		id: 376, name: "Thị trấn Sóc Sơn", province: 2, district: 34
	},
	{
		id: 379, name: "Xã Bắc Sơn", province: 2, district: 34
	},
	{
		id: 382, name: "Xã Minh Trí", province: 2, district: 34
	},
	{
		id: 385, name: "Xã Hồng Kỳ", province: 2, district: 34
	},
	{
		id: 388, name: "Xã Nam Sơn", province: 2, district: 34
	},
	{
		id: 391, name: "Xã Trung Giã", province: 2, district: 34
	},
	{
		id: 394, name: "Xã Tân Hưng", province: 2, district: 34
	},
	{
		id: 397, name: "Xã Minh Phú", province: 2, district: 34
	},
	{
		id: 400, name: "Xã Phù Linh", province: 2, district: 34
	},
	{
		id: 403, name: "Xã Bắc Phú", province: 2, district: 34
	},
	{
		id: 406, name: "Xã Tân Minh", province: 2, district: 34
	},
	{
		id: 409, name: "Xã Quang Tiến", province: 2, district: 34
	},
	{
		id: 412, name: "Xã Hiền Ninh", province: 2, district: 34
	},
	{
		id: 415, name: "Xã Tân Dân", province: 2, district: 34
	},
	{
		id: 418, name: "Xã Tiên Dược", province: 2, district: 34
	},
	{
		id: 421, name: "Xã Việt Long", province: 2, district: 34
	},
	{
		id: 424, name: "Xã Xuân Giang", province: 2, district: 34
	},
	{
		id: 427, name: "Xã Mai Đình", province: 2, district: 34
	},
	{
		id: 430, name: "Xã Đức Hoà", province: 2, district: 34
	},
	{
		id: 433, name: "Xã Thanh Xuân", province: 2, district: 34
	},
	{
		id: 436, name: "Xã Đông Xuân", province: 2, district: 34
	},
	{
		id: 439, name: "Xã Kim Lũ", province: 2, district: 34
	},
	{
		id: 442, name: "Xã Phú Cường", province: 2, district: 34
	},
	{
		id: 445, name: "Xã Phú Minh", province: 2, district: 34
	},
	{
		id: 448, name: "Xã Phù Lỗ", province: 2, district: 34
	},
	{
		id: 451, name: "Xã Xuân Thu", province: 2, district: 34
	},
	{
		id: 9538, name: "Phường Nguyễn Trãi", province: 2, district: 265
	},
	{
		id: 9541, name: "Phường Mộ Lao", province: 2, district: 265
	},
	{
		id: 9542, name: "Phường Văn Quán", province: 2, district: 265
	},
	{
		id: 9544, name: "Phường Vạn Phúc", province: 2, district: 265
	},
	{
		id: 9547, name: "Phường Yết Kiêu", province: 2, district: 265
	},
	{
		id: 9550, name: "Phường Quang Trung", province: 2, district: 265
	},
	{
		id: 9551, name: "Phường La Khê", province: 2, district: 265
	},
	{
		id: 9552, name: "Phường Phú La", province: 2, district: 265
	},
	{
		id: 9553, name: "Phường Phúc La", province: 2, district: 265
	},
	{
		id: 9556, name: "Phường Hà Cầu", province: 2, district: 265
	},
	{
		id: 9562, name: "Phường Yên Nghĩa", province: 2, district: 265
	},
	{
		id: 9565, name: "Phường Kiến Hưng", province: 2, district: 265
	},
	{
		id: 9568, name: "Phường Phú Lãm", province: 2, district: 265
	},
	{
		id: 9571, name: "Phường Phú Lương", province: 2, district: 265
	},
	{
		id: 9886, name: "Phường Dương Nội", province: 2, district: 265
	},
	{
		id: 10117, name: "Phường Đồng Mai", province: 2, district: 265
	},
	{
		id: 10123, name: "Phường Biên Giang", province: 2, district: 265
	},
	{
		id: 9574, name: "Phường Lê Lợi", province: 2, district: 266
	},
	{
		id: 9577, name: "Phường Phú Thịnh", province: 2, district: 266
	},
	{
		id: 9580, name: "Phường Ngô Quyền", province: 2, district: 266
	},
	{
		id: 9583, name: "Phường Quang Trung", province: 2, district: 266
	},
	{
		id: 9586, name: "Phường Sơn Lộc", province: 2, district: 266
	},
	{
		id: 9589, name: "Phường Xuân Khanh", province: 2, district: 266
	},
	{
		id: 9592, name: "Xã Đường Lâm", province: 2, district: 266
	},
	{
		id: 9595, name: "Phường Viên Sơn", province: 2, district: 266
	},
	{
		id: 9598, name: "Xã Xuân Sơn", province: 2, district: 266
	},
	{
		id: 9601, name: "Phường Trung Hưng", province: 2, district: 266
	},
	{
		id: 9604, name: "Xã Thanh Mỹ", province: 2, district: 266
	},
	{
		id: 9607, name: "Phường Trung Sơn Trầm", province: 2, district: 266
	},
	{
		id: 9610, name: "Xã Kim Sơn", province: 2, district: 266
	},
	{
		id: 9613, name: "Xã Sơn Đông", province: 2, district: 266
	},
	{
		id: 9616, name: "Xã Cổ Đông", province: 2, district: 266
	},
	{
		id: 9619, name: "Thị trấn Tây Đằng", province: 2, district: 267
	},
	{
		id: 9625, name: "Xã Phú Cường", province: 2, district: 267
	},
	{
		id: 9628, name: "Xã Cổ Đô", province: 2, district: 267
	},
	{
		id: 9631, name: "Xã Tản Hồng", province: 2, district: 267
	},
	{
		id: 9634, name: "Xã Vạn Thắng", province: 2, district: 267
	},
	{
		id: 9637, name: "Xã Châu Sơn", province: 2, district: 267
	},
	{
		id: 9640, name: "Xã Phong Vân", province: 2, district: 267
	},
	{
		id: 9643, name: "Xã Phú Đông", province: 2, district: 267
	},
	{
		id: 9646, name: "Xã Phú Phương", province: 2, district: 267
	},
	{
		id: 9649, name: "Xã Phú Châu", province: 2, district: 267
	},
	{
		id: 9652, name: "Xã Thái Hòa", province: 2, district: 267
	},
	{
		id: 9655, name: "Xã Đồng Thái", province: 2, district: 267
	},
	{
		id: 9658, name: "Xã Phú Sơn", province: 2, district: 267
	},
	{
		id: 9661, name: "Xã Minh Châu", province: 2, district: 267
	},
	{
		id: 9664, name: "Xã Vật Lại", province: 2, district: 267
	},
	{
		id: 9667, name: "Xã Chu Minh", province: 2, district: 267
	},
	{
		id: 9670, name: "Xã Tòng Bạt", province: 2, district: 267
	},
	{
		id: 9673, name: "Xã Cẩm Lĩnh", province: 2, district: 267
	},
	{
		id: 9676, name: "Xã Sơn Đà", province: 2, district: 267
	},
	{
		id: 9679, name: "Xã Đông Quang", province: 2, district: 267
	},
	{
		id: 9682, name: "Xã Tiên Phong", province: 2, district: 267
	},
	{
		id: 9685, name: "Xã Thụy An", province: 2, district: 267
	},
	{
		id: 9688, name: "Xã Cam Thượng", province: 2, district: 267
	},
	{
		id: 9691, name: "Xã Thuần Mỹ", province: 2, district: 267
	},
	{
		id: 9694, name: "Xã Tản Lĩnh", province: 2, district: 267
	},
	{
		id: 9697, name: "Xã Ba Trại", province: 2, district: 267
	},
	{
		id: 9700, name: "Xã Minh Quang", province: 2, district: 267
	},
	{
		id: 9703, name: "Xã Ba Vì", province: 2, district: 267
	},
	{
		id: 9706, name: "Xã Vân Hòa", province: 2, district: 267
	},
	{
		id: 9709, name: "Xã Yên Bài", province: 2, district: 267
	},
	{
		id: 9712, name: "Xã Khánh Thượng", province: 2, district: 267
	},
	{
		id: 9715, name: "Thị trấn Phúc Thọ", province: 2, district: 268
	},
	{
		id: 9718, name: "Xã Vân Hà", province: 2, district: 268
	},
	{
		id: 9721, name: "Xã Vân Phúc", province: 2, district: 268
	},
	{
		id: 9724, name: "Xã Vân Nam", province: 2, district: 268
	},
	{
		id: 9727, name: "Xã Xuân Phú", province: 2, district: 268
	},
	{
		id: 9730, name: "Xã Phương Độ", province: 2, district: 268
	},
	{
		id: 9733, name: "Xã Sen Chiểu", province: 2, district: 268
	},
	{
		id: 9736, name: "Xã Cẩm Đình", province: 2, district: 268
	},
	{
		id: 9739, name: "Xã Võng Xuyên", province: 2, district: 268
	},
	{
		id: 9742, name: "Xã Thọ Lộc", province: 2, district: 268
	},
	{
		id: 9745, name: "Xã Long Xuyên", province: 2, district: 268
	},
	{
		id: 9748, name: "Xã Thượng Cốc", province: 2, district: 268
	},
	{
		id: 9751, name: "Xã Hát Môn", province: 2, district: 268
	},
	{
		id: 9754, name: "Xã Tích Giang", province: 2, district: 268
	},
	{
		id: 9757, name: "Xã Thanh Đa", province: 2, district: 268
	},
	{
		id: 9760, name: "Xã Trạch Mỹ Lộc", province: 2, district: 268
	},
	{
		id: 9763, name: "Xã Phúc Hòa", province: 2, district: 268
	},
	{
		id: 9766, name: "Xã Ngọc Tảo", province: 2, district: 268
	},
	{
		id: 9769, name: "Xã Phụng Thượng", province: 2, district: 268
	},
	{
		id: 9772, name: "Xã Tam Thuấn", province: 2, district: 268
	},
	{
		id: 9775, name: "Xã Tam Hiệp", province: 2, district: 268
	},
	{
		id: 9778, name: "Xã Hiệp Thuận", province: 2, district: 268
	},
	{
		id: 9781, name: "Xã Liên Hiệp", province: 2, district: 268
	},
	{
		id: 4927, name: "Xã Yên Trung", province: 2, district: 269
	},
	{
		id: 4930, name: "Xã Yên Bình", province: 2, district: 269
	},
	{
		id: 4936, name: "Xã Tiến Xuân", province: 2, district: 269
	},
	{
		id: 9955, name: "Thị trấn Liên Quan", province: 2, district: 269
	},
	{
		id: 9958, name: "Xã Đại Đồng", province: 2, district: 269
	},
	{
		id: 9961, name: "Xã Cẩm Yên", province: 2, district: 269
	},
	{
		id: 9964, name: "Xã Lại Thượng", province: 2, district: 269
	},
	{
		id: 9967, name: "Xã Phú Kim", province: 2, district: 269
	},
	{
		id: 9970, name: "Xã Hương Ngải", province: 2, district: 269
	},
	{
		id: 9973, name: "Xã Canh Nậu", province: 2, district: 269
	},
	{
		id: 9976, name: "Xã Kim Quan", province: 2, district: 269
	},
	{
		id: 9979, name: "Xã Dị Nậu", province: 2, district: 269
	},
	{
		id: 9982, name: "Xã Bình Yên", province: 2, district: 269
	},
	{
		id: 9985, name: "Xã Chàng Sơn", province: 2, district: 269
	},
	{
		id: 9988, name: "Xã Thạch Hoà", province: 2, district: 269
	},
	{
		id: 9991, name: "Xã Cần Kiệm", province: 2, district: 269
	},
	{
		id: 9994, name: "Xã Hữu Bằng", province: 2, district: 269
	},
	{
		id: 9997, name: "Xã Phùng Xá", province: 2, district: 269
	},
	{
		id: 10000, name: "Xã Tân Xã", province: 2, district: 269
	},
	{
		id: 10003, name: "Xã Thạch Xá", province: 2, district: 269
	},
	{
		id: 10006, name: "Xã Bình Phú", province: 2, district: 269
	},
	{
		id: 10009, name: "Xã Hạ Bằng", province: 2, district: 269
	},
	{
		id: 10012, name: "Xã Đồng Trúc", province: 2, district: 269
	},
	{
		id: 4939, name: "Xã Đông Xuân", province: 2, district: 270
	},
	{
		id: 9895, name: "Thị trấn Quốc Oai", province: 2, district: 270
	},
	{
		id: 9898, name: "Xã Sài Sơn", province: 2, district: 270
	},
	{
		id: 9901, name: "Xã Phượng Cách", province: 2, district: 270
	},
	{
		id: 9904, name: "Xã Yên Sơn", province: 2, district: 270
	},
	{
		id: 9907, name: "Xã Ngọc Liệp", province: 2, district: 270
	},
	{
		id: 9910, name: "Xã Ngọc Mỹ", province: 2, district: 270
	},
	{
		id: 9913, name: "Xã Liệp Tuyết", province: 2, district: 270
	},
	{
		id: 9916, name: "Xã Thạch Thán", province: 2, district: 270
	},
	{
		id: 9919, name: "Xã Đồng Quang", province: 2, district: 270
	},
	{
		id: 9922, name: "Xã Phú Cát", province: 2, district: 270
	},
	{
		id: 9925, name: "Xã Tuyết Nghĩa", province: 2, district: 270
	},
	{
		id: 9928, name: "Xã Nghĩa Hương", province: 2, district: 270
	},
	{
		id: 9931, name: "Xã Cộng Hòa", province: 2, district: 270
	},
	{
		id: 9934, name: "Xã Tân Phú", province: 2, district: 270
	},
	{
		id: 9937, name: "Xã Đại Thành", province: 2, district: 270
	},
	{
		id: 9940, name: "Xã Phú Mãn", province: 2, district: 270
	},
	{
		id: 9943, name: "Xã Cấn Hữu", province: 2, district: 270
	},
	{
		id: 9946, name: "Xã Tân Hòa", province: 2, district: 270
	},
	{
		id: 9949, name: "Xã Hòa Thạch", province: 2, district: 270
	},
	{
		id: 9952, name: "Xã Đông Yên", province: 2, district: 270
	},
	{
		id: 10015, name: "Thị trấn Chúc Sơn", province: 2, district: 271
	},
	{
		id: 10018, name: "Thị trấn Xuân Mai", province: 2, district: 271
	},
	{
		id: 10021, name: "Xã Phụng Châu", province: 2, district: 271
	},
	{
		id: 10024, name: "Xã Tiên Phương", province: 2, district: 271
	},
	{
		id: 10027, name: "Xã Đông Sơn", province: 2, district: 271
	},
	{
		id: 10030, name: "Xã Đông Phương Yên", province: 2, district: 271
	},
	{
		id: 10033, name: "Xã Phú Nghĩa", province: 2, district: 271
	},
	{
		id: 10039, name: "Xã Trường Yên", province: 2, district: 271
	},
	{
		id: 10042, name: "Xã Ngọc Hòa", province: 2, district: 271
	},
	{
		id: 10045, name: "Xã Thủy Xuân Tiên", province: 2, district: 271
	},
	{
		id: 10048, name: "Xã Thanh Bình", province: 2, district: 271
	},
	{
		id: 10051, name: "Xã Trung Hòa", province: 2, district: 271
	},
	{
		id: 10054, name: "Xã Đại Yên", province: 2, district: 271
	},
	{
		id: 10057, name: "Xã Thụy Hương", province: 2, district: 271
	},
	{
		id: 10060, name: "Xã Tốt Động", province: 2, district: 271
	},
	{
		id: 10063, name: "Xã Lam Điền", province: 2, district: 271
	},
	{
		id: 10066, name: "Xã Tân Tiến", province: 2, district: 271
	},
	{
		id: 10069, name: "Xã Nam Phương Tiến", province: 2, district: 271
	},
	{
		id: 10072, name: "Xã Hợp Đồng", province: 2, district: 271
	},
	{
		id: 10075, name: "Xã Hoàng Văn Thụ", province: 2, district: 271
	},
	{
		id: 10078, name: "Xã Hoàng Diệu", province: 2, district: 271
	},
	{
		id: 10081, name: "Xã Hữu Văn", province: 2, district: 271
	},
	{
		id: 10084, name: "Xã Quảng Bị", province: 2, district: 271
	},
	{
		id: 10087, name: "Xã Mỹ Lương", province: 2, district: 271
	},
	{
		id: 10090, name: "Xã Thượng Vực", province: 2, district: 271
	},
	{
		id: 10093, name: "Xã Hồng Phong", province: 2, district: 271
	},
	{
		id: 10096, name: "Xã Đồng Phú", province: 2, district: 271
	},
	{
		id: 10099, name: "Xã Trần Phú", province: 2, district: 271
	},
	{
		id: 10102, name: "Xã Văn Võ", province: 2, district: 271
	},
	{
		id: 10105, name: "Xã Đồng Lạc", province: 2, district: 271
	},
	{
		id: 10108, name: "Xã Hòa Chính", province: 2, district: 271
	},
	{
		id: 10111, name: "Xã Phú Nam An", province: 2, district: 271
	},
	{
		id: 9784, name: "Thị trấn Phùng", province: 2, district: 272
	},
	{
		id: 9787, name: "Xã Trung Châu", province: 2, district: 272
	},
	{
		id: 9790, name: "Xã Thọ An", province: 2, district: 272
	},
	{
		id: 9793, name: "Xã Thọ Xuân", province: 2, district: 272
	},
	{
		id: 9796, name: "Xã Hồng Hà", province: 2, district: 272
	},
	{
		id: 9799, name: "Xã Liên Hồng", province: 2, district: 272
	},
	{
		id: 9802, name: "Xã Liên Hà", province: 2, district: 272
	},
	{
		id: 9805, name: "Xã Hạ Mỗ", province: 2, district: 272
	},
	{
		id: 9808, name: "Xã Liên Trung", province: 2, district: 272
	},
	{
		id: 9811, name: "Xã Phương Đình", province: 2, district: 272
	},
	{
		id: 9814, name: "Xã Thượng Mỗ", province: 2, district: 272
	},
	{
		id: 9817, name: "Xã Tân Hội", province: 2, district: 272
	},
	{
		id: 9820, name: "Xã Tân Lập", province: 2, district: 272
	},
	{
		id: 9823, name: "Xã Đan Phượng", province: 2, district: 272
	},
	{
		id: 9826, name: "Xã Đồng Tháp", province: 2, district: 272
	},
	{
		id: 9829, name: "Xã Song Phượng", province: 2, district: 272
	},
	{
		id: 9832, name: "Thị trấn Trạm Trôi", province: 2, district: 273
	},
	{
		id: 9835, name: "Xã Đức Thượng", province: 2, district: 273
	},
	{
		id: 9838, name: "Xã Minh Khai", province: 2, district: 273
	},
	{
		id: 9841, name: "Xã Dương Liễu", province: 2, district: 273
	},
	{
		id: 9844, name: "Xã Di Trạch", province: 2, district: 273
	},
	{
		id: 9847, name: "Xã Đức Giang", province: 2, district: 273
	},
	{
		id: 9850, name: "Xã Cát Quế", province: 2, district: 273
	},
	{
		id: 9853, name: "Xã Kim Chung", province: 2, district: 273
	},
	{
		id: 9856, name: "Xã Yên Sở", province: 2, district: 273
	},
	{
		id: 9859, name: "Xã Sơn Đồng", province: 2, district: 273
	},
	{
		id: 9862, name: "Xã Vân Canh", province: 2, district: 273
	},
	{
		id: 9865, name: "Xã Đắc Sở", province: 2, district: 273
	},
	{
		id: 9868, name: "Xã Lại Yên", province: 2, district: 273
	},
	{
		id: 9871, name: "Xã Tiền Yên", province: 2, district: 273
	},
	{
		id: 9874, name: "Xã Song Phương", province: 2, district: 273
	},
	{
		id: 9877, name: "Xã An Khánh", province: 2, district: 273
	},
	{
		id: 9880, name: "Xã An Thượng", province: 2, district: 273
	},
	{
		id: 9883, name: "Xã Vân Côn", province: 2, district: 273
	},
	{
		id: 9889, name: "Xã La Phù", province: 2, district: 273
	},
	{
		id: 9892, name: "Xã Đông La", province: 2, district: 273
	},
	{
		id: 10114, name: "Thị trấn Kim Bài", province: 2, district: 274
	},
	{
		id: 10120, name: "Xã Cự Khê", province: 2, district: 274
	},
	{
		id: 10126, name: "Xã Bích Hòa", province: 2, district: 274
	},
	{
		id: 10129, name: "Xã Mỹ Hưng", province: 2, district: 274
	},
	{
		id: 10132, name: "Xã Cao Viên", province: 2, district: 274
	},
	{
		id: 10135, name: "Xã Bình Minh", province: 2, district: 274
	},
	{
		id: 10138, name: "Xã Tam Hưng", province: 2, district: 274
	},
	{
		id: 10141, name: "Xã Thanh Cao", province: 2, district: 274
	},
	{
		id: 10144, name: "Xã Thanh Thùy", province: 2, district: 274
	},
	{
		id: 10147, name: "Xã Thanh Mai", province: 2, district: 274
	},
	{
		id: 10150, name: "Xã Thanh Văn", province: 2, district: 274
	},
	{
		id: 10153, name: "Xã Đỗ Động", province: 2, district: 274
	},
	{
		id: 10156, name: "Xã Kim An", province: 2, district: 274
	},
	{
		id: 10159, name: "Xã Kim Thư", province: 2, district: 274
	},
	{
		id: 10162, name: "Xã Phương Trung", province: 2, district: 274
	},
	{
		id: 10165, name: "Xã Tân Ước", province: 2, district: 274
	},
	{
		id: 10168, name: "Xã Dân Hòa", province: 2, district: 274
	},
	{
		id: 10171, name: "Xã Liên Châu", province: 2, district: 274
	},
	{
		id: 10174, name: "Xã Cao Dương", province: 2, district: 274
	},
	{
		id: 10177, name: "Xã Xuân Dương", province: 2, district: 274
	},
	{
		id: 10180, name: "Xã Hồng Dương", province: 2, district: 274
	},
	{
		id: 10441, name: "Thị trấn Đại Nghĩa", province: 2, district: 275
	},
	{
		id: 10444, name: "Xã Đồng Tâm", province: 2, district: 275
	},
	{
		id: 10447, name: "Xã Thượng Lâm", province: 2, district: 275
	},
	{
		id: 10450, name: "Xã Tuy Lai", province: 2, district: 275
	},
	{
		id: 10453, name: "Xã Phúc Lâm", province: 2, district: 275
	},
	{
		id: 10456, name: "Xã Mỹ Thành", province: 2, district: 275
	},
	{
		id: 10459, name: "Xã Bột Xuyên", province: 2, district: 275
	},
	{
		id: 10462, name: "Xã An Mỹ", province: 2, district: 275
	},
	{
		id: 10465, name: "Xã Hồng Sơn", province: 2, district: 275
	},
	{
		id: 10468, name: "Xã Lê Thanh", province: 2, district: 275
	},
	{
		id: 10471, name: "Xã Xuy Xá", province: 2, district: 275
	},
	{
		id: 10474, name: "Xã Phùng Xá", province: 2, district: 275
	},
	{
		id: 10477, name: "Xã Phù Lưu Tế", province: 2, district: 275
	},
	{
		id: 10480, name: "Xã Đại Hưng", province: 2, district: 275
	},
	{
		id: 10483, name: "Xã Vạn Kim", province: 2, district: 275
	},
	{
		id: 10486, name: "Xã Đốc Tín", province: 2, district: 275
	},
	{
		id: 10489, name: "Xã Hương Sơn", province: 2, district: 275
	},
	{
		id: 10492, name: "Xã Hùng Tiến", province: 2, district: 275
	},
	{
		id: 10495, name: "Xã An Tiến", province: 2, district: 275
	},
	{
		id: 10498, name: "Xã Hợp Tiến", province: 2, district: 275
	},
	{
		id: 10501, name: "Xã Hợp Thanh", province: 2, district: 275
	},
	{
		id: 10504, name: "Xã An Phú", province: 2, district: 275
	},
	{
		id: 10354, name: "Thị trấn Vân Đình", province: 2, district: 276
	},
	{
		id: 10357, name: "Xã Viên An", province: 2, district: 276
	},
	{
		id: 10360, name: "Xã Viên Nội", province: 2, district: 276
	},
	{
		id: 10363, name: "Xã Hoa Sơn", province: 2, district: 276
	},
	{
		id: 10366, name: "Xã Quảng Phú Cầu", province: 2, district: 276
	},
	{
		id: 10369, name: "Xã Trường Thịnh", province: 2, district: 276
	},
	{
		id: 10372, name: "Xã Cao Thành", province: 2, district: 276
	},
	{
		id: 10375, name: "Xã Liên Bạt", province: 2, district: 276
	},
	{
		id: 10378, name: "Xã Sơn Công", province: 2, district: 276
	},
	{
		id: 10381, name: "Xã Đồng Tiến", province: 2, district: 276
	},
	{
		id: 10384, name: "Xã Phương Tú", province: 2, district: 276
	},
	{
		id: 10387, name: "Xã Trung Tú", province: 2, district: 276
	},
	{
		id: 10390, name: "Xã Đồng Tân", province: 2, district: 276
	},
	{
		id: 10393, name: "Xã Tảo Dương Văn", province: 2, district: 276
	},
	{
		id: 10396, name: "Xã Vạn Thái", province: 2, district: 276
	},
	{
		id: 10399, name: "Xã Minh Đức", province: 2, district: 276
	},
	{
		id: 10402, name: "Xã Hòa Lâm", province: 2, district: 276
	},
	{
		id: 10405, name: "Xã Hòa Xá", province: 2, district: 276
	},
	{
		id: 10408, name: "Xã Trầm Lộng", province: 2, district: 276
	},
	{
		id: 10411, name: "Xã Kim Đường", province: 2, district: 276
	},
	{
		id: 10414, name: "Xã Hòa Nam", province: 2, district: 276
	},
	{
		id: 10417, name: "Xã Hòa Phú", province: 2, district: 276
	},
	{
		id: 10420, name: "Xã Đội Bình", province: 2, district: 276
	},
	{
		id: 10423, name: "Xã Đại Hùng", province: 2, district: 276
	},
	{
		id: 10426, name: "Xã Đông Lỗ", province: 2, district: 276
	},
	{
		id: 10429, name: "Xã Phù Lưu", province: 2, district: 276
	},
	{
		id: 10432, name: "Xã Đại Cường", province: 2, district: 276
	},
	{
		id: 10435, name: "Xã Lưu Hoàng", province: 2, district: 276
	},
	{
		id: 10438, name: "Xã Hồng Quang", province: 2, district: 276
	},
	{
		id: 10183, name: "Thị trấn Thường Tín", province: 2, district: 277
	},
	{
		id: 10186, name: "Xã Ninh Sở", province: 2, district: 277
	},
	{
		id: 10189, name: "Xã Nhị Khê", province: 2, district: 277
	},
	{
		id: 10192, name: "Xã Duyên Thái", province: 2, district: 277
	},
	{
		id: 10195, name: "Xã Khánh Hà", province: 2, district: 277
	},
	{
		id: 10198, name: "Xã Hòa Bình", province: 2, district: 277
	},
	{
		id: 10201, name: "Xã Văn Bình", province: 2, district: 277
	},
	{
		id: 10204, name: "Xã Hiền Giang", province: 2, district: 277
	},
	{
		id: 10207, name: "Xã Hồng Vân", province: 2, district: 277
	},
	{
		id: 10210, name: "Xã Vân Tảo", province: 2, district: 277
	},
	{
		id: 10213, name: "Xã Liên Phương", province: 2, district: 277
	},
	{
		id: 10216, name: "Xã Văn Phú", province: 2, district: 277
	},
	{
		id: 10219, name: "Xã Tự Nhiên", province: 2, district: 277
	},
	{
		id: 10222, name: "Xã Tiền Phong", province: 2, district: 277
	},
	{
		id: 10225, name: "Xã Hà Hồi", province: 2, district: 277
	},
	{
		id: 10228, name: "Xã Thư Phú", province: 2, district: 277
	},
	{
		id: 10231, name: "Xã Nguyễn Trãi", province: 2, district: 277
	},
	{
		id: 10234, name: "Xã Quất Động", province: 2, district: 277
	},
	{
		id: 10237, name: "Xã Chương Dương", province: 2, district: 277
	},
	{
		id: 10240, name: "Xã Tân Minh", province: 2, district: 277
	},
	{
		id: 10243, name: "Xã Lê Lợi", province: 2, district: 277
	},
	{
		id: 10246, name: "Xã Thắng Lợi", province: 2, district: 277
	},
	{
		id: 10249, name: "Xã Dũng Tiến", province: 2, district: 277
	},
	{
		id: 10252, name: "Xã Thống Nhất", province: 2, district: 277
	},
	{
		id: 10255, name: "Xã Nghiêm Xuyên", province: 2, district: 277
	},
	{
		id: 10258, name: "Xã Tô Hiệu", province: 2, district: 277
	},
	{
		id: 10261, name: "Xã Văn Tự", province: 2, district: 277
	},
	{
		id: 10264, name: "Xã Vạn Điểm", province: 2, district: 277
	},
	{
		id: 10267, name: "Xã Minh Cường", province: 2, district: 277
	},
	{
		id: 10270, name: "Thị trấn Phú Minh", province: 2, district: 278
	},
	{
		id: 10273, name: "Thị trấn Phú Xuyên", province: 2, district: 278
	},
	{
		id: 10276, name: "Xã Hồng Minh", province: 2, district: 278
	},
	{
		id: 10279, name: "Xã Phượng Dực", province: 2, district: 278
	},
	{
		id: 10282, name: "Xã Văn Nhân", province: 2, district: 278
	},
	{
		id: 10285, name: "Xã Thụy Phú", province: 2, district: 278
	},
	{
		id: 10288, name: "Xã Tri Trung", province: 2, district: 278
	},
	{
		id: 10291, name: "Xã Đại Thắng", province: 2, district: 278
	},
	{
		id: 10294, name: "Xã Phú Túc", province: 2, district: 278
	},
	{
		id: 10297, name: "Xã Văn Hoàng", province: 2, district: 278
	},
	{
		id: 10300, name: "Xã Hồng Thái", province: 2, district: 278
	},
	{
		id: 10303, name: "Xã Hoàng Long", province: 2, district: 278
	},
	{
		id: 10306, name: "Xã Quang Trung", province: 2, district: 278
	},
	{
		id: 10309, name: "Xã Nam Phong", province: 2, district: 278
	},
	{
		id: 10312, name: "Xã Nam Triều", province: 2, district: 278
	},
	{
		id: 10315, name: "Xã Tân Dân", province: 2, district: 278
	},
	{
		id: 10318, name: "Xã Sơn Hà", province: 2, district: 278
	},
	{
		id: 10321, name: "Xã Chuyên Mỹ", province: 2, district: 278
	},
	{
		id: 10324, name: "Xã Khai Thái", province: 2, district: 278
	},
	{
		id: 10327, name: "Xã Phúc Tiến", province: 2, district: 278
	},
	{
		id: 10330, name: "Xã Vân Từ", province: 2, district: 278
	},
	{
		id: 10333, name: "Xã Tri Thủy", province: 2, district: 278
	},
	{
		id: 10336, name: "Xã Đại Xuyên", province: 2, district: 278
	},
	{
		id: 10339, name: "Xã Phú Yên", province: 2, district: 278
	},
	{
		id: 10342, name: "Xã Bạch Hạ", province: 2, district: 278
	},
	{
		id: 10345, name: "Xã Quang Lãng", province: 2, district: 278
	},
	{
		id: 10348, name: "Xã Châu Can", province: 2, district: 278
	},
	{
		id: 10351, name: "Xã Minh Tân", province: 2, district: 278
	},
	{
		id: 8973, name: "Thị trấn Chi Đông", province: 2, district: 716
	},
	{
		id: 8974, name: "Xã Đại Thịnh", province: 2, district: 716
	},
	{
		id: 8977, name: "Xã Kim Hoa", province: 2, district: 716
	},
	{
		id: 8980, name: "Xã Thạch Đà", province: 2, district: 716
	},
	{
		id: 8983, name: "Xã Tiến Thắng", province: 2, district: 716
	},
	{
		id: 8986, name: "Xã Tự Lập", province: 2, district: 716
	},
	{
		id: 8989, name: "Thị trấn Quang Minh", province: 2, district: 716
	},
	{
		id: 8992, name: "Xã Thanh Lâm", province: 2, district: 716
	},
	{
		id: 8995, name: "Xã Tam Đồng", province: 2, district: 716
	},
	{
		id: 8998, name: "Xã Liên Mạc", province: 2, district: 716
	},
	{
		id: 9001, name: "Xã Vạn Yên", province: 2, district: 716
	},
	{
		id: 9004, name: "Xã Chu Phan", province: 2, district: 716
	},
	{
		id: 9007, name: "Xã Tiến Thịnh", province: 2, district: 716
	},
	{
		id: 9010, name: "Xã Mê Linh", province: 2, district: 716
	},
	{
		id: 9013, name: "Xã Văn Khê", province: 2, district: 716
	},
	{
		id: 9016, name: "Xã Hoàng Kim", province: 2, district: 716
	},
	{
		id: 9019, name: "Xã Tiền Phong", province: 2, district: 716
	},
	{
		id: 9022, name: "Xã Tráng Việt", province: 2, district: 716
	},
	{
		id: 595, name: "Phường Thượng Cát", province: 2, district: 749
	},
	{
		id: 598, name: "Phường Liên Mạc", province: 2, district: 749
	},
	{
		id: 601, name: "Phường Đông Ngạc", province: 2, district: 749
	},
	{
		id: 602, name: "Phường Đức Thắng", province: 2, district: 749
	},
	{
		id: 604, name: "Phường Thuỵ Phương", province: 2, district: 749
	},
	{
		id: 607, name: "Phường Tây Tựu", province: 2, district: 749
	},
	{
		id: 610, name: "Phường Xuân Đỉnh", province: 2, district: 749
	},
	{
		id: 611, name: "Phường Xuân Tảo", province: 2, district: 749
	},
	{
		id: 613, name: "Phường Minh Khai", province: 2, district: 749
	},
	{
		id: 616, name: "Phường Cổ Nhuế 1", province: 2, district: 749
	},
	{
		id: 617, name: "Phường Cổ Nhuế 2", province: 2, district: 749
	},
	{
		id: 619, name: "Phường Phú Diễn", province: 2, district: 749
	},
	{
		id: 620, name: "Phường Phúc Diễn", province: 2, district: 749
	},
	{
		id: 30316, name: "Phường Châu Phú B", province: 3, district: 66
	},
	{
		id: 30319, name: "Phường Châu Phú A", province: 3, district: 66
	},
	{
		id: 30322, name: "Phường Vĩnh Mỹ", province: 3, district: 66
	},
	{
		id: 30325, name: "Phường Núi Sam", province: 3, district: 66
	},
	{
		id: 30328, name: "Phường Vĩnh Ngươn", province: 3, district: 66
	},
	{
		id: 30331, name: "Xã Vĩnh Tế", province: 3, district: 66
	},
	{
		id: 30334, name: "Xã Vĩnh Châu", province: 3, district: 66
	},
	{
		id: 30280, name: "Phường Mỹ Bình", province: 3, district: 67
	},
	{
		id: 30283, name: "Phường Mỹ Long", province: 3, district: 67
	},
	{
		id: 30285, name: "Phường Đông Xuyên", province: 3, district: 67
	},
	{
		id: 30286, name: "Phường Mỹ Xuyên", province: 3, district: 67
	},
	{
		id: 30289, name: "Phường Bình Đức", province: 3, district: 67
	},
	{
		id: 30292, name: "Phường Bình Khánh", province: 3, district: 67
	},
	{
		id: 30295, name: "Phường Mỹ Phước", province: 3, district: 67
	},
	{
		id: 30298, name: "Phường Mỹ Quý", province: 3, district: 67
	},
	{
		id: 30301, name: "Phường Mỹ Thới", province: 3, district: 67
	},
	{
		id: 30304, name: "Phường Mỹ Thạnh", province: 3, district: 67
	},
	{
		id: 30307, name: "Phường Mỹ Hòa", province: 3, district: 67
	},
	{
		id: 30310, name: "Xã Mỹ Khánh", province: 3, district: 67
	},
	{
		id: 30313, name: "Xã Mỹ Hoà Hưng", province: 3, district: 67
	},
	{
		id: 30337, name: "Thị trấn An Phú", province: 3, district: 68
	},
	{
		id: 30340, name: "Xã Khánh An", province: 3, district: 68
	},
	{
		id: 30341, name: "Thị trấn Long Bình", province: 3, district: 68
	},
	{
		id: 30343, name: "Xã Khánh Bình", province: 3, district: 68
	},
	{
		id: 30346, name: "Xã Quốc Thái", province: 3, district: 68
	},
	{
		id: 30349, name: "Xã Nhơn Hội", province: 3, district: 68
	},
	{
		id: 30352, name: "Xã Phú Hữu", province: 3, district: 68
	},
	{
		id: 30355, name: "Xã Phú Hội", province: 3, district: 68
	},
	{
		id: 30358, name: "Xã Phước Hưng", province: 3, district: 68
	},
	{
		id: 30361, name: "Xã Vĩnh Lộc", province: 3, district: 68
	},
	{
		id: 30364, name: "Xã Vĩnh Hậu", province: 3, district: 68
	},
	{
		id: 30367, name: "Xã Vĩnh Trường", province: 3, district: 68
	},
	{
		id: 30370, name: "Xã Vĩnh Hội Đông", province: 3, district: 68
	},
	{
		id: 30373, name: "Xã Đa Phước", province: 3, district: 68
	},
	{
		id: 30376, name: "Phường Long Thạnh", province: 3, district: 69
	},
	{
		id: 30377, name: "Phường Long Hưng", province: 3, district: 69
	},
	{
		id: 30378, name: "Phường Long Châu", province: 3, district: 69
	},
	{
		id: 30379, name: "Xã Phú Lộc", province: 3, district: 69
	},
	{
		id: 30382, name: "Xã Vĩnh Xương", province: 3, district: 69
	},
	{
		id: 30385, name: "Xã Vĩnh Hòa", province: 3, district: 69
	},
	{
		id: 30387, name: "Xã Tân Thạnh", province: 3, district: 69
	},
	{
		id: 30388, name: "Xã Tân An", province: 3, district: 69
	},
	{
		id: 30391, name: "Xã Long An", province: 3, district: 69
	},
	{
		id: 30394, name: "Phường Long Phú", province: 3, district: 69
	},
	{
		id: 30397, name: "Xã Châu Phong", province: 3, district: 69
	},
	{
		id: 30400, name: "Xã Phú Vĩnh", province: 3, district: 69
	},
	{
		id: 30403, name: "Xã Lê Chánh", province: 3, district: 69
	},
	{
		id: 30412, name: "Phường Long Sơn", province: 3, district: 69
	},
	{
		id: 30406, name: "Thị trấn Phú Mỹ", province: 3, district: 70
	},
	{
		id: 30409, name: "Thị trấn Chợ Vàm", province: 3, district: 70
	},
	{
		id: 30415, name: "Xã Long Hoà", province: 3, district: 70
	},
	{
		id: 30418, name: "Xã Phú Long", province: 3, district: 70
	},
	{
		id: 30421, name: "Xã Phú Lâm", province: 3, district: 70
	},
	{
		id: 30424, name: "Xã Phú Hiệp", province: 3, district: 70
	},
	{
		id: 30427, name: "Xã Phú Thạnh", province: 3, district: 70
	},
	{
		id: 30430, name: "Xã Hoà Lạc", province: 3, district: 70
	},
	{
		id: 30433, name: "Xã Phú Thành", province: 3, district: 70
	},
	{
		id: 30436, name: "Xã Phú An", province: 3, district: 70
	},
	{
		id: 30439, name: "Xã Phú Xuân", province: 3, district: 70
	},
	{
		id: 30442, name: "Xã Hiệp Xương", province: 3, district: 70
	},
	{
		id: 30445, name: "Xã Phú Bình", province: 3, district: 70
	},
	{
		id: 30448, name: "Xã Phú Thọ", province: 3, district: 70
	},
	{
		id: 30451, name: "Xã Phú Hưng", province: 3, district: 70
	},
	{
		id: 30454, name: "Xã Bình Thạnh Đông", province: 3, district: 70
	},
	{
		id: 30457, name: "Xã Tân Hòa", province: 3, district: 70
	},
	{
		id: 30460, name: "Xã Tân Trung", province: 3, district: 70
	},
	{
		id: 30502, name: "Thị trấn Nhà Bàng", province: 3, district: 71
	},
	{
		id: 30505, name: "Thị trấn Chi Lăng", province: 3, district: 71
	},
	{
		id: 30508, name: "Xã Núi Voi", province: 3, district: 71
	},
	{
		id: 30511, name: "Xã Nhơn Hưng", province: 3, district: 71
	},
	{
		id: 30514, name: "Xã An Phú", province: 3, district: 71
	},
	{
		id: 30517, name: "Xã Thới Sơn", province: 3, district: 71
	},
	{
		id: 30520, name: "Thị trấn Tịnh Biên", province: 3, district: 71
	},
	{
		id: 30523, name: "Xã Văn Giáo", province: 3, district: 71
	},
	{
		id: 30526, name: "Xã An Cư", province: 3, district: 71
	},
	{
		id: 30529, name: "Xã An Nông", province: 3, district: 71
	},
	{
		id: 30532, name: "Xã Vĩnh Trung", province: 3, district: 71
	},
	{
		id: 30535, name: "Xã Tân Lợi", province: 3, district: 71
	},
	{
		id: 30538, name: "Xã An Hảo", province: 3, district: 71
	},
	{
		id: 30541, name: "Xã Tân Lập", province: 3, district: 71
	},
	{
		id: 30544, name: "Thị trấn Tri Tôn", province: 3, district: 72
	},
	{
		id: 30547, name: "Thị trấn Ba Chúc", province: 3, district: 72
	},
	{
		id: 30550, name: "Xã Lạc Quới", province: 3, district: 72
	},
	{
		id: 30553, name: "Xã Lê Trì", province: 3, district: 72
	},
	{
		id: 30556, name: "Xã Vĩnh Gia", province: 3, district: 72
	},
	{
		id: 30559, name: "Xã Vĩnh Phước", province: 3, district: 72
	},
	{
		id: 30562, name: "Xã Châu Lăng", province: 3, district: 72
	},
	{
		id: 30565, name: "Xã Lương Phi", province: 3, district: 72
	},
	{
		id: 30568, name: "Xã Lương An Trà", province: 3, district: 72
	},
	{
		id: 30571, name: "Xã Tà Đảnh", province: 3, district: 72
	},
	{
		id: 30574, name: "Xã Núi Tô", province: 3, district: 72
	},
	{
		id: 30577, name: "Xã An Tức", province: 3, district: 72
	},
	{
		id: 30580, name: "Xã Cô Tô", province: 3, district: 72
	},
	{
		id: 30583, name: "Xã Tân Tuyến", province: 3, district: 72
	},
	{
		id: 30586, name: "Xã Ô Lâm", province: 3, district: 72
	},
	{
		id: 30463, name: "Thị trấn Cái Dầu", province: 3, district: 73
	},
	{
		id: 30466, name: "Xã Khánh Hòa", province: 3, district: 73
	},
	{
		id: 30469, name: "Xã Mỹ Đức", province: 3, district: 73
	},
	{
		id: 30472, name: "Xã Mỹ Phú", province: 3, district: 73
	},
	{
		id: 30475, name: "Xã Ô Long Vỹ", province: 3, district: 73
	},
	{
		id: 30478, name: "Xã Vĩnh Thạnh Trung", province: 3, district: 73
	},
	{
		id: 30481, name: "Xã Thạnh Mỹ Tây", province: 3, district: 73
	},
	{
		id: 30484, name: "Xã Bình Long", province: 3, district: 73
	},
	{
		id: 30487, name: "Xã Bình Mỹ", province: 3, district: 73
	},
	{
		id: 30490, name: "Xã Bình Thủy", province: 3, district: 73
	},
	{
		id: 30493, name: "Xã Đào Hữu Cảnh", province: 3, district: 73
	},
	{
		id: 30496, name: "Xã Bình Phú", province: 3, district: 73
	},
	{
		id: 30499, name: "Xã Bình Chánh", province: 3, district: 73
	},
	{
		id: 30628, name: "Thị trấn Chợ Mới", province: 3, district: 74
	},
	{
		id: 30631, name: "Thị trấn Mỹ Luông", province: 3, district: 74
	},
	{
		id: 30634, name: "Xã Kiến An", province: 3, district: 74
	},
	{
		id: 30637, name: "Xã Mỹ Hội Đông", province: 3, district: 74
	},
	{
		id: 30640, name: "Xã Long Điền A", province: 3, district: 74
	},
	{
		id: 30643, name: "Xã Tấn Mỹ", province: 3, district: 74
	},
	{
		id: 30646, name: "Xã Long Điền B", province: 3, district: 74
	},
	{
		id: 30649, name: "Xã Kiến Thành", province: 3, district: 74
	},
	{
		id: 30652, name: "Xã Mỹ Hiệp", province: 3, district: 74
	},
	{
		id: 30655, name: "Xã Mỹ An", province: 3, district: 74
	},
	{
		id: 30658, name: "Xã Nhơn Mỹ", province: 3, district: 74
	},
	{
		id: 30661, name: "Xã Long Giang", province: 3, district: 74
	},
	{
		id: 30664, name: "Xã Long Kiến", province: 3, district: 74
	},
	{
		id: 30667, name: "Xã Bình Phước Xuân", province: 3, district: 74
	},
	{
		id: 30670, name: "Xã An Thạnh Trung", province: 3, district: 74
	},
	{
		id: 30673, name: "Xã Hội An", province: 3, district: 74
	},
	{
		id: 30676, name: "Xã Hòa Bình", province: 3, district: 74
	},
	{
		id: 30679, name: "Xã Hòa An", province: 3, district: 74
	},
	{
		id: 30589, name: "Thị trấn An Châu", province: 3, district: 75
	},
	{
		id: 30592, name: "Xã An Hòa", province: 3, district: 75
	},
	{
		id: 30595, name: "Xã Cần Đăng", province: 3, district: 75
	},
	{
		id: 30598, name: "Xã Vĩnh Hanh", province: 3, district: 75
	},
	{
		id: 30601, name: "Xã Bình Thạnh", province: 3, district: 75
	},
	{
		id: 30604, name: "Xã Vĩnh Bình", province: 3, district: 75
	},
	{
		id: 30607, name: "Xã Bình Hòa", province: 3, district: 75
	},
	{
		id: 30610, name: "Xã Vĩnh An", province: 3, district: 75
	},
	{
		id: 30613, name: "Xã Hòa Bình Thạnh", province: 3, district: 75
	},
	{
		id: 30616, name: "Xã Vĩnh Lợi", province: 3, district: 75
	},
	{
		id: 30619, name: "Xã Vĩnh Nhuận", province: 3, district: 75
	},
	{
		id: 30622, name: "Xã Tân Phú", province: 3, district: 75
	},
	{
		id: 30625, name: "Xã Vĩnh Thành", province: 3, district: 75
	},
	{
		id: 30682, name: "Thị trấn Núi Sập", province: 3, district: 76
	},
	{
		id: 30685, name: "Thị trấn Phú Hoà", province: 3, district: 76
	},
	{
		id: 30688, name: "Thị trấn Óc Eo", province: 3, district: 76
	},
	{
		id: 30691, name: "Xã Tây Phú", province: 3, district: 76
	},
	{
		id: 30692, name: "Xã An Bình", province: 3, district: 76
	},
	{
		id: 30694, name: "Xã Vĩnh Phú", province: 3, district: 76
	},
	{
		id: 30697, name: "Xã Vĩnh Trạch", province: 3, district: 76
	},
	{
		id: 30700, name: "Xã Phú Thuận", province: 3, district: 76
	},
	{
		id: 30703, name: "Xã Vĩnh Chánh", province: 3, district: 76
	},
	{
		id: 30706, name: "Xã Định Mỹ", province: 3, district: 76
	},
	{
		id: 30709, name: "Xã Định Thành", province: 3, district: 76
	},
	{
		id: 30712, name: "Xã Mỹ Phú Đông", province: 3, district: 76
	},
	{
		id: 30715, name: "Xã Vọng Đông", province: 3, district: 76
	},
	{
		id: 30718, name: "Xã Vĩnh Khánh", province: 3, district: 76
	},
	{
		id: 30721, name: "Xã Thoại Giang", province: 3, district: 76
	},
	{
		id: 30724, name: "Xã Bình Thành", province: 3, district: 76
	},
	{
		id: 30727, name: "Xã Vọng Thê", province: 3, district: 76
	},
	{
		id: 1834, name: "Phường Nguyễn Thị Minh Khai", province: 5, district: 127
	},
	{
		id: 1837, name: "Phường Sông Cầu", province: 5, district: 127
	},
	{
		id: 1840, name: "Phường Đức Xuân", province: 5, district: 127
	},
	{
		id: 1843, name: "Phường Phùng Chí Kiên", province: 5, district: 127
	},
	{
		id: 1846, name: "Phường Huyền Tụng", province: 5, district: 127
	},
	{
		id: 1849, name: "Xã Dương Quang", province: 5, district: 127
	},
	{
		id: 1852, name: "Xã Nông Thượng", province: 5, district: 127
	},
	{
		id: 1855, name: "Phường Xuất Hoá", province: 5, district: 127
	},
	{
		id: 2020, name: "Thị trấn Bằng Lũng", province: 5, district: 128
	},
	{
		id: 2023, name: "Xã Xuân Lạc", province: 5, district: 128
	},
	{
		id: 2026, name: "Xã Nam Cường", province: 5, district: 128
	},
	{
		id: 2029, name: "Xã Đồng Lạc", province: 5, district: 128
	},
	{
		id: 2032, name: "Xã Tân Lập", province: 5, district: 128
	},
	{
		id: 2035, name: "Xã Bản Thi", province: 5, district: 128
	},
	{
		id: 2038, name: "Xã Quảng Bạch", province: 5, district: 128
	},
	{
		id: 2041, name: "Xã Bằng Phúc", province: 5, district: 128
	},
	{
		id: 2044, name: "Xã Yên Thịnh", province: 5, district: 128
	},
	{
		id: 2047, name: "Xã Yên Thượng", province: 5, district: 128
	},
	{
		id: 2050, name: "Xã Phương Viên", province: 5, district: 128
	},
	{
		id: 2053, name: "Xã Ngọc Phái", province: 5, district: 128
	},
	{
		id: 2056, name: "Xã Rã Bản", province: 5, district: 128
	},
	{
		id: 2059, name: "Xã Đông Viên", province: 5, district: 128
	},
	{
		id: 2062, name: "Xã Lương Bằng", province: 5, district: 128
	},
	{
		id: 2065, name: "Xã Bằng Lãng", province: 5, district: 128
	},
	{
		id: 2068, name: "Xã Đại Sảo", province: 5, district: 128
	},
	{
		id: 2071, name: "Xã Nghĩa Tá", province: 5, district: 128
	},
	{
		id: 2074, name: "Xã Phong Huân", province: 5, district: 128
	},
	{
		id: 2077, name: "Xã Yên Mỹ", province: 5, district: 128
	},
	{
		id: 2080, name: "Xã Bình Trung", province: 5, district: 128
	},
	{
		id: 2083, name: "Xã Yên Nhuận", province: 5, district: 128
	},
	{
		id: 1969, name: "Thị trấn Phủ Thông", province: 5, district: 129
	},
	{
		id: 1972, name: "Xã Phương Linh", province: 5, district: 129
	},
	{
		id: 1975, name: "Xã Vi Hương", province: 5, district: 129
	},
	{
		id: 1978, name: "Xã Sĩ Bình", province: 5, district: 129
	},
	{
		id: 1981, name: "Xã Vũ Muộn", province: 5, district: 129
	},
	{
		id: 1984, name: "Xã Đôn Phong", province: 5, district: 129
	},
	{
		id: 1987, name: "Xã Tú Trĩ", province: 5, district: 129
	},
	{
		id: 1990, name: "Xã Lục Bình", province: 5, district: 129
	},
	{
		id: 1993, name: "Xã Tân Tiến", province: 5, district: 129
	},
	{
		id: 1996, name: "Xã Quân Bình", province: 5, district: 129
	},
	{
		id: 1999, name: "Xã Nguyên Phúc", province: 5, district: 129
	},
	{
		id: 2002, name: "Xã Cao Sơn", province: 5, district: 129
	},
	{
		id: 2005, name: "Xã Hà Vị", province: 5, district: 129
	},
	{
		id: 2008, name: "Xã Cẩm Giàng", province: 5, district: 129
	},
	{
		id: 2011, name: "Xã Mỹ Thanh", province: 5, district: 129
	},
	{
		id: 2014, name: "Xã Dương Phong", province: 5, district: 129
	},
	{
		id: 2017, name: "Xã Quang Thuận", province: 5, district: 129
	},
	{
		id: 2134, name: "Thị trấn Yến Lạc", province: 5, district: 130
	},
	{
		id: 2137, name: "Xã Vũ Loan", province: 5, district: 130
	},
	{
		id: 2140, name: "Xã Lạng San", province: 5, district: 130
	},
	{
		id: 2143, name: "Xã Lương Thượng", province: 5, district: 130
	},
	{
		id: 2146, name: "Xã Kim Hỷ", province: 5, district: 130
	},
	{
		id: 2149, name: "Xã Văn Học", province: 5, district: 130
	},
	{
		id: 2152, name: "Xã Cường Lợi", province: 5, district: 130
	},
	{
		id: 2155, name: "Xã Lương Hạ", province: 5, district: 130
	},
	{
		id: 2158, name: "Xã Kim Lư", province: 5, district: 130
	},
	{
		id: 2161, name: "Xã Lương Thành", province: 5, district: 130
	},
	{
		id: 2164, name: "Xã Ân Tình", province: 5, district: 130
	},
	{
		id: 2167, name: "Xã Lam Sơn", province: 5, district: 130
	},
	{
		id: 2170, name: "Xã Văn Minh", province: 5, district: 130
	},
	{
		id: 2173, name: "Xã Côn Minh", province: 5, district: 130
	},
	{
		id: 2176, name: "Xã Cư Lễ", province: 5, district: 130
	},
	{
		id: 2179, name: "Xã Hữu Thác", province: 5, district: 130
	},
	{
		id: 2182, name: "Xã Hảo Nghĩa", province: 5, district: 130
	},
	{
		id: 2185, name: "Xã Quang Phong", province: 5, district: 130
	},
	{
		id: 2188, name: "Xã Dương Sơn", province: 5, district: 130
	},
	{
		id: 2191, name: "Xã Xuân Dương", province: 5, district: 130
	},
	{
		id: 2194, name: "Xã Đổng Xá", province: 5, district: 130
	},
	{
		id: 2197, name: "Xã Liêm Thuỷ", province: 5, district: 130
	},
	{
		id: 1936, name: "Thị trấn Nà Phặc", province: 5, district: 131
	},
	{
		id: 1939, name: "Xã Thượng Ân", province: 5, district: 131
	},
	{
		id: 1942, name: "Xã Bằng Vân", province: 5, district: 131
	},
	{
		id: 1945, name: "Xã Cốc Đán", province: 5, district: 131
	},
	{
		id: 1948, name: "Xã Trung Hoà", province: 5, district: 131
	},
	{
		id: 1951, name: "Xã Đức Vân", province: 5, district: 131
	},
	{
		id: 1954, name: "Xã Vân Tùng", province: 5, district: 131
	},
	{
		id: 1957, name: "Xã Thượng Quan", province: 5, district: 131
	},
	{
		id: 1960, name: "Xã Lãng Ngâm", province: 5, district: 131
	},
	{
		id: 1963, name: "Xã Thuần Mang", province: 5, district: 131
	},
	{
		id: 1966, name: "Xã Hương Nê", province: 5, district: 131
	},
	{
		id: 1888, name: "Thị trấn Chợ Rã", province: 5, district: 132
	},
	{
		id: 1891, name: "Xã Bành Trạch", province: 5, district: 132
	},
	{
		id: 1894, name: "Xã Phúc Lộc", province: 5, district: 132
	},
	{
		id: 1897, name: "Xã Hà Hiệu", province: 5, district: 132
	},
	{
		id: 1900, name: "Xã Cao Thượng", province: 5, district: 132
	},
	{
		id: 1903, name: "Xã Cao Trĩ", province: 5, district: 132
	},
	{
		id: 1906, name: "Xã Khang Ninh", province: 5, district: 132
	},
	{
		id: 1909, name: "Xã Nam Mẫu", province: 5, district: 132
	},
	{
		id: 1912, name: "Xã Thượng Giáo", province: 5, district: 132
	},
	{
		id: 1915, name: "Xã Địa Linh", province: 5, district: 132
	},
	{
		id: 1918, name: "Xã Yến Dương", province: 5, district: 132
	},
	{
		id: 1921, name: "Xã Chu Hương", province: 5, district: 132
	},
	{
		id: 1924, name: "Xã Quảng Khê", province: 5, district: 132
	},
	{
		id: 1927, name: "Xã Mỹ Phương", province: 5, district: 132
	},
	{
		id: 1930, name: "Xã Hoàng Trĩ", province: 5, district: 132
	},
	{
		id: 1933, name: "Xã Đồng Phúc", province: 5, district: 132
	},
	{
		id: 2086, name: "Thị trấn Chợ Mới", province: 5, district: 133
	},
	{
		id: 2089, name: "Xã Tân Sơn", province: 5, district: 133
	},
	{
		id: 2092, name: "Xã Thanh Vận", province: 5, district: 133
	},
	{
		id: 2095, name: "Xã Mai Lạp", province: 5, district: 133
	},
	{
		id: 2098, name: "Xã Hoà Mục", province: 5, district: 133
	},
	{
		id: 2101, name: "Xã Thanh Mai", province: 5, district: 133
	},
	{
		id: 2104, name: "Xã Cao Kỳ", province: 5, district: 133
	},
	{
		id: 2107, name: "Xã Nông Hạ", province: 5, district: 133
	},
	{
		id: 2110, name: "Xã Yên Cư", province: 5, district: 133
	},
	{
		id: 2113, name: "Xã Nông Thịnh", province: 5, district: 133
	},
	{
		id: 2116, name: "Xã Yên Hân", province: 5, district: 133
	},
	{
		id: 2119, name: "Xã Thanh Bình", province: 5, district: 133
	},
	{
		id: 2122, name: "Xã Như Cố", province: 5, district: 133
	},
	{
		id: 2125, name: "Xã Bình Văn", province: 5, district: 133
	},
	{
		id: 2128, name: "Xã Yên Đĩnh", province: 5, district: 133
	},
	{
		id: 2131, name: "Xã Quảng Chu", province: 5, district: 133
	},
	{
		id: 1858, name: "Xã Bằng Thành", province: 5, district: 134
	},
	{
		id: 1861, name: "Xã Nhạn Môn", province: 5, district: 134
	},
	{
		id: 1864, name: "Xã Bộc Bố", province: 5, district: 134
	},
	{
		id: 1867, name: "Xã Công Bằng", province: 5, district: 134
	},
	{
		id: 1870, name: "Xã Giáo Hiệu", province: 5, district: 134
	},
	{
		id: 1873, name: "Xã Xuân La", province: 5, district: 134
	},
	{
		id: 1876, name: "Xã An Thắng", province: 5, district: 134
	},
	{
		id: 1879, name: "Xã Cổ Linh", province: 5, district: 134
	},
	{
		id: 1882, name: "Xã Nghiên Loan", province: 5, district: 134
	},
	{
		id: 1885, name: "Xã Cao Tân", province: 5, district: 134
	},
	{
		id: 7201, name: "Phường Thọ Xương", province: 6, district: 135
	},
	{
		id: 7204, name: "Phường Trần Nguyên Hãn", province: 6, district: 135
	},
	{
		id: 7207, name: "Phường Ngô Quyền", province: 6, district: 135
	},
	{
		id: 7210, name: "Phường Hoàng Văn Thụ", province: 6, district: 135
	},
	{
		id: 7213, name: "Phường Trần Phú", province: 6, district: 135
	},
	{
		id: 7216, name: "Phường Mỹ Độ", province: 6, district: 135
	},
	{
		id: 7219, name: "Phường Lê Lợi", province: 6, district: 135
	},
	{
		id: 7222, name: "Xã Song Mai", province: 6, district: 135
	},
	{
		id: 7225, name: "Phường Xương Giang", province: 6, district: 135
	},
	{
		id: 7228, name: "Phường Đa Mai", province: 6, district: 135
	},
	{
		id: 7231, name: "Phường Dĩnh Kế", province: 6, district: 135
	},
	{
		id: 7441, name: "Xã Dĩnh Trì", province: 6, district: 135
	},
	{
		id: 7687, name: "Xã Tân Mỹ", province: 6, district: 135
	},
	{
		id: 7696, name: "Xã Đồng Sơn", province: 6, district: 135
	},
	{
		id: 7699, name: "Xã Tân Tiến", province: 6, district: 135
	},
	{
		id: 7705, name: "Xã Song Khê", province: 6, district: 135
	},
	{
		id: 7234, name: "Thị trấn Cầu Gồ", province: 6, district: 136
	},
	{
		id: 7237, name: "Thị trấn Bố Hạ", province: 6, district: 136
	},
	{
		id: 7243, name: "Xã Đồng Tiến", province: 6, district: 136
	},
	{
		id: 7246, name: "Xã Canh Nậu", province: 6, district: 136
	},
	{
		id: 7249, name: "Xã Xuân Lương", province: 6, district: 136
	},
	{
		id: 7252, name: "Xã Tam Tiến", province: 6, district: 136
	},
	{
		id: 7255, name: "Xã Đồng Vương", province: 6, district: 136
	},
	{
		id: 7258, name: "Xã Đồng Hưu", province: 6, district: 136
	},
	{
		id: 7260, name: "Xã Đồng Tâm", province: 6, district: 136
	},
	{
		id: 7261, name: "Xã Tam Hiệp", province: 6, district: 136
	},
	{
		id: 7264, name: "Xã Tiến Thắng", province: 6, district: 136
	},
	{
		id: 7267, name: "Xã Hồng Kỳ", province: 6, district: 136
	},
	{
		id: 7270, name: "Xã Đồng Lạc", province: 6, district: 136
	},
	{
		id: 7273, name: "Xã Đông Sơn", province: 6, district: 136
	},
	{
		id: 7276, name: "Xã Tân Hiệp", province: 6, district: 136
	},
	{
		id: 7279, name: "Xã Hương Vĩ", province: 6, district: 136
	},
	{
		id: 7282, name: "Xã Đồng Kỳ", province: 6, district: 136
	},
	{
		id: 7285, name: "Xã An Thượng", province: 6, district: 136
	},
	{
		id: 7288, name: "Xã Phồn Xương", province: 6, district: 136
	},
	{
		id: 7291, name: "Xã Tân Sỏi", province: 6, district: 136
	},
	{
		id: 7294, name: "Xã Bố Hạ", province: 6, district: 136
	},
	{
		id: 7615, name: "Thị trấn An Châu", province: 6, district: 137
	},
	{
		id: 7616, name: "Thị trấn Thanh Sơn", province: 6, district: 137
	},
	{
		id: 7618, name: "Xã Thạch Sơn", province: 6, district: 137
	},
	{
		id: 7621, name: "Xã Vân Sơn", province: 6, district: 137
	},
	{
		id: 7624, name: "Xã Hữu Sản", province: 6, district: 137
	},
	{
		id: 7627, name: "Xã Quế Sơn", province: 6, district: 137
	},
	{
		id: 7630, name: "Xã Phúc Thắng", province: 6, district: 137
	},
	{
		id: 7633, name: "Xã Chiên Sơn", province: 6, district: 137
	},
	{
		id: 7636, name: "Xã Giáo Liêm", province: 6, district: 137
	},
	{
		id: 7639, name: "Xã Vĩnh Khương", province: 6, district: 137
	},
	{
		id: 7642, name: "Xã Cẩm Đàn", province: 6, district: 137
	},
	{
		id: 7645, name: "Xã An Lạc", province: 6, district: 137
	},
	{
		id: 7648, name: "Xã An Lập", province: 6, district: 137
	},
	{
		id: 7651, name: "Xã Yên Định", province: 6, district: 137
	},
	{
		id: 7654, name: "Xã Lệ Viễn", province: 6, district: 137
	},
	{
		id: 7657, name: "Xã An Châu", province: 6, district: 137
	},
	{
		id: 7660, name: "Xã An Bá", province: 6, district: 137
	},
	{
		id: 7663, name: "Xã Tuấn Đạo", province: 6, district: 137
	},
	{
		id: 7666, name: "Xã Dương Hưu", province: 6, district: 137
	},
	{
		id: 7669, name: "Xã Bồng Am", province: 6, district: 137
	},
	{
		id: 7672, name: "Xã Long Sơn", province: 6, district: 137
	},
	{
		id: 7675, name: "Xã Tuấn Mậu", province: 6, district: 137
	},
	{
		id: 7678, name: "Xã Thanh Luận", province: 6, district: 137
	},
	{
		id: 7525, name: "Thị trấn Chũ", province: 6, district: 138
	},
	{
		id: 7528, name: "Xã Cấm Sơn", province: 6, district: 138
	},
	{
		id: 7531, name: "Xã Tân Sơn", province: 6, district: 138
	},
	{
		id: 7534, name: "Xã Phong Minh", province: 6, district: 138
	},
	{
		id: 7537, name: "Xã Phong Vân", province: 6, district: 138
	},
	{
		id: 7540, name: "Xã Xa Lý", province: 6, district: 138
	},
	{
		id: 7543, name: "Xã Hộ Đáp", province: 6, district: 138
	},
	{
		id: 7546, name: "Xã Sơn Hải", province: 6, district: 138
	},
	{
		id: 7549, name: "Xã Thanh Hải", province: 6, district: 138
	},
	{
		id: 7552, name: "Xã Kiên Lao", province: 6, district: 138
	},
	{
		id: 7555, name: "Xã Biên Sơn", province: 6, district: 138
	},
	{
		id: 7558, name: "Xã Kiên Thành", province: 6, district: 138
	},
	{
		id: 7561, name: "Xã Hồng Giang", province: 6, district: 138
	},
	{
		id: 7564, name: "Xã Kim Sơn", province: 6, district: 138
	},
	{
		id: 7567, name: "Xã Tân Hoa", province: 6, district: 138
	},
	{
		id: 7570, name: "Xã Giáp Sơn", province: 6, district: 138
	},
	{
		id: 7573, name: "Xã Biển Động", province: 6, district: 138
	},
	{
		id: 7576, name: "Xã Quý Sơn", province: 6, district: 138
	},
	{
		id: 7579, name: "Xã Trù Hựu", province: 6, district: 138
	},
	{
		id: 7582, name: "Xã Phì Điền", province: 6, district: 138
	},
	{
		id: 7585, name: "Xã Nghĩa Hồ", province: 6, district: 138
	},
	{
		id: 7588, name: "Xã Tân Quang", province: 6, district: 138
	},
	{
		id: 7591, name: "Xã Đồng Cốc", province: 6, district: 138
	},
	{
		id: 7594, name: "Xã Tân Lập", province: 6, district: 138
	},
	{
		id: 7597, name: "Xã Phú Nhuận", province: 6, district: 138
	},
	{
		id: 7600, name: "Xã Mỹ An", province: 6, district: 138
	},
	{
		id: 7603, name: "Xã Nam Dương", province: 6, district: 138
	},
	{
		id: 7606, name: "Xã Tân Mộc", province: 6, district: 138
	},
	{
		id: 7609, name: "Xã Đèo Gia", province: 6, district: 138
	},
	{
		id: 7612, name: "Xã Phượng Sơn", province: 6, district: 138
	},
	{
		id: 7444, name: "Thị trấn Đồi Ngô", province: 6, district: 139
	},
	{
		id: 7447, name: "Thị trấn Lục Nam", province: 6, district: 139
	},
	{
		id: 7450, name: "Xã Đông Hưng", province: 6, district: 139
	},
	{
		id: 7453, name: "Xã Đông Phú", province: 6, district: 139
	},
	{
		id: 7456, name: "Xã Tam Dị", province: 6, district: 139
	},
	{
		id: 7459, name: "Xã Bảo Sơn", province: 6, district: 139
	},
	{
		id: 7462, name: "Xã Bảo Đài", province: 6, district: 139
	},
	{
		id: 7465, name: "Xã Thanh Lâm", province: 6, district: 139
	},
	{
		id: 7468, name: "Xã Tiên Nha", province: 6, district: 139
	},
	{
		id: 7471, name: "Xã Trường Giang", province: 6, district: 139
	},
	{
		id: 7474, name: "Xã Tiên Hưng", province: 6, district: 139
	},
	{
		id: 7477, name: "Xã Phương Sơn", province: 6, district: 139
	},
	{
		id: 7480, name: "Xã Chu Điện", province: 6, district: 139
	},
	{
		id: 7483, name: "Xã Cương Sơn", province: 6, district: 139
	},
	{
		id: 7486, name: "Xã Nghĩa Phương", province: 6, district: 139
	},
	{
		id: 7489, name: "Xã Vô Tranh", province: 6, district: 139
	},
	{
		id: 7492, name: "Xã Bình Sơn", province: 6, district: 139
	},
	{
		id: 7495, name: "Xã Lan Mẫu", province: 6, district: 139
	},
	{
		id: 7498, name: "Xã Yên Sơn", province: 6, district: 139
	},
	{
		id: 7501, name: "Xã Khám Lạng", province: 6, district: 139
	},
	{
		id: 7504, name: "Xã Huyền Sơn", province: 6, district: 139
	},
	{
		id: 7507, name: "Xã Trường Sơn", province: 6, district: 139
	},
	{
		id: 7510, name: "Xã Lục Sơn", province: 6, district: 139
	},
	{
		id: 7513, name: "Xã Bắc Lũng", province: 6, district: 139
	},
	{
		id: 7516, name: "Xã Vũ Xá", province: 6, district: 139
	},
	{
		id: 7519, name: "Xã Cẩm Lý", province: 6, district: 139
	},
	{
		id: 7522, name: "Xã Đan Hội", province: 6, district: 139
	},
	{
		id: 7297, name: "Thị trấn Cao Thượng", province: 6, district: 140
	},
	{
		id: 7300, name: "Thị trấn Nhã Nam", province: 6, district: 140
	},
	{
		id: 7303, name: "Xã Lan Giới", province: 6, district: 140
	},
	{
		id: 7306, name: "Xã Nhã Nam", province: 6, district: 140
	},
	{
		id: 7309, name: "Xã Tân Trung", province: 6, district: 140
	},
	{
		id: 7312, name: "Xã Đại Hóa", province: 6, district: 140
	},
	{
		id: 7315, name: "Xã Quang Tiến", province: 6, district: 140
	},
	{
		id: 7318, name: "Xã Phúc Sơn", province: 6, district: 140
	},
	{
		id: 7321, name: "Xã An Dương", province: 6, district: 140
	},
	{
		id: 7324, name: "Xã Phúc Hòa", province: 6, district: 140
	},
	{
		id: 7327, name: "Xã Liên Sơn", province: 6, district: 140
	},
	{
		id: 7330, name: "Xã Hợp Đức", province: 6, district: 140
	},
	{
		id: 7333, name: "Xã Lam Cốt", province: 6, district: 140
	},
	{
		id: 7336, name: "Xã Cao Xá", province: 6, district: 140
	},
	{
		id: 7339, name: "Xã Cao Thượng", province: 6, district: 140
	},
	{
		id: 7342, name: "Xã Việt Ngọc", province: 6, district: 140
	},
	{
		id: 7345, name: "Xã Song Vân", province: 6, district: 140
	},
	{
		id: 7348, name: "Xã Ngọc Châu", province: 6, district: 140
	},
	{
		id: 7351, name: "Xã Ngọc Vân", province: 6, district: 140
	},
	{
		id: 7354, name: "Xã Việt Lập", province: 6, district: 140
	},
	{
		id: 7357, name: "Xã Liên Chung", province: 6, district: 140
	},
	{
		id: 7360, name: "Xã Ngọc Thiện", province: 6, district: 140
	},
	{
		id: 7363, name: "Xã Ngọc Lý", province: 6, district: 140
	},
	{
		id: 7366, name: "Xã Quế Nham", province: 6, district: 140
	},
	{
		id: 7810, name: "Thị trấn Thắng", province: 6, district: 141
	},
	{
		id: 7813, name: "Xã Đồng Tân", province: 6, district: 141
	},
	{
		id: 7816, name: "Xã Thanh Vân", province: 6, district: 141
	},
	{
		id: 7819, name: "Xã Hoàng Lương", province: 6, district: 141
	},
	{
		id: 7822, name: "Xã Hoàng Vân", province: 6, district: 141
	},
	{
		id: 7825, name: "Xã Hoàng Thanh", province: 6, district: 141
	},
	{
		id: 7828, name: "Xã Hoàng An", province: 6, district: 141
	},
	{
		id: 7831, name: "Xã Ngọc Sơn", province: 6, district: 141
	},
	{
		id: 7834, name: "Xã Thái Sơn", province: 6, district: 141
	},
	{
		id: 7837, name: "Xã Hòa Sơn", province: 6, district: 141
	},
	{
		id: 7840, name: "Xã Đức Thắng", province: 6, district: 141
	},
	{
		id: 7843, name: "Xã Quang Minh", province: 6, district: 141
	},
	{
		id: 7846, name: "Xã Lương Phong", province: 6, district: 141
	},
	{
		id: 7849, name: "Xã Hùng Sơn", province: 6, district: 141
	},
	{
		id: 7852, name: "Xã Đại Thành", province: 6, district: 141
	},
	{
		id: 7855, name: "Xã Thường Thắng", province: 6, district: 141
	},
	{
		id: 7858, name: "Xã Hợp Thịnh", province: 6, district: 141
	},
	{
		id: 7861, name: "Xã Danh Thắng", province: 6, district: 141
	},
	{
		id: 7864, name: "Xã Mai Trung", province: 6, district: 141
	},
	{
		id: 7867, name: "Xã Đoan Bái", province: 6, district: 141
	},
	{
		id: 7870, name: "Xã Bắc Lý", province: 6, district: 141
	},
	{
		id: 7873, name: "Xã Xuân Cẩm", province: 6, district: 141
	},
	{
		id: 7876, name: "Xã Hương Lâm", province: 6, district: 141
	},
	{
		id: 7879, name: "Xã Đông Lỗ", province: 6, district: 141
	},
	{
		id: 7882, name: "Xã Châu Minh", province: 6, district: 141
	},
	{
		id: 7885, name: "Xã Mai Đình", province: 6, district: 141
	},
	{
		id: 7369, name: "Thị trấn Kép", province: 6, district: 142
	},
	{
		id: 7375, name: "Thị trấn Vôi", province: 6, district: 142
	},
	{
		id: 7378, name: "Xã Nghĩa Hòa", province: 6, district: 142
	},
	{
		id: 7381, name: "Xã Nghĩa Hưng", province: 6, district: 142
	},
	{
		id: 7384, name: "Xã Quang Thịnh", province: 6, district: 142
	},
	{
		id: 7387, name: "Xã Hương Sơn", province: 6, district: 142
	},
	{
		id: 7390, name: "Xã Đào Mỹ", province: 6, district: 142
	},
	{
		id: 7393, name: "Xã Tiên Lục", province: 6, district: 142
	},
	{
		id: 7396, name: "Xã An Hà", province: 6, district: 142
	},
	{
		id: 7399, name: "Xã Tân Thịnh", province: 6, district: 142
	},
	{
		id: 7402, name: "Xã Mỹ Hà", province: 6, district: 142
	},
	{
		id: 7405, name: "Xã Hương Lạc", province: 6, district: 142
	},
	{
		id: 7408, name: "Xã Dương Đức", province: 6, district: 142
	},
	{
		id: 7411, name: "Xã Tân Thanh", province: 6, district: 142
	},
	{
		id: 7414, name: "Xã Yên Mỹ", province: 6, district: 142
	},
	{
		id: 7417, name: "Xã Tân Hưng", province: 6, district: 142
	},
	{
		id: 7420, name: "Xã Mỹ Thái", province: 6, district: 142
	},
	{
		id: 7423, name: "Xã Phi Mô", province: 6, district: 142
	},
	{
		id: 7426, name: "Xã Xương Lâm", province: 6, district: 142
	},
	{
		id: 7429, name: "Xã Xuân Hương", province: 6, district: 142
	},
	{
		id: 7432, name: "Xã Tân Dĩnh", province: 6, district: 142
	},
	{
		id: 7435, name: "Xã Đại Lâm", province: 6, district: 142
	},
	{
		id: 7438, name: "Xã Thái Đào", province: 6, district: 142
	},
	{
		id: 7753, name: "Thị trấn Bích Động", province: 6, district: 143
	},
	{
		id: 7756, name: "Thị trấn Nếnh", province: 6, district: 143
	},
	{
		id: 7759, name: "Xã Thượng Lan", province: 6, district: 143
	},
	{
		id: 7762, name: "Xã Việt Tiến", province: 6, district: 143
	},
	{
		id: 7765, name: "Xã Nghĩa Trung", province: 6, district: 143
	},
	{
		id: 7768, name: "Xã Minh Đức", province: 6, district: 143
	},
	{
		id: 7771, name: "Xã Hương Mai", province: 6, district: 143
	},
	{
		id: 7774, name: "Xã Tự Lạn", province: 6, district: 143
	},
	{
		id: 7777, name: "Xã Bích Sơn", province: 6, district: 143
	},
	{
		id: 7780, name: "Xã Trung Sơn", province: 6, district: 143
	},
	{
		id: 7783, name: "Xã Hồng Thái", province: 6, district: 143
	},
	{
		id: 7786, name: "Xã Tiên Sơn", province: 6, district: 143
	},
	{
		id: 7789, name: "Xã Tăng Tiến", province: 6, district: 143
	},
	{
		id: 7792, name: "Xã Quảng Minh", province: 6, district: 143
	},
	{
		id: 7795, name: "Xã Hoàng Ninh", province: 6, district: 143
	},
	{
		id: 7798, name: "Xã Ninh Sơn", province: 6, district: 143
	},
	{
		id: 7801, name: "Xã Vân Trung", province: 6, district: 143
	},
	{
		id: 7804, name: "Xã Vân Hà", province: 6, district: 143
	},
	{
		id: 7807, name: "Xã Quang Châu", province: 6, district: 143
	},
	{
		id: 7681, name: "Thị trấn Neo", province: 6, district: 144
	},
	{
		id: 7682, name: "Thị trấn Tân Dân", province: 6, district: 144
	},
	{
		id: 7684, name: "Xã Lão Hộ", province: 6, district: 144
	},
	{
		id: 7690, name: "Xã Hương Gián", province: 6, district: 144
	},
	{
		id: 7693, name: "Xã Tân An", province: 6, district: 144
	},
	{
		id: 7702, name: "Xã Quỳnh Sơn", province: 6, district: 144
	},
	{
		id: 7708, name: "Xã Nội Hoàng", province: 6, district: 144
	},
	{
		id: 7711, name: "Xã Tiền Phong", province: 6, district: 144
	},
	{
		id: 7714, name: "Xã Xuân Phú", province: 6, district: 144
	},
	{
		id: 7717, name: "Xã Tân Liễu", province: 6, district: 144
	},
	{
		id: 7720, name: "Xã Trí Yên", province: 6, district: 144
	},
	{
		id: 7723, name: "Xã Lãng Sơn", province: 6, district: 144
	},
	{
		id: 7726, name: "Xã Yên Lư", province: 6, district: 144
	},
	{
		id: 7729, name: "Xã Tiến Dũng", province: 6, district: 144
	},
	{
		id: 7732, name: "Xã Nham Sơn", province: 6, district: 144
	},
	{
		id: 7735, name: "Xã Đức Giang", province: 6, district: 144
	},
	{
		id: 7738, name: "Xã Cảnh Thụy", province: 6, district: 144
	},
	{
		id: 7741, name: "Xã Tư Mại", province: 6, district: 144
	},
	{
		id: 7744, name: "Xã Thắng Cương", province: 6, district: 144
	},
	{
		id: 7747, name: "Xã Đồng Việt", province: 6, district: 144
	},
	{
		id: 7750, name: "Xã Đồng Phúc", province: 6, district: 144
	},
	{
		id: 31813, name: "Phường 2", province: 7, district: 121
	},
	{
		id: 31816, name: "Phường 3", province: 7, district: 121
	},
	{
		id: 31819, name: "Phường 5", province: 7, district: 121
	},
	{
		id: 31822, name: "Phường 7", province: 7, district: 121
	},
	{
		id: 31825, name: "Phường 1", province: 7, district: 121
	},
	{
		id: 31828, name: "Phường 8", province: 7, district: 121
	},
	{
		id: 31831, name: "Phường Nhà Mát", province: 7, district: 121
	},
	{
		id: 31834, name: "Xã Vĩnh Trạch", province: 7, district: 121
	},
	{
		id: 31837, name: "Xã Vĩnh Trạch Đông", province: 7, district: 121
	},
	{
		id: 31840, name: "Xã Hiệp Thành", province: 7, district: 121
	},
	{
		id: 31894, name: "Xã Vĩnh Hưng", province: 7, district: 122
	},
	{
		id: 31897, name: "Xã Vĩnh Hưng A", province: 7, district: 122
	},
	{
		id: 31900, name: "Thị trấn Châu Hưng", province: 7, district: 122
	},
	{
		id: 31903, name: "Xã Châu Hưng A", province: 7, district: 122
	},
	{
		id: 31906, name: "Xã Hưng Thành", province: 7, district: 122
	},
	{
		id: 31909, name: "Xã Hưng Hội", province: 7, district: 122
	},
	{
		id: 31912, name: "Xã Châu Thới", province: 7, district: 122
	},
	{
		id: 31921, name: "Xã Long Thạnh", province: 7, district: 122
	},
	{
		id: 31843, name: "Thị trấn Ngan Dừa", province: 7, district: 123
	},
	{
		id: 31846, name: "Xã Ninh Quới", province: 7, district: 123
	},
	{
		id: 31849, name: "Xã Ninh Quới A", province: 7, district: 123
	},
	{
		id: 31852, name: "Xã Ninh Hòa", province: 7, district: 123
	},
	{
		id: 31855, name: "Xã Lộc Ninh", province: 7, district: 123
	},
	{
		id: 31858, name: "Xã Vĩnh Lộc", province: 7, district: 123
	},
	{
		id: 31861, name: "Xã Vĩnh Lộc A", province: 7, district: 123
	},
	{
		id: 31863, name: "Xã Ninh Thạnh Lợi A", province: 7, district: 123
	},
	{
		id: 31864, name: "Xã Ninh Thạnh Lợi", province: 7, district: 123
	},
	{
		id: 31942, name: "Phường 1", province: 7, district: 124
	},
	{
		id: 31945, name: "Phường Hộ Phòng", province: 7, district: 124
	},
	{
		id: 31948, name: "Xã Phong Thạnh Đông", province: 7, district: 124
	},
	{
		id: 31951, name: "Phường Láng Tròn", province: 7, district: 124
	},
	{
		id: 31954, name: "Xã Phong Tân", province: 7, district: 124
	},
	{
		id: 31957, name: "Xã Tân Phong", province: 7, district: 124
	},
	{
		id: 31960, name: "Xã Phong Thạnh", province: 7, district: 124
	},
	{
		id: 31963, name: "Xã Phong Thạnh A", province: 7, district: 124
	},
	{
		id: 31966, name: "Xã Phong Thạnh Tây", province: 7, district: 124
	},
	{
		id: 31969, name: "Xã Tân Thạnh", province: 7, district: 124
	},
	{
		id: 31867, name: "Thị trấn Phước Long", province: 7, district: 125
	},
	{
		id: 31870, name: "Xã Vĩnh Phú Đông", province: 7, district: 125
	},
	{
		id: 31873, name: "Xã Vĩnh Phú Tây", province: 7, district: 125
	},
	{
		id: 31876, name: "Xã Phước Long", province: 7, district: 125
	},
	{
		id: 31879, name: "Xã Hưng Phú", province: 7, district: 125
	},
	{
		id: 31882, name: "Xã Vĩnh Thanh", province: 7, district: 125
	},
	{
		id: 31885, name: "Xã Phong Thạnh Tây A", province: 7, district: 125
	},
	{
		id: 31888, name: "Xã Phong Thạnh Tây B", province: 7, district: 125
	},
	{
		id: 31972, name: "Thị trấn Gành Hào", province: 7, district: 126
	},
	{
		id: 31975, name: "Xã Long Điền Đông", province: 7, district: 126
	},
	{
		id: 31978, name: "Xã Long Điền Đông A", province: 7, district: 126
	},
	{
		id: 31981, name: "Xã Long Điền", province: 7, district: 126
	},
	{
		id: 31984, name: "Xã Long Điền Tây", province: 7, district: 126
	},
	{
		id: 31985, name: "Xã Điền Hải", province: 7, district: 126
	},
	{
		id: 31987, name: "Xã An Trạch", province: 7, district: 126
	},
	{
		id: 31988, name: "Xã An Trạch A", province: 7, district: 126
	},
	{
		id: 31990, name: "Xã An Phúc", province: 7, district: 126
	},
	{
		id: 31993, name: "Xã Định Thành", province: 7, district: 126
	},
	{
		id: 31996, name: "Xã Định Thành A", province: 7, district: 126
	},
	{
		id: 31891, name: "Thị trấn Hòa Bình", province: 7, district: 721
	},
	{
		id: 31915, name: "Xã Minh Diệu", province: 7, district: 721
	},
	{
		id: 31918, name: "Xã Vĩnh Bình", province: 7, district: 721
	},
	{
		id: 31924, name: "Xã Vĩnh Mỹ B", province: 7, district: 721
	},
	{
		id: 31927, name: "Xã Vĩnh Hậu", province: 7, district: 721
	},
	{
		id: 31930, name: "Xã Vĩnh Hậu A", province: 7, district: 721
	},
	{
		id: 31933, name: "Xã Vĩnh Mỹ A", province: 7, district: 721
	},
	{
		id: 31936, name: "Xã Vĩnh Thịnh", province: 7, district: 721
	},
	{
		id: 9163, name: "Phường Vũ Ninh", province: 8, district: 145
	},
	{
		id: 9166, name: "Phường Đáp Cầu", province: 8, district: 145
	},
	{
		id: 9169, name: "Phường Thị Cầu", province: 8, district: 145
	},
	{
		id: 9172, name: "Phường Kinh Bắc", province: 8, district: 145
	},
	{
		id: 9175, name: "Phường Vệ An", province: 8, district: 145
	},
	{
		id: 9178, name: "Phường Tiền An", province: 8, district: 145
	},
	{
		id: 9181, name: "Phường Đại Phúc", province: 8, district: 145
	},
	{
		id: 9184, name: "Phường Ninh Xá", province: 8, district: 145
	},
	{
		id: 9187, name: "Phường Suối Hoa", province: 8, district: 145
	},
	{
		id: 9190, name: "Phường Võ Cường", province: 8, district: 145
	},
	{
		id: 9214, name: "Xã Hòa Long", province: 8, district: 145
	},
	{
		id: 9226, name: "Phường Vạn An", province: 8, district: 145
	},
	{
		id: 9235, name: "Phường Khúc Xuyên", province: 8, district: 145
	},
	{
		id: 9244, name: "Phường Phong Khê", province: 8, district: 145
	},
	{
		id: 9256, name: "Xã Kim Chân", province: 8, district: 145
	},
	{
		id: 9271, name: "Phường Vân Dương", province: 8, district: 145
	},
	{
		id: 9286, name: "Xã Nam Sơn", province: 8, district: 145
	},
	{
		id: 9325, name: "Phường Khắc Niệm", province: 8, district: 145
	},
	{
		id: 9331, name: "Phường Hạp Lĩnh", province: 8, district: 145
	},
	{
		id: 9193, name: "Thị trấn Chờ", province: 8, district: 146
	},
	{
		id: 9196, name: "Xã Dũng Liệt", province: 8, district: 146
	},
	{
		id: 9199, name: "Xã Tam Đa", province: 8, district: 146
	},
	{
		id: 9202, name: "Xã Tam Giang", province: 8, district: 146
	},
	{
		id: 9205, name: "Xã Yên Trung", province: 8, district: 146
	},
	{
		id: 9208, name: "Xã Thụy Hòa", province: 8, district: 146
	},
	{
		id: 9211, name: "Xã Hòa Tiến", province: 8, district: 146
	},
	{
		id: 9217, name: "Xã Đông Tiến", province: 8, district: 146
	},
	{
		id: 9220, name: "Xã Yên Phụ", province: 8, district: 146
	},
	{
		id: 9223, name: "Xã Trung Nghĩa", province: 8, district: 146
	},
	{
		id: 9229, name: "Xã Đông Phong", province: 8, district: 146
	},
	{
		id: 9232, name: "Xã Long Châu", province: 8, district: 146
	},
	{
		id: 9238, name: "Xã Văn Môn", province: 8, district: 146
	},
	{
		id: 9241, name: "Xã Đông Thọ", province: 8, district: 146
	},
	{
		id: 9319, name: "Thị trấn Lim", province: 8, district: 147
	},
	{
		id: 9322, name: "Xã Phú Lâm", province: 8, district: 147
	},
	{
		id: 9328, name: "Xã Nội Duệ", province: 8, district: 147
	},
	{
		id: 9334, name: "Xã Liên Bão", province: 8, district: 147
	},
	{
		id: 9337, name: "Xã Hiên Vân", province: 8, district: 147
	},
	{
		id: 9340, name: "Xã Hoàn Sơn", province: 8, district: 147
	},
	{
		id: 9343, name: "Xã Lạc Vệ", province: 8, district: 147
	},
	{
		id: 9346, name: "Xã Việt Đoàn", province: 8, district: 147
	},
	{
		id: 9349, name: "Xã Phật Tích", province: 8, district: 147
	},
	{
		id: 9352, name: "Xã Tân Chi", province: 8, district: 147
	},
	{
		id: 9355, name: "Xã Đại Đồng", province: 8, district: 147
	},
	{
		id: 9358, name: "Xã Tri Phương", province: 8, district: 147
	},
	{
		id: 9361, name: "Xã Minh Đạo", province: 8, district: 147
	},
	{
		id: 9364, name: "Xã Cảnh Hưng", province: 8, district: 147
	},
	{
		id: 9247, name: "Thị trấn Phố Mới", province: 8, district: 148
	},
	{
		id: 9250, name: "Xã Việt Thống", province: 8, district: 148
	},
	{
		id: 9253, name: "Xã Đại Xuân", province: 8, district: 148
	},
	{
		id: 9259, name: "Xã Nhân Hòa", province: 8, district: 148
	},
	{
		id: 9262, name: "Xã Bằng An", province: 8, district: 148
	},
	{
		id: 9265, name: "Xã Phương Liễu", province: 8, district: 148
	},
	{
		id: 9268, name: "Xã Quế Tân", province: 8, district: 148
	},
	{
		id: 9274, name: "Xã Phù Lương", province: 8, district: 148
	},
	{
		id: 9277, name: "Xã Phù Lãng", province: 8, district: 148
	},
	{
		id: 9280, name: "Xã Phượng Mao", province: 8, district: 148
	},
	{
		id: 9283, name: "Xã Việt Hùng", province: 8, district: 148
	},
	{
		id: 9289, name: "Xã Ngọc Xá", province: 8, district: 148
	},
	{
		id: 9292, name: "Xã Châu Phong", province: 8, district: 148
	},
	{
		id: 9295, name: "Xã Bồng Lai", province: 8, district: 148
	},
	{
		id: 9298, name: "Xã Cách Bi", province: 8, district: 148
	},
	{
		id: 9301, name: "Xã Đào Viên", province: 8, district: 148
	},
	{
		id: 9304, name: "Xã Yên Giả", province: 8, district: 148
	},
	{
		id: 9307, name: "Xã Mộ Đạo", province: 8, district: 148
	},
	{
		id: 9310, name: "Xã Đức Long", province: 8, district: 148
	},
	{
		id: 9313, name: "Xã Chi Lăng", province: 8, district: 148
	},
	{
		id: 9316, name: "Xã Hán Quảng", province: 8, district: 148
	},
	{
		id: 9367, name: "Phường Đông Ngàn", province: 8, district: 149
	},
	{
		id: 9370, name: "Xã Tam Sơn", province: 8, district: 149
	},
	{
		id: 9373, name: "Xã Hương Mạc", province: 8, district: 149
	},
	{
		id: 9376, name: "Xã Tương Giang", province: 8, district: 149
	},
	{
		id: 9379, name: "Xã Phù Khê", province: 8, district: 149
	},
	{
		id: 9382, name: "Phường Đồng Kỵ", province: 8, district: 149
	},
	{
		id: 9383, name: "Phường Trang Hạ", province: 8, district: 149
	},
	{
		id: 9385, name: "Phường Đồng Nguyên", province: 8, district: 149
	},
	{
		id: 9388, name: "Phường Châu Khê", province: 8, district: 149
	},
	{
		id: 9391, name: "Phường Tân Hồng", province: 8, district: 149
	},
	{
		id: 9394, name: "Phường Đình Bảng", province: 8, district: 149
	},
	{
		id: 9397, name: "Xã Phù Chẩn", province: 8, district: 149
	},
	{
		id: 9400, name: "Thị trấn Hồ", province: 8, district: 150
	},
	{
		id: 9403, name: "Xã Hoài Thượng", province: 8, district: 150
	},
	{
		id: 9406, name: "Xã Đại Đồng Thành", province: 8, district: 150
	},
	{
		id: 9409, name: "Xã Mão Điền", province: 8, district: 150
	},
	{
		id: 9412, name: "Xã Song Hồ", province: 8, district: 150
	},
	{
		id: 9415, name: "Xã Đình Tổ", province: 8, district: 150
	},
	{
		id: 9418, name: "Xã An Bình", province: 8, district: 150
	},
	{
		id: 9421, name: "Xã Trí Quả", province: 8, district: 150
	},
	{
		id: 9424, name: "Xã Gia Đông", province: 8, district: 150
	},
	{
		id: 9427, name: "Xã Thanh Khương", province: 8, district: 150
	},
	{
		id: 9430, name: "Xã Trạm Lộ", province: 8, district: 150
	},
	{
		id: 9433, name: "Xã Xuân Lâm", province: 8, district: 150
	},
	{
		id: 9436, name: "Xã Hà Mãn", province: 8, district: 150
	},
	{
		id: 9439, name: "Xã Ngũ Thái", province: 8, district: 150
	},
	{
		id: 9442, name: "Xã Nguyệt Đức", province: 8, district: 150
	},
	{
		id: 9445, name: "Xã Ninh Xá", province: 8, district: 150
	},
	{
		id: 9448, name: "Xã Nghĩa Đạo", province: 8, district: 150
	},
	{
		id: 9451, name: "Xã Song Liễu", province: 8, district: 150
	},
	{
		id: 9454, name: "Thị trấn Gia Bình", province: 8, district: 151
	},
	{
		id: 9457, name: "Xã Vạn Ninh", province: 8, district: 151
	},
	{
		id: 9460, name: "Xã Thái Bảo", province: 8, district: 151
	},
	{
		id: 9463, name: "Xã Giang Sơn", province: 8, district: 151
	},
	{
		id: 9466, name: "Xã Cao Đức", province: 8, district: 151
	},
	{
		id: 9469, name: "Xã Đại Lai", province: 8, district: 151
	},
	{
		id: 9472, name: "Xã Song Giang", province: 8, district: 151
	},
	{
		id: 9475, name: "Xã Bình Dương", province: 8, district: 151
	},
	{
		id: 9478, name: "Xã Lãng Ngâm", province: 8, district: 151
	},
	{
		id: 9481, name: "Xã Nhân Thắng", province: 8, district: 151
	},
	{
		id: 9484, name: "Xã Xuân Lai", province: 8, district: 151
	},
	{
		id: 9487, name: "Xã Đông Cứu", province: 8, district: 151
	},
	{
		id: 9490, name: "Xã Đại Bái", province: 8, district: 151
	},
	{
		id: 9493, name: "Xã Quỳnh Phú", province: 8, district: 151
	},
	{
		id: 9496, name: "Thị trấn Thứa", province: 8, district: 152
	},
	{
		id: 9499, name: "Xã An Thịnh", province: 8, district: 152
	},
	{
		id: 9502, name: "Xã Trung Kênh", province: 8, district: 152
	},
	{
		id: 9505, name: "Xã Phú Hòa", province: 8, district: 152
	},
	{
		id: 9508, name: "Xã Mỹ Hương", province: 8, district: 152
	},
	{
		id: 9511, name: "Xã Tân Lãng", province: 8, district: 152
	},
	{
		id: 9514, name: "Xã Quảng Phú", province: 8, district: 152
	},
	{
		id: 9517, name: "Xã Trừng Xá", province: 8, district: 152
	},
	{
		id: 9520, name: "Xã Lai Hạ", province: 8, district: 152
	},
	{
		id: 9523, name: "Xã Trung Chính", province: 8, district: 152
	},
	{
		id: 9526, name: "Xã Minh Tân", province: 8, district: 152
	},
	{
		id: 9529, name: "Xã Bình Định", province: 8, district: 152
	},
	{
		id: 9532, name: "Xã Phú Lương", province: 8, district: 152
	},
	{
		id: 9535, name: "Xã Lâm Thao", province: 8, district: 152
	},
	{
		id: 28756, name: "Phường Phú Khương", province: 9, district: 153
	},
	{
		id: 28757, name: "Phường Phú Tân", province: 9, district: 153
	},
	{
		id: 28759, name: "Phường 8", province: 9, district: 153
	},
	{
		id: 28762, name: "Phường 6", province: 9, district: 153
	},
	{
		id: 28765, name: "Phường 4", province: 9, district: 153
	},
	{
		id: 28768, name: "Phường 5", province: 9, district: 153
	},
	{
		id: 28771, name: "Phường 1", province: 9, district: 153
	},
	{
		id: 28774, name: "Phường 3", province: 9, district: 153
	},
	{
		id: 28777, name: "Phường 2", province: 9, district: 153
	},
	{
		id: 28780, name: "Phường 7", province: 9, district: 153
	},
	{
		id: 28783, name: "Xã Sơn Đông", province: 9, district: 153
	},
	{
		id: 28786, name: "Xã Phú Hưng", province: 9, district: 153
	},
	{
		id: 28789, name: "Xã Bình Phú", province: 9, district: 153
	},
	{
		id: 28792, name: "Xã Mỹ Thạnh An", province: 9, district: 153
	},
	{
		id: 28795, name: "Xã Nhơn Thạnh", province: 9, district: 153
	},
	{
		id: 28798, name: "Xã Phú Nhuận", province: 9, district: 153
	},
	{
		id: 28867, name: "Xã Mỹ Thành", province: 9, district: 153
	},
	{
		id: 28870, name: "Thị trấn Chợ Lách", province: 9, district: 154
	},
	{
		id: 28873, name: "Xã Phú Phụng", province: 9, district: 154
	},
	{
		id: 28876, name: "Xã Sơn Định", province: 9, district: 154
	},
	{
		id: 28879, name: "Xã Vĩnh Bình", province: 9, district: 154
	},
	{
		id: 28882, name: "Xã Hòa Nghĩa", province: 9, district: 154
	},
	{
		id: 28885, name: "Xã Long Thới", province: 9, district: 154
	},
	{
		id: 28888, name: "Xã Phú Sơn", province: 9, district: 154
	},
	{
		id: 28891, name: "Xã Tân Thiềng", province: 9, district: 154
	},
	{
		id: 28894, name: "Xã Vĩnh Thành", province: 9, district: 154
	},
	{
		id: 28897, name: "Xã Vĩnh Hòa", province: 9, district: 154
	},
	{
		id: 28900, name: "Xã Hưng Khánh Trung B", province: 9, district: 154
	},
	{
		id: 28801, name: "Thị trấn Châu Thành", province: 9, district: 155
	},
	{
		id: 28804, name: "Xã Tân Thạch", province: 9, district: 155
	},
	{
		id: 28807, name: "Xã Qưới Sơn", province: 9, district: 155
	},
	{
		id: 28810, name: "Xã An Khánh", province: 9, district: 155
	},
	{
		id: 28813, name: "Xã Giao Long", province: 9, district: 155
	},
	{
		id: 28816, name: "Xã Giao Hòa", province: 9, district: 155
	},
	{
		id: 28819, name: "Xã Phú Túc", province: 9, district: 155
	},
	{
		id: 28822, name: "Xã Phú Đức", province: 9, district: 155
	},
	{
		id: 28825, name: "Xã Phú An Hòa", province: 9, district: 155
	},
	{
		id: 28828, name: "Xã An Phước", province: 9, district: 155
	},
	{
		id: 28831, name: "Xã Tam Phước", province: 9, district: 155
	},
	{
		id: 28834, name: "Xã Thành Triệu", province: 9, district: 155
	},
	{
		id: 28837, name: "Xã Tường Đa", province: 9, district: 155
	},
	{
		id: 28840, name: "Xã Tân Phú", province: 9, district: 155
	},
	{
		id: 28843, name: "Xã Quới Thành", province: 9, district: 155
	},
	{
		id: 28846, name: "Xã Phước Thạnh", province: 9, district: 155
	},
	{
		id: 28849, name: "Xã An Hóa", province: 9, district: 155
	},
	{
		id: 28852, name: "Xã Tiên Long", province: 9, district: 155
	},
	{
		id: 28855, name: "Xã An Hiệp", province: 9, district: 155
	},
	{
		id: 28858, name: "Xã Hữu Định", province: 9, district: 155
	},
	{
		id: 28861, name: "Xã Tiên Thủy", province: 9, district: 155
	},
	{
		id: 28864, name: "Xã Sơn Hòa", province: 9, district: 155
	},
	{
		id: 28889, name: "Xã Phú Mỹ", province: 9, district: 156
	},
	{
		id: 28901, name: "Xã Hưng Khánh Trung A", province: 9, district: 156
	},
	{
		id: 28906, name: "Xã Thanh Tân", province: 9, district: 156
	},
	{
		id: 28909, name: "Xã Thạnh Ngãi", province: 9, district: 156
	},
	{
		id: 28912, name: "Xã Tân Phú Tây", province: 9, district: 156
	},
	{
		id: 28915, name: "Xã Phước Mỹ Trung", province: 9, district: 156
	},
	{
		id: 28918, name: "Xã Tân Thành Bình", province: 9, district: 156
	},
	{
		id: 28921, name: "Xã Thành An", province: 9, district: 156
	},
	{
		id: 28924, name: "Xã Hòa Lộc", province: 9, district: 156
	},
	{
		id: 28927, name: "Xã Tân Thanh Tây", province: 9, district: 156
	},
	{
		id: 28933, name: "Xã Tân Bình", province: 9, district: 156
	},
	{
		id: 28936, name: "Xã Nhuận Phú Tân", province: 9, district: 156
	},
	{
		id: 28948, name: "Xã Khánh Thạnh Tân", province: 9, district: 156
	},
	{
		id: 28984, name: "Thị trấn Giồng Trôm", province: 9, district: 157
	},
	{
		id: 28987, name: "Xã Phong Nẫm", province: 9, district: 157
	},
	{
		id: 28990, name: "Xã Phong Mỹ", province: 9, district: 157
	},
	{
		id: 28993, name: "Xã Mỹ Thạnh", province: 9, district: 157
	},
	{
		id: 28996, name: "Xã Châu Hòa", province: 9, district: 157
	},
	{
		id: 28999, name: "Xã Lương Hòa", province: 9, district: 157
	},
	{
		id: 29002, name: "Xã Lương Quới", province: 9, district: 157
	},
	{
		id: 29005, name: "Xã Lương Phú", province: 9, district: 157
	},
	{
		id: 29008, name: "Xã Châu Bình", province: 9, district: 157
	},
	{
		id: 29011, name: "Xã Thuận Điền", province: 9, district: 157
	},
	{
		id: 29014, name: "Xã Sơn Phú", province: 9, district: 157
	},
	{
		id: 29017, name: "Xã Bình Hoà", province: 9, district: 157
	},
	{
		id: 29020, name: "Xã Phước Long", province: 9, district: 157
	},
	{
		id: 29023, name: "Xã Hưng Phong", province: 9, district: 157
	},
	{
		id: 29026, name: "Xã Long Mỹ", province: 9, district: 157
	},
	{
		id: 29029, name: "Xã Tân Hào", province: 9, district: 157
	},
	{
		id: 29032, name: "Xã Bình Thành", province: 9, district: 157
	},
	{
		id: 29035, name: "Xã Tân Thanh", province: 9, district: 157
	},
	{
		id: 29038, name: "Xã Tân Lợi Thạnh", province: 9, district: 157
	},
	{
		id: 29041, name: "Xã Thạnh Phú Đông", province: 9, district: 157
	},
	{
		id: 29044, name: "Xã Hưng Nhượng", province: 9, district: 157
	},
	{
		id: 29047, name: "Xã Hưng Lễ", province: 9, district: 157
	},
	{
		id: 29050, name: "Thị trấn Bình Đại", province: 9, district: 158
	},
	{
		id: 29053, name: "Xã Tam Hiệp", province: 9, district: 158
	},
	{
		id: 29056, name: "Xã Long Định", province: 9, district: 158
	},
	{
		id: 29059, name: "Xã Long Hòa", province: 9, district: 158
	},
	{
		id: 29062, name: "Xã Phú Thuận", province: 9, district: 158
	},
	{
		id: 29065, name: "Xã Vang Quới Tây", province: 9, district: 158
	},
	{
		id: 29068, name: "Xã Vang Quới Đông", province: 9, district: 158
	},
	{
		id: 29071, name: "Xã Châu Hưng", province: 9, district: 158
	},
	{
		id: 29074, name: "Xã Phú Vang", province: 9, district: 158
	},
	{
		id: 29077, name: "Xã Lộc Thuận", province: 9, district: 158
	},
	{
		id: 29080, name: "Xã Định Trung", province: 9, district: 158
	},
	{
		id: 29083, name: "Xã Thới Lai", province: 9, district: 158
	},
	{
		id: 29086, name: "Xã Bình Thới", province: 9, district: 158
	},
	{
		id: 29089, name: "Xã Phú Long", province: 9, district: 158
	},
	{
		id: 29092, name: "Xã Bình Thắng", province: 9, district: 158
	},
	{
		id: 29095, name: "Xã Thạnh Trị", province: 9, district: 158
	},
	{
		id: 29098, name: "Xã Đại Hòa Lộc", province: 9, district: 158
	},
	{
		id: 29101, name: "Xã Thừa Đức", province: 9, district: 158
	},
	{
		id: 29104, name: "Xã Thạnh Phước", province: 9, district: 158
	},
	{
		id: 29107, name: "Xã Thới Thuận", province: 9, district: 158
	},
	{
		id: 29110, name: "Thị trấn Ba Tri", province: 9, district: 159
	},
	{
		id: 29113, name: "Xã Tân Mỹ", province: 9, district: 159
	},
	{
		id: 29116, name: "Xã Mỹ Hòa", province: 9, district: 159
	},
	{
		id: 29119, name: "Xã Tân Xuân", province: 9, district: 159
	},
	{
		id: 29122, name: "Xã Mỹ Chánh", province: 9, district: 159
	},
	{
		id: 29125, name: "Xã Bảo Thạnh", province: 9, district: 159
	},
	{
		id: 29128, name: "Xã An Phú Trung", province: 9, district: 159
	},
	{
		id: 29131, name: "Xã Mỹ Thạnh", province: 9, district: 159
	},
	{
		id: 29134, name: "Xã Mỹ Nhơn", province: 9, district: 159
	},
	{
		id: 29137, name: "Xã Phước Tuy", province: 9, district: 159
	},
	{
		id: 29140, name: "Xã Phú Ngãi", province: 9, district: 159
	},
	{
		id: 29143, name: "Xã An Ngãi Trung", province: 9, district: 159
	},
	{
		id: 29146, name: "Xã Phú Lễ", province: 9, district: 159
	},
	{
		id: 29149, name: "Xã An Bình Tây", province: 9, district: 159
	},
	{
		id: 29152, name: "Xã Bảo Thuận", province: 9, district: 159
	},
	{
		id: 29155, name: "Xã Tân Hưng", province: 9, district: 159
	},
	{
		id: 29158, name: "Xã An Ngãi Tây", province: 9, district: 159
	},
	{
		id: 29161, name: "Xã An Hiệp", province: 9, district: 159
	},
	{
		id: 29164, name: "Xã Vĩnh Hòa", province: 9, district: 159
	},
	{
		id: 29167, name: "Xã Tân Thủy", province: 9, district: 159
	},
	{
		id: 29170, name: "Xã Vĩnh An", province: 9, district: 159
	},
	{
		id: 29173, name: "Xã An Đức", province: 9, district: 159
	},
	{
		id: 29176, name: "Xã An Hòa Tây", province: 9, district: 159
	},
	{
		id: 29179, name: "Xã An Thủy", province: 9, district: 159
	},
	{
		id: 29182, name: "Thị trấn Thạnh Phú", province: 9, district: 160
	},
	{
		id: 29185, name: "Xã Phú Khánh", province: 9, district: 160
	},
	{
		id: 29188, name: "Xã Đại Điền", province: 9, district: 160
	},
	{
		id: 29191, name: "Xã Quới Điền", province: 9, district: 160
	},
	{
		id: 29194, name: "Xã Tân Phong", province: 9, district: 160
	},
	{
		id: 29197, name: "Xã Mỹ Hưng", province: 9, district: 160
	},
	{
		id: 29200, name: "Xã An Thạnh", province: 9, district: 160
	},
	{
		id: 29203, name: "Xã Thới Thạnh", province: 9, district: 160
	},
	{
		id: 29206, name: "Xã Hòa Lợi", province: 9, district: 160
	},
	{
		id: 29209, name: "Xã An Điền", province: 9, district: 160
	},
	{
		id: 29212, name: "Xã Bình Thạnh", province: 9, district: 160
	},
	{
		id: 29215, name: "Xã An Thuận", province: 9, district: 160
	},
	{
		id: 29218, name: "Xã An Quy", province: 9, district: 160
	},
	{
		id: 29221, name: "Xã Thạnh Hải", province: 9, district: 160
	},
	{
		id: 29224, name: "Xã An Nhơn", province: 9, district: 160
	},
	{
		id: 29227, name: "Xã Giao Thạnh", province: 9, district: 160
	},
	{
		id: 29230, name: "Xã Thạnh Phong", province: 9, district: 160
	},
	{
		id: 29233, name: "Xã Mỹ An", province: 9, district: 160
	},
	{
		id: 28903, name: "Thị trấn Mỏ Cày", province: 9, district: 722
	},
	{
		id: 28930, name: "Xã Định Thủy", province: 9, district: 722
	},
	{
		id: 28939, name: "Xã Đa Phước Hội", province: 9, district: 722
	},
	{
		id: 28940, name: "Xã Tân Hội", province: 9, district: 722
	},
	{
		id: 28942, name: "Xã Phước Hiệp", province: 9, district: 722
	},
	{
		id: 28945, name: "Xã Bình Khánh Đông", province: 9, district: 722
	},
	{
		id: 28951, name: "Xã An Thạnh", province: 9, district: 722
	},
	{
		id: 28954, name: "Xã Bình Khánh Tây", province: 9, district: 722
	},
	{
		id: 28957, name: "Xã An Định", province: 9, district: 722
	},
	{
		id: 28960, name: "Xã Thành Thới B", province: 9, district: 722
	},
	{
		id: 28963, name: "Xã Tân Trung", province: 9, district: 722
	},
	{
		id: 28966, name: "Xã An Thới", province: 9, district: 722
	},
	{
		id: 28969, name: "Xã Thành Thới A", province: 9, district: 722
	},
	{
		id: 28972, name: "Xã Minh Đức", province: 9, district: 722
	},
	{
		id: 28975, name: "Xã Ngãi Đăng", province: 9, district: 722
	},
	{
		id: 28978, name: "Xã Cẩm Sơn", province: 9, district: 722
	},
	{
		id: 28981, name: "Xã Hương Mỹ", province: 9, district: 722
	},
	{
		id: 21550, name: "Phường Nhơn Bình", province: 11, district: 109
	},
	{
		id: 21553, name: "Phường Nhơn Phú", province: 11, district: 109
	},
	{
		id: 21556, name: "Phường Đống Đa", province: 11, district: 109
	},
	{
		id: 21559, name: "Phường Trần Quang Diệu", province: 11, district: 109
	},
	{
		id: 21562, name: "Phường Hải Cảng", province: 11, district: 109
	},
	{
		id: 21565, name: "Phường Quang Trung", province: 11, district: 109
	},
	{
		id: 21568, name: "Phường Thị Nại", province: 11, district: 109
	},
	{
		id: 21571, name: "Phường Lê Hồng Phong", province: 11, district: 109
	},
	{
		id: 21574, name: "Phường Trần Hưng Đạo", province: 11, district: 109
	},
	{
		id: 21577, name: "Phường Ngô Mây", province: 11, district: 109
	},
	{
		id: 21580, name: "Phường Lý Thường Kiệt", province: 11, district: 109
	},
	{
		id: 21583, name: "Phường Lê Lợi", province: 11, district: 109
	},
	{
		id: 21586, name: "Phường Trần Phú", province: 11, district: 109
	},
	{
		id: 21589, name: "Phường Bùi Thị Xuân", province: 11, district: 109
	},
	{
		id: 21592, name: "Phường Nguyễn Văn Cừ", province: 11, district: 109
	},
	{
		id: 21595, name: "Phường Ghềnh Ráng", province: 11, district: 109
	},
	{
		id: 21598, name: "Xã Nhơn Lý", province: 11, district: 109
	},
	{
		id: 21601, name: "Xã Nhơn Hội", province: 11, district: 109
	},
	{
		id: 21604, name: "Xã Nhơn Hải", province: 11, district: 109
	},
	{
		id: 21607, name: "Xã Nhơn Châu", province: 11, district: 109
	},
	{
		id: 21991, name: "Xã Phước Mỹ", province: 11, district: 109
	},
	{
		id: 21609, name: "Thị trấn An Lão", province: 11, district: 110
	},
	{
		id: 21610, name: "Xã An Hưng", province: 11, district: 110
	},
	{
		id: 21613, name: "Xã An Trung", province: 11, district: 110
	},
	{
		id: 21616, name: "Xã An Dũng", province: 11, district: 110
	},
	{
		id: 21619, name: "Xã An Vinh", province: 11, district: 110
	},
	{
		id: 21622, name: "Xã An Toàn", province: 11, district: 110
	},
	{
		id: 21625, name: "Xã An Tân", province: 11, district: 110
	},
	{
		id: 21628, name: "Xã An Hòa", province: 11, district: 110
	},
	{
		id: 21631, name: "Xã An Quang", province: 11, district: 110
	},
	{
		id: 21634, name: "Xã An Nghĩa", province: 11, district: 110
	},
	{
		id: 21688, name: "Thị trấn Tăng Bạt Hổ", province: 11, district: 112
	},
	{
		id: 21690, name: "Xã Ân Hảo Tây", province: 11, district: 112
	},
	{
		id: 21691, name: "Xã Ân Hảo Đông", province: 11, district: 112
	},
	{
		id: 21694, name: "Xã Ân Sơn", province: 11, district: 112
	},
	{
		id: 21697, name: "Xã Ân Mỹ", province: 11, district: 112
	},
	{
		id: 21700, name: "Xã Dak Mang", province: 11, district: 112
	},
	{
		id: 21703, name: "Xã Ân Tín", province: 11, district: 112
	},
	{
		id: 21706, name: "Xã Ân Thạnh", province: 11, district: 112
	},
	{
		id: 21709, name: "Xã Ân Phong", province: 11, district: 112
	},
	{
		id: 21712, name: "Xã Ân Đức", province: 11, district: 112
	},
	{
		id: 21715, name: "Xã Ân Hữu", province: 11, district: 112
	},
	{
		id: 21718, name: "Xã Bok Tới", province: 11, district: 112
	},
	{
		id: 21721, name: "Xã Ân Tường Tây", province: 11, district: 112
	},
	{
		id: 21724, name: "Xã Ân Tường Đông", province: 11, district: 112
	},
	{
		id: 21727, name: "Xã Ân Nghĩa", province: 11, district: 112
	},
	{
		id: 21637, name: "Thị trấn Tam Quan", province: 11, district: 113
	},
	{
		id: 21640, name: "Thị trấn Bồng Sơn", province: 11, district: 113
	},
	{
		id: 21643, name: "Xã Hoài Sơn", province: 11, district: 113
	},
	{
		id: 21646, name: "Xã Hoài Châu Bắc", province: 11, district: 113
	},
	{
		id: 21649, name: "Xã Hoài Châu", province: 11, district: 113
	},
	{
		id: 21652, name: "Xã Hoài Phú", province: 11, district: 113
	},
	{
		id: 21655, name: "Xã Tam Quan Bắc", province: 11, district: 113
	},
	{
		id: 21658, name: "Xã Tam Quan Nam", province: 11, district: 113
	},
	{
		id: 21661, name: "Xã Hoài Hảo", province: 11, district: 113
	},
	{
		id: 21664, name: "Xã Hoài Thanh Tây", province: 11, district: 113
	},
	{
		id: 21667, name: "Xã Hoài Thanh", province: 11, district: 113
	},
	{
		id: 21670, name: "Xã Hoài Hương", province: 11, district: 113
	},
	{
		id: 21673, name: "Xã Hoài Tân", province: 11, district: 113
	},
	{
		id: 21676, name: "Xã Hoài Hải", province: 11, district: 113
	},
	{
		id: 21679, name: "Xã Hoài Xuân", province: 11, district: 113
	},
	{
		id: 21682, name: "Xã Hoài Mỹ", province: 11, district: 113
	},
	{
		id: 21685, name: "Xã Hoài Đức", province: 11, district: 113
	},
	{
		id: 21730, name: "Thị trấn Phù Mỹ", province: 11, district: 114
	},
	{
		id: 21733, name: "Thị trấn Bình Dương", province: 11, district: 114
	},
	{
		id: 21736, name: "Xã Mỹ Đức", province: 11, district: 114
	},
	{
		id: 21739, name: "Xã Mỹ Châu", province: 11, district: 114
	},
	{
		id: 21742, name: "Xã Mỹ Thắng", province: 11, district: 114
	},
	{
		id: 21745, name: "Xã Mỹ Lộc", province: 11, district: 114
	},
	{
		id: 21748, name: "Xã Mỹ Lợi", province: 11, district: 114
	},
	{
		id: 21751, name: "Xã Mỹ An", province: 11, district: 114
	},
	{
		id: 21754, name: "Xã Mỹ Phong", province: 11, district: 114
	},
	{
		id: 21757, name: "Xã Mỹ Trinh", province: 11, district: 114
	},
	{
		id: 21760, name: "Xã Mỹ Thọ", province: 11, district: 114
	},
	{
		id: 21763, name: "Xã Mỹ Hòa", province: 11, district: 114
	},
	{
		id: 21766, name: "Xã Mỹ Thành", province: 11, district: 114
	},
	{
		id: 21769, name: "Xã Mỹ Chánh", province: 11, district: 114
	},
	{
		id: 21772, name: "Xã Mỹ Quang", province: 11, district: 114
	},
	{
		id: 21775, name: "Xã Mỹ Hiệp", province: 11, district: 114
	},
	{
		id: 21778, name: "Xã Mỹ Tài", province: 11, district: 114
	},
	{
		id: 21781, name: "Xã Mỹ Cát", province: 11, district: 114
	},
	{
		id: 21784, name: "Xã Mỹ Chánh Tây", province: 11, district: 114
	},
	{
		id: 21853, name: "Thị trấn Ngô Mây", province: 11, district: 115
	},
	{
		id: 21856, name: "Xã Cát Sơn", province: 11, district: 115
	},
	{
		id: 21859, name: "Xã Cát Minh", province: 11, district: 115
	},
	{
		id: 21862, name: "Xã Cát Khánh", province: 11, district: 115
	},
	{
		id: 21865, name: "Xã Cát Tài", province: 11, district: 115
	},
	{
		id: 21868, name: "Xã Cát Lâm", province: 11, district: 115
	},
	{
		id: 21871, name: "Xã Cát Hanh", province: 11, district: 115
	},
	{
		id: 21874, name: "Xã Cát Thành", province: 11, district: 115
	},
	{
		id: 21877, name: "Xã Cát Trinh", province: 11, district: 115
	},
	{
		id: 21880, name: "Xã Cát Hải", province: 11, district: 115
	},
	{
		id: 21883, name: "Xã Cát Hiệp", province: 11, district: 115
	},
	{
		id: 21886, name: "Xã Cát Nhơn", province: 11, district: 115
	},
	{
		id: 21889, name: "Xã Cát Hưng", province: 11, district: 115
	},
	{
		id: 21892, name: "Xã Cát Tường", province: 11, district: 115
	},
	{
		id: 21895, name: "Xã Cát Tân", province: 11, district: 115
	},
	{
		id: 21898, name: "Xã Cát Tiến", province: 11, district: 115
	},
	{
		id: 21901, name: "Xã Cát Thắng", province: 11, district: 115
	},
	{
		id: 21904, name: "Xã Cát Chánh", province: 11, district: 115
	},
	{
		id: 21786, name: "Thị trấn Vĩnh Thạnh", province: 11, district: 116
	},
	{
		id: 21787, name: "Xã Vĩnh Sơn", province: 11, district: 116
	},
	{
		id: 21790, name: "Xã Vĩnh Kim", province: 11, district: 116
	},
	{
		id: 21796, name: "Xã Vĩnh Hiệp", province: 11, district: 116
	},
	{
		id: 21799, name: "Xã Vĩnh Hảo", province: 11, district: 116
	},
	{
		id: 21801, name: "Xã Vĩnh Hoà", province: 11, district: 116
	},
	{
		id: 21802, name: "Xã Vĩnh Thịnh", province: 11, district: 116
	},
	{
		id: 21804, name: "Xã Vĩnh Thuận", province: 11, district: 116
	},
	{
		id: 21805, name: "Xã Vĩnh Quang", province: 11, district: 116
	},
	{
		id: 21808, name: "Thị trấn Phú Phong", province: 11, district: 117
	},
	{
		id: 21811, name: "Xã Bình Tân", province: 11, district: 117
	},
	{
		id: 21814, name: "Xã Tây Thuận", province: 11, district: 117
	},
	{
		id: 21817, name: "Xã Bình Thuận", province: 11, district: 117
	},
	{
		id: 21820, name: "Xã Tây Giang", province: 11, district: 117
	},
	{
		id: 21823, name: "Xã Bình Thành", province: 11, district: 117
	},
	{
		id: 21826, name: "Xã Tây An", province: 11, district: 117
	},
	{
		id: 21829, name: "Xã Bình Hòa", province: 11, district: 117
	},
	{
		id: 21832, name: "Xã Tây Bình", province: 11, district: 117
	},
	{
		id: 21835, name: "Xã Bình Tường", province: 11, district: 117
	},
	{
		id: 21838, name: "Xã Tây Vinh", province: 11, district: 117
	},
	{
		id: 21841, name: "Xã Vĩnh An", province: 11, district: 117
	},
	{
		id: 21844, name: "Xã Tây Xuân", province: 11, district: 117
	},
	{
		id: 21847, name: "Xã Bình Nghi", province: 11, district: 117
	},
	{
		id: 21850, name: "Xã Tây Phú", province: 11, district: 117
	},
	{
		id: 21994, name: "Thị trấn Vân Canh", province: 11, district: 118
	},
	{
		id: 21997, name: "Xã Canh Liên", province: 11, district: 118
	},
	{
		id: 22000, name: "Xã Canh Hiệp", province: 11, district: 118
	},
	{
		id: 22003, name: "Xã Canh Vinh", province: 11, district: 118
	},
	{
		id: 22006, name: "Xã Canh Hiển", province: 11, district: 118
	},
	{
		id: 22009, name: "Xã Canh Thuận", province: 11, district: 118
	},
	{
		id: 22012, name: "Xã Canh Hòa", province: 11, district: 118
	},
	{
		id: 21907, name: "Phường Bình Định", province: 11, district: 119
	},
	{
		id: 21910, name: "Phường Đập Đá", province: 11, district: 119
	},
	{
		id: 21913, name: "Xã Nhơn Mỹ", province: 11, district: 119
	},
	{
		id: 21916, name: "Phường Nhơn Thành", province: 11, district: 119
	},
	{
		id: 21919, name: "Xã Nhơn Hạnh", province: 11, district: 119
	},
	{
		id: 21922, name: "Xã Nhơn Hậu", province: 11, district: 119
	},
	{
		id: 21925, name: "Xã Nhơn Phong", province: 11, district: 119
	},
	{
		id: 21928, name: "Xã Nhơn An", province: 11, district: 119
	},
	{
		id: 21931, name: "Xã Nhơn Phúc", province: 11, district: 119
	},
	{
		id: 21934, name: "Phường Nhơn Hưng", province: 11, district: 119
	},
	{
		id: 21937, name: "Xã Nhơn Khánh", province: 11, district: 119
	},
	{
		id: 21940, name: "Xã Nhơn Lộc", province: 11, district: 119
	},
	{
		id: 21943, name: "Phường Nhơn Hòa", province: 11, district: 119
	},
	{
		id: 21946, name: "Xã Nhơn Tân", province: 11, district: 119
	},
	{
		id: 21949, name: "Xã Nhơn Thọ", province: 11, district: 119
	},
	{
		id: 21952, name: "Thị trấn Tuy Phước", province: 11, district: 120
	},
	{
		id: 21955, name: "Thị trấn Diêu Trì", province: 11, district: 120
	},
	{
		id: 21958, name: "Xã Phước Thắng", province: 11, district: 120
	},
	{
		id: 21961, name: "Xã Phước Hưng", province: 11, district: 120
	},
	{
		id: 21964, name: "Xã Phước Quang", province: 11, district: 120
	},
	{
		id: 21967, name: "Xã Phước Hòa", province: 11, district: 120
	},
	{
		id: 21970, name: "Xã Phước Sơn", province: 11, district: 120
	},
	{
		id: 21973, name: "Xã Phước Hiệp", province: 11, district: 120
	},
	{
		id: 21976, name: "Xã Phước Lộc", province: 11, district: 120
	},
	{
		id: 21979, name: "Xã Phước Nghĩa", province: 11, district: 120
	},
	{
		id: 21982, name: "Xã Phước Thuận", province: 11, district: 120
	},
	{
		id: 21985, name: "Xã Phước An", province: 11, district: 120
	},
	{
		id: 21988, name: "Xã Phước Thành", province: 11, district: 120
	},
	{
		id: 25195, name: "Phường Tân Phú", province: 12, district: 92
	},
	{
		id: 25198, name: "Phường Tân Đồng", province: 12, district: 92
	},
	{
		id: 25201, name: "Phường Tân Bình", province: 12, district: 92
	},
	{
		id: 25204, name: "Phường Tân Xuân", province: 12, district: 92
	},
	{
		id: 25205, name: "Phường Tân Thiện", province: 12, district: 92
	},
	{
		id: 25207, name: "Xã Tân Thành", province: 12, district: 92
	},
	{
		id: 25210, name: "Xã Tiến Thành", province: 12, district: 92
	},
	{
		id: 25213, name: "Xã Tiến Hưng", province: 12, district: 92
	},
	{
		id: 25363, name: "Thị trấn Tân Phú", province: 12, district: 93
	},
	{
		id: 25366, name: "Xã Thuận Lợi", province: 12, district: 93
	},
	{
		id: 25369, name: "Xã Đồng Tâm", province: 12, district: 93
	},
	{
		id: 25372, name: "Xã Tân Phước", province: 12, district: 93
	},
	{
		id: 25375, name: "Xã Tân Hưng", province: 12, district: 93
	},
	{
		id: 25378, name: "Xã Tân Lợi", province: 12, district: 93
	},
	{
		id: 25381, name: "Xã Tân Lập", province: 12, district: 93
	},
	{
		id: 25384, name: "Xã Tân Hoà", province: 12, district: 93
	},
	{
		id: 25387, name: "Xã Thuận Phú", province: 12, district: 93
	},
	{
		id: 25390, name: "Xã Đồng Tiến", province: 12, district: 93
	},
	{
		id: 25393, name: "Xã Tân Tiến", province: 12, district: 93
	},
	{
		id: 25432, name: "Thị trấn Chơn Thành", province: 12, district: 94
	},
	{
		id: 25433, name: "Xã Thành Tâm", province: 12, district: 94
	},
	{
		id: 25435, name: "Xã Minh Lập", province: 12, district: 94
	},
	{
		id: 25439, name: "Xã Quang Minh", province: 12, district: 94
	},
	{
		id: 25441, name: "Xã Minh Hưng", province: 12, district: 94
	},
	{
		id: 25444, name: "Xã Minh Long", province: 12, district: 94
	},
	{
		id: 25447, name: "Xã Minh Thành", province: 12, district: 94
	},
	{
		id: 25450, name: "Xã Nha Bích", province: 12, district: 94
	},
	{
		id: 25453, name: "Xã Minh Thắng", province: 12, district: 94
	},
	{
		id: 25320, name: "Phường Hưng Chiến", province: 12, district: 95
	},
	{
		id: 25324, name: "Phường An Lộc", province: 12, district: 95
	},
	{
		id: 25325, name: "Phường Phú Thịnh", province: 12, district: 95
	},
	{
		id: 25326, name: "Phường Phú Đức", province: 12, district: 95
	},
	{
		id: 25333, name: "Xã Thanh Lương", province: 12, district: 95
	},
	{
		id: 25336, name: "Xã Thanh Phú", province: 12, district: 95
	},
	{
		id: 25270, name: "Thị trấn Lộc Ninh", province: 12, district: 96
	},
	{
		id: 25273, name: "Xã Lộc Hòa", province: 12, district: 96
	},
	{
		id: 25276, name: "Xã Lộc An", province: 12, district: 96
	},
	{
		id: 25279, name: "Xã Lộc Tấn", province: 12, district: 96
	},
	{
		id: 25280, name: "Xã Lộc Thạnh", province: 12, district: 96
	},
	{
		id: 25282, name: "Xã Lộc Hiệp", province: 12, district: 96
	},
	{
		id: 25285, name: "Xã Lộc Thiện", province: 12, district: 96
	},
	{
		id: 25288, name: "Xã Lộc Thuận", province: 12, district: 96
	},
	{
		id: 25291, name: "Xã Lộc Quang", province: 12, district: 96
	},
	{
		id: 25292, name: "Xã Lộc Phú", province: 12, district: 96
	},
	{
		id: 25294, name: "Xã Lộc Thành", province: 12, district: 96
	},
	{
		id: 25297, name: "Xã Lộc Thái", province: 12, district: 96
	},
	{
		id: 25300, name: "Xã Lộc Điền", province: 12, district: 96
	},
	{
		id: 25303, name: "Xã Lộc Hưng", province: 12, district: 96
	},
	{
		id: 25305, name: "Xã Lộc Thịnh", province: 12, district: 96
	},
	{
		id: 25306, name: "Xã Lộc Khánh", province: 12, district: 96
	},
	{
		id: 25308, name: "Thị trấn Thanh Bình", province: 12, district: 97
	},
	{
		id: 25309, name: "Xã Hưng Phước", province: 12, district: 97
	},
	{
		id: 25310, name: "Xã Phước Thiện", province: 12, district: 97
	},
	{
		id: 25312, name: "Xã Thiện Hưng", province: 12, district: 97
	},
	{
		id: 25315, name: "Xã Thanh Hòa", province: 12, district: 97
	},
	{
		id: 25318, name: "Xã Tân Thành", province: 12, district: 97
	},
	{
		id: 25321, name: "Xã Tân Tiến", province: 12, district: 97
	},
	{
		id: 25216, name: "Phường Thác Mơ", province: 12, district: 98
	},
	{
		id: 25217, name: "Phường Long Thủy", province: 12, district: 98
	},
	{
		id: 25219, name: "Phường Phước Bình", province: 12, district: 98
	},
	{
		id: 25220, name: "Phường Long Phước", province: 12, district: 98
	},
	{
		id: 25237, name: "Phường Sơn Giang", province: 12, district: 98
	},
	{
		id: 25245, name: "Xã Long Giang", province: 12, district: 98
	},
	{
		id: 25249, name: "Xã Phước Tín", province: 12, district: 98
	},
	{
		id: 25396, name: "Thị trấn Đức Phong", province: 12, district: 99
	},
	{
		id: 25398, name: "Xã Đường 10", province: 12, district: 99
	},
	{
		id: 25399, name: "Xã Đak Nhau", province: 12, district: 99
	},
	{
		id: 25400, name: "Xã Phú Sơn", province: 12, district: 99
	},
	{
		id: 25402, name: "Xã Thọ Sơn", province: 12, district: 99
	},
	{
		id: 25404, name: "Xã Bình Minh", province: 12, district: 99
	},
	{
		id: 25405, name: "Xã Bom Bo", province: 12, district: 99
	},
	{
		id: 25408, name: "Xã Minh Hưng", province: 12, district: 99
	},
	{
		id: 25411, name: "Xã Đoàn Kết", province: 12, district: 99
	},
	{
		id: 25414, name: "Xã Đồng Nai", province: 12, district: 99
	},
	{
		id: 25417, name: "Xã Đức Liễu", province: 12, district: 99
	},
	{
		id: 25420, name: "Xã Thống Nhất", province: 12, district: 99
	},
	{
		id: 25423, name: "Xã Nghĩa Trung", province: 12, district: 99
	},
	{
		id: 25424, name: "Xã Nghĩa Bình", province: 12, district: 99
	},
	{
		id: 25426, name: "Xã Đăng Hà", province: 12, district: 99
	},
	{
		id: 25429, name: "Xã Phước Sơn", province: 12, district: 99
	},
	{
		id: 25222, name: "Xã Bù Gia Mập", province: 12, district: 723
	},
	{
		id: 25225, name: "Xã Đak Ơ", province: 12, district: 723
	},
	{
		id: 25228, name: "Xã Đức Hạnh", province: 12, district: 723
	},
	{
		id: 25229, name: "Xã Phú Văn", province: 12, district: 723
	},
	{
		id: 25231, name: "Xã Đa Kia", province: 12, district: 723
	},
	{
		id: 25232, name: "Xã Phước Minh", province: 12, district: 723
	},
	{
		id: 25234, name: "Xã Bình Thắng", province: 12, district: 723
	},
	{
		id: 25267, name: "Xã Phú Nghĩa", province: 12, district: 723
	},
	{
		id: 25327, name: "Xã Thanh An", province: 12, district: 724
	},
	{
		id: 25330, name: "Xã An Khương", province: 12, district: 724
	},
	{
		id: 25339, name: "Xã An Phú", province: 12, district: 724
	},
	{
		id: 25342, name: "Xã Tân Lợi", province: 12, district: 724
	},
	{
		id: 25345, name: "Xã Tân Hưng", province: 12, district: 724
	},
	{
		id: 25348, name: "Xã Minh Đức", province: 12, district: 724
	},
	{
		id: 25349, name: "Xã Minh Tâm", province: 12, district: 724
	},
	{
		id: 25351, name: "Xã Phước An", province: 12, district: 724
	},
	{
		id: 25354, name: "Xã Thanh Bình", province: 12, district: 724
	},
	{
		id: 25357, name: "Xã Tân Khai", province: 12, district: 724
	},
	{
		id: 25360, name: "Xã Đồng Nơ", province: 12, district: 724
	},
	{
		id: 25361, name: "Xã Tân Hiệp", province: 12, district: 724
	},
	{
		id: 25438, name: "Xã Tân Quan", province: 12, district: 724
	},
	{
		id: 25240, name: "Xã Long Bình", province: 12, district: 756
	},
	{
		id: 25243, name: "Xã Bình Tân", province: 12, district: 756
	},
	{
		id: 25244, name: "Xã Bình Sơn", province: 12, district: 756
	},
	{
		id: 25246, name: "Xã Long Hưng", province: 12, district: 756
	},
	{
		id: 25250, name: "Xã Phước Tân", province: 12, district: 756
	},
	{
		id: 25252, name: "Xã Bù Nho", province: 12, district: 756
	},
	{
		id: 25255, name: "Xã Long Hà", province: 12, district: 756
	},
	{
		id: 25258, name: "Xã Long Tân", province: 12, district: 756
	},
	{
		id: 25261, name: "Xã Phú Trung", province: 12, district: 756
	},
	{
		id: 25264, name: "Xã Phú Riềng", province: 12, district: 756
	},
	{
		id: 22915, name: "Phường Mũi Né", province: 13, district: 100
	},
	{
		id: 22918, name: "Phường Hàm Tiến", province: 13, district: 100
	},
	{
		id: 22921, name: "Phường Phú Hài", province: 13, district: 100
	},
	{
		id: 22924, name: "Phường Phú Thủy", province: 13, district: 100
	},
	{
		id: 22927, name: "Phường Phú Tài", province: 13, district: 100
	},
	{
		id: 22930, name: "Phường Phú Trinh", province: 13, district: 100
	},
	{
		id: 22933, name: "Phường Xuân An", province: 13, district: 100
	},
	{
		id: 22936, name: "Phường Thanh Hải", province: 13, district: 100
	},
	{
		id: 22939, name: "Phường Bình Hưng", province: 13, district: 100
	},
	{
		id: 22942, name: "Phường Đức Nghĩa", province: 13, district: 100
	},
	{
		id: 22945, name: "Phường Lạc Đạo", province: 13, district: 100
	},
	{
		id: 22948, name: "Phường Đức Thắng", province: 13, district: 100
	},
	{
		id: 22951, name: "Phường Hưng Long", province: 13, district: 100
	},
	{
		id: 22954, name: "Phường Đức Long", province: 13, district: 100
	},
	{
		id: 22957, name: "Xã Thiện Nghiệp", province: 13, district: 100
	},
	{
		id: 22960, name: "Xã Phong Nẫm", province: 13, district: 100
	},
	{
		id: 22963, name: "Xã Tiến Lợi", province: 13, district: 100
	},
	{
		id: 22966, name: "Xã Tiến Thành", province: 13, district: 100
	},
	{
		id: 22969, name: "Thị trấn Liên Hương", province: 13, district: 101
	},
	{
		id: 22972, name: "Thị trấn Phan Rí Cửa", province: 13, district: 101
	},
	{
		id: 22975, name: "Xã Phan Dũng", province: 13, district: 101
	},
	{
		id: 22978, name: "Xã Phong Phú", province: 13, district: 101
	},
	{
		id: 22981, name: "Xã Vĩnh Hảo", province: 13, district: 101
	},
	{
		id: 22984, name: "Xã Vĩnh Tân", province: 13, district: 101
	},
	{
		id: 22987, name: "Xã Phú Lạc", province: 13, district: 101
	},
	{
		id: 22990, name: "Xã Phước Thể", province: 13, district: 101
	},
	{
		id: 22993, name: "Xã Hòa Minh", province: 13, district: 101
	},
	{
		id: 22996, name: "Xã Chí Công", province: 13, district: 101
	},
	{
		id: 22999, name: "Xã Bình Thạnh", province: 13, district: 101
	},
	{
		id: 23002, name: "Xã Hoà Phú", province: 13, district: 101
	},
	{
		id: 23005, name: "Thị trấn Chợ Lầu", province: 13, district: 102
	},
	{
		id: 23008, name: "Xã Phan Sơn", province: 13, district: 102
	},
	{
		id: 23011, name: "Xã Phan Lâm", province: 13, district: 102
	},
	{
		id: 23014, name: "Xã Bình An", province: 13, district: 102
	},
	{
		id: 23017, name: "Xã Phan Điền", province: 13, district: 102
	},
	{
		id: 23020, name: "Xã Hải Ninh", province: 13, district: 102
	},
	{
		id: 23023, name: "Xã Sông Lũy", province: 13, district: 102
	},
	{
		id: 23026, name: "Xã Phan Tiến", province: 13, district: 102
	},
	{
		id: 23029, name: "Xã Sông Bình", province: 13, district: 102
	},
	{
		id: 23032, name: "Thị trấn Lương Sơn", province: 13, district: 102
	},
	{
		id: 23035, name: "Xã Phan Hòa", province: 13, district: 102
	},
	{
		id: 23038, name: "Xã Phan Thanh", province: 13, district: 102
	},
	{
		id: 23041, name: "Xã Hồng Thái", province: 13, district: 102
	},
	{
		id: 23044, name: "Xã Phan Hiệp", province: 13, district: 102
	},
	{
		id: 23047, name: "Xã Bình Tân", province: 13, district: 102
	},
	{
		id: 23050, name: "Xã Phan Rí Thành", province: 13, district: 102
	},
	{
		id: 23053, name: "Xã Hòa Thắng", province: 13, district: 102
	},
	{
		id: 23056, name: "Xã Hồng Phong", province: 13, district: 102
	},
	{
		id: 23059, name: "Thị trấn Ma Lâm", province: 13, district: 103
	},
	{
		id: 23062, name: "Thị trấn Phú Long", province: 13, district: 103
	},
	{
		id: 23065, name: "Xã La Dạ", province: 13, district: 103
	},
	{
		id: 23068, name: "Xã Đông Tiến", province: 13, district: 103
	},
	{
		id: 23071, name: "Xã Thuận Hòa", province: 13, district: 103
	},
	{
		id: 23074, name: "Xã Đông Giang", province: 13, district: 103
	},
	{
		id: 23077, name: "Xã Hàm Phú", province: 13, district: 103
	},
	{
		id: 23080, name: "Xã Hồng Liêm", province: 13, district: 103
	},
	{
		id: 23083, name: "Xã Thuận Minh", province: 13, district: 103
	},
	{
		id: 23086, name: "Xã Hồng Sơn", province: 13, district: 103
	},
	{
		id: 23089, name: "Xã Hàm Trí", province: 13, district: 103
	},
	{
		id: 23092, name: "Xã Hàm Đức", province: 13, district: 103
	},
	{
		id: 23095, name: "Xã Hàm Liêm", province: 13, district: 103
	},
	{
		id: 23098, name: "Xã Hàm Chính", province: 13, district: 103
	},
	{
		id: 23101, name: "Xã Hàm Hiệp", province: 13, district: 103
	},
	{
		id: 23104, name: "Xã Hàm Thắng", province: 13, district: 103
	},
	{
		id: 23107, name: "Xã Đa Mi", province: 13, district: 103
	},
	{
		id: 23110, name: "Thị trấn Thuận Nam", province: 13, district: 104
	},
	{
		id: 23113, name: "Xã Mỹ Thạnh", province: 13, district: 104
	},
	{
		id: 23116, name: "Xã Hàm Cần", province: 13, district: 104
	},
	{
		id: 23119, name: "Xã Mương Mán", province: 13, district: 104
	},
	{
		id: 23122, name: "Xã Hàm Thạnh", province: 13, district: 104
	},
	{
		id: 23125, name: "Xã Hàm Kiệm", province: 13, district: 104
	},
	{
		id: 23128, name: "Xã Hàm Cường", province: 13, district: 104
	},
	{
		id: 23131, name: "Xã Hàm Mỹ", province: 13, district: 104
	},
	{
		id: 23134, name: "Xã Tân Lập", province: 13, district: 104
	},
	{
		id: 23137, name: "Xã Hàm Minh", province: 13, district: 104
	},
	{
		id: 23140, name: "Xã Thuận Quí", province: 13, district: 104
	},
	{
		id: 23143, name: "Xã Tân Thuận", province: 13, district: 104
	},
	{
		id: 23146, name: "Xã Tân Thành", province: 13, district: 104
	},
	{
		id: 23230, name: "Thị trấn Tân Minh", province: 13, district: 105
	},
	{
		id: 23236, name: "Thị trấn Tân Nghĩa", province: 13, district: 105
	},
	{
		id: 23239, name: "Xã Sông Phan", province: 13, district: 105
	},
	{
		id: 23242, name: "Xã Tân Phúc", province: 13, district: 105
	},
	{
		id: 23251, name: "Xã Tân Đức", province: 13, district: 105
	},
	{
		id: 23254, name: "Xã Tân Thắng", province: 13, district: 105
	},
	{
		id: 23255, name: "Xã Thắng Hải", province: 13, district: 105
	},
	{
		id: 23257, name: "Xã Tân Hà", province: 13, district: 105
	},
	{
		id: 23260, name: "Xã Tân Xuân", province: 13, district: 105
	},
	{
		id: 23266, name: "Xã Sơn Mỹ", province: 13, district: 105
	},
	{
		id: 23191, name: "Thị trấn Võ Xu", province: 13, district: 106
	},
	{
		id: 23194, name: "Thị trấn Đức Tài", province: 13, district: 106
	},
	{
		id: 23197, name: "Xã Đa Kai", province: 13, district: 106
	},
	{
		id: 23200, name: "Xã Sùng Nhơn", province: 13, district: 106
	},
	{
		id: 23203, name: "Xã Mê Pu", province: 13, district: 106
	},
	{
		id: 23206, name: "Xã Nam Chính", province: 13, district: 106
	},
	{
		id: 23209, name: "Xã Đức Chính", province: 13, district: 106
	},
	{
		id: 23212, name: "Xã Đức Hạnh", province: 13, district: 106
	},
	{
		id: 23215, name: "Xã Đức Tín", province: 13, district: 106
	},
	{
		id: 23218, name: "Xã Vũ Hoà", province: 13, district: 106
	},
	{
		id: 23221, name: "Xã Tân Hà", province: 13, district: 106
	},
	{
		id: 23224, name: "Xã Đông Hà", province: 13, district: 106
	},
	{
		id: 23227, name: "Xã Trà Tân", province: 13, district: 106
	},
	{
		id: 23149, name: "Thị trấn Lạc Tánh", province: 13, district: 107
	},
	{
		id: 23152, name: "Xã Bắc Ruộng", province: 13, district: 107
	},
	{
		id: 23155, name: "Xã Măng Tố", province: 13, district: 107
	},
	{
		id: 23158, name: "Xã Nghị Đức", province: 13, district: 107
	},
	{
		id: 23161, name: "Xã La Ngâu", province: 13, district: 107
	},
	{
		id: 23164, name: "Xã Huy Khiêm", province: 13, district: 107
	},
	{
		id: 23167, name: "Xã Đức Tân", province: 13, district: 107
	},
	{
		id: 23170, name: "Xã Đức Phú", province: 13, district: 107
	},
	{
		id: 23173, name: "Xã Đồng Kho", province: 13, district: 107
	},
	{
		id: 23176, name: "Xã Gia An", province: 13, district: 107
	},
	{
		id: 23179, name: "Xã Đức Bình", province: 13, district: 107
	},
	{
		id: 23182, name: "Xã Gia Huynh", province: 13, district: 107
	},
	{
		id: 23185, name: "Xã Đức Thuận", province: 13, district: 107
	},
	{
		id: 23188, name: "Xã Suối Kiết", province: 13, district: 107
	},
	{
		id: 23272, name: "Xã Ngũ Phụng", province: 13, district: 108
	},
	{
		id: 23275, name: "Xã Long Hải", province: 13, district: 108
	},
	{
		id: 23278, name: "Xã Tam Thanh", province: 13, district: 108
	},
	{
		id: 22237, name: "Phường Bình Tân", province: 13, district: 719
	},
	{
		id: 23231, name: "Phường Phước Hội", province: 13, district: 719
	},
	{
		id: 23232, name: "Phường Phước Lộc", province: 13, district: 719
	},
	{
		id: 23234, name: "Phường Tân Thiện", province: 13, district: 719
	},
	{
		id: 23235, name: "Phường Tân An", province: 13, district: 719
	},
	{
		id: 23245, name: "Xã Tân Hải", province: 13, district: 719
	},
	{
		id: 23246, name: "Xã Tân Tiến", province: 13, district: 719
	},
	{
		id: 23248, name: "Xã Tân Bình", province: 13, district: 719
	},
	{
		id: 23268, name: "Xã Tân Phước", province: 13, district: 719
	},
	{
		id: 31999, name: "Phường 9", province: 14, district: 182
	},
	{
		id: 32002, name: "Phường 4", province: 14, district: 182
	},
	{
		id: 32005, name: "Phường 1", province: 14, district: 182
	},
	{
		id: 32008, name: "Phường 5", province: 14, district: 182
	},
	{
		id: 32011, name: "Phường 2", province: 14, district: 182
	},
	{
		id: 32014, name: "Phường 8", province: 14, district: 182
	},
	{
		id: 32017, name: "Phường 6", province: 14, district: 182
	},
	{
		id: 32020, name: "Phường 7", province: 14, district: 182
	},
	{
		id: 32022, name: "Phường Tân Xuyên", province: 14, district: 182
	},
	{
		id: 32023, name: "Xã An Xuyên", province: 14, district: 182
	},
	{
		id: 32025, name: "Phường Tân Thành", province: 14, district: 182
	},
	{
		id: 32026, name: "Xã Tân Thành", province: 14, district: 182
	},
	{
		id: 32029, name: "Xã Tắc Vân", province: 14, district: 182
	},
	{
		id: 32032, name: "Xã Lý Văn Lâm", province: 14, district: 182
	},
	{
		id: 32035, name: "Xã Định Bình", province: 14, district: 182
	},
	{
		id: 32038, name: "Xã Hòa Thành", province: 14, district: 182
	},
	{
		id: 32041, name: "Xã Hòa Tân", province: 14, district: 182
	},
	{
		id: 32128, name: "Thị trấn Cái Nước", province: 14, district: 183
	},
	{
		id: 32130, name: "Xã Thạnh Phú", province: 14, district: 183
	},
	{
		id: 32131, name: "Xã Lương Thế Trân", province: 14, district: 183
	},
	{
		id: 32134, name: "Xã Phú Hưng", province: 14, district: 183
	},
	{
		id: 32137, name: "Xã Tân Hưng", province: 14, district: 183
	},
	{
		id: 32140, name: "Xã Hưng Mỹ", province: 14, district: 183
	},
	{
		id: 32141, name: "Xã Hòa Mỹ", province: 14, district: 183
	},
	{
		id: 32142, name: "Xã Đông Hưng", province: 14, district: 183
	},
	{
		id: 32143, name: "Xã Đông Thới", province: 14, district: 183
	},
	{
		id: 32146, name: "Xã Tân Hưng Đông", province: 14, district: 183
	},
	{
		id: 32149, name: "Xã Trần Thới", province: 14, district: 183
	},
	{
		id: 32095, name: "Thị trấn Trần Văn Thời", province: 14, district: 184
	},
	{
		id: 32098, name: "Thị trấn Sông Đốc", province: 14, district: 184
	},
	{
		id: 32101, name: "Xã Khánh Bình Tây Bắc", province: 14, district: 184
	},
	{
		id: 32104, name: "Xã Khánh Bình Tây", province: 14, district: 184
	},
	{
		id: 32107, name: "Xã Trần Hợi", province: 14, district: 184
	},
	{
		id: 32108, name: "Xã Khánh Lộc", province: 14, district: 184
	},
	{
		id: 32110, name: "Xã Khánh Bình", province: 14, district: 184
	},
	{
		id: 32113, name: "Xã Khánh Hưng", province: 14, district: 184
	},
	{
		id: 32116, name: "Xã Khánh Bình Đông", province: 14, district: 184
	},
	{
		id: 32119, name: "Xã Khánh Hải", province: 14, district: 184
	},
	{
		id: 32122, name: "Xã Lợi An", province: 14, district: 184
	},
	{
		id: 32124, name: "Xã Phong Điền", province: 14, district: 184
	},
	{
		id: 32125, name: "Xã Phong Lạc", province: 14, district: 184
	},
	{
		id: 32044, name: "Thị trấn U Minh", province: 14, district: 185
	},
	{
		id: 32047, name: "Xã Khánh Hòa", province: 14, district: 185
	},
	{
		id: 32048, name: "Xã Khánh Thuận", province: 14, district: 185
	},
	{
		id: 32050, name: "Xã Khánh Tiến", province: 14, district: 185
	},
	{
		id: 32053, name: "Xã Nguyễn Phích", province: 14, district: 185
	},
	{
		id: 32056, name: "Xã Khánh Lâm", province: 14, district: 185
	},
	{
		id: 32059, name: "Xã Khánh An", province: 14, district: 185
	},
	{
		id: 32062, name: "Xã Khánh Hội", province: 14, district: 185
	},
	{
		id: 32065, name: "Thị trấn Thới Bình", province: 14, district: 186
	},
	{
		id: 32068, name: "Xã Biển Bạch", province: 14, district: 186
	},
	{
		id: 32069, name: "Xã Tân Bằng", province: 14, district: 186
	},
	{
		id: 32071, name: "Xã Trí Phải", province: 14, district: 186
	},
	{
		id: 32072, name: "Xã Trí Lực", province: 14, district: 186
	},
	{
		id: 32074, name: "Xã Biển Bạch Đông", province: 14, district: 186
	},
	{
		id: 32077, name: "Xã Thới Bình", province: 14, district: 186
	},
	{
		id: 32080, name: "Xã Tân Phú", province: 14, district: 186
	},
	{
		id: 32083, name: "Xã Tân Lộc Bắc", province: 14, district: 186
	},
	{
		id: 32086, name: "Xã Tân Lộc", province: 14, district: 186
	},
	{
		id: 32089, name: "Xã Tân Lộc Đông", province: 14, district: 186
	},
	{
		id: 32092, name: "Xã Hồ Thị Kỷ", province: 14, district: 186
	},
	{
		id: 32152, name: "Thị trấn Đầm Dơi", province: 14, district: 187
	},
	{
		id: 32155, name: "Xã Tạ An Khương", province: 14, district: 187
	},
	{
		id: 32158, name: "Xã Tạ An Khương Đông", province: 14, district: 187
	},
	{
		id: 32161, name: "Xã Trần Phán", province: 14, district: 187
	},
	{
		id: 32162, name: "Xã Tân Trung", province: 14, district: 187
	},
	{
		id: 32164, name: "Xã Tân Đức", province: 14, district: 187
	},
	{
		id: 32167, name: "Xã Tân Thuận", province: 14, district: 187
	},
	{
		id: 32170, name: "Xã Tạ An Khương Nam", province: 14, district: 187
	},
	{
		id: 32173, name: "Xã Tân Duyệt", province: 14, district: 187
	},
	{
		id: 32174, name: "Xã Tân Dân", province: 14, district: 187
	},
	{
		id: 32176, name: "Xã Tân Tiến", province: 14, district: 187
	},
	{
		id: 32179, name: "Xã Quách Phẩm Bắc", province: 14, district: 187
	},
	{
		id: 32182, name: "Xã Quách Phẩm", province: 14, district: 187
	},
	{
		id: 32185, name: "Xã Thanh Tùng", province: 14, district: 187
	},
	{
		id: 32186, name: "Xã Ngọc Chánh", province: 14, district: 187
	},
	{
		id: 32188, name: "Xã Nguyễn Huân", province: 14, district: 187
	},
	{
		id: 32233, name: "Xã Tam Giang Tây", province: 14, district: 188
	},
	{
		id: 32236, name: "Xã Tân Ân Tây", province: 14, district: 188
	},
	{
		id: 32239, name: "Xã Viên An Đông", province: 14, district: 188
	},
	{
		id: 32242, name: "Xã Viên An", province: 14, district: 188
	},
	{
		id: 32244, name: "Thị trấn Rạch Gốc", province: 14, district: 188
	},
	{
		id: 32245, name: "Xã Tân Ân", province: 14, district: 188
	},
	{
		id: 32248, name: "Xã Đất Mũi", province: 14, district: 188
	},
	{
		id: 32191, name: "Thị trấn Năm Căn", province: 14, district: 189
	},
	{
		id: 32194, name: "Xã Hàm Rồng", province: 14, district: 189
	},
	{
		id: 32197, name: "Xã Hiệp Tùng", province: 14, district: 189
	},
	{
		id: 32200, name: "Xã Đất Mới", province: 14, district: 189
	},
	{
		id: 32201, name: "Xã Lâm Hải", province: 14, district: 189
	},
	{
		id: 32203, name: "Xã Hàng Vịnh", province: 14, district: 189
	},
	{
		id: 32206, name: "Xã Tam Giang", province: 14, district: 189
	},
	{
		id: 32209, name: "Xã Tam Giang Đông", province: 14, district: 189
	},
	{
		id: 32212, name: "Thị trấn Cái Đôi Vàm", province: 14, district: 190
	},
	{
		id: 32214, name: "Xã Phú Thuận", province: 14, district: 190
	},
	{
		id: 32215, name: "Xã Phú Mỹ", province: 14, district: 190
	},
	{
		id: 32218, name: "Xã Phú Tân", province: 14, district: 190
	},
	{
		id: 32221, name: "Xã Tân Hải", province: 14, district: 190
	},
	{
		id: 32224, name: "Xã Việt Thắng", province: 14, district: 190
	},
	{
		id: 32227, name: "Xã Tân Hưng Tây", province: 14, district: 190
	},
	{
		id: 32228, name: "Xã Rạch Chèo", province: 14, district: 190
	},
	{
		id: 32230, name: "Xã Việt Khái", province: 14, district: 190
	},
	{
		id: 31168, name: "Phường Bình Thủy", province: 15, district: 174
	},
	{
		id: 31169, name: "Phường Trà An", province: 15, district: 174
	},
	{
		id: 31171, name: "Phường Trà Nóc", province: 15, district: 174
	},
	{
		id: 31174, name: "Phường Thới An Đông", province: 15, district: 174
	},
	{
		id: 31177, name: "Phường An Thới", province: 15, district: 174
	},
	{
		id: 31178, name: "Phường Bùi Hữu Nghĩa", province: 15, district: 174
	},
	{
		id: 31180, name: "Phường Long Hòa", province: 15, district: 174
	},
	{
		id: 31183, name: "Phường Long Tuyền", province: 15, district: 174
	},
	{
		id: 31117, name: "Phường Cái Khế", province: 15, district: 175
	},
	{
		id: 31120, name: "Phường An Hòa", province: 15, district: 175
	},
	{
		id: 31123, name: "Phường Thới Bình", province: 15, district: 175
	},
	{
		id: 31126, name: "Phường An Nghiệp", province: 15, district: 175
	},
	{
		id: 31129, name: "Phường An Cư", province: 15, district: 175
	},
	{
		id: 31132, name: "Phường An Hội", province: 15, district: 175
	},
	{
		id: 31135, name: "Phường Tân An", province: 15, district: 175
	},
	{
		id: 31138, name: "Phường An Lạc", province: 15, district: 175
	},
	{
		id: 31141, name: "Phường An Phú", province: 15, district: 175
	},
	{
		id: 31144, name: "Phường Xuân Khánh", province: 15, district: 175
	},
	{
		id: 31147, name: "Phường Hưng Lợi", province: 15, district: 175
	},
	{
		id: 31149, name: "Phường An Khánh", province: 15, district: 175
	},
	{
		id: 31150, name: "Phường An Bình", province: 15, district: 175
	},
	{
		id: 31186, name: "Phường Lê Bình", province: 15, district: 176
	},
	{
		id: 31189, name: "Phường Hưng Phú", province: 15, district: 176
	},
	{
		id: 31192, name: "Phường Hưng Thạnh", province: 15, district: 176
	},
	{
		id: 31195, name: "Phường Ba Láng", province: 15, district: 176
	},
	{
		id: 31198, name: "Phường Thường Thạnh", province: 15, district: 176
	},
	{
		id: 31201, name: "Phường Phú Thứ", province: 15, district: 176
	},
	{
		id: 31204, name: "Phường Tân Phú", province: 15, district: 176
	},
	{
		id: 31153, name: "Phường Châu Văn Liêm", province: 15, district: 177
	},
	{
		id: 31154, name: "Phường Thới Hoà", province: 15, district: 177
	},
	{
		id: 31156, name: "Phường Thới Long", province: 15, district: 177
	},
	{
		id: 31157, name: "Phường Long Hưng", province: 15, district: 177
	},
	{
		id: 31159, name: "Phường Thới An", province: 15, district: 177
	},
	{
		id: 31162, name: "Phường Phước Thới", province: 15, district: 177
	},
	{
		id: 31165, name: "Phường Trường Lạc", province: 15, district: 177
	},
	{
		id: 31299, name: "Thị trấn Phong Điền", province: 15, district: 178
	},
	{
		id: 31300, name: "Xã Nhơn Ái", province: 15, district: 178
	},
	{
		id: 31303, name: "Xã Giai Xuân", province: 15, district: 178
	},
	{
		id: 31306, name: "Xã Tân Thới", province: 15, district: 178
	},
	{
		id: 31309, name: "Xã Trường Long", province: 15, district: 178
	},
	{
		id: 31312, name: "Xã Mỹ Khánh", province: 15, district: 178
	},
	{
		id: 31315, name: "Xã Nhơn Nghĩa", province: 15, district: 178
	},
	{
		id: 31222, name: "Xã Trung An", province: 15, district: 179
	},
	{
		id: 31225, name: "Xã Trung Thạnh", province: 15, district: 179
	},
	{
		id: 31249, name: "Xã Thạnh Phú", province: 15, district: 179
	},
	{
		id: 31255, name: "Xã Trung Hưng", province: 15, district: 179
	},
	{
		id: 31261, name: "Thị trấn Cờ Đỏ", province: 15, district: 179
	},
	{
		id: 31264, name: "Xã Thới Hưng", province: 15, district: 179
	},
	{
		id: 31273, name: "Xã Đông Hiệp", province: 15, district: 179
	},
	{
		id: 31274, name: "Xã Đông Thắng", province: 15, district: 179
	},
	{
		id: 31276, name: "Xã Thới Đông", province: 15, district: 179
	},
	{
		id: 31277, name: "Xã Thới Xuân", province: 15, district: 179
	},
	{
		id: 31211, name: "Xã Vĩnh Bình", province: 15, district: 180
	},
	{
		id: 31231, name: "Thị trấn Thạnh An", province: 15, district: 180
	},
	{
		id: 31232, name: "Thị trấn Vĩnh Thạnh", province: 15, district: 180
	},
	{
		id: 31234, name: "Xã Thạnh Mỹ", province: 15, district: 180
	},
	{
		id: 31237, name: "Xã Vĩnh Trinh", province: 15, district: 180
	},
	{
		id: 31240, name: "Xã Thạnh An", province: 15, district: 180
	},
	{
		id: 31241, name: "Xã Thạnh Tiến", province: 15, district: 180
	},
	{
		id: 31243, name: "Xã Thạnh Thắng", province: 15, district: 180
	},
	{
		id: 31244, name: "Xã Thạnh Lợi", province: 15, district: 180
	},
	{
		id: 31246, name: "Xã Thạnh Qưới", province: 15, district: 180
	},
	{
		id: 31252, name: "Xã Thạnh Lộc", province: 15, district: 180
	},
	{
		id: 31207, name: "Phường Thốt Nốt", province: 15, district: 181
	},
	{
		id: 31210, name: "Phường Thới Thuận", province: 15, district: 181
	},
	{
		id: 31212, name: "Phường Thuận An", province: 15, district: 181
	},
	{
		id: 31213, name: "Phường Tân Lộc", province: 15, district: 181
	},
	{
		id: 31216, name: "Phường Trung Nhất", province: 15, district: 181
	},
	{
		id: 31217, name: "Phường Thạnh Hoà", province: 15, district: 181
	},
	{
		id: 31219, name: "Phường Trung Kiên", province: 15, district: 181
	},
	{
		id: 31227, name: "Phường Tân Hưng", province: 15, district: 181
	},
	{
		id: 31228, name: "Phường Thuận Hưng", province: 15, district: 181
	},
	{
		id: 31258, name: "Thị trấn Thới Lai", province: 15, district: 725
	},
	{
		id: 31267, name: "Xã Thới Thạnh", province: 15, district: 725
	},
	{
		id: 31268, name: "Xã Tân Thạnh", province: 15, district: 725
	},
	{
		id: 31270, name: "Xã Xuân Thắng", province: 15, district: 725
	},
	{
		id: 31279, name: "Xã Đông Bình", province: 15, district: 725
	},
	{
		id: 31282, name: "Xã Đông Thuận", province: 15, district: 725
	},
	{
		id: 31285, name: "Xã Thới Tân", province: 15, district: 725
	},
	{
		id: 31286, name: "Xã Trường Thắng", province: 15, district: 725
	},
	{
		id: 31288, name: "Xã Định Môn", province: 15, district: 725
	},
	{
		id: 31291, name: "Xã Trường Thành", province: 15, district: 725
	},
	{
		id: 31294, name: "Xã Trường Xuân", province: 15, district: 725
	},
	{
		id: 31297, name: "Xã Trường Xuân A", province: 15, district: 725
	},
	{
		id: 31298, name: "Xã Trường Xuân B", province: 15, district: 725
	},
	{
		id: 1267, name: "Phường Sông Hiến", province: 16, district: 161
	},
	{
		id: 1270, name: "Phường Sông Bằng", province: 16, district: 161
	},
	{
		id: 1273, name: "Phường Hợp Giang", province: 16, district: 161
	},
	{
		id: 1276, name: "Phường Tân Giang", province: 16, district: 161
	},
	{
		id: 1279, name: "Phường Ngọc Xuân", province: 16, district: 161
	},
	{
		id: 1282, name: "Phường Đề Thám", province: 16, district: 161
	},
	{
		id: 1285, name: "Phường Hoà Chung", province: 16, district: 161
	},
	{
		id: 1288, name: "Phường Duyệt Trung", province: 16, district: 161
	},
	{
		id: 1693, name: "Xã Vĩnh Quang", province: 16, district: 161
	},
	{
		id: 1705, name: "Xã Hưng Đạo", province: 16, district: 161
	},
	{
		id: 1720, name: "Xã Chu Trinh", province: 16, district: 161
	},
	{
		id: 1477, name: "Thị trấn Trùng Khánh", province: 16, district: 162
	},
	{
		id: 1480, name: "Xã Ngọc Khê", province: 16, district: 162
	},
	{
		id: 1481, name: "Xã Ngọc Côn", province: 16, district: 162
	},
	{
		id: 1483, name: "Xã Phong Nậm", province: 16, district: 162
	},
	{
		id: 1486, name: "Xã Ngọc Chung", province: 16, district: 162
	},
	{
		id: 1489, name: "Xã Đình Phong", province: 16, district: 162
	},
	{
		id: 1492, name: "Xã Lăng Yên", province: 16, district: 162
	},
	{
		id: 1495, name: "Xã Đàm Thuỷ", province: 16, district: 162
	},
	{
		id: 1498, name: "Xã Khâm Thành", province: 16, district: 162
	},
	{
		id: 1501, name: "Xã Chí Viễn", province: 16, district: 162
	},
	{
		id: 1504, name: "Xã Lăng Hiếu", province: 16, district: 162
	},
	{
		id: 1507, name: "Xã Phong Châu", province: 16, district: 162
	},
	{
		id: 1510, name: "Xã Đình Minh", province: 16, district: 162
	},
	{
		id: 1513, name: "Xã Cảnh Tiên", province: 16, district: 162
	},
	{
		id: 1516, name: "Xã Trung Phúc", province: 16, district: 162
	},
	{
		id: 1519, name: "Xã Cao Thăng", province: 16, district: 162
	},
	{
		id: 1522, name: "Xã Đức Hồng", province: 16, district: 162
	},
	{
		id: 1525, name: "Xã Thông Hoè", province: 16, district: 162
	},
	{
		id: 1528, name: "Xã Thân Giáp", province: 16, district: 162
	},
	{
		id: 1531, name: "Xã Đoài Côn", province: 16, district: 162
	},
	{
		id: 1321, name: "Thị trấn Bảo Lạc", province: 16, district: 163
	},
	{
		id: 1324, name: "Xã Cốc Pàng", province: 16, district: 163
	},
	{
		id: 1327, name: "Xã Thượng Hà", province: 16, district: 163
	},
	{
		id: 1330, name: "Xã Cô Ba", province: 16, district: 163
	},
	{
		id: 1333, name: "Xã Bảo Toàn", province: 16, district: 163
	},
	{
		id: 1336, name: "Xã Khánh Xuân", province: 16, district: 163
	},
	{
		id: 1339, name: "Xã Xuân Trường", province: 16, district: 163
	},
	{
		id: 1342, name: "Xã Hồng Trị", province: 16, district: 163
	},
	{
		id: 1343, name: "Xã Kim Cúc", province: 16, district: 163
	},
	{
		id: 1345, name: "Xã Phan Thanh", province: 16, district: 163
	},
	{
		id: 1348, name: "Xã Hồng An", province: 16, district: 163
	},
	{
		id: 1351, name: "Xã Hưng Đạo", province: 16, district: 163
	},
	{
		id: 1352, name: "Xã Hưng Thịnh", province: 16, district: 163
	},
	{
		id: 1354, name: "Xã Huy Giáp", province: 16, district: 163
	},
	{
		id: 1357, name: "Xã Đình Phùng", province: 16, district: 163
	},
	{
		id: 1359, name: "Xã Sơn Lập", province: 16, district: 163
	},
	{
		id: 1360, name: "Xã Sơn Lộ", province: 16, district: 163
	},
	{
		id: 1363, name: "Thị trấn Thông Nông", province: 16, district: 164
	},
	{
		id: 1366, name: "Xã Cần Yên", province: 16, district: 164
	},
	{
		id: 1367, name: "Xã Cần Nông", province: 16, district: 164
	},
	{
		id: 1369, name: "Xã Vị Quang", province: 16, district: 164
	},
	{
		id: 1372, name: "Xã Lương Thông", province: 16, district: 164
	},
	{
		id: 1375, name: "Xã Đa Thông", province: 16, district: 164
	},
	{
		id: 1378, name: "Xã Ngọc Động", province: 16, district: 164
	},
	{
		id: 1381, name: "Xã Yên Sơn", province: 16, district: 164
	},
	{
		id: 1384, name: "Xã Lương Can", province: 16, district: 164
	},
	{
		id: 1387, name: "Xã Thanh Long", province: 16, district: 164
	},
	{
		id: 1390, name: "Xã Bình Lãng", province: 16, district: 164
	},
	{
		id: 1392, name: "Thị trấn Xuân Hoà", province: 16, district: 165
	},
	{
		id: 1393, name: "Xã Lũng Nặm", province: 16, district: 165
	},
	{
		id: 1396, name: "Xã Kéo Yên", province: 16, district: 165
	},
	{
		id: 1399, name: "Xã Trường Hà", province: 16, district: 165
	},
	{
		id: 1402, name: "Xã Vân An", province: 16, district: 165
	},
	{
		id: 1405, name: "Xã Cải Viên", province: 16, district: 165
	},
	{
		id: 1408, name: "Xã Nà Sác", province: 16, district: 165
	},
	{
		id: 1411, name: "Xã Nội Thôn", province: 16, district: 165
	},
	{
		id: 1414, name: "Xã Tổng Cọt", province: 16, district: 165
	},
	{
		id: 1417, name: "Xã Sóc Hà", province: 16, district: 165
	},
	{
		id: 1420, name: "Xã Thượng Thôn", province: 16, district: 165
	},
	{
		id: 1423, name: "Xã Vần Dính", province: 16, district: 165
	},
	{
		id: 1426, name: "Xã Hồng Sĩ", province: 16, district: 165
	},
	{
		id: 1429, name: "Xã Sĩ Hai", province: 16, district: 165
	},
	{
		id: 1432, name: "Xã Quý Quân", province: 16, district: 165
	},
	{
		id: 1435, name: "Xã Mã Ba", province: 16, district: 165
	},
	{
		id: 1438, name: "Xã Phù Ngọc", province: 16, district: 165
	},
	{
		id: 1441, name: "Xã Đào Ngạn", province: 16, district: 165
	},
	{
		id: 1444, name: "Xã Hạ Thôn", province: 16, district: 165
	},
	{
		id: 1447, name: "Thị trấn Hùng Quốc", province: 16, district: 166
	},
	{
		id: 1450, name: "Xã Cô Mười", province: 16, district: 166
	},
	{
		id: 1453, name: "Xã Tri Phương", province: 16, district: 166
	},
	{
		id: 1456, name: "Xã Quang Hán", province: 16, district: 166
	},
	{
		id: 1459, name: "Xã Quang Vinh", province: 16, district: 166
	},
	{
		id: 1462, name: "Xã Xuân Nội", province: 16, district: 166
	},
	{
		id: 1465, name: "Xã Quang Trung", province: 16, district: 166
	},
	{
		id: 1468, name: "Xã Lưu Ngọc", province: 16, district: 166
	},
	{
		id: 1471, name: "Xã Cao Chương", province: 16, district: 166
	},
	{
		id: 1474, name: "Xã Quốc Toản", province: 16, district: 166
	},
	{
		id: 1726, name: "Thị trấn Nguyên Bình", province: 16, district: 167
	},
	{
		id: 1729, name: "Thị trấn Tĩnh Túc", province: 16, district: 167
	},
	{
		id: 1732, name: "Xã Yên Lạc", province: 16, district: 167
	},
	{
		id: 1735, name: "Xã Triệu Nguyên", province: 16, district: 167
	},
	{
		id: 1738, name: "Xã Ca Thành", province: 16, district: 167
	},
	{
		id: 1741, name: "Xã Thái Học", province: 16, district: 167
	},
	{
		id: 1744, name: "Xã Vũ Nông", province: 16, district: 167
	},
	{
		id: 1747, name: "Xã Minh Tâm", province: 16, district: 167
	},
	{
		id: 1750, name: "Xã Thể Dục", province: 16, district: 167
	},
	{
		id: 1753, name: "Xã Bắc Hợp", province: 16, district: 167
	},
	{
		id: 1756, name: "Xã Mai Long", province: 16, district: 167
	},
	{
		id: 1759, name: "Xã Lang Môn", province: 16, district: 167
	},
	{
		id: 1762, name: "Xã Minh Thanh", province: 16, district: 167
	},
	{
		id: 1765, name: "Xã Hoa Thám", province: 16, district: 167
	},
	{
		id: 1768, name: "Xã Phan Thanh", province: 16, district: 167
	},
	{
		id: 1771, name: "Xã Quang Thành", province: 16, district: 167
	},
	{
		id: 1774, name: "Xã Tam Kim", province: 16, district: 167
	},
	{
		id: 1777, name: "Xã Thành Công", province: 16, district: 167
	},
	{
		id: 1780, name: "Xã Thịnh Vượng", province: 16, district: 167
	},
	{
		id: 1783, name: "Xã Hưng Đạo", province: 16, district: 167
	},
	{
		id: 1654, name: "Thị trấn Nước Hai", province: 16, district: 168
	},
	{
		id: 1657, name: "Xã Dân Chủ", province: 16, district: 168
	},
	{
		id: 1660, name: "Xã Nam Tuấn", province: 16, district: 168
	},
	{
		id: 1663, name: "Xã Đức Xuân", province: 16, district: 168
	},
	{
		id: 1666, name: "Xã Đại Tiến", province: 16, district: 168
	},
	{
		id: 1669, name: "Xã Đức Long", province: 16, district: 168
	},
	{
		id: 1672, name: "Xã Ngũ Lão", province: 16, district: 168
	},
	{
		id: 1675, name: "Xã Trương Lương", province: 16, district: 168
	},
	{
		id: 1678, name: "Xã Bình Long", province: 16, district: 168
	},
	{
		id: 1681, name: "Xã Nguyễn Huệ", province: 16, district: 168
	},
	{
		id: 1684, name: "Xã Công Trừng", province: 16, district: 168
	},
	{
		id: 1687, name: "Xã Hồng Việt", province: 16, district: 168
	},
	{
		id: 1690, name: "Xã Bế Triều", province: 16, district: 168
	},
	{
		id: 1696, name: "Xã Hoàng Tung", province: 16, district: 168
	},
	{
		id: 1699, name: "Xã Trương Vương", province: 16, district: 168
	},
	{
		id: 1702, name: "Xã Quang Trung", province: 16, district: 168
	},
	{
		id: 1708, name: "Xã Bạch Đằng", province: 16, district: 168
	},
	{
		id: 1711, name: "Xã Bình Dương", province: 16, district: 168
	},
	{
		id: 1714, name: "Xã Lê Chung", province: 16, district: 168
	},
	{
		id: 1717, name: "Xã Hà Trì", province: 16, district: 168
	},
	{
		id: 1723, name: "Xã Hồng Nam", province: 16, district: 168
	},
	{
		id: 1576, name: "Thị trấn Quảng Uyên", province: 16, district: 169
	},
	{
		id: 1579, name: "Xã Phi Hải", province: 16, district: 169
	},
	{
		id: 1582, name: "Xã Quảng Hưng", province: 16, district: 169
	},
	{
		id: 1585, name: "Xã Bình Lăng", province: 16, district: 169
	},
	{
		id: 1588, name: "Xã Quốc Dân", province: 16, district: 169
	},
	{
		id: 1591, name: "Xã Quốc Phong", province: 16, district: 169
	},
	{
		id: 1594, name: "Xã Độc Lập", province: 16, district: 169
	},
	{
		id: 1597, name: "Xã Cai Bộ", province: 16, district: 169
	},
	{
		id: 1600, name: "Xã Đoài Khôn", province: 16, district: 169
	},
	{
		id: 1603, name: "Xã Phúc Sen", province: 16, district: 169
	},
	{
		id: 1606, name: "Xã Chí Thảo", province: 16, district: 169
	},
	{
		id: 1609, name: "Xã Tự Do", province: 16, district: 169
	},
	{
		id: 1612, name: "Xã Hồng Định", province: 16, district: 169
	},
	{
		id: 1615, name: "Xã Hồng Quang", province: 16, district: 169
	},
	{
		id: 1618, name: "Xã Ngọc Động", province: 16, district: 169
	},
	{
		id: 1621, name: "Xã Hoàng Hải", province: 16, district: 169
	},
	{
		id: 1624, name: "Xã Hạnh Phúc", province: 16, district: 169
	},
	{
		id: 1786, name: "Thị trấn Đông Khê", province: 16, district: 170
	},
	{
		id: 1789, name: "Xã Canh Tân", province: 16, district: 170
	},
	{
		id: 1792, name: "Xã Kim Đồng", province: 16, district: 170
	},
	{
		id: 1795, name: "Xã Minh Khai", province: 16, district: 170
	},
	{
		id: 1798, name: "Xã Thị Ngân", province: 16, district: 170
	},
	{
		id: 1801, name: "Xã Đức Thông", province: 16, district: 170
	},
	{
		id: 1804, name: "Xã Thái Cường", province: 16, district: 170
	},
	{
		id: 1807, name: "Xã Vân Trình", province: 16, district: 170
	},
	{
		id: 1810, name: "Xã Thuỵ Hùng", province: 16, district: 170
	},
	{
		id: 1813, name: "Xã Quang Trọng", province: 16, district: 170
	},
	{
		id: 1816, name: "Xã Trọng Con", province: 16, district: 170
	},
	{
		id: 1819, name: "Xã Lê Lai", province: 16, district: 170
	},
	{
		id: 1822, name: "Xã Đức Long", province: 16, district: 170
	},
	{
		id: 1825, name: "Xã Danh Sỹ", province: 16, district: 170
	},
	{
		id: 1828, name: "Xã Lê Lợi", province: 16, district: 170
	},
	{
		id: 1831, name: "Xã Đức Xuân", province: 16, district: 170
	},
	{
		id: 1534, name: "Xã Minh Long", province: 16, district: 171
	},
	{
		id: 1537, name: "Xã Lý Quốc", province: 16, district: 171
	},
	{
		id: 1540, name: "Xã Thắng Lợi", province: 16, district: 171
	},
	{
		id: 1543, name: "Xã Đồng Loan", province: 16, district: 171
	},
	{
		id: 1546, name: "Xã Đức Quang", province: 16, district: 171
	},
	{
		id: 1549, name: "Xã Kim Loan", province: 16, district: 171
	},
	{
		id: 1552, name: "Xã Quang Long", province: 16, district: 171
	},
	{
		id: 1555, name: "Xã An Lạc", province: 16, district: 171
	},
	{
		id: 1558, name: "Thị trấn Thanh Nhật", province: 16, district: 171
	},
	{
		id: 1561, name: "Xã Vinh Quý", province: 16, district: 171
	},
	{
		id: 1564, name: "Xã Việt Chu", province: 16, district: 171
	},
	{
		id: 1567, name: "Xã Cô Ngân", province: 16, district: 171
	},
	{
		id: 1570, name: "Xã Thái Đức", province: 16, district: 171
	},
	{
		id: 1573, name: "Xã Thị Hoa", province: 16, district: 171
	},
	{
		id: 1290, name: "Thị trấn Pác Miầu", province: 16, district: 172
	},
	{
		id: 1291, name: "Xã Đức Hạnh", province: 16, district: 172
	},
	{
		id: 1294, name: "Xã Lý Bôn", province: 16, district: 172
	},
	{
		id: 1296, name: "Xã Nam Cao", province: 16, district: 172
	},
	{
		id: 1297, name: "Xã Nam Quang", province: 16, district: 172
	},
	{
		id: 1300, name: "Xã Vĩnh Quang", province: 16, district: 172
	},
	{
		id: 1303, name: "Xã Quảng Lâm", province: 16, district: 172
	},
	{
		id: 1304, name: "Xã Thạch Lâm", province: 16, district: 172
	},
	{
		id: 1306, name: "Xã Tân Việt", province: 16, district: 172
	},
	{
		id: 1309, name: "Xã Vĩnh Phong", province: 16, district: 172
	},
	{
		id: 1312, name: "Xã Mông Ân", province: 16, district: 172
	},
	{
		id: 1315, name: "Xã Thái Học", province: 16, district: 172
	},
	{
		id: 1316, name: "Xã Thái Sơn", province: 16, district: 172
	},
	{
		id: 1318, name: "Xã Yên Thổ", province: 16, district: 172
	},
	{
		id: 1627, name: "Thị trấn Tà Lùng", province: 16, district: 173
	},
	{
		id: 1630, name: "Xã Triệu Ẩu", province: 16, district: 173
	},
	{
		id: 1633, name: "Xã Hồng Đại", province: 16, district: 173
	},
	{
		id: 1636, name: "Xã Cách Linh", province: 16, district: 173
	},
	{
		id: 1639, name: "Xã Đại Sơn", province: 16, district: 173
	},
	{
		id: 1642, name: "Xã Lương Thiện", province: 16, district: 173
	},
	{
		id: 1645, name: "Xã Tiên Thành", province: 16, district: 173
	},
	{
		id: 1648, name: "Thị trấn Hoà Thuận", province: 16, district: 173
	},
	{
		id: 1651, name: "Xã Mỹ Hưng", province: 16, district: 173
	},
	{
		id: 20227, name: "Phường Thanh Bình", province: 17, district: 42
	},
	{
		id: 20230, name: "Phường Thuận Phước", province: 17, district: 42
	},
	{
		id: 20233, name: "Phường Thạch Thang", province: 17, district: 42
	},
	{
		id: 20236, name: "Phường Hải Châu I", province: 17, district: 42
	},
	{
		id: 20239, name: "Phường Hải Châu II", province: 17, district: 42
	},
	{
		id: 20242, name: "Phường Phước Ninh", province: 17, district: 42
	},
	{
		id: 20245, name: "Phường Hoà Thuận Tây", province: 17, district: 42
	},
	{
		id: 20246, name: "Phường Hoà Thuận Đông", province: 17, district: 42
	},
	{
		id: 20248, name: "Phường Nam Dương", province: 17, district: 42
	},
	{
		id: 20251, name: "Phường Bình Hiên", province: 17, district: 42
	},
	{
		id: 20254, name: "Phường Bình Thuận", province: 17, district: 42
	},
	{
		id: 20257, name: "Phường Hoà Cường Bắc", province: 17, district: 42
	},
	{
		id: 20258, name: "Phường Hoà Cường Nam", province: 17, district: 42
	},
	{
		id: 20203, name: "Phường Tam Thuận", province: 17, district: 43
	},
	{
		id: 20206, name: "Phường Thanh Khê Tây", province: 17, district: 43
	},
	{
		id: 20207, name: "Phường Thanh Khê Đông", province: 17, district: 43
	},
	{
		id: 20209, name: "Phường Xuân Hà", province: 17, district: 43
	},
	{
		id: 20212, name: "Phường Tân Chính", province: 17, district: 43
	},
	{
		id: 20215, name: "Phường Chính Gián", province: 17, district: 43
	},
	{
		id: 20218, name: "Phường Vĩnh Trung", province: 17, district: 43
	},
	{
		id: 20221, name: "Phường Thạc Gián", province: 17, district: 43
	},
	{
		id: 20224, name: "Phường An Khê", province: 17, district: 43
	},
	{
		id: 20225, name: "Phường Hoà Khê", province: 17, district: 43
	},
	{
		id: 20284, name: "Phường Mỹ An", province: 17, district: 44
	},
	{
		id: 20285, name: "Phường Khuê Mỹ", province: 17, district: 44
	},
	{
		id: 20287, name: "Phường Hoà Quý", province: 17, district: 44
	},
	{
		id: 20290, name: "Phường Hoà Hải", province: 17, district: 44
	},
	{
		id: 20263, name: "Phường Thọ Quang", province: 17, district: 46
	},
	{
		id: 20266, name: "Phường Nại Hiên Đông", province: 17, district: 46
	},
	{
		id: 20269, name: "Phường Mân Thái", province: 17, district: 46
	},
	{
		id: 20272, name: "Phường An Hải Bắc", province: 17, district: 46
	},
	{
		id: 20275, name: "Phường Phước Mỹ", province: 17, district: 46
	},
	{
		id: 20278, name: "Phường An Hải Tây", province: 17, district: 46
	},
	{
		id: 20281, name: "Phường An Hải Đông", province: 17, district: 46
	},
	{
		id: 20194, name: "Phường Hoà Hiệp Băc", province: 17, district: 47
	},
	{
		id: 20195, name: "Phường Hoà Hiệp Nam", province: 17, district: 47
	},
	{
		id: 20197, name: "Phường Hoà Khánh Băc", province: 17, district: 47
	},
	{
		id: 20198, name: "Phường Hoà Khánh Nam", province: 17, district: 47
	},
	{
		id: 20200, name: "Phường Hoà Minh", province: 17, district: 47
	},
	{
		id: 20260, name: "Phường Khuê Trung", province: 17, district: 48
	},
	{
		id: 20305, name: "Phường Hoà Phát", province: 17, district: 48
	},
	{
		id: 20306, name: "Phường Hoà An", province: 17, district: 48
	},
	{
		id: 20311, name: "Phường Hoà Thọ Tây", province: 17, district: 48
	},
	{
		id: 20312, name: "Phường Hoà Thọ Đông", province: 17, district: 48
	},
	{
		id: 20314, name: "Phường Hoà Xuân", province: 17, district: 48
	},
	{
		id: 20293, name: "Xã Hoà Bắc", province: 17, district: 49
	},
	{
		id: 20296, name: "Xã Hoà Liên", province: 17, district: 49
	},
	{
		id: 20299, name: "Xã Hoà Ninh", province: 17, district: 49
	},
	{
		id: 20302, name: "Xã Hoà Sơn", province: 17, district: 49
	},
	{
		id: 20308, name: "Xã Hoà Nhơn", province: 17, district: 49
	},
	{
		id: 20317, name: "Xã Hoà Phú", province: 17, district: 49
	},
	{
		id: 20320, name: "Xã Hoà Phong", province: 17, district: 49
	},
	{
		id: 20323, name: "Xã Hoà Châu", province: 17, district: 49
	},
	{
		id: 20326, name: "Xã Hoà Tiến", province: 17, district: 49
	},
	{
		id: 20329, name: "Xã Hoà Phước", province: 17, district: 49
	},
	{
		id: 20332, name: "Xã Hoà Khương", province: 17, district: 49
	},
	{
		id: 24118, name: "Phường Tân Lập", province: 18, district: 191
	},
	{
		id: 24121, name: "Phường Tân Hoà", province: 18, district: 191
	},
	{
		id: 24124, name: "Phường Tân An", province: 18, district: 191
	},
	{
		id: 24127, name: "Phường Thống Nhất", province: 18, district: 191
	},
	{
		id: 24130, name: "Phường Thành Nhất", province: 18, district: 191
	},
	{
		id: 24133, name: "Phường Thắng Lợi", province: 18, district: 191
	},
	{
		id: 24136, name: "Phường Tân Lợi", province: 18, district: 191
	},
	{
		id: 24139, name: "Phường Thành Công", province: 18, district: 191
	},
	{
		id: 24142, name: "Phường Tân Thành", province: 18, district: 191
	},
	{
		id: 24145, name: "Phường Tân Tiến", province: 18, district: 191
	},
	{
		id: 24148, name: "Phường Tự An", province: 18, district: 191
	},
	{
		id: 24151, name: "Phường Ea Tam", province: 18, district: 191
	},
	{
		id: 24154, name: "Phường Khánh Xuân", province: 18, district: 191
	},
	{
		id: 24157, name: "Xã Hòa Thuận", province: 18, district: 191
	},
	{
		id: 24160, name: "Xã Cư Êbur", province: 18, district: 191
	},
	{
		id: 24163, name: "Xã Ea Tu", province: 18, district: 191
	},
	{
		id: 24166, name: "Xã Hòa Thắng", province: 18, district: 191
	},
	{
		id: 24169, name: "Xã Ea Kao", province: 18, district: 191
	},
	{
		id: 24172, name: "Xã Hòa Phú", province: 18, district: 191
	},
	{
		id: 24175, name: "Xã Hòa Khánh", province: 18, district: 191
	},
	{
		id: 24178, name: "Xã Hòa Xuân", province: 18, district: 191
	},
	{
		id: 24256, name: "Thị trấn Ea Pốk", province: 18, district: 192
	},
	{
		id: 24259, name: "Thị trấn Quảng Phú", province: 18, district: 192
	},
	{
		id: 24262, name: "Xã Quảng Tiến", province: 18, district: 192
	},
	{
		id: 24264, name: "Xã Ea Kuêh", province: 18, district: 192
	},
	{
		id: 24265, name: "Xã Ea Kiết", province: 18, district: 192
	},
	{
		id: 24268, name: "Xã Ea Tar", province: 18, district: 192
	},
	{
		id: 24271, name: "Xã Cư Dliê M'nông", province: 18, district: 192
	},
	{
		id: 24274, name: "Xã Ea H'đinh", province: 18, district: 192
	},
	{
		id: 24277, name: "Xã Ea Tul", province: 18, district: 192
	},
	{
		id: 24280, name: "Xã Ea Kpam", province: 18, district: 192
	},
	{
		id: 24283, name: "Xã Ea M'dróh", province: 18, district: 192
	},
	{
		id: 24286, name: "Xã Quảng Hiệp", province: 18, district: 192
	},
	{
		id: 24289, name: "Xã Cư M'gar", province: 18, district: 192
	},
	{
		id: 24292, name: "Xã Ea D'rơng", province: 18, district: 192
	},
	{
		id: 24295, name: "Xã Ea M'nang", province: 18, district: 192
	},
	{
		id: 24298, name: "Xã Cư Suê", province: 18, district: 192
	},
	{
		id: 24301, name: "Xã Cuor Đăng", province: 18, district: 192
	},
	{
		id: 24307, name: "Xã Cư Né", province: 18, district: 193
	},
	{
		id: 24310, name: "Xã Chư Kbô", province: 18, district: 193
	},
	{
		id: 24313, name: "Xã Cư Pơng", province: 18, district: 193
	},
	{
		id: 24314, name: "Xã Ea Sin", province: 18, district: 193
	},
	{
		id: 24316, name: "Xã Pơng Drang", province: 18, district: 193
	},
	{
		id: 24317, name: "Xã Tân Lập", province: 18, district: 193
	},
	{
		id: 24319, name: "Xã Ea Ngai", province: 18, district: 193
	},
	{
		id: 24181, name: "Thị trấn Ea Drăng", province: 18, district: 194
	},
	{
		id: 24184, name: "Xã Ea H'leo", province: 18, district: 194
	},
	{
		id: 24187, name: "Xã Ea Sol", province: 18, district: 194
	},
	{
		id: 24190, name: "Xã Ea Ral", province: 18, district: 194
	},
	{
		id: 24193, name: "Xã Ea Wy", province: 18, district: 194
	},
	{
		id: 24194, name: "Xã Cư A Mung", province: 18, district: 194
	},
	{
		id: 24196, name: "Xã Cư Mốt", province: 18, district: 194
	},
	{
		id: 24199, name: "Xã Ea Hiao", province: 18, district: 194
	},
	{
		id: 24202, name: "Xã Ea Khal", province: 18, district: 194
	},
	{
		id: 24205, name: "Xã Dlê Yang", province: 18, district: 194
	},
	{
		id: 24207, name: "Xã Ea Tir", province: 18, district: 194
	},
	{
		id: 24208, name: "Xã Ea Nam", province: 18, district: 194
	},
	{
		id: 24343, name: "Thị trấn Krông Năng", province: 18, district: 195
	},
	{
		id: 24346, name: "Xã Đliê Ya", province: 18, district: 195
	},
	{
		id: 24349, name: "Xã Ea Tóh", province: 18, district: 195
	},
	{
		id: 24352, name: "Xã Ea Tam", province: 18, district: 195
	},
	{
		id: 24355, name: "Xã Phú Lộc", province: 18, district: 195
	},
	{
		id: 24358, name: "Xã Tam Giang", province: 18, district: 195
	},
	{
		id: 24359, name: "Xã Ea Puk", province: 18, district: 195
	},
	{
		id: 24360, name: "Xã Ea Dăh", province: 18, district: 195
	},
	{
		id: 24361, name: "Xã Ea Hồ", province: 18, district: 195
	},
	{
		id: 24364, name: "Xã Phú Xuân", province: 18, district: 195
	},
	{
		id: 24367, name: "Xã Cư Klông", province: 18, district: 195
	},
	{
		id: 24370, name: "Xã Ea Tân", province: 18, district: 195
	},
	{
		id: 24211, name: "Thị trấn Ea Súp", province: 18, district: 196
	},
	{
		id: 24214, name: "Xã Ia Lốp", province: 18, district: 196
	},
	{
		id: 24215, name: "Xã Ia Jlơi", province: 18, district: 196
	},
	{
		id: 24217, name: "Xã Ea Rốk", province: 18, district: 196
	},
	{
		id: 24220, name: "Xã Ya Tờ Mốt", province: 18, district: 196
	},
	{
		id: 24221, name: "Xã Ia Rvê", province: 18, district: 196
	},
	{
		id: 24223, name: "Xã Ea Lê", province: 18, district: 196
	},
	{
		id: 24226, name: "Xã Cư Kbang", province: 18, district: 196
	},
	{
		id: 24229, name: "Xã Ea Bung", province: 18, district: 196
	},
	{
		id: 24232, name: "Xã Cư M'lan", province: 18, district: 196
	},
	{
		id: 24490, name: "Thị trấn Phước An", province: 18, district: 197
	},
	{
		id: 24493, name: "Xã Krông Búk", province: 18, district: 197
	},
	{
		id: 24496, name: "Xã Ea Kly", province: 18, district: 197
	},
	{
		id: 24499, name: "Xã Ea Kênh", province: 18, district: 197
	},
	{
		id: 24502, name: "Xã Ea Phê", province: 18, district: 197
	},
	{
		id: 24505, name: "Xã Ea Knuec", province: 18, district: 197
	},
	{
		id: 24508, name: "Xã Ea Yông", province: 18, district: 197
	},
	{
		id: 24511, name: "Xã Hòa An", province: 18, district: 197
	},
	{
		id: 24514, name: "Xã Ea Kuăng", province: 18, district: 197
	},
	{
		id: 24517, name: "Xã Hoà Đông", province: 18, district: 197
	},
	{
		id: 24520, name: "Xã Ea Hiu", province: 18, district: 197
	},
	{
		id: 24523, name: "Xã Hòa Tiến", province: 18, district: 197
	},
	{
		id: 24526, name: "Xã Tân Tiến", province: 18, district: 197
	},
	{
		id: 24529, name: "Xã Vụ Bổn", province: 18, district: 197
	},
	{
		id: 24532, name: "Xã Ea Uy", province: 18, district: 197
	},
	{
		id: 24535, name: "Xã Ea Yiêng", province: 18, district: 197
	},
	{
		id: 24373, name: "Thị trấn Ea Kar", province: 18, district: 198
	},
	{
		id: 24376, name: "Thị trấn Ea Knốp", province: 18, district: 198
	},
	{
		id: 24379, name: "Xã Ea Sô", province: 18, district: 198
	},
	{
		id: 24380, name: "Xã Ea Sar", province: 18, district: 198
	},
	{
		id: 24382, name: "Xã Xuân Phú", province: 18, district: 198
	},
	{
		id: 24385, name: "Xã Cư Huê", province: 18, district: 198
	},
	{
		id: 24388, name: "Xã Ea Tih", province: 18, district: 198
	},
	{
		id: 24391, name: "Xã Ea Đar", province: 18, district: 198
	},
	{
		id: 24394, name: "Xã Ea Kmút", province: 18, district: 198
	},
	{
		id: 24397, name: "Xã Cư Ni", province: 18, district: 198
	},
	{
		id: 24400, name: "Xã Ea Păl", province: 18, district: 198
	},
	{
		id: 24401, name: "Xã Cư Prông", province: 18, district: 198
	},
	{
		id: 24403, name: "Xã Ea Ô", province: 18, district: 198
	},
	{
		id: 24404, name: "Xã Cư Elang", province: 18, district: 198
	},
	{
		id: 24406, name: "Xã Cư Bông", province: 18, district: 198
	},
	{
		id: 24409, name: "Xã Cư Jang", province: 18, district: 198
	},
	{
		id: 24412, name: "Thị trấn M'đrắk", province: 18, district: 199
	},
	{
		id: 24415, name: "Xã Cư Prao", province: 18, district: 199
	},
	{
		id: 24418, name: "Xã Ea Pil", province: 18, district: 199
	},
	{
		id: 24421, name: "Xã Ea Lai", province: 18, district: 199
	},
	{
		id: 24424, name: "Xã Ea H'mlay", province: 18, district: 199
	},
	{
		id: 24427, name: "Xã Krông Jing", province: 18, district: 199
	},
	{
		id: 24430, name: "Xã Ea M' Doal", province: 18, district: 199
	},
	{
		id: 24433, name: "Xã Ea Riêng", province: 18, district: 199
	},
	{
		id: 24436, name: "Xã Cư M'ta", province: 18, district: 199
	},
	{
		id: 24439, name: "Xã Cư K Róa", province: 18, district: 199
	},
	{
		id: 24442, name: "Xã Krông Á", province: 18, district: 199
	},
	{
		id: 24444, name: "Xã Cư San", province: 18, district: 199
	},
	{
		id: 24445, name: "Xã Ea Trang", province: 18, district: 199
	},
	{
		id: 24538, name: "Thị trấn Buôn Trấp", province: 18, district: 200
	},
	{
		id: 24556, name: "Xã Dray Sáp", province: 18, district: 200
	},
	{
		id: 24559, name: "Xã Ea Na", province: 18, district: 200
	},
	{
		id: 24565, name: "Xã Ea Bông", province: 18, district: 200
	},
	{
		id: 24568, name: "Xã Băng A Drênh", province: 18, district: 200
	},
	{
		id: 24571, name: "Xã Dur Kmăl", province: 18, district: 200
	},
	{
		id: 24574, name: "Xã Bình Hòa", province: 18, district: 200
	},
	{
		id: 24577, name: "Xã Quảng Điền", province: 18, district: 200
	},
	{
		id: 24448, name: "Thị trấn Krông Kmar", province: 18, district: 201
	},
	{
		id: 24451, name: "Xã Dang Kang", province: 18, district: 201
	},
	{
		id: 24454, name: "Xã Cư Kty", province: 18, district: 201
	},
	{
		id: 24457, name: "Xã Hòa Thành", province: 18, district: 201
	},
	{
		id: 24460, name: "Xã Hòa Tân", province: 18, district: 201
	},
	{
		id: 24463, name: "Xã Hòa Phong", province: 18, district: 201
	},
	{
		id: 24466, name: "Xã Hòa Lễ", province: 18, district: 201
	},
	{
		id: 24469, name: "Xã Yang Reh", province: 18, district: 201
	},
	{
		id: 24472, name: "Xã Ea Trul", province: 18, district: 201
	},
	{
		id: 24475, name: "Xã Khuê Ngọc Điền", province: 18, district: 201
	},
	{
		id: 24478, name: "Xã Cư Pui", province: 18, district: 201
	},
	{
		id: 24481, name: "Xã Hòa Sơn", province: 18, district: 201
	},
	{
		id: 24484, name: "Xã Cư Drăm", province: 18, district: 201
	},
	{
		id: 24487, name: "Xã Yang Mao", province: 18, district: 201
	},
	{
		id: 24580, name: "Thị trấn Liên Sơn", province: 18, district: 202
	},
	{
		id: 24583, name: "Xã Yang Tao", province: 18, district: 202
	},
	{
		id: 24586, name: "Xã Bông Krang", province: 18, district: 202
	},
	{
		id: 24589, name: "Xã Đắk Liêng", province: 18, district: 202
	},
	{
		id: 24592, name: "Xã Buôn Triết", province: 18, district: 202
	},
	{
		id: 24595, name: "Xã Buôn Tría", province: 18, district: 202
	},
	{
		id: 24598, name: "Xã Đắk Phơi", province: 18, district: 202
	},
	{
		id: 24601, name: "Xã Đắk Nuê", province: 18, district: 202
	},
	{
		id: 24604, name: "Xã Krông Nô", province: 18, district: 202
	},
	{
		id: 24607, name: "Xã Nam Ka", province: 18, district: 202
	},
	{
		id: 24610, name: "Xã Ea R'bin", province: 18, district: 202
	},
	{
		id: 24235, name: "Xã Krông Na", province: 18, district: 203
	},
	{
		id: 24238, name: "Xã Ea Huar", province: 18, district: 203
	},
	{
		id: 24241, name: "Xã Ea Wer", province: 18, district: 203
	},
	{
		id: 24244, name: "Xã Tân Hoà", province: 18, district: 203
	},
	{
		id: 24247, name: "Xã Cuôr Knia", province: 18, district: 203
	},
	{
		id: 24250, name: "Xã Ea Bar", province: 18, district: 203
	},
	{
		id: 24253, name: "Xã Ea Nuôl", province: 18, district: 203
	},
	{
		id: 24305, name: "Phường An Lạc", province: 18, district: 717
	},
	{
		id: 24308, name: "Phường An Bình", province: 18, district: 717
	},
	{
		id: 24311, name: "Phường Thiện An", province: 18, district: 717
	},
	{
		id: 24318, name: "Phường Đạt Hiếu", province: 18, district: 717
	},
	{
		id: 24322, name: "Phường Đoàn Kết", province: 18, district: 717
	},
	{
		id: 24325, name: "Xã Ea Blang", province: 18, district: 717
	},
	{
		id: 24328, name: "Xã Ea Drông", province: 18, district: 717
	},
	{
		id: 24331, name: "Phường Thống Nhất", province: 18, district: 717
	},
	{
		id: 24332, name: "Phường Bình Tân", province: 18, district: 717
	},
	{
		id: 24334, name: "Xã Ea Siên", province: 18, district: 717
	},
	{
		id: 24337, name: "Xã Bình Thuận", province: 18, district: 717
	},
	{
		id: 24340, name: "Xã Cư Bao", province: 18, district: 717
	},
	{
		id: 24540, name: "Xã Ea Ning", province: 18, district: 726
	},
	{
		id: 24541, name: "Xã Cư Ê Wi", province: 18, district: 726
	},
	{
		id: 24544, name: "Xã Ea Ktur", province: 18, district: 726
	},
	{
		id: 24547, name: "Xã Ea Tiêu", province: 18, district: 726
	},
	{
		id: 24550, name: "Xã Ea Bhốk", province: 18, district: 726
	},
	{
		id: 24553, name: "Xã Ea Hu", province: 18, district: 726
	},
	{
		id: 24561, name: "Xã Dray Bhăng", province: 18, district: 726
	},
	{
		id: 24562, name: "Xã Hòa Hiệp", province: 18, district: 726
	},
	{
		id: 3124, name: "Phường Noong Bua", province: 19, district: 694
	},
	{
		id: 3127, name: "Phường Him Lam", province: 19, district: 694
	},
	{
		id: 3130, name: "Phường Thanh Bình", province: 19, district: 694
	},
	{
		id: 3133, name: "Phường Tân Thanh", province: 19, district: 694
	},
	{
		id: 3136, name: "Phường Mường Thanh", province: 19, district: 694
	},
	{
		id: 3139, name: "Phường Nam Thanh", province: 19, district: 694
	},
	{
		id: 3142, name: "Phường Thanh Trường", province: 19, district: 694
	},
	{
		id: 3144, name: "Xã Tà Lèng", province: 19, district: 694
	},
	{
		id: 3145, name: "Xã Thanh Minh", province: 19, district: 694
	},
	{
		id: 3148, name: "Phường Sông Đà", province: 19, district: 695
	},
	{
		id: 3151, name: "Phường Na Lay", province: 19, district: 695
	},
	{
		id: 3184, name: "Xã Lay Nưa", province: 19, district: 695
	},
	{
		id: 3172, name: "Thị trấn Mường Chà", province: 19, district: 696
	},
	{
		id: 3178, name: "Xã Xá Tổng", province: 19, district: 696
	},
	{
		id: 3181, name: "Xã Mường Tùng", province: 19, district: 696
	},
	{
		id: 3190, name: "Xã Hừa Ngài", province: 19, district: 696
	},
	{
		id: 3191, name: "Xã Huổi Mí", province: 19, district: 696
	},
	{
		id: 3193, name: "Xã Pa Ham", province: 19, district: 696
	},
	{
		id: 3194, name: "Xã Nậm Nèn", province: 19, district: 696
	},
	{
		id: 3196, name: "Xã Huổi Lèng", province: 19, district: 696
	},
	{
		id: 3197, name: "Xã Sa Lông", province: 19, district: 696
	},
	{
		id: 3200, name: "Xã Ma Thì Hồ", province: 19, district: 696
	},
	{
		id: 3201, name: "Xã Na Sang", province: 19, district: 696
	},
	{
		id: 3202, name: "Xã Mường Mươn", province: 19, district: 696
	},
	{
		id: 3154, name: "Xã Sín Thầu", province: 19, district: 697
	},
	{
		id: 3155, name: "Xã Sen Thượng", province: 19, district: 697
	},
	{
		id: 3157, name: "Xã Chung Chải", province: 19, district: 697
	},
	{
		id: 3158, name: "Xã Leng Su Sìn", province: 19, district: 697
	},
	{
		id: 3159, name: "Xã Pá Mỳ", province: 19, district: 697
	},
	{
		id: 3160, name: "Xã Mường Nhé", province: 19, district: 697
	},
	{
		id: 3161, name: "Xã Nậm Vì", province: 19, district: 697
	},
	{
		id: 3162, name: "Xã Nậm Kè", province: 19, district: 697
	},
	{
		id: 3163, name: "Xã Mường Toong", province: 19, district: 697
	},
	{
		id: 3164, name: "Xã Quảng Lâm", province: 19, district: 697
	},
	{
		id: 3177, name: "Xã Huổi Lếnh", province: 19, district: 697
	},
	{
		id: 3256, name: "Thị trấn Mường Ảng", province: 19, district: 698
	},
	{
		id: 3286, name: "Xã Mường Đăng", province: 19, district: 698
	},
	{
		id: 3287, name: "Xã Ngối Cáy", province: 19, district: 698
	},
	{
		id: 3292, name: "Xã Ẳng Tở", province: 19, district: 698
	},
	{
		id: 3301, name: "Xã Búng Lao", province: 19, district: 698
	},
	{
		id: 3302, name: "Xã Xuân Lao", province: 19, district: 698
	},
	{
		id: 3307, name: "Xã Ẳng Nưa", province: 19, district: 698
	},
	{
		id: 3310, name: "Xã Ẳng Cang", province: 19, district: 698
	},
	{
		id: 3312, name: "Xã Nặm Lịch", province: 19, district: 698
	},
	{
		id: 3313, name: "Xã Mường Lạn", province: 19, district: 698
	},
	{
		id: 3253, name: "Thị trấn Tuần Giáo", province: 19, district: 699
	},
	{
		id: 3259, name: "Xã Phình Sáng", province: 19, district: 699
	},
	{
		id: 3260, name: "Xã Rạng Đông", province: 19, district: 699
	},
	{
		id: 3262, name: "Xã Mùn Chung", province: 19, district: 699
	},
	{
		id: 3263, name: "Xã Nà Tòng", province: 19, district: 699
	},
	{
		id: 3265, name: "Xã Ta Ma", province: 19, district: 699
	},
	{
		id: 3268, name: "Xã Mường Mùn", province: 19, district: 699
	},
	{
		id: 3269, name: "Xã Pú Xi", province: 19, district: 699
	},
	{
		id: 3271, name: "Xã Pú Nhung", province: 19, district: 699
	},
	{
		id: 3274, name: "Xã Quài Nưa", province: 19, district: 699
	},
	{
		id: 3277, name: "Xã Mường Thín", province: 19, district: 699
	},
	{
		id: 3280, name: "Xã Tỏa Tình", province: 19, district: 699
	},
	{
		id: 3283, name: "Xã Nà Sáy", province: 19, district: 699
	},
	{
		id: 3284, name: "Xã Mường Khong", province: 19, district: 699
	},
	{
		id: 3289, name: "Xã Quài Cang", province: 19, district: 699
	},
	{
		id: 3295, name: "Xã Quài Tở", province: 19, district: 699
	},
	{
		id: 3298, name: "Xã Chiềng Sinh", province: 19, district: 699
	},
	{
		id: 3299, name: "Xã Chiềng Đông", province: 19, district: 699
	},
	{
		id: 3304, name: "Xã Tênh Phông", province: 19, district: 699
	},
	{
		id: 3217, name: "Thị trấn Tủa Chùa", province: 19, district: 700
	},
	{
		id: 3220, name: "Xã Huổi Só", province: 19, district: 700
	},
	{
		id: 3223, name: "Xã Xín Chải", province: 19, district: 700
	},
	{
		id: 3226, name: "Xã Tả Sìn Thàng", province: 19, district: 700
	},
	{
		id: 3229, name: "Xã Lao Xả Phình", province: 19, district: 700
	},
	{
		id: 3232, name: "Xã Tả Phìn", province: 19, district: 700
	},
	{
		id: 3235, name: "Xã Tủa Thàng", province: 19, district: 700
	},
	{
		id: 3238, name: "Xã Trung Thu", province: 19, district: 700
	},
	{
		id: 3241, name: "Xã Sính Phình", province: 19, district: 700
	},
	{
		id: 3244, name: "Xã Sáng Nhè", province: 19, district: 700
	},
	{
		id: 3247, name: "Xã Mường Đun", province: 19, district: 700
	},
	{
		id: 3250, name: "Xã Mường Báng", province: 19, district: 700
	},
	{
		id: 3316, name: "Xã Nà Tấu", province: 19, district: 701
	},
	{
		id: 3317, name: "Xã Nà Nhạn", province: 19, district: 701
	},
	{
		id: 3319, name: "Xã Mường Pồn", province: 19, district: 701
	},
	{
		id: 3322, name: "Xã Thanh Nưa", province: 19, district: 701
	},
	{
		id: 3323, name: "Xã Hua Thanh", province: 19, district: 701
	},
	{
		id: 3325, name: "Xã Mường Phăng", province: 19, district: 701
	},
	{
		id: 3326, name: "Xã Pá Khoang", province: 19, district: 701
	},
	{
		id: 3328, name: "Xã Thanh Luông", province: 19, district: 701
	},
	{
		id: 3331, name: "Xã Thanh Hưng", province: 19, district: 701
	},
	{
		id: 3334, name: "Xã Thanh Xương", province: 19, district: 701
	},
	{
		id: 3337, name: "Xã Thanh Chăn", province: 19, district: 701
	},
	{
		id: 3340, name: "Xã Pa Thơm", province: 19, district: 701
	},
	{
		id: 3343, name: "Xã Thanh An", province: 19, district: 701
	},
	{
		id: 3346, name: "Xã Thanh Yên", province: 19, district: 701
	},
	{
		id: 3349, name: "Xã Noong Luống", province: 19, district: 701
	},
	{
		id: 3352, name: "Xã Noọng Hẹt", province: 19, district: 701
	},
	{
		id: 3355, name: "Xã Sam Mứn", province: 19, district: 701
	},
	{
		id: 3356, name: "Xã Pom Lót", province: 19, district: 701
	},
	{
		id: 3358, name: "Xã Núa Ngam", province: 19, district: 701
	},
	{
		id: 3359, name: "Xã Hẹ Muông", province: 19, district: 701
	},
	{
		id: 3361, name: "Xã Na Ư", province: 19, district: 701
	},
	{
		id: 3364, name: "Xã Mường Nhà", province: 19, district: 701
	},
	{
		id: 3365, name: "Xã Na Tông", province: 19, district: 701
	},
	{
		id: 3367, name: "Xã Mường Lói", province: 19, district: 701
	},
	{
		id: 3368, name: "Xã Phu Luông", province: 19, district: 701
	},
	{
		id: 3203, name: "Thị trấn Điện Biên Đông", province: 19, district: 702
	},
	{
		id: 3205, name: "Xã Na Son", province: 19, district: 702
	},
	{
		id: 3208, name: "Xã Phì Nhừ", province: 19, district: 702
	},
	{
		id: 3211, name: "Xã Chiềng Sơ", province: 19, district: 702
	},
	{
		id: 3214, name: "Xã Mường Luân", province: 19, district: 702
	},
	{
		id: 3370, name: "Xã Pu Nhi", province: 19, district: 702
	},
	{
		id: 3371, name: "Xã Nong U", province: 19, district: 702
	},
	{
		id: 3373, name: "Xã Xa Dung", province: 19, district: 702
	},
	{
		id: 3376, name: "Xã Keo Lôm", province: 19, district: 702
	},
	{
		id: 3379, name: "Xã Luân Giới", province: 19, district: 702
	},
	{
		id: 3382, name: "Xã Phình Giàng", province: 19, district: 702
	},
	{
		id: 3383, name: "Xã Pú Hồng", province: 19, district: 702
	},
	{
		id: 3384, name: "Xã Tìa Dình", province: 19, district: 702
	},
	{
		id: 3385, name: "Xã Háng Lìa", province: 19, district: 702
	},
	{
		id: 3156, name: "Xã Nậm Tin", province: 19, district: 745
	},
	{
		id: 3165, name: "Xã Pa Tần", province: 19, district: 745
	},
	{
		id: 3166, name: "Xã Chà Cang", province: 19, district: 745
	},
	{
		id: 3167, name: "Xã Na Cô Sa", province: 19, district: 745
	},
	{
		id: 3168, name: "Xã Nà Khoa", province: 19, district: 745
	},
	{
		id: 3169, name: "Xã Nà Hỳ", province: 19, district: 745
	},
	{
		id: 3170, name: "Xã Nà Bủng", province: 19, district: 745
	},
	{
		id: 3171, name: "Xã Nậm Nhừ", province: 19, district: 745
	},
	{
		id: 3173, name: "Xã Nậm Chua", province: 19, district: 745
	},
	{
		id: 3174, name: "Xã Nậm Khăn", province: 19, district: 745
	},
	{
		id: 3175, name: "Xã Chà Tở", province: 19, district: 745
	},
	{
		id: 3176, name: "Xã Vàng Đán", province: 19, district: 745
	},
	{
		id: 3187, name: "Xã Chà Nưa", province: 19, district: 745
	},
	{
		id: 3198, name: "Xã Phìn Hồ", province: 19, district: 745
	},
	{
		id: 3199, name: "Xã Si Pa Phìn", province: 19, district: 745
	},
	{
		id: 25993, name: "Phường Trảng Dài", province: 20, district: 550
	},
	{
		id: 25996, name: "Phường Tân Phong", province: 20, district: 550
	},
	{
		id: 25999, name: "Phường Tân Biên", province: 20, district: 550
	},
	{
		id: 26002, name: "Phường Hố Nai", province: 20, district: 550
	},
	{
		id: 26005, name: "Phường Tân Hòa", province: 20, district: 550
	},
	{
		id: 26008, name: "Phường Tân Hiệp", province: 20, district: 550
	},
	{
		id: 26011, name: "Phường Bửu Long", province: 20, district: 550
	},
	{
		id: 26014, name: "Phường Tân Tiến", province: 20, district: 550
	},
	{
		id: 26017, name: "Phường Tam Hiệp", province: 20, district: 550
	},
	{
		id: 26020, name: "Phường Long Bình", province: 20, district: 550
	},
	{
		id: 26023, name: "Phường Quang Vinh", province: 20, district: 550
	},
	{
		id: 26026, name: "Phường Tân Mai", province: 20, district: 550
	},
	{
		id: 26029, name: "Phường Thống Nhất", province: 20, district: 550
	},
	{
		id: 26032, name: "Phường Trung Dũng", province: 20, district: 550
	},
	{
		id: 26035, name: "Phường Tam Hòa", province: 20, district: 550
	},
	{
		id: 26038, name: "Phường Hòa Bình", province: 20, district: 550
	},
	{
		id: 26041, name: "Phường Quyết Thắng", province: 20, district: 550
	},
	{
		id: 26044, name: "Phường Thanh Bình", province: 20, district: 550
	},
	{
		id: 26047, name: "Phường Bình Đa", province: 20, district: 550
	},
	{
		id: 26050, name: "Phường An Bình", province: 20, district: 550
	},
	{
		id: 26053, name: "Phường Bửu Hòa", province: 20, district: 550
	},
	{
		id: 26056, name: "Phường Long Bình Tân", province: 20, district: 550
	},
	{
		id: 26059, name: "Phường Tân Vạn", province: 20, district: 550
	},
	{
		id: 26062, name: "Xã Tân Hạnh", province: 20, district: 550
	},
	{
		id: 26065, name: "Xã Hiệp Hòa", province: 20, district: 550
	},
	{
		id: 26068, name: "Xã Hóa An", province: 20, district: 550
	},
	{
		id: 26371, name: "Xã An Hoà", province: 20, district: 550
	},
	{
		id: 26374, name: "Xã Tam Phước", province: 20, district: 550
	},
	{
		id: 26377, name: "Xã Phước Tân", province: 20, district: 550
	},
	{
		id: 26380, name: "Xã Long Hưng", province: 20, district: 550
	},
	{
		id: 26170, name: "Thị trấn Vĩnh An", province: 20, district: 551
	},
	{
		id: 26173, name: "Xã Phú Lý", province: 20, district: 551
	},
	{
		id: 26176, name: "Xã Trị An", province: 20, district: 551
	},
	{
		id: 26179, name: "Xã Tân An", province: 20, district: 551
	},
	{
		id: 26182, name: "Xã Vĩnh Tân", province: 20, district: 551
	},
	{
		id: 26185, name: "Xã Bình Lợi", province: 20, district: 551
	},
	{
		id: 26188, name: "Xã Thạnh Phú", province: 20, district: 551
	},
	{
		id: 26191, name: "Xã Thiện Tân", province: 20, district: 551
	},
	{
		id: 26194, name: "Xã Tân Bình", province: 20, district: 551
	},
	{
		id: 26197, name: "Xã Bình Hòa", province: 20, district: 551
	},
	{
		id: 26200, name: "Xã Mã Đà", province: 20, district: 551
	},
	{
		id: 26203, name: "Xã Hiếu Liêm", province: 20, district: 551
	},
	{
		id: 26116, name: "Thị trấn Tân Phú", province: 20, district: 552
	},
	{
		id: 26119, name: "Xã Dak Lua", province: 20, district: 552
	},
	{
		id: 26122, name: "Xã Nam Cát Tiên", province: 20, district: 552
	},
	{
		id: 26125, name: "Xã Phú An", province: 20, district: 552
	},
	{
		id: 26128, name: "Xã Núi Tượng", province: 20, district: 552
	},
	{
		id: 26131, name: "Xã Tà Lài", province: 20, district: 552
	},
	{
		id: 26134, name: "Xã Phú Lập", province: 20, district: 552
	},
	{
		id: 26137, name: "Xã Phú Sơn", province: 20, district: 552
	},
	{
		id: 26140, name: "Xã Phú Thịnh", province: 20, district: 552
	},
	{
		id: 26143, name: "Xã Thanh Sơn", province: 20, district: 552
	},
	{
		id: 26146, name: "Xã Phú Trung", province: 20, district: 552
	},
	{
		id: 26149, name: "Xã Phú Xuân", province: 20, district: 552
	},
	{
		id: 26152, name: "Xã Phú Lộc", province: 20, district: 552
	},
	{
		id: 26155, name: "Xã Phú Lâm", province: 20, district: 552
	},
	{
		id: 26158, name: "Xã Phú Bình", province: 20, district: 552
	},
	{
		id: 26161, name: "Xã Phú Thanh", province: 20, district: 552
	},
	{
		id: 26164, name: "Xã Trà Cổ", province: 20, district: 552
	},
	{
		id: 26167, name: "Xã Phú Điền", province: 20, district: 552
	},
	{
		id: 26206, name: "Thị trấn Định Quán", province: 20, district: 553
	},
	{
		id: 26209, name: "Xã Thanh Sơn", province: 20, district: 553
	},
	{
		id: 26212, name: "Xã Phú Tân", province: 20, district: 553
	},
	{
		id: 26215, name: "Xã Phú Vinh", province: 20, district: 553
	},
	{
		id: 26218, name: "Xã Phú Lợi", province: 20, district: 553
	},
	{
		id: 26221, name: "Xã Phú Hòa", province: 20, district: 553
	},
	{
		id: 26224, name: "Xã Ngọc Định", province: 20, district: 553
	},
	{
		id: 26227, name: "Xã La Ngà", province: 20, district: 553
	},
	{
		id: 26230, name: "Xã Gia Canh", province: 20, district: 553
	},
	{
		id: 26233, name: "Xã Phú Ngọc", province: 20, district: 553
	},
	{
		id: 26236, name: "Xã Phú Cường", province: 20, district: 553
	},
	{
		id: 26239, name: "Xã Túc Trưng", province: 20, district: 553
	},
	{
		id: 26242, name: "Xã Phú Túc", province: 20, district: 553
	},
	{
		id: 26245, name: "Xã Suối Nho", province: 20, district: 553
	},
	{
		id: 50005, name: "Xã Bàu Hàm 2", province: 20, district: 554
	},
	{
		id: 26299, name: "Xã Gia Tân 1", province: 20, district: 554
	},
	{
		id: 26302, name: "Xã Gia Tân 2", province: 20, district: 554
	},
	{
		id: 26305, name: "Xã Gia Tân 3", province: 20, district: 554
	},
	{
		id: 26308, name: "Xã Gia Kiệm", province: 20, district: 554
	},
	{
		id: 26311, name: "Xã Quang Trung", province: 20, district: 554
	},
	{
		id: 26314, name: "Thị Trấn Dầu Giây", province: 20, district: 554
	},
	{
		id: 26317, name: "Xã Hưng Lộc", province: 20, district: 554
	},
	{
		id: 26320, name: "Xã Lộ 25", province: 20, district: 554
	},
	{
		id: 26323, name: "Xã Xuân Thiện", province: 20, district: 554
	},
	{
		id: 26326, name: "Xã Xuân Thạnh", province: 20, district: 554
	},
	{
		id: 26071, name: "Phường Xuân Trung", province: 20, district: 555
	},
	{
		id: 26074, name: "Phường Xuân Thanh", province: 20, district: 555
	},
	{
		id: 26077, name: "Phường Xuân Bình", province: 20, district: 555
	},
	{
		id: 26080, name: "Phường Xuân An", province: 20, district: 555
	},
	{
		id: 26083, name: "Phường Xuân Hoà", province: 20, district: 555
	},
	{
		id: 26086, name: "Phường Phú Bình", province: 20, district: 555
	},
	{
		id: 26089, name: "Xã Bình Lộc", province: 20, district: 555
	},
	{
		id: 26092, name: "Xã Bảo Quang", province: 20, district: 555
	},
	{
		id: 26095, name: "Xã Suối Tre", province: 20, district: 555
	},
	{
		id: 26098, name: "Xã Bảo Vinh", province: 20, district: 555
	},
	{
		id: 26101, name: "Xã Xuân Lập", province: 20, district: 555
	},
	{
		id: 26104, name: "Xã Bàu Sen", province: 20, district: 555
	},
	{
		id: 26107, name: "Xã Bàu Trâm", province: 20, district: 555
	},
	{
		id: 26110, name: "Xã Xuân Tân", province: 20, district: 555
	},
	{
		id: 26113, name: "Xã Hàng Gòn", province: 20, district: 555
	},
	{
		id: 26425, name: "Thị trấn Gia Ray", province: 20, district: 556
	},
	{
		id: 26428, name: "Xã Xuân Bắc", province: 20, district: 556
	},
	{
		id: 26431, name: "Xã Suối Cao", province: 20, district: 556
	},
	{
		id: 26434, name: "Xã Xuân Thành", province: 20, district: 556
	},
	{
		id: 26437, name: "Xã Xuân Thọ", province: 20, district: 556
	},
	{
		id: 26440, name: "Xã Xuân Trường", province: 20, district: 556
	},
	{
		id: 26443, name: "Xã Xuân Hòa", province: 20, district: 556
	},
	{
		id: 26446, name: "Xã Xuân Hưng", province: 20, district: 556
	},
	{
		id: 26449, name: "Xã Xuân Tâm", province: 20, district: 556
	},
	{
		id: 26452, name: "Xã Suối Cát", province: 20, district: 556
	},
	{
		id: 26455, name: "Xã Xuân Hiệp", province: 20, district: 556
	},
	{
		id: 26458, name: "Xã Xuân Phú", province: 20, district: 556
	},
	{
		id: 26461, name: "Xã Xuân Định", province: 20, district: 556
	},
	{
		id: 26464, name: "Xã Bảo Hoà", province: 20, district: 556
	},
	{
		id: 26467, name: "Xã Lang Minh", province: 20, district: 556
	},
	{
		id: 26368, name: "Thị trấn Long Thành", province: 20, district: 557
	},
	{
		id: 26383, name: "Xã An Phước", province: 20, district: 557
	},
	{
		id: 26386, name: "Xã Bình An", province: 20, district: 557
	},
	{
		id: 26389, name: "Xã Long Đức", province: 20, district: 557
	},
	{
		id: 26392, name: "Xã Lộc An", province: 20, district: 557
	},
	{
		id: 26395, name: "Xã Bình Sơn", province: 20, district: 557
	},
	{
		id: 26398, name: "Xã Tam An", province: 20, district: 557
	},
	{
		id: 26401, name: "Xã Cẩm Đường", province: 20, district: 557
	},
	{
		id: 26404, name: "Xã Long An", province: 20, district: 557
	},
	{
		id: 26407, name: "Xã Suối Trầu", province: 20, district: 557
	},
	{
		id: 26410, name: "Xã Bàu Cạn", province: 20, district: 557
	},
	{
		id: 26413, name: "Xã Long Phước", province: 20, district: 557
	},
	{
		id: 26416, name: "Xã Phước Bình", province: 20, district: 557
	},
	{
		id: 26419, name: "Xã Tân Hiệp", province: 20, district: 557
	},
	{
		id: 26422, name: "Xã Phước Thái", province: 20, district: 557
	},
	{
		id: 26470, name: "Xã Phước Thiền", province: 20, district: 558
	},
	{
		id: 26473, name: "Xã Long Tân", province: 20, district: 558
	},
	{
		id: 26476, name: "Xã Đại Phước", province: 20, district: 558
	},
	{
		id: 26479, name: "Thị Trấn Hiệp Phước", province: 20, district: 558
	},
	{
		id: 26482, name: "Xã Phú Hữu", province: 20, district: 558
	},
	{
		id: 26485, name: "Xã Phú Hội", province: 20, district: 558
	},
	{
		id: 26488, name: "Xã Phú Thạnh", province: 20, district: 558
	},
	{
		id: 26491, name: "Xã Phú Đông", province: 20, district: 558
	},
	{
		id: 26494, name: "Xã Long Thọ", province: 20, district: 558
	},
	{
		id: 26497, name: "Xã Vĩnh Thanh", province: 20, district: 558
	},
	{
		id: 26500, name: "Xã Phước Khánh", province: 20, district: 558
	},
	{
		id: 26503, name: "Xã Phước An", province: 20, district: 558
	},
	{
		id: 26248, name: "Thị trấn Trảng Bom", province: 20, district: 559
	},
	{
		id: 26251, name: "Xã Thanh Bình", province: 20, district: 559
	},
	{
		id: 26254, name: "Xã Cây Gáo", province: 20, district: 559
	},
	{
		id: 26257, name: "Xã Bàu Hàm", province: 20, district: 559
	},
	{
		id: 26260, name: "Xã Sông Thao", province: 20, district: 559
	},
	{
		id: 26263, name: "Xã Sông Trầu", province: 20, district: 559
	},
	{
		id: 26266, name: "Xã Đông Hoà", province: 20, district: 559
	},
	{
		id: 26269, name: "Xã Bắc Sơn", province: 20, district: 559
	},
	{
		id: 26272, name: "Xã Hố Nai 3", province: 20, district: 559
	},
	{
		id: 26275, name: "Xã Tây Hoà", province: 20, district: 559
	},
	{
		id: 26278, name: "Xã Bình Minh", province: 20, district: 559
	},
	{
		id: 26281, name: "Xã Trung Hoà", province: 20, district: 559
	},
	{
		id: 26284, name: "Xã Đồi 61", province: 20, district: 559
	},
	{
		id: 26287, name: "Xã Hưng Thịnh", province: 20, district: 559
	},
	{
		id: 26290, name: "Xã Quảng Tiến", province: 20, district: 559
	},
	{
		id: 26293, name: "Xã Giang Điền", province: 20, district: 559
	},
	{
		id: 26296, name: "Xã An Viễn", province: 20, district: 559
	},
	{
		id: 26329, name: "Xã Sông Nhạn", province: 20, district: 560
	},
	{
		id: 26332, name: "Xã Xuân Quế", province: 20, district: 560
	},
	{
		id: 26335, name: "Xã Nhân Nghĩa", province: 20, district: 560
	},
	{
		id: 26338, name: "Xã Xuân Đường", province: 20, district: 560
	},
	{
		id: 26341, name: "Xã Long Giao", province: 20, district: 560
	},
	{
		id: 26344, name: "Xã Xuân Mỹ", province: 20, district: 560
	},
	{
		id: 26347, name: "Xã Thừa Đức", province: 20, district: 560
	},
	{
		id: 26350, name: "Xã Bảo Bình", province: 20, district: 560
	},
	{
		id: 26353, name: "Xã Xuân Bảo", province: 20, district: 560
	},
	{
		id: 26356, name: "Xã Xuân Tây", province: 20, district: 560
	},
	{
		id: 26359, name: "Xã Xuân Đông", province: 20, district: 560
	},
	{
		id: 26362, name: "Xã Sông Ray", province: 20, district: 560
	},
	{
		id: 26365, name: "Xã Lâm San", province: 20, district: 560
	},
	{
		id: 23557, name: "Phường Yên Đỗ", province: 21, district: 244
	},
	{
		id: 23560, name: "Phường Diên Hồng", province: 21, district: 244
	},
	{
		id: 23563, name: "Phường Ia Kring", province: 21, district: 244
	},
	{
		id: 23566, name: "Phường Hội Thương", province: 21, district: 244
	},
	{
		id: 23569, name: "Phường Hội Phú", province: 21, district: 244
	},
	{
		id: 23570, name: "Phường Phù Đổng", province: 21, district: 244
	},
	{
		id: 23572, name: "Phường Hoa Lư", province: 21, district: 244
	},
	{
		id: 23575, name: "Phường Tây Sơn", province: 21, district: 244
	},
	{
		id: 23578, name: "Phường Thống Nhất", province: 21, district: 244
	},
	{
		id: 23579, name: "Phường Đống Đa", province: 21, district: 244
	},
	{
		id: 23581, name: "Phường Trà Bá", province: 21, district: 244
	},
	{
		id: 23582, name: "Phường Thắng Lợi", province: 21, district: 244
	},
	{
		id: 23584, name: "Phường Yên Thế", province: 21, district: 244
	},
	{
		id: 23586, name: "Phường Chi Lăng", province: 21, district: 244
	},
	{
		id: 23587, name: "Xã Chư Hdrông", province: 21, district: 244
	},
	{
		id: 23590, name: "Xã Biển Hồ", province: 21, district: 244
	},
	{
		id: 23593, name: "Xã Tân Sơn", province: 21, district: 244
	},
	{
		id: 23596, name: "Xã Trà Đa", province: 21, district: 244
	},
	{
		id: 23599, name: "Xã Chư Á", province: 21, district: 244
	},
	{
		id: 23602, name: "Xã An Phú", province: 21, district: 244
	},
	{
		id: 23605, name: "Xã Diên Phú", province: 21, district: 244
	},
	{
		id: 23608, name: "Xã Ia Kênh", province: 21, district: 244
	},
	{
		id: 23611, name: "Xã Gào", province: 21, district: 244
	},
	{
		id: 23722, name: "Thị trấn Phú Hòa", province: 21, district: 245
	},
	{
		id: 23725, name: "Xã Hà Tây", province: 21, district: 245
	},
	{
		id: 23728, name: "Xã Ia Khươl", province: 21, district: 245
	},
	{
		id: 23731, name: "Xã Ia Phí", province: 21, district: 245
	},
	{
		id: 23734, name: "Thị trấn Ia Ly", province: 21, district: 245
	},
	{
		id: 23737, name: "Xã Ia Mơ Nông", province: 21, district: 245
	},
	{
		id: 23738, name: "Xã Ia Kreng", province: 21, district: 245
	},
	{
		id: 23740, name: "Xã Đăk Tơ Ver", province: 21, district: 245
	},
	{
		id: 23743, name: "Xã Hòa Phú", province: 21, district: 245
	},
	{
		id: 23746, name: "Xã Chư Đăng Ya", province: 21, district: 245
	},
	{
		id: 23749, name: "Xã Ia Ka", province: 21, district: 245
	},
	{
		id: 23752, name: "Xã Ia Nhin", province: 21, district: 245
	},
	{
		id: 23755, name: "Xã Nghĩa Hòa", province: 21, district: 245
	},
	{
		id: 23758, name: "Xã Chư Jôr", province: 21, district: 245
	},
	{
		id: 23761, name: "Xã Nghĩa Hưng", province: 21, district: 245
	},
	{
		id: 23794, name: "Thị trấn Kon Dơng", province: 21, district: 246
	},
	{
		id: 23797, name: "Xã Ayun", province: 21, district: 246
	},
	{
		id: 23798, name: "Xã Đak Jơ Ta", province: 21, district: 246
	},
	{
		id: 23799, name: "Xã Đak Ta Ley", province: 21, district: 246
	},
	{
		id: 23800, name: "Xã Hà Ra", province: 21, district: 246
	},
	{
		id: 23803, name: "Xã Đăk Yă", province: 21, district: 246
	},
	{
		id: 23806, name: "Xã Đăk Djrăng", province: 21, district: 246
	},
	{
		id: 23809, name: "Xã Lơ Pang", province: 21, district: 246
	},
	{
		id: 23812, name: "Xã Kon Thụp", province: 21, district: 246
	},
	{
		id: 23815, name: "Xã Đê Ar", province: 21, district: 246
	},
	{
		id: 23818, name: "Xã Kon Chiêng", province: 21, district: 246
	},
	{
		id: 23821, name: "Xã Đăk Trôi", province: 21, district: 246
	},
	{
		id: 23638, name: "Thị trấn Kbang", province: 21, district: 247
	},
	{
		id: 23641, name: "Xã Kon Pne", province: 21, district: 247
	},
	{
		id: 23644, name: "Xã Đăk Roong", province: 21, district: 247
	},
	{
		id: 23647, name: "Xã Sơn Lang", province: 21, district: 247
	},
	{
		id: 23650, name: "Xã Krong", province: 21, district: 247
	},
	{
		id: 23653, name: "Xã Sơ Pai", province: 21, district: 247
	},
	{
		id: 23656, name: "Xã Lơ Ku", province: 21, district: 247
	},
	{
		id: 23659, name: "Xã Đông", province: 21, district: 247
	},
	{
		id: 23660, name: "Xã Đak Smar", province: 21, district: 247
	},
	{
		id: 23662, name: "Xã Nghĩa An", province: 21, district: 247
	},
	{
		id: 23665, name: "Xã Tơ Tung", province: 21, district: 247
	},
	{
		id: 23668, name: "Xã Kông Lơng Khơng", province: 21, district: 247
	},
	{
		id: 23671, name: "Xã Kông Pla", province: 21, district: 247
	},
	{
		id: 23674, name: "Xã Đăk Hlơ", province: 21, district: 247
	},
	{
		id: 23614, name: "Phường An Bình", province: 21, district: 248
	},
	{
		id: 23617, name: "Phường Tây Sơn", province: 21, district: 248
	},
	{
		id: 23620, name: "Phường An Phú", province: 21, district: 248
	},
	{
		id: 23623, name: "Phường An Tân", province: 21, district: 248
	},
	{
		id: 23626, name: "Xã Tú An", province: 21, district: 248
	},
	{
		id: 23627, name: "Xã Xuân An", province: 21, district: 248
	},
	{
		id: 23629, name: "Xã Cửu An", province: 21, district: 248
	},
	{
		id: 23630, name: "Phường An Phước", province: 21, district: 248
	},
	{
		id: 23632, name: "Xã Song An", province: 21, district: 248
	},
	{
		id: 23633, name: "Phường Ngô Mây", province: 21, district: 248
	},
	{
		id: 23635, name: "Xã Thành An", province: 21, district: 248
	},
	{
		id: 23824, name: "Thị trấn Kông Chro", province: 21, district: 249
	},
	{
		id: 23827, name: "Xã Chư Krêy", province: 21, district: 249
	},
	{
		id: 23830, name: "Xã An Trung", province: 21, district: 249
	},
	{
		id: 23833, name: "Xã Kông Yang", province: 21, district: 249
	},
	{
		id: 23836, name: "Xã Đăk Tơ Pang", province: 21, district: 249
	},
	{
		id: 23839, name: "Xã Sró", province: 21, district: 249
	},
	{
		id: 23840, name: "Xã Đắk Cơ Ning", province: 21, district: 249
	},
	{
		id: 23842, name: "Xã Đăk Song", province: 21, district: 249
	},
	{
		id: 23843, name: "Xã Đăk Pling", province: 21, district: 249
	},
	{
		id: 23845, name: "Xã Yang Trung", province: 21, district: 249
	},
	{
		id: 23846, name: "Xã Đăk Pơ Pho", province: 21, district: 249
	},
	{
		id: 23848, name: "Xã Ya Ma", province: 21, district: 249
	},
	{
		id: 23851, name: "Xã Chơ Long", province: 21, district: 249
	},
	{
		id: 23854, name: "Xã Yang Nam", province: 21, district: 249
	},
	{
		id: 23857, name: "Thị trấn Chư Ty", province: 21, district: 250
	},
	{
		id: 23860, name: "Xã Ia Dơk", province: 21, district: 250
	},
	{
		id: 23863, name: "Xã Ia Krêl", province: 21, district: 250
	},
	{
		id: 23866, name: "Xã Ia Din", province: 21, district: 250
	},
	{
		id: 23869, name: "Xã Ia Kla", province: 21, district: 250
	},
	{
		id: 23872, name: "Xã Ia Dom", province: 21, district: 250
	},
	{
		id: 23875, name: "Xã Ia Lang", province: 21, district: 250
	},
	{
		id: 23878, name: "Xã Ia Kriêng", province: 21, district: 250
	},
	{
		id: 23881, name: "Xã Ia Pnôn", province: 21, district: 250
	},
	{
		id: 23884, name: "Xã Ia Nan", province: 21, district: 250
	},
	{
		id: 23887, name: "Thị trấn Chư Prông", province: 21, district: 251
	},
	{
		id: 23888, name: "Xã Ia Kly", province: 21, district: 251
	},
	{
		id: 23890, name: "Xã Bình Giáo", province: 21, district: 251
	},
	{
		id: 23893, name: "Xã Ia Drăng", province: 21, district: 251
	},
	{
		id: 23896, name: "Xã Thăng Hưng", province: 21, district: 251
	},
	{
		id: 23899, name: "Xã Bàu Cạn", province: 21, district: 251
	},
	{
		id: 23902, name: "Xã Ia Phìn", province: 21, district: 251
	},
	{
		id: 23905, name: "Xã Ia Băng", province: 21, district: 251
	},
	{
		id: 23908, name: "Xã Ia Tôr", province: 21, district: 251
	},
	{
		id: 23911, name: "Xã Ia Boòng", province: 21, district: 251
	},
	{
		id: 23914, name: "Xã Ia O", province: 21, district: 251
	},
	{
		id: 23917, name: "Xã Ia Púch", province: 21, district: 251
	},
	{
		id: 23920, name: "Xã Ia Me", province: 21, district: 251
	},
	{
		id: 23923, name: "Xã Ia Vê", province: 21, district: 251
	},
	{
		id: 23924, name: "Xã Ia Bang", province: 21, district: 251
	},
	{
		id: 23926, name: "Xã Ia Pia", province: 21, district: 251
	},
	{
		id: 23929, name: "Xã Ia Ga", province: 21, district: 251
	},
	{
		id: 23932, name: "Xã Ia Lâu", province: 21, district: 251
	},
	{
		id: 23935, name: "Xã Ia Piơr", province: 21, district: 251
	},
	{
		id: 23938, name: "Xã Ia Mơ", province: 21, district: 251
	},
	{
		id: 23941, name: "Thị trấn Chư Sê", province: 21, district: 252
	},
	{
		id: 23944, name: "Xã Ia Tiêm", province: 21, district: 252
	},
	{
		id: 23945, name: "Xã Chư Pơng", province: 21, district: 252
	},
	{
		id: 23946, name: "Xã Bar Măih", province: 21, district: 252
	},
	{
		id: 23947, name: "Xã Bờ Ngoong", province: 21, district: 252
	},
	{
		id: 23950, name: "Xã Ia Glai", province: 21, district: 252
	},
	{
		id: 23953, name: "Xã Al Bá", province: 21, district: 252
	},
	{
		id: 23954, name: "Xã Kông Htok", province: 21, district: 252
	},
	{
		id: 23956, name: "Xã Ayun", province: 21, district: 252
	},
	{
		id: 23959, name: "Xã Ia Hlốp", province: 21, district: 252
	},
	{
		id: 23962, name: "Xã Ia Blang", province: 21, district: 252
	},
	{
		id: 23965, name: "Xã Dun", province: 21, district: 252
	},
	{
		id: 23966, name: "Xã Ia Pal", province: 21, district: 252
	},
	{
		id: 23968, name: "Xã H Bông", province: 21, district: 252
	},
	{
		id: 23977, name: "Xã Ia Ko", province: 21, district: 252
	},
	{
		id: 24041, name: "Phường Cheo Reo", province: 21, district: 253
	},
	{
		id: 24042, name: "Phường Hoà Bình", province: 21, district: 253
	},
	{
		id: 24044, name: "Phường Đoàn Kết", province: 21, district: 253
	},
	{
		id: 24045, name: "Phường Sông Bờ", province: 21, district: 253
	},
	{
		id: 24064, name: "Xã Ia Rbol", province: 21, district: 253
	},
	{
		id: 24065, name: "Xã Chư Băh", province: 21, district: 253
	},
	{
		id: 24070, name: "Xã Ia Rtô", province: 21, district: 253
	},
	{
		id: 24073, name: "Xã Ia Sao", province: 21, district: 253
	},
	{
		id: 24076, name: "Thị trấn Phú Túc", province: 21, district: 254
	},
	{
		id: 24079, name: "Xã Ia Rsai", province: 21, district: 254
	},
	{
		id: 24082, name: "Xã Ia Rsươm", province: 21, district: 254
	},
	{
		id: 24085, name: "Xã Chư Gu", province: 21, district: 254
	},
	{
		id: 24088, name: "Xã Đất Bằng", province: 21, district: 254
	},
	{
		id: 24091, name: "Xã Ia Mláh", province: 21, district: 254
	},
	{
		id: 24094, name: "Xã Chư Drăng", province: 21, district: 254
	},
	{
		id: 24097, name: "Xã Phú Cần", province: 21, district: 254
	},
	{
		id: 24100, name: "Xã Ia Hdreh", province: 21, district: 254
	},
	{
		id: 24103, name: "Xã Ia Rmok", province: 21, district: 254
	},
	{
		id: 24106, name: "Xã Chư Ngọc", province: 21, district: 254
	},
	{
		id: 24109, name: "Xã Uar", province: 21, district: 254
	},
	{
		id: 24112, name: "Xã Chư Rcăm", province: 21, district: 254
	},
	{
		id: 24115, name: "Xã Krông Năng", province: 21, district: 254
	},
	{
		id: 23764, name: "Thị trấn Ia Kha", province: 21, district: 255
	},
	{
		id: 23767, name: "Xã Ia Sao", province: 21, district: 255
	},
	{
		id: 23768, name: "Xã Ia Yok", province: 21, district: 255
	},
	{
		id: 23770, name: "Xã Ia Hrung", province: 21, district: 255
	},
	{
		id: 23771, name: "Xã Ia Bă", province: 21, district: 255
	},
	{
		id: 23773, name: "Xã Ia Khai", province: 21, district: 255
	},
	{
		id: 23776, name: "Xã Ia Krai", province: 21, district: 255
	},
	{
		id: 23778, name: "Xã Ia Grăng", province: 21, district: 255
	},
	{
		id: 23779, name: "Xã Ia Tô", province: 21, district: 255
	},
	{
		id: 23782, name: "Xã Ia O", province: 21, district: 255
	},
	{
		id: 23785, name: "Xã Ia Dêr", province: 21, district: 255
	},
	{
		id: 23788, name: "Xã Ia Chia", province: 21, district: 255
	},
	{
		id: 23791, name: "Xã Ia Pếch", province: 21, district: 255
	},
	{
		id: 23677, name: "Thị trấn Đăk Đoa", province: 21, district: 256
	},
	{
		id: 23680, name: "Xã Hà Đông", province: 21, district: 256
	},
	{
		id: 23683, name: "Xã Đăk Sơmei", province: 21, district: 256
	},
	{
		id: 23684, name: "Xã Đak Krong", province: 21, district: 256
	},
	{
		id: 23686, name: "Xã Hải Yang", province: 21, district: 256
	},
	{
		id: 23689, name: "Xã Kon Gang", province: 21, district: 256
	},
	{
		id: 23692, name: "Xã Hà Bầu", province: 21, district: 256
	},
	{
		id: 23695, name: "Xã Nam Yang", province: 21, district: 256
	},
	{
		id: 23698, name: "Xã K' Dang", province: 21, district: 256
	},
	{
		id: 23701, name: "Xã H' Neng", province: 21, district: 256
	},
	{
		id: 23704, name: "Xã Tân Bình", province: 21, district: 256
	},
	{
		id: 23707, name: "Xã Glar", province: 21, district: 256
	},
	{
		id: 23710, name: "Xã A Dơk", province: 21, district: 256
	},
	{
		id: 23713, name: "Xã Trang", province: 21, district: 256
	},
	{
		id: 23714, name: "Xã Hnol", province: 21, district: 256
	},
	{
		id: 23716, name: "Xã Ia Pết", province: 21, district: 256
	},
	{
		id: 23719, name: "Xã Ia Băng", province: 21, district: 256
	},
	{
		id: 24013, name: "Xã Pờ Tó", province: 21, district: 257
	},
	{
		id: 24016, name: "Xã Chư Răng", province: 21, district: 257
	},
	{
		id: 24019, name: "Xã Ia Kdăm", province: 21, district: 257
	},
	{
		id: 24022, name: "Xã Kim Tân", province: 21, district: 257
	},
	{
		id: 24025, name: "Xã Chư Mố", province: 21, district: 257
	},
	{
		id: 24028, name: "Xã Ia Tul", province: 21, district: 257
	},
	{
		id: 24031, name: "Xã Ia Ma Rơn", province: 21, district: 257
	},
	{
		id: 24034, name: "Xã Ia Broăi", province: 21, district: 257
	},
	{
		id: 24037, name: "Xã Ia Trok", province: 21, district: 257
	},
	{
		id: 23989, name: "Xã Hà Tam", province: 21, district: 258
	},
	{
		id: 23992, name: "Xã An Thành", province: 21, district: 258
	},
	{
		id: 23995, name: "Thị trấn Đak Pơ", province: 21, district: 258
	},
	{
		id: 23998, name: "Xã Yang Bắc", province: 21, district: 258
	},
	{
		id: 24001, name: "Xã Cư An", province: 21, district: 258
	},
	{
		id: 24004, name: "Xã Tân An", province: 21, district: 258
	},
	{
		id: 24007, name: "Xã Phú An", province: 21, district: 258
	},
	{
		id: 24010, name: "Xã Ya Hội", province: 21, district: 258
	},
	{
		id: 23942, name: "Thị trấn Nhơn Hoà", province: 21, district: 727
	},
	{
		id: 23971, name: "Xã Ia Hrú", province: 21, district: 727
	},
	{
		id: 23972, name: "Xã Ia Rong", province: 21, district: 727
	},
	{
		id: 23974, name: "Xã Ia Dreng", province: 21, district: 727
	},
	{
		id: 23978, name: "Xã Ia Hla", province: 21, district: 727
	},
	{
		id: 23980, name: "Xã Chư Don", province: 21, district: 727
	},
	{
		id: 23983, name: "Xã Ia Phang", province: 21, district: 727
	},
	{
		id: 23986, name: "Xã Ia Le", province: 21, district: 727
	},
	{
		id: 23987, name: "Xã Ia Blứ", province: 21, district: 727
	},
	{
		id: 24043, name: "Thị trấn Phú Thiện", province: 21, district: 728
	},
	{
		id: 24046, name: "Xã Chư A Thai", province: 21, district: 728
	},
	{
		id: 24048, name: "Xã Ayun Hạ", province: 21, district: 728
	},
	{
		id: 24049, name: "Xã Ia Ake", province: 21, district: 728
	},
	{
		id: 24052, name: "Xã Ia Sol", province: 21, district: 728
	},
	{
		id: 24055, name: "Xã Ia Piar", province: 21, district: 728
	},
	{
		id: 24058, name: "Xã Ia Peng", province: 21, district: 728
	},
	{
		id: 24060, name: "Xã Chrôh Pơnan", province: 21, district: 728
	},
	{
		id: 24061, name: "Xã Ia Hiao", province: 21, district: 728
	},
	{
		id: 24067, name: "Xã Ia Yeng", province: 21, district: 728
	},
	{
		id: 688, name: "Phường Quang Trung", province: 22, district: 302
	},
	{
		id: 691, name: "Phường Trần Phú", province: 22, district: 302
	},
	{
		id: 692, name: "Phường Ngọc Hà", province: 22, district: 302
	},
	{
		id: 694, name: "Phường Nguyễn Trãi", province: 22, district: 302
	},
	{
		id: 697, name: "Phường Minh Khai", province: 22, district: 302
	},
	{
		id: 700, name: "Xã Ngọc Đường", province: 22, district: 302
	},
	{
		id: 946, name: "Xã Phương Độ", province: 22, district: 302
	},
	{
		id: 949, name: "Xã Phương Thiện", province: 22, district: 302
	},
	{
		id: 712, name: "Thị trấn Phó Bảng", province: 22, district: 303
	},
	{
		id: 715, name: "Xã Lũng Cú", province: 22, district: 303
	},
	{
		id: 718, name: "Xã Má Lé", province: 22, district: 303
	},
	{
		id: 721, name: "Thị trấn Đồng Văn", province: 22, district: 303
	},
	{
		id: 724, name: "Xã Lũng Táo", province: 22, district: 303
	},
	{
		id: 727, name: "Xã Phố Là", province: 22, district: 303
	},
	{
		id: 730, name: "Xã Thài Phìn Tủng", province: 22, district: 303
	},
	{
		id: 733, name: "Xã Sủng Là", province: 22, district: 303
	},
	{
		id: 736, name: "Xã Xà Phìn", province: 22, district: 303
	},
	{
		id: 739, name: "Xã Tả Phìn", province: 22, district: 303
	},
	{
		id: 742, name: "Xã Tả Lủng", province: 22, district: 303
	},
	{
		id: 745, name: "Xã Phố Cáo", province: 22, district: 303
	},
	{
		id: 748, name: "Xã Sính Lủng", province: 22, district: 303
	},
	{
		id: 751, name: "Xã Sảng Tủng", province: 22, district: 303
	},
	{
		id: 754, name: "Xã Lũng Thầu", province: 22, district: 303
	},
	{
		id: 757, name: "Xã Hố Quáng Phìn", province: 22, district: 303
	},
	{
		id: 760, name: "Xã Vần Chải", province: 22, district: 303
	},
	{
		id: 763, name: "Xã Lũng Phìn", province: 22, district: 303
	},
	{
		id: 766, name: "Xã Sủng Trái", province: 22, district: 303
	},
	{
		id: 769, name: "Thị trấn Mèo Vạc", province: 22, district: 304
	},
	{
		id: 772, name: "Xã Thượng Phùng", province: 22, district: 304
	},
	{
		id: 775, name: "Xã Pải Lủng", province: 22, district: 304
	},
	{
		id: 778, name: "Xã Xín Cái", province: 22, district: 304
	},
	{
		id: 781, name: "Xã Pả Vi", province: 22, district: 304
	},
	{
		id: 784, name: "Xã Giàng Chu Phìn", province: 22, district: 304
	},
	{
		id: 787, name: "Xã Sủng Trà", province: 22, district: 304
	},
	{
		id: 790, name: "Xã Sủng Máng", province: 22, district: 304
	},
	{
		id: 793, name: "Xã Sơn Vĩ", province: 22, district: 304
	},
	{
		id: 796, name: "Xã Tả Lủng", province: 22, district: 304
	},
	{
		id: 799, name: "Xã Cán Chu Phìn", province: 22, district: 304
	},
	{
		id: 802, name: "Xã Lũng Pù", province: 22, district: 304
	},
	{
		id: 805, name: "Xã Lũng Chinh", province: 22, district: 304
	},
	{
		id: 808, name: "Xã Tát Ngà", province: 22, district: 304
	},
	{
		id: 811, name: "Xã Nậm Ban", province: 22, district: 304
	},
	{
		id: 814, name: "Xã Khâu Vai", province: 22, district: 304
	},
	{
		id: 815, name: "Xã Niêm Tòng", province: 22, district: 304
	},
	{
		id: 817, name: "Xã Niêm Sơn", province: 22, district: 304
	},
	{
		id: 820, name: "Thị trấn Yên Minh", province: 22, district: 305
	},
	{
		id: 823, name: "Xã Thắng Mố", province: 22, district: 305
	},
	{
		id: 826, name: "Xã Phú Lũng", province: 22, district: 305
	},
	{
		id: 829, name: "Xã Sủng Tráng", province: 22, district: 305
	},
	{
		id: 832, name: "Xã Bạch Đích", province: 22, district: 305
	},
	{
		id: 835, name: "Xã Na Khê", province: 22, district: 305
	},
	{
		id: 838, name: "Xã Sủng Thài", province: 22, district: 305
	},
	{
		id: 841, name: "Xã Hữu Vinh", province: 22, district: 305
	},
	{
		id: 844, name: "Xã Lao Và Chải", province: 22, district: 305
	},
	{
		id: 847, name: "Xã Mậu Duệ", province: 22, district: 305
	},
	{
		id: 850, name: "Xã Đông Minh", province: 22, district: 305
	},
	{
		id: 853, name: "Xã Mậu Long", province: 22, district: 305
	},
	{
		id: 856, name: "Xã Ngam La", province: 22, district: 305
	},
	{
		id: 859, name: "Xã Ngọc Long", province: 22, district: 305
	},
	{
		id: 862, name: "Xã Đường Thượng", province: 22, district: 305
	},
	{
		id: 865, name: "Xã Lũng Hồ", province: 22, district: 305
	},
	{
		id: 868, name: "Xã Du Tiến", province: 22, district: 305
	},
	{
		id: 871, name: "Xã Du Già", province: 22, district: 305
	},
	{
		id: 874, name: "Thị trấn Tam Sơn", province: 22, district: 306
	},
	{
		id: 877, name: "Xã Bát Đại Sơn", province: 22, district: 306
	},
	{
		id: 880, name: "Xã Nghĩa Thuận", province: 22, district: 306
	},
	{
		id: 883, name: "Xã Cán Tỷ", province: 22, district: 306
	},
	{
		id: 886, name: "Xã Cao Mã Pờ", province: 22, district: 306
	},
	{
		id: 889, name: "Xã Thanh Vân", province: 22, district: 306
	},
	{
		id: 892, name: "Xã Tùng Vài", province: 22, district: 306
	},
	{
		id: 895, name: "Xã Đông Hà", province: 22, district: 306
	},
	{
		id: 898, name: "Xã Quản Bạ", province: 22, district: 306
	},
	{
		id: 901, name: "Xã Lùng Tám", province: 22, district: 306
	},
	{
		id: 904, name: "Xã Quyết Tiến", province: 22, district: 306
	},
	{
		id: 907, name: "Xã Tả Ván", province: 22, district: 306
	},
	{
		id: 910, name: "Xã Thái An", province: 22, district: 306
	},
	{
		id: 703, name: "Xã Kim Thạch", province: 22, district: 307
	},
	{
		id: 706, name: "Xã Phú Linh", province: 22, district: 307
	},
	{
		id: 709, name: "Xã Kim Linh", province: 22, district: 307
	},
	{
		id: 913, name: "Thị trấn Vị Xuyên", province: 22, district: 307
	},
	{
		id: 916, name: "Thị trấn Nông Trường Việt Lâm", province: 22, district: 307
	},
	{
		id: 919, name: "Xã Minh Tân", province: 22, district: 307
	},
	{
		id: 922, name: "Xã Thuận Hoà", province: 22, district: 307
	},
	{
		id: 925, name: "Xã Tùng Bá", province: 22, district: 307
	},
	{
		id: 928, name: "Xã Thanh Thủy", province: 22, district: 307
	},
	{
		id: 931, name: "Xã Thanh Đức", province: 22, district: 307
	},
	{
		id: 934, name: "Xã Phong Quang", province: 22, district: 307
	},
	{
		id: 937, name: "Xã Xín Chải", province: 22, district: 307
	},
	{
		id: 940, name: "Xã Phương Tiến", province: 22, district: 307
	},
	{
		id: 943, name: "Xã Lao Chải", province: 22, district: 307
	},
	{
		id: 952, name: "Xã Cao Bồ", province: 22, district: 307
	},
	{
		id: 955, name: "Xã Đạo Đức", province: 22, district: 307
	},
	{
		id: 958, name: "Xã Thượng Sơn", province: 22, district: 307
	},
	{
		id: 961, name: "Xã Linh Hồ", province: 22, district: 307
	},
	{
		id: 964, name: "Xã Quảng Ngần", province: 22, district: 307
	},
	{
		id: 967, name: "Xã Việt Lâm", province: 22, district: 307
	},
	{
		id: 970, name: "Xã Ngọc Linh", province: 22, district: 307
	},
	{
		id: 973, name: "Xã Ngọc Minh", province: 22, district: 307
	},
	{
		id: 976, name: "Xã Bạch Ngọc", province: 22, district: 307
	},
	{
		id: 979, name: "Xã Trung Thành", province: 22, district: 307
	},
	{
		id: 982, name: "Xã Minh Sơn", province: 22, district: 308
	},
	{
		id: 985, name: "Xã Giáp Trung", province: 22, district: 308
	},
	{
		id: 988, name: "Xã Yên Định", province: 22, district: 308
	},
	{
		id: 991, name: "Thị trấn Yên Phú", province: 22, district: 308
	},
	{
		id: 994, name: "Xã Minh Ngọc", province: 22, district: 308
	},
	{
		id: 997, name: "Xã Yên Phong", province: 22, district: 308
	},
	{
		id: 1000, name: "Xã Lạc Nông", province: 22, district: 308
	},
	{
		id: 1003, name: "Xã Phú Nam", province: 22, district: 308
	},
	{
		id: 1006, name: "Xã Yên Cường", province: 22, district: 308
	},
	{
		id: 1009, name: "Xã Thượng Tân", province: 22, district: 308
	},
	{
		id: 1012, name: "Xã Đường Âm", province: 22, district: 308
	},
	{
		id: 1015, name: "Xã Đường Hồng", province: 22, district: 308
	},
	{
		id: 1018, name: "Xã Phiêng Luông", province: 22, district: 308
	},
	{
		id: 1021, name: "Thị trấn Vinh Quang", province: 22, district: 309
	},
	{
		id: 1024, name: "Xã Bản Máy", province: 22, district: 309
	},
	{
		id: 1027, name: "Xã Thàng Tín", province: 22, district: 309
	},
	{
		id: 1030, name: "Xã Thèn Chu Phìn", province: 22, district: 309
	},
	{
		id: 1033, name: "Xã Pố Lồ", province: 22, district: 309
	},
	{
		id: 1036, name: "Xã Bản Phùng", province: 22, district: 309
	},
	{
		id: 1039, name: "Xã Túng Sán", province: 22, district: 309
	},
	{
		id: 1042, name: "Xã Chiến Phố", province: 22, district: 309
	},
	{
		id: 1045, name: "Xã Đản Ván", province: 22, district: 309
	},
	{
		id: 1048, name: "Xã Tụ Nhân", province: 22, district: 309
	},
	{
		id: 1051, name: "Xã Tân Tiến", province: 22, district: 309
	},
	{
		id: 1054, name: "Xã Nàng Đôn", province: 22, district: 309
	},
	{
		id: 1057, name: "Xã Pờ Ly Ngài", province: 22, district: 309
	},
	{
		id: 1060, name: "Xã Sán Xả Hồ", province: 22, district: 309
	},
	{
		id: 1063, name: "Xã Bản Luốc", province: 22, district: 309
	},
	{
		id: 1066, name: "Xã Ngàm Đăng Vài", province: 22, district: 309
	},
	{
		id: 1069, name: "Xã Bản Nhùng", province: 22, district: 309
	},
	{
		id: 1072, name: "Xã Tả Sử Choóng", province: 22, district: 309
	},
	{
		id: 1075, name: "Xã Nậm Dịch", province: 22, district: 309
	},
	{
		id: 1078, name: "Xã Bản Péo", province: 22, district: 309
	},
	{
		id: 1081, name: "Xã Hồ Thầu", province: 22, district: 309
	},
	{
		id: 1084, name: "Xã Nam Sơn", province: 22, district: 309
	},
	{
		id: 1087, name: "Xã Nậm Tỵ", province: 22, district: 309
	},
	{
		id: 1090, name: "Xã Thông Nguyên", province: 22, district: 309
	},
	{
		id: 1093, name: "Xã Nậm Khòa", province: 22, district: 309
	},
	{
		id: 1096, name: "Thị trấn Cốc Pài", province: 22, district: 310
	},
	{
		id: 1099, name: "Xã Nàn Xỉn", province: 22, district: 310
	},
	{
		id: 1102, name: "Xã Bản Díu", province: 22, district: 310
	},
	{
		id: 1105, name: "Xã Chí Cà", province: 22, district: 310
	},
	{
		id: 1108, name: "Xã Xín Mần", province: 22, district: 310
	},
	{
		id: 1111, name: "Xã Trung Thịnh", province: 22, district: 310
	},
	{
		id: 1114, name: "Xã Thèn Phàng", province: 22, district: 310
	},
	{
		id: 1117, name: "Xã Ngán Chiên", province: 22, district: 310
	},
	{
		id: 1120, name: "Xã Pà Vầy Sủ", province: 22, district: 310
	},
	{
		id: 1123, name: "Xã Cốc Rế", province: 22, district: 310
	},
	{
		id: 1126, name: "Xã Thu Tà", province: 22, district: 310
	},
	{
		id: 1129, name: "Xã Nàn Ma", province: 22, district: 310
	},
	{
		id: 1132, name: "Xã Tả Nhìu", province: 22, district: 310
	},
	{
		id: 1135, name: "Xã Bản Ngò", province: 22, district: 310
	},
	{
		id: 1138, name: "Xã Chế Là", province: 22, district: 310
	},
	{
		id: 1141, name: "Xã Nấm Dẩn", province: 22, district: 310
	},
	{
		id: 1144, name: "Xã Quảng Nguyên", province: 22, district: 310
	},
	{
		id: 1147, name: "Xã Nà Chì", province: 22, district: 310
	},
	{
		id: 1150, name: "Xã Khuôn Lùng", province: 22, district: 310
	},
	{
		id: 1153, name: "Thị trấn Việt Quang", province: 22, district: 311
	},
	{
		id: 1156, name: "Thị trấn Vĩnh Tuy", province: 22, district: 311
	},
	{
		id: 1159, name: "Xã Tân Lập", province: 22, district: 311
	},
	{
		id: 1162, name: "Xã Tân Thành", province: 22, district: 311
	},
	{
		id: 1165, name: "Xã Đồng Tiến", province: 22, district: 311
	},
	{
		id: 1168, name: "Xã Đồng Tâm", province: 22, district: 311
	},
	{
		id: 1171, name: "Xã Tân Quang", province: 22, district: 311
	},
	{
		id: 1174, name: "Xã Thượng Bình", province: 22, district: 311
	},
	{
		id: 1177, name: "Xã Hữu Sản", province: 22, district: 311
	},
	{
		id: 1180, name: "Xã Kim Ngọc", province: 22, district: 311
	},
	{
		id: 1183, name: "Xã Việt Vinh", province: 22, district: 311
	},
	{
		id: 1186, name: "Xã Bằng Hành", province: 22, district: 311
	},
	{
		id: 1189, name: "Xã Quang Minh", province: 22, district: 311
	},
	{
		id: 1192, name: "Xã Liên Hiệp", province: 22, district: 311
	},
	{
		id: 1195, name: "Xã Vô Điếm", province: 22, district: 311
	},
	{
		id: 1198, name: "Xã Việt Hồng", province: 22, district: 311
	},
	{
		id: 1201, name: "Xã Hùng An", province: 22, district: 311
	},
	{
		id: 1204, name: "Xã Đức Xuân", province: 22, district: 311
	},
	{
		id: 1207, name: "Xã Tiên Kiều", province: 22, district: 311
	},
	{
		id: 1210, name: "Xã Vĩnh Hảo", province: 22, district: 311
	},
	{
		id: 1213, name: "Xã Vĩnh Phúc", province: 22, district: 311
	},
	{
		id: 1216, name: "Xã Đồng Yên", province: 22, district: 311
	},
	{
		id: 1219, name: "Xã Đông Thành", province: 22, district: 311
	},
	{
		id: 1222, name: "Xã Xuân Minh", province: 22, district: 312
	},
	{
		id: 1225, name: "Xã Tiên Nguyên", province: 22, district: 312
	},
	{
		id: 1228, name: "Xã Tân Nam", province: 22, district: 312
	},
	{
		id: 1231, name: "Xã Bản Rịa", province: 22, district: 312
	},
	{
		id: 1234, name: "Xã Yên Thành", province: 22, district: 312
	},
	{
		id: 1237, name: "Thị trấn Yên Bình", province: 22, district: 312
	},
	{
		id: 1240, name: "Xã Tân Trịnh", province: 22, district: 312
	},
	{
		id: 1243, name: "Xã Tân Bắc", province: 22, district: 312
	},
	{
		id: 1246, name: "Xã Bằng Lang", province: 22, district: 312
	},
	{
		id: 1249, name: "Xã Yên Hà", province: 22, district: 312
	},
	{
		id: 1252, name: "Xã Hương Sơn", province: 22, district: 312
	},
	{
		id: 1255, name: "Xã Xuân Giang", province: 22, district: 312
	},
	{
		id: 1258, name: "Xã Nà Khương", province: 22, district: 312
	},
	{
		id: 1261, name: "Xã Tiên Yên", province: 22, district: 312
	},
	{
		id: 1264, name: "Xã Vĩ Thượng", province: 22, district: 312
	},
	{
		id: 13285, name: "Phường Quang Trung", province: 23, district: 259
	},
	{
		id: 13288, name: "Phường Lương Khánh Thiện", province: 23, district: 259
	},
	{
		id: 13291, name: "Phường Lê Hồng Phong", province: 23, district: 259
	},
	{
		id: 13294, name: "Phường Minh Khai", province: 23, district: 259
	},
	{
		id: 13297, name: "Phường Hai Bà Trưng", province: 23, district: 259
	},
	{
		id: 13300, name: "Phường Trần Hưng Đạo", province: 23, district: 259
	},
	{
		id: 13303, name: "Phường Lam Hạ", province: 23, district: 259
	},
	{
		id: 13306, name: "Xã Phù Vân", province: 23, district: 259
	},
	{
		id: 13309, name: "Phường Liêm Chính", province: 23, district: 259
	},
	{
		id: 13312, name: "Xã Liêm Chung", province: 23, district: 259
	},
	{
		id: 13315, name: "Phường Thanh Châu", province: 23, district: 259
	},
	{
		id: 13318, name: "Phường Châu Sơn", province: 23, district: 259
	},
	{
		id: 13366, name: "Xã Tiên Tân", province: 23, district: 259
	},
	{
		id: 13372, name: "Xã Tiên Hiệp", province: 23, district: 259
	},
	{
		id: 13381, name: "Xã Tiên Hải", province: 23, district: 259
	},
	{
		id: 13426, name: "Xã Kim Bình", province: 23, district: 259
	},
	{
		id: 13444, name: "Xã Liêm Tuyền", province: 23, district: 259
	},
	{
		id: 13447, name: "Xã Liêm Tiết", province: 23, district: 259
	},
	{
		id: 13459, name: "Phường Thanh Tuyền", province: 23, district: 259
	},
	{
		id: 13507, name: "Xã Đinh Xá", province: 23, district: 259
	},
	{
		id: 13513, name: "Xã Trịnh Xá", province: 23, district: 259
	},
	{
		id: 13321, name: "Thị trấn Đồng Văn", province: 23, district: 260
	},
	{
		id: 13324, name: "Thị trấn Hòa Mạc", province: 23, district: 260
	},
	{
		id: 13327, name: "Xã Mộc Bắc", province: 23, district: 260
	},
	{
		id: 13330, name: "Xã Châu Giang", province: 23, district: 260
	},
	{
		id: 13333, name: "Xã Bạch Thượng", province: 23, district: 260
	},
	{
		id: 13336, name: "Xã Duy Minh", province: 23, district: 260
	},
	{
		id: 13339, name: "Xã Mộc Nam", province: 23, district: 260
	},
	{
		id: 13342, name: "Xã Duy Hải", province: 23, district: 260
	},
	{
		id: 13345, name: "Xã Chuyên Ngoại", province: 23, district: 260
	},
	{
		id: 13348, name: "Xã Yên Bắc", province: 23, district: 260
	},
	{
		id: 13351, name: "Xã Trác Văn", province: 23, district: 260
	},
	{
		id: 13354, name: "Xã Tiên Nội", province: 23, district: 260
	},
	{
		id: 13357, name: "Xã Hoàng Đông", province: 23, district: 260
	},
	{
		id: 13360, name: "Xã Yên Nam", province: 23, district: 260
	},
	{
		id: 13363, name: "Xã Tiên Ngoại", province: 23, district: 260
	},
	{
		id: 13369, name: "Xã Đọi Sơn", province: 23, district: 260
	},
	{
		id: 13375, name: "Xã Châu Sơn", province: 23, district: 260
	},
	{
		id: 13378, name: "Xã Tiền Phong", province: 23, district: 260
	},
	{
		id: 13384, name: "Thị trấn Quế", province: 23, district: 261
	},
	{
		id: 13387, name: "Xã Nguyễn Úy", province: 23, district: 261
	},
	{
		id: 13390, name: "Xã Đại Cương", province: 23, district: 261
	},
	{
		id: 13393, name: "Xã Lê Hồ", province: 23, district: 261
	},
	{
		id: 13396, name: "Xã Tượng Lĩnh", province: 23, district: 261
	},
	{
		id: 13399, name: "Xã Nhật Tựu", province: 23, district: 261
	},
	{
		id: 13402, name: "Xã Nhật Tân", province: 23, district: 261
	},
	{
		id: 13405, name: "Xã Đồng Hóa", province: 23, district: 261
	},
	{
		id: 13408, name: "Xã Hoàng Tây", province: 23, district: 261
	},
	{
		id: 13411, name: "Xã Tân Sơn", province: 23, district: 261
	},
	{
		id: 13414, name: "Xã Thụy Lôi", province: 23, district: 261
	},
	{
		id: 13417, name: "Xã Văn Xá", province: 23, district: 261
	},
	{
		id: 13420, name: "Xã Khả Phong", province: 23, district: 261
	},
	{
		id: 13423, name: "Xã Ngọc Sơn", province: 23, district: 261
	},
	{
		id: 13429, name: "Thị trấn Ba Sao", province: 23, district: 261
	},
	{
		id: 13432, name: "Xã Liên Sơn", province: 23, district: 261
	},
	{
		id: 13435, name: "Xã Thi Sơn", province: 23, district: 261
	},
	{
		id: 13438, name: "Xã Thanh Sơn", province: 23, district: 261
	},
	{
		id: 13564, name: "Thị trấn Vĩnh Trụ", province: 23, district: 262
	},
	{
		id: 13567, name: "Xã Hợp Lý", province: 23, district: 262
	},
	{
		id: 13570, name: "Xã Nguyên Lý", province: 23, district: 262
	},
	{
		id: 13573, name: "Xã Chính Lý", province: 23, district: 262
	},
	{
		id: 13576, name: "Xã Chân Lý", province: 23, district: 262
	},
	{
		id: 13579, name: "Xã Đạo Lý", province: 23, district: 262
	},
	{
		id: 13582, name: "Xã Công Lý", province: 23, district: 262
	},
	{
		id: 13585, name: "Xã Văn Lý", province: 23, district: 262
	},
	{
		id: 13588, name: "Xã Bắc Lý", province: 23, district: 262
	},
	{
		id: 13591, name: "Xã Đức Lý", province: 23, district: 262
	},
	{
		id: 13594, name: "Xã Nhân Đạo", province: 23, district: 262
	},
	{
		id: 13597, name: "Xã Đồng Lý", province: 23, district: 262
	},
	{
		id: 13600, name: "Xã Nhân Thịnh", province: 23, district: 262
	},
	{
		id: 13603, name: "Xã Nhân Hưng", province: 23, district: 262
	},
	{
		id: 13606, name: "Xã Nhân Khang", province: 23, district: 262
	},
	{
		id: 13609, name: "Xã Nhân Mỹ", province: 23, district: 262
	},
	{
		id: 13612, name: "Xã Nhân Nghĩa", province: 23, district: 262
	},
	{
		id: 13615, name: "Xã Nhân Chính", province: 23, district: 262
	},
	{
		id: 13618, name: "Xã Nhân Bình", province: 23, district: 262
	},
	{
		id: 13621, name: "Xã Phú Phúc", province: 23, district: 262
	},
	{
		id: 13624, name: "Xã Xuân Khê", province: 23, district: 262
	},
	{
		id: 13627, name: "Xã Tiến Thắng", province: 23, district: 262
	},
	{
		id: 13630, name: "Xã Hòa Hậu", province: 23, district: 262
	},
	{
		id: 13441, name: "Thị trấn Kiện Khê", province: 23, district: 263
	},
	{
		id: 13450, name: "Xã Liêm Phong", province: 23, district: 263
	},
	{
		id: 13453, name: "Xã Thanh Hà", province: 23, district: 263
	},
	{
		id: 13456, name: "Xã Liêm Cần", province: 23, district: 263
	},
	{
		id: 13462, name: "Xã Thanh Bình", province: 23, district: 263
	},
	{
		id: 13465, name: "Xã Liêm Thuận", province: 23, district: 263
	},
	{
		id: 13468, name: "Xã Thanh Thủy", province: 23, district: 263
	},
	{
		id: 13471, name: "Xã Thanh Phong", province: 23, district: 263
	},
	{
		id: 13474, name: "Xã Thanh Lưu", province: 23, district: 263
	},
	{
		id: 13477, name: "Xã Thanh Tân", province: 23, district: 263
	},
	{
		id: 13480, name: "Xã Liêm Túc", province: 23, district: 263
	},
	{
		id: 13483, name: "Xã Liêm Sơn", province: 23, district: 263
	},
	{
		id: 13486, name: "Xã Thanh Hương", province: 23, district: 263
	},
	{
		id: 13489, name: "Xã Thanh Nghị", province: 23, district: 263
	},
	{
		id: 13492, name: "Xã Thanh Tâm", province: 23, district: 263
	},
	{
		id: 13495, name: "Xã Thanh Nguyên", province: 23, district: 263
	},
	{
		id: 13498, name: "Xã Thanh Hải", province: 23, district: 263
	},
	{
		id: 13501, name: "Thị trấn Bình Mỹ", province: 23, district: 264
	},
	{
		id: 13504, name: "Xã Bình Nghĩa", province: 23, district: 264
	},
	{
		id: 13510, name: "Xã Tràng An", province: 23, district: 264
	},
	{
		id: 13516, name: "Xã Đồng Du", province: 23, district: 264
	},
	{
		id: 13519, name: "Xã Ngọc Lũ", province: 23, district: 264
	},
	{
		id: 13522, name: "Xã Hưng Công", province: 23, district: 264
	},
	{
		id: 13525, name: "Xã Đồn Xá", province: 23, district: 264
	},
	{
		id: 13528, name: "Xã An Ninh", province: 23, district: 264
	},
	{
		id: 13531, name: "Xã Bồ Đề", province: 23, district: 264
	},
	{
		id: 13534, name: "Xã Bối Cầu", province: 23, district: 264
	},
	{
		id: 13537, name: "Xã An Mỹ", province: 23, district: 264
	},
	{
		id: 13540, name: "Xã An Nội", province: 23, district: 264
	},
	{
		id: 13543, name: "Xã Vũ Bản", province: 23, district: 264
	},
	{
		id: 13546, name: "Xã Trung Lương", province: 23, district: 264
	},
	{
		id: 13549, name: "Xã Mỹ Thọ", province: 23, district: 264
	},
	{
		id: 13552, name: "Xã An Đổ", province: 23, district: 264
	},
	{
		id: 13555, name: "Xã La Sơn", province: 23, district: 264
	},
	{
		id: 13558, name: "Xã Tiêu Động", province: 23, district: 264
	},
	{
		id: 13561, name: "Xã An Lão", province: 23, district: 264
	},
	{
		id: 31318, name: "Phường I", province: 24, district: 706
	},
	{
		id: 31321, name: "Phường III", province: 24, district: 706
	},
	{
		id: 31324, name: "Phường IV", province: 24, district: 706
	},
	{
		id: 31327, name: "Phường V", province: 24, district: 706
	},
	{
		id: 31330, name: "Phường VII", province: 24, district: 706
	},
	{
		id: 31333, name: "Xã Vị Tân", province: 24, district: 706
	},
	{
		id: 31336, name: "Xã Hoả Lựu", province: 24, district: 706
	},
	{
		id: 31338, name: "Xã Tân Tiến", province: 24, district: 706
	},
	{
		id: 31339, name: "Xã Hoả Tiến", province: 24, district: 706
	},
	{
		id: 31340, name: "Phường Ngã Bảy", province: 24, district: 707
	},
	{
		id: 31341, name: "Phường Lái Hiếu", province: 24, district: 707
	},
	{
		id: 31343, name: "Phường Hiệp Thành", province: 24, district: 707
	},
	{
		id: 31344, name: "Xã Hiệp Lợi", province: 24, district: 707
	},
	{
		id: 31411, name: "Xã Đại Thành", province: 24, district: 707
	},
	{
		id: 31414, name: "Xã Tân Thành", province: 24, district: 707
	},
	{
		id: 31441, name: "Thị trấn Nàng Mau", province: 24, district: 708
	},
	{
		id: 31444, name: "Xã Vị Trung", province: 24, district: 708
	},
	{
		id: 31447, name: "Xã Vị Thuỷ", province: 24, district: 708
	},
	{
		id: 31450, name: "Xã Vị Thắng", province: 24, district: 708
	},
	{
		id: 31453, name: "Xã Vĩnh Thuận Tây", province: 24, district: 708
	},
	{
		id: 31456, name: "Xã Vĩnh Trung", province: 24, district: 708
	},
	{
		id: 31459, name: "Xã Vĩnh Tường", province: 24, district: 708
	},
	{
		id: 31462, name: "Xã Vị Đông", province: 24, district: 708
	},
	{
		id: 31465, name: "Xã Vị Thanh", province: 24, district: 708
	},
	{
		id: 31468, name: "Xã Vị Bình", province: 24, district: 708
	},
	{
		id: 31483, name: "Xã Thuận Hưng", province: 24, district: 709
	},
	{
		id: 31484, name: "Xã Thuận Hoà", province: 24, district: 709
	},
	{
		id: 31486, name: "Xã Vĩnh Thuận Đông", province: 24, district: 709
	},
	{
		id: 31489, name: "Xã Vĩnh Viễn", province: 24, district: 709
	},
	{
		id: 31490, name: "Xã Vĩnh Viễn A", province: 24, district: 709
	},
	{
		id: 31492, name: "Xã Lương Tâm", province: 24, district: 709
	},
	{
		id: 31493, name: "Xã Lương Nghĩa", province: 24, district: 709
	},
	{
		id: 31495, name: "Xã Xà Phiên", province: 24, district: 709
	},
	{
		id: 31393, name: "Thị trấn Kinh Cùng", province: 24, district: 710
	},
	{
		id: 31396, name: "Thị trấn Cây Dương", province: 24, district: 710
	},
	{
		id: 31399, name: "Xã Tân Bình", province: 24, district: 710
	},
	{
		id: 31402, name: "Xã Bình Thành", province: 24, district: 710
	},
	{
		id: 31405, name: "Xã Thạnh Hòa", province: 24, district: 710
	},
	{
		id: 31408, name: "Xã Long Thạnh", province: 24, district: 710
	},
	{
		id: 31417, name: "Xã Phụng Hiệp", province: 24, district: 710
	},
	{
		id: 31420, name: "Xã Hòa Mỹ", province: 24, district: 710
	},
	{
		id: 31423, name: "Xã Hòa An", province: 24, district: 710
	},
	{
		id: 31426, name: "Xã Phương Bình", province: 24, district: 710
	},
	{
		id: 31429, name: "Xã Hiệp Hưng", province: 24, district: 710
	},
	{
		id: 31432, name: "Xã Tân Phước Hưng", province: 24, district: 710
	},
	{
		id: 31433, name: "Thị trấn Búng Tàu", province: 24, district: 710
	},
	{
		id: 31435, name: "Xã Phương Phú", province: 24, district: 710
	},
	{
		id: 31438, name: "Xã Tân Long", province: 24, district: 710
	},
	{
		id: 31366, name: "Thị trấn Ngã Sáu", province: 24, district: 711
	},
	{
		id: 31369, name: "Xã Đông Thạnh", province: 24, district: 711
	},
	{
		id: 31372, name: "Xã Phú An", province: 24, district: 711
	},
	{
		id: 31375, name: "Xã Đông Phú", province: 24, district: 711
	},
	{
		id: 31378, name: "Xã Phú Hữu", province: 24, district: 711
	},
	{
		id: 31379, name: "Xã Phú Tân", province: 24, district: 711
	},
	{
		id: 31381, name: "Thị trấn Mái Dầm", province: 24, district: 711
	},
	{
		id: 31384, name: "Xã Đông Phước", province: 24, district: 711
	},
	{
		id: 31387, name: "Xã Đông Phước A", province: 24, district: 711
	},
	{
		id: 31342, name: "Thị trấn Một Ngàn", province: 24, district: 712
	},
	{
		id: 31345, name: "Xã Tân Hòa", province: 24, district: 712
	},
	{
		id: 31346, name: "Thị trấn Bảy Ngàn", province: 24, district: 712
	},
	{
		id: 31348, name: "Xã Trường Long Tây", province: 24, district: 712
	},
	{
		id: 31351, name: "Xã Trường Long A", province: 24, district: 712
	},
	{
		id: 31357, name: "Xã Nhơn Nghĩa A", province: 24, district: 712
	},
	{
		id: 31359, name: "Thị trấn Rạch Gòi", province: 24, district: 712
	},
	{
		id: 31360, name: "Xã Thạnh Xuân", province: 24, district: 712
	},
	{
		id: 31362, name: "Thị trấn Cái Tắc", province: 24, district: 712
	},
	{
		id: 31363, name: "Xã Tân Phú Thạnh", province: 24, district: 712
	},
	{
		id: 31471, name: "Phường Thuận An", province: 24, district: 758
	},
	{
		id: 31472, name: "Phường Trà Lồng", province: 24, district: 758
	},
	{
		id: 31473, name: "Phường Bình Thạnh", province: 24, district: 758
	},
	{
		id: 31474, name: "Xã Long Bình", province: 24, district: 758
	},
	{
		id: 31475, name: "Phường Vĩnh Tường", province: 24, district: 758
	},
	{
		id: 31477, name: "Xã Long Trị", province: 24, district: 758
	},
	{
		id: 31478, name: "Xã Long Trị A", province: 24, district: 758
	},
	{
		id: 31480, name: "Xã Long Phú", province: 24, district: 758
	},
	{
		id: 31481, name: "Xã Tân Phú", province: 24, district: 758
	},
	{
		id: 18070, name: "Phường Trần Phú", province: 25, district: 279
	},
	{
		id: 18073, name: "Phường Nam Hà", province: 25, district: 279
	},
	{
		id: 18076, name: "Phường Bắc Hà", province: 25, district: 279
	},
	{
		id: 18077, name: "Phường Nguyễn Du", province: 25, district: 279
	},
	{
		id: 18079, name: "Phường Tân Giang", province: 25, district: 279
	},
	{
		id: 18082, name: "Phường Đại Nài", province: 25, district: 279
	},
	{
		id: 18085, name: "Phường Hà Huy Tập", province: 25, district: 279
	},
	{
		id: 18088, name: "Xã Thạch Trung", province: 25, district: 279
	},
	{
		id: 18091, name: "Phường Thạch Quý", province: 25, district: 279
	},
	{
		id: 18094, name: "Phường Thạch Linh", province: 25, district: 279
	},
	{
		id: 18097, name: "Phường Văn Yên", province: 25, district: 279
	},
	{
		id: 18100, name: "Xã Thạch Hạ", province: 25, district: 279
	},
	{
		id: 18103, name: "Xã Thạch Môn", province: 25, district: 279
	},
	{
		id: 18106, name: "Xã Thạch Đồng", province: 25, district: 279
	},
	{
		id: 18109, name: "Xã Thạch Hưng", province: 25, district: 279
	},
	{
		id: 18112, name: "Xã Thạch Bình", province: 25, district: 279
	},
	{
		id: 18115, name: "Phường Bắc Hồng", province: 25, district: 280
	},
	{
		id: 18118, name: "Phường Nam Hồng", province: 25, district: 280
	},
	{
		id: 18121, name: "Phường Trung Lương", province: 25, district: 280
	},
	{
		id: 18124, name: "Phường Đức Thuận", province: 25, district: 280
	},
	{
		id: 18127, name: "Phường Đậu Liêu", province: 25, district: 280
	},
	{
		id: 18130, name: "Xã Thuận Lộc", province: 25, district: 280
	},
	{
		id: 18133, name: "Thị trấn Phố Châu", province: 25, district: 281
	},
	{
		id: 18136, name: "Thị trấn Tây Sơn", province: 25, district: 281
	},
	{
		id: 18139, name: "Xã Sơn Hồng", province: 25, district: 281
	},
	{
		id: 18142, name: "Xã Sơn Tiến", province: 25, district: 281
	},
	{
		id: 18145, name: "Xã Sơn Lâm", province: 25, district: 281
	},
	{
		id: 18148, name: "Xã Sơn Lễ", province: 25, district: 281
	},
	{
		id: 18151, name: "Xã Sơn Thịnh", province: 25, district: 281
	},
	{
		id: 18154, name: "Xã Sơn An", province: 25, district: 281
	},
	{
		id: 18157, name: "Xã Sơn Giang", province: 25, district: 281
	},
	{
		id: 18160, name: "Xã Sơn Lĩnh", province: 25, district: 281
	},
	{
		id: 18163, name: "Xã Sơn Hòa", province: 25, district: 281
	},
	{
		id: 18166, name: "Xã Sơn Tân", province: 25, district: 281
	},
	{
		id: 18169, name: "Xã Sơn Mỹ", province: 25, district: 281
	},
	{
		id: 18172, name: "Xã Sơn Tây", province: 25, district: 281
	},
	{
		id: 18175, name: "Xã Sơn Ninh", province: 25, district: 281
	},
	{
		id: 18178, name: "Xã Sơn Châu", province: 25, district: 281
	},
	{
		id: 18181, name: "Xã Sơn Hà", province: 25, district: 281
	},
	{
		id: 18184, name: "Xã Sơn Quang", province: 25, district: 281
	},
	{
		id: 18187, name: "Xã Sơn Trung", province: 25, district: 281
	},
	{
		id: 18190, name: "Xã Sơn Bằng", province: 25, district: 281
	},
	{
		id: 18193, name: "Xã Sơn Bình", province: 25, district: 281
	},
	{
		id: 18196, name: "Xã Sơn Kim 1", province: 25, district: 281
	},
	{
		id: 18199, name: "Xã Sơn Kim 2", province: 25, district: 281
	},
	{
		id: 18202, name: "Xã Sơn Trà", province: 25, district: 281
	},
	{
		id: 18205, name: "Xã Sơn Long", province: 25, district: 281
	},
	{
		id: 18208, name: "Xã Sơn Diệm", province: 25, district: 281
	},
	{
		id: 18211, name: "Xã Sơn Thủy", province: 25, district: 281
	},
	{
		id: 18214, name: "Xã Sơn Hàm", province: 25, district: 281
	},
	{
		id: 18217, name: "Xã Sơn Phú", province: 25, district: 281
	},
	{
		id: 18220, name: "Xã Sơn Phúc", province: 25, district: 281
	},
	{
		id: 18223, name: "Xã Sơn Trường", province: 25, district: 281
	},
	{
		id: 18226, name: "Xã Sơn Mai", province: 25, district: 281
	},
	{
		id: 18229, name: "Thị trấn Đức Thọ", province: 25, district: 282
	},
	{
		id: 18232, name: "Xã Đức Quang", province: 25, district: 282
	},
	{
		id: 18235, name: "Xã Đức Vĩnh", province: 25, district: 282
	},
	{
		id: 18238, name: "Xã Đức Châu", province: 25, district: 282
	},
	{
		id: 18241, name: "Xã Đức Tùng", province: 25, district: 282
	},
	{
		id: 18244, name: "Xã Trường Sơn", province: 25, district: 282
	},
	{
		id: 18247, name: "Xã Liên Minh", province: 25, district: 282
	},
	{
		id: 18250, name: "Xã Đức La", province: 25, district: 282
	},
	{
		id: 18253, name: "Xã Yên Hồ", province: 25, district: 282
	},
	{
		id: 18256, name: "Xã Đức Nhân", province: 25, district: 282
	},
	{
		id: 18259, name: "Xã Tùng Ảnh", province: 25, district: 282
	},
	{
		id: 18262, name: "Xã Bùi Xá", province: 25, district: 282
	},
	{
		id: 18265, name: "Xã Đức Thịnh", province: 25, district: 282
	},
	{
		id: 18268, name: "Xã Đức Yên", province: 25, district: 282
	},
	{
		id: 18271, name: "Xã Đức Thủy", province: 25, district: 282
	},
	{
		id: 18274, name: "Xã Thái Yên", province: 25, district: 282
	},
	{
		id: 18277, name: "Xã Trung Lễ", province: 25, district: 282
	},
	{
		id: 18280, name: "Xã Đức Hòa", province: 25, district: 282
	},
	{
		id: 18283, name: "Xã Đức Long", province: 25, district: 282
	},
	{
		id: 18286, name: "Xã Đức Lâm", province: 25, district: 282
	},
	{
		id: 18289, name: "Xã Đức Thanh", province: 25, district: 282
	},
	{
		id: 18292, name: "Xã Đức Dũng", province: 25, district: 282
	},
	{
		id: 18295, name: "Xã Đức Lập", province: 25, district: 282
	},
	{
		id: 18298, name: "Xã Đức An", province: 25, district: 282
	},
	{
		id: 18301, name: "Xã Đức Lạc", province: 25, district: 282
	},
	{
		id: 18304, name: "Xã Đức Đồng", province: 25, district: 282
	},
	{
		id: 18307, name: "Xã Đức Lạng", province: 25, district: 282
	},
	{
		id: 18310, name: "Xã Tân Hương", province: 25, district: 282
	},
	{
		id: 18349, name: "Thị trấn Nghi Xuân", province: 25, district: 283
	},
	{
		id: 18352, name: "Thị trấn Xuân An", province: 25, district: 283
	},
	{
		id: 18355, name: "Xã Xuân Hội", province: 25, district: 283
	},
	{
		id: 18358, name: "Xã Xuân Trường", province: 25, district: 283
	},
	{
		id: 18361, name: "Xã Xuân Đan", province: 25, district: 283
	},
	{
		id: 18364, name: "Xã Xuân Phổ", province: 25, district: 283
	},
	{
		id: 18367, name: "Xã Xuân Hải", province: 25, district: 283
	},
	{
		id: 18370, name: "Xã Xuân Giang", province: 25, district: 283
	},
	{
		id: 18373, name: "Xã Tiên Điền", province: 25, district: 283
	},
	{
		id: 18376, name: "Xã Xuân Yên", province: 25, district: 283
	},
	{
		id: 18379, name: "Xã Xuân Mỹ", province: 25, district: 283
	},
	{
		id: 18382, name: "Xã Xuân Thành", province: 25, district: 283
	},
	{
		id: 18385, name: "Xã Xuân Viên", province: 25, district: 283
	},
	{
		id: 18388, name: "Xã Xuân Hồng", province: 25, district: 283
	},
	{
		id: 18391, name: "Xã Cỗ Đạm", province: 25, district: 283
	},
	{
		id: 18394, name: "Xã Xuân Liên", province: 25, district: 283
	},
	{
		id: 18397, name: "Xã Xuân Lĩnh", province: 25, district: 283
	},
	{
		id: 18400, name: "Xã Xuân Lam", province: 25, district: 283
	},
	{
		id: 18403, name: "Xã Cương Gián", province: 25, district: 283
	},
	{
		id: 18406, name: "Thị trấn Nghèn", province: 25, district: 284
	},
	{
		id: 18415, name: "Xã Thiên Lộc", province: 25, district: 284
	},
	{
		id: 18418, name: "Xã Thuần Thiện", province: 25, district: 284
	},
	{
		id: 18424, name: "Xã Kim Lộc", province: 25, district: 284
	},
	{
		id: 18427, name: "Xã Vượng Lộc", province: 25, district: 284
	},
	{
		id: 18433, name: "Xã Thanh Lộc", province: 25, district: 284
	},
	{
		id: 18436, name: "Xã Song Lộc", province: 25, district: 284
	},
	{
		id: 18439, name: "Xã Thường Nga", province: 25, district: 284
	},
	{
		id: 18442, name: "Xã Trường Lộc", province: 25, district: 284
	},
	{
		id: 18445, name: "Xã Tùng Lộc", province: 25, district: 284
	},
	{
		id: 18451, name: "Xã Yên Lộc", province: 25, district: 284
	},
	{
		id: 18454, name: "Xã Phú Lộc", province: 25, district: 284
	},
	{
		id: 18460, name: "Xã Khánh Lộc", province: 25, district: 284
	},
	{
		id: 18463, name: "Xã Gia Hanh", province: 25, district: 284
	},
	{
		id: 18466, name: "Xã Vĩnh Lộc", province: 25, district: 284
	},
	{
		id: 18469, name: "Xã Tiến Lộc", province: 25, district: 284
	},
	{
		id: 18472, name: "Xã Trung Lộc", province: 25, district: 284
	},
	{
		id: 18475, name: "Xã Xuân Lộc", province: 25, district: 284
	},
	{
		id: 18478, name: "Xã Thượng Lộc", province: 25, district: 284
	},
	{
		id: 18481, name: "Xã Quang Lộc", province: 25, district: 284
	},
	{
		id: 18484, name: "Xã Đồng Lộc", province: 25, district: 284
	},
	{
		id: 18487, name: "Xã Mỹ Lộc", province: 25, district: 284
	},
	{
		id: 18490, name: "Xã Sơn Lộc", province: 25, district: 284
	},
	{
		id: 18496, name: "Thị trấn Hương Khê", province: 25, district: 285
	},
	{
		id: 18499, name: "Xã Phương Mỹ", province: 25, district: 285
	},
	{
		id: 18502, name: "Xã Hà Linh", province: 25, district: 285
	},
	{
		id: 18505, name: "Xã Hương Thủy", province: 25, district: 285
	},
	{
		id: 18508, name: "Xã Hòa Hải", province: 25, district: 285
	},
	{
		id: 18511, name: "Xã Phương Điền", province: 25, district: 285
	},
	{
		id: 18514, name: "Xã Phúc Đồng", province: 25, district: 285
	},
	{
		id: 18517, name: "Xã Hương Giang", province: 25, district: 285
	},
	{
		id: 18520, name: "Xã Lộc Yên", province: 25, district: 285
	},
	{
		id: 18523, name: "Xã Hương Bình", province: 25, district: 285
	},
	{
		id: 18526, name: "Xã Hương Long", province: 25, district: 285
	},
	{
		id: 18529, name: "Xã Phú Gia", province: 25, district: 285
	},
	{
		id: 18532, name: "Xã Gia Phố", province: 25, district: 285
	},
	{
		id: 18535, name: "Xã Phú Phong", province: 25, district: 285
	},
	{
		id: 18538, name: "Xã Hương Đô", province: 25, district: 285
	},
	{
		id: 18541, name: "Xã Hương Vĩnh", province: 25, district: 285
	},
	{
		id: 18544, name: "Xã Hương Xuân", province: 25, district: 285
	},
	{
		id: 18547, name: "Xã Phúc Trạch", province: 25, district: 285
	},
	{
		id: 18550, name: "Xã Hương Trà", province: 25, district: 285
	},
	{
		id: 18553, name: "Xã Hương Trạch", province: 25, district: 285
	},
	{
		id: 18556, name: "Xã Hương Lâm", province: 25, district: 285
	},
	{
		id: 18559, name: "Xã Hương Liên", province: 25, district: 285
	},
	{
		id: 18562, name: "Thị trấn Thạch Hà", province: 25, district: 286
	},
	{
		id: 18565, name: "Xã Ngọc Sơn", province: 25, district: 286
	},
	{
		id: 18571, name: "Xã Thạch Hải", province: 25, district: 286
	},
	{
		id: 18574, name: "Xã Thạch Bàn", province: 25, district: 286
	},
	{
		id: 18586, name: "Xã Thạch Kênh", province: 25, district: 286
	},
	{
		id: 18589, name: "Xã Thạch Sơn", province: 25, district: 286
	},
	{
		id: 18592, name: "Xã Thạch Liên", province: 25, district: 286
	},
	{
		id: 18595, name: "Xã Thạch Đỉnh", province: 25, district: 286
	},
	{
		id: 18601, name: "Xã Phù Việt", province: 25, district: 286
	},
	{
		id: 18604, name: "Xã Thạch Khê", province: 25, district: 286
	},
	{
		id: 18607, name: "Xã Thạch Long", province: 25, district: 286
	},
	{
		id: 18610, name: "Xã Việt Xuyên", province: 25, district: 286
	},
	{
		id: 18613, name: "Xã Thạch Tiến", province: 25, district: 286
	},
	{
		id: 18616, name: "Xã Thạch Thanh", province: 25, district: 286
	},
	{
		id: 18619, name: "Xã Thạch Trị", province: 25, district: 286
	},
	{
		id: 18622, name: "Xã Thạch Lạc", province: 25, district: 286
	},
	{
		id: 18625, name: "Xã Thạch Ngọc", province: 25, district: 286
	},
	{
		id: 18628, name: "Xã Tượng Sơn", province: 25, district: 286
	},
	{
		id: 18631, name: "Xã Thạch Văn", province: 25, district: 286
	},
	{
		id: 18634, name: "Xã Thạch Vĩnh", province: 25, district: 286
	},
	{
		id: 18637, name: "Xã Thạch Thắng", province: 25, district: 286
	},
	{
		id: 18640, name: "Xã Thạch Lưu", province: 25, district: 286
	},
	{
		id: 18643, name: "Xã Thạch Đài", province: 25, district: 286
	},
	{
		id: 18646, name: "Xã Bắc Sơn", province: 25, district: 286
	},
	{
		id: 18649, name: "Xã Thạch Hội", province: 25, district: 286
	},
	{
		id: 18652, name: "Xã Thạch Tân", province: 25, district: 286
	},
	{
		id: 18655, name: "Xã Thạch Lâm", province: 25, district: 286
	},
	{
		id: 18658, name: "Xã Thạch Xuân", province: 25, district: 286
	},
	{
		id: 18661, name: "Xã Thạch Hương", province: 25, district: 286
	},
	{
		id: 18664, name: "Xã Nam Hương", province: 25, district: 286
	},
	{
		id: 18667, name: "Xã Thạch Điền", province: 25, district: 286
	},
	{
		id: 18673, name: "Thị trấn Cẩm Xuyên", province: 25, district: 287
	},
	{
		id: 18676, name: "Thị trấn Thiên Cầm", province: 25, district: 287
	},
	{
		id: 18679, name: "Xã Cẩm Hòa", province: 25, district: 287
	},
	{
		id: 18682, name: "Xã Cẩm Dương", province: 25, district: 287
	},
	{
		id: 18685, name: "Xã Cẩm Bình", province: 25, district: 287
	},
	{
		id: 18688, name: "Xã Cẩm Yên", province: 25, district: 287
	},
	{
		id: 18691, name: "Xã Cẩm Vĩnh", province: 25, district: 287
	},
	{
		id: 18694, name: "Xã Cẩm Thành", province: 25, district: 287
	},
	{
		id: 18697, name: "Xã Cẩm Quang", province: 25, district: 287
	},
	{
		id: 18700, name: "Xã Cẩm Nam", province: 25, district: 287
	},
	{
		id: 18703, name: "Xã Cẩm Huy", province: 25, district: 287
	},
	{
		id: 18706, name: "Xã Cẩm Thạch", province: 25, district: 287
	},
	{
		id: 18709, name: "Xã Cẩm Nhượng", province: 25, district: 287
	},
	{
		id: 18712, name: "Xã Cẩm Thăng", province: 25, district: 287
	},
	{
		id: 18715, name: "Xã Cẩm Duệ", province: 25, district: 287
	},
	{
		id: 18718, name: "Xã Cẩm Phúc", province: 25, district: 287
	},
	{
		id: 18721, name: "Xã Cẩm Lĩnh", province: 25, district: 287
	},
	{
		id: 18724, name: "Xã Cẩm Quan", province: 25, district: 287
	},
	{
		id: 18727, name: "Xã Cẩm Hà", province: 25, district: 287
	},
	{
		id: 18730, name: "Xã Cẩm Lộc", province: 25, district: 287
	},
	{
		id: 18733, name: "Xã Cẩm Hưng", province: 25, district: 287
	},
	{
		id: 18736, name: "Xã Cẩm Thịnh", province: 25, district: 287
	},
	{
		id: 18739, name: "Xã Cẩm Mỹ", province: 25, district: 287
	},
	{
		id: 18742, name: "Xã Cẩm Trung", province: 25, district: 287
	},
	{
		id: 18745, name: "Xã Cẩm Sơn", province: 25, district: 287
	},
	{
		id: 18748, name: "Xã Cẩm Lạc", province: 25, district: 287
	},
	{
		id: 18751, name: "Xã Cẩm Minh", province: 25, district: 287
	},
	{
		id: 18757, name: "Xã Kỳ Xuân", province: 25, district: 288
	},
	{
		id: 18760, name: "Xã Kỳ Bắc", province: 25, district: 288
	},
	{
		id: 18763, name: "Xã Kỳ Phú", province: 25, district: 288
	},
	{
		id: 18766, name: "Xã Kỳ Phong", province: 25, district: 288
	},
	{
		id: 18769, name: "Xã Kỳ Tiến", province: 25, district: 288
	},
	{
		id: 18772, name: "Xã Kỳ Giang", province: 25, district: 288
	},
	{
		id: 18775, name: "Xã Kỳ Đồng", province: 25, district: 288
	},
	{
		id: 18778, name: "Xã Kỳ Khang", province: 25, district: 288
	},
	{
		id: 18784, name: "Xã Kỳ Văn", province: 25, district: 288
	},
	{
		id: 18787, name: "Xã Kỳ Trung", province: 25, district: 288
	},
	{
		id: 18790, name: "Xã Kỳ Thọ", province: 25, district: 288
	},
	{
		id: 18793, name: "Xã Kỳ Tây", province: 25, district: 288
	},
	{
		id: 18799, name: "Xã Kỳ Thượng", province: 25, district: 288
	},
	{
		id: 18802, name: "Xã Kỳ Hải", province: 25, district: 288
	},
	{
		id: 18805, name: "Xã Kỳ Thư", province: 25, district: 288
	},
	{
		id: 18811, name: "Xã Kỳ Châu", province: 25, district: 288
	},
	{
		id: 18814, name: "Xã Kỳ Tân", province: 25, district: 288
	},
	{
		id: 18826, name: "Xã Kỳ Hợp", province: 25, district: 288
	},
	{
		id: 18838, name: "Xã Kỳ Lâm", province: 25, district: 288
	},
	{
		id: 18844, name: "Xã Kỳ Sơn", province: 25, district: 288
	},
	{
		id: 18850, name: "Xã Kỳ Lạc", province: 25, district: 288
	},
	{
		id: 18313, name: "Thị trấn Vũ Quang", province: 25, district: 289
	},
	{
		id: 18316, name: "Xã Ân Phú", province: 25, district: 289
	},
	{
		id: 18319, name: "Xã Đức Giang", province: 25, district: 289
	},
	{
		id: 18322, name: "Xã Đức Lĩnh", province: 25, district: 289
	},
	{
		id: 18325, name: "Xã Sơn Thọ", province: 25, district: 289
	},
	{
		id: 18328, name: "Xã Đức Hương", province: 25, district: 289
	},
	{
		id: 18331, name: "Xã Đức Bồng", province: 25, district: 289
	},
	{
		id: 18334, name: "Xã Đức Liên", province: 25, district: 289
	},
	{
		id: 18337, name: "Xã Hương Điền", province: 25, district: 289
	},
	{
		id: 18340, name: "Xã Hương Minh", province: 25, district: 289
	},
	{
		id: 18343, name: "Xã Hương Thọ", province: 25, district: 289
	},
	{
		id: 18346, name: "Xã Hương Quang", province: 25, district: 289
	},
	{
		id: 18409, name: "Xã Tân Lộc", province: 25, district: 729
	},
	{
		id: 18412, name: "Xã Hồng Lộc", province: 25, district: 729
	},
	{
		id: 18421, name: "Xã Thịnh Lộc", province: 25, district: 729
	},
	{
		id: 18430, name: "Xã An Lộc", province: 25, district: 729
	},
	{
		id: 18448, name: "Xã Bình Lộc", province: 25, district: 729
	},
	{
		id: 18457, name: "Xã Ích Hậu", province: 25, district: 729
	},
	{
		id: 18493, name: "Xã Phù Lưu", province: 25, district: 729
	},
	{
		id: 18568, name: "Xã Thạch Bằng", province: 25, district: 729
	},
	{
		id: 18577, name: "Xã Thạch Mỹ", province: 25, district: 729
	},
	{
		id: 18580, name: "Xã Thạch Kim", province: 25, district: 729
	},
	{
		id: 18583, name: "Xã Thạch Châu", province: 25, district: 729
	},
	{
		id: 18598, name: "Xã Hộ Độ", province: 25, district: 729
	},
	{
		id: 18670, name: "Xã Mai Phụ", province: 25, district: 729
	},
	{
		id: 18754, name: "Phường Sông Trí", province: 25, district: 755
	},
	{
		id: 18781, name: "Xã Kỳ Ninh", province: 25, district: 755
	},
	{
		id: 18796, name: "Xã Kỳ Lợi", province: 25, district: 755
	},
	{
		id: 18808, name: "Xã Kỳ Hà", province: 25, district: 755
	},
	{
		id: 18817, name: "Xã Kỳ Hưng", province: 25, district: 755
	},
	{
		id: 18820, name: "Phường Kỳ Trinh", province: 25, district: 755
	},
	{
		id: 18823, name: "Phường Kỳ Thịnh", province: 25, district: 755
	},
	{
		id: 18829, name: "Xã Kỳ Hoa", province: 25, district: 755
	},
	{
		id: 18832, name: "Phường Kỳ Phương", province: 25, district: 755
	},
	{
		id: 18835, name: "Phường Kỳ Long", province: 25, district: 755
	},
	{
		id: 18841, name: "Phường Kỳ Liên", province: 25, district: 755
	},
	{
		id: 18847, name: "Xã Kỳ Nam", province: 25, district: 755
	},
	{
		id: 10507, name: "Phường Cẩm Thượng", province: 26, district: 290
	},
	{
		id: 10510, name: "Phường Bình Hàn", province: 26, district: 290
	},
	{
		id: 10513, name: "Phường Ngọc Châu", province: 26, district: 290
	},
	{
		id: 10514, name: "Phường Nhị Châu", province: 26, district: 290
	},
	{
		id: 10516, name: "Phường Quang Trung", province: 26, district: 290
	},
	{
		id: 10519, name: "Phường Nguyễn Trãi", province: 26, district: 290
	},
	{
		id: 10522, name: "Phường Phạm Ngũ Lão", province: 26, district: 290
	},
	{
		id: 10525, name: "Phường Trần Hưng Đạo", province: 26, district: 290
	},
	{
		id: 10528, name: "Phường Trần Phú", province: 26, district: 290
	},
	{
		id: 10531, name: "Phường Thanh Bình", province: 26, district: 290
	},
	{
		id: 10532, name: "Phường Tân Bình", province: 26, district: 290
	},
	{
		id: 10534, name: "Phường Lê Thanh Nghị", province: 26, district: 290
	},
	{
		id: 10537, name: "Phường Hải Tân", province: 26, district: 290
	},
	{
		id: 10540, name: "Phường Tứ Minh", province: 26, district: 290
	},
	{
		id: 10543, name: "Phường Việt Hòa", province: 26, district: 290
	},
	{
		id: 10660, name: "Phường Ái Quốc", province: 26, district: 290
	},
	{
		id: 10663, name: "Xã An Châu", province: 26, district: 290
	},
	{
		id: 10669, name: "Xã Thượng Đạt", province: 26, district: 290
	},
	{
		id: 10672, name: "Xã Nam Đồng", province: 26, district: 290
	},
	{
		id: 11002, name: "Phường Thạch Khôi", province: 26, district: 290
	},
	{
		id: 11011, name: "Xã Tân Hưng", province: 26, district: 290
	},
	{
		id: 10546, name: "Phường Phả Lại", province: 26, district: 291
	},
	{
		id: 10549, name: "Phường Sao Đỏ", province: 26, district: 291
	},
	{
		id: 10552, name: "Phường Bến Tắm", province: 26, district: 291
	},
	{
		id: 10555, name: "Xã Hoàng Hoa Thám", province: 26, district: 291
	},
	{
		id: 10558, name: "Xã Bắc An", province: 26, district: 291
	},
	{
		id: 10561, name: "Xã Hưng Đạo", province: 26, district: 291
	},
	{
		id: 10564, name: "Xã Lê Lợi", province: 26, district: 291
	},
	{
		id: 10567, name: "Xã Hoàng Tiến", province: 26, district: 291
	},
	{
		id: 10570, name: "Phường Cộng Hòa", province: 26, district: 291
	},
	{
		id: 10573, name: "Phường Hoàng Tân", province: 26, district: 291
	},
	{
		id: 10576, name: "Xã Cổ Thành", province: 26, district: 291
	},
	{
		id: 10579, name: "Phường Văn An", province: 26, district: 291
	},
	{
		id: 10582, name: "Phường Chí Minh", province: 26, district: 291
	},
	{
		id: 10585, name: "Xã Văn Đức", province: 26, district: 291
	},
	{
		id: 10588, name: "Phường Thái Học", province: 26, district: 291
	},
	{
		id: 10591, name: "Xã Nhân Huệ", province: 26, district: 291
	},
	{
		id: 10594, name: "Xã An Lạc", province: 26, district: 291
	},
	{
		id: 10597, name: "Xã Kênh Giang", province: 26, district: 291
	},
	{
		id: 10600, name: "Xã Đồng Lạc", province: 26, district: 291
	},
	{
		id: 10603, name: "Xã Tân Dân", province: 26, district: 291
	},
	{
		id: 10606, name: "Thị trấn Nam Sách", province: 26, district: 292
	},
	{
		id: 10609, name: "Xã Nam Hưng", province: 26, district: 292
	},
	{
		id: 10612, name: "Xã Nam Tân", province: 26, district: 292
	},
	{
		id: 10615, name: "Xã Hợp Tiến", province: 26, district: 292
	},
	{
		id: 10618, name: "Xã Hiệp Cát", province: 26, district: 292
	},
	{
		id: 10621, name: "Xã Thanh Quang", province: 26, district: 292
	},
	{
		id: 10624, name: "Xã Quốc Tuấn", province: 26, district: 292
	},
	{
		id: 10627, name: "Xã Nam Chính", province: 26, district: 292
	},
	{
		id: 10630, name: "Xã An Bình", province: 26, district: 292
	},
	{
		id: 10633, name: "Xã Nam Trung", province: 26, district: 292
	},
	{
		id: 10636, name: "Xã An Sơn", province: 26, district: 292
	},
	{
		id: 10639, name: "Xã Cộng Hòa", province: 26, district: 292
	},
	{
		id: 10642, name: "Xã Thái Tân", province: 26, district: 292
	},
	{
		id: 10645, name: "Xã An Lâm", province: 26, district: 292
	},
	{
		id: 10648, name: "Xã Phú Điền", province: 26, district: 292
	},
	{
		id: 10651, name: "Xã Nam Hồng", province: 26, district: 292
	},
	{
		id: 10654, name: "Xã Hồng Phong", province: 26, district: 292
	},
	{
		id: 10657, name: "Xã Đồng Lạc", province: 26, district: 292
	},
	{
		id: 10666, name: "Xã Minh Tân", province: 26, district: 292
	},
	{
		id: 10675, name: "Thị trấn Kinh Môn", province: 26, district: 293
	},
	{
		id: 10678, name: "Xã Bạch Đằng", province: 26, district: 293
	},
	{
		id: 10681, name: "Xã Thất Hùng", province: 26, district: 293
	},
	{
		id: 10684, name: "Xã Lê Ninh", province: 26, district: 293
	},
	{
		id: 10687, name: "Xã Hoành Sơn", province: 26, district: 293
	},
	{
		id: 10690, name: "Xã Phúc Thành B", province: 26, district: 293
	},
	{
		id: 10693, name: "Xã Thái Sơn", province: 26, district: 293
	},
	{
		id: 10696, name: "Xã Duy Tân", province: 26, district: 293
	},
	{
		id: 10699, name: "Xã Tân Dân", province: 26, district: 293
	},
	{
		id: 10702, name: "Thị trấn Minh Tân", province: 26, district: 293
	},
	{
		id: 10705, name: "Xã Quang Trung", province: 26, district: 293
	},
	{
		id: 10708, name: "Xã Hiệp Hòa", province: 26, district: 293
	},
	{
		id: 10711, name: "Xã Phạm Mệnh", province: 26, district: 293
	},
	{
		id: 10714, name: "Thị trấn Phú Thứ", province: 26, district: 293
	},
	{
		id: 10717, name: "Xã Thăng Long", province: 26, district: 293
	},
	{
		id: 10720, name: "Xã Lạc Long", province: 26, district: 293
	},
	{
		id: 10723, name: "Xã An Sinh", province: 26, district: 293
	},
	{
		id: 10726, name: "Xã Hiệp Sơn", province: 26, district: 293
	},
	{
		id: 10729, name: "Xã Thượng Quận", province: 26, district: 293
	},
	{
		id: 10732, name: "Xã An Phụ", province: 26, district: 293
	},
	{
		id: 10735, name: "Xã Hiệp An", province: 26, district: 293
	},
	{
		id: 10738, name: "Xã Long Xuyên", province: 26, district: 293
	},
	{
		id: 10741, name: "Xã Thái Thịnh", province: 26, district: 293
	},
	{
		id: 10744, name: "Xã Hiến Thành", province: 26, district: 293
	},
	{
		id: 10747, name: "Xã Minh Hòa", province: 26, district: 293
	},
	{
		id: 10999, name: "Thị trấn Gia Lộc", province: 26, district: 294
	},
	{
		id: 11005, name: "Xã Liên Hồng", province: 26, district: 294
	},
	{
		id: 11008, name: "Xã Thống Nhất", province: 26, district: 294
	},
	{
		id: 11014, name: "Xã Trùng Khánh", province: 26, district: 294
	},
	{
		id: 11017, name: "Xã Gia Xuyên", province: 26, district: 294
	},
	{
		id: 11020, name: "Xã Yết Kiêu", province: 26, district: 294
	},
	{
		id: 11023, name: "Xã Gia Hòa", province: 26, district: 294
	},
	{
		id: 11026, name: "Xã Phương Hưng", province: 26, district: 294
	},
	{
		id: 11029, name: "Xã Gia Tân", province: 26, district: 294
	},
	{
		id: 11032, name: "Xã Tân Tiến", province: 26, district: 294
	},
	{
		id: 11035, name: "Xã Gia Khánh", province: 26, district: 294
	},
	{
		id: 11038, name: "Xã Gia Lương", province: 26, district: 294
	},
	{
		id: 11041, name: "Xã Lê Lợi", province: 26, district: 294
	},
	{
		id: 11044, name: "Xã Toàn Thắng", province: 26, district: 294
	},
	{
		id: 11047, name: "Xã Hoàng Diệu", province: 26, district: 294
	},
	{
		id: 11050, name: "Xã Hồng Hưng", province: 26, district: 294
	},
	{
		id: 11053, name: "Xã Phạm Trấn", province: 26, district: 294
	},
	{
		id: 11056, name: "Xã Đoàn Thượng", province: 26, district: 294
	},
	{
		id: 11059, name: "Xã Thống Kênh", province: 26, district: 294
	},
	{
		id: 11062, name: "Xã Quang Minh", province: 26, district: 294
	},
	{
		id: 11065, name: "Xã Đồng Quang", province: 26, district: 294
	},
	{
		id: 11068, name: "Xã Nhật Tân", province: 26, district: 294
	},
	{
		id: 11071, name: "Xã Đức Xương", province: 26, district: 294
	},
	{
		id: 11074, name: "Thị trấn Tứ Kỳ", province: 26, district: 295
	},
	{
		id: 11077, name: "Xã Ngọc Sơn", province: 26, district: 295
	},
	{
		id: 11080, name: "Xã Kỳ Sơn", province: 26, district: 295
	},
	{
		id: 11083, name: "Xã Đại Đồng", province: 26, district: 295
	},
	{
		id: 11086, name: "Xã Hưng Đạo", province: 26, district: 295
	},
	{
		id: 11089, name: "Xã Ngọc Kỳ", province: 26, district: 295
	},
	{
		id: 11092, name: "Xã Bình Lăng", province: 26, district: 295
	},
	{
		id: 11095, name: "Xã Tứ Xuyên", province: 26, district: 295
	},
	{
		id: 11098, name: "Xã Tái Sơn", province: 26, district: 295
	},
	{
		id: 11101, name: "Xã Quang Phục", province: 26, district: 295
	},
	{
		id: 11104, name: "Xã Đông Kỳ", province: 26, district: 295
	},
	{
		id: 11107, name: "Xã Tây Kỳ", province: 26, district: 295
	},
	{
		id: 11110, name: "Xã Dân Chủ", province: 26, district: 295
	},
	{
		id: 11113, name: "Xã Tân Kỳ", province: 26, district: 295
	},
	{
		id: 11116, name: "Xã Quang Khải", province: 26, district: 295
	},
	{
		id: 11119, name: "Xã Đại Hợp", province: 26, district: 295
	},
	{
		id: 11122, name: "Xã Quảng Nghiệp", province: 26, district: 295
	},
	{
		id: 11125, name: "Xã An Thanh", province: 26, district: 295
	},
	{
		id: 11128, name: "Xã Minh Đức", province: 26, district: 295
	},
	{
		id: 11131, name: "Xã Văn Tố", province: 26, district: 295
	},
	{
		id: 11134, name: "Xã Quang Trung", province: 26, district: 295
	},
	{
		id: 11137, name: "Xã Phượng Kỳ", province: 26, district: 295
	},
	{
		id: 11140, name: "Xã Cộng Lạc", province: 26, district: 295
	},
	{
		id: 11143, name: "Xã Tiên Động", province: 26, district: 295
	},
	{
		id: 11146, name: "Xã Nguyên Giáp", province: 26, district: 295
	},
	{
		id: 11149, name: "Xã Hà Kỳ", province: 26, district: 295
	},
	{
		id: 11152, name: "Xã Hà Thanh", province: 26, district: 295
	},
	{
		id: 11239, name: "Thị trấn Thanh Miện", province: 26, district: 296
	},
	{
		id: 11242, name: "Xã Thanh Tùng", province: 26, district: 296
	},
	{
		id: 11245, name: "Xã Phạm Kha", province: 26, district: 296
	},
	{
		id: 11248, name: "Xã Ngô Quyền", province: 26, district: 296
	},
	{
		id: 11251, name: "Xã Đoàn Tùng", province: 26, district: 296
	},
	{
		id: 11254, name: "Xã Hồng Quang", province: 26, district: 296
	},
	{
		id: 11257, name: "Xã Tân Trào", province: 26, district: 296
	},
	{
		id: 11260, name: "Xã Lam Sơn", province: 26, district: 296
	},
	{
		id: 11263, name: "Xã Đoàn Kết", province: 26, district: 296
	},
	{
		id: 11266, name: "Xã Lê Hồng", province: 26, district: 296
	},
	{
		id: 11269, name: "Xã Tứ Cường", province: 26, district: 296
	},
	{
		id: 11272, name: "Xã Hùng Sơn", province: 26, district: 296
	},
	{
		id: 11275, name: "Xã Ngũ Hùng", province: 26, district: 296
	},
	{
		id: 11278, name: "Xã Cao Thắng", province: 26, district: 296
	},
	{
		id: 11281, name: "Xã Chi Lăng Bắc", province: 26, district: 296
	},
	{
		id: 11284, name: "Xã Chi Lăng Nam", province: 26, district: 296
	},
	{
		id: 11287, name: "Xã Thanh Giang", province: 26, district: 296
	},
	{
		id: 11290, name: "Xã Diên Hồng", province: 26, district: 296
	},
	{
		id: 11293, name: "Xã Tiền Phong", province: 26, district: 296
	},
	{
		id: 11155, name: "Thị trấn Ninh Giang", province: 26, district: 297
	},
	{
		id: 11158, name: "Xã Quyết Thắng", province: 26, district: 297
	},
	{
		id: 11161, name: "Xã Ứng Hoè", province: 26, district: 297
	},
	{
		id: 11164, name: "Xã Nghĩa An", province: 26, district: 297
	},
	{
		id: 11167, name: "Xã Hồng Đức", province: 26, district: 297
	},
	{
		id: 11170, name: "Xã Ninh Hòa", province: 26, district: 297
	},
	{
		id: 11173, name: "Xã An Đức", province: 26, district: 297
	},
	{
		id: 11176, name: "Xã Vạn Phúc", province: 26, district: 297
	},
	{
		id: 11179, name: "Xã Tân Hương", province: 26, district: 297
	},
	{
		id: 11182, name: "Xã Ninh Thành", province: 26, district: 297
	},
	{
		id: 11185, name: "Xã Vĩnh Hòa", province: 26, district: 297
	},
	{
		id: 11188, name: "Xã Đông Xuyên", province: 26, district: 297
	},
	{
		id: 11191, name: "Xã Hoàng Hanh", province: 26, district: 297
	},
	{
		id: 11194, name: "Xã Quang Hưng", province: 26, district: 297
	},
	{
		id: 11197, name: "Xã Tân Phong", province: 26, district: 297
	},
	{
		id: 11200, name: "Xã Ninh Hải", province: 26, district: 297
	},
	{
		id: 11203, name: "Xã Đồng Tâm", province: 26, district: 297
	},
	{
		id: 11206, name: "Xã Tân Quang", province: 26, district: 297
	},
	{
		id: 11209, name: "Xã Kiến Quốc", province: 26, district: 297
	},
	{
		id: 11212, name: "Xã Hồng Thái", province: 26, district: 297
	},
	{
		id: 11215, name: "Xã Hồng Dụ", province: 26, district: 297
	},
	{
		id: 11218, name: "Xã Văn Hội", province: 26, district: 297
	},
	{
		id: 11221, name: "Xã Hưng Thái", province: 26, district: 297
	},
	{
		id: 11224, name: "Xã Hồng Phong", province: 26, district: 297
	},
	{
		id: 11227, name: "Xã Hiệp Lực", province: 26, district: 297
	},
	{
		id: 11230, name: "Xã Hồng Phúc", province: 26, district: 297
	},
	{
		id: 11233, name: "Xã Hưng Long", province: 26, district: 297
	},
	{
		id: 11236, name: "Xã Văn Giang", province: 26, district: 297
	},
	{
		id: 10888, name: "Thị trấn Cẩm Giàng", province: 26, district: 298
	},
	{
		id: 10891, name: "Thị trấn Lai Cách", province: 26, district: 298
	},
	{
		id: 10894, name: "Xã Cẩm Hưng", province: 26, district: 298
	},
	{
		id: 10897, name: "Xã Cẩm Hoàng", province: 26, district: 298
	},
	{
		id: 10900, name: "Xã Cẩm Văn", province: 26, district: 298
	},
	{
		id: 10903, name: "Xã Ngọc Liên", province: 26, district: 298
	},
	{
		id: 10906, name: "Xã Thạch Lỗi", province: 26, district: 298
	},
	{
		id: 10909, name: "Xã Cẩm Vũ", province: 26, district: 298
	},
	{
		id: 10912, name: "Xã Đức Chính", province: 26, district: 298
	},
	{
		id: 10915, name: "Xã Cẩm Sơn", province: 26, district: 298
	},
	{
		id: 10918, name: "Xã Cẩm Định", province: 26, district: 298
	},
	{
		id: 10921, name: "Xã Kim Giang", province: 26, district: 298
	},
	{
		id: 10924, name: "Xã Lương Điền", province: 26, district: 298
	},
	{
		id: 10927, name: "Xã Cao An", province: 26, district: 298
	},
	{
		id: 10930, name: "Xã Tân Trường", province: 26, district: 298
	},
	{
		id: 10933, name: "Xã Cẩm Phúc", province: 26, district: 298
	},
	{
		id: 10936, name: "Xã Cẩm Điền", province: 26, district: 298
	},
	{
		id: 10939, name: "Xã Cẩm Đông", province: 26, district: 298
	},
	{
		id: 10942, name: "Xã Cẩm Đoài", province: 26, district: 298
	},
	{
		id: 10813, name: "Thị trấn Thanh Hà", province: 26, district: 299
	},
	{
		id: 10816, name: "Xã Hồng Lạc", province: 26, district: 299
	},
	{
		id: 10819, name: "Xã Việt Hồng", province: 26, district: 299
	},
	{
		id: 10822, name: "Xã Quyết Thắng", province: 26, district: 299
	},
	{
		id: 10825, name: "Xã Tân Việt", province: 26, district: 299
	},
	{
		id: 10828, name: "Xã Cẩm Chế", province: 26, district: 299
	},
	{
		id: 10831, name: "Xã Thanh An", province: 26, district: 299
	},
	{
		id: 10834, name: "Xã Thanh Lang", province: 26, district: 299
	},
	{
		id: 10837, name: "Xã Tiền Tiến", province: 26, district: 299
	},
	{
		id: 10840, name: "Xã Tân An", province: 26, district: 299
	},
	{
		id: 10843, name: "Xã Liên Mạc", province: 26, district: 299
	},
	{
		id: 10846, name: "Xã Thanh Hải", province: 26, district: 299
	},
	{
		id: 10849, name: "Xã Thanh Khê", province: 26, district: 299
	},
	{
		id: 10852, name: "Xã Thanh Xá", province: 26, district: 299
	},
	{
		id: 10855, name: "Xã Thanh Xuân", province: 26, district: 299
	},
	{
		id: 10858, name: "Xã An Lương", province: 26, district: 299
	},
	{
		id: 10861, name: "Xã Thanh Thủy", province: 26, district: 299
	},
	{
		id: 10864, name: "Xã Phượng Hoàng", province: 26, district: 299
	},
	{
		id: 10867, name: "Xã Thanh Sơn", province: 26, district: 299
	},
	{
		id: 10870, name: "Xã Hợp Đức", province: 26, district: 299
	},
	{
		id: 10873, name: "Xã Trường Thành", province: 26, district: 299
	},
	{
		id: 10876, name: "Xã Thanh Bính", province: 26, district: 299
	},
	{
		id: 10879, name: "Xã Thanh Hồng", province: 26, district: 299
	},
	{
		id: 10882, name: "Xã Thanh Cường", province: 26, district: 299
	},
	{
		id: 10885, name: "Xã Vĩnh Lập", province: 26, district: 299
	},
	{
		id: 10750, name: "Thị trấn Phú Thái", province: 26, district: 300
	},
	{
		id: 10753, name: "Xã Lai Vu", province: 26, district: 300
	},
	{
		id: 10756, name: "Xã Cộng Hòa", province: 26, district: 300
	},
	{
		id: 10759, name: "Xã Thượng Vũ", province: 26, district: 300
	},
	{
		id: 10762, name: "Xã Cổ Dũng", province: 26, district: 300
	},
	{
		id: 10765, name: "Xã Việt Hưng", province: 26, district: 300
	},
	{
		id: 10768, name: "Xã Tuấn Hưng", province: 26, district: 300
	},
	{
		id: 10771, name: "Xã Kim Xuyên", province: 26, district: 300
	},
	{
		id: 10774, name: "Xã Phúc Thành A", province: 26, district: 300
	},
	{
		id: 10777, name: "Xã Ngũ Phúc", province: 26, district: 300
	},
	{
		id: 10780, name: "Xã Kim Anh", province: 26, district: 300
	},
	{
		id: 10783, name: "Xã Kim Lương", province: 26, district: 300
	},
	{
		id: 10786, name: "Xã Kim Tân", province: 26, district: 300
	},
	{
		id: 10789, name: "Xã Kim Khê", province: 26, district: 300
	},
	{
		id: 10792, name: "Xã Kim Đính", province: 26, district: 300
	},
	{
		id: 10795, name: "Xã Cẩm La", province: 26, district: 300
	},
	{
		id: 10798, name: "Xã Bình Dân", province: 26, district: 300
	},
	{
		id: 10801, name: "Xã Tam Kỳ", province: 26, district: 300
	},
	{
		id: 10804, name: "Xã Đồng Gia", province: 26, district: 300
	},
	{
		id: 10807, name: "Xã Liên Hòa", province: 26, district: 300
	},
	{
		id: 10810, name: "Xã Đại Đức", province: 26, district: 300
	},
	{
		id: 10945, name: "Thị trấn Kẻ Sặt", province: 26, district: 301
	},
	{
		id: 10948, name: "Xã Hưng Thịnh", province: 26, district: 301
	},
	{
		id: 10951, name: "Xã Vĩnh Tuy", province: 26, district: 301
	},
	{
		id: 10954, name: "Xã Hùng Thắng", province: 26, district: 301
	},
	{
		id: 10957, name: "Xã Tráng Liệt", province: 26, district: 301
	},
	{
		id: 10960, name: "Xã Vĩnh Hồng", province: 26, district: 301
	},
	{
		id: 10963, name: "Xã Long Xuyên", province: 26, district: 301
	},
	{
		id: 10966, name: "Xã Tân Việt", province: 26, district: 301
	},
	{
		id: 10969, name: "Xã Thúc Kháng", province: 26, district: 301
	},
	{
		id: 10972, name: "Xã Tân Hồng", province: 26, district: 301
	},
	{
		id: 10975, name: "Xã Bình Minh", province: 26, district: 301
	},
	{
		id: 10978, name: "Xã Hồng Khê", province: 26, district: 301
	},
	{
		id: 10981, name: "Xã Thái Học", province: 26, district: 301
	},
	{
		id: 10984, name: "Xã Cổ Bi", province: 26, district: 301
	},
	{
		id: 10987, name: "Xã Nhân Quyền", province: 26, district: 301
	},
	{
		id: 10990, name: "Xã Thái Dương", province: 26, district: 301
	},
	{
		id: 10993, name: "Xã Thái Hòa", province: 26, district: 301
	},
	{
		id: 10996, name: "Xã Bình Xuyên", province: 26, district: 301
	},
	{
		id: 11296, name: "Phường Quán Toan", province: 27, district: 52
	},
	{
		id: 11299, name: "Phường Hùng Vương", province: 27, district: 52
	},
	{
		id: 11302, name: "Phường Sở Dầu", province: 27, district: 52
	},
	{
		id: 11305, name: "Phường Thượng Lý", province: 27, district: 52
	},
	{
		id: 11308, name: "Phường Hạ Lý", province: 27, district: 52
	},
	{
		id: 11311, name: "Phường Minh Khai", province: 27, district: 52
	},
	{
		id: 11314, name: "Phường Trại Chuối", province: 27, district: 52
	},
	{
		id: 11317, name: "Phường Quang Trung", province: 27, district: 52
	},
	{
		id: 11320, name: "Phường Hoàng Văn Thụ", province: 27, district: 52
	},
	{
		id: 11323, name: "Phường Phan Bội Châu", province: 27, district: 52
	},
	{
		id: 11326, name: "Phường Phạm Hồng Thái", province: 27, district: 52
	},
	{
		id: 11368, name: "Phường Cát Dài", province: 27, district: 53
	},
	{
		id: 11371, name: "Phường An Biên", province: 27, district: 53
	},
	{
		id: 11374, name: "Phường Lam Sơn", province: 27, district: 53
	},
	{
		id: 11377, name: "Phường An Dương", province: 27, district: 53
	},
	{
		id: 11380, name: "Phường Trần Nguyên Hãn", province: 27, district: 53
	},
	{
		id: 11383, name: "Phường Hồ Nam", province: 27, district: 53
	},
	{
		id: 11386, name: "Phường Trại Cau", province: 27, district: 53
	},
	{
		id: 11389, name: "Phường Dư Hàng", province: 27, district: 53
	},
	{
		id: 11392, name: "Phường Hàng Kênh", province: 27, district: 53
	},
	{
		id: 11395, name: "Phường Đông Hải", province: 27, district: 53
	},
	{
		id: 11398, name: "Phường Niệm Nghĩa", province: 27, district: 53
	},
	{
		id: 11401, name: "Phường Nghĩa Xá", province: 27, district: 53
	},
	{
		id: 11404, name: "Phường Dư Hàng Kênh", province: 27, district: 53
	},
	{
		id: 11405, name: "Phường Kênh Dương", province: 27, district: 53
	},
	{
		id: 11407, name: "Phường Vĩnh Niệm", province: 27, district: 53
	},
	{
		id: 11329, name: "Phường Máy Chai", province: 27, district: 54
	},
	{
		id: 11332, name: "Phường Máy Tơ", province: 27, district: 54
	},
	{
		id: 11335, name: "Phường Vạn Mỹ", province: 27, district: 54
	},
	{
		id: 11338, name: "Phường Cầu Tre", province: 27, district: 54
	},
	{
		id: 11341, name: "Phường Lạc Viên", province: 27, district: 54
	},
	{
		id: 11344, name: "Phường Lương Khánh Thiện", province: 27, district: 54
	},
	{
		id: 11347, name: "Phường Gia Viên", province: 27, district: 54
	},
	{
		id: 11350, name: "Phường Đông Khê", province: 27, district: 54
	},
	{
		id: 11353, name: "Phường Cầu Đất", province: 27, district: 54
	},
	{
		id: 11356, name: "Phường Lê Lợi", province: 27, district: 54
	},
	{
		id: 11359, name: "Phường Đằng Giang", province: 27, district: 54
	},
	{
		id: 11362, name: "Phường Lạch Tray", province: 27, district: 54
	},
	{
		id: 11365, name: "Phường Đổng Quốc Bình", province: 27, district: 54
	},
	{
		id: 11428, name: "Phường Quán Trữ", province: 27, district: 55
	},
	{
		id: 11429, name: "Phường Lãm Hà", province: 27, district: 55
	},
	{
		id: 11431, name: "Phường Đồng Hoà", province: 27, district: 55
	},
	{
		id: 11434, name: "Phường Bắc Sơn", province: 27, district: 55
	},
	{
		id: 11437, name: "Phường Nam Sơn", province: 27, district: 55
	},
	{
		id: 11440, name: "Phường Ngọc Sơn", province: 27, district: 55
	},
	{
		id: 11443, name: "Phường Trần Thành Ngọ", province: 27, district: 55
	},
	{
		id: 11446, name: "Phường Văn Đẩu", province: 27, district: 55
	},
	{
		id: 11449, name: "Phường Phù Liễn", province: 27, district: 55
	},
	{
		id: 11452, name: "Phường Tràng Minh", province: 27, district: 55
	},
	{
		id: 11410, name: "Phường Đông Hải 1", province: 27, district: 56
	},
	{
		id: 11411, name: "Phường Đông Hải 2", province: 27, district: 56
	},
	{
		id: 11413, name: "Phường Đằng Lâm", province: 27, district: 56
	},
	{
		id: 11414, name: "Phường Thành Tô", province: 27, district: 56
	},
	{
		id: 11416, name: "Phường Đằng Hải", province: 27, district: 56
	},
	{
		id: 11419, name: "Phường Nam Hải", province: 27, district: 56
	},
	{
		id: 11422, name: "Phường Cát Bi", province: 27, district: 56
	},
	{
		id: 11425, name: "Phường Tràng Cát", province: 27, district: 56
	},
	{
		id: 11455, name: "Phường Ngọc Xuyên", province: 27, district: 57
	},
	{
		id: 11458, name: "Phường Ngọc Hải", province: 27, district: 57
	},
	{
		id: 11461, name: "Phường Vạn Hương", province: 27, district: 57
	},
	{
		id: 11464, name: "Phường Vạn Sơn", province: 27, district: 57
	},
	{
		id: 11465, name: "Phường Minh Đức", province: 27, district: 57
	},
	{
		id: 11467, name: "Phường Bàng La", province: 27, district: 57
	},
	{
		id: 11737, name: "Phường Hợp Đức", province: 27, district: 57
	},
	{
		id: 11629, name: "Thị trấn An Lão", province: 27, district: 58
	},
	{
		id: 11632, name: "Xã Bát Trang", province: 27, district: 58
	},
	{
		id: 11635, name: "Xã Trường Thọ", province: 27, district: 58
	},
	{
		id: 11638, name: "Xã Trường Thành", province: 27, district: 58
	},
	{
		id: 11641, name: "Xã An Tiến", province: 27, district: 58
	},
	{
		id: 11644, name: "Xã Quang Hưng", province: 27, district: 58
	},
	{
		id: 11647, name: "Xã Quang Trung", province: 27, district: 58
	},
	{
		id: 11650, name: "Xã Quốc Tuấn", province: 27, district: 58
	},
	{
		id: 11653, name: "Xã An Thắng", province: 27, district: 58
	},
	{
		id: 11656, name: "Thị trấn Trường Sơn", province: 27, district: 58
	},
	{
		id: 11659, name: "Xã Tân Dân", province: 27, district: 58
	},
	{
		id: 11662, name: "Xã Thái Sơn", province: 27, district: 58
	},
	{
		id: 11665, name: "Xã Tân Viên", province: 27, district: 58
	},
	{
		id: 11668, name: "Xã Mỹ Đức", province: 27, district: 58
	},
	{
		id: 11671, name: "Xã Chiến Thắng", province: 27, district: 58
	},
	{
		id: 11674, name: "Xã An Thọ", province: 27, district: 58
	},
	{
		id: 11677, name: "Xã An Thái", province: 27, district: 58
	},
	{
		id: 11680, name: "Thị trấn Núi Đối", province: 27, district: 59
	},
	{
		id: 11695, name: "Xã Đông Phương", province: 27, district: 59
	},
	{
		id: 11698, name: "Xã Thuận Thiên", province: 27, district: 59
	},
	{
		id: 11701, name: "Xã Hữu Bằng", province: 27, district: 59
	},
	{
		id: 11704, name: "Xã Đại Đồng", province: 27, district: 59
	},
	{
		id: 11710, name: "Xã Ngũ Phúc", province: 27, district: 59
	},
	{
		id: 11713, name: "Xã Kiến Quốc", province: 27, district: 59
	},
	{
		id: 11716, name: "Xã Du Lễ", province: 27, district: 59
	},
	{
		id: 11719, name: "Xã Thuỵ Hương", province: 27, district: 59
	},
	{
		id: 11722, name: "Xã Thanh Sơn", province: 27, district: 59
	},
	{
		id: 11725, name: "Xã Minh Tân", province: 27, district: 59
	},
	{
		id: 11728, name: "Xã Đại Hà", province: 27, district: 59
	},
	{
		id: 11731, name: "Xã Ngũ Đoan", province: 27, district: 59
	},
	{
		id: 11734, name: "Xã Tân Phong", province: 27, district: 59
	},
	{
		id: 11743, name: "Xã Tân Trào", province: 27, district: 59
	},
	{
		id: 11746, name: "Xã Đoàn Xá", province: 27, district: 59
	},
	{
		id: 11749, name: "Xã Tú Sơn", province: 27, district: 59
	},
	{
		id: 11752, name: "Xã Đại Hợp", province: 27, district: 59
	},
	{
		id: 11470, name: "Thị trấn Núi Đèo", province: 27, district: 60
	},
	{
		id: 11473, name: "Thị trấn Minh Đức", province: 27, district: 60
	},
	{
		id: 11476, name: "Xã Lại Xuân", province: 27, district: 60
	},
	{
		id: 11479, name: "Xã An Sơn", province: 27, district: 60
	},
	{
		id: 11482, name: "Xã Kỳ Sơn", province: 27, district: 60
	},
	{
		id: 11485, name: "Xã Liên Khê", province: 27, district: 60
	},
	{
		id: 11488, name: "Xã Lưu Kiếm", province: 27, district: 60
	},
	{
		id: 11491, name: "Xã Lưu Kỳ", province: 27, district: 60
	},
	{
		id: 11494, name: "Xã Gia Minh", province: 27, district: 60
	},
	{
		id: 11497, name: "Xã Gia Đức", province: 27, district: 60
	},
	{
		id: 11500, name: "Xã Minh Tân", province: 27, district: 60
	},
	{
		id: 11503, name: "Xã Phù Ninh", province: 27, district: 60
	},
	{
		id: 11506, name: "Xã Quảng Thanh", province: 27, district: 60
	},
	{
		id: 11509, name: "Xã Chính Mỹ", province: 27, district: 60
	},
	{
		id: 11512, name: "Xã Kênh Giang", province: 27, district: 60
	},
	{
		id: 11515, name: "Xã Hợp Thành", province: 27, district: 60
	},
	{
		id: 11518, name: "Xã Cao Nhân", province: 27, district: 60
	},
	{
		id: 11521, name: "Xã Mỹ Đồng", province: 27, district: 60
	},
	{
		id: 11524, name: "Xã Đông Sơn", province: 27, district: 60
	},
	{
		id: 11527, name: "Xã Hoà Bình", province: 27, district: 60
	},
	{
		id: 11530, name: "Xã Trung Hà", province: 27, district: 60
	},
	{
		id: 11533, name: "Xã An Lư", province: 27, district: 60
	},
	{
		id: 11536, name: "Xã Thuỷ Triều", province: 27, district: 60
	},
	{
		id: 11539, name: "Xã Ngũ Lão", province: 27, district: 60
	},
	{
		id: 11542, name: "Xã Phục Lễ", province: 27, district: 60
	},
	{
		id: 11545, name: "Xã Tam Hưng", province: 27, district: 60
	},
	{
		id: 11548, name: "Xã Phả Lễ", province: 27, district: 60
	},
	{
		id: 11551, name: "Xã Lập Lễ", province: 27, district: 60
	},
	{
		id: 11554, name: "Xã Kiền Bái", province: 27, district: 60
	},
	{
		id: 11557, name: "Xã Thiên Hương", province: 27, district: 60
	},
	{
		id: 11560, name: "Xã Thuỷ Sơn", province: 27, district: 60
	},
	{
		id: 11563, name: "Xã Thuỷ Đường", province: 27, district: 60
	},
	{
		id: 11566, name: "Xã Hoàng Động", province: 27, district: 60
	},
	{
		id: 11569, name: "Xã Lâm Động", province: 27, district: 60
	},
	{
		id: 11572, name: "Xã Hoa Động", province: 27, district: 60
	},
	{
		id: 11575, name: "Xã Tân Dương", province: 27, district: 60
	},
	{
		id: 11578, name: "Xã Dương Quan", province: 27, district: 60
	},
	{
		id: 11581, name: "Thị trấn An Dương", province: 27, district: 61
	},
	{
		id: 11584, name: "Xã Lê Thiện", province: 27, district: 61
	},
	{
		id: 11587, name: "Xã Đại Bản", province: 27, district: 61
	},
	{
		id: 11590, name: "Xã An Hoà", province: 27, district: 61
	},
	{
		id: 11593, name: "Xã Hồng Phong", province: 27, district: 61
	},
	{
		id: 11596, name: "Xã Tân Tiến", province: 27, district: 61
	},
	{
		id: 11599, name: "Xã An Hưng", province: 27, district: 61
	},
	{
		id: 11602, name: "Xã An Hồng", province: 27, district: 61
	},
	{
		id: 11605, name: "Xã Bắc Sơn", province: 27, district: 61
	},
	{
		id: 11608, name: "Xã Nam Sơn", province: 27, district: 61
	},
	{
		id: 11611, name: "Xã Lê Lợi", province: 27, district: 61
	},
	{
		id: 11614, name: "Xã Đặng Cương", province: 27, district: 61
	},
	{
		id: 11617, name: "Xã Đồng Thái", province: 27, district: 61
	},
	{
		id: 11620, name: "Xã Quốc Tuấn", province: 27, district: 61
	},
	{
		id: 11623, name: "Xã An Đồng", province: 27, district: 61
	},
	{
		id: 11626, name: "Xã Hồng Thái", province: 27, district: 61
	},
	{
		id: 11755, name: "Thị trấn Tiên Lãng", province: 27, district: 62
	},
	{
		id: 11758, name: "Xã Đại Thắng", province: 27, district: 62
	},
	{
		id: 11761, name: "Xã Tiên Cường", province: 27, district: 62
	},
	{
		id: 11764, name: "Xã Tự Cường", province: 27, district: 62
	},
	{
		id: 11767, name: "Xã Tiên Tiến", province: 27, district: 62
	},
	{
		id: 11770, name: "Xã Quyết Tiến", province: 27, district: 62
	},
	{
		id: 11773, name: "Xã Khởi Nghĩa", province: 27, district: 62
	},
	{
		id: 11776, name: "Xã Tiên Thanh", province: 27, district: 62
	},
	{
		id: 11779, name: "Xã Cấp Tiến", province: 27, district: 62
	},
	{
		id: 11782, name: "Xã Kiến Thiết", province: 27, district: 62
	},
	{
		id: 11785, name: "Xã Đoàn Lập", province: 27, district: 62
	},
	{
		id: 11788, name: "Xã Bạch Đằng", province: 27, district: 62
	},
	{
		id: 11791, name: "Xã Quang Phục", province: 27, district: 62
	},
	{
		id: 11794, name: "Xã Toàn Thắng", province: 27, district: 62
	},
	{
		id: 11797, name: "Xã Tiên Thắng", province: 27, district: 62
	},
	{
		id: 11800, name: "Xã Tiên Minh", province: 27, district: 62
	},
	{
		id: 11803, name: "Xã Bắc Hưng", province: 27, district: 62
	},
	{
		id: 11806, name: "Xã Nam Hưng", province: 27, district: 62
	},
	{
		id: 11809, name: "Xã Hùng Thắng", province: 27, district: 62
	},
	{
		id: 11812, name: "Xã Tây Hưng", province: 27, district: 62
	},
	{
		id: 11815, name: "Xã Đông Hưng", province: 27, district: 62
	},
	{
		id: 11818, name: "Xã Tiên Hưng", province: 27, district: 62
	},
	{
		id: 11821, name: "Xã Vinh Quang", province: 27, district: 62
	},
	{
		id: 11824, name: "Thị trấn Vĩnh Bảo", province: 27, district: 63
	},
	{
		id: 11827, name: "Xã Dũng Tiến", province: 27, district: 63
	},
	{
		id: 11830, name: "Xã Giang Biên", province: 27, district: 63
	},
	{
		id: 11833, name: "Xã Thắng Thuỷ", province: 27, district: 63
	},
	{
		id: 11836, name: "Xã Trung Lập", province: 27, district: 63
	},
	{
		id: 11839, name: "Xã Việt Tiến", province: 27, district: 63
	},
	{
		id: 11842, name: "Xã Vĩnh An", province: 27, district: 63
	},
	{
		id: 11845, name: "Xã Vĩnh Long", province: 27, district: 63
	},
	{
		id: 11848, name: "Xã Hiệp Hoà", province: 27, district: 63
	},
	{
		id: 11851, name: "Xã Hùng Tiến", province: 27, district: 63
	},
	{
		id: 11854, name: "Xã An Hoà", province: 27, district: 63
	},
	{
		id: 11857, name: "Xã Tân Hưng", province: 27, district: 63
	},
	{
		id: 11860, name: "Xã Tân Liên", province: 27, district: 63
	},
	{
		id: 11863, name: "Xã Nhân Hoà", province: 27, district: 63
	},
	{
		id: 11866, name: "Xã Tam Đa", province: 27, district: 63
	},
	{
		id: 11869, name: "Xã Hưng Nhân", province: 27, district: 63
	},
	{
		id: 11872, name: "Xã Vinh Quang", province: 27, district: 63
	},
	{
		id: 11875, name: "Xã Đồng Minh", province: 27, district: 63
	},
	{
		id: 11878, name: "Xã Thanh Lương", province: 27, district: 63
	},
	{
		id: 11881, name: "Xã Liên Am", province: 27, district: 63
	},
	{
		id: 11884, name: "Xã Lý Học", province: 27, district: 63
	},
	{
		id: 11887, name: "Xã Tam Cường", province: 27, district: 63
	},
	{
		id: 11890, name: "Xã Hoà Bình", province: 27, district: 63
	},
	{
		id: 11893, name: "Xã Tiền Phong", province: 27, district: 63
	},
	{
		id: 11896, name: "Xã Vĩnh Phong", province: 27, district: 63
	},
	{
		id: 11899, name: "Xã Cộng Hiền", province: 27, district: 63
	},
	{
		id: 11902, name: "Xã Cao Minh", province: 27, district: 63
	},
	{
		id: 11905, name: "Xã Cổ Am", province: 27, district: 63
	},
	{
		id: 11908, name: "Xã Vĩnh Tiến", province: 27, district: 63
	},
	{
		id: 11911, name: "Xã Trấn Dương", province: 27, district: 63
	},
	{
		id: 11914, name: "Thị trấn Cát Bà", province: 27, district: 64
	},
	{
		id: 11917, name: "Thị trấn Cát Hải", province: 27, district: 64
	},
	{
		id: 11920, name: "Xã Nghĩa Lộ", province: 27, district: 64
	},
	{
		id: 11923, name: "Xã Đồng Bài", province: 27, district: 64
	},
	{
		id: 11926, name: "Xã Hoàng Châu", province: 27, district: 64
	},
	{
		id: 11929, name: "Xã Văn Phong", province: 27, district: 64
	},
	{
		id: 11932, name: "Xã Phù Long", province: 27, district: 64
	},
	{
		id: 11935, name: "Xã Gia Luận", province: 27, district: 64
	},
	{
		id: 11938, name: "Xã Hiền Hào", province: 27, district: 64
	},
	{
		id: 11941, name: "Xã Trân Châu", province: 27, district: 64
	},
	{
		id: 11944, name: "Xã Việt Hải", province: 27, district: 64
	},
	{
		id: 11947, name: "Xã Xuân Đám", province: 27, district: 64
	},
	{
		id: 50000, name: "Thị Trấn Bạch Long Vỹ", province: 27, district: 65
	},
	{
		id: 11683, name: "Phường Đa Phúc", province: 27, district: 730
	},
	{
		id: 11686, name: "Phường Hưng Đạo", province: 27, district: 730
	},
	{
		id: 11689, name: "Phường Anh Dũng", province: 27, district: 730
	},
	{
		id: 11692, name: "Phường Hải Thành", province: 27, district: 730
	},
	{
		id: 11707, name: "Phường Hoà Nghĩa", province: 27, district: 730
	},
	{
		id: 11740, name: "Phường Tân Thành", province: 27, district: 730
	},
	{
		id: 4789, name: "Phường Thái Bình", province: 28, district: 313
	},
	{
		id: 4792, name: "Phường Tân Hòa", province: 28, district: 313
	},
	{
		id: 4795, name: "Phường Thịnh Lang", province: 28, district: 313
	},
	{
		id: 4798, name: "Phường Hữu Nghị", province: 28, district: 313
	},
	{
		id: 4801, name: "Phường Tân Thịnh", province: 28, district: 313
	},
	{
		id: 4804, name: "Phường Đồng Tiến", province: 28, district: 313
	},
	{
		id: 4807, name: "Phường Phương Lâm", province: 28, district: 313
	},
	{
		id: 4810, name: "Phường Chăm Mát", province: 28, district: 313
	},
	{
		id: 4813, name: "Xã Yên Mông", province: 28, district: 313
	},
	{
		id: 4816, name: "Xã Sủ Ngòi", province: 28, district: 313
	},
	{
		id: 4819, name: "Xã Dân Chủ", province: 28, district: 313
	},
	{
		id: 4822, name: "Xã Thái Thịnh", province: 28, district: 313
	},
	{
		id: 4825, name: "Xã Hoà Bình", province: 28, district: 313
	},
	{
		id: 4828, name: "Xã Thống Nhất", province: 28, district: 313
	},
	{
		id: 4918, name: "Xã Trung Minh", province: 28, district: 313
	},
	{
		id: 4831, name: "Thị trấn Đà Bắc", province: 28, district: 314
	},
	{
		id: 4834, name: "Xã Đồng Nghê", province: 28, district: 314
	},
	{
		id: 4837, name: "Xã Suối Nánh", province: 28, district: 314
	},
	{
		id: 4840, name: "Xã Giáp Đắt", province: 28, district: 314
	},
	{
		id: 4843, name: "Xã Mường Tuổng", province: 28, district: 314
	},
	{
		id: 4846, name: "Xã Mường Chiềng", province: 28, district: 314
	},
	{
		id: 4849, name: "Xã Tân Pheo", province: 28, district: 314
	},
	{
		id: 4852, name: "Xã Đồng Chum", province: 28, district: 314
	},
	{
		id: 4855, name: "Xã Tân Minh", province: 28, district: 314
	},
	{
		id: 4858, name: "Xã Đoàn Kết", province: 28, district: 314
	},
	{
		id: 4861, name: "Xã Đồng Ruộng", province: 28, district: 314
	},
	{
		id: 4864, name: "Xã Hào Lý", province: 28, district: 314
	},
	{
		id: 4867, name: "Xã Tu Lý", province: 28, district: 314
	},
	{
		id: 4870, name: "Xã Trung Thành", province: 28, district: 314
	},
	{
		id: 4873, name: "Xã Yên Hòa", province: 28, district: 314
	},
	{
		id: 4876, name: "Xã Cao Sơn", province: 28, district: 314
	},
	{
		id: 4879, name: "Xã Toàn Sơn", province: 28, district: 314
	},
	{
		id: 4885, name: "Xã Hiền Lương", province: 28, district: 314
	},
	{
		id: 4888, name: "Xã Tiền Phong", province: 28, district: 314
	},
	{
		id: 4891, name: "Xã Vầy Nưa", province: 28, district: 314
	},
	{
		id: 4882, name: "Xã Tân Dân", province: 28, district: 315
	},
	{
		id: 5200, name: "Thị trấn Mai Châu", province: 28, district: 315
	},
	{
		id: 5203, name: "Xã Tân Mai", province: 28, district: 315
	},
	{
		id: 5206, name: "Xã Phúc Sạn", province: 28, district: 315
	},
	{
		id: 5209, name: "Xã Pà Cò", province: 28, district: 315
	},
	{
		id: 5212, name: "Xã Hang Kia", province: 28, district: 315
	},
	{
		id: 5215, name: "Xã Ba Khan", province: 28, district: 315
	},
	{
		id: 5218, name: "Xã Tân Sơn", province: 28, district: 315
	},
	{
		id: 5221, name: "Xã Đồng Bảng", province: 28, district: 315
	},
	{
		id: 5224, name: "Xã Cun Pheo", province: 28, district: 315
	},
	{
		id: 5227, name: "Xã Bao La", province: 28, district: 315
	},
	{
		id: 5230, name: "Xã Piềng Vế", province: 28, district: 315
	},
	{
		id: 5233, name: "Xã Tòng Đậu", province: 28, district: 315
	},
	{
		id: 5236, name: "Xã Nà Mèo", province: 28, district: 315
	},
	{
		id: 5239, name: "Xã Thung Khe", province: 28, district: 315
	},
	{
		id: 5242, name: "Xã Nà Phòn", province: 28, district: 315
	},
	{
		id: 5245, name: "Xã Săm Khóe", province: 28, district: 315
	},
	{
		id: 5248, name: "Xã Chiềng Châu", province: 28, district: 315
	},
	{
		id: 5251, name: "Xã Mai Hạ", province: 28, district: 315
	},
	{
		id: 5254, name: "Xã Nong Luông", province: 28, district: 315
	},
	{
		id: 5257, name: "Xã Mai Hịch", province: 28, district: 315
	},
	{
		id: 5260, name: "Xã Pù Pin", province: 28, district: 315
	},
	{
		id: 5263, name: "Xã Vạn Mai", province: 28, district: 315
	},
	{
		id: 5128, name: "Thị trấn Mường Khến", province: 28, district: 316
	},
	{
		id: 5131, name: "Xã Ngòi Hoa", province: 28, district: 316
	},
	{
		id: 5134, name: "Xã Trung Hòa", province: 28, district: 316
	},
	{
		id: 5137, name: "Xã Phú Vinh", province: 28, district: 316
	},
	{
		id: 5140, name: "Xã Phú Cường", province: 28, district: 316
	},
	{
		id: 5143, name: "Xã Mỹ Hòa", province: 28, district: 316
	},
	{
		id: 5146, name: "Xã Quy Hậu", province: 28, district: 316
	},
	{
		id: 5149, name: "Xã Phong Phú", province: 28, district: 316
	},
	{
		id: 5152, name: "Xã Quyết Chiến", province: 28, district: 316
	},
	{
		id: 5155, name: "Xã Mãn Đức", province: 28, district: 316
	},
	{
		id: 5158, name: "Xã Địch Giáo", province: 28, district: 316
	},
	{
		id: 5161, name: "Xã Tuân Lộ", province: 28, district: 316
	},
	{
		id: 5164, name: "Xã Tử Nê", province: 28, district: 316
	},
	{
		id: 5167, name: "Xã Thanh Hối", province: 28, district: 316
	},
	{
		id: 5170, name: "Xã Ngọc Mỹ", province: 28, district: 316
	},
	{
		id: 5173, name: "Xã Đông Lai", province: 28, district: 316
	},
	{
		id: 5176, name: "Xã Lũng Vân", province: 28, district: 316
	},
	{
		id: 5179, name: "Xã Bắc Sơn", province: 28, district: 316
	},
	{
		id: 5182, name: "Xã Quy Mỹ", province: 28, district: 316
	},
	{
		id: 5185, name: "Xã Do Nhân", province: 28, district: 316
	},
	{
		id: 5188, name: "Xã Nam Sơn", province: 28, district: 316
	},
	{
		id: 5191, name: "Xã Lỗ Sơn", province: 28, district: 316
	},
	{
		id: 5194, name: "Xã Ngổ Luông", province: 28, district: 316
	},
	{
		id: 5197, name: "Xã Gia Mô", province: 28, district: 316
	},
	{
		id: 5266, name: "Thị trấn Vụ Bản", province: 28, district: 317
	},
	{
		id: 5269, name: "Xã Quý Hòa", province: 28, district: 317
	},
	{
		id: 5272, name: "Xã Miền Đồi", province: 28, district: 317
	},
	{
		id: 5275, name: "Xã Mỹ Thành", province: 28, district: 317
	},
	{
		id: 5278, name: "Xã Tuân Đạo", province: 28, district: 317
	},
	{
		id: 5281, name: "Xã Văn Nghĩa", province: 28, district: 317
	},
	{
		id: 5284, name: "Xã Văn Sơn", province: 28, district: 317
	},
	{
		id: 5287, name: "Xã Tân Lập", province: 28, district: 317
	},
	{
		id: 5290, name: "Xã Nhân Nghĩa", province: 28, district: 317
	},
	{
		id: 5293, name: "Xã Thượng Cốc", province: 28, district: 317
	},
	{
		id: 5296, name: "Xã Phú Lương", province: 28, district: 317
	},
	{
		id: 5299, name: "Xã Phúc Tuy", province: 28, district: 317
	},
	{
		id: 5302, name: "Xã Xuất Hóa", province: 28, district: 317
	},
	{
		id: 5305, name: "Xã Yên Phú", province: 28, district: 317
	},
	{
		id: 5308, name: "Xã Bình Hẻm", province: 28, district: 317
	},
	{
		id: 5311, name: "Xã Chí Thiện", province: 28, district: 317
	},
	{
		id: 5314, name: "Xã Bình Cảng", province: 28, district: 317
	},
	{
		id: 5317, name: "Xã Bình Chân", province: 28, district: 317
	},
	{
		id: 5320, name: "Xã Định Cư", province: 28, district: 317
	},
	{
		id: 5323, name: "Xã Chí Đạo", province: 28, district: 317
	},
	{
		id: 5326, name: "Xã Liên Vũ", province: 28, district: 317
	},
	{
		id: 5329, name: "Xã Ngọc Sơn", province: 28, district: 317
	},
	{
		id: 5332, name: "Xã Hương Nhượng", province: 28, district: 317
	},
	{
		id: 5335, name: "Xã Vũ Lâm", province: 28, district: 317
	},
	{
		id: 5338, name: "Xã Tự Do", province: 28, district: 317
	},
	{
		id: 5341, name: "Xã Yên Nghiệp", province: 28, district: 317
	},
	{
		id: 5344, name: "Xã Tân Mỹ", province: 28, district: 317
	},
	{
		id: 5347, name: "Xã Ân Nghĩa", province: 28, district: 317
	},
	{
		id: 5350, name: "Xã Ngọc Lâu", province: 28, district: 317
	},
	{
		id: 4894, name: "Thị trấn Kỳ Sơn", province: 28, district: 318
	},
	{
		id: 4897, name: "Xã Hợp Thịnh", province: 28, district: 318
	},
	{
		id: 4900, name: "Xã Phú Minh", province: 28, district: 318
	},
	{
		id: 4903, name: "Xã Hợp Thành", province: 28, district: 318
	},
	{
		id: 4906, name: "Xã Phúc Tiến", province: 28, district: 318
	},
	{
		id: 4909, name: "Xã Dân Hòa", province: 28, district: 318
	},
	{
		id: 4912, name: "Xã Mông Hóa", province: 28, district: 318
	},
	{
		id: 4915, name: "Xã Dân Hạ", province: 28, district: 318
	},
	{
		id: 4921, name: "Xã Độc Lập", province: 28, district: 318
	},
	{
		id: 4933, name: "Xã Yên Quang", province: 28, district: 318
	},
	{
		id: 4924, name: "Thị trấn Lương Sơn", province: 28, district: 319
	},
	{
		id: 4942, name: "Xã Lâm Sơn", province: 28, district: 319
	},
	{
		id: 4945, name: "Xã Hòa Sơn", province: 28, district: 319
	},
	{
		id: 4948, name: "Xã Trường Sơn", province: 28, district: 319
	},
	{
		id: 4951, name: "Xã Tân Vinh", province: 28, district: 319
	},
	{
		id: 4954, name: "Xã Nhuận Trạch", province: 28, district: 319
	},
	{
		id: 4957, name: "Xã Cao Răm", province: 28, district: 319
	},
	{
		id: 4960, name: "Xã Cư Yên", province: 28, district: 319
	},
	{
		id: 4963, name: "Xã Hợp Hòa", province: 28, district: 319
	},
	{
		id: 4966, name: "Xã Liên Sơn", province: 28, district: 319
	},
	{
		id: 4969, name: "Xã Thành Lập", province: 28, district: 319
	},
	{
		id: 4972, name: "Xã Tiến Sơn", province: 28, district: 319
	},
	{
		id: 4975, name: "Xã Trung Sơn", province: 28, district: 319
	},
	{
		id: 4996, name: "Xã Tân Thành", province: 28, district: 319
	},
	{
		id: 5008, name: "Xã Cao Dương", province: 28, district: 319
	},
	{
		id: 5023, name: "Xã Hợp Châu", province: 28, district: 319
	},
	{
		id: 5041, name: "Xã Long Sơn", province: 28, district: 319
	},
	{
		id: 5047, name: "Xã Cao Thắng", province: 28, district: 319
	},
	{
		id: 5059, name: "Xã Thanh Lương", province: 28, district: 319
	},
	{
		id: 5062, name: "Xã Hợp Thanh", province: 28, district: 319
	},
	{
		id: 4978, name: "Thị trấn Bo", province: 28, district: 340
	},
	{
		id: 4984, name: "Xã Đú Sáng", province: 28, district: 340
	},
	{
		id: 4987, name: "Xã Bắc Sơn", province: 28, district: 340
	},
	{
		id: 4990, name: "Xã Bình Sơn", province: 28, district: 340
	},
	{
		id: 4993, name: "Xã Hùng Tiến", province: 28, district: 340
	},
	{
		id: 4999, name: "Xã Tú Sơn", province: 28, district: 340
	},
	{
		id: 5002, name: "Xã Nật Sơn", province: 28, district: 340
	},
	{
		id: 5005, name: "Xã Vĩnh Tiến", province: 28, district: 340
	},
	{
		id: 5011, name: "Xã Sơn Thủy", province: 28, district: 340
	},
	{
		id: 5014, name: "Xã Đông Bắc", province: 28, district: 340
	},
	{
		id: 5017, name: "Xã Thượng Bì", province: 28, district: 340
	},
	{
		id: 5020, name: "Xã Lập Chiệng", province: 28, district: 340
	},
	{
		id: 5026, name: "Xã Vĩnh Đồng", province: 28, district: 340
	},
	{
		id: 5029, name: "Xã Hạ Bì", province: 28, district: 340
	},
	{
		id: 5032, name: "Xã Trung Bì", province: 28, district: 340
	},
	{
		id: 5035, name: "Xã Kim Sơn", province: 28, district: 340
	},
	{
		id: 5038, name: "Xã Hợp Đồng", province: 28, district: 340
	},
	{
		id: 5044, name: "Xã Thượng Tiến", province: 28, district: 340
	},
	{
		id: 5050, name: "Xã Kim Tiến", province: 28, district: 340
	},
	{
		id: 5053, name: "Xã Kim Bình", province: 28, district: 340
	},
	{
		id: 5056, name: "Xã Hợp Kim", province: 28, district: 340
	},
	{
		id: 5065, name: "Xã Kim Bôi", province: 28, district: 340
	},
	{
		id: 5068, name: "Xã Nam Thượng", province: 28, district: 340
	},
	{
		id: 5071, name: "Xã Kim Truy", province: 28, district: 340
	},
	{
		id: 5077, name: "Xã Cuối Hạ", province: 28, district: 340
	},
	{
		id: 5080, name: "Xã Sào Báy", province: 28, district: 340
	},
	{
		id: 5083, name: "Xã Mi Hòa", province: 28, district: 340
	},
	{
		id: 5086, name: "Xã Nuông Dăm", province: 28, district: 340
	},
	{
		id: 4981, name: "Thị trấn Thanh Hà", province: 28, district: 341
	},
	{
		id: 5074, name: "Xã Thanh Nông", province: 28, district: 341
	},
	{
		id: 5392, name: "Thị trấn Chi Nê", province: 28, district: 341
	},
	{
		id: 5395, name: "Xã Phú Lão", province: 28, district: 341
	},
	{
		id: 5398, name: "Xã Phú Thành", province: 28, district: 341
	},
	{
		id: 5401, name: "Xã Cố Nghĩa", province: 28, district: 341
	},
	{
		id: 5404, name: "Xã Hưng Thi", province: 28, district: 341
	},
	{
		id: 5407, name: "Xã Lạc Long", province: 28, district: 341
	},
	{
		id: 5410, name: "Xã Liên Hòa", province: 28, district: 341
	},
	{
		id: 5413, name: "Xã Khoan Dụ", province: 28, district: 341
	},
	{
		id: 5416, name: "Xã Đồng Môn", province: 28, district: 341
	},
	{
		id: 5419, name: "Xã Đồng Tâm", province: 28, district: 341
	},
	{
		id: 5422, name: "Xã Yên Bồng", province: 28, district: 341
	},
	{
		id: 5425, name: "Xã An Lạc", province: 28, district: 341
	},
	{
		id: 5428, name: "Xã An Bình", province: 28, district: 341
	},
	{
		id: 5353, name: "Thị trấn Hàng Trạm", province: 28, district: 342
	},
	{
		id: 5356, name: "Xã Lạc Sỹ", province: 28, district: 342
	},
	{
		id: 5359, name: "Xã Lạc Hưng", province: 28, district: 342
	},
	{
		id: 5362, name: "Xã Lạc Lương", province: 28, district: 342
	},
	{
		id: 5365, name: "Xã Bảo Hiệu", province: 28, district: 342
	},
	{
		id: 5368, name: "Xã Đa Phúc", province: 28, district: 342
	},
	{
		id: 5371, name: "Xã Hữu Lợi", province: 28, district: 342
	},
	{
		id: 5374, name: "Xã Lạc Thịnh", province: 28, district: 342
	},
	{
		id: 5377, name: "Xã Yên Lạc", province: 28, district: 342
	},
	{
		id: 5380, name: "Xã Đoàn Kết", province: 28, district: 342
	},
	{
		id: 5383, name: "Xã Phú Lai", province: 28, district: 342
	},
	{
		id: 5386, name: "Xã Yên Trị", province: 28, district: 342
	},
	{
		id: 5389, name: "Xã Ngọc Lương", province: 28, district: 342
	},
	{
		id: 5089, name: "Thị trấn Cao Phong", province: 28, district: 343
	},
	{
		id: 5092, name: "Xã Bình Thanh", province: 28, district: 343
	},
	{
		id: 5095, name: "Xã Thung Nai", province: 28, district: 343
	},
	{
		id: 5098, name: "Xã Bắc Phong", province: 28, district: 343
	},
	{
		id: 5101, name: "Xã Thu Phong", province: 28, district: 343
	},
	{
		id: 5104, name: "Xã Đông Phong", province: 28, district: 343
	},
	{
		id: 5107, name: "Xã Xuân Phong", province: 28, district: 343
	},
	{
		id: 5110, name: "Xã Tây Phong", province: 28, district: 343
	},
	{
		id: 5113, name: "Xã Tân Phong", province: 28, district: 343
	},
	{
		id: 5116, name: "Xã Dũng Phong", province: 28, district: 343
	},
	{
		id: 5119, name: "Xã Nam Phong", province: 28, district: 343
	},
	{
		id: 5122, name: "Xã Yên Lập", province: 28, district: 343
	},
	{
		id: 5125, name: "Xã Yên Thượng", province: 28, district: 343
	},
	{
		id: 22327, name: "Phường Vĩnh Hoà", province: 30, district: 354
	},
	{
		id: 22330, name: "Phường Vĩnh Hải", province: 30, district: 354
	},
	{
		id: 22333, name: "Phường Vĩnh Phước", province: 30, district: 354
	},
	{
		id: 22336, name: "Phường Ngọc Hiệp", province: 30, district: 354
	},
	{
		id: 22339, name: "Phường Vĩnh Thọ", province: 30, district: 354
	},
	{
		id: 22342, name: "Phường Xương Huân", province: 30, district: 354
	},
	{
		id: 22345, name: "Phường Vạn Thắng", province: 30, district: 354
	},
	{
		id: 22348, name: "Phường Vạn Thạnh", province: 30, district: 354
	},
	{
		id: 22351, name: "Phường Phương Sài", province: 30, district: 354
	},
	{
		id: 22354, name: "Phường Phương Sơn", province: 30, district: 354
	},
	{
		id: 22357, name: "Phường Phước Hải", province: 30, district: 354
	},
	{
		id: 22360, name: "Phường Phước Tân", province: 30, district: 354
	},
	{
		id: 22363, name: "Phường Lộc Thọ", province: 30, district: 354
	},
	{
		id: 22366, name: "Phường Phước Tiến", province: 30, district: 354
	},
	{
		id: 22369, name: "Phường Tân Lập", province: 30, district: 354
	},
	{
		id: 22372, name: "Phường Phước Hòa", province: 30, district: 354
	},
	{
		id: 22375, name: "Phường Vĩnh Nguyên", province: 30, district: 354
	},
	{
		id: 22378, name: "Phường Phước Long", province: 30, district: 354
	},
	{
		id: 22381, name: "Phường Vĩnh Trường", province: 30, district: 354
	},
	{
		id: 22384, name: "Xã Vĩnh Lương", province: 30, district: 354
	},
	{
		id: 22387, name: "Xã Vĩnh Phương", province: 30, district: 354
	},
	{
		id: 22390, name: "Xã Vĩnh Ngọc", province: 30, district: 354
	},
	{
		id: 22393, name: "Xã Vĩnh Thạnh", province: 30, district: 354
	},
	{
		id: 22396, name: "Xã Vĩnh Trung", province: 30, district: 354
	},
	{
		id: 22399, name: "Xã Vĩnh Hiệp", province: 30, district: 354
	},
	{
		id: 22402, name: "Xã Vĩnh Thái", province: 30, district: 354
	},
	{
		id: 22405, name: "Xã Phước Đồng", province: 30, district: 354
	},
	{
		id: 22489, name: "Thị trấn Vạn Giã", province: 30, district: 355
	},
	{
		id: 22492, name: "Xã Đại Lãnh", province: 30, district: 355
	},
	{
		id: 22495, name: "Xã Vạn Phước", province: 30, district: 355
	},
	{
		id: 22498, name: "Xã Vạn Long", province: 30, district: 355
	},
	{
		id: 22501, name: "Xã Vạn Bình", province: 30, district: 355
	},
	{
		id: 22504, name: "Xã Vạn Thọ", province: 30, district: 355
	},
	{
		id: 22507, name: "Xã Vạn Khánh", province: 30, district: 355
	},
	{
		id: 22510, name: "Xã Vạn Phú", province: 30, district: 355
	},
	{
		id: 22513, name: "Xã Vạn Lương", province: 30, district: 355
	},
	{
		id: 22516, name: "Xã Vạn Thắng", province: 30, district: 355
	},
	{
		id: 22519, name: "Xã Vạn Thạnh", province: 30, district: 355
	},
	{
		id: 22522, name: "Xã Xuân Sơn", province: 30, district: 355
	},
	{
		id: 22525, name: "Xã Vạn Hưng", province: 30, district: 355
	},
	{
		id: 22528, name: "Phường Ninh Hiệp", province: 30, district: 356
	},
	{
		id: 22531, name: "Xã Ninh Sơn", province: 30, district: 356
	},
	{
		id: 22534, name: "Xã Ninh Tây", province: 30, district: 356
	},
	{
		id: 22537, name: "Xã Ninh Thượng", province: 30, district: 356
	},
	{
		id: 22540, name: "Xã Ninh An", province: 30, district: 356
	},
	{
		id: 22543, name: "Phường Ninh Hải", province: 30, district: 356
	},
	{
		id: 22546, name: "Xã Ninh Thọ", province: 30, district: 356
	},
	{
		id: 22549, name: "Xã Ninh Trung", province: 30, district: 356
	},
	{
		id: 22552, name: "Xã Ninh Sim", province: 30, district: 356
	},
	{
		id: 22555, name: "Xã Ninh Xuân", province: 30, district: 356
	},
	{
		id: 22558, name: "Xã Ninh Thân", province: 30, district: 356
	},
	{
		id: 22561, name: "Phường Ninh Diêm", province: 30, district: 356
	},
	{
		id: 22564, name: "Xã Ninh Đông", province: 30, district: 356
	},
	{
		id: 22567, name: "Phường Ninh Thủy", province: 30, district: 356
	},
	{
		id: 22570, name: "Phường Ninh Đa", province: 30, district: 356
	},
	{
		id: 22573, name: "Xã Ninh Phụng", province: 30, district: 356
	},
	{
		id: 22576, name: "Xã Ninh Bình", province: 30, district: 356
	},
	{
		id: 22579, name: "Xã Ninh Phước", province: 30, district: 356
	},
	{
		id: 22582, name: "Xã Ninh Phú", province: 30, district: 356
	},
	{
		id: 22585, name: "Xã Ninh Tân", province: 30, district: 356
	},
	{
		id: 22588, name: "Xã Ninh Quang", province: 30, district: 356
	},
	{
		id: 22591, name: "Phường Ninh Giang", province: 30, district: 356
	},
	{
		id: 22594, name: "Phường Ninh Hà", province: 30, district: 356
	},
	{
		id: 22597, name: "Xã Ninh Hưng", province: 30, district: 356
	},
	{
		id: 22600, name: "Xã Ninh Lộc", province: 30, district: 356
	},
	{
		id: 22603, name: "Xã Ninh Ích", province: 30, district: 356
	},
	{
		id: 22606, name: "Xã Ninh Vân", province: 30, district: 356
	},
	{
		id: 22651, name: "Thị trấn Diên Khánh", province: 30, district: 357
	},
	{
		id: 22654, name: "Xã Diên Lâm", province: 30, district: 357
	},
	{
		id: 22657, name: "Xã Diên Điền", province: 30, district: 357
	},
	{
		id: 22660, name: "Xã Diên Xuân", province: 30, district: 357
	},
	{
		id: 22663, name: "Xã Diên Sơn", province: 30, district: 357
	},
	{
		id: 22666, name: "Xã Diên Đồng", province: 30, district: 357
	},
	{
		id: 22669, name: "Xã Diên Phú", province: 30, district: 357
	},
	{
		id: 22672, name: "Xã Diên Thọ", province: 30, district: 357
	},
	{
		id: 22675, name: "Xã Diên Phước", province: 30, district: 357
	},
	{
		id: 22678, name: "Xã Diên Lạc", province: 30, district: 357
	},
	{
		id: 22681, name: "Xã Diên Tân", province: 30, district: 357
	},
	{
		id: 22684, name: "Xã Diên Hòa", province: 30, district: 357
	},
	{
		id: 22687, name: "Xã Diên Thạnh", province: 30, district: 357
	},
	{
		id: 22690, name: "Xã Diên Toàn", province: 30, district: 357
	},
	{
		id: 22693, name: "Xã Diên An", province: 30, district: 357
	},
	{
		id: 22696, name: "Xã Diên Bình", province: 30, district: 357
	},
	{
		id: 22699, name: "Xã Diên Lộc", province: 30, district: 357
	},
	{
		id: 22702, name: "Xã Suối Hiệp", province: 30, district: 357
	},
	{
		id: 22705, name: "Xã Suối Tiên", province: 30, district: 357
	},
	{
		id: 22609, name: "Thị trấn Khánh Vĩnh", province: 30, district: 358
	},
	{
		id: 22612, name: "Xã Khánh Hiệp", province: 30, district: 358
	},
	{
		id: 22615, name: "Xã Khánh Bình", province: 30, district: 358
	},
	{
		id: 22618, name: "Xã Khánh Trung", province: 30, district: 358
	},
	{
		id: 22621, name: "Xã Khánh Đông", province: 30, district: 358
	},
	{
		id: 22624, name: "Xã Khánh Thượng", province: 30, district: 358
	},
	{
		id: 22627, name: "Xã Khánh Nam", province: 30, district: 358
	},
	{
		id: 22630, name: "Xã Sông Cầu", province: 30, district: 358
	},
	{
		id: 22633, name: "Xã Giang Ly", province: 30, district: 358
	},
	{
		id: 22636, name: "Xã Cầu Bà", province: 30, district: 358
	},
	{
		id: 22639, name: "Xã Liên Sang", province: 30, district: 358
	},
	{
		id: 22642, name: "Xã Khánh Thành", province: 30, district: 358
	},
	{
		id: 22645, name: "Xã Khánh Phú", province: 30, district: 358
	},
	{
		id: 22648, name: "Xã Sơn Thái", province: 30, district: 358
	},
	{
		id: 22408, name: "Phường Cam Nghĩa", province: 30, district: 359
	},
	{
		id: 22411, name: "Phường Cam Phúc Bắc", province: 30, district: 359
	},
	{
		id: 22414, name: "Phường Cam Phúc Nam", province: 30, district: 359
	},
	{
		id: 22417, name: "Phường Cam Lộc", province: 30, district: 359
	},
	{
		id: 22420, name: "Phường Cam Phú", province: 30, district: 359
	},
	{
		id: 22423, name: "Phường Ba Ngòi", province: 30, district: 359
	},
	{
		id: 22426, name: "Phường Cam Thuận", province: 30, district: 359
	},
	{
		id: 22429, name: "Phường Cam Lợi", province: 30, district: 359
	},
	{
		id: 22432, name: "Phường Cam Linh", province: 30, district: 359
	},
	{
		id: 22468, name: "Xã Cam Thành Nam", province: 30, district: 359
	},
	{
		id: 22474, name: "Xã Cam Phước Đông", province: 30, district: 359
	},
	{
		id: 22477, name: "Xã Cam Thịnh Tây", province: 30, district: 359
	},
	{
		id: 22480, name: "Xã Cam Thịnh Đông", province: 30, district: 359
	},
	{
		id: 22483, name: "Xã Cam Lập", province: 30, district: 359
	},
	{
		id: 22486, name: "Xã Cam Bình", province: 30, district: 359
	},
	{
		id: 22714, name: "Thị trấn Tô Hạp", province: 30, district: 360
	},
	{
		id: 22717, name: "Xã Thành Sơn", province: 30, district: 360
	},
	{
		id: 22720, name: "Xã Sơn Lâm", province: 30, district: 360
	},
	{
		id: 22723, name: "Xã Sơn Hiệp", province: 30, district: 360
	},
	{
		id: 22726, name: "Xã Sơn Bình", province: 30, district: 360
	},
	{
		id: 22729, name: "Xã Sơn Trung", province: 30, district: 360
	},
	{
		id: 22732, name: "Xã Ba Cụm Bắc", province: 30, district: 360
	},
	{
		id: 22735, name: "Xã Ba Cụm Nam", province: 30, district: 360
	},
	{
		id: 22435, name: "Xã Cam Tân", province: 30, district: 731
	},
	{
		id: 22438, name: "Xã Cam Hòa", province: 30, district: 731
	},
	{
		id: 22441, name: "Xã Cam Hải Đông", province: 30, district: 731
	},
	{
		id: 22444, name: "Xã Cam Hải Tây", province: 30, district: 731
	},
	{
		id: 22447, name: "Xã Sơn Tân", province: 30, district: 731
	},
	{
		id: 22450, name: "Xã Cam Hiệp Bắc", province: 30, district: 731
	},
	{
		id: 22453, name: "Thị trấn Cam Đức", province: 30, district: 731
	},
	{
		id: 22456, name: "Xã Cam Hiệp Nam", province: 30, district: 731
	},
	{
		id: 22459, name: "Xã Cam Phước Tây", province: 30, district: 731
	},
	{
		id: 22462, name: "Xã Cam Thành Bắc", province: 30, district: 731
	},
	{
		id: 22465, name: "Xã Cam An Bắc", province: 30, district: 731
	},
	{
		id: 22471, name: "Xã Cam An Nam", province: 30, district: 731
	},
	{
		id: 22708, name: "Xã Suối Cát", province: 30, district: 731
	},
	{
		id: 22711, name: "Xã Suối Tân", province: 30, district: 731
	},
	{
		id: 3386, name: "Phường Quyết Thắng", province: 32, district: 384
	},
	{
		id: 3387, name: "Phường Tân Phong", province: 32, district: 384
	},
	{
		id: 3388, name: "Phường Quyết Tiến", province: 32, district: 384
	},
	{
		id: 3389, name: "Phường Đoàn Kết", province: 32, district: 384
	},
	{
		id: 3403, name: "Xã Nậm Loỏng", province: 32, district: 384
	},
	{
		id: 3408, name: "Phường Đông Phong", province: 32, district: 384
	},
	{
		id: 3409, name: "Xã San Thàng", province: 32, district: 384
	},
	{
		id: 3390, name: "Thị trấn Tam Đường", province: 32, district: 385
	},
	{
		id: 3394, name: "Xã Thèn Sin", province: 32, district: 385
	},
	{
		id: 3397, name: "Xã Sùng Phài", province: 32, district: 385
	},
	{
		id: 3400, name: "Xã Tả Lèng", province: 32, district: 385
	},
	{
		id: 3405, name: "Xã Giang Ma", province: 32, district: 385
	},
	{
		id: 3406, name: "Xã Hồ Thầu", province: 32, district: 385
	},
	{
		id: 3412, name: "Xã Bình Lư", province: 32, district: 385
	},
	{
		id: 3413, name: "Xã Sơn Bình", province: 32, district: 385
	},
	{
		id: 3415, name: "Xã Nùng Nàng", province: 32, district: 385
	},
	{
		id: 3418, name: "Xã Bản Giang", province: 32, district: 385
	},
	{
		id: 3421, name: "Xã Bản Hon", province: 32, district: 385
	},
	{
		id: 3424, name: "Xã Bản Bo", province: 32, district: 385
	},
	{
		id: 3427, name: "Xã Nà Tăm", province: 32, district: 385
	},
	{
		id: 3430, name: "Xã Khun Há", province: 32, district: 385
	},
	{
		id: 3391, name: "Xã Lả Nhì Thàng", province: 32, district: 386
	},
	{
		id: 3490, name: "Xã Huổi Luông", province: 32, district: 386
	},
	{
		id: 3549, name: "Thị trấn Phong Thổ", province: 32, district: 386
	},
	{
		id: 3550, name: "Xã Sì Lờ Lầu", province: 32, district: 386
	},
	{
		id: 3553, name: "Xã Mồ Sì San", province: 32, district: 386
	},
	{
		id: 3556, name: "Xã Ma Li Chải", province: 32, district: 386
	},
	{
		id: 3559, name: "Xã Pa Vây Sử", province: 32, district: 386
	},
	{
		id: 3562, name: "Xã Vàng Ma Chải", province: 32, district: 386
	},
	{
		id: 3565, name: "Xã Tông Qua Lìn", province: 32, district: 386
	},
	{
		id: 3568, name: "Xã Mù Sang", province: 32, district: 386
	},
	{
		id: 3571, name: "Xã Dào San", province: 32, district: 386
	},
	{
		id: 3574, name: "Xã Ma Ly Pho", province: 32, district: 386
	},
	{
		id: 3577, name: "Xã Bản Lang", province: 32, district: 386
	},
	{
		id: 3580, name: "Xã Hoang Thèn", province: 32, district: 386
	},
	{
		id: 3583, name: "Xã Khổng Lào", province: 32, district: 386
	},
	{
		id: 3586, name: "Xã Nậm Xe", province: 32, district: 386
	},
	{
		id: 3589, name: "Xã Mường So", province: 32, district: 386
	},
	{
		id: 3592, name: "Xã Sin Suối Hồ", province: 32, district: 386
	},
	{
		id: 3478, name: "Thị trấn Sìn Hồ", province: 32, district: 387
	},
	{
		id: 3487, name: "Xã Chăn Nưa", province: 32, district: 387
	},
	{
		id: 3493, name: "Xã Pa Tần", province: 32, district: 387
	},
	{
		id: 3496, name: "Xã Phìn Hồ", province: 32, district: 387
	},
	{
		id: 3499, name: "Xã Hồng Thu", province: 32, district: 387
	},
	{
		id: 3505, name: "Xã Phăng Sô Lin", province: 32, district: 387
	},
	{
		id: 3508, name: "Xã Ma Quai", province: 32, district: 387
	},
	{
		id: 3509, name: "Xã Lùng Thàng", province: 32, district: 387
	},
	{
		id: 3511, name: "Xã Tả Phìn", province: 32, district: 387
	},
	{
		id: 3514, name: "Xã Sà Dề Phìn", province: 32, district: 387
	},
	{
		id: 3517, name: "Xã Nậm Tăm", province: 32, district: 387
	},
	{
		id: 3520, name: "Xã Tả Ngảo", province: 32, district: 387
	},
	{
		id: 3523, name: "Xã Pu Sam Cáp", province: 32, district: 387
	},
	{
		id: 3526, name: "Xã Nậm Cha", province: 32, district: 387
	},
	{
		id: 3527, name: "Xã Pa Khoá", province: 32, district: 387
	},
	{
		id: 3529, name: "Xã Làng Mô", province: 32, district: 387
	},
	{
		id: 3532, name: "Xã Noong Hẻo", province: 32, district: 387
	},
	{
		id: 3535, name: "Xã Nậm Mạ", province: 32, district: 387
	},
	{
		id: 3538, name: "Xã Căn Co", province: 32, district: 387
	},
	{
		id: 3541, name: "Xã Tủa Sín Chải", province: 32, district: 387
	},
	{
		id: 3544, name: "Xã Nậm Cuổi", province: 32, district: 387
	},
	{
		id: 3547, name: "Xã Nậm Hăn", province: 32, district: 387
	},
	{
		id: 3433, name: "Thị trấn Mường Tè", province: 32, district: 388
	},
	{
		id: 3436, name: "Xã Thu Lũm", province: 32, district: 388
	},
	{
		id: 3439, name: "Xã Ka Lăng", province: 32, district: 388
	},
	{
		id: 3440, name: "Xã Tá Bạ", province: 32, district: 388
	},
	{
		id: 3442, name: "Xã Pa Ủ", province: 32, district: 388
	},
	{
		id: 3445, name: "Xã Mường Tè", province: 32, district: 388
	},
	{
		id: 3448, name: "Xã Pa Vệ Sử", province: 32, district: 388
	},
	{
		id: 3451, name: "Xã Mù Cả", province: 32, district: 388
	},
	{
		id: 3454, name: "Xã Bun Tở", province: 32, district: 388
	},
	{
		id: 3457, name: "Xã Nậm Khao", province: 32, district: 388
	},
	{
		id: 3463, name: "Xã Tà Tổng", province: 32, district: 388
	},
	{
		id: 3466, name: "Xã Bun Nưa", province: 32, district: 388
	},
	{
		id: 3467, name: "Xã Vàng San", province: 32, district: 388
	},
	{
		id: 3469, name: "Xã Kan Hồ", province: 32, district: 388
	},
	{
		id: 3595, name: "Thị trấn Than Uyên", province: 32, district: 389
	},
	{
		id: 3618, name: "Xã Phúc Than", province: 32, district: 389
	},
	{
		id: 3619, name: "Xã Mường Than", province: 32, district: 389
	},
	{
		id: 3625, name: "Xã Mường Mít", province: 32, district: 389
	},
	{
		id: 3628, name: "Xã Pha Mu", province: 32, district: 389
	},
	{
		id: 3631, name: "Xã Mường Cang", province: 32, district: 389
	},
	{
		id: 3632, name: "Xã Hua Nà", province: 32, district: 389
	},
	{
		id: 3634, name: "Xã Tà Hừa", province: 32, district: 389
	},
	{
		id: 3637, name: "Xã Mường Kim", province: 32, district: 389
	},
	{
		id: 3638, name: "Xã Tà Mung", province: 32, district: 389
	},
	{
		id: 3640, name: "Xã Tà Gia", province: 32, district: 389
	},
	{
		id: 3643, name: "Xã Khoen On", province: 32, district: 389
	},
	{
		id: 3598, name: "Thị trấn Tân Uyên", province: 32, district: 714
	},
	{
		id: 3601, name: "Xã Mường Khoa", province: 32, district: 714
	},
	{
		id: 3602, name: "Xã Phúc Khoa", province: 32, district: 714
	},
	{
		id: 3604, name: "Xã Thân Thuộc", province: 32, district: 714
	},
	{
		id: 3605, name: "Xã Trung Đồng", province: 32, district: 714
	},
	{
		id: 3607, name: "Xã Hố Mít", province: 32, district: 714
	},
	{
		id: 3610, name: "Xã Nậm Cần", province: 32, district: 714
	},
	{
		id: 3613, name: "Xã Nậm Sỏ", province: 32, district: 714
	},
	{
		id: 3616, name: "Xã Pắc Ta", province: 32, district: 714
	},
	{
		id: 3622, name: "Xã Tà Mít", province: 32, district: 714
	},
	{
		id: 3434, name: "Thị trấn Nậm Nhùn", province: 32, district: 715
	},
	{
		id: 3460, name: "Xã Hua Bun", province: 32, district: 715
	},
	{
		id: 3472, name: "Xã Mường Mô", province: 32, district: 715
	},
	{
		id: 3473, name: "Xã Nậm Chà", province: 32, district: 715
	},
	{
		id: 3474, name: "Xã Nậm Manh", province: 32, district: 715
	},
	{
		id: 3475, name: "Xã Nậm Hàng", province: 32, district: 715
	},
	{
		id: 3481, name: "Xã Lê Lợi", province: 32, district: 715
	},
	{
		id: 3484, name: "Xã Pú Đao", province: 32, district: 715
	},
	{
		id: 3488, name: "Xã Nậm Pì", province: 32, district: 715
	},
	{
		id: 3502, name: "Xã Nậm Ban", province: 32, district: 715
	},
	{
		id: 3503, name: "Xã Trung Chải", province: 32, district: 715
	},
	{
		id: 24769, name: "Phường 7", province: 33, district: 399
	},
	{
		id: 24772, name: "Phường 8", province: 33, district: 399
	},
	{
		id: 24775, name: "Phường 12", province: 33, district: 399
	},
	{
		id: 24778, name: "Phường 9", province: 33, district: 399
	},
	{
		id: 24781, name: "Phường 2", province: 33, district: 399
	},
	{
		id: 24784, name: "Phường 1", province: 33, district: 399
	},
	{
		id: 24787, name: "Phường 6", province: 33, district: 399
	},
	{
		id: 24790, name: "Phường 5", province: 33, district: 399
	},
	{
		id: 24793, name: "Phường 4", province: 33, district: 399
	},
	{
		id: 24796, name: "Phường 10", province: 33, district: 399
	},
	{
		id: 24799, name: "Phường 11", province: 33, district: 399
	},
	{
		id: 24802, name: "Phường 3", province: 33, district: 399
	},
	{
		id: 24805, name: "Xã Xuân Thọ", province: 33, district: 399
	},
	{
		id: 24808, name: "Xã Tà Nung", province: 33, district: 399
	},
	{
		id: 24810, name: "Xã Trạm Hành", province: 33, district: 399
	},
	{
		id: 24811, name: "Xã Xuân Trường", province: 33, district: 399
	},
	{
		id: 24814, name: "Phường Lộc Phát", province: 33, district: 400
	},
	{
		id: 24817, name: "Phường Lộc Tiến", province: 33, district: 400
	},
	{
		id: 24820, name: "Phường 2", province: 33, district: 400
	},
	{
		id: 24823, name: "Phường 1", province: 33, district: 400
	},
	{
		id: 24826, name: "Phường B'lao", province: 33, district: 400
	},
	{
		id: 24829, name: "Phường Lộc Sơn", province: 33, district: 400
	},
	{
		id: 24832, name: "Xã Đạm Bri", province: 33, district: 400
	},
	{
		id: 24835, name: "Xã Lộc Thanh", province: 33, district: 400
	},
	{
		id: 24838, name: "Xã Lộc Nga", province: 33, district: 400
	},
	{
		id: 24841, name: "Xã Lộc Châu", province: 33, district: 400
	},
	{
		id: 24844, name: "Xã Đại Lào", province: 33, district: 400
	},
	{
		id: 24958, name: "Thị trấn Liên Nghĩa", province: 33, district: 401
	},
	{
		id: 24961, name: "Xã Hiệp An", province: 33, district: 401
	},
	{
		id: 24964, name: "Xã Liên Hiệp", province: 33, district: 401
	},
	{
		id: 24967, name: "Xã Hiệp Thạnh", province: 33, district: 401
	},
	{
		id: 24970, name: "Xã Bình Thạnh", province: 33, district: 401
	},
	{
		id: 24973, name: "Xã N'thol Hạ", province: 33, district: 401
	},
	{
		id: 24976, name: "Xã Tân Hội", province: 33, district: 401
	},
	{
		id: 24979, name: "Xã Tân Thành", province: 33, district: 401
	},
	{
		id: 24982, name: "Xã Phú Hội", province: 33, district: 401
	},
	{
		id: 24985, name: "Xã Ninh Gia", province: 33, district: 401
	},
	{
		id: 24988, name: "Xã Tà Năng", province: 33, district: 401
	},
	{
		id: 24989, name: "Xã Đa Quyn", province: 33, district: 401
	},
	{
		id: 24991, name: "Xã Tà Hine", province: 33, district: 401
	},
	{
		id: 24994, name: "Xã Đà Loan", province: 33, district: 401
	},
	{
		id: 24997, name: "Xã Ninh Loan", province: 33, district: 401
	},
	{
		id: 25000, name: "Thị trấn Di Linh", province: 33, district: 402
	},
	{
		id: 25003, name: "Xã Đinh Trang Thượng", province: 33, district: 402
	},
	{
		id: 25006, name: "Xã Tân Thượng", province: 33, district: 402
	},
	{
		id: 25007, name: "Xã Tân Lâm", province: 33, district: 402
	},
	{
		id: 25009, name: "Xã Tân Châu", province: 33, district: 402
	},
	{
		id: 25012, name: "Xã Tân Nghĩa", province: 33, district: 402
	},
	{
		id: 25015, name: "Xã Gia Hiệp", province: 33, district: 402
	},
	{
		id: 25018, name: "Xã Đinh Lạc", province: 33, district: 402
	},
	{
		id: 25021, name: "Xã Tam Bố", province: 33, district: 402
	},
	{
		id: 25024, name: "Xã Đinh Trang Hòa", province: 33, district: 402
	},
	{
		id: 25027, name: "Xã Liên Đầm", province: 33, district: 402
	},
	{
		id: 25030, name: "Xã Gung Ré", province: 33, district: 402
	},
	{
		id: 25033, name: "Xã Bảo Thuận", province: 33, district: 402
	},
	{
		id: 25036, name: "Xã Hòa Ninh", province: 33, district: 402
	},
	{
		id: 25039, name: "Xã Hòa Trung", province: 33, district: 402
	},
	{
		id: 25042, name: "Xã Hòa Nam", province: 33, district: 402
	},
	{
		id: 25045, name: "Xã Hòa Bắc", province: 33, district: 402
	},
	{
		id: 25048, name: "Xã Sơn Điền", province: 33, district: 402
	},
	{
		id: 25051, name: "Xã Gia Bắc", province: 33, district: 402
	},
	{
		id: 24928, name: "Thị trấn D'ran", province: 33, district: 403
	},
	{
		id: 24931, name: "Thị trấn Thạnh Mỹ", province: 33, district: 403
	},
	{
		id: 24934, name: "Xã Lạc Xuân", province: 33, district: 403
	},
	{
		id: 24937, name: "Xã Đạ Ròn", province: 33, district: 403
	},
	{
		id: 24940, name: "Xã Lạc Lâm", province: 33, district: 403
	},
	{
		id: 24943, name: "Xã Ka Đô", province: 33, district: 403
	},
	{
		id: 24946, name: "Xã Quảng Lập", province: 33, district: 403
	},
	{
		id: 24949, name: "Xã Ka Đơn", province: 33, district: 403
	},
	{
		id: 24952, name: "Xã Tu Tra", province: 33, district: 403
	},
	{
		id: 24955, name: "Xã Pró", province: 33, district: 403
	},
	{
		id: 24846, name: "Thị trấn Lạc Dương", province: 33, district: 404
	},
	{
		id: 24847, name: "Xã Đạ Chais", province: 33, district: 404
	},
	{
		id: 24848, name: "Xã Đa Nhim", province: 33, district: 404
	},
	{
		id: 24850, name: "Xã Đưng Knớ", province: 33, district: 404
	},
	{
		id: 24862, name: "Xã Lát", province: 33, district: 404
	},
	{
		id: 24865, name: "Xã Đạ Sar", province: 33, district: 404
	},
	{
		id: 25096, name: "Thị trấn Đạ M'ri", province: 33, district: 405
	},
	{
		id: 25099, name: "Thị trấn Ma Đa Guôi", province: 33, district: 405
	},
	{
		id: 25102, name: "Xã Đạ M'ri", province: 33, district: 405
	},
	{
		id: 25105, name: "Xã Hà Lâm", province: 33, district: 405
	},
	{
		id: 25108, name: "Xã Đạ Tồn", province: 33, district: 405
	},
	{
		id: 25111, name: "Xã Đạ Oai", province: 33, district: 405
	},
	{
		id: 25114, name: "Xã Đạ Ploa", province: 33, district: 405
	},
	{
		id: 25117, name: "Xã Ma Đa Guôi", province: 33, district: 405
	},
	{
		id: 25120, name: "Xã Đoàn Kết", province: 33, district: 405
	},
	{
		id: 25123, name: "Xã Phước Lộc", province: 33, district: 405
	},
	{
		id: 25126, name: "Thị trấn Đạ Tẻh", province: 33, district: 406
	},
	{
		id: 25129, name: "Xã An Nhơn", province: 33, district: 406
	},
	{
		id: 25132, name: "Xã Quốc Oai", province: 33, district: 406
	},
	{
		id: 25135, name: "Xã Mỹ Đức", province: 33, district: 406
	},
	{
		id: 25138, name: "Xã Quảng Trị", province: 33, district: 406
	},
	{
		id: 25141, name: "Xã Đạ Lây", province: 33, district: 406
	},
	{
		id: 25144, name: "Xã Hương Lâm", province: 33, district: 406
	},
	{
		id: 25147, name: "Xã Triệu Hải", province: 33, district: 406
	},
	{
		id: 25150, name: "Xã Hà Đông", province: 33, district: 406
	},
	{
		id: 25153, name: "Xã Đạ Kho", province: 33, district: 406
	},
	{
		id: 25156, name: "Xã Đạ Pal", province: 33, district: 406
	},
	{
		id: 25159, name: "Thị trấn Cát Tiên", province: 33, district: 407
	},
	{
		id: 25162, name: "Xã Tiên Hoàng", province: 33, district: 407
	},
	{
		id: 25165, name: "Xã Phước Cát 2", province: 33, district: 407
	},
	{
		id: 25168, name: "Xã Gia Viễn", province: 33, district: 407
	},
	{
		id: 25171, name: "Xã Nam Ninh", province: 33, district: 407
	},
	{
		id: 25174, name: "Xã Mỹ Lâm", province: 33, district: 407
	},
	{
		id: 25177, name: "Xã Tư Nghĩa", province: 33, district: 407
	},
	{
		id: 25180, name: "Xã Phước Cát 1", province: 33, district: 407
	},
	{
		id: 25183, name: "Xã Đức Phổ", province: 33, district: 407
	},
	{
		id: 25189, name: "Xã Quảng Ngãi", province: 33, district: 407
	},
	{
		id: 25192, name: "Xã Đồng Nai Thượng", province: 33, district: 407
	},
	{
		id: 24868, name: "Thị trấn Nam Ban", province: 33, district: 408
	},
	{
		id: 24871, name: "Thị trấn Đinh Văn", province: 33, district: 408
	},
	{
		id: 24880, name: "Xã Phú Sơn", province: 33, district: 408
	},
	{
		id: 24883, name: "Xã Phi Tô", province: 33, district: 408
	},
	{
		id: 24892, name: "Xã Mê Linh", province: 33, district: 408
	},
	{
		id: 24895, name: "Xã Đạ Đờn", province: 33, district: 408
	},
	{
		id: 24898, name: "Xã Phúc Thọ", province: 33, district: 408
	},
	{
		id: 24901, name: "Xã Đông Thanh", province: 33, district: 408
	},
	{
		id: 24904, name: "Xã Gia Lâm", province: 33, district: 408
	},
	{
		id: 24907, name: "Xã Tân Thanh", province: 33, district: 408
	},
	{
		id: 24910, name: "Xã Tân Văn", province: 33, district: 408
	},
	{
		id: 24913, name: "Xã Hoài Đức", province: 33, district: 408
	},
	{
		id: 24916, name: "Xã Tân Hà", province: 33, district: 408
	},
	{
		id: 24919, name: "Xã Liên Hà", province: 33, district: 408
	},
	{
		id: 24922, name: "Xã Đan Phượng", province: 33, district: 408
	},
	{
		id: 24925, name: "Xã Nam Hà", province: 33, district: 408
	},
	{
		id: 25054, name: "Thị trấn Lộc Thắng", province: 33, district: 409
	},
	{
		id: 25057, name: "Xã Lộc Bảo", province: 33, district: 409
	},
	{
		id: 25060, name: "Xã Lộc Lâm", province: 33, district: 409
	},
	{
		id: 25063, name: "Xã Lộc Phú", province: 33, district: 409
	},
	{
		id: 25066, name: "Xã Lộc Bắc", province: 33, district: 409
	},
	{
		id: 25069, name: "Xã B' Lá", province: 33, district: 409
	},
	{
		id: 25072, name: "Xã Lộc Ngãi", province: 33, district: 409
	},
	{
		id: 25075, name: "Xã Lộc Quảng", province: 33, district: 409
	},
	{
		id: 25078, name: "Xã Lộc Tân", province: 33, district: 409
	},
	{
		id: 25081, name: "Xã Lộc Đức", province: 33, district: 409
	},
	{
		id: 25084, name: "Xã Lộc An", province: 33, district: 409
	},
	{
		id: 25087, name: "Xã Tân Lạc", province: 33, district: 409
	},
	{
		id: 25090, name: "Xã Lộc Thành", province: 33, district: 409
	},
	{
		id: 25093, name: "Xã Lộc Nam", province: 33, district: 409
	},
	{
		id: 24853, name: "Xã Đạ Tông", province: 33, district: 410
	},
	{
		id: 24856, name: "Xã Đạ Long", province: 33, district: 410
	},
	{
		id: 24859, name: "Xã Đạ M Rông", province: 33, district: 410
	},
	{
		id: 24874, name: "Xã Liêng S'roin", province: 33, district: 410
	},
	{
		id: 24875, name: "Xã Đạ Rsal", province: 33, district: 410
	},
	{
		id: 24877, name: "Xã Rô Men", province: 33, district: 410
	},
	{
		id: 24886, name: "Xã Phi Liêng", province: 33, district: 410
	},
	{
		id: 24889, name: "Xã Đạ Knàng", province: 33, district: 410
	},
	{
		id: 5971, name: "Phường Hoàng Văn Thụ", province: 34, district: 411
	},
	{
		id: 5974, name: "Phường Tam Thanh", province: 34, district: 411
	},
	{
		id: 5977, name: "Phường Vĩnh Trại", province: 34, district: 411
	},
	{
		id: 5980, name: "Phường Đông Kinh", province: 34, district: 411
	},
	{
		id: 5983, name: "Phường Chi Lăng", province: 34, district: 411
	},
	{
		id: 5986, name: "Xã Hoàng Đồng", province: 34, district: 411
	},
	{
		id: 5989, name: "Xã Quảng Lạc", province: 34, district: 411
	},
	{
		id: 5992, name: "Xã Mai Pha", province: 34, district: 411
	},
	{
		id: 5995, name: "Thị trấn Thất Khê", province: 34, district: 412
	},
	{
		id: 5998, name: "Xã Khánh Long", province: 34, district: 412
	},
	{
		id: 6001, name: "Xã Đoàn Kết", province: 34, district: 412
	},
	{
		id: 6004, name: "Xã Quốc Khánh", province: 34, district: 412
	},
	{
		id: 6007, name: "Xã Vĩnh Tiến", province: 34, district: 412
	},
	{
		id: 6010, name: "Xã Cao Minh", province: 34, district: 412
	},
	{
		id: 6013, name: "Xã Chí Minh", province: 34, district: 412
	},
	{
		id: 6016, name: "Xã Tri Phương", province: 34, district: 412
	},
	{
		id: 6019, name: "Xã Tân Tiến", province: 34, district: 412
	},
	{
		id: 6022, name: "Xã Tân Yên", province: 34, district: 412
	},
	{
		id: 6025, name: "Xã Đội Cấn", province: 34, district: 412
	},
	{
		id: 6028, name: "Xã Tân Minh", province: 34, district: 412
	},
	{
		id: 6031, name: "Xã Kim Đồng", province: 34, district: 412
	},
	{
		id: 6034, name: "Xã Chi Lăng", province: 34, district: 412
	},
	{
		id: 6037, name: "Xã Trung Thành", province: 34, district: 412
	},
	{
		id: 6040, name: "Xã Đại Đồng", province: 34, district: 412
	},
	{
		id: 6043, name: "Xã Đào Viên", province: 34, district: 412
	},
	{
		id: 6046, name: "Xã Đề Thám", province: 34, district: 412
	},
	{
		id: 6049, name: "Xã Kháng Chiến", province: 34, district: 412
	},
	{
		id: 6052, name: "Xã Bắc Ái", province: 34, district: 412
	},
	{
		id: 6055, name: "Xã Hùng Sơn", province: 34, district: 412
	},
	{
		id: 6058, name: "Xã Quốc Việt", province: 34, district: 412
	},
	{
		id: 6061, name: "Xã Hùng Việt", province: 34, district: 412
	},
	{
		id: 6064, name: "Thị trấn Bình Gia", province: 34, district: 413
	},
	{
		id: 6067, name: "Xã Hưng Đạo", province: 34, district: 413
	},
	{
		id: 6070, name: "Xã Vĩnh Yên", province: 34, district: 413
	},
	{
		id: 6073, name: "Xã Hoa Thám", province: 34, district: 413
	},
	{
		id: 6076, name: "Xã Quý Hòa", province: 34, district: 413
	},
	{
		id: 6079, name: "Xã Hồng Phong", province: 34, district: 413
	},
	{
		id: 6082, name: "Xã Yên Lỗ", province: 34, district: 413
	},
	{
		id: 6085, name: "Xã Thiện Hòa", province: 34, district: 413
	},
	{
		id: 6088, name: "Xã Quang Trung", province: 34, district: 413
	},
	{
		id: 6091, name: "Xã Thiện Thuật", province: 34, district: 413
	},
	{
		id: 6094, name: "Xã Minh Khai", province: 34, district: 413
	},
	{
		id: 6097, name: "Xã Thiện Long", province: 34, district: 413
	},
	{
		id: 6100, name: "Xã Hoàng Văn Thụ", province: 34, district: 413
	},
	{
		id: 6103, name: "Xã Hòa Bình", province: 34, district: 413
	},
	{
		id: 6106, name: "Xã Mông Ân", province: 34, district: 413
	},
	{
		id: 6109, name: "Xã Tân Hòa", province: 34, district: 413
	},
	{
		id: 6112, name: "Xã Tô Hiệu", province: 34, district: 413
	},
	{
		id: 6115, name: "Xã Hồng Thái", province: 34, district: 413
	},
	{
		id: 6118, name: "Xã Bình La", province: 34, district: 413
	},
	{
		id: 6121, name: "Xã Tân Văn", province: 34, district: 413
	},
	{
		id: 6124, name: "Thị trấn Na Sầm", province: 34, district: 414
	},
	{
		id: 6127, name: "Xã Trùng Khánh", province: 34, district: 414
	},
	{
		id: 6130, name: "Xã Tân Việt", province: 34, district: 414
	},
	{
		id: 6133, name: "Xã Bắc La", province: 34, district: 414
	},
	{
		id: 6136, name: "Xã Thụy Hùng", province: 34, district: 414
	},
	{
		id: 6139, name: "Xã Trùng Quán", province: 34, district: 414
	},
	{
		id: 6142, name: "Xã Tân Tác", province: 34, district: 414
	},
	{
		id: 6145, name: "Xã An Hùng", province: 34, district: 414
	},
	{
		id: 6148, name: "Xã Thanh Long", province: 34, district: 414
	},
	{
		id: 6151, name: "Xã Hội Hoan", province: 34, district: 414
	},
	{
		id: 6154, name: "Xã Tân Lang", province: 34, district: 414
	},
	{
		id: 6157, name: "Xã Hoàng Việt", province: 34, district: 414
	},
	{
		id: 6160, name: "Xã Gia Miễn", province: 34, district: 414
	},
	{
		id: 6163, name: "Xã Thành Hòa", province: 34, district: 414
	},
	{
		id: 6166, name: "Xã Tân Thanh", province: 34, district: 414
	},
	{
		id: 6169, name: "Xã Nam La", province: 34, district: 414
	},
	{
		id: 6172, name: "Xã Tân Mỹ", province: 34, district: 414
	},
	{
		id: 6175, name: "Xã Hồng Thái", province: 34, district: 414
	},
	{
		id: 6178, name: "Xã Hoàng Văn Thụ", province: 34, district: 414
	},
	{
		id: 6181, name: "Xã Nhạc Kỳ", province: 34, district: 414
	},
	{
		id: 6325, name: "Thị trấn Bắc Sơn", province: 34, district: 415
	},
	{
		id: 6328, name: "Xã Long Đống", province: 34, district: 415
	},
	{
		id: 6331, name: "Xã Vạn Thủy", province: 34, district: 415
	},
	{
		id: 6334, name: "Xã Quỳnh Sơn", province: 34, district: 415
	},
	{
		id: 6337, name: "Xã Đồng Ý", province: 34, district: 415
	},
	{
		id: 6340, name: "Xã Tân Tri", province: 34, district: 415
	},
	{
		id: 6343, name: "Xã Bắc Sơn", province: 34, district: 415
	},
	{
		id: 6346, name: "Xã Hữu Vĩnh", province: 34, district: 415
	},
	{
		id: 6349, name: "Xã Hưng Vũ", province: 34, district: 415
	},
	{
		id: 6352, name: "Xã Tân Lập", province: 34, district: 415
	},
	{
		id: 6355, name: "Xã Vũ Sơn", province: 34, district: 415
	},
	{
		id: 6358, name: "Xã Chiêu Vũ", province: 34, district: 415
	},
	{
		id: 6361, name: "Xã Tân Hương", province: 34, district: 415
	},
	{
		id: 6364, name: "Xã Chiến Thắng", province: 34, district: 415
	},
	{
		id: 6367, name: "Xã Vũ Lăng", province: 34, district: 415
	},
	{
		id: 6370, name: "Xã Trấn Yên", province: 34, district: 415
	},
	{
		id: 6373, name: "Xã Vũ Lễ", province: 34, district: 415
	},
	{
		id: 6376, name: "Xã Nhất Hòa", province: 34, district: 415
	},
	{
		id: 6379, name: "Xã Tân Thành", province: 34, district: 415
	},
	{
		id: 6382, name: "Xã Nhất Tiến", province: 34, district: 415
	},
	{
		id: 6253, name: "Thị trấn Văn Quan", province: 34, district: 416
	},
	{
		id: 6256, name: "Xã Trấn Ninh", province: 34, district: 416
	},
	{
		id: 6259, name: "Xã Phú Mỹ", province: 34, district: 416
	},
	{
		id: 6262, name: "Xã Việt Yên", province: 34, district: 416
	},
	{
		id: 6265, name: "Xã Song Giang", province: 34, district: 416
	},
	{
		id: 6268, name: "Xã Vân Mộng", province: 34, district: 416
	},
	{
		id: 6271, name: "Xã Vĩnh Lại", province: 34, district: 416
	},
	{
		id: 6274, name: "Xã Hòa Bình", province: 34, district: 416
	},
	{
		id: 6277, name: "Xã Tú Xuyên", province: 34, district: 416
	},
	{
		id: 6280, name: "Xã Văn An", province: 34, district: 416
	},
	{
		id: 6283, name: "Xã Đại An", province: 34, district: 416
	},
	{
		id: 6286, name: "Xã Khánh Khê", province: 34, district: 416
	},
	{
		id: 6289, name: "Xã Chu Túc", province: 34, district: 416
	},
	{
		id: 6292, name: "Xã Lương Năng", province: 34, district: 416
	},
	{
		id: 6295, name: "Xã Đồng Giáp", province: 34, district: 416
	},
	{
		id: 6298, name: "Xã Xuân Mai", province: 34, district: 416
	},
	{
		id: 6301, name: "Xã Tràng Các", province: 34, district: 416
	},
	{
		id: 6304, name: "Xã Tràng Sơn", province: 34, district: 416
	},
	{
		id: 6307, name: "Xã Tân Đoàn", province: 34, district: 416
	},
	{
		id: 6310, name: "Xã Bình Phúc", province: 34, district: 416
	},
	{
		id: 6313, name: "Xã Tri Lễ", province: 34, district: 416
	},
	{
		id: 6316, name: "Xã Tràng Phái", province: 34, district: 416
	},
	{
		id: 6319, name: "Xã Yên Phúc", province: 34, district: 416
	},
	{
		id: 6322, name: "Xã Hữu Lễ", province: 34, district: 416
	},
	{
		id: 6184, name: "Thị trấn Đồng Đăng", province: 34, district: 417
	},
	{
		id: 6187, name: "Thị trấn Cao Lộc", province: 34, district: 417
	},
	{
		id: 6190, name: "Xã Bảo Lâm", province: 34, district: 417
	},
	{
		id: 6193, name: "Xã Thanh Loà", province: 34, district: 417
	},
	{
		id: 6196, name: "Xã Cao Lâu", province: 34, district: 417
	},
	{
		id: 6199, name: "Xã Thạch Đạn", province: 34, district: 417
	},
	{
		id: 6202, name: "Xã Xuất Lễ", province: 34, district: 417
	},
	{
		id: 6205, name: "Xã Hồng Phong", province: 34, district: 417
	},
	{
		id: 6208, name: "Xã Thụy Hùng", province: 34, district: 417
	},
	{
		id: 6211, name: "Xã Lộc Yên", province: 34, district: 417
	},
	{
		id: 6214, name: "Xã Phú Xá", province: 34, district: 417
	},
	{
		id: 6217, name: "Xã Bình Trung", province: 34, district: 417
	},
	{
		id: 6220, name: "Xã Hải Yến", province: 34, district: 417
	},
	{
		id: 6223, name: "Xã Hòa Cư", province: 34, district: 417
	},
	{
		id: 6226, name: "Xã Hợp Thành", province: 34, district: 417
	},
	{
		id: 6229, name: "Xã Song Giáp", province: 34, district: 417
	},
	{
		id: 6232, name: "Xã Công Sơn", province: 34, district: 417
	},
	{
		id: 6235, name: "Xã Gia Cát", province: 34, district: 417
	},
	{
		id: 6238, name: "Xã Mẫu Sơn", province: 34, district: 417
	},
	{
		id: 6241, name: "Xã Xuân Long", province: 34, district: 417
	},
	{
		id: 6244, name: "Xã Tân Liên", province: 34, district: 417
	},
	{
		id: 6247, name: "Xã Yên Trạch", province: 34, district: 417
	},
	{
		id: 6250, name: "Xã Tân Thành", province: 34, district: 417
	},
	{
		id: 6526, name: "Thị trấn Na Dương", province: 34, district: 418
	},
	{
		id: 6529, name: "Thị trấn Lộc Bình", province: 34, district: 418
	},
	{
		id: 6532, name: "Xã Mẫu Sơn", province: 34, district: 418
	},
	{
		id: 6535, name: "Xã Bằng Khánh", province: 34, district: 418
	},
	{
		id: 6538, name: "Xã Xuân Lễ", province: 34, district: 418
	},
	{
		id: 6541, name: "Xã Yên Khoái", province: 34, district: 418
	},
	{
		id: 6544, name: "Xã Xuân Mãn", province: 34, district: 418
	},
	{
		id: 6547, name: "Xã Tú Mịch", province: 34, district: 418
	},
	{
		id: 6550, name: "Xã Hữu Khánh", province: 34, district: 418
	},
	{
		id: 6553, name: "Xã Đồng Bục", province: 34, district: 418
	},
	{
		id: 6556, name: "Xã Vân Mộng", province: 34, district: 418
	},
	{
		id: 6559, name: "Xã Tam Gia", province: 34, district: 418
	},
	{
		id: 6562, name: "Xã Tú Đoạn", province: 34, district: 418
	},
	{
		id: 6565, name: "Xã Khuất Xá", province: 34, district: 418
	},
	{
		id: 6568, name: "Xã Như Khuê", province: 34, district: 418
	},
	{
		id: 6571, name: "Xã Lục Thôn", province: 34, district: 418
	},
	{
		id: 6574, name: "Xã Tĩnh Bắc", province: 34, district: 418
	},
	{
		id: 6577, name: "Xã Xuân Tình", province: 34, district: 418
	},
	{
		id: 6580, name: "Xã Hiệp Hạ", province: 34, district: 418
	},
	{
		id: 6583, name: "Xã Nhượng Bạn", province: 34, district: 418
	},
	{
		id: 6586, name: "Xã Quan Bản", province: 34, district: 418
	},
	{
		id: 6589, name: "Xã Sàn Viên", province: 34, district: 418
	},
	{
		id: 6592, name: "Xã Đông Quan", province: 34, district: 418
	},
	{
		id: 6595, name: "Xã Minh Phát", province: 34, district: 418
	},
	{
		id: 6598, name: "Xã Hữu Lân", province: 34, district: 418
	},
	{
		id: 6601, name: "Xã Lợi Bác", province: 34, district: 418
	},
	{
		id: 6604, name: "Xã Nam Quan", province: 34, district: 418
	},
	{
		id: 6607, name: "Xã Xuân Dương", province: 34, district: 418
	},
	{
		id: 6610, name: "Xã Ái Quốc", province: 34, district: 418
	},
	{
		id: 6463, name: "Thị trấn Đồng Mỏ", province: 34, district: 419
	},
	{
		id: 6466, name: "Thị trấn Chi Lăng", province: 34, district: 419
	},
	{
		id: 6469, name: "Xã Vân An", province: 34, district: 419
	},
	{
		id: 6472, name: "Xã Vân Thủy", province: 34, district: 419
	},
	{
		id: 6475, name: "Xã Gia Lộc", province: 34, district: 419
	},
	{
		id: 6478, name: "Xã Bắc Thủy", province: 34, district: 419
	},
	{
		id: 6481, name: "Xã Chiến Thắng", province: 34, district: 419
	},
	{
		id: 6484, name: "Xã Mai Sao", province: 34, district: 419
	},
	{
		id: 6487, name: "Xã Bằng Hữu", province: 34, district: 419
	},
	{
		id: 6490, name: "Xã Thượng Cường", province: 34, district: 419
	},
	{
		id: 6493, name: "Xã Bằng Mạc", province: 34, district: 419
	},
	{
		id: 6496, name: "Xã Nhân Lý", province: 34, district: 419
	},
	{
		id: 6499, name: "Xã Lâm Sơn", province: 34, district: 419
	},
	{
		id: 6502, name: "Xã Liên Sơn", province: 34, district: 419
	},
	{
		id: 6505, name: "Xã Vạn Linh", province: 34, district: 419
	},
	{
		id: 6508, name: "Xã Hòa Bình", province: 34, district: 419
	},
	{
		id: 6511, name: "Xã Quang Lang", province: 34, district: 419
	},
	{
		id: 6514, name: "Xã Hữu Kiên", province: 34, district: 419
	},
	{
		id: 6517, name: "Xã Quan Sơn", province: 34, district: 419
	},
	{
		id: 6520, name: "Xã Y Tịch", province: 34, district: 419
	},
	{
		id: 6523, name: "Xã Chi Lăng", province: 34, district: 419
	},
	{
		id: 6613, name: "Thị trấn Đình Lập", province: 34, district: 420
	},
	{
		id: 6616, name: "Thị trấn N T Thái Bình", province: 34, district: 420
	},
	{
		id: 6619, name: "Xã Bắc Xa", province: 34, district: 420
	},
	{
		id: 6622, name: "Xã Bính Xá", province: 34, district: 420
	},
	{
		id: 6625, name: "Xã Kiên Mộc", province: 34, district: 420
	},
	{
		id: 6628, name: "Xã Đình Lập", province: 34, district: 420
	},
	{
		id: 6631, name: "Xã Thái Bình", province: 34, district: 420
	},
	{
		id: 6634, name: "Xã Cường Lợi", province: 34, district: 420
	},
	{
		id: 6637, name: "Xã Châu Sơn", province: 34, district: 420
	},
	{
		id: 6640, name: "Xã Lâm Ca", province: 34, district: 420
	},
	{
		id: 6643, name: "Xã Đồng Thắng", province: 34, district: 420
	},
	{
		id: 6646, name: "Xã Bắc Lãng", province: 34, district: 420
	},
	{
		id: 6385, name: "Thị trấn Hữu Lũng", province: 34, district: 421
	},
	{
		id: 6388, name: "Xã Hữu Liên", province: 34, district: 421
	},
	{
		id: 6391, name: "Xã Yên Bình", province: 34, district: 421
	},
	{
		id: 6394, name: "Xã Quyết Thắng", province: 34, district: 421
	},
	{
		id: 6397, name: "Xã Hòa Bình", province: 34, district: 421
	},
	{
		id: 6400, name: "Xã Yên Thịnh", province: 34, district: 421
	},
	{
		id: 6403, name: "Xã Yên Sơn", province: 34, district: 421
	},
	{
		id: 6406, name: "Xã Thiện Kỵ", province: 34, district: 421
	},
	{
		id: 6409, name: "Xã Tân Lập", province: 34, district: 421
	},
	{
		id: 6412, name: "Xã Yên Vượng", province: 34, district: 421
	},
	{
		id: 6415, name: "Xã Minh Tiến", province: 34, district: 421
	},
	{
		id: 6418, name: "Xã Nhật Tiến", province: 34, district: 421
	},
	{
		id: 6421, name: "Xã Thanh Sơn", province: 34, district: 421
	},
	{
		id: 6424, name: "Xã Đồng Tân", province: 34, district: 421
	},
	{
		id: 6427, name: "Xã Cai Kinh", province: 34, district: 421
	},
	{
		id: 6430, name: "Xã Hòa Lạc", province: 34, district: 421
	},
	{
		id: 6433, name: "Xã Vân Nham", province: 34, district: 421
	},
	{
		id: 6436, name: "Xã Đồng Tiến", province: 34, district: 421
	},
	{
		id: 6439, name: "Xã Đô Lương", province: 34, district: 421
	},
	{
		id: 6442, name: "Xã Tân Thành", province: 34, district: 421
	},
	{
		id: 6445, name: "Xã Hòa Sơn", province: 34, district: 421
	},
	{
		id: 6448, name: "Xã Minh Sơn", province: 34, district: 421
	},
	{
		id: 6451, name: "Xã Hồ Sơn", province: 34, district: 421
	},
	{
		id: 6454, name: "Xã Sơn Hà", province: 34, district: 421
	},
	{
		id: 6457, name: "Xã Minh Hòa", province: 34, district: 421
	},
	{
		id: 6460, name: "Xã Hòa Thắng", province: 34, district: 421
	},
	{
		id: 2635, name: "Phường Duyên Hải", province: 35, district: 390
	},
	{
		id: 2638, name: "Phường Lào Cai", province: 35, district: 390
	},
	{
		id: 2641, name: "Phường Phố Mới", province: 35, district: 390
	},
	{
		id: 2644, name: "Phường Cốc Lếu", province: 35, district: 390
	},
	{
		id: 2647, name: "Phường Kim Tân", province: 35, district: 390
	},
	{
		id: 2650, name: "Phường Bắc Lệnh", province: 35, district: 390
	},
	{
		id: 2653, name: "Phường Pom Hán", province: 35, district: 390
	},
	{
		id: 2656, name: "Phường Xuân Tăng", province: 35, district: 390
	},
	{
		id: 2658, name: "Phường Bình Minh", province: 35, district: 390
	},
	{
		id: 2659, name: "Phường Thống Nhất", province: 35, district: 390
	},
	{
		id: 2662, name: "Xã Đồng Tuyển", province: 35, district: 390
	},
	{
		id: 2665, name: "Xã Vạn Hoà", province: 35, district: 390
	},
	{
		id: 2668, name: "Phường Bắc Cường", province: 35, district: 390
	},
	{
		id: 2671, name: "Phường Nam Cường", province: 35, district: 390
	},
	{
		id: 2674, name: "Xã Cam Đường", province: 35, district: 390
	},
	{
		id: 2677, name: "Xã Tả Phời", province: 35, district: 390
	},
	{
		id: 2680, name: "Xã Hợp Thành", province: 35, district: 390
	},
	{
		id: 2800, name: "Xã Nàn Sán", province: 35, district: 391
	},
	{
		id: 2803, name: "Xã Thào Chư Phìn", province: 35, district: 391
	},
	{
		id: 2806, name: "Xã Bản Mế", province: 35, district: 391
	},
	{
		id: 2809, name: "Xã Si Ma Cai", province: 35, district: 391
	},
	{
		id: 2812, name: "Xã Sán Chải", province: 35, district: 391
	},
	{
		id: 2815, name: "Xã Mản Thẩn", province: 35, district: 391
	},
	{
		id: 2818, name: "Xã Lùng Sui", province: 35, district: 391
	},
	{
		id: 2821, name: "Xã Cán Cấu", province: 35, district: 391
	},
	{
		id: 2824, name: "Xã Sín Chéng", province: 35, district: 391
	},
	{
		id: 2827, name: "Xã Cán Hồ", province: 35, district: 391
	},
	{
		id: 2830, name: "Xã Quan Thần Sán", province: 35, district: 391
	},
	{
		id: 2833, name: "Xã Lử Thẩn", province: 35, district: 391
	},
	{
		id: 2836, name: "Xã Nàn Xín", province: 35, district: 391
	},
	{
		id: 2683, name: "Thị trấn Bát Xát", province: 35, district: 392
	},
	{
		id: 2686, name: "Xã A Mú Sung", province: 35, district: 392
	},
	{
		id: 2689, name: "Xã Nậm Chạc", province: 35, district: 392
	},
	{
		id: 2692, name: "Xã A Lù", province: 35, district: 392
	},
	{
		id: 2695, name: "Xã Trịnh Tường", province: 35, district: 392
	},
	{
		id: 2698, name: "Xã Ngải Thầu", province: 35, district: 392
	},
	{
		id: 2701, name: "Xã Y Tý", province: 35, district: 392
	},
	{
		id: 2704, name: "Xã Cốc Mỳ", province: 35, district: 392
	},
	{
		id: 2707, name: "Xã Dền Sáng", province: 35, district: 392
	},
	{
		id: 2710, name: "Xã Bản Vược", province: 35, district: 392
	},
	{
		id: 2713, name: "Xã Sàng Ma Sáo", province: 35, district: 392
	},
	{
		id: 2716, name: "Xã Bản Qua", province: 35, district: 392
	},
	{
		id: 2719, name: "Xã Mường Vi", province: 35, district: 392
	},
	{
		id: 2722, name: "Xã Dền Thàng", province: 35, district: 392
	},
	{
		id: 2725, name: "Xã Bản Xèo", province: 35, district: 392
	},
	{
		id: 2728, name: "Xã Mường Hum", province: 35, district: 392
	},
	{
		id: 2731, name: "Xã Trung Lèng Hồ", province: 35, district: 392
	},
	{
		id: 2734, name: "Xã Quang Kim", province: 35, district: 392
	},
	{
		id: 2737, name: "Xã Pa Cheo", province: 35, district: 392
	},
	{
		id: 2740, name: "Xã Nậm Pung", province: 35, district: 392
	},
	{
		id: 2743, name: "Xã Phìn Ngan", province: 35, district: 392
	},
	{
		id: 2746, name: "Xã Cốc San", province: 35, district: 392
	},
	{
		id: 2749, name: "Xã Tòng Sành", province: 35, district: 392
	},
	{
		id: 2902, name: "Thị trấn N.t Phong Hải", province: 35, district: 393
	},
	{
		id: 2905, name: "Thị trấn Phố Lu", province: 35, district: 393
	},
	{
		id: 2908, name: "Thị trấn Tằng Loỏng", province: 35, district: 393
	},
	{
		id: 2911, name: "Xã Bản Phiệt", province: 35, district: 393
	},
	{
		id: 2914, name: "Xã Bản Cầm", province: 35, district: 393
	},
	{
		id: 2917, name: "Xã Thái Niên", province: 35, district: 393
	},
	{
		id: 2920, name: "Xã Phong Niên", province: 35, district: 393
	},
	{
		id: 2923, name: "Xã Gia Phú", province: 35, district: 393
	},
	{
		id: 2926, name: "Xã Xuân Quang", province: 35, district: 393
	},
	{
		id: 2929, name: "Xã Sơn Hải", province: 35, district: 393
	},
	{
		id: 2932, name: "Xã Xuân Giao", province: 35, district: 393
	},
	{
		id: 2935, name: "Xã Trì Quang", province: 35, district: 393
	},
	{
		id: 2938, name: "Xã Sơn Hà", province: 35, district: 393
	},
	{
		id: 2941, name: "Xã Phố Lu", province: 35, district: 393
	},
	{
		id: 2944, name: "Xã Phú Nhuận", province: 35, district: 393
	},
	{
		id: 3001, name: "Thị trấn Sa Pa", province: 35, district: 394
	},
	{
		id: 3004, name: "Xã Bản Khoang", province: 35, district: 394
	},
	{
		id: 3007, name: "Xã Tả Giàng Phình", province: 35, district: 394
	},
	{
		id: 3010, name: "Xã Trung Chải", province: 35, district: 394
	},
	{
		id: 3013, name: "Xã Tả Phìn", province: 35, district: 394
	},
	{
		id: 3016, name: "Xã Sa Pả", province: 35, district: 394
	},
	{
		id: 3019, name: "Xã San Sả Hồ", province: 35, district: 394
	},
	{
		id: 3022, name: "Xã Bản Phùng", province: 35, district: 394
	},
	{
		id: 3025, name: "Xã Hầu Thào", province: 35, district: 394
	},
	{
		id: 3028, name: "Xã Lao Chải", province: 35, district: 394
	},
	{
		id: 3031, name: "Xã Thanh Kim", province: 35, district: 394
	},
	{
		id: 3034, name: "Xã Suối Thầu", province: 35, district: 394
	},
	{
		id: 3037, name: "Xã Sử Pán", province: 35, district: 394
	},
	{
		id: 3040, name: "Xã Tả Van", province: 35, district: 394
	},
	{
		id: 3043, name: "Xã Thanh Phú", province: 35, district: 394
	},
	{
		id: 3046, name: "Xã Bản Hồ", province: 35, district: 394
	},
	{
		id: 3049, name: "Xã Nậm Sài", province: 35, district: 394
	},
	{
		id: 3052, name: "Xã Nậm Cang", province: 35, district: 394
	},
	{
		id: 3055, name: "Thị trấn Khánh Yên", province: 35, district: 395
	},
	{
		id: 3058, name: "Xã Văn Sơn", province: 35, district: 395
	},
	{
		id: 3061, name: "Xã Võ Lao", province: 35, district: 395
	},
	{
		id: 3064, name: "Xã Sơn Thuỷ", province: 35, district: 395
	},
	{
		id: 3067, name: "Xã Nậm Mả", province: 35, district: 395
	},
	{
		id: 3070, name: "Xã Tân Thượng", province: 35, district: 395
	},
	{
		id: 3073, name: "Xã Nậm Rạng", province: 35, district: 395
	},
	{
		id: 3076, name: "Xã Nậm Chầy", province: 35, district: 395
	},
	{
		id: 3079, name: "Xã Tân An", province: 35, district: 395
	},
	{
		id: 3082, name: "Xã Khánh Yên Thượng", province: 35, district: 395
	},
	{
		id: 3085, name: "Xã Nậm Xé", province: 35, district: 395
	},
	{
		id: 3088, name: "Xã Dần Thàng", province: 35, district: 395
	},
	{
		id: 3091, name: "Xã Chiềng Ken", province: 35, district: 395
	},
	{
		id: 3094, name: "Xã Làng Giàng", province: 35, district: 395
	},
	{
		id: 3097, name: "Xã Hoà Mạc", province: 35, district: 395
	},
	{
		id: 3100, name: "Xã Khánh Yên Trung", province: 35, district: 395
	},
	{
		id: 3103, name: "Xã Khánh Yên Hạ", province: 35, district: 395
	},
	{
		id: 3106, name: "Xã Dương Quỳ", province: 35, district: 395
	},
	{
		id: 3109, name: "Xã Nậm Tha", province: 35, district: 395
	},
	{
		id: 3112, name: "Xã Minh Lương", province: 35, district: 395
	},
	{
		id: 3115, name: "Xã Thẩm Dương", province: 35, district: 395
	},
	{
		id: 3118, name: "Xã Liêm Phú", province: 35, district: 395
	},
	{
		id: 3121, name: "Xã Nậm Xây", province: 35, district: 395
	},
	{
		id: 2947, name: "Thị trấn Phố Ràng", province: 35, district: 396
	},
	{
		id: 2950, name: "Xã Tân Tiến", province: 35, district: 396
	},
	{
		id: 2953, name: "Xã Nghĩa Đô", province: 35, district: 396
	},
	{
		id: 2956, name: "Xã Vĩnh Yên", province: 35, district: 396
	},
	{
		id: 2959, name: "Xã Điện Quan", province: 35, district: 396
	},
	{
		id: 2962, name: "Xã Xuân Hoà", province: 35, district: 396
	},
	{
		id: 2965, name: "Xã Tân Dương", province: 35, district: 396
	},
	{
		id: 2968, name: "Xã Thượng Hà", province: 35, district: 396
	},
	{
		id: 2971, name: "Xã Kim Sơn", province: 35, district: 396
	},
	{
		id: 2974, name: "Xã Cam Cọn", province: 35, district: 396
	},
	{
		id: 2977, name: "Xã Minh Tân", province: 35, district: 396
	},
	{
		id: 2980, name: "Xã Xuân Thượng", province: 35, district: 396
	},
	{
		id: 2983, name: "Xã Việt Tiến", province: 35, district: 396
	},
	{
		id: 2986, name: "Xã Yên Sơn", province: 35, district: 396
	},
	{
		id: 2989, name: "Xã Bảo Hà", province: 35, district: 396
	},
	{
		id: 2992, name: "Xã Lương Sơn", province: 35, district: 396
	},
	{
		id: 2995, name: "Xã Long Phúc", province: 35, district: 396
	},
	{
		id: 2998, name: "Xã Long Khánh", province: 35, district: 396
	},
	{
		id: 2839, name: "Thị trấn Bắc Hà", province: 35, district: 397
	},
	{
		id: 2842, name: "Xã Lùng Cải", province: 35, district: 397
	},
	{
		id: 2845, name: "Xã Bản Già", province: 35, district: 397
	},
	{
		id: 2848, name: "Xã Lùng Phình", province: 35, district: 397
	},
	{
		id: 2851, name: "Xã Tả Van Chư", province: 35, district: 397
	},
	{
		id: 2854, name: "Xã Tả Củ Tỷ", province: 35, district: 397
	},
	{
		id: 2857, name: "Xã Thải Giàng Phố", province: 35, district: 397
	},
	{
		id: 2860, name: "Xã Lầu Thí Ngài", province: 35, district: 397
	},
	{
		id: 2863, name: "Xã Hoàng Thu Phố", province: 35, district: 397
	},
	{
		id: 2866, name: "Xã Bản Phố", province: 35, district: 397
	},
	{
		id: 2869, name: "Xã Bản Liền", province: 35, district: 397
	},
	{
		id: 2872, name: "Xã Tà Chải", province: 35, district: 397
	},
	{
		id: 2875, name: "Xã Na Hối", province: 35, district: 397
	},
	{
		id: 2878, name: "Xã Cốc Ly", province: 35, district: 397
	},
	{
		id: 2881, name: "Xã Nậm Mòn", province: 35, district: 397
	},
	{
		id: 2884, name: "Xã Nậm Đét", province: 35, district: 397
	},
	{
		id: 2887, name: "Xã Nậm Khánh", province: 35, district: 397
	},
	{
		id: 2890, name: "Xã Bảo Nhai", province: 35, district: 397
	},
	{
		id: 2893, name: "Xã Nậm Lúc", province: 35, district: 397
	},
	{
		id: 2896, name: "Xã Cốc Lầu", province: 35, district: 397
	},
	{
		id: 2899, name: "Xã Bản Cái", province: 35, district: 397
	},
	{
		id: 2752, name: "Xã Pha Long", province: 35, district: 398
	},
	{
		id: 2755, name: "Xã Tả Ngải Chồ", province: 35, district: 398
	},
	{
		id: 2758, name: "Xã Tung Chung Phố", province: 35, district: 398
	},
	{
		id: 2761, name: "Thị trấn Mường Khương", province: 35, district: 398
	},
	{
		id: 2764, name: "Xã Dìn Chin", province: 35, district: 398
	},
	{
		id: 2767, name: "Xã Tả Gia Khâu", province: 35, district: 398
	},
	{
		id: 2770, name: "Xã Nậm Chảy", province: 35, district: 398
	},
	{
		id: 2773, name: "Xã Nấm Lư", province: 35, district: 398
	},
	{
		id: 2776, name: "Xã Lùng Khấu Nhin", province: 35, district: 398
	},
	{
		id: 2779, name: "Xã Thanh Bình", province: 35, district: 398
	},
	{
		id: 2782, name: "Xã Cao Sơn", province: 35, district: 398
	},
	{
		id: 2785, name: "Xã Lùng Vai", province: 35, district: 398
	},
	{
		id: 2788, name: "Xã Bản Lầu", province: 35, district: 398
	},
	{
		id: 2791, name: "Xã La Pan Tẩn", province: 35, district: 398
	},
	{
		id: 2794, name: "Xã Tả Thàng", province: 35, district: 398
	},
	{
		id: 2797, name: "Xã Bản Sen", province: 35, district: 398
	},
	{
		id: 27685, name: "Phường 5", province: 36, district: 422
	},
	{
		id: 27688, name: "Phường 2", province: 36, district: 422
	},
	{
		id: 27691, name: "Phường 4", province: 36, district: 422
	},
	{
		id: 27692, name: "Phường Tân Khánh", province: 36, district: 422
	},
	{
		id: 27694, name: "Phường 1", province: 36, district: 422
	},
	{
		id: 27697, name: "Phường 3", province: 36, district: 422
	},
	{
		id: 27698, name: "Phường 7", province: 36, district: 422
	},
	{
		id: 27700, name: "Phường 6", province: 36, district: 422
	},
	{
		id: 27703, name: "Xã Hướng Thọ Phú", province: 36, district: 422
	},
	{
		id: 27706, name: "Xã Nhơn Thạnh Trung", province: 36, district: 422
	},
	{
		id: 27709, name: "Xã Lợi Bình Nhơn", province: 36, district: 422
	},
	{
		id: 27712, name: "Xã Bình Tâm", province: 36, district: 422
	},
	{
		id: 27715, name: "Phường Khánh Hậu", province: 36, district: 422
	},
	{
		id: 27718, name: "Xã An Vĩnh Ngãi", province: 36, district: 422
	},
	{
		id: 27757, name: "Thị trấn Vĩnh Hưng", province: 36, district: 423
	},
	{
		id: 27760, name: "Xã Hưng Điền A", province: 36, district: 423
	},
	{
		id: 27763, name: "Xã Khánh Hưng", province: 36, district: 423
	},
	{
		id: 27766, name: "Xã Thái Trị", province: 36, district: 423
	},
	{
		id: 27769, name: "Xã Vĩnh Trị", province: 36, district: 423
	},
	{
		id: 27772, name: "Xã Thái Bình Trung", province: 36, district: 423
	},
	{
		id: 27775, name: "Xã Vĩnh Bình", province: 36, district: 423
	},
	{
		id: 27778, name: "Xã Vĩnh Thuận", province: 36, district: 423
	},
	{
		id: 27781, name: "Xã Tuyên Bình", province: 36, district: 423
	},
	{
		id: 27784, name: "Xã Tuyên Bình Tây", province: 36, district: 423
	},
	{
		id: 27796, name: "Xã Bình Hòa Tây", province: 36, district: 424
	},
	{
		id: 27802, name: "Xã Bình Thạnh", province: 36, district: 424
	},
	{
		id: 27808, name: "Xã Bình Hòa Trung", province: 36, district: 424
	},
	{
		id: 27811, name: "Xã Bình Hòa Đông", province: 36, district: 424
	},
	{
		id: 27814, name: "Xã Bình Phong Thạnh", province: 36, district: 424
	},
	{
		id: 27820, name: "Xã Tân Lập", province: 36, district: 424
	},
	{
		id: 27823, name: "Xã Tân Thành", province: 36, district: 424
	},
	{
		id: 27826, name: "Thị trấn Tân Thạnh", province: 36, district: 425
	},
	{
		id: 27829, name: "Xã Bắc Hòa", province: 36, district: 425
	},
	{
		id: 27832, name: "Xã Hậu Thạnh Tây", province: 36, district: 425
	},
	{
		id: 27835, name: "Xã Nhơn Hòa Lập", province: 36, district: 425
	},
	{
		id: 27838, name: "Xã Tân Lập", province: 36, district: 425
	},
	{
		id: 27841, name: "Xã Hậu Thạnh Đông", province: 36, district: 425
	},
	{
		id: 27844, name: "Xã Nhơn Hoà", province: 36, district: 425
	},
	{
		id: 27847, name: "Xã Kiến Bình", province: 36, district: 425
	},
	{
		id: 27850, name: "Xã Tân Thành", province: 36, district: 425
	},
	{
		id: 27853, name: "Xã Tân Bình", province: 36, district: 425
	},
	{
		id: 27856, name: "Xã Tân Ninh", province: 36, district: 425
	},
	{
		id: 27859, name: "Xã Nhơn Ninh", province: 36, district: 425
	},
	{
		id: 27862, name: "Xã Tân Hòa", province: 36, district: 425
	},
	{
		id: 27865, name: "Thị trấn Thạnh Hóa", province: 36, district: 426
	},
	{
		id: 27868, name: "Xã Tân Hiệp", province: 36, district: 426
	},
	{
		id: 27871, name: "Xã Thuận Bình", province: 36, district: 426
	},
	{
		id: 27874, name: "Xã Thạnh Phước", province: 36, district: 426
	},
	{
		id: 27877, name: "Xã Thạnh Phú", province: 36, district: 426
	},
	{
		id: 27880, name: "Xã Thuận Nghĩa Hòa", province: 36, district: 426
	},
	{
		id: 27883, name: "Xã Thủy Đông", province: 36, district: 426
	},
	{
		id: 27886, name: "Xã Thủy Tây", province: 36, district: 426
	},
	{
		id: 27889, name: "Xã Tân Tây", province: 36, district: 426
	},
	{
		id: 27892, name: "Xã Tân Đông", province: 36, district: 426
	},
	{
		id: 27895, name: "Xã Thạnh An", province: 36, district: 426
	},
	{
		id: 27898, name: "Thị trấn Đông Thành", province: 36, district: 427
	},
	{
		id: 27901, name: "Xã Mỹ Quý Đông", province: 36, district: 427
	},
	{
		id: 27904, name: "Xã Mỹ Thạnh Bắc", province: 36, district: 427
	},
	{
		id: 27907, name: "Xã Mỹ Quý Tây", province: 36, district: 427
	},
	{
		id: 27910, name: "Xã Mỹ Thạnh Tây", province: 36, district: 427
	},
	{
		id: 27913, name: "Xã Mỹ Thạnh Đông", province: 36, district: 427
	},
	{
		id: 27916, name: "Xã Bình Thành", province: 36, district: 427
	},
	{
		id: 27919, name: "Xã Bình Hòa Bắc", province: 36, district: 427
	},
	{
		id: 27922, name: "Xã Bình Hòa Hưng", province: 36, district: 427
	},
	{
		id: 27925, name: "Xã Bình Hòa Nam", province: 36, district: 427
	},
	{
		id: 27928, name: "Xã Mỹ Bình", province: 36, district: 427
	},
	{
		id: 27931, name: "Thị trấn Hậu Nghĩa", province: 36, district: 428
	},
	{
		id: 27934, name: "Thị trấn Hiệp Hòa", province: 36, district: 428
	},
	{
		id: 27937, name: "Thị trấn Đức Hòa", province: 36, district: 428
	},
	{
		id: 27940, name: "Xã Lộc Giang", province: 36, district: 428
	},
	{
		id: 27943, name: "Xã An Ninh Đông", province: 36, district: 428
	},
	{
		id: 27946, name: "Xã An Ninh Tây", province: 36, district: 428
	},
	{
		id: 27949, name: "Xã Tân Mỹ", province: 36, district: 428
	},
	{
		id: 27952, name: "Xã Hiệp Hòa", province: 36, district: 428
	},
	{
		id: 27955, name: "Xã Đức Lập Thượng", province: 36, district: 428
	},
	{
		id: 27958, name: "Xã Đức Lập Hạ", province: 36, district: 428
	},
	{
		id: 27961, name: "Xã Tân Phú", province: 36, district: 428
	},
	{
		id: 27964, name: "Xã Mỹ Hạnh Bắc", province: 36, district: 428
	},
	{
		id: 27967, name: "Xã Đức Hòa Thượng", province: 36, district: 428
	},
	{
		id: 27970, name: "Xã Hòa Khánh Tây", province: 36, district: 428
	},
	{
		id: 27973, name: "Xã Hòa Khánh Đông", province: 36, district: 428
	},
	{
		id: 27976, name: "Xã Mỹ Hạnh Nam", province: 36, district: 428
	},
	{
		id: 27979, name: "Xã Hòa Khánh Nam", province: 36, district: 428
	},
	{
		id: 27982, name: "Xã Đức Hòa Đông", province: 36, district: 428
	},
	{
		id: 27985, name: "Xã Đức Hòa Hạ", province: 36, district: 428
	},
	{
		id: 27988, name: "Xã Hựu Thạnh", province: 36, district: 428
	},
	{
		id: 27991, name: "Thị trấn Bến Lức", province: 36, district: 429
	},
	{
		id: 27994, name: "Xã Thạnh Lợi", province: 36, district: 429
	},
	{
		id: 27997, name: "Xã Lương Bình", province: 36, district: 429
	},
	{
		id: 28000, name: "Xã Thạnh Hòa", province: 36, district: 429
	},
	{
		id: 28003, name: "Xã Lương Hòa", province: 36, district: 429
	},
	{
		id: 28006, name: "Xã Tân Hòa", province: 36, district: 429
	},
	{
		id: 28009, name: "Xã Tân Bửu", province: 36, district: 429
	},
	{
		id: 28012, name: "Xã An Thạnh", province: 36, district: 429
	},
	{
		id: 28015, name: "Xã Bình Đức", province: 36, district: 429
	},
	{
		id: 28018, name: "Xã Mỹ Yên", province: 36, district: 429
	},
	{
		id: 28021, name: "Xã Thanh Phú", province: 36, district: 429
	},
	{
		id: 28024, name: "Xã Long Hiệp", province: 36, district: 429
	},
	{
		id: 28027, name: "Xã Thạnh Đức", province: 36, district: 429
	},
	{
		id: 28030, name: "Xã Phước Lợi", province: 36, district: 429
	},
	{
		id: 28033, name: "Xã Nhựt Chánh", province: 36, district: 429
	},
	{
		id: 28036, name: "Thị trấn Thủ Thừa", province: 36, district: 430
	},
	{
		id: 28039, name: "Xã Long Thạnh", province: 36, district: 430
	},
	{
		id: 28042, name: "Xã Tân Thành", province: 36, district: 430
	},
	{
		id: 28045, name: "Xã Long Thuận", province: 36, district: 430
	},
	{
		id: 28048, name: "Xã Mỹ Lạc", province: 36, district: 430
	},
	{
		id: 28051, name: "Xã Mỹ Thạnh", province: 36, district: 430
	},
	{
		id: 28054, name: "Xã Bình An", province: 36, district: 430
	},
	{
		id: 28057, name: "Xã Nhị Thành", province: 36, district: 430
	},
	{
		id: 28060, name: "Xã Mỹ An", province: 36, district: 430
	},
	{
		id: 28063, name: "Xã Bình Thạnh", province: 36, district: 430
	},
	{
		id: 28066, name: "Xã Mỹ Phú", province: 36, district: 430
	},
	{
		id: 28069, name: "Xã Long Thành", province: 36, district: 430
	},
	{
		id: 28072, name: "Xã Tân Lập", province: 36, district: 430
	},
	{
		id: 28210, name: "Thị trấn Tầm Vu", province: 36, district: 431
	},
	{
		id: 28213, name: "Xã Bình Quới", province: 36, district: 431
	},
	{
		id: 28216, name: "Xã Hòa Phú", province: 36, district: 431
	},
	{
		id: 28219, name: "Xã Phú Ngãi Trị", province: 36, district: 431
	},
	{
		id: 28222, name: "Xã Vĩnh Công", province: 36, district: 431
	},
	{
		id: 28225, name: "Xã Thuận Mỹ", province: 36, district: 431
	},
	{
		id: 28228, name: "Xã Hiệp Thạnh", province: 36, district: 431
	},
	{
		id: 28231, name: "Xã Phước Tân Hưng", province: 36, district: 431
	},
	{
		id: 28234, name: "Xã Thanh Phú Long", province: 36, district: 431
	},
	{
		id: 28237, name: "Xã Dương Xuân Hội", province: 36, district: 431
	},
	{
		id: 28240, name: "Xã An Lục Long", province: 36, district: 431
	},
	{
		id: 28243, name: "Xã Long Trì", province: 36, district: 431
	},
	{
		id: 28246, name: "Xã Thanh Vĩnh Đông", province: 36, district: 431
	},
	{
		id: 28075, name: "Thị trấn Tân Trụ", province: 36, district: 432
	},
	{
		id: 28078, name: "Xã Mỹ Bình", province: 36, district: 432
	},
	{
		id: 28081, name: "Xã An Nhựt Tân", province: 36, district: 432
	},
	{
		id: 28084, name: "Xã Quê Mỹ Thạnh", province: 36, district: 432
	},
	{
		id: 28087, name: "Xã Lạc Tấn", province: 36, district: 432
	},
	{
		id: 28090, name: "Xã Bình Trinh Đông", province: 36, district: 432
	},
	{
		id: 28093, name: "Xã Tân Phước Tây", province: 36, district: 432
	},
	{
		id: 28096, name: "Xã Bình Lãng", province: 36, district: 432
	},
	{
		id: 28099, name: "Xã Bình Tịnh", province: 36, district: 432
	},
	{
		id: 28102, name: "Xã Đức Tân", province: 36, district: 432
	},
	{
		id: 28105, name: "Xã Nhựt Ninh", province: 36, district: 432
	},
	{
		id: 28108, name: "Thị trấn Cần Đước", province: 36, district: 433
	},
	{
		id: 28111, name: "Xã Long Trạch", province: 36, district: 433
	},
	{
		id: 28114, name: "Xã Long Khê", province: 36, district: 433
	},
	{
		id: 28117, name: "Xã Long Định", province: 36, district: 433
	},
	{
		id: 28120, name: "Xã Phước Vân", province: 36, district: 433
	},
	{
		id: 28123, name: "Xã Long Hòa", province: 36, district: 433
	},
	{
		id: 28126, name: "Xã Long Cang", province: 36, district: 433
	},
	{
		id: 28129, name: "Xã Long Sơn", province: 36, district: 433
	},
	{
		id: 28132, name: "Xã Tân Trạch", province: 36, district: 433
	},
	{
		id: 28135, name: "Xã Mỹ Lệ", province: 36, district: 433
	},
	{
		id: 28138, name: "Xã Tân Lân", province: 36, district: 433
	},
	{
		id: 28141, name: "Xã Phước Tuy", province: 36, district: 433
	},
	{
		id: 28144, name: "Xã Long Hựu Đông", province: 36, district: 433
	},
	{
		id: 28147, name: "Xã Tân Ân", province: 36, district: 433
	},
	{
		id: 28150, name: "Xã Phước Đông", province: 36, district: 433
	},
	{
		id: 28153, name: "Xã Long Hựu Tây", province: 36, district: 433
	},
	{
		id: 28156, name: "Xã Tân Chánh", province: 36, district: 433
	},
	{
		id: 28159, name: "Thị trấn Cần Giuộc", province: 36, district: 434
	},
	{
		id: 28162, name: "Xã Phước Lý", province: 36, district: 434
	},
	{
		id: 28165, name: "Xã Long Thượng", province: 36, district: 434
	},
	{
		id: 28168, name: "Xã Long Hậu", province: 36, district: 434
	},
	{
		id: 28171, name: "Xã Tân Kim", province: 36, district: 434
	},
	{
		id: 28174, name: "Xã Phứơc Hậu", province: 36, district: 434
	},
	{
		id: 28177, name: "Xã Mỹ Lộc", province: 36, district: 434
	},
	{
		id: 28180, name: "Xã Phước Lại", province: 36, district: 434
	},
	{
		id: 28183, name: "Xã Phước Lâm", province: 36, district: 434
	},
	{
		id: 28186, name: "Xã Trường Bình", province: 36, district: 434
	},
	{
		id: 28189, name: "Xã Thuận Thành", province: 36, district: 434
	},
	{
		id: 28192, name: "Xã Phước Vĩnh Tây", province: 36, district: 434
	},
	{
		id: 28195, name: "Xã Phước Vĩnh Đông", province: 36, district: 434
	},
	{
		id: 28198, name: "Xã Long An", province: 36, district: 434
	},
	{
		id: 28201, name: "Xã Long Phụng", province: 36, district: 434
	},
	{
		id: 28204, name: "Xã Đông Thạnh", province: 36, district: 434
	},
	{
		id: 28207, name: "Xã Tân Tập", province: 36, district: 434
	},
	{
		id: 27721, name: "Thị trấn Tân Hưng", province: 36, district: 435
	},
	{
		id: 27724, name: "Xã Hưng Hà", province: 36, district: 435
	},
	{
		id: 27727, name: "Xã Hưng Điền B", province: 36, district: 435
	},
	{
		id: 27730, name: "Xã Hưng Điền", province: 36, district: 435
	},
	{
		id: 27733, name: "Xã Thạnh Hưng", province: 36, district: 435
	},
	{
		id: 27736, name: "Xã Hưng Thạnh", province: 36, district: 435
	},
	{
		id: 27739, name: "Xã Vĩnh Thạnh", province: 36, district: 435
	},
	{
		id: 27742, name: "Xã Vĩnh Châu B", province: 36, district: 435
	},
	{
		id: 27745, name: "Xã Vĩnh Lợi", province: 36, district: 435
	},
	{
		id: 27748, name: "Xã Vĩnh Đại", province: 36, district: 435
	},
	{
		id: 27751, name: "Xã Vĩnh Châu A", province: 36, district: 435
	},
	{
		id: 27754, name: "Xã Vĩnh Bửu", province: 36, district: 435
	},
	{
		id: 27787, name: "Phường 1", province: 36, district: 748
	},
	{
		id: 27788, name: "Phường 2", province: 36, district: 748
	},
	{
		id: 27790, name: "Xã Thạnh Trị", province: 36, district: 748
	},
	{
		id: 27793, name: "Xã Bình Hiệp", province: 36, district: 748
	},
	{
		id: 27799, name: "Xã Bình Tân", province: 36, district: 748
	},
	{
		id: 27805, name: "Xã Tuyên Thạnh", province: 36, district: 748
	},
	{
		id: 27806, name: "Phường 3", province: 36, district: 748
	},
	{
		id: 27817, name: "Xã Thạnh Hưng", province: 36, district: 748
	},
	{
		id: 13633, name: "Phường Hạ Long", province: 37, district: 454
	},
	{
		id: 13636, name: "Phường Trần Tế Xương", province: 37, district: 454
	},
	{
		id: 13639, name: "Phường Vị Hoàng", province: 37, district: 454
	},
	{
		id: 13642, name: "Phường Vị Xuyên", province: 37, district: 454
	},
	{
		id: 13645, name: "Phường Quang Trung", province: 37, district: 454
	},
	{
		id: 13648, name: "Phường Cửa Bắc", province: 37, district: 454
	},
	{
		id: 13651, name: "Phường Nguyễn Du", province: 37, district: 454
	},
	{
		id: 13654, name: "Phường Bà Triệu", province: 37, district: 454
	},
	{
		id: 13657, name: "Phường Trường Thi", province: 37, district: 454
	},
	{
		id: 13660, name: "Phường Phan Đình Phùng", province: 37, district: 454
	},
	{
		id: 13663, name: "Phường Ngô Quyền", province: 37, district: 454
	},
	{
		id: 13666, name: "Phường Trần Hưng Đạo", province: 37, district: 454
	},
	{
		id: 13669, name: "Phường Trần Đăng Ninh", province: 37, district: 454
	},
	{
		id: 13672, name: "Phường Năng Tĩnh", province: 37, district: 454
	},
	{
		id: 13675, name: "Phường Văn Miếu", province: 37, district: 454
	},
	{
		id: 13678, name: "Phường Trần Quang Khải", province: 37, district: 454
	},
	{
		id: 13681, name: "Phường Thống Nhất", province: 37, district: 454
	},
	{
		id: 13684, name: "Phường Lộc Hạ", province: 37, district: 454
	},
	{
		id: 13687, name: "Phường Lộc Vượng", province: 37, district: 454
	},
	{
		id: 13690, name: "Phường Cửa Nam", province: 37, district: 454
	},
	{
		id: 13693, name: "Xã Lộc Hoà", province: 37, district: 454
	},
	{
		id: 13696, name: "Xã Nam Phong", province: 37, district: 454
	},
	{
		id: 13699, name: "Xã Mỹ Xá", province: 37, district: 454
	},
	{
		id: 13702, name: "Xã Lộc An", province: 37, district: 454
	},
	{
		id: 13705, name: "Xã Nam Vân", province: 37, district: 454
	},
	{
		id: 13708, name: "Thị trấn Mỹ Lộc", province: 37, district: 455
	},
	{
		id: 13711, name: "Xã Mỹ Hà", province: 37, district: 455
	},
	{
		id: 13714, name: "Xã Mỹ Tiến", province: 37, district: 455
	},
	{
		id: 13717, name: "Xã Mỹ Thắng", province: 37, district: 455
	},
	{
		id: 13720, name: "Xã Mỹ Trung", province: 37, district: 455
	},
	{
		id: 13723, name: "Xã Mỹ Tân", province: 37, district: 455
	},
	{
		id: 13726, name: "Xã Mỹ Phúc", province: 37, district: 455
	},
	{
		id: 13729, name: "Xã Mỹ Hưng", province: 37, district: 455
	},
	{
		id: 13732, name: "Xã Mỹ Thuận", province: 37, district: 455
	},
	{
		id: 13735, name: "Xã Mỹ Thịnh", province: 37, district: 455
	},
	{
		id: 13738, name: "Xã Mỹ Thành", province: 37, district: 455
	},
	{
		id: 14089, name: "Thị trấn Xuân Trường", province: 37, district: 456
	},
	{
		id: 14092, name: "Xã Xuân Châu", province: 37, district: 456
	},
	{
		id: 14095, name: "Xã Xuân Hồng", province: 37, district: 456
	},
	{
		id: 14098, name: "Xã Xuân Thành", province: 37, district: 456
	},
	{
		id: 14101, name: "Xã Xuân Thượng", province: 37, district: 456
	},
	{
		id: 14104, name: "Xã Xuân Phong", province: 37, district: 456
	},
	{
		id: 14107, name: "Xã Xuân Đài", province: 37, district: 456
	},
	{
		id: 14110, name: "Xã Xuân Tân", province: 37, district: 456
	},
	{
		id: 14113, name: "Xã Xuân Thủy", province: 37, district: 456
	},
	{
		id: 14116, name: "Xã Xuân Ngọc", province: 37, district: 456
	},
	{
		id: 14119, name: "Xã Xuân Bắc", province: 37, district: 456
	},
	{
		id: 14122, name: "Xã Xuân Phương", province: 37, district: 456
	},
	{
		id: 14125, name: "Xã Thọ Nghiệp", province: 37, district: 456
	},
	{
		id: 14128, name: "Xã Xuân Phú", province: 37, district: 456
	},
	{
		id: 14131, name: "Xã Xuân Trung", province: 37, district: 456
	},
	{
		id: 14134, name: "Xã Xuân Vinh", province: 37, district: 456
	},
	{
		id: 14137, name: "Xã Xuân Kiên", province: 37, district: 456
	},
	{
		id: 14140, name: "Xã Xuân Tiến", province: 37, district: 456
	},
	{
		id: 14143, name: "Xã Xuân Ninh", province: 37, district: 456
	},
	{
		id: 14146, name: "Xã Xuân Hòa", province: 37, district: 456
	},
	{
		id: 14149, name: "Thị trấn Ngô Đồng", province: 37, district: 457
	},
	{
		id: 14152, name: "Thị trấn Quất Lâm", province: 37, district: 457
	},
	{
		id: 14155, name: "Xã Giao Hương", province: 37, district: 457
	},
	{
		id: 14158, name: "Xã Hồng Thuận", province: 37, district: 457
	},
	{
		id: 14161, name: "Xã Giao Thiện", province: 37, district: 457
	},
	{
		id: 14164, name: "Xã Giao Thanh", province: 37, district: 457
	},
	{
		id: 14167, name: "Xã Hoành Sơn", province: 37, district: 457
	},
	{
		id: 14170, name: "Xã Bình Hòa", province: 37, district: 457
	},
	{
		id: 14173, name: "Xã Giao Tiến", province: 37, district: 457
	},
	{
		id: 14176, name: "Xã Giao Hà", province: 37, district: 457
	},
	{
		id: 14179, name: "Xã Giao Nhân", province: 37, district: 457
	},
	{
		id: 14182, name: "Xã Giao An", province: 37, district: 457
	},
	{
		id: 14185, name: "Xã Giao Lạc", province: 37, district: 457
	},
	{
		id: 14188, name: "Xã Giao Châu", province: 37, district: 457
	},
	{
		id: 14191, name: "Xã Giao Tân", province: 37, district: 457
	},
	{
		id: 14194, name: "Xã Giao Yến", province: 37, district: 457
	},
	{
		id: 14197, name: "Xã Giao Xuân", province: 37, district: 457
	},
	{
		id: 14200, name: "Xã Giao Thịnh", province: 37, district: 457
	},
	{
		id: 14203, name: "Xã Giao Hải", province: 37, district: 457
	},
	{
		id: 14206, name: "Xã Bạch Long", province: 37, district: 457
	},
	{
		id: 14209, name: "Xã Giao Long", province: 37, district: 457
	},
	{
		id: 14212, name: "Xã Giao Phong", province: 37, district: 457
	},
	{
		id: 13795, name: "Thị trấn Lâm", province: 37, district: 458
	},
	{
		id: 13798, name: "Xã Yên Trung", province: 37, district: 458
	},
	{
		id: 13801, name: "Xã Yên Thành", province: 37, district: 458
	},
	{
		id: 13804, name: "Xã Yên Tân", province: 37, district: 458
	},
	{
		id: 13807, name: "Xã Yên Lợi", province: 37, district: 458
	},
	{
		id: 13810, name: "Xã Yên Thọ", province: 37, district: 458
	},
	{
		id: 13813, name: "Xã Yên Nghĩa", province: 37, district: 458
	},
	{
		id: 13816, name: "Xã Yên Minh", province: 37, district: 458
	},
	{
		id: 13819, name: "Xã Yên Phương", province: 37, district: 458
	},
	{
		id: 13822, name: "Xã Yên Chính", province: 37, district: 458
	},
	{
		id: 13825, name: "Xã Yên Bình", province: 37, district: 458
	},
	{
		id: 13828, name: "Xã Yên Phú", province: 37, district: 458
	},
	{
		id: 13831, name: "Xã Yên Mỹ", province: 37, district: 458
	},
	{
		id: 13834, name: "Xã Yên Dương", province: 37, district: 458
	},
	{
		id: 13837, name: "Xã Yên Xá", province: 37, district: 458
	},
	{
		id: 13840, name: "Xã Yên Hưng", province: 37, district: 458
	},
	{
		id: 13843, name: "Xã Yên Khánh", province: 37, district: 458
	},
	{
		id: 13846, name: "Xã Yên Phong", province: 37, district: 458
	},
	{
		id: 13849, name: "Xã Yên Ninh", province: 37, district: 458
	},
	{
		id: 13852, name: "Xã Yên Lương", province: 37, district: 458
	},
	{
		id: 13855, name: "Xã Yên Hồng", province: 37, district: 458
	},
	{
		id: 13858, name: "Xã Yên Quang", province: 37, district: 458
	},
	{
		id: 13861, name: "Xã Yên Tiến", province: 37, district: 458
	},
	{
		id: 13864, name: "Xã Yên Thắng", province: 37, district: 458
	},
	{
		id: 13867, name: "Xã Yên Phúc", province: 37, district: 458
	},
	{
		id: 13870, name: "Xã Yên Cường", province: 37, district: 458
	},
	{
		id: 13873, name: "Xã Yên Lộc", province: 37, district: 458
	},
	{
		id: 13876, name: "Xã Yên Bằng", province: 37, district: 458
	},
	{
		id: 13879, name: "Xã Yên Đồng", province: 37, district: 458
	},
	{
		id: 13882, name: "Xã Yên Khang", province: 37, district: 458
	},
	{
		id: 13885, name: "Xã Yên Nhân", province: 37, district: 458
	},
	{
		id: 13888, name: "Xã Yên Trị", province: 37, district: 458
	},
	{
		id: 13741, name: "Thị trấn Gôi", province: 37, district: 459
	},
	{
		id: 13744, name: "Xã Minh Thuận", province: 37, district: 459
	},
	{
		id: 13747, name: "Xã Hiển Khánh", province: 37, district: 459
	},
	{
		id: 13750, name: "Xã Tân Khánh", province: 37, district: 459
	},
	{
		id: 13753, name: "Xã Hợp Hưng", province: 37, district: 459
	},
	{
		id: 13756, name: "Xã Đại An", province: 37, district: 459
	},
	{
		id: 13759, name: "Xã Tân Thành", province: 37, district: 459
	},
	{
		id: 13762, name: "Xã Cộng Hòa", province: 37, district: 459
	},
	{
		id: 13765, name: "Xã Trung Thành", province: 37, district: 459
	},
	{
		id: 13768, name: "Xã Quang Trung", province: 37, district: 459
	},
	{
		id: 13771, name: "Xã Minh Tân", province: 37, district: 459
	},
	{
		id: 13774, name: "Xã Liên Bảo", province: 37, district: 459
	},
	{
		id: 13777, name: "Xã Thành Lợi", province: 37, district: 459
	},
	{
		id: 13780, name: "Xã Kim Thái", province: 37, district: 459
	},
	{
		id: 13783, name: "Xã Liên Minh", province: 37, district: 459
	},
	{
		id: 13786, name: "Xã Đại Thắng", province: 37, district: 459
	},
	{
		id: 13789, name: "Xã Tam Thanh", province: 37, district: 459
	},
	{
		id: 13792, name: "Xã Vĩnh Hào", province: 37, district: 459
	},
	{
		id: 13966, name: "Thị trấn Nam Giang", province: 37, district: 460
	},
	{
		id: 13969, name: "Xã Nam Mỹ", province: 37, district: 460
	},
	{
		id: 13972, name: "Xã Điền Xá", province: 37, district: 460
	},
	{
		id: 13975, name: "Xã Nghĩa An", province: 37, district: 460
	},
	{
		id: 13978, name: "Xã Nam Thắng", province: 37, district: 460
	},
	{
		id: 13981, name: "Xã Nam Toàn", province: 37, district: 460
	},
	{
		id: 13984, name: "Xã Hồng Quang", province: 37, district: 460
	},
	{
		id: 13987, name: "Xã Tân Thịnh", province: 37, district: 460
	},
	{
		id: 13990, name: "Xã Nam Cường", province: 37, district: 460
	},
	{
		id: 13993, name: "Xã Nam Hồng", province: 37, district: 460
	},
	{
		id: 13996, name: "Xã Nam Hùng", province: 37, district: 460
	},
	{
		id: 13999, name: "Xã Nam Hoa", province: 37, district: 460
	},
	{
		id: 14002, name: "Xã Nam Dương", province: 37, district: 460
	},
	{
		id: 14005, name: "Xã Nam Thanh", province: 37, district: 460
	},
	{
		id: 14008, name: "Xã Nam Lợi", province: 37, district: 460
	},
	{
		id: 14011, name: "Xã Bình Minh", province: 37, district: 460
	},
	{
		id: 14014, name: "Xã Đồng Sơn", province: 37, district: 460
	},
	{
		id: 14017, name: "Xã Nam Tiến", province: 37, district: 460
	},
	{
		id: 14020, name: "Xã Nam Hải", province: 37, district: 460
	},
	{
		id: 14023, name: "Xã Nam Thái", province: 37, district: 460
	},
	{
		id: 14026, name: "Thị trấn Cổ Lễ", province: 37, district: 461
	},
	{
		id: 14029, name: "Xã Phương Định", province: 37, district: 461
	},
	{
		id: 14032, name: "Xã Trực Chính", province: 37, district: 461
	},
	{
		id: 14035, name: "Xã Trung Đông", province: 37, district: 461
	},
	{
		id: 14038, name: "Xã Liêm Hải", province: 37, district: 461
	},
	{
		id: 14041, name: "Xã Trực Tuấn", province: 37, district: 461
	},
	{
		id: 14044, name: "Xã Việt Hùng", province: 37, district: 461
	},
	{
		id: 14047, name: "Xã Trực Đạo", province: 37, district: 461
	},
	{
		id: 14050, name: "Xã Trực Hưng", province: 37, district: 461
	},
	{
		id: 14053, name: "Xã Trực Nội", province: 37, district: 461
	},
	{
		id: 14056, name: "Thị trấn Cát Thành", province: 37, district: 461
	},
	{
		id: 14059, name: "Xã Trực Thanh", province: 37, district: 461
	},
	{
		id: 14062, name: "Xã Trực Khang", province: 37, district: 461
	},
	{
		id: 14065, name: "Xã Trực Thuận", province: 37, district: 461
	},
	{
		id: 14068, name: "Xã Trực Mỹ", province: 37, district: 461
	},
	{
		id: 14071, name: "Xã Trực Đại", province: 37, district: 461
	},
	{
		id: 14074, name: "Xã Trực Cường", province: 37, district: 461
	},
	{
		id: 14077, name: "Xã Trực Phú", province: 37, district: 461
	},
	{
		id: 14080, name: "Xã Trực Thái", province: 37, district: 461
	},
	{
		id: 14083, name: "Xã Trực Hùng", province: 37, district: 461
	},
	{
		id: 14086, name: "Xã Trực Thắng", province: 37, district: 461
	},
	{
		id: 13891, name: "Thị trấn Liễu Đề", province: 37, district: 462
	},
	{
		id: 13894, name: "Thị trấn Rạng Đông", province: 37, district: 462
	},
	{
		id: 13897, name: "Xã Nghĩa Đồng", province: 37, district: 462
	},
	{
		id: 13900, name: "Xã Nghĩa Thịnh", province: 37, district: 462
	},
	{
		id: 13903, name: "Xã Nghĩa Minh", province: 37, district: 462
	},
	{
		id: 13906, name: "Xã Nghĩa Thái", province: 37, district: 462
	},
	{
		id: 13909, name: "Xã Hoàng Nam", province: 37, district: 462
	},
	{
		id: 13912, name: "Xã Nghĩa Châu", province: 37, district: 462
	},
	{
		id: 13915, name: "Xã Nghĩa Trung", province: 37, district: 462
	},
	{
		id: 13918, name: "Xã Nghĩa Sơn", province: 37, district: 462
	},
	{
		id: 13921, name: "Xã Nghĩa Lạc", province: 37, district: 462
	},
	{
		id: 13924, name: "Xã Nghĩa Hồng", province: 37, district: 462
	},
	{
		id: 13927, name: "Xã Nghĩa Phong", province: 37, district: 462
	},
	{
		id: 13930, name: "Xã Nghĩa Phú", province: 37, district: 462
	},
	{
		id: 13933, name: "Xã Nghĩa Bình", province: 37, district: 462
	},
	{
		id: 13936, name: "Thị trấn Quỹ Nhất", province: 37, district: 462
	},
	{
		id: 13939, name: "Xã Nghĩa Tân", province: 37, district: 462
	},
	{
		id: 13942, name: "Xã Nghĩa Hùng", province: 37, district: 462
	},
	{
		id: 13945, name: "Xã Nghĩa Lâm", province: 37, district: 462
	},
	{
		id: 13948, name: "Xã Nghĩa Thành", province: 37, district: 462
	},
	{
		id: 13951, name: "Xã Nghĩa Thắng", province: 37, district: 462
	},
	{
		id: 13954, name: "Xã Nghĩa Lợi", province: 37, district: 462
	},
	{
		id: 13957, name: "Xã Nghĩa Hải", province: 37, district: 462
	},
	{
		id: 13960, name: "Xã Nghĩa Phúc", province: 37, district: 462
	},
	{
		id: 13963, name: "Xã Nam Điền", province: 37, district: 462
	},
	{
		id: 14215, name: "Thị trấn Yên Định", province: 37, district: 463
	},
	{
		id: 14218, name: "Thị trấn Cồn", province: 37, district: 463
	},
	{
		id: 14221, name: "Thị trấn Thịnh Long", province: 37, district: 463
	},
	{
		id: 14224, name: "Xã Hải Nam", province: 37, district: 463
	},
	{
		id: 14227, name: "Xã Hải Trung", province: 37, district: 463
	},
	{
		id: 14230, name: "Xã Hải Vân", province: 37, district: 463
	},
	{
		id: 14233, name: "Xã Hải Minh", province: 37, district: 463
	},
	{
		id: 14236, name: "Xã Hải Anh", province: 37, district: 463
	},
	{
		id: 14239, name: "Xã Hải Hưng", province: 37, district: 463
	},
	{
		id: 14242, name: "Xã Hải Bắc", province: 37, district: 463
	},
	{
		id: 14245, name: "Xã Hải Phúc", province: 37, district: 463
	},
	{
		id: 14248, name: "Xã Hải Thanh", province: 37, district: 463
	},
	{
		id: 14251, name: "Xã Hải Hà", province: 37, district: 463
	},
	{
		id: 14254, name: "Xã Hải Long", province: 37, district: 463
	},
	{
		id: 14257, name: "Xã Hải Phương", province: 37, district: 463
	},
	{
		id: 14260, name: "Xã Hải Đường", province: 37, district: 463
	},
	{
		id: 14263, name: "Xã Hải Lộc", province: 37, district: 463
	},
	{
		id: 14266, name: "Xã Hải Quang", province: 37, district: 463
	},
	{
		id: 14269, name: "Xã Hải Đông", province: 37, district: 463
	},
	{
		id: 14272, name: "Xã Hải Sơn", province: 37, district: 463
	},
	{
		id: 14275, name: "Xã Hải Tân", province: 37, district: 463
	},
	{
		id: 14278, name: "Xã Hải Toàn", province: 37, district: 463
	},
	{
		id: 14281, name: "Xã Hải Phong", province: 37, district: 463
	},
	{
		id: 14284, name: "Xã Hải An", province: 37, district: 463
	},
	{
		id: 14287, name: "Xã Hải Tây", province: 37, district: 463
	},
	{
		id: 14290, name: "Xã Hải Lý", province: 37, district: 463
	},
	{
		id: 14293, name: "Xã Hải Phú", province: 37, district: 463
	},
	{
		id: 14296, name: "Xã Hải Giang", province: 37, district: 463
	},
	{
		id: 14299, name: "Xã Hải Cường", province: 37, district: 463
	},
	{
		id: 14302, name: "Xã Hải Ninh", province: 37, district: 463
	},
	{
		id: 14305, name: "Xã Hải Chính", province: 37, district: 463
	},
	{
		id: 14308, name: "Xã Hải Xuân", province: 37, district: 463
	},
	{
		id: 14311, name: "Xã Hải Châu", province: 37, district: 463
	},
	{
		id: 14314, name: "Xã Hải Triều", province: 37, district: 463
	},
	{
		id: 14317, name: "Xã Hải Hòa", province: 37, district: 463
	},
	{
		id: 16663, name: "Phường Đông Vĩnh", province: 38, district: 464
	},
	{
		id: 16666, name: "Phường Hà Huy Tập", province: 38, district: 464
	},
	{
		id: 16669, name: "Phường Lê Lợi", province: 38, district: 464
	},
	{
		id: 16670, name: "Phường Quán Bàu", province: 38, district: 464
	},
	{
		id: 16672, name: "Phường Hưng Bình", province: 38, district: 464
	},
	{
		id: 16673, name: "Phường Hưng Phúc", province: 38, district: 464
	},
	{
		id: 16675, name: "Phường Hưng Dũng", province: 38, district: 464
	},
	{
		id: 16678, name: "Phường Cửa Nam", province: 38, district: 464
	},
	{
		id: 16681, name: "Phường Quang Trung", province: 38, district: 464
	},
	{
		id: 16684, name: "Phường Đội Cung", province: 38, district: 464
	},
	{
		id: 16687, name: "Phường Lê Mao", province: 38, district: 464
	},
	{
		id: 16690, name: "Phường Trường Thi", province: 38, district: 464
	},
	{
		id: 16693, name: "Phường Bến Thủy", province: 38, district: 464
	},
	{
		id: 16696, name: "Phường Hồng Sơn", province: 38, district: 464
	},
	{
		id: 16699, name: "Phường Trung Đô", province: 38, district: 464
	},
	{
		id: 16702, name: "Xã Nghi Phú", province: 38, district: 464
	},
	{
		id: 16705, name: "Xã Hưng Đông", province: 38, district: 464
	},
	{
		id: 16708, name: "Xã Hưng Lộc", province: 38, district: 464
	},
	{
		id: 16711, name: "Xã Hưng Hòa", province: 38, district: 464
	},
	{
		id: 16714, name: "Phường Vinh Tân", province: 38, district: 464
	},
	{
		id: 17908, name: "Xã Nghi Liên", province: 38, district: 464
	},
	{
		id: 17914, name: "Xã Nghi Ân", province: 38, district: 464
	},
	{
		id: 17920, name: "Xã Nghi Kim", province: 38, district: 464
	},
	{
		id: 17923, name: "Xã Nghi Đức", province: 38, district: 464
	},
	{
		id: 18013, name: "Xã Hưng Chính", province: 38, district: 464
	},
	{
		id: 16717, name: "Phường Nghi Thuỷ", province: 38, district: 465
	},
	{
		id: 16720, name: "Phường Nghi Tân", province: 38, district: 465
	},
	{
		id: 16723, name: "Phường Thu Thuỷ", province: 38, district: 465
	},
	{
		id: 16726, name: "Phường Nghi Hoà", province: 38, district: 465
	},
	{
		id: 16729, name: "Phường Nghi Hải", province: 38, district: 465
	},
	{
		id: 16732, name: "Phường Nghi Hương", province: 38, district: 465
	},
	{
		id: 16735, name: "Phường Nghi Thu", province: 38, district: 465
	},
	{
		id: 16777, name: "Thị trấn Tân Lạc", province: 38, district: 466
	},
	{
		id: 16780, name: "Xã Châu Bính", province: 38, district: 466
	},
	{
		id: 16783, name: "Xã Châu Thuận", province: 38, district: 466
	},
	{
		id: 16786, name: "Xã Châu Hội", province: 38, district: 466
	},
	{
		id: 16789, name: "Xã Châu Nga", province: 38, district: 466
	},
	{
		id: 16792, name: "Xã Châu Tiến", province: 38, district: 466
	},
	{
		id: 16795, name: "Xã Châu Hạnh", province: 38, district: 466
	},
	{
		id: 16798, name: "Xã Châu Thắng", province: 38, district: 466
	},
	{
		id: 16801, name: "Xã Châu Phong", province: 38, district: 466
	},
	{
		id: 16804, name: "Xã Châu Bình", province: 38, district: 466
	},
	{
		id: 16807, name: "Xã Châu Hoàn", province: 38, district: 466
	},
	{
		id: 16810, name: "Xã Diên Lãm", province: 38, district: 466
	},
	{
		id: 17035, name: "Thị trấn Quỳ Hợp", province: 38, district: 467
	},
	{
		id: 17038, name: "Xã Yên Hợp", province: 38, district: 467
	},
	{
		id: 17041, name: "Xã Châu Tiến", province: 38, district: 467
	},
	{
		id: 17044, name: "Xã Châu Hồng", province: 38, district: 467
	},
	{
		id: 17047, name: "Xã Đồng Hợp", province: 38, district: 467
	},
	{
		id: 17050, name: "Xã Châu Thành", province: 38, district: 467
	},
	{
		id: 17053, name: "Xã Liên Hợp", province: 38, district: 467
	},
	{
		id: 17056, name: "Xã Châu Lộc", province: 38, district: 467
	},
	{
		id: 17059, name: "Xã Tam Hợp", province: 38, district: 467
	},
	{
		id: 17062, name: "Xã Châu Cường", province: 38, district: 467
	},
	{
		id: 17065, name: "Xã Châu Quang", province: 38, district: 467
	},
	{
		id: 17068, name: "Xã Thọ Hợp", province: 38, district: 467
	},
	{
		id: 17071, name: "Xã Minh Hợp", province: 38, district: 467
	},
	{
		id: 17074, name: "Xã Nghĩa Xuân", province: 38, district: 467
	},
	{
		id: 17077, name: "Xã Châu Thái", province: 38, district: 467
	},
	{
		id: 17080, name: "Xã Châu Đình", province: 38, district: 467
	},
	{
		id: 17083, name: "Xã Văn Lợi", province: 38, district: 467
	},
	{
		id: 17086, name: "Xã Nam Sơn", province: 38, district: 467
	},
	{
		id: 17089, name: "Xã Châu Lý", province: 38, district: 467
	},
	{
		id: 17092, name: "Xã Hạ Sơn", province: 38, district: 467
	},
	{
		id: 17095, name: "Xã Bắc Sơn", province: 38, district: 467
	},
	{
		id: 16941, name: "Thị trấn Nghĩa Đàn", province: 38, district: 468
	},
	{
		id: 16942, name: "Xã Nghĩa Mai", province: 38, district: 468
	},
	{
		id: 16945, name: "Xã Nghĩa Yên", province: 38, district: 468
	},
	{
		id: 16948, name: "Xã Nghĩa Lạc", province: 38, district: 468
	},
	{
		id: 16951, name: "Xã Nghĩa Lâm", province: 38, district: 468
	},
	{
		id: 16954, name: "Xã Nghĩa Sơn", province: 38, district: 468
	},
	{
		id: 16957, name: "Xã Nghĩa Lợi", province: 38, district: 468
	},
	{
		id: 16960, name: "Xã Nghĩa Bình", province: 38, district: 468
	},
	{
		id: 16963, name: "Xã Nghĩa Thọ", province: 38, district: 468
	},
	{
		id: 16966, name: "Xã Nghĩa Minh", province: 38, district: 468
	},
	{
		id: 16969, name: "Xã Nghĩa Phú", province: 38, district: 468
	},
	{
		id: 16972, name: "Xã Nghĩa Hưng", province: 38, district: 468
	},
	{
		id: 16975, name: "Xã Nghĩa Hồng", province: 38, district: 468
	},
	{
		id: 16978, name: "Xã Nghĩa Thịnh", province: 38, district: 468
	},
	{
		id: 16981, name: "Xã Nghĩa Trung", province: 38, district: 468
	},
	{
		id: 16984, name: "Xã Nghĩa Hội", province: 38, district: 468
	},
	{
		id: 16987, name: "Xã Nghĩa Tân", province: 38, district: 468
	},
	{
		id: 16990, name: "Xã Nghĩa Thắng", province: 38, district: 468
	},
	{
		id: 16996, name: "Xã Nghĩa Hiếu", province: 38, district: 468
	},
	{
		id: 16999, name: "Xã Nghĩa Liên", province: 38, district: 468
	},
	{
		id: 17020, name: "Xã Nghĩa Đức", province: 38, district: 468
	},
	{
		id: 17023, name: "Xã Nghĩa An", province: 38, district: 468
	},
	{
		id: 17026, name: "Xã Nghĩa Long", province: 38, district: 468
	},
	{
		id: 17029, name: "Xã Nghĩa Lộc", province: 38, district: 468
	},
	{
		id: 17032, name: "Xã Nghĩa Khánh", province: 38, district: 468
	},
	{
		id: 17098, name: "Thị trấn Cầu Giát", province: 38, district: 469
	},
	{
		id: 17101, name: "Xã Quỳnh Thắng", province: 38, district: 469
	},
	{
		id: 17119, name: "Xã Quỳnh Tân", province: 38, district: 469
	},
	{
		id: 17122, name: "Xã Quỳnh Châu", province: 38, district: 469
	},
	{
		id: 17140, name: "Xã Tân Sơn", province: 38, district: 469
	},
	{
		id: 17143, name: "Xã Quỳnh Văn", province: 38, district: 469
	},
	{
		id: 17146, name: "Xã Ngọc Sơn", province: 38, district: 469
	},
	{
		id: 17149, name: "Xã Quỳnh Tam", province: 38, district: 469
	},
	{
		id: 17152, name: "Xã Quỳnh Hoa", province: 38, district: 469
	},
	{
		id: 17155, name: "Xã Quỳnh Thạch", province: 38, district: 469
	},
	{
		id: 17158, name: "Xã Quỳnh Bảng", province: 38, district: 469
	},
	{
		id: 17161, name: "Xã Quỳnh Mỹ", province: 38, district: 469
	},
	{
		id: 17164, name: "Xã Quỳnh Thanh", province: 38, district: 469
	},
	{
		id: 17167, name: "Xã Quỳnh Hậu", province: 38, district: 469
	},
	{
		id: 17170, name: "Xã Quỳnh Lâm", province: 38, district: 469
	},
	{
		id: 17173, name: "Xã Quỳnh Đôi", province: 38, district: 469
	},
	{
		id: 17176, name: "Xã Quỳnh Lương", province: 38, district: 469
	},
	{
		id: 17179, name: "Xã Quỳnh Hồng", province: 38, district: 469
	},
	{
		id: 17182, name: "Xã Quỳnh Yên", province: 38, district: 469
	},
	{
		id: 17185, name: "Xã Quỳnh Bá", province: 38, district: 469
	},
	{
		id: 17188, name: "Xã Quỳnh Minh", province: 38, district: 469
	},
	{
		id: 17191, name: "Xã Quỳnh Diện", province: 38, district: 469
	},
	{
		id: 17194, name: "Xã Quỳnh Hưng", province: 38, district: 469
	},
	{
		id: 17197, name: "Xã Quỳnh Giang", province: 38, district: 469
	},
	{
		id: 17200, name: "Xã Quỳnh Ngọc", province: 38, district: 469
	},
	{
		id: 17203, name: "Xã Quỳnh Nghĩa", province: 38, district: 469
	},
	{
		id: 17206, name: "Xã An Hòa", province: 38, district: 469
	},
	{
		id: 17209, name: "Xã Tiến Thủy", province: 38, district: 469
	},
	{
		id: 17212, name: "Xã Sơn Hải", province: 38, district: 469
	},
	{
		id: 17215, name: "Xã Quỳnh Thọ", province: 38, district: 469
	},
	{
		id: 17218, name: "Xã Quỳnh Thuận", province: 38, district: 469
	},
	{
		id: 17221, name: "Xã Quỳnh Long", province: 38, district: 469
	},
	{
		id: 17224, name: "Xã Tân Thắng", province: 38, district: 469
	},
	{
		id: 16813, name: "Thị trấn Mường Xén", province: 38, district: 470
	},
	{
		id: 16816, name: "Xã Mỹ Lý", province: 38, district: 470
	},
	{
		id: 16819, name: "Xã Bắc Lý", province: 38, district: 470
	},
	{
		id: 16822, name: "Xã Keng Đu", province: 38, district: 470
	},
	{
		id: 16825, name: "Xã Đoọc Mạy", province: 38, district: 470
	},
	{
		id: 16828, name: "Xã Huồi Tụ", province: 38, district: 470
	},
	{
		id: 16831, name: "Xã Mường Lống", province: 38, district: 470
	},
	{
		id: 16834, name: "Xã Na Loi", province: 38, district: 470
	},
	{
		id: 16837, name: "Xã Nậm Cắn", province: 38, district: 470
	},
	{
		id: 16840, name: "Xã Bảo Nam", province: 38, district: 470
	},
	{
		id: 16843, name: "Xã Phà Đánh", province: 38, district: 470
	},
	{
		id: 16846, name: "Xã Bảo Thắng", province: 38, district: 470
	},
	{
		id: 16849, name: "Xã Hữu Lập", province: 38, district: 470
	},
	{
		id: 16852, name: "Xã Tà Cạ", province: 38, district: 470
	},
	{
		id: 16855, name: "Xã Chiêu Lưu", province: 38, district: 470
	},
	{
		id: 16858, name: "Xã Mường Típ", province: 38, district: 470
	},
	{
		id: 16861, name: "Xã Hữu Kiệm", province: 38, district: 470
	},
	{
		id: 16864, name: "Xã Tây Sơn", province: 38, district: 470
	},
	{
		id: 16867, name: "Xã Mường Ải", province: 38, district: 470
	},
	{
		id: 16870, name: "Xã Na Ngoi", province: 38, district: 470
	},
	{
		id: 16873, name: "Xã Nậm Càn", province: 38, district: 470
	},
	{
		id: 16876, name: "Thị trấn Hòa Bình", province: 38, district: 471
	},
	{
		id: 16879, name: "Xã Mai Sơn", province: 38, district: 471
	},
	{
		id: 16882, name: "Xã Nhôn Mai", province: 38, district: 471
	},
	{
		id: 16885, name: "Xã Hữu Khuông", province: 38, district: 471
	},
	{
		id: 16900, name: "Xã Yên Tĩnh", province: 38, district: 471
	},
	{
		id: 16903, name: "Xã Nga My", province: 38, district: 471
	},
	{
		id: 16904, name: "Xã Xiêng My", province: 38, district: 471
	},
	{
		id: 16906, name: "Xã Lưỡng Minh", province: 38, district: 471
	},
	{
		id: 16909, name: "Xã Yên Hòa", province: 38, district: 471
	},
	{
		id: 16912, name: "Xã Yên Na", province: 38, district: 471
	},
	{
		id: 16915, name: "Xã Lưu Kiền", province: 38, district: 471
	},
	{
		id: 16918, name: "Xã Thạch Giám", province: 38, district: 471
	},
	{
		id: 16921, name: "Xã Xá Lượng", province: 38, district: 471
	},
	{
		id: 16924, name: "Xã Tam Thái", province: 38, district: 471
	},
	{
		id: 16927, name: "Xã Tam Đình", province: 38, district: 471
	},
	{
		id: 16930, name: "Xã Yên Thắng", province: 38, district: 471
	},
	{
		id: 16933, name: "Xã Tam Quang", province: 38, district: 471
	},
	{
		id: 16936, name: "Xã Tam Hợp", province: 38, district: 471
	},
	{
		id: 17227, name: "Thị trấn Con Cuông", province: 38, district: 472
	},
	{
		id: 17230, name: "Xã Bình Chuẩn", province: 38, district: 472
	},
	{
		id: 17233, name: "Xã Lạng Khê", province: 38, district: 472
	},
	{
		id: 17236, name: "Xã Cam Lâm", province: 38, district: 472
	},
	{
		id: 17239, name: "Xã Thạch Ngàn", province: 38, district: 472
	},
	{
		id: 17242, name: "Xã Đôn Phục", province: 38, district: 472
	},
	{
		id: 17245, name: "Xã Mậu Đức", province: 38, district: 472
	},
	{
		id: 17248, name: "Xã Châu Khê", province: 38, district: 472
	},
	{
		id: 17251, name: "Xã Chi Khê", province: 38, district: 472
	},
	{
		id: 17254, name: "Xã Bồng Khê", province: 38, district: 472
	},
	{
		id: 17257, name: "Xã Yên Khê", province: 38, district: 472
	},
	{
		id: 17260, name: "Xã Lục Dạ", province: 38, district: 472
	},
	{
		id: 17263, name: "Xã Môn Sơn", province: 38, district: 472
	},
	{
		id: 17266, name: "Thị trấn Tân Kỳ", province: 38, district: 473
	},
	{
		id: 17269, name: "Xã Tân Hợp", province: 38, district: 473
	},
	{
		id: 17272, name: "Xã Tân Phú", province: 38, district: 473
	},
	{
		id: 17275, name: "Xã Tân Xuân", province: 38, district: 473
	},
	{
		id: 17278, name: "Xã Giai Xuân", province: 38, district: 473
	},
	{
		id: 17281, name: "Xã Nghĩa Bình", province: 38, district: 473
	},
	{
		id: 17284, name: "Xã Nghĩa Đồng", province: 38, district: 473
	},
	{
		id: 17287, name: "Xã Đồng Văn", province: 38, district: 473
	},
	{
		id: 17290, name: "Xã Nghĩa Thái", province: 38, district: 473
	},
	{
		id: 17293, name: "Xã Nghĩa Hợp", province: 38, district: 473
	},
	{
		id: 17296, name: "Xã Nghĩa Hoàn", province: 38, district: 473
	},
	{
		id: 17299, name: "Xã Nghĩa Phúc", province: 38, district: 473
	},
	{
		id: 17302, name: "Xã Tiên Kỳ", province: 38, district: 473
	},
	{
		id: 17305, name: "Xã Tân An", province: 38, district: 473
	},
	{
		id: 17308, name: "Xã Nghĩa Dũng", province: 38, district: 473
	},
	{
		id: 17311, name: "Xã Tân Long", province: 38, district: 473
	},
	{
		id: 17314, name: "Xã Kỳ Sơn", province: 38, district: 473
	},
	{
		id: 17317, name: "Xã Hương Sơn", province: 38, district: 473
	},
	{
		id: 17320, name: "Xã Kỳ Tân", province: 38, district: 473
	},
	{
		id: 17323, name: "Xã Phú Sơn", province: 38, district: 473
	},
	{
		id: 17325, name: "Xã Tân Hương", province: 38, district: 473
	},
	{
		id: 17326, name: "Xã Nghĩa Hành", province: 38, district: 473
	},
	{
		id: 17506, name: "Thị trấn Yên Thành", province: 38, district: 474
	},
	{
		id: 17509, name: "Xã Mã Thành", province: 38, district: 474
	},
	{
		id: 17510, name: "Xã Tiến Thành", province: 38, district: 474
	},
	{
		id: 17512, name: "Xã Lăng Thành", province: 38, district: 474
	},
	{
		id: 17515, name: "Xã Tân Thành", province: 38, district: 474
	},
	{
		id: 17518, name: "Xã Đức Thành", province: 38, district: 474
	},
	{
		id: 17521, name: "Xã Kim Thành", province: 38, district: 474
	},
	{
		id: 17524, name: "Xã Hậu Thành", province: 38, district: 474
	},
	{
		id: 17525, name: "Xã Hùng Thành", province: 38, district: 474
	},
	{
		id: 17527, name: "Xã Đô Thành", province: 38, district: 474
	},
	{
		id: 17530, name: "Xã Thọ Thành", province: 38, district: 474
	},
	{
		id: 17533, name: "Xã Quang Thành", province: 38, district: 474
	},
	{
		id: 17536, name: "Xã Tây Thành", province: 38, district: 474
	},
	{
		id: 17539, name: "Xã Phúc Thành", province: 38, district: 474
	},
	{
		id: 17542, name: "Xã Hồng Thành", province: 38, district: 474
	},
	{
		id: 17545, name: "Xã Đồng Thành", province: 38, district: 474
	},
	{
		id: 17548, name: "Xã Phú Thành", province: 38, district: 474
	},
	{
		id: 17551, name: "Xã Hoa Thành", province: 38, district: 474
	},
	{
		id: 17554, name: "Xã Tăng Thành", province: 38, district: 474
	},
	{
		id: 17557, name: "Xã Văn Thành", province: 38, district: 474
	},
	{
		id: 17560, name: "Xã Thịnh Thành", province: 38, district: 474
	},
	{
		id: 17563, name: "Xã Hợp Thành", province: 38, district: 474
	},
	{
		id: 17566, name: "Xã Xuân Thành", province: 38, district: 474
	},
	{
		id: 17569, name: "Xã Bắc Thành", province: 38, district: 474
	},
	{
		id: 17572, name: "Xã Nhân Thành", province: 38, district: 474
	},
	{
		id: 17575, name: "Xã Trung Thành", province: 38, district: 474
	},
	{
		id: 17578, name: "Xã Long Thành", province: 38, district: 474
	},
	{
		id: 17581, name: "Xã Minh Thành", province: 38, district: 474
	},
	{
		id: 17584, name: "Xã Nam Thành", province: 38, district: 474
	},
	{
		id: 17587, name: "Xã Vĩnh Thành", province: 38, district: 474
	},
	{
		id: 17590, name: "Xã Lý Thành", province: 38, district: 474
	},
	{
		id: 17593, name: "Xã Khánh Thành", province: 38, district: 474
	},
	{
		id: 17596, name: "Xã Viên Thành", province: 38, district: 474
	},
	{
		id: 17599, name: "Xã Đại Thành", province: 38, district: 474
	},
	{
		id: 17602, name: "Xã Liên Thành", province: 38, district: 474
	},
	{
		id: 17605, name: "Xã Bảo Thành", province: 38, district: 474
	},
	{
		id: 17608, name: "Xã Mỹ Thành", province: 38, district: 474
	},
	{
		id: 17611, name: "Xã Công Thành", province: 38, district: 474
	},
	{
		id: 17614, name: "Xã Sơn Thành", province: 38, district: 474
	},
	{
		id: 17389, name: "Thị trấn Diễn Châu", province: 38, district: 475
	},
	{
		id: 17392, name: "Xã Diễn Lâm", province: 38, district: 475
	},
	{
		id: 17395, name: "Xã Diễn Đoài", province: 38, district: 475
	},
	{
		id: 17398, name: "Xã Diễn Trường", province: 38, district: 475
	},
	{
		id: 17401, name: "Xã Diễn Yên", province: 38, district: 475
	},
	{
		id: 17404, name: "Xã Diễn Hoàng", province: 38, district: 475
	},
	{
		id: 17407, name: "Xã Diễn Hùng", province: 38, district: 475
	},
	{
		id: 17410, name: "Xã Diễn Mỹ", province: 38, district: 475
	},
	{
		id: 17413, name: "Xã Diễn Hồng", province: 38, district: 475
	},
	{
		id: 17416, name: "Xã Diễn Phong", province: 38, district: 475
	},
	{
		id: 17419, name: "Xã Diễn Hải", province: 38, district: 475
	},
	{
		id: 17422, name: "Xã Diễn Tháp", province: 38, district: 475
	},
	{
		id: 17425, name: "Xã Diễn Liên", province: 38, district: 475
	},
	{
		id: 17428, name: "Xã Diễn Vạn", province: 38, district: 475
	},
	{
		id: 17431, name: "Xã Diễn Kim", province: 38, district: 475
	},
	{
		id: 17434, name: "Xã Diễn Kỷ", province: 38, district: 475
	},
	{
		id: 17437, name: "Xã Diễn Xuân", province: 38, district: 475
	},
	{
		id: 17440, name: "Xã Diễn Thái", province: 38, district: 475
	},
	{
		id: 17443, name: "Xã Diễn Đồng", province: 38, district: 475
	},
	{
		id: 17446, name: "Xã Diễn Bích", province: 38, district: 475
	},
	{
		id: 17449, name: "Xã Diễn Hạnh", province: 38, district: 475
	},
	{
		id: 17452, name: "Xã Diễn Ngọc", province: 38, district: 475
	},
	{
		id: 17455, name: "Xã Diễn Quảng", province: 38, district: 475
	},
	{
		id: 17458, name: "Xã Diễn Nguyên", province: 38, district: 475
	},
	{
		id: 17461, name: "Xã Diễn Hoa", province: 38, district: 475
	},
	{
		id: 17464, name: "Xã Diễn Thành", province: 38, district: 475
	},
	{
		id: 17467, name: "Xã Diễn Phúc", province: 38, district: 475
	},
	{
		id: 17470, name: "Xã Diễn Minh", province: 38, district: 475
	},
	{
		id: 17473, name: "Xã Diễn Bình", province: 38, district: 475
	},
	{
		id: 17476, name: "Xã Diễn Cát", province: 38, district: 475
	},
	{
		id: 17479, name: "Xã Diễn Thịnh", province: 38, district: 475
	},
	{
		id: 17482, name: "Xã Diễn Tân", province: 38, district: 475
	},
	{
		id: 17485, name: "Xã Diễn Thắng", province: 38, district: 475
	},
	{
		id: 17488, name: "Xã Diễn Thọ", province: 38, district: 475
	},
	{
		id: 17491, name: "Xã Diễn Lợi", province: 38, district: 475
	},
	{
		id: 17494, name: "Xã Diễn Lộc", province: 38, district: 475
	},
	{
		id: 17497, name: "Xã Diễn Trung", province: 38, district: 475
	},
	{
		id: 17500, name: "Xã Diễn An", province: 38, district: 475
	},
	{
		id: 17503, name: "Xã Diễn Phú", province: 38, district: 475
	},
	{
		id: 17329, name: "Thị trấn Anh Sơn", province: 38, district: 476
	},
	{
		id: 17332, name: "Xã Thọ Sơn", province: 38, district: 476
	},
	{
		id: 17335, name: "Xã Thành Sơn", province: 38, district: 476
	},
	{
		id: 17338, name: "Xã Bình Sơn", province: 38, district: 476
	},
	{
		id: 17341, name: "Xã Tam Sơn", province: 38, district: 476
	},
	{
		id: 17344, name: "Xã Đỉnh Sơn", province: 38, district: 476
	},
	{
		id: 17347, name: "Xã Hùng Sơn", province: 38, district: 476
	},
	{
		id: 17350, name: "Xã Cẩm Sơn", province: 38, district: 476
	},
	{
		id: 17353, name: "Xã Đức Sơn", province: 38, district: 476
	},
	{
		id: 17356, name: "Xã Tường Sơn", province: 38, district: 476
	},
	{
		id: 17357, name: "Xã Hoa Sơn", province: 38, district: 476
	},
	{
		id: 17359, name: "Xã Tào Sơn", province: 38, district: 476
	},
	{
		id: 17362, name: "Xã Vĩnh Sơn", province: 38, district: 476
	},
	{
		id: 17365, name: "Xã Lạng Sơn", province: 38, district: 476
	},
	{
		id: 17368, name: "Xã Hội Sơn", province: 38, district: 476
	},
	{
		id: 17371, name: "Xã Thạch Sơn", province: 38, district: 476
	},
	{
		id: 17374, name: "Xã Phúc Sơn", province: 38, district: 476
	},
	{
		id: 17377, name: "Xã Long Sơn", province: 38, district: 476
	},
	{
		id: 17380, name: "Xã Khai Sơn", province: 38, district: 476
	},
	{
		id: 17383, name: "Xã Lĩnh Sơn", province: 38, district: 476
	},
	{
		id: 17386, name: "Xã Cao Sơn", province: 38, district: 476
	},
	{
		id: 17617, name: "Thị trấn Đô Lương", province: 38, district: 477
	},
	{
		id: 17619, name: "Xã Giang Sơn Đông", province: 38, district: 477
	},
	{
		id: 17620, name: "Xã Giang Sơn Tây", province: 38, district: 477
	},
	{
		id: 17623, name: "Xã Lam Sơn", province: 38, district: 477
	},
	{
		id: 17626, name: "Xã Bồi Sơn", province: 38, district: 477
	},
	{
		id: 17629, name: "Xã Hồng Sơn", province: 38, district: 477
	},
	{
		id: 17632, name: "Xã Bài Sơn", province: 38, district: 477
	},
	{
		id: 17635, name: "Xã Ngọc Sơn", province: 38, district: 477
	},
	{
		id: 17638, name: "Xã Bắc Sơn", province: 38, district: 477
	},
	{
		id: 17641, name: "Xã Tràng Sơn", province: 38, district: 477
	},
	{
		id: 17644, name: "Xã Thượng Sơn", province: 38, district: 477
	},
	{
		id: 17647, name: "Xã Hòa Sơn", province: 38, district: 477
	},
	{
		id: 17650, name: "Xã Đặng Sơn", province: 38, district: 477
	},
	{
		id: 17653, name: "Xã Đông Sơn", province: 38, district: 477
	},
	{
		id: 17656, name: "Xã Nam Sơn", province: 38, district: 477
	},
	{
		id: 17659, name: "Xã Lưu Sơn", province: 38, district: 477
	},
	{
		id: 17662, name: "Xã Yên Sơn", province: 38, district: 477
	},
	{
		id: 17665, name: "Xã Văn Sơn", province: 38, district: 477
	},
	{
		id: 17668, name: "Xã Đà Sơn", province: 38, district: 477
	},
	{
		id: 17671, name: "Xã Lạc Sơn", province: 38, district: 477
	},
	{
		id: 17674, name: "Xã Tân Sơn", province: 38, district: 477
	},
	{
		id: 17677, name: "Xã Thái Sơn", province: 38, district: 477
	},
	{
		id: 17680, name: "Xã Quang Sơn", province: 38, district: 477
	},
	{
		id: 17683, name: "Xã Thịnh Sơn", province: 38, district: 477
	},
	{
		id: 17686, name: "Xã Trung Sơn", province: 38, district: 477
	},
	{
		id: 17689, name: "Xã Xuân Sơn", province: 38, district: 477
	},
	{
		id: 17692, name: "Xã Minh Sơn", province: 38, district: 477
	},
	{
		id: 17695, name: "Xã Thuận Sơn", province: 38, district: 477
	},
	{
		id: 17698, name: "Xã Nhân Sơn", province: 38, district: 477
	},
	{
		id: 17701, name: "Xã Hiến Sơn", province: 38, district: 477
	},
	{
		id: 17704, name: "Xã Mỹ Sơn", province: 38, district: 477
	},
	{
		id: 17707, name: "Xã Trù Sơn", province: 38, district: 477
	},
	{
		id: 17710, name: "Xã Đại Sơn", province: 38, district: 477
	},
	{
		id: 17713, name: "Thị trấn Thanh Chương", province: 38, district: 478
	},
	{
		id: 17716, name: "Xã Cát Văn", province: 38, district: 478
	},
	{
		id: 17719, name: "Xã Thanh Nho", province: 38, district: 478
	},
	{
		id: 17722, name: "Xã Hạnh Lâm", province: 38, district: 478
	},
	{
		id: 17723, name: "Xã Thanh Sơn", province: 38, district: 478
	},
	{
		id: 17725, name: "Xã Thanh Hòa", province: 38, district: 478
	},
	{
		id: 17728, name: "Xã Phong Thịnh", province: 38, district: 478
	},
	{
		id: 17731, name: "Xã Thanh Phong", province: 38, district: 478
	},
	{
		id: 17734, name: "Xã Thanh Mỹ", province: 38, district: 478
	},
	{
		id: 17737, name: "Xã Thanh Tiên", province: 38, district: 478
	},
	{
		id: 17740, name: "Xã Thanh Hưng", province: 38, district: 478
	},
	{
		id: 17743, name: "Xã Thanh Liên", province: 38, district: 478
	},
	{
		id: 17746, name: "Xã Thanh Tường", province: 38, district: 478
	},
	{
		id: 17749, name: "Xã Thanh Văn", province: 38, district: 478
	},
	{
		id: 17752, name: "Xã Thanh Đồng", province: 38, district: 478
	},
	{
		id: 17755, name: "Xã Thanh Ngọc", province: 38, district: 478
	},
	{
		id: 17758, name: "Xã Thanh Hương", province: 38, district: 478
	},
	{
		id: 17759, name: "Xã Ngọc Lâm", province: 38, district: 478
	},
	{
		id: 17761, name: "Xã Thanh Lĩnh", province: 38, district: 478
	},
	{
		id: 17764, name: "Xã Đồng Văn", province: 38, district: 478
	},
	{
		id: 17767, name: "Xã Ngọc Sơn", province: 38, district: 478
	},
	{
		id: 17770, name: "Xã Thanh Thịnh", province: 38, district: 478
	},
	{
		id: 17773, name: "Xã Thanh An", province: 38, district: 478
	},
	{
		id: 17776, name: "Xã Thanh Chi", province: 38, district: 478
	},
	{
		id: 17779, name: "Xã Xuân Tường", province: 38, district: 478
	},
	{
		id: 17782, name: "Xã Thanh Dương", province: 38, district: 478
	},
	{
		id: 17785, name: "Xã Thanh Lương", province: 38, district: 478
	},
	{
		id: 17788, name: "Xã Thanh Khê", province: 38, district: 478
	},
	{
		id: 17791, name: "Xã Võ Liệt", province: 38, district: 478
	},
	{
		id: 17794, name: "Xã Thanh Long", province: 38, district: 478
	},
	{
		id: 17797, name: "Xã Thanh Thủy", province: 38, district: 478
	},
	{
		id: 17800, name: "Xã Thanh Khai", province: 38, district: 478
	},
	{
		id: 17803, name: "Xã Thanh Yên", province: 38, district: 478
	},
	{
		id: 17806, name: "Xã Thanh Hà", province: 38, district: 478
	},
	{
		id: 17809, name: "Xã Thanh Giang", province: 38, district: 478
	},
	{
		id: 17812, name: "Xã Thanh Tùng", province: 38, district: 478
	},
	{
		id: 17815, name: "Xã Thanh Lâm", province: 38, district: 478
	},
	{
		id: 17818, name: "Xã Thanh Mai", province: 38, district: 478
	},
	{
		id: 17821, name: "Xã Thanh Xuân", province: 38, district: 478
	},
	{
		id: 17824, name: "Xã Thanh Đức", province: 38, district: 478
	},
	{
		id: 17827, name: "Thị trấn Quán Hành", province: 38, district: 479
	},
	{
		id: 17830, name: "Xã Nghi Văn", province: 38, district: 479
	},
	{
		id: 17833, name: "Xã Nghi Yên", province: 38, district: 479
	},
	{
		id: 17836, name: "Xã Nghi Tiến", province: 38, district: 479
	},
	{
		id: 17839, name: "Xã Nghi Hưng", province: 38, district: 479
	},
	{
		id: 17842, name: "Xã Nghi Đồng", province: 38, district: 479
	},
	{
		id: 17845, name: "Xã Nghi Thiết", province: 38, district: 479
	},
	{
		id: 17848, name: "Xã Nghi Lâm", province: 38, district: 479
	},
	{
		id: 17851, name: "Xã Nghi Quang", province: 38, district: 479
	},
	{
		id: 17854, name: "Xã Nghi Kiều", province: 38, district: 479
	},
	{
		id: 17857, name: "Xã Nghi Mỹ", province: 38, district: 479
	},
	{
		id: 17860, name: "Xã Nghi Phương", province: 38, district: 479
	},
	{
		id: 17863, name: "Xã Nghi Thuận", province: 38, district: 479
	},
	{
		id: 17866, name: "Xã Nghi Long", province: 38, district: 479
	},
	{
		id: 17869, name: "Xã Nghi Xá", province: 38, district: 479
	},
	{
		id: 17872, name: "Xã Nghi Hợp", province: 38, district: 479
	},
	{
		id: 17875, name: "Xã Nghi Hoa", province: 38, district: 479
	},
	{
		id: 17878, name: "Xã Nghi Khánh", province: 38, district: 479
	},
	{
		id: 17881, name: "Xã Nghi Thịnh", province: 38, district: 479
	},
	{
		id: 17884, name: "Xã Nghi Công Bắc", province: 38, district: 479
	},
	{
		id: 17887, name: "Xã Nghi Công Nam", province: 38, district: 479
	},
	{
		id: 17890, name: "Xã Nghi Thạch", province: 38, district: 479
	},
	{
		id: 17893, name: "Xã Nghi Trung", province: 38, district: 479
	},
	{
		id: 17896, name: "Xã Nghi Trường", province: 38, district: 479
	},
	{
		id: 17899, name: "Xã Nghi Diên", province: 38, district: 479
	},
	{
		id: 17902, name: "Xã Nghi Phong", province: 38, district: 479
	},
	{
		id: 17905, name: "Xã Nghi Xuân", province: 38, district: 479
	},
	{
		id: 17911, name: "Xã Nghi Vạn", province: 38, district: 479
	},
	{
		id: 17917, name: "Xã Phúc Thọ", province: 38, district: 479
	},
	{
		id: 17926, name: "Xã Nghi Thái", province: 38, district: 479
	},
	{
		id: 17929, name: "Thị trấn Nam Đàn", province: 38, district: 480
	},
	{
		id: 17932, name: "Xã Nam Hưng", province: 38, district: 480
	},
	{
		id: 17935, name: "Xã Nam Nghĩa", province: 38, district: 480
	},
	{
		id: 17938, name: "Xã Nam Thanh", province: 38, district: 480
	},
	{
		id: 17941, name: "Xã Nam Anh", province: 38, district: 480
	},
	{
		id: 17944, name: "Xã Nam Xuân", province: 38, district: 480
	},
	{
		id: 17947, name: "Xã Nam Thái", province: 38, district: 480
	},
	{
		id: 17950, name: "Xã Vân Diên", province: 38, district: 480
	},
	{
		id: 17953, name: "Xã Nam Lĩnh", province: 38, district: 480
	},
	{
		id: 17956, name: "Xã Nam Giang", province: 38, district: 480
	},
	{
		id: 17959, name: "Xã Xuân Hòa", province: 38, district: 480
	},
	{
		id: 17962, name: "Xã Hùng Tiến", province: 38, district: 480
	},
	{
		id: 17965, name: "Xã Nam Thượng", province: 38, district: 480
	},
	{
		id: 17968, name: "Xã Nam Tân", province: 38, district: 480
	},
	{
		id: 17971, name: "Xã Kim Liên", province: 38, district: 480
	},
	{
		id: 17974, name: "Xã Nam Lộc", province: 38, district: 480
	},
	{
		id: 17977, name: "Xã Hồng Long", province: 38, district: 480
	},
	{
		id: 17980, name: "Xã Xuân Lâm", province: 38, district: 480
	},
	{
		id: 17983, name: "Xã Nam Cát", province: 38, district: 480
	},
	{
		id: 17986, name: "Xã Khánh Sơn", province: 38, district: 480
	},
	{
		id: 17989, name: "Xã Nam Phúc", province: 38, district: 480
	},
	{
		id: 17992, name: "Xã Nam Cường", province: 38, district: 480
	},
	{
		id: 17995, name: "Xã Nam Trung", province: 38, district: 480
	},
	{
		id: 17998, name: "Xã Nam Kim", province: 38, district: 480
	},
	{
		id: 18001, name: "Thị trấn Hưng Nguyên", province: 38, district: 481
	},
	{
		id: 18004, name: "Xã Hưng Trung", province: 38, district: 481
	},
	{
		id: 18007, name: "Xã Hưng Yên", province: 38, district: 481
	},
	{
		id: 18008, name: "Xã Hưng Yên Bắc", province: 38, district: 481
	},
	{
		id: 18010, name: "Xã Hưng Tây", province: 38, district: 481
	},
	{
		id: 18016, name: "Xã Hưng Đạo", province: 38, district: 481
	},
	{
		id: 18019, name: "Xã Hưng Mỹ", province: 38, district: 481
	},
	{
		id: 18022, name: "Xã Hưng Thịnh", province: 38, district: 481
	},
	{
		id: 18025, name: "Xã Hưng Lĩnh", province: 38, district: 481
	},
	{
		id: 18028, name: "Xã Hưng Thông", province: 38, district: 481
	},
	{
		id: 18031, name: "Xã Hưng Tân", province: 38, district: 481
	},
	{
		id: 18034, name: "Xã Hưng Lợi", province: 38, district: 481
	},
	{
		id: 18037, name: "Xã Hưng Thắng", province: 38, district: 481
	},
	{
		id: 18040, name: "Xã Hưng Phúc", province: 38, district: 481
	},
	{
		id: 18043, name: "Xã Hưng Long", province: 38, district: 481
	},
	{
		id: 18046, name: "Xã Hưng Tiến", province: 38, district: 481
	},
	{
		id: 18049, name: "Xã Hưng Xá", province: 38, district: 481
	},
	{
		id: 18052, name: "Xã Hưng Châu", province: 38, district: 481
	},
	{
		id: 18055, name: "Xã Hưng Xuân", province: 38, district: 481
	},
	{
		id: 18058, name: "Xã Hưng Nhân", province: 38, district: 481
	},
	{
		id: 18061, name: "Xã Hưng Phú", province: 38, district: 481
	},
	{
		id: 18064, name: "Xã Hưng Khánh", province: 38, district: 481
	},
	{
		id: 18067, name: "Xã Hưng Lam", province: 38, district: 481
	},
	{
		id: 16738, name: "Thị trấn Kim Sơn", province: 38, district: 482
	},
	{
		id: 16741, name: "Xã Thông Thụ", province: 38, district: 482
	},
	{
		id: 16744, name: "Xã Đồng Văn", province: 38, district: 482
	},
	{
		id: 16747, name: "Xã Hạnh Dịch", province: 38, district: 482
	},
	{
		id: 16750, name: "Xã Tiền Phong", province: 38, district: 482
	},
	{
		id: 16753, name: "Xã Nậm Giải", province: 38, district: 482
	},
	{
		id: 16756, name: "Xã Tri Lễ", province: 38, district: 482
	},
	{
		id: 16759, name: "Xã Châu Kim", province: 38, district: 482
	},
	{
		id: 16762, name: "Xã Mường Nọc", province: 38, district: 482
	},
	{
		id: 16763, name: "Xã Quế Sơn", province: 38, district: 482
	},
	{
		id: 16765, name: "Xã Châu Thôn", province: 38, district: 482
	},
	{
		id: 16768, name: "Xã Nậm Nhoóng", province: 38, district: 482
	},
	{
		id: 16771, name: "Xã Quang Phong", province: 38, district: 482
	},
	{
		id: 16774, name: "Xã Căm Muộn", province: 38, district: 482
	},
	{
		id: 16939, name: "Phường Hoà Hiếu", province: 38, district: 736
	},
	{
		id: 16993, name: "Phường Quang Phong", province: 38, district: 736
	},
	{
		id: 16994, name: "Phường Quang Tiến", province: 38, district: 736
	},
	{
		id: 17002, name: "Xã Nghĩa Hòa", province: 38, district: 736
	},
	{
		id: 17003, name: "Phường Long Sơn", province: 38, district: 736
	},
	{
		id: 17005, name: "Xã Nghĩa Tiến", province: 38, district: 736
	},
	{
		id: 17008, name: "Xã Nghĩa Mỹ", province: 38, district: 736
	},
	{
		id: 17011, name: "Xã Tây Hiếu", province: 38, district: 736
	},
	{
		id: 17014, name: "Xã Nghĩa Thuận", province: 38, district: 736
	},
	{
		id: 17017, name: "Xã Đông Hiếu", province: 38, district: 736
	},
	{
		id: 17104, name: "Xã Quỳnh Vinh", province: 38, district: 747
	},
	{
		id: 17107, name: "Xã Quỳnh Lộc", province: 38, district: 747
	},
	{
		id: 17110, name: "Phường Quỳnh Thiện", province: 38, district: 747
	},
	{
		id: 17113, name: "Xã Quỳnh Lập", province: 38, district: 747
	},
	{
		id: 17116, name: "Xã Quỳnh Trang", province: 38, district: 747
	},
	{
		id: 17125, name: "Phường Mai Hùng", province: 38, district: 747
	},
	{
		id: 17128, name: "Phường Quỳnh Dị", province: 38, district: 747
	},
	{
		id: 17131, name: "Phường Quỳnh Xuân", province: 38, district: 747
	},
	{
		id: 17134, name: "Phường Quỳnh Phương", province: 38, district: 747
	},
	{
		id: 17137, name: "Xã Quỳnh Liên", province: 38, district: 747
	},
	{
		id: 22738, name: "Phường Đô Vinh", province: 39, district: 483
	},
	{
		id: 22741, name: "Phường Phước Mỹ", province: 39, district: 483
	},
	{
		id: 22744, name: "Phường Bảo An", province: 39, district: 483
	},
	{
		id: 22747, name: "Phường Phủ Hà", province: 39, district: 483
	},
	{
		id: 22750, name: "Phường Thanh Sơn", province: 39, district: 483
	},
	{
		id: 22753, name: "Phường Mỹ Hương", province: 39, district: 483
	},
	{
		id: 22756, name: "Phường Tấn Tài", province: 39, district: 483
	},
	{
		id: 22759, name: "Phường Kinh Dinh", province: 39, district: 483
	},
	{
		id: 22762, name: "Phường Đạo Long", province: 39, district: 483
	},
	{
		id: 22765, name: "Phường Đài Sơn", province: 39, district: 483
	},
	{
		id: 22768, name: "Phường Đông Hải", province: 39, district: 483
	},
	{
		id: 22771, name: "Phường Mỹ Đông", province: 39, district: 483
	},
	{
		id: 22774, name: "Xã Thành Hải", province: 39, district: 483
	},
	{
		id: 22777, name: "Phường Văn Hải", province: 39, district: 483
	},
	{
		id: 22779, name: "Phường Mỹ Bình", province: 39, district: 483
	},
	{
		id: 22780, name: "Phường Mỹ Hải", province: 39, district: 483
	},
	{
		id: 22810, name: "Thị trấn Tân Sơn", province: 39, district: 484
	},
	{
		id: 22813, name: "Xã Lâm Sơn", province: 39, district: 484
	},
	{
		id: 22816, name: "Xã Lương Sơn", province: 39, district: 484
	},
	{
		id: 22819, name: "Xã Quảng Sơn", province: 39, district: 484
	},
	{
		id: 22822, name: "Xã Mỹ Sơn", province: 39, district: 484
	},
	{
		id: 22825, name: "Xã Hòa Sơn", province: 39, district: 484
	},
	{
		id: 22828, name: "Xã Ma Nới", province: 39, district: 484
	},
	{
		id: 22831, name: "Xã Nhơn Sơn", province: 39, district: 484
	},
	{
		id: 22834, name: "Thị trấn Khánh Hải", province: 39, district: 485
	},
	{
		id: 22846, name: "Xã Vĩnh Hải", province: 39, district: 485
	},
	{
		id: 22852, name: "Xã Phương Hải", province: 39, district: 485
	},
	{
		id: 22855, name: "Xã Tân Hải", province: 39, district: 485
	},
	{
		id: 22858, name: "Xã Xuân Hải", province: 39, district: 485
	},
	{
		id: 22861, name: "Xã Hộ Hải", province: 39, district: 485
	},
	{
		id: 22864, name: "Xã Tri Hải", province: 39, district: 485
	},
	{
		id: 22867, name: "Xã Nhơn Hải", province: 39, district: 485
	},
	{
		id: 22868, name: "Xã Thanh Hải", province: 39, district: 485
	},
	{
		id: 22870, name: "Thị trấn Phước Dân", province: 39, district: 486
	},
	{
		id: 22873, name: "Xã Phước Sơn", province: 39, district: 486
	},
	{
		id: 22876, name: "Xã Phước Thái", province: 39, district: 486
	},
	{
		id: 22879, name: "Xã Phước Hậu", province: 39, district: 486
	},
	{
		id: 22882, name: "Xã Phước Thuận", province: 39, district: 486
	},
	{
		id: 22888, name: "Xã An Hải", province: 39, district: 486
	},
	{
		id: 22891, name: "Xã Phước Hữu", province: 39, district: 486
	},
	{
		id: 22894, name: "Xã Phước Hải", province: 39, district: 486
	},
	{
		id: 22912, name: "Xã Phước Vinh", province: 39, district: 486
	},
	{
		id: 22783, name: "Xã Phước Bình", province: 39, district: 487
	},
	{
		id: 22786, name: "Xã Phước Hòa", province: 39, district: 487
	},
	{
		id: 22789, name: "Xã Phước Tân", province: 39, district: 487
	},
	{
		id: 22792, name: "Xã Phước Tiến", province: 39, district: 487
	},
	{
		id: 22795, name: "Xã Phước Thắng", province: 39, district: 487
	},
	{
		id: 22798, name: "Xã Phước Thành", province: 39, district: 487
	},
	{
		id: 22801, name: "Xã Phước Đại", province: 39, district: 487
	},
	{
		id: 22804, name: "Xã Phước Chính", province: 39, district: 487
	},
	{
		id: 22807, name: "Xã Phước Trung", province: 39, district: 487
	},
	{
		id: 22837, name: "Xã Phước Chiến", province: 39, district: 488
	},
	{
		id: 22840, name: "Xã Công Hải", province: 39, district: 488
	},
	{
		id: 22843, name: "Xã Phước Kháng", province: 39, district: 488
	},
	{
		id: 22849, name: "Xã Lợi Hải", province: 39, district: 488
	},
	{
		id: 22853, name: "Xã Bắc Sơn", province: 39, district: 488
	},
	{
		id: 22856, name: "Xã Bắc Phong", province: 39, district: 488
	},
	{
		id: 22885, name: "Xã Phước Hà", province: 39, district: 738
	},
	{
		id: 22897, name: "Xã Phước Nam", province: 39, district: 738
	},
	{
		id: 22898, name: "Xã Phước Ninh", province: 39, district: 738
	},
	{
		id: 22900, name: "Xã Nhị Hà", province: 39, district: 738
	},
	{
		id: 22903, name: "Xã Phước Dinh", province: 39, district: 738
	},
	{
		id: 22906, name: "Xã Phước Minh", province: 39, district: 738
	},
	{
		id: 22909, name: "Xã Phước Diêm", province: 39, district: 738
	},
	{
		id: 22910, name: "Xã Cà Ná", province: 39, district: 738
	},
	{
		id: 7888, name: "Phường Dữu Lâu", province: 40, district: 232
	},
	{
		id: 7891, name: "Phường Vân Cơ", province: 40, district: 232
	},
	{
		id: 7894, name: "Phường Nông Trang", province: 40, district: 232
	},
	{
		id: 7897, name: "Phường Tân Dân", province: 40, district: 232
	},
	{
		id: 7900, name: "Phường Gia Cẩm", province: 40, district: 232
	},
	{
		id: 7903, name: "Phường Tiên Cát", province: 40, district: 232
	},
	{
		id: 7906, name: "Phường Thọ Sơn", province: 40, district: 232
	},
	{
		id: 7909, name: "Phường Thanh Miếu", province: 40, district: 232
	},
	{
		id: 7912, name: "Phường Bạch Hạc", province: 40, district: 232
	},
	{
		id: 7915, name: "Phường Bến Gót", province: 40, district: 232
	},
	{
		id: 7918, name: "Phường Vân Phú", province: 40, district: 232
	},
	{
		id: 7921, name: "Xã Phượng Lâu", province: 40, district: 232
	},
	{
		id: 7924, name: "Xã Thụy Vân", province: 40, district: 232
	},
	{
		id: 7927, name: "Phường Minh Phương", province: 40, district: 232
	},
	{
		id: 7930, name: "Xã Trưng Vương", province: 40, district: 232
	},
	{
		id: 7933, name: "Phường Minh Nông", province: 40, district: 232
	},
	{
		id: 7936, name: "Xã Sông Lô", province: 40, district: 232
	},
	{
		id: 8281, name: "Xã Kim Đức", province: 40, district: 232
	},
	{
		id: 8287, name: "Xã Hùng Lô", province: 40, district: 232
	},
	{
		id: 8503, name: "Xã Hy Cương", province: 40, district: 232
	},
	{
		id: 8506, name: "Xã Chu Hóa", province: 40, district: 232
	},
	{
		id: 8515, name: "Xã Thanh Đình", province: 40, district: 232
	},
	{
		id: 9622, name: "Xã Tân Đức", province: 40, district: 232
	},
	{
		id: 7939, name: "Phường Trường Thịnh", province: 40, district: 233
	},
	{
		id: 7942, name: "Phường Hùng Vương", province: 40, district: 233
	},
	{
		id: 7945, name: "Phường Phong Châu", province: 40, district: 233
	},
	{
		id: 7948, name: "Phường Âu Cơ", province: 40, district: 233
	},
	{
		id: 7951, name: "Xã Hà Lộc", province: 40, district: 233
	},
	{
		id: 7954, name: "Xã Phú Hộ", province: 40, district: 233
	},
	{
		id: 7957, name: "Xã Văn Lung", province: 40, district: 233
	},
	{
		id: 7960, name: "Xã Thanh Minh", province: 40, district: 233
	},
	{
		id: 7963, name: "Xã Hà Thạch", province: 40, district: 233
	},
	{
		id: 7966, name: "Phường Thanh Vinh", province: 40, district: 233
	},
	{
		id: 7969, name: "Thị trấn Đoan Hùng", province: 40, district: 234
	},
	{
		id: 7972, name: "Xã Đông Khê", province: 40, district: 234
	},
	{
		id: 7975, name: "Xã Nghinh Xuyên", province: 40, district: 234
	},
	{
		id: 7978, name: "Xã Hùng Quan", province: 40, district: 234
	},
	{
		id: 7981, name: "Xã Bằng Luân", province: 40, district: 234
	},
	{
		id: 7984, name: "Xã Vân Du", province: 40, district: 234
	},
	{
		id: 7987, name: "Xã Phương Trung", province: 40, district: 234
	},
	{
		id: 7990, name: "Xã Quế Lâm", province: 40, district: 234
	},
	{
		id: 7993, name: "Xã Minh Lương", province: 40, district: 234
	},
	{
		id: 7996, name: "Xã Bằng Doãn", province: 40, district: 234
	},
	{
		id: 7999, name: "Xã Chí Đám", province: 40, district: 234
	},
	{
		id: 8002, name: "Xã Phong Phú", province: 40, district: 234
	},
	{
		id: 8005, name: "Xã Phúc Lai", province: 40, district: 234
	},
	{
		id: 8008, name: "Xã Ngọc Quan", province: 40, district: 234
	},
	{
		id: 8011, name: "Xã Hữu Đô", province: 40, district: 234
	},
	{
		id: 8014, name: "Xã Đại Nghĩa", province: 40, district: 234
	},
	{
		id: 8017, name: "Xã Sóc Đăng", province: 40, district: 234
	},
	{
		id: 8020, name: "Xã Phú Thứ", province: 40, district: 234
	},
	{
		id: 8023, name: "Xã Tây Cốc", province: 40, district: 234
	},
	{
		id: 8026, name: "Xã Yên Kiện", province: 40, district: 234
	},
	{
		id: 8029, name: "Xã Hùng Long", province: 40, district: 234
	},
	{
		id: 8032, name: "Xã Vụ Quang", province: 40, district: 234
	},
	{
		id: 8035, name: "Xã Vân Đồn", province: 40, district: 234
	},
	{
		id: 8038, name: "Xã Tiêu Sơn", province: 40, district: 234
	},
	{
		id: 8041, name: "Xã Minh Tiến", province: 40, district: 234
	},
	{
		id: 8044, name: "Xã Minh Phú", province: 40, district: 234
	},
	{
		id: 8047, name: "Xã Chân Mộng", province: 40, district: 234
	},
	{
		id: 8050, name: "Xã Ca Đình", province: 40, district: 234
	},
	{
		id: 8152, name: "Thị trấn Thanh Ba", province: 40, district: 235
	},
	{
		id: 8155, name: "Xã Thanh Vân", province: 40, district: 235
	},
	{
		id: 8156, name: "Xã Vân Lĩnh", province: 40, district: 235
	},
	{
		id: 8158, name: "Xã Đông Lĩnh", province: 40, district: 235
	},
	{
		id: 8161, name: "Xã Đại An", province: 40, district: 235
	},
	{
		id: 8164, name: "Xã Hanh Cù", province: 40, district: 235
	},
	{
		id: 8167, name: "Xã Thái Ninh", province: 40, district: 235
	},
	{
		id: 8170, name: "Xã Đồng Xuân", province: 40, district: 235
	},
	{
		id: 8173, name: "Xã Năng Yên", province: 40, district: 235
	},
	{
		id: 8176, name: "Xã Yển Khê", province: 40, district: 235
	},
	{
		id: 8179, name: "Xã Ninh Dân", province: 40, district: 235
	},
	{
		id: 8182, name: "Xã Quảng Nạp", province: 40, district: 235
	},
	{
		id: 8185, name: "Xã Vũ Yển", province: 40, district: 235
	},
	{
		id: 8188, name: "Xã Yên Nội", province: 40, district: 235
	},
	{
		id: 8191, name: "Xã Phương Lĩnh", province: 40, district: 235
	},
	{
		id: 8194, name: "Xã Võ Lao", province: 40, district: 235
	},
	{
		id: 8197, name: "Xã Khải Xuân", province: 40, district: 235
	},
	{
		id: 8200, name: "Xã Mạn Lạn", province: 40, district: 235
	},
	{
		id: 8203, name: "Xã Thanh Xá", province: 40, district: 235
	},
	{
		id: 8206, name: "Xã Chí Tiên", province: 40, district: 235
	},
	{
		id: 8209, name: "Xã Đông Thành", province: 40, district: 235
	},
	{
		id: 8212, name: "Xã Hoàng Cương", province: 40, district: 235
	},
	{
		id: 8215, name: "Xã Sơn Cương", province: 40, district: 235
	},
	{
		id: 8218, name: "Xã Thanh Hà", province: 40, district: 235
	},
	{
		id: 8221, name: "Xã Đỗ Sơn", province: 40, district: 235
	},
	{
		id: 8224, name: "Xã Đỗ Xuyên", province: 40, district: 235
	},
	{
		id: 8227, name: "Xã Lương Lỗ", province: 40, district: 235
	},
	{
		id: 8053, name: "Thị trấn Hạ Hoà", province: 40, district: 236
	},
	{
		id: 8056, name: "Xã Đại Phạm", province: 40, district: 236
	},
	{
		id: 8059, name: "Xã Hậu Bổng", province: 40, district: 236
	},
	{
		id: 8062, name: "Xã Đan Hà", province: 40, district: 236
	},
	{
		id: 8065, name: "Xã Hà Lương", province: 40, district: 236
	},
	{
		id: 8068, name: "Xã Lệnh Khanh", province: 40, district: 236
	},
	{
		id: 8071, name: "Xã Phụ Khánh", province: 40, district: 236
	},
	{
		id: 8074, name: "Xã Liên Phương", province: 40, district: 236
	},
	{
		id: 8077, name: "Xã Đan Thượng", province: 40, district: 236
	},
	{
		id: 8080, name: "Xã Hiền Lương", province: 40, district: 236
	},
	{
		id: 8083, name: "Xã Động Lâm", province: 40, district: 236
	},
	{
		id: 8086, name: "Xã Lâm Lợi", province: 40, district: 236
	},
	{
		id: 8089, name: "Xã Phương Viên", province: 40, district: 236
	},
	{
		id: 8092, name: "Xã Gia Điền", province: 40, district: 236
	},
	{
		id: 8095, name: "Xã Ấm Hạ", province: 40, district: 236
	},
	{
		id: 8098, name: "Xã Quân Khê", province: 40, district: 236
	},
	{
		id: 8101, name: "Xã Y Sơn", province: 40, district: 236
	},
	{
		id: 8104, name: "Xã Hương Xạ", province: 40, district: 236
	},
	{
		id: 8107, name: "Xã Cáo Điền", province: 40, district: 236
	},
	{
		id: 8110, name: "Xã Xuân Áng", province: 40, district: 236
	},
	{
		id: 8113, name: "Xã Yên Kỳ", province: 40, district: 236
	},
	{
		id: 8116, name: "Xã Chuế Lưu", province: 40, district: 236
	},
	{
		id: 8119, name: "Xã Minh Hạc", province: 40, district: 236
	},
	{
		id: 8122, name: "Xã Lang Sơn", province: 40, district: 236
	},
	{
		id: 8125, name: "Xã Bằng Giã", province: 40, district: 236
	},
	{
		id: 8128, name: "Xã Yên Luật", province: 40, district: 236
	},
	{
		id: 8131, name: "Xã Vô Tranh", province: 40, district: 236
	},
	{
		id: 8134, name: "Xã Văn Lang", province: 40, district: 236
	},
	{
		id: 8137, name: "Xã Chính Công", province: 40, district: 236
	},
	{
		id: 8140, name: "Xã Minh Côi", province: 40, district: 236
	},
	{
		id: 8143, name: "Xã Vĩnh Chân", province: 40, district: 236
	},
	{
		id: 8146, name: "Xã Mai Tùng", province: 40, district: 236
	},
	{
		id: 8149, name: "Xã Vụ Cầu", province: 40, district: 236
	},
	{
		id: 8341, name: "Thị trấn Sông Thao", province: 40, district: 237
	},
	{
		id: 8344, name: "Xã Tiên Lương", province: 40, district: 237
	},
	{
		id: 8347, name: "Xã Tuy Lộc", province: 40, district: 237
	},
	{
		id: 8350, name: "Xã Ngô Xá", province: 40, district: 237
	},
	{
		id: 8353, name: "Xã Phương Xá", province: 40, district: 237
	},
	{
		id: 8356, name: "Xã Phượng Vĩ", province: 40, district: 237
	},
	{
		id: 8359, name: "Xã Đồng Cam", province: 40, district: 237
	},
	{
		id: 8362, name: "Xã Thụy Liễu", province: 40, district: 237
	},
	{
		id: 8365, name: "Xã Phùng Xá", province: 40, district: 237
	},
	{
		id: 8368, name: "Xã Sơn Nga", province: 40, district: 237
	},
	{
		id: 8371, name: "Xã Sai Nga", province: 40, district: 237
	},
	{
		id: 8374, name: "Xã Tùng Khê", province: 40, district: 237
	},
	{
		id: 8377, name: "Xã Tam Sơn", province: 40, district: 237
	},
	{
		id: 8380, name: "Xã Văn Bán", province: 40, district: 237
	},
	{
		id: 8383, name: "Xã Cấp Dẫn", province: 40, district: 237
	},
	{
		id: 8386, name: "Xã Thanh Nga", province: 40, district: 237
	},
	{
		id: 8389, name: "Xã Xương Thịnh", province: 40, district: 237
	},
	{
		id: 8392, name: "Xã Phú Khê", province: 40, district: 237
	},
	{
		id: 8395, name: "Xã Sơn Tình", province: 40, district: 237
	},
	{
		id: 8398, name: "Xã Yên Tập", province: 40, district: 237
	},
	{
		id: 8401, name: "Xã Hương Lung", province: 40, district: 237
	},
	{
		id: 8404, name: "Xã Tạ Xá", province: 40, district: 237
	},
	{
		id: 8407, name: "Xã Phú Lạc", province: 40, district: 237
	},
	{
		id: 8410, name: "Xã Tình Cương", province: 40, district: 237
	},
	{
		id: 8413, name: "Xã Chương Xá", province: 40, district: 237
	},
	{
		id: 8416, name: "Xã Hiền Đa", province: 40, district: 237
	},
	{
		id: 8419, name: "Xã Văn Khúc", province: 40, district: 237
	},
	{
		id: 8422, name: "Xã Yên Dưỡng", province: 40, district: 237
	},
	{
		id: 8425, name: "Xã Cát Trù", province: 40, district: 237
	},
	{
		id: 8428, name: "Xã Điêu Lương", province: 40, district: 237
	},
	{
		id: 8431, name: "Xã Đồng Lương", province: 40, district: 237
	},
	{
		id: 8290, name: "Thị trấn Yên Lập", province: 40, district: 238
	},
	{
		id: 8293, name: "Xã Mỹ Lung", province: 40, district: 238
	},
	{
		id: 8296, name: "Xã Mỹ Lương", province: 40, district: 238
	},
	{
		id: 8299, name: "Xã Lương Sơn", province: 40, district: 238
	},
	{
		id: 8302, name: "Xã Xuân An", province: 40, district: 238
	},
	{
		id: 8305, name: "Xã Xuân Viên", province: 40, district: 238
	},
	{
		id: 8308, name: "Xã Xuân Thủy", province: 40, district: 238
	},
	{
		id: 8311, name: "Xã Trung Sơn", province: 40, district: 238
	},
	{
		id: 8314, name: "Xã Hưng Long", province: 40, district: 238
	},
	{
		id: 8317, name: "Xã Nga Hoàng", province: 40, district: 238
	},
	{
		id: 8320, name: "Xã Đồng Lạc", province: 40, district: 238
	},
	{
		id: 8323, name: "Xã Thượng Long", province: 40, district: 238
	},
	{
		id: 8326, name: "Xã Đồng Thịnh", province: 40, district: 238
	},
	{
		id: 8329, name: "Xã Phúc Khánh", province: 40, district: 238
	},
	{
		id: 8332, name: "Xã Minh Hòa", province: 40, district: 238
	},
	{
		id: 8335, name: "Xã Ngọc Lập", province: 40, district: 238
	},
	{
		id: 8338, name: "Xã Ngọc Đồng", province: 40, district: 238
	},
	{
		id: 8542, name: "Thị trấn Thanh Sơn", province: 40, district: 239
	},
	{
		id: 8563, name: "Xã Sơn Hùng", province: 40, district: 239
	},
	{
		id: 8572, name: "Xã Địch Quả", province: 40, district: 239
	},
	{
		id: 8575, name: "Xã Giáp Lai", province: 40, district: 239
	},
	{
		id: 8581, name: "Xã Thục Luyện", province: 40, district: 239
	},
	{
		id: 8584, name: "Xã Võ Miếu", province: 40, district: 239
	},
	{
		id: 8587, name: "Xã Thạch Khoán", province: 40, district: 239
	},
	{
		id: 8602, name: "Xã Cự Thắng", province: 40, district: 239
	},
	{
		id: 8605, name: "Xã Tất Thắng", province: 40, district: 239
	},
	{
		id: 8611, name: "Xã Văn Miếu", province: 40, district: 239
	},
	{
		id: 8614, name: "Xã Cự Đồng", province: 40, district: 239
	},
	{
		id: 8623, name: "Xã Thắng Sơn", province: 40, district: 239
	},
	{
		id: 8629, name: "Xã Tân Minh", province: 40, district: 239
	},
	{
		id: 8632, name: "Xã Hương Cần", province: 40, district: 239
	},
	{
		id: 8635, name: "Xã Khả Cửu", province: 40, district: 239
	},
	{
		id: 8638, name: "Xã Đông Cửu", province: 40, district: 239
	},
	{
		id: 8641, name: "Xã Tân Lập", province: 40, district: 239
	},
	{
		id: 8644, name: "Xã Yên Lãng", province: 40, district: 239
	},
	{
		id: 8647, name: "Xã Yên Lương", province: 40, district: 239
	},
	{
		id: 8650, name: "Xã Thượng Cửu", province: 40, district: 239
	},
	{
		id: 8653, name: "Xã Lương Nha", province: 40, district: 239
	},
	{
		id: 8656, name: "Xã Yên Sơn", province: 40, district: 239
	},
	{
		id: 8659, name: "Xã Tinh Nhuệ", province: 40, district: 239
	},
	{
		id: 8230, name: "Thị trấn Phong Châu", province: 40, district: 240
	},
	{
		id: 8233, name: "Xã Phú Mỹ", province: 40, district: 240
	},
	{
		id: 8234, name: "Xã Lệ Mỹ", province: 40, district: 240
	},
	{
		id: 8236, name: "Xã Liên Hoa", province: 40, district: 240
	},
	{
		id: 8239, name: "Xã Trạm Thản", province: 40, district: 240
	},
	{
		id: 8242, name: "Xã Trị Quận", province: 40, district: 240
	},
	{
		id: 8245, name: "Xã Trung Giáp", province: 40, district: 240
	},
	{
		id: 8248, name: "Xã Tiên Phú", province: 40, district: 240
	},
	{
		id: 8251, name: "Xã Hạ Giáp", province: 40, district: 240
	},
	{
		id: 8254, name: "Xã Bảo Thanh", province: 40, district: 240
	},
	{
		id: 8257, name: "Xã Phú Lộc", province: 40, district: 240
	},
	{
		id: 8260, name: "Xã Gia Thanh", province: 40, district: 240
	},
	{
		id: 8263, name: "Xã Tiên Du", province: 40, district: 240
	},
	{
		id: 8266, name: "Xã Phú Nham", province: 40, district: 240
	},
	{
		id: 8269, name: "Xã Bình Bộ", province: 40, district: 240
	},
	{
		id: 8272, name: "Xã An Đạo", province: 40, district: 240
	},
	{
		id: 8275, name: "Xã Tử Đà", province: 40, district: 240
	},
	{
		id: 8278, name: "Xã Phù Ninh", province: 40, district: 240
	},
	{
		id: 8284, name: "Xã Vĩnh Phú", province: 40, district: 240
	},
	{
		id: 8494, name: "Thị trấn Lâm Thao", province: 40, district: 241
	},
	{
		id: 8497, name: "Xã Tiên Kiên", province: 40, district: 241
	},
	{
		id: 8498, name: "Thị trấn Sơn Hùng", province: 40, district: 241
	},
	{
		id: 8500, name: "Xã Xuân Lũng", province: 40, district: 241
	},
	{
		id: 8509, name: "Xã Xuân Huy", province: 40, district: 241
	},
	{
		id: 8512, name: "Xã Thạch Sơn", province: 40, district: 241
	},
	{
		id: 8518, name: "Xã Sơn Vi", province: 40, district: 241
	},
	{
		id: 8521, name: "Xã Hợp Hải", province: 40, district: 241
	},
	{
		id: 8524, name: "Xã Sơn Dương", province: 40, district: 241
	},
	{
		id: 8527, name: "Xã Cao Xá", province: 40, district: 241
	},
	{
		id: 8530, name: "Xã Kinh Kệ", province: 40, district: 241
	},
	{
		id: 8533, name: "Xã Vĩnh Lại", province: 40, district: 241
	},
	{
		id: 8536, name: "Xã Tứ Xã", province: 40, district: 241
	},
	{
		id: 8539, name: "Xã Bản Nguyên", province: 40, district: 241
	},
	{
		id: 8434, name: "Thị trấn Hưng Hoá", province: 40, district: 242
	},
	{
		id: 8437, name: "Xã Vực Trường", province: 40, district: 242
	},
	{
		id: 8440, name: "Xã Hiền Quan", province: 40, district: 242
	},
	{
		id: 8443, name: "Xã Hương Nha", province: 40, district: 242
	},
	{
		id: 8446, name: "Xã Thanh Uyên", province: 40, district: 242
	},
	{
		id: 8449, name: "Xã Xuân Quang", province: 40, district: 242
	},
	{
		id: 8452, name: "Xã Tứ Mỹ", province: 40, district: 242
	},
	{
		id: 8455, name: "Xã Văn Lương", province: 40, district: 242
	},
	{
		id: 8458, name: "Xã Hùng Đô", province: 40, district: 242
	},
	{
		id: 8461, name: "Xã Phương Thịnh", province: 40, district: 242
	},
	{
		id: 8464, name: "Xã Tam Cường", province: 40, district: 242
	},
	{
		id: 8467, name: "Xã Cổ Tiết", province: 40, district: 242
	},
	{
		id: 8470, name: "Xã Quang Húc", province: 40, district: 242
	},
	{
		id: 8473, name: "Xã Hương Nộn", province: 40, district: 242
	},
	{
		id: 8476, name: "Xã Tề Lễ", province: 40, district: 242
	},
	{
		id: 8479, name: "Xã Thọ Văn", province: 40, district: 242
	},
	{
		id: 8482, name: "Xã Dị Nậu", province: 40, district: 242
	},
	{
		id: 8485, name: "Xã Hồng Đà", province: 40, district: 242
	},
	{
		id: 8488, name: "Xã Dậu Dương", province: 40, district: 242
	},
	{
		id: 8491, name: "Xã Thượng Nông", province: 40, district: 242
	},
	{
		id: 8662, name: "Xã Đào Xá", province: 40, district: 243
	},
	{
		id: 8665, name: "Xã Thạch Đồng", province: 40, district: 243
	},
	{
		id: 8668, name: "Xã Xuân Lộc", province: 40, district: 243
	},
	{
		id: 8671, name: "Xã Tân Phương", province: 40, district: 243
	},
	{
		id: 8674, name: "Thị trấn Thanh Thủy", province: 40, district: 243
	},
	{
		id: 8677, name: "Xã Sơn Thủy", province: 40, district: 243
	},
	{
		id: 8680, name: "Xã Bảo Yên", province: 40, district: 243
	},
	{
		id: 8683, name: "Xã Đoan Hạ", province: 40, district: 243
	},
	{
		id: 8686, name: "Xã Đồng Luận", province: 40, district: 243
	},
	{
		id: 8689, name: "Xã Hoàng Xá", province: 40, district: 243
	},
	{
		id: 8692, name: "Xã Trung Thịnh", province: 40, district: 243
	},
	{
		id: 8695, name: "Xã Trung Nghĩa", province: 40, district: 243
	},
	{
		id: 8698, name: "Xã Phượng Mao", province: 40, district: 243
	},
	{
		id: 8701, name: "Xã Yến Mao", province: 40, district: 243
	},
	{
		id: 8704, name: "Xã Tu Vũ", province: 40, district: 243
	},
	{
		id: 8545, name: "Xã Thu Cúc", province: 40, district: 734
	},
	{
		id: 8548, name: "Xã Thạch Kiệt", province: 40, district: 734
	},
	{
		id: 8551, name: "Xã Thu Ngạc", province: 40, district: 734
	},
	{
		id: 8554, name: "Xã Kiệt Sơn", province: 40, district: 734
	},
	{
		id: 8557, name: "Xã Đồng Sơn", province: 40, district: 734
	},
	{
		id: 8560, name: "Xã Lai Đồng", province: 40, district: 734
	},
	{
		id: 8566, name: "Xã Tân Phú", province: 40, district: 734
	},
	{
		id: 8569, name: "Xã Mỹ Thuận", province: 40, district: 734
	},
	{
		id: 8578, name: "Xã Tân Sơn", province: 40, district: 734
	},
	{
		id: 8590, name: "Xã Xuân Đài", province: 40, district: 734
	},
	{
		id: 8593, name: "Xã Minh Đài", province: 40, district: 734
	},
	{
		id: 8596, name: "Xã Văn Luông", province: 40, district: 734
	},
	{
		id: 8599, name: "Xã Xuân Sơn", province: 40, district: 734
	},
	{
		id: 8608, name: "Xã Long Cốc", province: 40, district: 734
	},
	{
		id: 8617, name: "Xã Kim Thượng", province: 40, district: 734
	},
	{
		id: 8620, name: "Xã Tam Thanh", province: 40, district: 734
	},
	{
		id: 8626, name: "Xã Vinh Tiền", province: 40, district: 734
	},
	{
		id: 22015, name: "Phường 1", province: 41, district: 503
	},
	{
		id: 22018, name: "Phường 8", province: 41, district: 503
	},
	{
		id: 22021, name: "Phường 2", province: 41, district: 503
	},
	{
		id: 22024, name: "Phường 9", province: 41, district: 503
	},
	{
		id: 22027, name: "Phường 3", province: 41, district: 503
	},
	{
		id: 22030, name: "Phường 4", province: 41, district: 503
	},
	{
		id: 22033, name: "Phường 5", province: 41, district: 503
	},
	{
		id: 22036, name: "Phường 7", province: 41, district: 503
	},
	{
		id: 22039, name: "Phường 6", province: 41, district: 503
	},
	{
		id: 22040, name: "Phường Phú Thạnh", province: 41, district: 503
	},
	{
		id: 22041, name: "Phường Phú Đông", province: 41, district: 503
	},
	{
		id: 22042, name: "Xã Hòa Kiến", province: 41, district: 503
	},
	{
		id: 22045, name: "Xã Bình Kiến", province: 41, district: 503
	},
	{
		id: 22048, name: "Xã Bình Ngọc", province: 41, district: 503
	},
	{
		id: 22162, name: "Xã An Phú", province: 41, district: 503
	},
	{
		id: 22240, name: "Phường Phú Lâm", province: 41, district: 503
	},
	{
		id: 22081, name: "Thị trấn La Hai", province: 41, district: 504
	},
	{
		id: 22084, name: "Xã Đa Lộc", province: 41, district: 504
	},
	{
		id: 22087, name: "Xã Phú Mỡ", province: 41, district: 504
	},
	{
		id: 22090, name: "Xã Xuân Lãnh", province: 41, district: 504
	},
	{
		id: 22093, name: "Xã Xuân Long", province: 41, district: 504
	},
	{
		id: 22096, name: "Xã Xuân Quang 1", province: 41, district: 504
	},
	{
		id: 22099, name: "Xã Xuân Sơn Bắc", province: 41, district: 504
	},
	{
		id: 22102, name: "Xã Xuân Quang 2", province: 41, district: 504
	},
	{
		id: 22105, name: "Xã Xuân Sơn Nam", province: 41, district: 504
	},
	{
		id: 22108, name: "Xã Xuân Quang 3", province: 41, district: 504
	},
	{
		id: 22111, name: "Xã Xuân Phước", province: 41, district: 504
	},
	{
		id: 22051, name: "Phường Xuân Phú", province: 41, district: 505
	},
	{
		id: 22052, name: "Xã Xuân Lâm", province: 41, district: 505
	},
	{
		id: 22053, name: "Phường Xuân Thành", province: 41, district: 505
	},
	{
		id: 22054, name: "Xã Xuân Hải", province: 41, district: 505
	},
	{
		id: 22057, name: "Xã Xuân Lộc", province: 41, district: 505
	},
	{
		id: 22060, name: "Xã Xuân Bình", province: 41, district: 505
	},
	{
		id: 22063, name: "Xã Xuân Hòa", province: 41, district: 505
	},
	{
		id: 22066, name: "Xã Xuân Cảnh", province: 41, district: 505
	},
	{
		id: 22069, name: "Xã Xuân Thịnh", province: 41, district: 505
	},
	{
		id: 22072, name: "Xã Xuân Phương", province: 41, district: 505
	},
	{
		id: 22073, name: "Phường Xuân Yên", province: 41, district: 505
	},
	{
		id: 22075, name: "Xã Xuân Thọ 1", province: 41, district: 505
	},
	{
		id: 22076, name: "Phường Xuân Đài", province: 41, district: 505
	},
	{
		id: 22078, name: "Xã Xuân Thọ 2", province: 41, district: 505
	},
	{
		id: 22114, name: "Thị trấn Chí Thạnh", province: 41, district: 506
	},
	{
		id: 22117, name: "Xã An Dân", province: 41, district: 506
	},
	{
		id: 22120, name: "Xã An Ninh Tây", province: 41, district: 506
	},
	{
		id: 22123, name: "Xã An Ninh Đông", province: 41, district: 506
	},
	{
		id: 22126, name: "Xã An Thạch", province: 41, district: 506
	},
	{
		id: 22129, name: "Xã An Định", province: 41, district: 506
	},
	{
		id: 22132, name: "Xã An Nghiệp", province: 41, district: 506
	},
	{
		id: 22135, name: "Xã An Hải", province: 41, district: 506
	},
	{
		id: 22138, name: "Xã An Cư", province: 41, district: 506
	},
	{
		id: 22141, name: "Xã An Xuân", province: 41, district: 506
	},
	{
		id: 22144, name: "Xã An Lĩnh", province: 41, district: 506
	},
	{
		id: 22147, name: "Xã An Hòa", province: 41, district: 506
	},
	{
		id: 22150, name: "Xã An Hiệp", province: 41, district: 506
	},
	{
		id: 22153, name: "Xã An Mỹ", province: 41, district: 506
	},
	{
		id: 22156, name: "Xã An Chấn", province: 41, district: 506
	},
	{
		id: 22159, name: "Xã An Thọ", province: 41, district: 506
	},
	{
		id: 22165, name: "Thị trấn Củng Sơn", province: 41, district: 507
	},
	{
		id: 22168, name: "Xã Phước Tân", province: 41, district: 507
	},
	{
		id: 22171, name: "Xã Sơn Hội", province: 41, district: 507
	},
	{
		id: 22174, name: "Xã Sơn Định", province: 41, district: 507
	},
	{
		id: 22177, name: "Xã Sơn Long", province: 41, district: 507
	},
	{
		id: 22180, name: "Xã Cà Lúi", province: 41, district: 507
	},
	{
		id: 22183, name: "Xã Sơn Phước", province: 41, district: 507
	},
	{
		id: 22186, name: "Xã Sơn Xuân", province: 41, district: 507
	},
	{
		id: 22189, name: "Xã Sơn Nguyên", province: 41, district: 507
	},
	{
		id: 22192, name: "Xã Eachà Rang", province: 41, district: 507
	},
	{
		id: 22195, name: "Xã Krông Pa", province: 41, district: 507
	},
	{
		id: 22198, name: "Xã Suối Bạc", province: 41, district: 507
	},
	{
		id: 22201, name: "Xã Sơn Hà", province: 41, district: 507
	},
	{
		id: 22204, name: "Xã Suối Trai", province: 41, district: 507
	},
	{
		id: 22207, name: "Thị trấn Hai Riêng", province: 41, district: 508
	},
	{
		id: 22210, name: "Xã Ea Lâm", province: 41, district: 508
	},
	{
		id: 22213, name: "Xã Đức Bình Tây", province: 41, district: 508
	},
	{
		id: 22216, name: "Xã Ea Bá", province: 41, district: 508
	},
	{
		id: 22219, name: "Xã Sơn Giang", province: 41, district: 508
	},
	{
		id: 22220, name: "Xã Ea Ly", province: 41, district: 508
	},
	{
		id: 22222, name: "Xã Đức Bình Đông", province: 41, district: 508
	},
	{
		id: 22225, name: "Xã Ea Bar", province: 41, district: 508
	},
	{
		id: 22228, name: "Xã Ea Bia", province: 41, district: 508
	},
	{
		id: 22231, name: "Xã Eatrol", province: 41, district: 508
	},
	{
		id: 22234, name: "Xã Sông Hinh", province: 41, district: 508
	},
	{
		id: 22243, name: "Xã Hòa Thành", province: 41, district: 509
	},
	{
		id: 22246, name: "Xã Hòa Hiệp Bắc", province: 41, district: 509
	},
	{
		id: 22258, name: "Thị trấn Hoà Vinh", province: 41, district: 509
	},
	{
		id: 22261, name: "Thị trấn Hoà Hiệp Trung", province: 41, district: 509
	},
	{
		id: 22267, name: "Xã Hòa Tân Đông", province: 41, district: 509
	},
	{
		id: 22279, name: "Xã Hòa Xuân Tây", province: 41, district: 509
	},
	{
		id: 22282, name: "Xã Hòa Hiệp Nam", province: 41, district: 509
	},
	{
		id: 22291, name: "Xã Hòa Xuân Đông", province: 41, district: 509
	},
	{
		id: 22297, name: "Xã Hòa Tâm", province: 41, district: 509
	},
	{
		id: 22300, name: "Xã Hòa Xuân Nam", province: 41, district: 509
	},
	{
		id: 22303, name: "Xã Hòa Quang Bắc", province: 41, district: 510
	},
	{
		id: 22306, name: "Xã Hoà Quang Nam", province: 41, district: 510
	},
	{
		id: 22309, name: "Xã Hòa Hội", province: 41, district: 510
	},
	{
		id: 22312, name: "Xã Hòa Trị", province: 41, district: 510
	},
	{
		id: 22315, name: "Xã Hòa An", province: 41, district: 510
	},
	{
		id: 22318, name: "Xã Hòa Định Đông", province: 41, district: 510
	},
	{
		id: 22319, name: "Thị trấn Phú Hoà", province: 41, district: 510
	},
	{
		id: 22321, name: "Xã Hòa Định Tây", province: 41, district: 510
	},
	{
		id: 22324, name: "Xã Hòa Thắng", province: 41, district: 510
	},
	{
		id: 22249, name: "Xã Sơn Thành Tây", province: 41, district: 511
	},
	{
		id: 22250, name: "Xã Sơn Thành Đông", province: 41, district: 511
	},
	{
		id: 22252, name: "Xã Hòa Bình 1", province: 41, district: 511
	},
	{
		id: 22255, name: "Thị trấn Phú Thứ", province: 41, district: 511
	},
	{
		id: 22264, name: "Xã Hòa Phong", province: 41, district: 511
	},
	{
		id: 22270, name: "Xã Hòa Phú", province: 41, district: 511
	},
	{
		id: 22273, name: "Xã Hòa Tân Tây", province: 41, district: 511
	},
	{
		id: 22276, name: "Xã Hòa Đồng", province: 41, district: 511
	},
	{
		id: 22285, name: "Xã Hòa Mỹ Đông", province: 41, district: 511
	},
	{
		id: 22288, name: "Xã Hòa Mỹ Tây", province: 41, district: 511
	},
	{
		id: 22294, name: "Xã Hòa Thịnh", province: 41, district: 511
	},
	{
		id: 18853, name: "Phường Hải Thành", province: 42, district: 512
	},
	{
		id: 18856, name: "Phường Đồng Phú", province: 42, district: 512
	},
	{
		id: 18859, name: "Phường Bắc Lý", province: 42, district: 512
	},
	{
		id: 18862, name: "Phường Đồng Mỹ", province: 42, district: 512
	},
	{
		id: 18865, name: "Phường Nam Lý", province: 42, district: 512
	},
	{
		id: 18868, name: "Phường Hải Đình", province: 42, district: 512
	},
	{
		id: 18871, name: "Phường Đồng Sơn", province: 42, district: 512
	},
	{
		id: 18874, name: "Phường Phú Hải", province: 42, district: 512
	},
	{
		id: 18877, name: "Phường Bắc Nghĩa", province: 42, district: 512
	},
	{
		id: 18880, name: "Phường Đức Ninh Đông", province: 42, district: 512
	},
	{
		id: 18883, name: "Xã Quang Phú", province: 42, district: 512
	},
	{
		id: 18886, name: "Xã Lộc Ninh", province: 42, district: 512
	},
	{
		id: 18889, name: "Xã Bảo Ninh", province: 42, district: 512
	},
	{
		id: 18892, name: "Xã Nghĩa Ninh", province: 42, district: 512
	},
	{
		id: 18895, name: "Xã Thuận Đức", province: 42, district: 512
	},
	{
		id: 18898, name: "Xã Đức Ninh", province: 42, district: 512
	},
	{
		id: 18949, name: "Thị trấn Đồng Lê", province: 42, district: 513
	},
	{
		id: 18952, name: "Xã Hương Hóa", province: 42, district: 513
	},
	{
		id: 18955, name: "Xã Kim Hóa", province: 42, district: 513
	},
	{
		id: 18958, name: "Xã Thanh Hóa", province: 42, district: 513
	},
	{
		id: 18961, name: "Xã Thanh Thạch", province: 42, district: 513
	},
	{
		id: 18964, name: "Xã Thuận Hóa", province: 42, district: 513
	},
	{
		id: 18967, name: "Xã Lâm Hóa", province: 42, district: 513
	},
	{
		id: 18970, name: "Xã Lê Hóa", province: 42, district: 513
	},
	{
		id: 18973, name: "Xã Sơn Hoá", province: 42, district: 513
	},
	{
		id: 18976, name: "Xã Đồng Hóa", province: 42, district: 513
	},
	{
		id: 18979, name: "Xã Ngư Hóa", province: 42, district: 513
	},
	{
		id: 18982, name: "Xã Nam Hoá", province: 42, district: 513
	},
	{
		id: 18985, name: "Xã Thạch Hóa", province: 42, district: 513
	},
	{
		id: 18988, name: "Xã Đức Hóa", province: 42, district: 513
	},
	{
		id: 18991, name: "Xã Phong Hóa", province: 42, district: 513
	},
	{
		id: 18994, name: "Xã Mai Hóa", province: 42, district: 513
	},
	{
		id: 18997, name: "Xã Tiến Hóa", province: 42, district: 513
	},
	{
		id: 19000, name: "Xã Châu Hóa", province: 42, district: 513
	},
	{
		id: 19003, name: "Xã Cao Quảng", province: 42, district: 513
	},
	{
		id: 19006, name: "Xã Văn Hóa", province: 42, district: 513
	},
	{
		id: 18901, name: "Thị trấn Quy Đạt", province: 42, district: 514
	},
	{
		id: 18904, name: "Xã Dân Hóa", province: 42, district: 514
	},
	{
		id: 18907, name: "Xã Trọng Hoá", province: 42, district: 514
	},
	{
		id: 18910, name: "Xã Hóa Phúc", province: 42, district: 514
	},
	{
		id: 18913, name: "Xã Hồng Hóa", province: 42, district: 514
	},
	{
		id: 18916, name: "Xã Hóa Thanh", province: 42, district: 514
	},
	{
		id: 18919, name: "Xã Hóa Tiến", province: 42, district: 514
	},
	{
		id: 18922, name: "Xã Hóa Hợp", province: 42, district: 514
	},
	{
		id: 18925, name: "Xã Xuân Hóa", province: 42, district: 514
	},
	{
		id: 18928, name: "Xã Yên Hóa", province: 42, district: 514
	},
	{
		id: 18931, name: "Xã Minh Hóa", province: 42, district: 514
	},
	{
		id: 18934, name: "Xã Tân Hóa", province: 42, district: 514
	},
	{
		id: 18937, name: "Xã Hóa Sơn", province: 42, district: 514
	},
	{
		id: 18940, name: "Xã Quy Hóa", province: 42, district: 514
	},
	{
		id: 18943, name: "Xã Trung Hóa", province: 42, district: 514
	},
	{
		id: 18946, name: "Xã Thượng Hóa", province: 42, district: 514
	},
	{
		id: 19012, name: "Xã Quảng Hợp", province: 42, district: 515
	},
	{
		id: 19015, name: "Xã Quảng Kim", province: 42, district: 515
	},
	{
		id: 19018, name: "Xã Quảng Đông", province: 42, district: 515
	},
	{
		id: 19021, name: "Xã Quảng Phú", province: 42, district: 515
	},
	{
		id: 19024, name: "Xã Quảng Châu", province: 42, district: 515
	},
	{
		id: 19027, name: "Xã Quảng Thạch", province: 42, district: 515
	},
	{
		id: 19030, name: "Xã Quảng Lưu", province: 42, district: 515
	},
	{
		id: 19033, name: "Xã Quảng Tùng", province: 42, district: 515
	},
	{
		id: 19036, name: "Xã Cảnh Dương", province: 42, district: 515
	},
	{
		id: 19039, name: "Xã Quảng Tiến", province: 42, district: 515
	},
	{
		id: 19042, name: "Xã Quảng Hưng", province: 42, district: 515
	},
	{
		id: 19045, name: "Xã Quảng Xuân", province: 42, district: 515
	},
	{
		id: 19048, name: "Xã Cảnh Hóa", province: 42, district: 515
	},
	{
		id: 19051, name: "Xã Quảng Liên", province: 42, district: 515
	},
	{
		id: 19054, name: "Xã Quảng Trường", province: 42, district: 515
	},
	{
		id: 19057, name: "Xã Quảng Phương", province: 42, district: 515
	},
	{
		id: 19063, name: "Xã Phù Hóa", province: 42, district: 515
	},
	{
		id: 19072, name: "Xã Quảng Thanh", province: 42, district: 515
	},
	{
		id: 19111, name: "Thị trấn Hoàn Lão", province: 42, district: 516
	},
	{
		id: 19114, name: "Thị trấn Nt Việt Trung", province: 42, district: 516
	},
	{
		id: 19117, name: "Xã Xuân Trạch", province: 42, district: 516
	},
	{
		id: 19120, name: "Xã Mỹ Trạch", province: 42, district: 516
	},
	{
		id: 19123, name: "Xã Hạ Trạch", province: 42, district: 516
	},
	{
		id: 19126, name: "Xã Bắc Trạch", province: 42, district: 516
	},
	{
		id: 19129, name: "Xã Lâm Trạch", province: 42, district: 516
	},
	{
		id: 19132, name: "Xã Thanh Trạch", province: 42, district: 516
	},
	{
		id: 19135, name: "Xã Liên Trạch", province: 42, district: 516
	},
	{
		id: 19138, name: "Xã Phúc Trạch", province: 42, district: 516
	},
	{
		id: 19141, name: "Xã Cự Nẫm", province: 42, district: 516
	},
	{
		id: 19144, name: "Xã Hải Trạch", province: 42, district: 516
	},
	{
		id: 19147, name: "Xã Thượng Trạch", province: 42, district: 516
	},
	{
		id: 19150, name: "Xã Sơn Lộc", province: 42, district: 516
	},
	{
		id: 19153, name: "Xã Phú Trạch", province: 42, district: 516
	},
	{
		id: 19156, name: "Xã Hưng Trạch", province: 42, district: 516
	},
	{
		id: 19159, name: "Xã Đồng Trạch", province: 42, district: 516
	},
	{
		id: 19162, name: "Xã Đức Trạch", province: 42, district: 516
	},
	{
		id: 19165, name: "Xã Sơn Trạch", province: 42, district: 516
	},
	{
		id: 19168, name: "Xã Vạn Trạch", province: 42, district: 516
	},
	{
		id: 19171, name: "Xã Hoàn Trạch", province: 42, district: 516
	},
	{
		id: 19174, name: "Xã Phú Định", province: 42, district: 516
	},
	{
		id: 19177, name: "Xã Trung Trạch", province: 42, district: 516
	},
	{
		id: 19180, name: "Xã Tây Trạch", province: 42, district: 516
	},
	{
		id: 19183, name: "Xã Hoà Trạch", province: 42, district: 516
	},
	{
		id: 19186, name: "Xã Đại Trạch", province: 42, district: 516
	},
	{
		id: 19189, name: "Xã Nhân Trạch", province: 42, district: 516
	},
	{
		id: 19192, name: "Xã Tân Trạch", province: 42, district: 516
	},
	{
		id: 19195, name: "Xã Nam Trạch", province: 42, district: 516
	},
	{
		id: 19198, name: "Xã Lý Trạch", province: 42, district: 516
	},
	{
		id: 19201, name: "Thị trấn Quán Hàu", province: 42, district: 517
	},
	{
		id: 19204, name: "Xã Trường Sơn", province: 42, district: 517
	},
	{
		id: 19207, name: "Xã Lương Ninh", province: 42, district: 517
	},
	{
		id: 19210, name: "Xã Vĩnh Ninh", province: 42, district: 517
	},
	{
		id: 19213, name: "Xã Võ Ninh", province: 42, district: 517
	},
	{
		id: 19216, name: "Xã Hải Ninh", province: 42, district: 517
	},
	{
		id: 19219, name: "Xã Hàm Ninh", province: 42, district: 517
	},
	{
		id: 19222, name: "Xã Duy Ninh", province: 42, district: 517
	},
	{
		id: 19225, name: "Xã Gia Ninh", province: 42, district: 517
	},
	{
		id: 19228, name: "Xã Trường Xuân", province: 42, district: 517
	},
	{
		id: 19231, name: "Xã Hiền Ninh", province: 42, district: 517
	},
	{
		id: 19234, name: "Xã Tân Ninh", province: 42, district: 517
	},
	{
		id: 19237, name: "Xã Xuân Ninh", province: 42, district: 517
	},
	{
		id: 19240, name: "Xã An Ninh", province: 42, district: 517
	},
	{
		id: 19243, name: "Xã Vạn Ninh", province: 42, district: 517
	},
	{
		id: 19246, name: "Thị trấn Nt Lệ Ninh", province: 42, district: 518
	},
	{
		id: 19249, name: "Thị trấn Kiến Giang", province: 42, district: 518
	},
	{
		id: 19252, name: "Xã Hồng Thủy", province: 42, district: 518
	},
	{
		id: 19255, name: "Xã Ngư Thuỷ Bắc", province: 42, district: 518
	},
	{
		id: 19258, name: "Xã Hoa Thủy", province: 42, district: 518
	},
	{
		id: 19261, name: "Xã Thanh Thủy", province: 42, district: 518
	},
	{
		id: 19264, name: "Xã An Thủy", province: 42, district: 518
	},
	{
		id: 19267, name: "Xã Phong Thủy", province: 42, district: 518
	},
	{
		id: 19270, name: "Xã Cam Thủy", province: 42, district: 518
	},
	{
		id: 19273, name: "Xã Ngân Thủy", province: 42, district: 518
	},
	{
		id: 19276, name: "Xã Sơn Thủy", province: 42, district: 518
	},
	{
		id: 19279, name: "Xã Lộc Thủy", province: 42, district: 518
	},
	{
		id: 19282, name: "Xã Ngư Thuỷ Trung", province: 42, district: 518
	},
	{
		id: 19285, name: "Xã Liên Thủy", province: 42, district: 518
	},
	{
		id: 19288, name: "Xã Hưng Thủy", province: 42, district: 518
	},
	{
		id: 19291, name: "Xã Dương Thủy", province: 42, district: 518
	},
	{
		id: 19294, name: "Xã Tân Thủy", province: 42, district: 518
	},
	{
		id: 19297, name: "Xã Phú Thủy", province: 42, district: 518
	},
	{
		id: 19300, name: "Xã Xuân Thủy", province: 42, district: 518
	},
	{
		id: 19303, name: "Xã Mỹ Thủy", province: 42, district: 518
	},
	{
		id: 19306, name: "Xã Ngư Thủy Nam", province: 42, district: 518
	},
	{
		id: 19309, name: "Xã Mai Thủy", province: 42, district: 518
	},
	{
		id: 19312, name: "Xã Sen Thủy", province: 42, district: 518
	},
	{
		id: 19315, name: "Xã Thái Thủy", province: 42, district: 518
	},
	{
		id: 19318, name: "Xã Kim Thủy", province: 42, district: 518
	},
	{
		id: 19321, name: "Xã Trường Thủy", province: 42, district: 518
	},
	{
		id: 19324, name: "Xã Văn Thủy", province: 42, district: 518
	},
	{
		id: 19327, name: "Xã Lâm Thuỷ", province: 42, district: 518
	},
	{
		id: 19009, name: "Phường Ba Đồn", province: 42, district: 750
	},
	{
		id: 19060, name: "Phường Quảng Long", province: 42, district: 750
	},
	{
		id: 19066, name: "Phường Quảng Thọ", province: 42, district: 750
	},
	{
		id: 19069, name: "Xã Quảng Tiên", province: 42, district: 750
	},
	{
		id: 19075, name: "Xã Quảng Trung", province: 42, district: 750
	},
	{
		id: 19078, name: "Phường Quảng Phong", province: 42, district: 750
	},
	{
		id: 19081, name: "Phường Quảng Thuận", province: 42, district: 750
	},
	{
		id: 19084, name: "Xã Quảng Tân", province: 42, district: 750
	},
	{
		id: 19087, name: "Xã Quảng Hải", province: 42, district: 750
	},
	{
		id: 19090, name: "Xã Quảng Sơn", province: 42, district: 750
	},
	{
		id: 19093, name: "Xã Quảng Lộc", province: 42, district: 750
	},
	{
		id: 19096, name: "Xã Quảng Thủy", province: 42, district: 750
	},
	{
		id: 19099, name: "Xã Quảng Văn", province: 42, district: 750
	},
	{
		id: 19102, name: "Phường Quảng Phúc", province: 42, district: 750
	},
	{
		id: 19105, name: "Xã Quảng Hòa", province: 42, district: 750
	},
	{
		id: 19108, name: "Xã Quảng Minh", province: 42, district: 750
	},
	{
		id: 20335, name: "Phường Tân Thạnh", province: 43, district: 519
	},
	{
		id: 20338, name: "Phường Phước Hòa", province: 43, district: 519
	},
	{
		id: 20341, name: "Phường An Mỹ", province: 43, district: 519
	},
	{
		id: 20344, name: "Phường Hòa Hương", province: 43, district: 519
	},
	{
		id: 20347, name: "Phường An Xuân", province: 43, district: 519
	},
	{
		id: 20350, name: "Phường An Sơn", province: 43, district: 519
	},
	{
		id: 20353, name: "Phường Trường Xuân", province: 43, district: 519
	},
	{
		id: 20356, name: "Phường An Phú", province: 43, district: 519
	},
	{
		id: 20359, name: "Xã Tam Thanh", province: 43, district: 519
	},
	{
		id: 20362, name: "Xã Tam Thăng", province: 43, district: 519
	},
	{
		id: 20371, name: "Xã Tam Phú", province: 43, district: 519
	},
	{
		id: 20375, name: "Phường Hoà Thuận", province: 43, district: 519
	},
	{
		id: 20389, name: "Xã Tam Ngọc", province: 43, district: 519
	},
	{
		id: 20398, name: "Phường Minh An", province: 43, district: 520
	},
	{
		id: 20401, name: "Phường Tân An", province: 43, district: 520
	},
	{
		id: 20404, name: "Phường Cẩm Phô", province: 43, district: 520
	},
	{
		id: 20407, name: "Phường Thanh Hà", province: 43, district: 520
	},
	{
		id: 20410, name: "Phường Sơn Phong", province: 43, district: 520
	},
	{
		id: 20413, name: "Phường Cẩm Châu", province: 43, district: 520
	},
	{
		id: 20416, name: "Phường Cửa Đại", province: 43, district: 520
	},
	{
		id: 20419, name: "Phường Cẩm An", province: 43, district: 520
	},
	{
		id: 20422, name: "Xã Cẩm Hà", province: 43, district: 520
	},
	{
		id: 20425, name: "Xã Cẩm Kim", province: 43, district: 520
	},
	{
		id: 20428, name: "Phường Cẩm Nam", province: 43, district: 520
	},
	{
		id: 20431, name: "Xã Cẩm Thanh", province: 43, district: 520
	},
	{
		id: 20434, name: "Xã Tân Hiệp", province: 43, district: 520
	},
	{
		id: 20599, name: "Thị trấn Nam Phước", province: 43, district: 521
	},
	{
		id: 20602, name: "Xã Duy Thu", province: 43, district: 521
	},
	{
		id: 20605, name: "Xã Duy Phú", province: 43, district: 521
	},
	{
		id: 20608, name: "Xã Duy Tân", province: 43, district: 521
	},
	{
		id: 20611, name: "Xã Duy Hòa", province: 43, district: 521
	},
	{
		id: 20614, name: "Xã Duy Châu", province: 43, district: 521
	},
	{
		id: 20617, name: "Xã Duy Trinh", province: 43, district: 521
	},
	{
		id: 20620, name: "Xã Duy Sơn", province: 43, district: 521
	},
	{
		id: 20623, name: "Xã Duy Trung", province: 43, district: 521
	},
	{
		id: 20626, name: "Xã Duy Phước", province: 43, district: 521
	},
	{
		id: 20629, name: "Xã Duy Thành", province: 43, district: 521
	},
	{
		id: 20632, name: "Xã Duy Vinh", province: 43, district: 521
	},
	{
		id: 20635, name: "Xã Duy Nghĩa", province: 43, district: 521
	},
	{
		id: 20638, name: "Xã Duy Hải", province: 43, district: 521
	},
	{
		id: 20551, name: "Thị trấn Vĩnh Điện", province: 43, district: 522
	},
	{
		id: 20554, name: "Xã Điện Tiến", province: 43, district: 522
	},
	{
		id: 20557, name: "Xã Điện Hòa", province: 43, district: 522
	},
	{
		id: 20560, name: "Xã Điện Thắng Bắc", province: 43, district: 522
	},
	{
		id: 20561, name: "Xã Điện Thắng Trung", province: 43, district: 522
	},
	{
		id: 20562, name: "Xã Điện Thắng Nam", province: 43, district: 522
	},
	{
		id: 20563, name: "Xã Điện Ngọc", province: 43, district: 522
	},
	{
		id: 20566, name: "Xã Điện Hồng", province: 43, district: 522
	},
	{
		id: 20569, name: "Xã Điện Thọ", province: 43, district: 522
	},
	{
		id: 20572, name: "Xã Điện Phước", province: 43, district: 522
	},
	{
		id: 20575, name: "Xã Điện An", province: 43, district: 522
	},
	{
		id: 20578, name: "Xã Điện Nam Bắc", province: 43, district: 522
	},
	{
		id: 20579, name: "Xã Điện Nam Trung", province: 43, district: 522
	},
	{
		id: 20580, name: "Xã Điện Nam Đông", province: 43, district: 522
	},
	{
		id: 20581, name: "Xã Điện Dương", province: 43, district: 522
	},
	{
		id: 20584, name: "Xã Điện Quang", province: 43, district: 522
	},
	{
		id: 20587, name: "Xã Điện Trung", province: 43, district: 522
	},
	{
		id: 20590, name: "Xã Điện Phong", province: 43, district: 522
	},
	{
		id: 20593, name: "Xã Điện Minh", province: 43, district: 522
	},
	{
		id: 20596, name: "Xã Điện Phương", province: 43, district: 522
	},
	{
		id: 20500, name: "Thị trấn Ái Nghĩa", province: 43, district: 523
	},
	{
		id: 20503, name: "Xã Đại Sơn", province: 43, district: 523
	},
	{
		id: 20506, name: "Xã Đại Lãnh", province: 43, district: 523
	},
	{
		id: 20509, name: "Xã Đại Hưng", province: 43, district: 523
	},
	{
		id: 20512, name: "Xã Đại Hồng", province: 43, district: 523
	},
	{
		id: 20515, name: "Xã Đại Đồng", province: 43, district: 523
	},
	{
		id: 20518, name: "Xã Đại Quang", province: 43, district: 523
	},
	{
		id: 20521, name: "Xã Đại Nghĩa", province: 43, district: 523
	},
	{
		id: 20524, name: "Xã Đại Hiệp", province: 43, district: 523
	},
	{
		id: 20527, name: "Xã Đại Thạnh", province: 43, district: 523
	},
	{
		id: 20530, name: "Xã Đại Chánh", province: 43, district: 523
	},
	{
		id: 20533, name: "Xã Đại Tân", province: 43, district: 523
	},
	{
		id: 20536, name: "Xã Đại Phong", province: 43, district: 523
	},
	{
		id: 20539, name: "Xã Đại Minh", province: 43, district: 523
	},
	{
		id: 20542, name: "Xã Đại Thắng", province: 43, district: 523
	},
	{
		id: 20545, name: "Xã Đại Cường", province: 43, district: 523
	},
	{
		id: 20547, name: "Xã Đại An", province: 43, district: 523
	},
	{
		id: 20548, name: "Xã Đại Hòa", province: 43, district: 523
	},
	{
		id: 20641, name: "Thị trấn Đông Phú", province: 43, district: 524
	},
	{
		id: 20644, name: "Xã Quế Xuân 1", province: 43, district: 524
	},
	{
		id: 20647, name: "Xã Quế Xuân 2", province: 43, district: 524
	},
	{
		id: 20650, name: "Xã Quế Phú", province: 43, district: 524
	},
	{
		id: 20651, name: "Xã Hương An", province: 43, district: 524
	},
	{
		id: 20653, name: "Xã Quế Cường", province: 43, district: 524
	},
	{
		id: 20659, name: "Xã Quế Hiệp", province: 43, district: 524
	},
	{
		id: 20662, name: "Xã Quế Thuận", province: 43, district: 524
	},
	{
		id: 20665, name: "Xã Phú Thọ", province: 43, district: 524
	},
	{
		id: 20677, name: "Xã Quế Long", province: 43, district: 524
	},
	{
		id: 20680, name: "Xã Quế Châu", province: 43, district: 524
	},
	{
		id: 20683, name: "Xã Quế Phong", province: 43, district: 524
	},
	{
		id: 20686, name: "Xã Quế An", province: 43, district: 524
	},
	{
		id: 20689, name: "Xã Quế Minh", province: 43, district: 524
	},
	{
		id: 20755, name: "Thị trấn Tân An", province: 43, district: 525
	},
	{
		id: 20758, name: "Xã Hiệp Hòa", province: 43, district: 525
	},
	{
		id: 20761, name: "Xã Hiệp Thuận", province: 43, district: 525
	},
	{
		id: 20764, name: "Xã Quế Thọ", province: 43, district: 525
	},
	{
		id: 20767, name: "Xã Bình Lâm", province: 43, district: 525
	},
	{
		id: 20770, name: "Xã Sông Trà", province: 43, district: 525
	},
	{
		id: 20773, name: "Xã Phước Trà", province: 43, district: 525
	},
	{
		id: 20776, name: "Xã Phước Gia", province: 43, district: 525
	},
	{
		id: 20779, name: "Xã Quế Bình", province: 43, district: 525
	},
	{
		id: 20782, name: "Xã Quế Lưu", province: 43, district: 525
	},
	{
		id: 20785, name: "Xã Thăng Phước", province: 43, district: 525
	},
	{
		id: 20788, name: "Xã Bình Sơn", province: 43, district: 525
	},
	{
		id: 20791, name: "Thị trấn Hà Lam", province: 43, district: 526
	},
	{
		id: 20794, name: "Xã Bình Dương", province: 43, district: 526
	},
	{
		id: 20797, name: "Xã Bình Giang", province: 43, district: 526
	},
	{
		id: 20800, name: "Xã Bình Nguyên", province: 43, district: 526
	},
	{
		id: 20803, name: "Xã Bình Phục", province: 43, district: 526
	},
	{
		id: 20806, name: "Xã Bình Triều", province: 43, district: 526
	},
	{
		id: 20809, name: "Xã Bình Đào", province: 43, district: 526
	},
	{
		id: 20812, name: "Xã Bình Minh", province: 43, district: 526
	},
	{
		id: 20815, name: "Xã Bình Lãnh", province: 43, district: 526
	},
	{
		id: 20818, name: "Xã Bình Trị", province: 43, district: 526
	},
	{
		id: 20821, name: "Xã Bình Định Bắc", province: 43, district: 526
	},
	{
		id: 20822, name: "Xã Bình Định Nam", province: 43, district: 526
	},
	{
		id: 20824, name: "Xã Bình Quý", province: 43, district: 526
	},
	{
		id: 20827, name: "Xã Bình Phú", province: 43, district: 526
	},
	{
		id: 20830, name: "Xã Bình Chánh", province: 43, district: 526
	},
	{
		id: 20833, name: "Xã Bình Tú", province: 43, district: 526
	},
	{
		id: 20836, name: "Xã Bình Sa", province: 43, district: 526
	},
	{
		id: 20839, name: "Xã Bình Hải", province: 43, district: 526
	},
	{
		id: 20842, name: "Xã Bình Quế", province: 43, district: 526
	},
	{
		id: 20845, name: "Xã Bình An", province: 43, district: 526
	},
	{
		id: 20848, name: "Xã Bình Trung", province: 43, district: 526
	},
	{
		id: 20851, name: "Xã Bình Nam", province: 43, district: 526
	},
	{
		id: 20965, name: "Thị trấn Núi Thành", province: 43, district: 527
	},
	{
		id: 20968, name: "Xã Tam Xuân I", province: 43, district: 527
	},
	{
		id: 20971, name: "Xã Tam Xuân Ii", province: 43, district: 527
	},
	{
		id: 20974, name: "Xã Tam Tiến", province: 43, district: 527
	},
	{
		id: 20977, name: "Xã Tam Sơn", province: 43, district: 527
	},
	{
		id: 20980, name: "Xã Tam Thạnh", province: 43, district: 527
	},
	{
		id: 20983, name: "Xã Tam Anh Bắc", province: 43, district: 527
	},
	{
		id: 20984, name: "Xã Tam Anh Nam", province: 43, district: 527
	},
	{
		id: 20986, name: "Xã Tam Hòa", province: 43, district: 527
	},
	{
		id: 20989, name: "Xã Tam Hiệp", province: 43, district: 527
	},
	{
		id: 20992, name: "Xã Tam Hải", province: 43, district: 527
	},
	{
		id: 20995, name: "Xã Tam Giang", province: 43, district: 527
	},
	{
		id: 20998, name: "Xã Tam Quang", province: 43, district: 527
	},
	{
		id: 21001, name: "Xã Tam Nghĩa", province: 43, district: 527
	},
	{
		id: 21004, name: "Xã Tam Mỹ Đông", province: 43, district: 527
	},
	{
		id: 21005, name: "Xã Tam Mỹ Tây", province: 43, district: 527
	},
	{
		id: 21007, name: "Xã Tam Trà", province: 43, district: 527
	},
	{
		id: 20854, name: "Thị trấn Tiên Kỳ", province: 43, district: 528
	},
	{
		id: 20857, name: "Xã Tiên Sơn", province: 43, district: 528
	},
	{
		id: 20860, name: "Xã Tiên Hà", province: 43, district: 528
	},
	{
		id: 20863, name: "Xã Tiên Cẩm", province: 43, district: 528
	},
	{
		id: 20866, name: "Xã Tiên Châu", province: 43, district: 528
	},
	{
		id: 20869, name: "Xã Tiên Lãnh", province: 43, district: 528
	},
	{
		id: 20872, name: "Xã Tiên Ngọc", province: 43, district: 528
	},
	{
		id: 20875, name: "Xã Tiên Hiệp", province: 43, district: 528
	},
	{
		id: 20878, name: "Xã Tiên Cảnh", province: 43, district: 528
	},
	{
		id: 20881, name: "Xã Tiên Mỹ", province: 43, district: 528
	},
	{
		id: 20884, name: "Xã Tiên Phong", province: 43, district: 528
	},
	{
		id: 20887, name: "Xã Tiên Thọ", province: 43, district: 528
	},
	{
		id: 20890, name: "Xã Tiên An", province: 43, district: 528
	},
	{
		id: 20893, name: "Xã Tiên Lộc", province: 43, district: 528
	},
	{
		id: 20896, name: "Xã Tiên Lập", province: 43, district: 528
	},
	{
		id: 20899, name: "Thị trấn Trà My", province: 43, district: 529
	},
	{
		id: 20900, name: "Xã Trà Sơn", province: 43, district: 529
	},
	{
		id: 20902, name: "Xã Trà Kót", province: 43, district: 529
	},
	{
		id: 20905, name: "Xã Trà Nú", province: 43, district: 529
	},
	{
		id: 20908, name: "Xã Trà Đông", province: 43, district: 529
	},
	{
		id: 20911, name: "Xã Trà Dương", province: 43, district: 529
	},
	{
		id: 20914, name: "Xã Trà Giang", province: 43, district: 529
	},
	{
		id: 20917, name: "Xã Trà Bui", province: 43, district: 529
	},
	{
		id: 20920, name: "Xã Trà Đốc", province: 43, district: 529
	},
	{
		id: 20923, name: "Xã Trà Tân", province: 43, district: 529
	},
	{
		id: 20926, name: "Xã Trà Giác", province: 43, district: 529
	},
	{
		id: 20929, name: "Xã Trà Giáp", province: 43, district: 529
	},
	{
		id: 20932, name: "Xã Trà Ka", province: 43, district: 529
	},
	{
		id: 20467, name: "Thị trấn P Rao", province: 43, district: 530
	},
	{
		id: 20470, name: "Xã Tà Lu", province: 43, district: 530
	},
	{
		id: 20473, name: "Xã Sông Kôn", province: 43, district: 530
	},
	{
		id: 20476, name: "Xã Jơ Ngây", province: 43, district: 530
	},
	{
		id: 20479, name: "Xã A Ting", province: 43, district: 530
	},
	{
		id: 20482, name: "Xã Tư", province: 43, district: 530
	},
	{
		id: 20485, name: "Xã Ba", province: 43, district: 530
	},
	{
		id: 20488, name: "Xã A Rooi", province: 43, district: 530
	},
	{
		id: 20491, name: "Xã Za Hung", province: 43, district: 530
	},
	{
		id: 20494, name: "Xã Mà Cooi", province: 43, district: 530
	},
	{
		id: 20497, name: "Xã Ka Dăng", province: 43, district: 530
	},
	{
		id: 20695, name: "Thị trấn Thạnh Mỹ", province: 43, district: 531
	},
	{
		id: 20698, name: "Xã Laêê", province: 43, district: 531
	},
	{
		id: 20699, name: "Xã Chơ Chun", province: 43, district: 531
	},
	{
		id: 20701, name: "Xã Zuôih", province: 43, district: 531
	},
	{
		id: 20702, name: "Xã Tà Pơơ", province: 43, district: 531
	},
	{
		id: 20704, name: "Xã La Dêê", province: 43, district: 531
	},
	{
		id: 20705, name: "Xã Đắc Tôi", province: 43, district: 531
	},
	{
		id: 20707, name: "Xã Chà Vàl", province: 43, district: 531
	},
	{
		id: 20710, name: "Xã Tà Bhinh", province: 43, district: 531
	},
	{
		id: 20713, name: "Xã Cà Dy", province: 43, district: 531
	},
	{
		id: 20716, name: "Xã Đắc Pre", province: 43, district: 531
	},
	{
		id: 20719, name: "Xã Đắc Pring", province: 43, district: 531
	},
	{
		id: 20722, name: "Thị trấn Khâm Đức", province: 43, district: 532
	},
	{
		id: 20725, name: "Xã Phước Xuân", province: 43, district: 532
	},
	{
		id: 20728, name: "Xã Phước Hiệp", province: 43, district: 532
	},
	{
		id: 20729, name: "Xã Phước Hoà", province: 43, district: 532
	},
	{
		id: 20731, name: "Xã Phước Đức", province: 43, district: 532
	},
	{
		id: 20734, name: "Xã Phước Năng", province: 43, district: 532
	},
	{
		id: 20737, name: "Xã Phước Mỹ", province: 43, district: 532
	},
	{
		id: 20740, name: "Xã Phước Chánh", province: 43, district: 532
	},
	{
		id: 20743, name: "Xã Phước Công", province: 43, district: 532
	},
	{
		id: 20746, name: "Xã Phước Kim", province: 43, district: 532
	},
	{
		id: 20749, name: "Xã Phước Lộc", province: 43, district: 532
	},
	{
		id: 20752, name: "Xã Phước Thành", province: 43, district: 532
	},
	{
		id: 20935, name: "Xã Trà Leng", province: 43, district: 533
	},
	{
		id: 20938, name: "Xã Trà Dơn", province: 43, district: 533
	},
	{
		id: 20941, name: "Xã Trà Tập", province: 43, district: 533
	},
	{
		id: 20944, name: "Xã Trà Mai", province: 43, district: 533
	},
	{
		id: 20947, name: "Xã Trà Cang", province: 43, district: 533
	},
	{
		id: 20950, name: "Xã Trà Linh", province: 43, district: 533
	},
	{
		id: 20953, name: "Xã Trà Nam", province: 43, district: 533
	},
	{
		id: 20956, name: "Xã Trà Don", province: 43, district: 533
	},
	{
		id: 20959, name: "Xã Trà Vân", province: 43, district: 533
	},
	{
		id: 20962, name: "Xã Trà Vinh", province: 43, district: 533
	},
	{
		id: 20437, name: "Xã A Vương", province: 43, district: 534
	},
	{
		id: 20440, name: "Xã Bha Lê", province: 43, district: 534
	},
	{
		id: 20443, name: "Xã A Nông", province: 43, district: 534
	},
	{
		id: 20446, name: "Xã A Tiêng", province: 43, district: 534
	},
	{
		id: 20449, name: "Xã Lăng", province: 43, district: 534
	},
	{
		id: 20452, name: "Xã A Xan", province: 43, district: 534
	},
	{
		id: 20455, name: "Xã Tr'hy", province: 43, district: 534
	},
	{
		id: 20458, name: "Xã Dang", province: 43, district: 534
	},
	{
		id: 20461, name: "Xã Ch'ơm", province: 43, district: 534
	},
	{
		id: 20464, name: "Xã Ga Ri", province: 43, district: 534
	},
	{
		id: 20364, name: "Thị trấn Phú Thịnh", province: 43, district: 535
	},
	{
		id: 20365, name: "Xã Tam Thành", province: 43, district: 535
	},
	{
		id: 20368, name: "Xã Tam An", province: 43, district: 535
	},
	{
		id: 20374, name: "Xã Tam Đàn", province: 43, district: 535
	},
	{
		id: 20377, name: "Xã Tam Lộc", province: 43, district: 535
	},
	{
		id: 20380, name: "Xã Tam Phước", province: 43, district: 535
	},
	{
		id: 20383, name: "Xã Tam Vinh", province: 43, district: 535
	},
	{
		id: 20386, name: "Xã Tam Thái", province: 43, district: 535
	},
	{
		id: 20387, name: "Xã Tam Đại", province: 43, district: 535
	},
	{
		id: 20392, name: "Xã Tam Dân", province: 43, district: 535
	},
	{
		id: 20395, name: "Xã Tam Lãnh", province: 43, district: 535
	},
	{
		id: 20656, name: "Xã Quế Trung", province: 43, district: 737
	},
	{
		id: 20668, name: "Xã Quế Ninh", province: 43, district: 737
	},
	{
		id: 20669, name: "Xã Phước Ninh", province: 43, district: 737
	},
	{
		id: 20671, name: "Xã Quế Lộc", province: 43, district: 737
	},
	{
		id: 20672, name: "Xã Sơn Viên", province: 43, district: 737
	},
	{
		id: 20674, name: "Xã Quế Phước", province: 43, district: 737
	},
	{
		id: 20692, name: "Xã Quế Lâm", province: 43, district: 737
	},
	{
		id: 21010, name: "Phường Lê Hồng Phong", province: 44, district: 536
	},
	{
		id: 21013, name: "Phường Trần Phú", province: 44, district: 536
	},
	{
		id: 21016, name: "Phường Quảng Phú", province: 44, district: 536
	},
	{
		id: 21019, name: "Phường Nghĩa Chánh", province: 44, district: 536
	},
	{
		id: 21022, name: "Phường Trần Hưng Đạo", province: 44, district: 536
	},
	{
		id: 21025, name: "Phường Nguyễn Nghiêm", province: 44, district: 536
	},
	{
		id: 21028, name: "Phường Nghĩa Lộ", province: 44, district: 536
	},
	{
		id: 21031, name: "Phường Chánh Lộ", province: 44, district: 536
	},
	{
		id: 21034, name: "Xã Nghĩa Dũng", province: 44, district: 536
	},
	{
		id: 21037, name: "Xã Nghĩa Dõng", province: 44, district: 536
	},
	{
		id: 21172, name: "Phường Trương Quang Trọng", province: 44, district: 536
	},
	{
		id: 21187, name: "Xã Tịnh Hòa", province: 44, district: 536
	},
	{
		id: 21190, name: "Xã Tịnh Kỳ", province: 44, district: 536
	},
	{
		id: 21199, name: "Xã Tịnh Thiện", province: 44, district: 536
	},
	{
		id: 21202, name: "Xã Tịnh Ấn Đông", province: 44, district: 536
	},
	{
		id: 21208, name: "Xã Tịnh Châu", province: 44, district: 536
	},
	{
		id: 21211, name: "Xã Tịnh Khê", province: 44, district: 536
	},
	{
		id: 21214, name: "Xã Tịnh Long", province: 44, district: 536
	},
	{
		id: 21223, name: "Xã Tịnh Ấn Tây", province: 44, district: 536
	},
	{
		id: 21232, name: "Xã Tịnh An", province: 44, district: 536
	},
	{
		id: 21253, name: "Xã Nghĩa Phú", province: 44, district: 536
	},
	{
		id: 21256, name: "Xã Nghĩa Hà", province: 44, district: 536
	},
	{
		id: 21262, name: "Xã Nghĩa An", province: 44, district: 536
	},
	{
		id: 21541, name: "Xã An Vĩnh", province: 44, district: 537
	},
	{
		id: 21544, name: "Xã An Hải", province: 44, district: 537
	},
	{
		id: 21547, name: "Xã An Bình", province: 44, district: 537
	},
	{
		id: 21040, name: "Thị trấn Châu Ổ", province: 44, district: 538
	},
	{
		id: 21043, name: "Xã Bình Thuận", province: 44, district: 538
	},
	{
		id: 21046, name: "Xã Bình Thạnh", province: 44, district: 538
	},
	{
		id: 21049, name: "Xã Bình Đông", province: 44, district: 538
	},
	{
		id: 21052, name: "Xã Bình Chánh", province: 44, district: 538
	},
	{
		id: 21055, name: "Xã Bình Nguyên", province: 44, district: 538
	},
	{
		id: 21058, name: "Xã Bình Khương", province: 44, district: 538
	},
	{
		id: 21061, name: "Xã Bình Trị", province: 44, district: 538
	},
	{
		id: 21064, name: "Xã Bình An", province: 44, district: 538
	},
	{
		id: 21067, name: "Xã Bình Hải", province: 44, district: 538
	},
	{
		id: 21070, name: "Xã Bình Dương", province: 44, district: 538
	},
	{
		id: 21073, name: "Xã Bình Phước", province: 44, district: 538
	},
	{
		id: 21076, name: "Xã Bình Thới", province: 44, district: 538
	},
	{
		id: 21079, name: "Xã Bình Hòa", province: 44, district: 538
	},
	{
		id: 21082, name: "Xã Bình Trung", province: 44, district: 538
	},
	{
		id: 21085, name: "Xã Bình Minh", province: 44, district: 538
	},
	{
		id: 21088, name: "Xã Bình Long", province: 44, district: 538
	},
	{
		id: 21091, name: "Xã Bình Thanh Tây", province: 44, district: 538
	},
	{
		id: 21094, name: "Xã Bình Phú", province: 44, district: 538
	},
	{
		id: 21097, name: "Xã Bình Thanh Đông", province: 44, district: 538
	},
	{
		id: 21100, name: "Xã Bình Chương", province: 44, district: 538
	},
	{
		id: 21103, name: "Xã Bình Hiệp", province: 44, district: 538
	},
	{
		id: 21106, name: "Xã Bình Mỹ", province: 44, district: 538
	},
	{
		id: 21109, name: "Xã Bình Tân", province: 44, district: 538
	},
	{
		id: 21112, name: "Xã Bình Châu", province: 44, district: 538
	},
	{
		id: 21115, name: "Thị trấn Trà Xuân", province: 44, district: 539
	},
	{
		id: 21118, name: "Xã Trà Giang", province: 44, district: 539
	},
	{
		id: 21121, name: "Xã Trà Thủy", province: 44, district: 539
	},
	{
		id: 21124, name: "Xã Trà Hiệp", province: 44, district: 539
	},
	{
		id: 21127, name: "Xã Trà Bình", province: 44, district: 539
	},
	{
		id: 21130, name: "Xã Trà Phú", province: 44, district: 539
	},
	{
		id: 21133, name: "Xã Trà Lâm", province: 44, district: 539
	},
	{
		id: 21136, name: "Xã Trà Tân", province: 44, district: 539
	},
	{
		id: 21139, name: "Xã Trà Sơn", province: 44, district: 539
	},
	{
		id: 21142, name: "Xã Trà Bùi", province: 44, district: 539
	},
	{
		id: 21175, name: "Xã Tịnh Thọ", province: 44, district: 540
	},
	{
		id: 21178, name: "Xã Tịnh Trà", province: 44, district: 540
	},
	{
		id: 21181, name: "Xã Tịnh Phong", province: 44, district: 540
	},
	{
		id: 21184, name: "Xã Tịnh Hiệp", province: 44, district: 540
	},
	{
		id: 21193, name: "Xã Tịnh Bình", province: 44, district: 540
	},
	{
		id: 21196, name: "Xã Tịnh Đông", province: 44, district: 540
	},
	{
		id: 21205, name: "Xã Tịnh Bắc", province: 44, district: 540
	},
	{
		id: 21217, name: "Xã Tịnh Sơn", province: 44, district: 540
	},
	{
		id: 21220, name: "Xã Tịnh Hà", province: 44, district: 540
	},
	{
		id: 21226, name: "Xã Tịnh Giang", province: 44, district: 540
	},
	{
		id: 21229, name: "Xã Tịnh Minh", province: 44, district: 540
	},
	{
		id: 21289, name: "Thị trấn Di Lăng", province: 44, district: 541
	},
	{
		id: 21292, name: "Xã Sơn Hạ", province: 44, district: 541
	},
	{
		id: 21295, name: "Xã Sơn Thành", province: 44, district: 541
	},
	{
		id: 21298, name: "Xã Sơn Nham", province: 44, district: 541
	},
	{
		id: 21301, name: "Xã Sơn Bao", province: 44, district: 541
	},
	{
		id: 21304, name: "Xã Sơn Linh", province: 44, district: 541
	},
	{
		id: 21307, name: "Xã Sơn Giang", province: 44, district: 541
	},
	{
		id: 21310, name: "Xã Sơn Trung", province: 44, district: 541
	},
	{
		id: 21313, name: "Xã Sơn Thượng", province: 44, district: 541
	},
	{
		id: 21316, name: "Xã Sơn Cao", province: 44, district: 541
	},
	{
		id: 21319, name: "Xã Sơn Hải", province: 44, district: 541
	},
	{
		id: 21322, name: "Xã Sơn Thủy", province: 44, district: 541
	},
	{
		id: 21325, name: "Xã Sơn Kỳ", province: 44, district: 541
	},
	{
		id: 21328, name: "Xã Sơn Ba", province: 44, district: 541
	},
	{
		id: 21235, name: "Thị trấn La Hà", province: 44, district: 542
	},
	{
		id: 21238, name: "Thị trấn Sông Vệ", province: 44, district: 542
	},
	{
		id: 21241, name: "Xã Nghĩa Lâm", province: 44, district: 542
	},
	{
		id: 21244, name: "Xã Nghĩa Thắng", province: 44, district: 542
	},
	{
		id: 21247, name: "Xã Nghĩa Thuận", province: 44, district: 542
	},
	{
		id: 21250, name: "Xã Nghĩa Kỳ", province: 44, district: 542
	},
	{
		id: 21259, name: "Xã Nghĩa Sơn", province: 44, district: 542
	},
	{
		id: 21265, name: "Xã Nghĩa Thọ", province: 44, district: 542
	},
	{
		id: 21268, name: "Xã Nghĩa Hòa", province: 44, district: 542
	},
	{
		id: 21271, name: "Xã Nghĩa Điền", province: 44, district: 542
	},
	{
		id: 21274, name: "Xã Nghĩa Thương", province: 44, district: 542
	},
	{
		id: 21277, name: "Xã Nghĩa Trung", province: 44, district: 542
	},
	{
		id: 21280, name: "Xã Nghĩa Hiệp", province: 44, district: 542
	},
	{
		id: 21283, name: "Xã Nghĩa Phương", province: 44, district: 542
	},
	{
		id: 21286, name: "Xã Nghĩa Mỹ", province: 44, district: 542
	},
	{
		id: 21364, name: "Thị trấn Chợ Chùa", province: 44, district: 543
	},
	{
		id: 21367, name: "Xã Hành Thuận", province: 44, district: 543
	},
	{
		id: 21370, name: "Xã Hành Dũng", province: 44, district: 543
	},
	{
		id: 21373, name: "Xã Hành Trung", province: 44, district: 543
	},
	{
		id: 21376, name: "Xã Hành Nhân", province: 44, district: 543
	},
	{
		id: 21379, name: "Xã Hành Đức", province: 44, district: 543
	},
	{
		id: 21382, name: "Xã Hành Minh", province: 44, district: 543
	},
	{
		id: 21385, name: "Xã Hành Phước", province: 44, district: 543
	},
	{
		id: 21388, name: "Xã Hành Thiện", province: 44, district: 543
	},
	{
		id: 21391, name: "Xã Hành Thịnh", province: 44, district: 543
	},
	{
		id: 21394, name: "Xã Hành Tín Tây", province: 44, district: 543
	},
	{
		id: 21397, name: "Xã Hành Tín Đông", province: 44, district: 543
	},
	{
		id: 21349, name: "Xã Long Sơn", province: 44, district: 544
	},
	{
		id: 21352, name: "Xã Long Mai", province: 44, district: 544
	},
	{
		id: 21355, name: "Xã Thanh An", province: 44, district: 544
	},
	{
		id: 21358, name: "Xã Long Môn", province: 44, district: 544
	},
	{
		id: 21361, name: "Xã Long Hiệp", province: 44, district: 544
	},
	{
		id: 21400, name: "Thị trấn Mộ Đức", province: 44, district: 545
	},
	{
		id: 21403, name: "Xã Đức Lợi", province: 44, district: 545
	},
	{
		id: 21406, name: "Xã Đức Thắng", province: 44, district: 545
	},
	{
		id: 21409, name: "Xã Đức Nhuận", province: 44, district: 545
	},
	{
		id: 21412, name: "Xã Đức Chánh", province: 44, district: 545
	},
	{
		id: 21415, name: "Xã Đức Hiệp", province: 44, district: 545
	},
	{
		id: 21418, name: "Xã Đức Minh", province: 44, district: 545
	},
	{
		id: 21421, name: "Xã Đức Thạnh", province: 44, district: 545
	},
	{
		id: 21424, name: "Xã Đức Hòa", province: 44, district: 545
	},
	{
		id: 21427, name: "Xã Đức Tân", province: 44, district: 545
	},
	{
		id: 21430, name: "Xã Đức Phú", province: 44, district: 545
	},
	{
		id: 21433, name: "Xã Đức Phong", province: 44, district: 545
	},
	{
		id: 21436, name: "Xã Đức Lân", province: 44, district: 545
	},
	{
		id: 21439, name: "Thị trấn Đức Phổ", province: 44, district: 546
	},
	{
		id: 21442, name: "Xã Phổ An", province: 44, district: 546
	},
	{
		id: 21445, name: "Xã Phổ Phong", province: 44, district: 546
	},
	{
		id: 21448, name: "Xã Phổ Thuận", province: 44, district: 546
	},
	{
		id: 21451, name: "Xã Phổ Văn", province: 44, district: 546
	},
	{
		id: 21454, name: "Xã Phổ Quang", province: 44, district: 546
	},
	{
		id: 21457, name: "Xã Phổ Nhơn", province: 44, district: 546
	},
	{
		id: 21460, name: "Xã Phổ Ninh", province: 44, district: 546
	},
	{
		id: 21463, name: "Xã Phổ Minh", province: 44, district: 546
	},
	{
		id: 21466, name: "Xã Phổ Vinh", province: 44, district: 546
	},
	{
		id: 21469, name: "Xã Phổ Hòa", province: 44, district: 546
	},
	{
		id: 21472, name: "Xã Phổ Cường", province: 44, district: 546
	},
	{
		id: 21475, name: "Xã Phổ Khánh", province: 44, district: 546
	},
	{
		id: 21478, name: "Xã Phổ Thạnh", province: 44, district: 546
	},
	{
		id: 21481, name: "Xã Phổ Châu", province: 44, district: 546
	},
	{
		id: 21484, name: "Thị trấn Ba Tơ", province: 44, district: 547
	},
	{
		id: 21487, name: "Xã Ba Điền", province: 44, district: 547
	},
	{
		id: 21490, name: "Xã Ba Vinh", province: 44, district: 547
	},
	{
		id: 21493, name: "Xã Ba Thành", province: 44, district: 547
	},
	{
		id: 21496, name: "Xã Ba Động", province: 44, district: 547
	},
	{
		id: 21499, name: "Xã Ba Dinh", province: 44, district: 547
	},
	{
		id: 21500, name: "Xã Ba Giang", province: 44, district: 547
	},
	{
		id: 21502, name: "Xã Ba Liên", province: 44, district: 547
	},
	{
		id: 21505, name: "Xã Ba Ngạc", province: 44, district: 547
	},
	{
		id: 21508, name: "Xã Ba Khâm", province: 44, district: 547
	},
	{
		id: 21511, name: "Xã Ba Cung", province: 44, district: 547
	},
	{
		id: 21514, name: "Xã Ba Chùa", province: 44, district: 547
	},
	{
		id: 21517, name: "Xã Ba Tiêu", province: 44, district: 547
	},
	{
		id: 21520, name: "Xã Ba Trang", province: 44, district: 547
	},
	{
		id: 21523, name: "Xã Ba Tô", province: 44, district: 547
	},
	{
		id: 21526, name: "Xã Ba Bích", province: 44, district: 547
	},
	{
		id: 21529, name: "Xã Ba Vì", province: 44, district: 547
	},
	{
		id: 21532, name: "Xã Ba Lế", province: 44, district: 547
	},
	{
		id: 21535, name: "Xã Ba Nam", province: 44, district: 547
	},
	{
		id: 21538, name: "Xã Ba Xa", province: 44, district: 547
	},
	{
		id: 21331, name: "Xã Sơn Bua", province: 44, district: 548
	},
	{
		id: 21334, name: "Xã Sơn Mùa", province: 44, district: 548
	},
	{
		id: 21335, name: "Xã Sơn Liên", province: 44, district: 548
	},
	{
		id: 21337, name: "Xã Sơn Tân", province: 44, district: 548
	},
	{
		id: 21338, name: "Xã Sơn Màu", province: 44, district: 548
	},
	{
		id: 21340, name: "Xã Sơn Dung", province: 44, district: 548
	},
	{
		id: 21341, name: "Xã Sơn Long", province: 44, district: 548
	},
	{
		id: 21343, name: "Xã Sơn Tinh", province: 44, district: 548
	},
	{
		id: 21346, name: "Xã Sơn Lập", province: 44, district: 548
	},
	{
		id: 21145, name: "Xã Trà Thanh", province: 44, district: 549
	},
	{
		id: 21148, name: "Xã Trà Khê", province: 44, district: 549
	},
	{
		id: 21151, name: "Xã Trà Quân", province: 44, district: 549
	},
	{
		id: 21154, name: "Xã Trà Phong", province: 44, district: 549
	},
	{
		id: 21157, name: "Xã Trà Lãnh", province: 44, district: 549
	},
	{
		id: 21160, name: "Xã Trà Nham", province: 44, district: 549
	},
	{
		id: 21163, name: "Xã Trà Xinh", province: 44, district: 549
	},
	{
		id: 21166, name: "Xã Trà Thọ", province: 44, district: 549
	},
	{
		id: 21169, name: "Xã Trà Trung", province: 44, district: 549
	},
	{
		id: 6649, name: "Phường Hà Khánh", province: 45, district: 489
	},
	{
		id: 6652, name: "Phường Hà Phong", province: 45, district: 489
	},
	{
		id: 6655, name: "Phường Hà Khẩu", province: 45, district: 489
	},
	{
		id: 6658, name: "Phường Cao Xanh", province: 45, district: 489
	},
	{
		id: 6661, name: "Phường Giếng Đáy", province: 45, district: 489
	},
	{
		id: 6664, name: "Phường Hà Tu", province: 45, district: 489
	},
	{
		id: 6667, name: "Phường Hà Trung", province: 45, district: 489
	},
	{
		id: 6670, name: "Phường Hà Lầm", province: 45, district: 489
	},
	{
		id: 6673, name: "Phường Bãi Cháy", province: 45, district: 489
	},
	{
		id: 6676, name: "Phường Cao Thắng", province: 45, district: 489
	},
	{
		id: 6679, name: "Phường Hùng Thắng", province: 45, district: 489
	},
	{
		id: 6682, name: "Phường Yết Kiêu", province: 45, district: 489
	},
	{
		id: 6685, name: "Phường Trần Hưng Đạo", province: 45, district: 489
	},
	{
		id: 6688, name: "Phường Hồng Hải", province: 45, district: 489
	},
	{
		id: 6691, name: "Phường Hồng Gai", province: 45, district: 489
	},
	{
		id: 6694, name: "Phường Bạch Đằng", province: 45, district: 489
	},
	{
		id: 6697, name: "Phường Hồng Hà", province: 45, district: 489
	},
	{
		id: 6700, name: "Phường Tuần Châu", province: 45, district: 489
	},
	{
		id: 6703, name: "Phường Việt Hưng", province: 45, district: 489
	},
	{
		id: 6706, name: "Phường Đại Yên", province: 45, district: 489
	},
	{
		id: 6760, name: "Phường Mông Dương", province: 45, district: 490
	},
	{
		id: 6763, name: "Phường Cửa Ông", province: 45, district: 490
	},
	{
		id: 6766, name: "Phường Cẩm Sơn", province: 45, district: 490
	},
	{
		id: 6769, name: "Phường Cẩm Đông", province: 45, district: 490
	},
	{
		id: 6772, name: "Phường Cẩm Phú", province: 45, district: 490
	},
	{
		id: 6775, name: "Phường Cẩm Tây", province: 45, district: 490
	},
	{
		id: 6778, name: "Phường Quang Hanh", province: 45, district: 490
	},
	{
		id: 6781, name: "Phường Cẩm Thịnh", province: 45, district: 490
	},
	{
		id: 6784, name: "Phường Cẩm Thủy", province: 45, district: 490
	},
	{
		id: 6787, name: "Phường Cẩm Thạch", province: 45, district: 490
	},
	{
		id: 6790, name: "Phường Cẩm Thành", province: 45, district: 490
	},
	{
		id: 6793, name: "Phường Cẩm Trung", province: 45, district: 490
	},
	{
		id: 6796, name: "Phường Cẩm Bình", province: 45, district: 490
	},
	{
		id: 6799, name: "Xã Cộng Hòa", province: 45, district: 490
	},
	{
		id: 6802, name: "Xã Cẩm Hải", province: 45, district: 490
	},
	{
		id: 6805, name: "Xã Dương Huy", province: 45, district: 490
	},
	{
		id: 6808, name: "Phường Vàng Danh", province: 45, district: 491
	},
	{
		id: 6811, name: "Phường Thanh Sơn", province: 45, district: 491
	},
	{
		id: 6814, name: "Phường Bắc Sơn", province: 45, district: 491
	},
	{
		id: 6817, name: "Phường Quang Trung", province: 45, district: 491
	},
	{
		id: 6820, name: "Phường Trưng Vương", province: 45, district: 491
	},
	{
		id: 6823, name: "Phường Nam Khê", province: 45, district: 491
	},
	{
		id: 6826, name: "Phường Yên Thanh", province: 45, district: 491
	},
	{
		id: 6829, name: "Xã Thượng Yên Công", province: 45, district: 491
	},
	{
		id: 6832, name: "Phường Phương Đông", province: 45, district: 491
	},
	{
		id: 6835, name: "Phường Phương Nam", province: 45, district: 491
	},
	{
		id: 7141, name: "Xã Điền Công", province: 45, district: 491
	},
	{
		id: 6709, name: "Phường Ka Long", province: 45, district: 492
	},
	{
		id: 6712, name: "Phường Trần Phú", province: 45, district: 492
	},
	{
		id: 6715, name: "Phường Ninh Dương", province: 45, district: 492
	},
	{
		id: 6718, name: "Phường Hoà Lạc", province: 45, district: 492
	},
	{
		id: 6721, name: "Phường Trà Cổ", province: 45, district: 492
	},
	{
		id: 6724, name: "Xã Hải Sơn", province: 45, district: 492
	},
	{
		id: 6727, name: "Xã Bắc Sơn", province: 45, district: 492
	},
	{
		id: 6730, name: "Xã Hải Đông", province: 45, district: 492
	},
	{
		id: 6733, name: "Xã Hải Tiến", province: 45, district: 492
	},
	{
		id: 6736, name: "Phường Hải Yên", province: 45, district: 492
	},
	{
		id: 6739, name: "Xã Quảng Nghĩa", province: 45, district: 492
	},
	{
		id: 6742, name: "Phường Hải Hoà", province: 45, district: 492
	},
	{
		id: 6745, name: "Xã Hải Xuân", province: 45, district: 492
	},
	{
		id: 6748, name: "Xã Vạn Ninh", province: 45, district: 492
	},
	{
		id: 6751, name: "Phường Bình Ngọc", province: 45, district: 492
	},
	{
		id: 6754, name: "Xã Vĩnh Trung", province: 45, district: 492
	},
	{
		id: 6757, name: "Xã Vĩnh Thực", province: 45, district: 492
	},
	{
		id: 6838, name: "Thị trấn Bình Liêu", province: 45, district: 493
	},
	{
		id: 6841, name: "Xã Hoành Mô", province: 45, district: 493
	},
	{
		id: 6844, name: "Xã Đồng Tâm", province: 45, district: 493
	},
	{
		id: 6847, name: "Xã Đồng Văn", province: 45, district: 493
	},
	{
		id: 6850, name: "Xã Tình Húc", province: 45, district: 493
	},
	{
		id: 6853, name: "Xã Vô Ngại", province: 45, district: 493
	},
	{
		id: 6856, name: "Xã Lục Hồn", province: 45, district: 493
	},
	{
		id: 6859, name: "Xã Húc Động", province: 45, district: 493
	},
	{
		id: 6895, name: "Thị trấn Đầm Hà", province: 45, district: 494
	},
	{
		id: 6898, name: "Xã Quảng Lâm", province: 45, district: 494
	},
	{
		id: 6901, name: "Xã Quảng An", province: 45, district: 494
	},
	{
		id: 6904, name: "Xã Tân Bình", province: 45, district: 494
	},
	{
		id: 6907, name: "Xã Quảng Lợi", province: 45, district: 494
	},
	{
		id: 6910, name: "Xã Dực Yên", province: 45, district: 494
	},
	{
		id: 6913, name: "Xã Quảng Tân", province: 45, district: 494
	},
	{
		id: 6916, name: "Xã Đầm Hà", province: 45, district: 494
	},
	{
		id: 6917, name: "Xã Tân Lập", province: 45, district: 494
	},
	{
		id: 6919, name: "Xã Đại Bình", province: 45, district: 494
	},
	{
		id: 6922, name: "Thị trấn Quảng Hà", province: 45, district: 495
	},
	{
		id: 6925, name: "Xã Quảng Đức", province: 45, district: 495
	},
	{
		id: 6928, name: "Xã Quảng Sơn", province: 45, district: 495
	},
	{
		id: 6931, name: "Xã Quảng Thành", province: 45, district: 495
	},
	{
		id: 6934, name: "Xã Quảng Thắng", province: 45, district: 495
	},
	{
		id: 6937, name: "Xã Quảng Thịnh", province: 45, district: 495
	},
	{
		id: 6940, name: "Xã Quảng Minh", province: 45, district: 495
	},
	{
		id: 6943, name: "Xã Quảng Chính", province: 45, district: 495
	},
	{
		id: 6946, name: "Xã Quảng Long", province: 45, district: 495
	},
	{
		id: 6949, name: "Xã Đường Hoa", province: 45, district: 495
	},
	{
		id: 6952, name: "Xã Quảng Phong", province: 45, district: 495
	},
	{
		id: 6955, name: "Xã Quảng Trung", province: 45, district: 495
	},
	{
		id: 6958, name: "Xã Phú Hải", province: 45, district: 495
	},
	{
		id: 6961, name: "Xã Quảng Điền", province: 45, district: 495
	},
	{
		id: 6964, name: "Xã Tiến Tới", province: 45, district: 495
	},
	{
		id: 6967, name: "Xã Cái Chiên", province: 45, district: 495
	},
	{
		id: 6862, name: "Thị trấn Tiên Yên", province: 45, district: 496
	},
	{
		id: 6865, name: "Xã Hà Lâu", province: 45, district: 496
	},
	{
		id: 6868, name: "Xã Đại Dực", province: 45, district: 496
	},
	{
		id: 6869, name: "Xã Đại Thành", province: 45, district: 496
	},
	{
		id: 6871, name: "Xã Phong Dụ", province: 45, district: 496
	},
	{
		id: 6874, name: "Xã Điền Xá", province: 45, district: 496
	},
	{
		id: 6877, name: "Xã Đông Ngũ", province: 45, district: 496
	},
	{
		id: 6880, name: "Xã Yên Than", province: 45, district: 496
	},
	{
		id: 6883, name: "Xã Đông Hải", province: 45, district: 496
	},
	{
		id: 6886, name: "Xã Hải Lạng", province: 45, district: 496
	},
	{
		id: 6889, name: "Xã Tiên Lãng", province: 45, district: 496
	},
	{
		id: 6892, name: "Xã Đồng Rui", province: 45, district: 496
	},
	{
		id: 6970, name: "Thị trấn Ba Chẽ", province: 45, district: 497
	},
	{
		id: 6973, name: "Xã Thanh Sơn", province: 45, district: 497
	},
	{
		id: 6976, name: "Xã Thanh Lâm", province: 45, district: 497
	},
	{
		id: 6979, name: "Xã Đạp Thanh", province: 45, district: 497
	},
	{
		id: 6982, name: "Xã Nam Sơn", province: 45, district: 497
	},
	{
		id: 6985, name: "Xã Lương Mông", province: 45, district: 497
	},
	{
		id: 6988, name: "Xã Đồn Đạc", province: 45, district: 497
	},
	{
		id: 6991, name: "Xã Minh Cầm", province: 45, district: 497
	},
	{
		id: 7069, name: "Thị trấn Mạo Khê", province: 45, district: 498
	},
	{
		id: 7072, name: "Thị trấn Đông Triều", province: 45, district: 498
	},
	{
		id: 7075, name: "Xã An Sinh", province: 45, district: 498
	},
	{
		id: 7078, name: "Xã Tràng Lương", province: 45, district: 498
	},
	{
		id: 7081, name: "Xã Bình Khê", province: 45, district: 498
	},
	{
		id: 7084, name: "Xã Việt Dân", province: 45, district: 498
	},
	{
		id: 7087, name: "Xã Tân Việt", province: 45, district: 498
	},
	{
		id: 7090, name: "Xã Bình Dương", province: 45, district: 498
	},
	{
		id: 7093, name: "Xã Đức Chính", province: 45, district: 498
	},
	{
		id: 7096, name: "Xã Tràng An", province: 45, district: 498
	},
	{
		id: 7099, name: "Xã Nguyễn Huệ", province: 45, district: 498
	},
	{
		id: 7102, name: "Xã Thủy An", province: 45, district: 498
	},
	{
		id: 7105, name: "Xã Xuân Sơn", province: 45, district: 498
	},
	{
		id: 7108, name: "Xã Hồng Thái Tây", province: 45, district: 498
	},
	{
		id: 7111, name: "Xã Hồng Thái Đông", province: 45, district: 498
	},
	{
		id: 7114, name: "Xã Hoàng Quế", province: 45, district: 498
	},
	{
		id: 7117, name: "Xã Yên Thọ", province: 45, district: 498
	},
	{
		id: 7120, name: "Xã Hồng Phong", province: 45, district: 498
	},
	{
		id: 7123, name: "Xã Kim Sơn", province: 45, district: 498
	},
	{
		id: 7126, name: "Xã Hưng Đạo", province: 45, district: 498
	},
	{
		id: 7129, name: "Xã Yên Đức", province: 45, district: 498
	},
	{
		id: 7132, name: "Phường Quảng Yên", province: 45, district: 499
	},
	{
		id: 7135, name: "Phường Đông Mai", province: 45, district: 499
	},
	{
		id: 7138, name: "Phường Minh Thành", province: 45, district: 499
	},
	{
		id: 7144, name: "Xã Sông Khoai", province: 45, district: 499
	},
	{
		id: 7147, name: "Xã Hiệp Hòa", province: 45, district: 499
	},
	{
		id: 7150, name: "Phường Cộng Hòa", province: 45, district: 499
	},
	{
		id: 7153, name: "Xã Tiền An", province: 45, district: 499
	},
	{
		id: 7156, name: "Xã Hoàng Tân", province: 45, district: 499
	},
	{
		id: 7159, name: "Phường Tân An", province: 45, district: 499
	},
	{
		id: 7162, name: "Phường Yên Giang", province: 45, district: 499
	},
	{
		id: 7165, name: "Phường Nam Hòa", province: 45, district: 499
	},
	{
		id: 7168, name: "Phường Hà An", province: 45, district: 499
	},
	{
		id: 7171, name: "Xã Cẩm La", province: 45, district: 499
	},
	{
		id: 7174, name: "Phường Phong Hải", province: 45, district: 499
	},
	{
		id: 7177, name: "Phường Yên Hải", province: 45, district: 499
	},
	{
		id: 7180, name: "Xã Liên Hòa", province: 45, district: 499
	},
	{
		id: 7183, name: "Phường Phong Cốc", province: 45, district: 499
	},
	{
		id: 7186, name: "Xã Liên Vị", province: 45, district: 499
	},
	{
		id: 7189, name: "Xã Tiền Phong", province: 45, district: 499
	},
	{
		id: 7030, name: "Thị trấn Trới", province: 45, district: 500
	},
	{
		id: 7033, name: "Xã Kỳ Thượng", province: 45, district: 500
	},
	{
		id: 7036, name: "Xã Đồng Sơn", province: 45, district: 500
	},
	{
		id: 7039, name: "Xã Tân Dân", province: 45, district: 500
	},
	{
		id: 7042, name: "Xã Đồng Lâm", province: 45, district: 500
	},
	{
		id: 7045, name: "Xã Hòa Bình", province: 45, district: 500
	},
	{
		id: 7048, name: "Xã Vũ Oai", province: 45, district: 500
	},
	{
		id: 7051, name: "Xã Dân Chủ", province: 45, district: 500
	},
	{
		id: 7054, name: "Xã Quảng La", province: 45, district: 500
	},
	{
		id: 7057, name: "Xã Bằng Cả", province: 45, district: 500
	},
	{
		id: 7060, name: "Xã Thống Nhất", province: 45, district: 500
	},
	{
		id: 7063, name: "Xã Sơn Dương", province: 45, district: 500
	},
	{
		id: 7066, name: "Xã Lê Lợi", province: 45, district: 500
	},
	{
		id: 6994, name: "Thị trấn Cái Rồng", province: 45, district: 501
	},
	{
		id: 6997, name: "Xã Đài Xuyên", province: 45, district: 501
	},
	{
		id: 7000, name: "Xã Bình Dân", province: 45, district: 501
	},
	{
		id: 7003, name: "Xã Vạn Yên", province: 45, district: 501
	},
	{
		id: 7006, name: "Xã Minh Châu", province: 45, district: 501
	},
	{
		id: 7009, name: "Xã Đoàn Kết", province: 45, district: 501
	},
	{
		id: 7012, name: "Xã Hạ Long", province: 45, district: 501
	},
	{
		id: 7015, name: "Xã Đông Xá", province: 45, district: 501
	},
	{
		id: 7018, name: "Xã Bản Sen", province: 45, district: 501
	},
	{
		id: 7021, name: "Xã Thắng Lợi", province: 45, district: 501
	},
	{
		id: 7024, name: "Xã Quan Lạn", province: 45, district: 501
	},
	{
		id: 7027, name: "Xã Ngọc Vừng", province: 45, district: 501
	},
	{
		id: 7192, name: "Thị trấn Cô Tô", province: 45, district: 502
	},
	{
		id: 7195, name: "Xã Đồng Tiến", province: 45, district: 502
	},
	{
		id: 7198, name: "Xã Thanh Lân", province: 45, district: 502
	},
	{
		id: 19330, name: "Phường Đông Giang", province: 46, district: 561
	},
	{
		id: 19333, name: "Phường 1", province: 46, district: 561
	},
	{
		id: 19336, name: "Phường Đông Lễ", province: 46, district: 561
	},
	{
		id: 19339, name: "Phường Đông Thanh", province: 46, district: 561
	},
	{
		id: 19342, name: "Phường 2", province: 46, district: 561
	},
	{
		id: 19345, name: "Phường 4", province: 46, district: 561
	},
	{
		id: 19348, name: "Phường 5", province: 46, district: 561
	},
	{
		id: 19351, name: "Phường Đông Lương", province: 46, district: 561
	},
	{
		id: 19354, name: "Phường 3", province: 46, district: 561
	},
	{
		id: 19357, name: "Phường 1", province: 46, district: 562
	},
	{
		id: 19358, name: "Phường An Đôn", province: 46, district: 562
	},
	{
		id: 19360, name: "Phường 2", province: 46, district: 562
	},
	{
		id: 19361, name: "Phường 3", province: 46, district: 562
	},
	{
		id: 19705, name: "Xã Hải Lệ", province: 46, district: 562
	},
	{
		id: 19363, name: "Thị trấn Hồ Xá", province: 46, district: 563
	},
	{
		id: 19366, name: "Thị trấn Bến Quan", province: 46, district: 563
	},
	{
		id: 19369, name: "Xã Vĩnh Thái", province: 46, district: 563
	},
	{
		id: 19372, name: "Xã Vĩnh Tú", province: 46, district: 563
	},
	{
		id: 19375, name: "Xã Vĩnh Chấp", province: 46, district: 563
	},
	{
		id: 19378, name: "Xã Vĩnh Trung", province: 46, district: 563
	},
	{
		id: 19381, name: "Xã Vĩnh Kim", province: 46, district: 563
	},
	{
		id: 19384, name: "Xã Vĩnh Thạch", province: 46, district: 563
	},
	{
		id: 19387, name: "Xã Vĩnh Long", province: 46, district: 563
	},
	{
		id: 19390, name: "Xã Vĩnh Nam", province: 46, district: 563
	},
	{
		id: 19393, name: "Xã Vĩnh Khê", province: 46, district: 563
	},
	{
		id: 19396, name: "Xã Vĩnh Hòa", province: 46, district: 563
	},
	{
		id: 19399, name: "Xã Vĩnh Hiền", province: 46, district: 563
	},
	{
		id: 19402, name: "Xã Vĩnh Thủy", province: 46, district: 563
	},
	{
		id: 19405, name: "Xã Vĩnh Lâm", province: 46, district: 563
	},
	{
		id: 19408, name: "Xã Vĩnh Thành", province: 46, district: 563
	},
	{
		id: 19411, name: "Xã Vĩnh Tân", province: 46, district: 563
	},
	{
		id: 19414, name: "Thị trấn Cửa Tùng", province: 46, district: 563
	},
	{
		id: 19417, name: "Xã Vĩnh Hà", province: 46, district: 563
	},
	{
		id: 19420, name: "Xã Vĩnh Sơn", province: 46, district: 563
	},
	{
		id: 19423, name: "Xã Vĩnh Giang", province: 46, district: 563
	},
	{
		id: 19426, name: "Xã Vĩnh Ô", province: 46, district: 563
	},
	{
		id: 19495, name: "Thị trấn Gio Linh", province: 46, district: 564
	},
	{
		id: 19496, name: "Thị trấn Cửa Việt", province: 46, district: 564
	},
	{
		id: 19498, name: "Xã Trung Giang", province: 46, district: 564
	},
	{
		id: 19501, name: "Xã Trung Hải", province: 46, district: 564
	},
	{
		id: 19504, name: "Xã Trung Sơn", province: 46, district: 564
	},
	{
		id: 19507, name: "Xã Gio Phong", province: 46, district: 564
	},
	{
		id: 19510, name: "Xã Gio Mỹ", province: 46, district: 564
	},
	{
		id: 19513, name: "Xã Vĩnh Trường", province: 46, district: 564
	},
	{
		id: 19516, name: "Xã Gio Bình", province: 46, district: 564
	},
	{
		id: 19519, name: "Xã Gio Hải", province: 46, district: 564
	},
	{
		id: 19522, name: "Xã Gio An", province: 46, district: 564
	},
	{
		id: 19525, name: "Xã Gio Châu", province: 46, district: 564
	},
	{
		id: 19528, name: "Xã Gio Thành", province: 46, district: 564
	},
	{
		id: 19531, name: "Xã Gio Việt", province: 46, district: 564
	},
	{
		id: 19534, name: "Xã Linh Thượng", province: 46, district: 564
	},
	{
		id: 19537, name: "Xã Gio Sơn", province: 46, district: 564
	},
	{
		id: 19540, name: "Xã Gio Hòa", province: 46, district: 564
	},
	{
		id: 19543, name: "Xã Gio Mai", province: 46, district: 564
	},
	{
		id: 19546, name: "Xã Hải Thái", province: 46, district: 564
	},
	{
		id: 19549, name: "Xã Linh Hải", province: 46, district: 564
	},
	{
		id: 19552, name: "Xã Gio Quang", province: 46, district: 564
	},
	{
		id: 19597, name: "Thị trấn Cam Lộ", province: 46, district: 565
	},
	{
		id: 19600, name: "Xã Cam Tuyền", province: 46, district: 565
	},
	{
		id: 19603, name: "Xã Cam An", province: 46, district: 565
	},
	{
		id: 19606, name: "Xã Cam Thủy", province: 46, district: 565
	},
	{
		id: 19609, name: "Xã Cam Thanh", province: 46, district: 565
	},
	{
		id: 19612, name: "Xã Cam Thành", province: 46, district: 565
	},
	{
		id: 19615, name: "Xã Cam Hiếu", province: 46, district: 565
	},
	{
		id: 19618, name: "Xã Cam Chính", province: 46, district: 565
	},
	{
		id: 19621, name: "Xã Cam Nghĩa", province: 46, district: 565
	},
	{
		id: 19624, name: "Thị trấn Ái Tử", province: 46, district: 566
	},
	{
		id: 19627, name: "Xã Triệu An", province: 46, district: 566
	},
	{
		id: 19630, name: "Xã Triệu Vân", province: 46, district: 566
	},
	{
		id: 19633, name: "Xã Triệu Phước", province: 46, district: 566
	},
	{
		id: 19636, name: "Xã Triệu Độ", province: 46, district: 566
	},
	{
		id: 19639, name: "Xã Triệu Trạch", province: 46, district: 566
	},
	{
		id: 19642, name: "Xã Triệu Thuận", province: 46, district: 566
	},
	{
		id: 19645, name: "Xã Triệu Đại", province: 46, district: 566
	},
	{
		id: 19648, name: "Xã Triệu Hòa", province: 46, district: 566
	},
	{
		id: 19651, name: "Xã Triệu Lăng", province: 46, district: 566
	},
	{
		id: 19654, name: "Xã Triệu Sơn", province: 46, district: 566
	},
	{
		id: 19657, name: "Xã Triệu Long", province: 46, district: 566
	},
	{
		id: 19660, name: "Xã Triệu Tài", province: 46, district: 566
	},
	{
		id: 19663, name: "Xã Triệu Đông", province: 46, district: 566
	},
	{
		id: 19666, name: "Xã Triệu Trung", province: 46, district: 566
	},
	{
		id: 19669, name: "Xã Triệu Ái", province: 46, district: 566
	},
	{
		id: 19672, name: "Xã Triệu Thượng", province: 46, district: 566
	},
	{
		id: 19675, name: "Xã Triệu Giang", province: 46, district: 566
	},
	{
		id: 19678, name: "Xã Triệu Thành", province: 46, district: 566
	},
	{
		id: 19681, name: "Thị trấn Hải Lăng", province: 46, district: 567
	},
	{
		id: 19684, name: "Xã Hải An", province: 46, district: 567
	},
	{
		id: 19687, name: "Xã Hải Ba", province: 46, district: 567
	},
	{
		id: 19690, name: "Xã Hải Xuân", province: 46, district: 567
	},
	{
		id: 19693, name: "Xã Hải Quy", province: 46, district: 567
	},
	{
		id: 19696, name: "Xã Hải Quế", province: 46, district: 567
	},
	{
		id: 19699, name: "Xã Hải Vĩnh", province: 46, district: 567
	},
	{
		id: 19702, name: "Xã Hải Phú", province: 46, district: 567
	},
	{
		id: 19708, name: "Xã Hải Thượng", province: 46, district: 567
	},
	{
		id: 19711, name: "Xã Hải Dương", province: 46, district: 567
	},
	{
		id: 19714, name: "Xã Hải Thiện", province: 46, district: 567
	},
	{
		id: 19717, name: "Xã Hải Lâm", province: 46, district: 567
	},
	{
		id: 19720, name: "Xã Hải Thành", province: 46, district: 567
	},
	{
		id: 19723, name: "Xã Hải Hòa", province: 46, district: 567
	},
	{
		id: 19726, name: "Xã Hải Tân", province: 46, district: 567
	},
	{
		id: 19729, name: "Xã Hải Trường", province: 46, district: 567
	},
	{
		id: 19732, name: "Xã Hải Thọ", province: 46, district: 567
	},
	{
		id: 19735, name: "Xã Hải Sơn", province: 46, district: 567
	},
	{
		id: 19738, name: "Xã Hải Chánh", province: 46, district: 567
	},
	{
		id: 19741, name: "Xã Hải Khê", province: 46, district: 567
	},
	{
		id: 19429, name: "Thị trấn Khe Sanh", province: 46, district: 568
	},
	{
		id: 19432, name: "Thị trấn Lao Bảo", province: 46, district: 568
	},
	{
		id: 19435, name: "Xã Hướng Lập", province: 46, district: 568
	},
	{
		id: 19438, name: "Xã Hướng Việt", province: 46, district: 568
	},
	{
		id: 19441, name: "Xã Hướng Phùng", province: 46, district: 568
	},
	{
		id: 19444, name: "Xã Hướng Sơn", province: 46, district: 568
	},
	{
		id: 19447, name: "Xã Hướng Linh", province: 46, district: 568
	},
	{
		id: 19450, name: "Xã Tân Hợp", province: 46, district: 568
	},
	{
		id: 19453, name: "Xã Hướng Tân", province: 46, district: 568
	},
	{
		id: 19456, name: "Xã Tân Thành", province: 46, district: 568
	},
	{
		id: 19459, name: "Xã Tân Long", province: 46, district: 568
	},
	{
		id: 19462, name: "Xã Tân Lập", province: 46, district: 568
	},
	{
		id: 19465, name: "Xã Tân Liên", province: 46, district: 568
	},
	{
		id: 19468, name: "Xã Húc", province: 46, district: 568
	},
	{
		id: 19471, name: "Xã Thuận", province: 46, district: 568
	},
	{
		id: 19474, name: "Xã Hướng Lộc", province: 46, district: 568
	},
	{
		id: 19477, name: "Xã Ba Tầng", province: 46, district: 568
	},
	{
		id: 19480, name: "Xã Thanh", province: 46, district: 568
	},
	{
		id: 19483, name: "Xã A Dơi", province: 46, district: 568
	},
	{
		id: 19486, name: "Xã A Xing", province: 46, district: 568
	},
	{
		id: 19489, name: "Xã A Túc", province: 46, district: 568
	},
	{
		id: 19492, name: "Xã Xy", province: 46, district: 568
	},
	{
		id: 19555, name: "Thị trấn Krông Klang", province: 46, district: 569
	},
	{
		id: 19558, name: "Xã Mò Ó", province: 46, district: 569
	},
	{
		id: 19561, name: "Xã Hướng Hiệp", province: 46, district: 569
	},
	{
		id: 19564, name: "Xã Đa Krông", province: 46, district: 569
	},
	{
		id: 19567, name: "Xã Triệu Nguyên", province: 46, district: 569
	},
	{
		id: 19570, name: "Xã Ba Lòng", province: 46, district: 569
	},
	{
		id: 19573, name: "Xã Hải Phúc", province: 46, district: 569
	},
	{
		id: 19576, name: "Xã Ba Nang", province: 46, district: 569
	},
	{
		id: 19579, name: "Xã Tà Long", province: 46, district: 569
	},
	{
		id: 19582, name: "Xã Húc Nghì", province: 46, district: 569
	},
	{
		id: 19585, name: "Xã A Vao", province: 46, district: 569
	},
	{
		id: 19588, name: "Xã Tà Rụt", province: 46, district: 569
	},
	{
		id: 19591, name: "Xã A Bung", province: 46, district: 569
	},
	{
		id: 19594, name: "Xã A Ngo", province: 46, district: 569
	},
	{
		id: 50003, name: "Thị Trấn Cồn Cỏ", province: 46, district: 570
	},
	{
		id: 31498, name: "Phường 5", province: 47, district: 571
	},
	{
		id: 31501, name: "Phường 7", province: 47, district: 571
	},
	{
		id: 31504, name: "Phường 8", province: 47, district: 571
	},
	{
		id: 31507, name: "Phường 6", province: 47, district: 571
	},
	{
		id: 31510, name: "Phường 2", province: 47, district: 571
	},
	{
		id: 31513, name: "Phường 1", province: 47, district: 571
	},
	{
		id: 31516, name: "Phường 4", province: 47, district: 571
	},
	{
		id: 31519, name: "Phường 3", province: 47, district: 571
	},
	{
		id: 31522, name: "Phường 9", province: 47, district: 571
	},
	{
		id: 31525, name: "Phường 10", province: 47, district: 571
	},
	{
		id: 31528, name: "Thị trấn Kế Sách", province: 47, district: 572
	},
	{
		id: 31531, name: "Thị trấn An Lạc Thôn", province: 47, district: 572
	},
	{
		id: 31534, name: "Xã Xuân Hòa", province: 47, district: 572
	},
	{
		id: 31537, name: "Xã Phong Nẫm", province: 47, district: 572
	},
	{
		id: 31540, name: "Xã An Lạc Tây", province: 47, district: 572
	},
	{
		id: 31543, name: "Xã Trinh Phú", province: 47, district: 572
	},
	{
		id: 31546, name: "Xã Ba Trinh", province: 47, district: 572
	},
	{
		id: 31549, name: "Xã Thới An Hội", province: 47, district: 572
	},
	{
		id: 31552, name: "Xã Nhơn Mỹ", province: 47, district: 572
	},
	{
		id: 31555, name: "Xã Kế Thành", province: 47, district: 572
	},
	{
		id: 31558, name: "Xã Kế An", province: 47, district: 572
	},
	{
		id: 31561, name: "Xã Đại Hải", province: 47, district: 572
	},
	{
		id: 31564, name: "Xã An Mỹ", province: 47, district: 572
	},
	{
		id: 31567, name: "Thị trấn Huỳnh Hữu Nghĩa", province: 47, district: 573
	},
	{
		id: 31579, name: "Xã Long Hưng", province: 47, district: 573
	},
	{
		id: 31588, name: "Xã Hưng Phú", province: 47, district: 573
	},
	{
		id: 31591, name: "Xã Mỹ Hương", province: 47, district: 573
	},
	{
		id: 31597, name: "Xã Mỹ Tú", province: 47, district: 573
	},
	{
		id: 31603, name: "Xã Mỹ Phước", province: 47, district: 573
	},
	{
		id: 31606, name: "Xã Thuận Hưng", province: 47, district: 573
	},
	{
		id: 31609, name: "Xã Mỹ Thuận", province: 47, district: 573
	},
	{
		id: 31612, name: "Xã Phú Mỹ", province: 47, district: 573
	},
	{
		id: 31684, name: "Thị trấn Mỹ Xuyên", province: 47, district: 574
	},
	{
		id: 31690, name: "Xã Đại Tâm", province: 47, district: 574
	},
	{
		id: 31693, name: "Xã Tham Đôn", province: 47, district: 574
	},
	{
		id: 31708, name: "Xã Thạnh Phú", province: 47, district: 574
	},
	{
		id: 31711, name: "Xã Ngọc Đông", province: 47, district: 574
	},
	{
		id: 31714, name: "Xã Thạnh Quới", province: 47, district: 574
	},
	{
		id: 31717, name: "Xã Hòa Tú 1", province: 47, district: 574
	},
	{
		id: 31720, name: "Xã Gia Hòa 1", province: 47, district: 574
	},
	{
		id: 31723, name: "Xã Ngọc Tố", province: 47, district: 574
	},
	{
		id: 31726, name: "Xã Gia Hòa 2", province: 47, district: 574
	},
	{
		id: 31729, name: "Xã Hòa Tú Ii", province: 47, district: 574
	},
	{
		id: 31756, name: "Thị trấn Phú Lộc", province: 47, district: 575
	},
	{
		id: 31757, name: "Thị trấn Hưng Lợi", province: 47, district: 575
	},
	{
		id: 31759, name: "Xã Lâm Tân", province: 47, district: 575
	},
	{
		id: 31762, name: "Xã Thạnh Tân", province: 47, district: 575
	},
	{
		id: 31765, name: "Xã Lâm Kiết", province: 47, district: 575
	},
	{
		id: 31768, name: "Xã Tuân Tức", province: 47, district: 575
	},
	{
		id: 31771, name: "Xã Vĩnh Thành", province: 47, district: 575
	},
	{
		id: 31774, name: "Xã Thạnh Trị", province: 47, district: 575
	},
	{
		id: 31777, name: "Xã Vĩnh Lợi", province: 47, district: 575
	},
	{
		id: 31780, name: "Xã Châu Hưng", province: 47, district: 575
	},
	{
		id: 31639, name: "Thị trấn Long Phú", province: 47, district: 576
	},
	{
		id: 31642, name: "Xã Song Phụng", province: 47, district: 576
	},
	{
		id: 31645, name: "Thị trấn Đại Ngãi", province: 47, district: 576
	},
	{
		id: 31648, name: "Xã Hậu Thạnh", province: 47, district: 576
	},
	{
		id: 31651, name: "Xã Long Đức", province: 47, district: 576
	},
	{
		id: 31654, name: "Xã Trường Khánh", province: 47, district: 576
	},
	{
		id: 31657, name: "Xã Phú Hữu", province: 47, district: 576
	},
	{
		id: 31660, name: "Xã Tân Hưng", province: 47, district: 576
	},
	{
		id: 31663, name: "Xã Châu Khánh", province: 47, district: 576
	},
	{
		id: 31666, name: "Xã Tân Thạnh", province: 47, district: 576
	},
	{
		id: 31669, name: "Xã Long Phú", province: 47, district: 576
	},
	{
		id: 31783, name: "Phường 1", province: 47, district: 577
	},
	{
		id: 31786, name: "Xã Hòa Đông", province: 47, district: 577
	},
	{
		id: 31789, name: "Phường Khánh Hòa", province: 47, district: 577
	},
	{
		id: 31792, name: "Xã Vĩnh Hiệp", province: 47, district: 577
	},
	{
		id: 31795, name: "Xã Vĩnh Hải", province: 47, district: 577
	},
	{
		id: 31798, name: "Xã Lạc Hòa", province: 47, district: 577
	},
	{
		id: 31801, name: "Phường 2", province: 47, district: 577
	},
	{
		id: 31804, name: "Phường Vĩnh Phước", province: 47, district: 577
	},
	{
		id: 31807, name: "Xã Vĩnh Tân", province: 47, district: 577
	},
	{
		id: 31810, name: "Xã Lai Hòa", province: 47, district: 577
	},
	{
		id: 31615, name: "Thị trấn Cù Lao Dung", province: 47, district: 578
	},
	{
		id: 31618, name: "Xã An Thạnh 1", province: 47, district: 578
	},
	{
		id: 31621, name: "Xã An Thạnh Tây", province: 47, district: 578
	},
	{
		id: 31624, name: "Xã An Thạnh Đông", province: 47, district: 578
	},
	{
		id: 31627, name: "Xã Đại Ân 1", province: 47, district: 578
	},
	{
		id: 31630, name: "Xã An Thạnh 2", province: 47, district: 578
	},
	{
		id: 31633, name: "Xã An Thạnh 3", province: 47, district: 578
	},
	{
		id: 31636, name: "Xã An Thạnh Nam", province: 47, district: 578
	},
	{
		id: 31569, name: "Thị trấn Châu Thành", province: 47, district: 741
	},
	{
		id: 31570, name: "Xã Hồ Đắc Kiện", province: 47, district: 741
	},
	{
		id: 31573, name: "Xã Phú Tâm", province: 47, district: 741
	},
	{
		id: 31576, name: "Xã Thuận Hòa", province: 47, district: 741
	},
	{
		id: 31582, name: "Xã Phú Tân", province: 47, district: 741
	},
	{
		id: 31585, name: "Xã Thiện Mỹ", province: 47, district: 741
	},
	{
		id: 31594, name: "Xã An Hiệp", province: 47, district: 741
	},
	{
		id: 31600, name: "Xã An Ninh", province: 47, district: 741
	},
	{
		id: 31732, name: "Phường 1", province: 47, district: 742
	},
	{
		id: 31735, name: "Phường 2", province: 47, district: 742
	},
	{
		id: 31738, name: "Xã Vĩnh Quới", province: 47, district: 742
	},
	{
		id: 31741, name: "Xã Tân Long", province: 47, district: 742
	},
	{
		id: 31744, name: "Xã Long Bình", province: 47, district: 742
	},
	{
		id: 31747, name: "Phường 3", province: 47, district: 742
	},
	{
		id: 31750, name: "Xã Mỹ Bình", province: 47, district: 742
	},
	{
		id: 31753, name: "Xã Mỹ Quới", province: 47, district: 742
	},
	{
		id: 31672, name: "Xã Đại Ân 2", province: 47, district: 743
	},
	{
		id: 31673, name: "Thị trấn Trần Đề", province: 47, district: 743
	},
	{
		id: 31675, name: "Xã Liêu Tú", province: 47, district: 743
	},
	{
		id: 31678, name: "Xã Lịch Hội Thượng", province: 47, district: 743
	},
	{
		id: 31679, name: "Thị trấn Lịch Hội Thượng", province: 47, district: 743
	},
	{
		id: 31681, name: "Xã Trung Bình", province: 47, district: 743
	},
	{
		id: 31687, name: "Xã Tài Văn", province: 47, district: 743
	},
	{
		id: 31696, name: "Xã Viên An", province: 47, district: 743
	},
	{
		id: 31699, name: "Xã Thạnh Thới An", province: 47, district: 743
	},
	{
		id: 31702, name: "Xã Thạnh Thới Thuận", province: 47, district: 743
	},
	{
		id: 31705, name: "Xã Viên Bình", province: 47, district: 743
	},
	{
		id: 25456, name: "Phường 1", province: 48, district: 591
	},
	{
		id: 25459, name: "Phường 3", province: 48, district: 591
	},
	{
		id: 25462, name: "Phường 4", province: 48, district: 591
	},
	{
		id: 25465, name: "Phường Hiệp Ninh", province: 48, district: 591
	},
	{
		id: 25468, name: "Phường 2", province: 48, district: 591
	},
	{
		id: 25471, name: "Xã Thạnh Tân", province: 48, district: 591
	},
	{
		id: 25474, name: "Xã Tân Bình", province: 48, district: 591
	},
	{
		id: 25477, name: "Xã Bình Minh", province: 48, district: 591
	},
	{
		id: 25480, name: "Phường Ninh Sơn", province: 48, district: 591
	},
	{
		id: 25483, name: "Phường Ninh Thạnh", province: 48, district: 591
	},
	{
		id: 25486, name: "Thị trấn Tân Biên", province: 48, district: 592
	},
	{
		id: 25489, name: "Xã Tân Lập", province: 48, district: 592
	},
	{
		id: 25492, name: "Xã Thạnh Bắc", province: 48, district: 592
	},
	{
		id: 25495, name: "Xã Tân Bình", province: 48, district: 592
	},
	{
		id: 25498, name: "Xã Thạnh Bình", province: 48, district: 592
	},
	{
		id: 25501, name: "Xã Thạnh Tây", province: 48, district: 592
	},
	{
		id: 25504, name: "Xã Hòa Hiệp", province: 48, district: 592
	},
	{
		id: 25507, name: "Xã Tân Phong", province: 48, district: 592
	},
	{
		id: 25510, name: "Xã Mỏ Công", province: 48, district: 592
	},
	{
		id: 25513, name: "Xã Trà Vong", province: 48, district: 592
	},
	{
		id: 25516, name: "Thị trấn Tân Châu", province: 48, district: 593
	},
	{
		id: 25519, name: "Xã Tân Hà", province: 48, district: 593
	},
	{
		id: 25522, name: "Xã Tân Đông", province: 48, district: 593
	},
	{
		id: 25525, name: "Xã Tân Hội", province: 48, district: 593
	},
	{
		id: 25528, name: "Xã Tân Hoà", province: 48, district: 593
	},
	{
		id: 25531, name: "Xã Suối Ngô", province: 48, district: 593
	},
	{
		id: 25534, name: "Xã Suối Dây", province: 48, district: 593
	},
	{
		id: 25537, name: "Xã Tân Hiệp", province: 48, district: 593
	},
	{
		id: 25540, name: "Xã Thạnh Đông", province: 48, district: 593
	},
	{
		id: 25543, name: "Xã Tân Thành", province: 48, district: 593
	},
	{
		id: 25546, name: "Xã Tân Phú", province: 48, district: 593
	},
	{
		id: 25549, name: "Xã Tân Hưng", province: 48, district: 593
	},
	{
		id: 25552, name: "Thị trấn Dương Minh Châu", province: 48, district: 594
	},
	{
		id: 25555, name: "Xã Suối Đá", province: 48, district: 594
	},
	{
		id: 25558, name: "Xã Phan", province: 48, district: 594
	},
	{
		id: 25561, name: "Xã Phước Ninh", province: 48, district: 594
	},
	{
		id: 25564, name: "Xã Phước Minh", province: 48, district: 594
	},
	{
		id: 25567, name: "Xã Bàu Năng", province: 48, district: 594
	},
	{
		id: 25570, name: "Xã Chà Là", province: 48, district: 594
	},
	{
		id: 25573, name: "Xã Cầu Khởi", province: 48, district: 594
	},
	{
		id: 25576, name: "Xã Bến Củi", province: 48, district: 594
	},
	{
		id: 25579, name: "Xã Lộc Ninh", province: 48, district: 594
	},
	{
		id: 25582, name: "Xã Truông Mít", province: 48, district: 594
	},
	{
		id: 25585, name: "Thị trấn Châu Thành", province: 48, district: 595
	},
	{
		id: 25588, name: "Xã Hảo Đước", province: 48, district: 595
	},
	{
		id: 25591, name: "Xã Phước Vinh", province: 48, district: 595
	},
	{
		id: 25594, name: "Xã Đồng Khởi", province: 48, district: 595
	},
	{
		id: 25597, name: "Xã Thái Bình", province: 48, district: 595
	},
	{
		id: 25600, name: "Xã An Cơ", province: 48, district: 595
	},
	{
		id: 25603, name: "Xã Biên Giới", province: 48, district: 595
	},
	{
		id: 25606, name: "Xã Hòa Thạnh", province: 48, district: 595
	},
	{
		id: 25609, name: "Xã Trí Bình", province: 48, district: 595
	},
	{
		id: 25612, name: "Xã Hòa Hội", province: 48, district: 595
	},
	{
		id: 25615, name: "Xã An Bình", province: 48, district: 595
	},
	{
		id: 25618, name: "Xã Thanh Điền", province: 48, district: 595
	},
	{
		id: 25621, name: "Xã Thành Long", province: 48, district: 595
	},
	{
		id: 25624, name: "Xã Ninh Điền", province: 48, district: 595
	},
	{
		id: 25627, name: "Xã Long Vĩnh", province: 48, district: 595
	},
	{
		id: 25630, name: "Thị trấn Hòa Thành", province: 48, district: 596
	},
	{
		id: 25633, name: "Xã Hiệp Tân", province: 48, district: 596
	},
	{
		id: 25636, name: "Xã Long Thành Bắc", province: 48, district: 596
	},
	{
		id: 25639, name: "Xã Trường Hòa", province: 48, district: 596
	},
	{
		id: 25642, name: "Xã Trường Đông", province: 48, district: 596
	},
	{
		id: 25645, name: "Xã Long Thành Trung", province: 48, district: 596
	},
	{
		id: 25648, name: "Xã Trường Tây", province: 48, district: 596
	},
	{
		id: 25651, name: "Xã Long Thành Nam", province: 48, district: 596
	},
	{
		id: 25681, name: "Thị trấn Bến Cầu", province: 48, district: 597
	},
	{
		id: 25684, name: "Xã Long Chữ", province: 48, district: 597
	},
	{
		id: 25687, name: "Xã Long Phước", province: 48, district: 597
	},
	{
		id: 25690, name: "Xã Long Giang", province: 48, district: 597
	},
	{
		id: 25693, name: "Xã Tiên Thuận", province: 48, district: 597
	},
	{
		id: 25696, name: "Xã Long Khánh", province: 48, district: 597
	},
	{
		id: 25699, name: "Xã Lợi Thuận", province: 48, district: 597
	},
	{
		id: 25702, name: "Xã Long Thuận", province: 48, district: 597
	},
	{
		id: 25705, name: "Xã An Thạnh", province: 48, district: 597
	},
	{
		id: 25654, name: "Thị trấn Gò Dầu", province: 48, district: 598
	},
	{
		id: 25657, name: "Xã Thạnh Đức", province: 48, district: 598
	},
	{
		id: 25660, name: "Xã Cẩm Giang", province: 48, district: 598
	},
	{
		id: 25663, name: "Xã Hiệp Thạnh", province: 48, district: 598
	},
	{
		id: 25666, name: "Xã Bàu Đồn", province: 48, district: 598
	},
	{
		id: 25669, name: "Xã Phước Thạnh", province: 48, district: 598
	},
	{
		id: 25672, name: "Xã Phước Đông", province: 48, district: 598
	},
	{
		id: 25675, name: "Xã Phước Trạch", province: 48, district: 598
	},
	{
		id: 25678, name: "Xã Thanh Phước", province: 48, district: 598
	},
	{
		id: 25708, name: "Thị trấn Trảng Bàng", province: 48, district: 599
	},
	{
		id: 25711, name: "Xã Đôn Thuận", province: 48, district: 599
	},
	{
		id: 25714, name: "Xã Hưng Thuận", province: 48, district: 599
	},
	{
		id: 25717, name: "Xã Lộc Hưng", province: 48, district: 599
	},
	{
		id: 25720, name: "Xã Gia Lộc", province: 48, district: 599
	},
	{
		id: 25723, name: "Xã Gia Bình", province: 48, district: 599
	},
	{
		id: 25726, name: "Xã Phước Lưu", province: 48, district: 599
	},
	{
		id: 25729, name: "Xã Bình Thạnh", province: 48, district: 599
	},
	{
		id: 25732, name: "Xã An Tịnh", province: 48, district: 599
	},
	{
		id: 25735, name: "Xã An Hòa", province: 48, district: 599
	},
	{
		id: 25738, name: "Xã Phước Chỉ", province: 48, district: 599
	},
	{
		id: 12433, name: "Phường Lê Hồng Phong", province: 49, district: 627
	},
	{
		id: 12436, name: "Phường Bồ Xuyên", province: 49, district: 627
	},
	{
		id: 12439, name: "Phường Đề Thám", province: 49, district: 627
	},
	{
		id: 12442, name: "Phường Kỳ Bá", province: 49, district: 627
	},
	{
		id: 12445, name: "Phường Quang Trung", province: 49, district: 627
	},
	{
		id: 12448, name: "Phường Phú Khánh", province: 49, district: 627
	},
	{
		id: 12451, name: "Phường Tiền Phong", province: 49, district: 627
	},
	{
		id: 12452, name: "Phường Trần Hưng Đạo", province: 49, district: 627
	},
	{
		id: 12454, name: "Phường Trần Lãm", province: 49, district: 627
	},
	{
		id: 12457, name: "Xã Đông Hòa", province: 49, district: 627
	},
	{
		id: 12460, name: "Phường Hoàng Diệu", province: 49, district: 627
	},
	{
		id: 12463, name: "Xã Phú Xuân", province: 49, district: 627
	},
	{
		id: 12466, name: "Xã Vũ Phúc", province: 49, district: 627
	},
	{
		id: 12469, name: "Xã Vũ Chính", province: 49, district: 627
	},
	{
		id: 12817, name: "Xã Đông Mỹ", province: 49, district: 627
	},
	{
		id: 12820, name: "Xã Đông Thọ", province: 49, district: 627
	},
	{
		id: 13084, name: "Xã Vũ Đông", province: 49, district: 627
	},
	{
		id: 13108, name: "Xã Vũ Lạc", province: 49, district: 627
	},
	{
		id: 13225, name: "Xã Tân Bình", province: 49, district: 627
	},
	{
		id: 12472, name: "Thị trấn Quỳnh Côi", province: 49, district: 628
	},
	{
		id: 12475, name: "Xã An Khê", province: 49, district: 628
	},
	{
		id: 12478, name: "Xã An Đồng", province: 49, district: 628
	},
	{
		id: 12481, name: "Xã Quỳnh Hoa", province: 49, district: 628
	},
	{
		id: 12484, name: "Xã Quỳnh Lâm", province: 49, district: 628
	},
	{
		id: 12487, name: "Xã Quỳnh Thọ", province: 49, district: 628
	},
	{
		id: 12490, name: "Xã An Hiệp", province: 49, district: 628
	},
	{
		id: 12493, name: "Xã Quỳnh Hoàng", province: 49, district: 628
	},
	{
		id: 12496, name: "Xã Quỳnh Giao", province: 49, district: 628
	},
	{
		id: 12499, name: "Xã An Thái", province: 49, district: 628
	},
	{
		id: 12502, name: "Xã An Cầu", province: 49, district: 628
	},
	{
		id: 12505, name: "Xã Quỳnh Hồng", province: 49, district: 628
	},
	{
		id: 12508, name: "Xã Quỳnh Khê", province: 49, district: 628
	},
	{
		id: 12511, name: "Xã Quỳnh Minh", province: 49, district: 628
	},
	{
		id: 12514, name: "Xã An Ninh", province: 49, district: 628
	},
	{
		id: 12517, name: "Xã Quỳnh Ngọc", province: 49, district: 628
	},
	{
		id: 12520, name: "Xã Quỳnh Hải", province: 49, district: 628
	},
	{
		id: 12523, name: "Thị trấn An Bài", province: 49, district: 628
	},
	{
		id: 12526, name: "Xã An Ấp", province: 49, district: 628
	},
	{
		id: 12529, name: "Xã Quỳnh Hội", province: 49, district: 628
	},
	{
		id: 12532, name: "Xã Quỳnh Sơn", province: 49, district: 628
	},
	{
		id: 12535, name: "Xã Quỳnh Mỹ", province: 49, district: 628
	},
	{
		id: 12538, name: "Xã An Quí", province: 49, district: 628
	},
	{
		id: 12541, name: "Xã An Thanh", province: 49, district: 628
	},
	{
		id: 12544, name: "Xã Quỳnh Châu", province: 49, district: 628
	},
	{
		id: 12547, name: "Xã An Vũ", province: 49, district: 628
	},
	{
		id: 12550, name: "Xã An Lễ", province: 49, district: 628
	},
	{
		id: 12553, name: "Xã Quỳnh Hưng", province: 49, district: 628
	},
	{
		id: 12556, name: "Xã Quỳnh Bảo", province: 49, district: 628
	},
	{
		id: 12559, name: "Xã An Mỹ", province: 49, district: 628
	},
	{
		id: 12562, name: "Xã Quỳnh Nguyên", province: 49, district: 628
	},
	{
		id: 12565, name: "Xã An Vinh", province: 49, district: 628
	},
	{
		id: 12568, name: "Xã Quỳnh Xá", province: 49, district: 628
	},
	{
		id: 12571, name: "Xã An Dục", province: 49, district: 628
	},
	{
		id: 12574, name: "Xã Đông Hải", province: 49, district: 628
	},
	{
		id: 12577, name: "Xã Quỳnh Trang", province: 49, district: 628
	},
	{
		id: 12580, name: "Xã An Tràng", province: 49, district: 628
	},
	{
		id: 12583, name: "Xã Đồng Tiến", province: 49, district: 628
	},
	{
		id: 12586, name: "Thị trấn Hưng Hà", province: 49, district: 629
	},
	{
		id: 12589, name: "Xã Điệp Nông", province: 49, district: 629
	},
	{
		id: 12592, name: "Xã Tân Lễ", province: 49, district: 629
	},
	{
		id: 12595, name: "Xã Cộng Hòa", province: 49, district: 629
	},
	{
		id: 12598, name: "Xã Dân Chủ", province: 49, district: 629
	},
	{
		id: 12601, name: "Xã Canh Tân", province: 49, district: 629
	},
	{
		id: 12604, name: "Xã Hòa Tiến", province: 49, district: 629
	},
	{
		id: 12607, name: "Xã Hùng Dũng", province: 49, district: 629
	},
	{
		id: 12610, name: "Xã Tân Tiến", province: 49, district: 629
	},
	{
		id: 12613, name: "Thị trấn Hưng Nhân", province: 49, district: 629
	},
	{
		id: 12616, name: "Xã Đoan Hùng", province: 49, district: 629
	},
	{
		id: 12619, name: "Xã Duyên Hải", province: 49, district: 629
	},
	{
		id: 12622, name: "Xã Tân Hòa", province: 49, district: 629
	},
	{
		id: 12625, name: "Xã Văn Cẩm", province: 49, district: 629
	},
	{
		id: 12628, name: "Xã Bắc Sơn", province: 49, district: 629
	},
	{
		id: 12631, name: "Xã Đông Đô", province: 49, district: 629
	},
	{
		id: 12634, name: "Xã Phúc Khánh", province: 49, district: 629
	},
	{
		id: 12637, name: "Xã Liên Hiệp", province: 49, district: 629
	},
	{
		id: 12640, name: "Xã Tây Đô", province: 49, district: 629
	},
	{
		id: 12643, name: "Xã Thống Nhất", province: 49, district: 629
	},
	{
		id: 12646, name: "Xã Tiến Đức", province: 49, district: 629
	},
	{
		id: 12649, name: "Xã Thái Hưng", province: 49, district: 629
	},
	{
		id: 12652, name: "Xã Thái Phương", province: 49, district: 629
	},
	{
		id: 12655, name: "Xã Hoà Bình", province: 49, district: 629
	},
	{
		id: 12656, name: "Xã Chi Lăng", province: 49, district: 629
	},
	{
		id: 12658, name: "Xã Minh Khai", province: 49, district: 629
	},
	{
		id: 12661, name: "Xã Hồng An", province: 49, district: 629
	},
	{
		id: 12664, name: "Xã Kim Chung", province: 49, district: 629
	},
	{
		id: 12667, name: "Xã Hồng Lĩnh", province: 49, district: 629
	},
	{
		id: 12670, name: "Xã Minh Tân", province: 49, district: 629
	},
	{
		id: 12673, name: "Xã Văn Lang", province: 49, district: 629
	},
	{
		id: 12676, name: "Xã Độc Lập", province: 49, district: 629
	},
	{
		id: 12679, name: "Xã Chí Hòa", province: 49, district: 629
	},
	{
		id: 12682, name: "Xã Minh Hòa", province: 49, district: 629
	},
	{
		id: 12685, name: "Xã Hồng Minh", province: 49, district: 629
	},
	{
		id: 12688, name: "Thị trấn Đông Hưng", province: 49, district: 630
	},
	{
		id: 12691, name: "Xã Đô Lương", province: 49, district: 630
	},
	{
		id: 12694, name: "Xã Đông Phương", province: 49, district: 630
	},
	{
		id: 12697, name: "Xã Liên Giang", province: 49, district: 630
	},
	{
		id: 12700, name: "Xã An Châu", province: 49, district: 630
	},
	{
		id: 12703, name: "Xã Đông Sơn", province: 49, district: 630
	},
	{
		id: 12706, name: "Xã Đông Cường", province: 49, district: 630
	},
	{
		id: 12709, name: "Xã Phú Lương", province: 49, district: 630
	},
	{
		id: 12712, name: "Xã Mê Linh", province: 49, district: 630
	},
	{
		id: 12715, name: "Xã Lô Giang", province: 49, district: 630
	},
	{
		id: 12718, name: "Xã Đông La", province: 49, district: 630
	},
	{
		id: 12721, name: "Xã Minh Tân", province: 49, district: 630
	},
	{
		id: 12724, name: "Xã Đông Xá", province: 49, district: 630
	},
	{
		id: 12727, name: "Xã Chương Dương", province: 49, district: 630
	},
	{
		id: 12730, name: "Xã Nguyên Xá", province: 49, district: 630
	},
	{
		id: 12733, name: "Xã Phong Châu", province: 49, district: 630
	},
	{
		id: 12736, name: "Xã Hợp Tiến", province: 49, district: 630
	},
	{
		id: 12739, name: "Xã Hồng Việt", province: 49, district: 630
	},
	{
		id: 12742, name: "Xã Đông Hà", province: 49, district: 630
	},
	{
		id: 12745, name: "Xã Đông Giang", province: 49, district: 630
	},
	{
		id: 12748, name: "Xã Đông Kinh", province: 49, district: 630
	},
	{
		id: 12751, name: "Xã Đông Hợp", province: 49, district: 630
	},
	{
		id: 12754, name: "Xã Thăng Long", province: 49, district: 630
	},
	{
		id: 12757, name: "Xã Đông Các", province: 49, district: 630
	},
	{
		id: 12760, name: "Xã Phú Châu", province: 49, district: 630
	},
	{
		id: 12763, name: "Xã Hoa Lư", province: 49, district: 630
	},
	{
		id: 12766, name: "Xã Minh Châu", province: 49, district: 630
	},
	{
		id: 12769, name: "Xã Đông Tân", province: 49, district: 630
	},
	{
		id: 12772, name: "Xã Đông Vinh", province: 49, district: 630
	},
	{
		id: 12775, name: "Xã Đông Động", province: 49, district: 630
	},
	{
		id: 12778, name: "Xã Hồng Châu", province: 49, district: 630
	},
	{
		id: 12781, name: "Xã Bạch Đằng", province: 49, district: 630
	},
	{
		id: 12784, name: "Xã Trọng Quan", province: 49, district: 630
	},
	{
		id: 12787, name: "Xã Hoa Nam", province: 49, district: 630
	},
	{
		id: 12790, name: "Xã Hồng Giang", province: 49, district: 630
	},
	{
		id: 12793, name: "Xã Đông Phong", province: 49, district: 630
	},
	{
		id: 12796, name: "Xã Đông Quang", province: 49, district: 630
	},
	{
		id: 12799, name: "Xã Đông Xuân", province: 49, district: 630
	},
	{
		id: 12802, name: "Xã Đông Á", province: 49, district: 630
	},
	{
		id: 12805, name: "Xã Đông Lĩnh", province: 49, district: 630
	},
	{
		id: 12808, name: "Xã Đông Hoàng", province: 49, district: 630
	},
	{
		id: 12811, name: "Xã Đông Dương", province: 49, district: 630
	},
	{
		id: 12814, name: "Xã Đông Huy", province: 49, district: 630
	},
	{
		id: 12823, name: "Xã Đồng Phú", province: 49, district: 630
	},
	{
		id: 13192, name: "Thị trấn Vũ Thư", province: 49, district: 631
	},
	{
		id: 13195, name: "Xã Hồng Lý", province: 49, district: 631
	},
	{
		id: 13198, name: "Xã Đồng Thanh", province: 49, district: 631
	},
	{
		id: 13201, name: "Xã Xuân Hòa", province: 49, district: 631
	},
	{
		id: 13204, name: "Xã Hiệp Hòa", province: 49, district: 631
	},
	{
		id: 13207, name: "Xã Phúc Thành", province: 49, district: 631
	},
	{
		id: 13210, name: "Xã Tân Phong", province: 49, district: 631
	},
	{
		id: 13213, name: "Xã Song Lãng", province: 49, district: 631
	},
	{
		id: 13216, name: "Xã Tân Hòa", province: 49, district: 631
	},
	{
		id: 13219, name: "Xã Việt Hùng", province: 49, district: 631
	},
	{
		id: 13222, name: "Xã Minh Lãng", province: 49, district: 631
	},
	{
		id: 13228, name: "Xã Minh Khai", province: 49, district: 631
	},
	{
		id: 13231, name: "Xã Dũng Nghĩa", province: 49, district: 631
	},
	{
		id: 13234, name: "Xã Minh Quang", province: 49, district: 631
	},
	{
		id: 13237, name: "Xã Tam Quang", province: 49, district: 631
	},
	{
		id: 13240, name: "Xã Tân Lập", province: 49, district: 631
	},
	{
		id: 13243, name: "Xã Bách Thuận", province: 49, district: 631
	},
	{
		id: 13246, name: "Xã Tự Tân", province: 49, district: 631
	},
	{
		id: 13249, name: "Xã Song An", province: 49, district: 631
	},
	{
		id: 13252, name: "Xã Trung An", province: 49, district: 631
	},
	{
		id: 13255, name: "Xã Vũ Hội", province: 49, district: 631
	},
	{
		id: 13258, name: "Xã Hòa Bình", province: 49, district: 631
	},
	{
		id: 13261, name: "Xã Nguyên Xá", province: 49, district: 631
	},
	{
		id: 13264, name: "Xã Việt Thuận", province: 49, district: 631
	},
	{
		id: 13267, name: "Xã Vũ Vinh", province: 49, district: 631
	},
	{
		id: 13270, name: "Xã Vũ Đoài", province: 49, district: 631
	},
	{
		id: 13273, name: "Xã Vũ Tiến", province: 49, district: 631
	},
	{
		id: 13276, name: "Xã Vũ Vân", province: 49, district: 631
	},
	{
		id: 13279, name: "Xã Duy Nhất", province: 49, district: 631
	},
	{
		id: 13282, name: "Xã Hồng Phong", province: 49, district: 631
	},
	{
		id: 13075, name: "Thị trấn Thanh Nê", province: 49, district: 632
	},
	{
		id: 13078, name: "Xã Trà Giang", province: 49, district: 632
	},
	{
		id: 13081, name: "Xã Quốc Tuấn", province: 49, district: 632
	},
	{
		id: 13087, name: "Xã An Bình", province: 49, district: 632
	},
	{
		id: 13090, name: "Xã Vũ Tây", province: 49, district: 632
	},
	{
		id: 13093, name: "Xã Hồng Thái", province: 49, district: 632
	},
	{
		id: 13096, name: "Xã Bình Nguyên", province: 49, district: 632
	},
	{
		id: 13099, name: "Xã Vũ Sơn", province: 49, district: 632
	},
	{
		id: 13102, name: "Xã Lê Lợi", province: 49, district: 632
	},
	{
		id: 13105, name: "Xã Quyết Tiến", province: 49, district: 632
	},
	{
		id: 13111, name: "Xã Vũ Lễ", province: 49, district: 632
	},
	{
		id: 13114, name: "Xã Thanh Tân", province: 49, district: 632
	},
	{
		id: 13117, name: "Xã Thượng Hiền", province: 49, district: 632
	},
	{
		id: 13120, name: "Xã Nam Cao", province: 49, district: 632
	},
	{
		id: 13123, name: "Xã Đình Phùng", province: 49, district: 632
	},
	{
		id: 13126, name: "Xã Vũ Ninh", province: 49, district: 632
	},
	{
		id: 13129, name: "Xã Vũ An", province: 49, district: 632
	},
	{
		id: 13132, name: "Xã Quang Lịch", province: 49, district: 632
	},
	{
		id: 13135, name: "Xã Hòa Bình", province: 49, district: 632
	},
	{
		id: 13138, name: "Xã Bình Minh", province: 49, district: 632
	},
	{
		id: 13141, name: "Xã Vũ Quí", province: 49, district: 632
	},
	{
		id: 13144, name: "Xã Quang Bình", province: 49, district: 632
	},
	{
		id: 13147, name: "Xã An Bồi", province: 49, district: 632
	},
	{
		id: 13150, name: "Xã Vũ Trung", province: 49, district: 632
	},
	{
		id: 13153, name: "Xã Vũ Thắng", province: 49, district: 632
	},
	{
		id: 13156, name: "Xã Vũ Công", province: 49, district: 632
	},
	{
		id: 13159, name: "Xã Vũ Hòa", province: 49, district: 632
	},
	{
		id: 13162, name: "Xã Quang Minh", province: 49, district: 632
	},
	{
		id: 13165, name: "Xã Quang Trung", province: 49, district: 632
	},
	{
		id: 13168, name: "Xã Minh Hưng", province: 49, district: 632
	},
	{
		id: 13171, name: "Xã Quang Hưng", province: 49, district: 632
	},
	{
		id: 13174, name: "Xã Vũ Bình", province: 49, district: 632
	},
	{
		id: 13177, name: "Xã Minh Tân", province: 49, district: 632
	},
	{
		id: 13180, name: "Xã Nam Bình", province: 49, district: 632
	},
	{
		id: 13183, name: "Xã Bình Thanh", province: 49, district: 632
	},
	{
		id: 13186, name: "Xã Bình Định", province: 49, district: 632
	},
	{
		id: 13189, name: "Xã Hồng Tiến", province: 49, district: 632
	},
	{
		id: 12970, name: "Thị trấn Tiền Hải", province: 49, district: 633
	},
	{
		id: 12973, name: "Xã Đông Hải", province: 49, district: 633
	},
	{
		id: 12976, name: "Xã Đông Trà", province: 49, district: 633
	},
	{
		id: 12979, name: "Xã Đông Long", province: 49, district: 633
	},
	{
		id: 12982, name: "Xã Đông Quí", province: 49, district: 633
	},
	{
		id: 12985, name: "Xã Vũ Lăng", province: 49, district: 633
	},
	{
		id: 12988, name: "Xã Đông Xuyên", province: 49, district: 633
	},
	{
		id: 12991, name: "Xã Tây Lương", province: 49, district: 633
	},
	{
		id: 12994, name: "Xã Tây Ninh", province: 49, district: 633
	},
	{
		id: 12997, name: "Xã Đông Trung", province: 49, district: 633
	},
	{
		id: 13000, name: "Xã Đông Hoàng", province: 49, district: 633
	},
	{
		id: 13003, name: "Xã Đông Minh", province: 49, district: 633
	},
	{
		id: 13006, name: "Xã Tây An", province: 49, district: 633
	},
	{
		id: 13009, name: "Xã Đông Phong", province: 49, district: 633
	},
	{
		id: 13012, name: "Xã An Ninh", province: 49, district: 633
	},
	{
		id: 13015, name: "Xã Tây Sơn", province: 49, district: 633
	},
	{
		id: 13018, name: "Xã Đông Cơ", province: 49, district: 633
	},
	{
		id: 13021, name: "Xã Tây Giang", province: 49, district: 633
	},
	{
		id: 13024, name: "Xã Đông Lâm", province: 49, district: 633
	},
	{
		id: 13027, name: "Xã Phương Công", province: 49, district: 633
	},
	{
		id: 13030, name: "Xã Tây Phong", province: 49, district: 633
	},
	{
		id: 13033, name: "Xã Tây Tiến", province: 49, district: 633
	},
	{
		id: 13036, name: "Xã Nam Cường", province: 49, district: 633
	},
	{
		id: 13039, name: "Xã Vân Trường", province: 49, district: 633
	},
	{
		id: 13042, name: "Xã Nam Thắng", province: 49, district: 633
	},
	{
		id: 13045, name: "Xã Nam Chính", province: 49, district: 633
	},
	{
		id: 13048, name: "Xã Bắc Hải", province: 49, district: 633
	},
	{
		id: 13051, name: "Xã Nam Thịnh", province: 49, district: 633
	},
	{
		id: 13054, name: "Xã Nam Hà", province: 49, district: 633
	},
	{
		id: 13057, name: "Xã Nam Thanh", province: 49, district: 633
	},
	{
		id: 13060, name: "Xã Nam Trung", province: 49, district: 633
	},
	{
		id: 13063, name: "Xã Nam Hồng", province: 49, district: 633
	},
	{
		id: 13066, name: "Xã Nam Hưng", province: 49, district: 633
	},
	{
		id: 13069, name: "Xã Nam Hải", province: 49, district: 633
	},
	{
		id: 13072, name: "Xã Nam Phú", province: 49, district: 633
	},
	{
		id: 12826, name: "Thị trấn Diêm Điền", province: 49, district: 634
	},
	{
		id: 12829, name: "Xã Thụy Tân", province: 49, district: 634
	},
	{
		id: 12832, name: "Xã Thụy Trường", province: 49, district: 634
	},
	{
		id: 12835, name: "Xã Hồng Quỳnh", province: 49, district: 634
	},
	{
		id: 12838, name: "Xã Thụy Dũng", province: 49, district: 634
	},
	{
		id: 12841, name: "Xã Thụy Hồng", province: 49, district: 634
	},
	{
		id: 12844, name: "Xã Thụy Quỳnh", province: 49, district: 634
	},
	{
		id: 12847, name: "Xã Thụy An", province: 49, district: 634
	},
	{
		id: 12850, name: "Xã Thụy Ninh", province: 49, district: 634
	},
	{
		id: 12853, name: "Xã Thụy Hưng", province: 49, district: 634
	},
	{
		id: 12856, name: "Xã Thụy Việt", province: 49, district: 634
	},
	{
		id: 12859, name: "Xã Thụy Văn", province: 49, district: 634
	},
	{
		id: 12862, name: "Xã Thụy Xuân", province: 49, district: 634
	},
	{
		id: 12865, name: "Xã Thụy Dương", province: 49, district: 634
	},
	{
		id: 12868, name: "Xã Thụy Trình", province: 49, district: 634
	},
	{
		id: 12871, name: "Xã Thụy Bình", province: 49, district: 634
	},
	{
		id: 12874, name: "Xã Thụy Chính", province: 49, district: 634
	},
	{
		id: 12877, name: "Xã Thụy Dân", province: 49, district: 634
	},
	{
		id: 12880, name: "Xã Thụy Hải", province: 49, district: 634
	},
	{
		id: 12883, name: "Xã Thụy Phúc", province: 49, district: 634
	},
	{
		id: 12886, name: "Xã Thụy Lương", province: 49, district: 634
	},
	{
		id: 12889, name: "Xã Thụy Liên", province: 49, district: 634
	},
	{
		id: 12892, name: "Xã Thụy Duyên", province: 49, district: 634
	},
	{
		id: 12895, name: "Xã Thụy Hà", province: 49, district: 634
	},
	{
		id: 12898, name: "Xã Thụy Thanh", province: 49, district: 634
	},
	{
		id: 12901, name: "Xã Thụy Sơn", province: 49, district: 634
	},
	{
		id: 12904, name: "Xã Thụy Phong", province: 49, district: 634
	},
	{
		id: 12907, name: "Xã Thái Thượng", province: 49, district: 634
	},
	{
		id: 12910, name: "Xã Thái Nguyên", province: 49, district: 634
	},
	{
		id: 12913, name: "Xã Thái Thuỷ", province: 49, district: 634
	},
	{
		id: 12916, name: "Xã Thái Dương", province: 49, district: 634
	},
	{
		id: 12919, name: "Xã Thái Giang", province: 49, district: 634
	},
	{
		id: 12922, name: "Xã Thái Hoà", province: 49, district: 634
	},
	{
		id: 12925, name: "Xã Thái Sơn", province: 49, district: 634
	},
	{
		id: 12928, name: "Xã Thái Hồng", province: 49, district: 634
	},
	{
		id: 12931, name: "Xã Thái An", province: 49, district: 634
	},
	{
		id: 12934, name: "Xã Thái Phúc", province: 49, district: 634
	},
	{
		id: 12937, name: "Xã Thái Hưng", province: 49, district: 634
	},
	{
		id: 12940, name: "Xã Thái Đô", province: 49, district: 634
	},
	{
		id: 12943, name: "Xã Thái Xuyên", province: 49, district: 634
	},
	{
		id: 12946, name: "Xã Thái Hà", province: 49, district: 634
	},
	{
		id: 12949, name: "Xã Mỹ Lộc", province: 49, district: 634
	},
	{
		id: 12952, name: "Xã Thái Tân", province: 49, district: 634
	},
	{
		id: 12955, name: "Xã Thái Thuần", province: 49, district: 634
	},
	{
		id: 12958, name: "Xã Thái Học", province: 49, district: 634
	},
	{
		id: 12961, name: "Xã Thái Thịnh", province: 49, district: 634
	},
	{
		id: 12964, name: "Xã Thái Thành", province: 49, district: 634
	},
	{
		id: 12967, name: "Xã Thái Thọ", province: 49, district: 634
	},
	{
		id: 5431, name: "Phường Quán Triều", province: 50, district: 635
	},
	{
		id: 5434, name: "Phường Quang Vinh", province: 50, district: 635
	},
	{
		id: 5437, name: "Phường Túc Duyên", province: 50, district: 635
	},
	{
		id: 5440, name: "Phường Hoàng Văn Thụ", province: 50, district: 635
	},
	{
		id: 5443, name: "Phường Trưng Vương", province: 50, district: 635
	},
	{
		id: 5446, name: "Phường Quang Trung", province: 50, district: 635
	},
	{
		id: 5449, name: "Phường Phan Đình Phùng", province: 50, district: 635
	},
	{
		id: 5452, name: "Phường Tân Thịnh", province: 50, district: 635
	},
	{
		id: 5455, name: "Phường Thịnh Đán", province: 50, district: 635
	},
	{
		id: 5458, name: "Phường Đồng Quang", province: 50, district: 635
	},
	{
		id: 5461, name: "Phường Gia Sàng", province: 50, district: 635
	},
	{
		id: 5464, name: "Phường Tân Lập", province: 50, district: 635
	},
	{
		id: 5467, name: "Phường Cam Giá", province: 50, district: 635
	},
	{
		id: 5470, name: "Phường Phú Xá", province: 50, district: 635
	},
	{
		id: 5473, name: "Phường Hương Sơn", province: 50, district: 635
	},
	{
		id: 5476, name: "Phường Trung Thành", province: 50, district: 635
	},
	{
		id: 5479, name: "Phường Tân Thành", province: 50, district: 635
	},
	{
		id: 5482, name: "Phường Tân Long", province: 50, district: 635
	},
	{
		id: 5485, name: "Xã Phúc Hà", province: 50, district: 635
	},
	{
		id: 5488, name: "Xã Phúc Xuân", province: 50, district: 635
	},
	{
		id: 5491, name: "Xã Quyết Thắng", province: 50, district: 635
	},
	{
		id: 5494, name: "Xã Phúc Trìu", province: 50, district: 635
	},
	{
		id: 5497, name: "Xã Thịnh Đức", province: 50, district: 635
	},
	{
		id: 5500, name: "Phường Tích Lương", province: 50, district: 635
	},
	{
		id: 5503, name: "Xã Tân Cương", province: 50, district: 635
	},
	{
		id: 5695, name: "Xã Cao Ngạn", province: 50, district: 635
	},
	{
		id: 5710, name: "Xã Đồng Bẩm", province: 50, district: 635
	},
	{
		id: 5506, name: "Phường Lương Sơn", province: 50, district: 636
	},
	{
		id: 5509, name: "Phường Lương Châu", province: 50, district: 636
	},
	{
		id: 5512, name: "Phường Mỏ Chè", province: 50, district: 636
	},
	{
		id: 5515, name: "Phường Cải Đan", province: 50, district: 636
	},
	{
		id: 5518, name: "Phường Thắng Lợi", province: 50, district: 636
	},
	{
		id: 5521, name: "Phường Phố Cò", province: 50, district: 636
	},
	{
		id: 5524, name: "Xã Vinh Sơn", province: 50, district: 636
	},
	{
		id: 5527, name: "Xã Tân Quang", province: 50, district: 636
	},
	{
		id: 5528, name: "Phường Bách Quang", province: 50, district: 636
	},
	{
		id: 5530, name: "Xã Bình Sơn", province: 50, district: 636
	},
	{
		id: 5533, name: "Xã Bá Xuyên", province: 50, district: 636
	},
	{
		id: 5536, name: "Thị trấn Chợ Chu", province: 50, district: 637
	},
	{
		id: 5539, name: "Xã Linh Thông", province: 50, district: 637
	},
	{
		id: 5542, name: "Xã Lam Vỹ", province: 50, district: 637
	},
	{
		id: 5545, name: "Xã Quy Kỳ", province: 50, district: 637
	},
	{
		id: 5548, name: "Xã Tân Thịnh", province: 50, district: 637
	},
	{
		id: 5551, name: "Xã Kim Phượng", province: 50, district: 637
	},
	{
		id: 5554, name: "Xã Bảo Linh", province: 50, district: 637
	},
	{
		id: 5557, name: "Xã Kim Sơn", province: 50, district: 637
	},
	{
		id: 5560, name: "Xã Phúc Chu", province: 50, district: 637
	},
	{
		id: 5563, name: "Xã Tân Dương", province: 50, district: 637
	},
	{
		id: 5566, name: "Xã Phượng Tiến", province: 50, district: 637
	},
	{
		id: 5569, name: "Xã Bảo Cường", province: 50, district: 637
	},
	{
		id: 5572, name: "Xã Đồng Thịnh", province: 50, district: 637
	},
	{
		id: 5575, name: "Xã Định Biên", province: 50, district: 637
	},
	{
		id: 5578, name: "Xã Thanh Định", province: 50, district: 637
	},
	{
		id: 5581, name: "Xã Trung Hội", province: 50, district: 637
	},
	{
		id: 5584, name: "Xã Trung Lương", province: 50, district: 637
	},
	{
		id: 5587, name: "Xã Bình Yên", province: 50, district: 637
	},
	{
		id: 5590, name: "Xã Điềm Mặc", province: 50, district: 637
	},
	{
		id: 5593, name: "Xã Phú Tiến", province: 50, district: 637
	},
	{
		id: 5596, name: "Xã Bộc Nhiêu", province: 50, district: 637
	},
	{
		id: 5599, name: "Xã Sơn Phú", province: 50, district: 637
	},
	{
		id: 5602, name: "Xã Phú Đình", province: 50, district: 637
	},
	{
		id: 5605, name: "Xã Bình Thành", province: 50, district: 637
	},
	{
		id: 5608, name: "Thị trấn Giang Tiên", province: 50, district: 638
	},
	{
		id: 5611, name: "Thị trấn Đu", province: 50, district: 638
	},
	{
		id: 5614, name: "Xã Yên Ninh", province: 50, district: 638
	},
	{
		id: 5617, name: "Xã Yên Trạch", province: 50, district: 638
	},
	{
		id: 5620, name: "Xã Yên Đổ", province: 50, district: 638
	},
	{
		id: 5623, name: "Xã Yên Lạc", province: 50, district: 638
	},
	{
		id: 5626, name: "Xã Ôn Lương", province: 50, district: 638
	},
	{
		id: 5629, name: "Xã Động Đạt", province: 50, district: 638
	},
	{
		id: 5632, name: "Xã Phủ Lý", province: 50, district: 638
	},
	{
		id: 5635, name: "Xã Phú Đô", province: 50, district: 638
	},
	{
		id: 5638, name: "Xã Hợp Thành", province: 50, district: 638
	},
	{
		id: 5641, name: "Xã Tức Tranh", province: 50, district: 638
	},
	{
		id: 5644, name: "Xã Phấn Mễ", province: 50, district: 638
	},
	{
		id: 5647, name: "Xã Vô Tranh", province: 50, district: 638
	},
	{
		id: 5650, name: "Xã Cổ Lũng", province: 50, district: 638
	},
	{
		id: 5653, name: "Xã Sơn Cẩm", province: 50, district: 638
	},
	{
		id: 5716, name: "Thị trấn Đình Cả", province: 50, district: 639
	},
	{
		id: 5719, name: "Xã Sảng Mộc", province: 50, district: 639
	},
	{
		id: 5722, name: "Xã Nghinh Tường", province: 50, district: 639
	},
	{
		id: 5725, name: "Xã Thần Xa", province: 50, district: 639
	},
	{
		id: 5728, name: "Xã Vũ Chấn", province: 50, district: 639
	},
	{
		id: 5731, name: "Xã Thượng Nung", province: 50, district: 639
	},
	{
		id: 5734, name: "Xã Phú Thượng", province: 50, district: 639
	},
	{
		id: 5737, name: "Xã Cúc Đường", province: 50, district: 639
	},
	{
		id: 5740, name: "Xã La Hiên", province: 50, district: 639
	},
	{
		id: 5743, name: "Xã Lâu Thượng", province: 50, district: 639
	},
	{
		id: 5746, name: "Xã Tràng Xá", province: 50, district: 639
	},
	{
		id: 5749, name: "Xã Phương Giao", province: 50, district: 639
	},
	{
		id: 5752, name: "Xã Liên Minh", province: 50, district: 639
	},
	{
		id: 5755, name: "Xã Dân Tiến", province: 50, district: 639
	},
	{
		id: 5758, name: "Xã Bình Long", province: 50, district: 639
	},
	{
		id: 5761, name: "Thị trấn Hùng Sơn", province: 50, district: 640
	},
	{
		id: 5764, name: "Thị trấn Quân Chu", province: 50, district: 640
	},
	{
		id: 5767, name: "Xã Phúc Lương", province: 50, district: 640
	},
	{
		id: 5770, name: "Xã Minh Tiến", province: 50, district: 640
	},
	{
		id: 5773, name: "Xã Yên Lãng", province: 50, district: 640
	},
	{
		id: 5776, name: "Xã Đức Lương", province: 50, district: 640
	},
	{
		id: 5779, name: "Xã Phú Cường", province: 50, district: 640
	},
	{
		id: 5782, name: "Xã Na Mao", province: 50, district: 640
	},
	{
		id: 5785, name: "Xã Phú Lạc", province: 50, district: 640
	},
	{
		id: 5788, name: "Xã Tân Linh", province: 50, district: 640
	},
	{
		id: 5791, name: "Xã Phú Thịnh", province: 50, district: 640
	},
	{
		id: 5794, name: "Xã Phục Linh", province: 50, district: 640
	},
	{
		id: 5797, name: "Xã Phú Xuyên", province: 50, district: 640
	},
	{
		id: 5800, name: "Xã Bản Ngoại", province: 50, district: 640
	},
	{
		id: 5803, name: "Xã Tiên Hội", province: 50, district: 640
	},
	{
		id: 5809, name: "Xã Cù Vân", province: 50, district: 640
	},
	{
		id: 5812, name: "Xã Hà Thượng", province: 50, district: 640
	},
	{
		id: 5815, name: "Xã La Bằng", province: 50, district: 640
	},
	{
		id: 5818, name: "Xã Hoàng Nông", province: 50, district: 640
	},
	{
		id: 5821, name: "Xã Khôi Kỳ", province: 50, district: 640
	},
	{
		id: 5824, name: "Xã An Khánh", province: 50, district: 640
	},
	{
		id: 5827, name: "Xã Tân Thái", province: 50, district: 640
	},
	{
		id: 5830, name: "Xã Bình Thuận", province: 50, district: 640
	},
	{
		id: 5833, name: "Xã Lục Ba", province: 50, district: 640
	},
	{
		id: 5836, name: "Xã Mỹ Yên", province: 50, district: 640
	},
	{
		id: 5839, name: "Xã Vạn Thọ", province: 50, district: 640
	},
	{
		id: 5842, name: "Xã Văn Yên", province: 50, district: 640
	},
	{
		id: 5845, name: "Xã Ký Phú", province: 50, district: 640
	},
	{
		id: 5848, name: "Xã Cát Nê", province: 50, district: 640
	},
	{
		id: 5851, name: "Xã Quân Chu", province: 50, district: 640
	},
	{
		id: 5656, name: "Thị trấn Sông Cầu", province: 50, district: 641
	},
	{
		id: 5659, name: "Thị trấn Chùa Hang", province: 50, district: 641
	},
	{
		id: 5662, name: "Thị trấn Trại Cau", province: 50, district: 641
	},
	{
		id: 5665, name: "Xã Văn Lăng", province: 50, district: 641
	},
	{
		id: 5668, name: "Xã Tân Long", province: 50, district: 641
	},
	{
		id: 5671, name: "Xã Hòa Bình", province: 50, district: 641
	},
	{
		id: 5674, name: "Xã Quang Sơn", province: 50, district: 641
	},
	{
		id: 5677, name: "Xã Minh Lập", province: 50, district: 641
	},
	{
		id: 5680, name: "Xã Văn Hán", province: 50, district: 641
	},
	{
		id: 5683, name: "Xã Hóa Trung", province: 50, district: 641
	},
	{
		id: 5686, name: "Xã Khe Mo", province: 50, district: 641
	},
	{
		id: 5689, name: "Xã Cây Thị", province: 50, district: 641
	},
	{
		id: 5692, name: "Xã Hóa Thượng", province: 50, district: 641
	},
	{
		id: 5698, name: "Xã Hợp Tiến", province: 50, district: 641
	},
	{
		id: 5701, name: "Xã Linh Sơn", province: 50, district: 641
	},
	{
		id: 5704, name: "Xã Tân Lợi", province: 50, district: 641
	},
	{
		id: 5707, name: "Xã Nam Hòa", province: 50, district: 641
	},
	{
		id: 5713, name: "Xã Huống Thượng", province: 50, district: 641
	},
	{
		id: 5908, name: "Thị trấn Hương Sơn", province: 50, district: 642
	},
	{
		id: 5911, name: "Xã Bàn Đạt", province: 50, district: 642
	},
	{
		id: 5914, name: "Xã Đồng Liên", province: 50, district: 642
	},
	{
		id: 5917, name: "Xã Tân Khánh", province: 50, district: 642
	},
	{
		id: 5920, name: "Xã Tân Kim", province: 50, district: 642
	},
	{
		id: 5923, name: "Xã Tân Thành", province: 50, district: 642
	},
	{
		id: 5926, name: "Xã Đào Xá", province: 50, district: 642
	},
	{
		id: 5929, name: "Xã Bảo Lý", province: 50, district: 642
	},
	{
		id: 5932, name: "Xã Thượng Đình", province: 50, district: 642
	},
	{
		id: 5935, name: "Xã Tân Hòa", province: 50, district: 642
	},
	{
		id: 5938, name: "Xã Nhã Lộng", province: 50, district: 642
	},
	{
		id: 5941, name: "Xã Điềm Thụy", province: 50, district: 642
	},
	{
		id: 5944, name: "Xã Xuân Phương", province: 50, district: 642
	},
	{
		id: 5947, name: "Xã Tân Đức", province: 50, district: 642
	},
	{
		id: 5950, name: "Xã Úc Kỳ", province: 50, district: 642
	},
	{
		id: 5953, name: "Xã Lương Phú", province: 50, district: 642
	},
	{
		id: 5956, name: "Xã Nga My", province: 50, district: 642
	},
	{
		id: 5959, name: "Xã Kha Sơn", province: 50, district: 642
	},
	{
		id: 5962, name: "Xã Thanh Ninh", province: 50, district: 642
	},
	{
		id: 5965, name: "Xã Dương Thành", province: 50, district: 642
	},
	{
		id: 5968, name: "Xã Hà Châu", province: 50, district: 642
	},
	{
		id: 5854, name: "Phường Bãi Bông", province: 50, district: 643
	},
	{
		id: 5857, name: "Phường Bắc Sơn", province: 50, district: 643
	},
	{
		id: 5860, name: "Phường Ba Hàng", province: 50, district: 643
	},
	{
		id: 5863, name: "Xã Phúc Tân", province: 50, district: 643
	},
	{
		id: 5866, name: "Xã Phúc Thuận", province: 50, district: 643
	},
	{
		id: 5869, name: "Xã Hồng Tiến", province: 50, district: 643
	},
	{
		id: 5872, name: "Xã Minh Đức", province: 50, district: 643
	},
	{
		id: 5875, name: "Xã Đắc Sơn", province: 50, district: 643
	},
	{
		id: 5878, name: "Phường Đồng Tiến", province: 50, district: 643
	},
	{
		id: 5881, name: "Xã Thành Công", province: 50, district: 643
	},
	{
		id: 5884, name: "Xã Tiên Phong", province: 50, district: 643
	},
	{
		id: 5887, name: "Xã Vạn Phái", province: 50, district: 643
	},
	{
		id: 5890, name: "Xã Nam Tiến", province: 50, district: 643
	},
	{
		id: 5893, name: "Xã Tân Hương", province: 50, district: 643
	},
	{
		id: 5896, name: "Xã Đông Cao", province: 50, district: 643
	},
	{
		id: 5899, name: "Xã Trung Thành", province: 50, district: 643
	},
	{
		id: 5902, name: "Xã Tân Phú", province: 50, district: 643
	},
	{
		id: 5905, name: "Xã Thuận Thành", province: 50, district: 643
	},
	{
		id: 14755, name: "Phường Hàm Rồng", province: 51, district: 600
	},
	{
		id: 14758, name: "Phường Đông Thọ", province: 51, district: 600
	},
	{
		id: 14761, name: "Phường Nam Ngạn", province: 51, district: 600
	},
	{
		id: 14764, name: "Phường Trường Thi", province: 51, district: 600
	},
	{
		id: 14767, name: "Phường Điện Biên", province: 51, district: 600
	},
	{
		id: 14770, name: "Phường Phú Sơn", province: 51, district: 600
	},
	{
		id: 14773, name: "Phường Lam Sơn", province: 51, district: 600
	},
	{
		id: 14776, name: "Phường Ba Đình", province: 51, district: 600
	},
	{
		id: 14779, name: "Phường Ngọc Trạo", province: 51, district: 600
	},
	{
		id: 14782, name: "Phường Đông Vệ", province: 51, district: 600
	},
	{
		id: 14785, name: "Phường Đông Sơn", province: 51, district: 600
	},
	{
		id: 14788, name: "Phường Tân Sơn", province: 51, district: 600
	},
	{
		id: 14791, name: "Phường Đông Cương", province: 51, district: 600
	},
	{
		id: 14794, name: "Phường Đông Hương", province: 51, district: 600
	},
	{
		id: 14797, name: "Phường Đông Hải", province: 51, district: 600
	},
	{
		id: 14800, name: "Phường Quảng Hưng", province: 51, district: 600
	},
	{
		id: 14803, name: "Phường Quảng Thắng", province: 51, district: 600
	},
	{
		id: 14806, name: "Phường Quảng Thành", province: 51, district: 600
	},
	{
		id: 15850, name: "Xã Thiệu Vân", province: 51, district: 600
	},
	{
		id: 15856, name: "Xã Thiệu Khánh", province: 51, district: 600
	},
	{
		id: 15859, name: "Xã Thiệu Dương", province: 51, district: 600
	},
	{
		id: 15868, name: "Phường Tào Xuyên", province: 51, district: 600
	},
	{
		id: 15913, name: "Xã Hoằng Lý", province: 51, district: 600
	},
	{
		id: 15922, name: "Xã Hoằng Long", province: 51, district: 600
	},
	{
		id: 15925, name: "Xã Hoằng Quang", province: 51, district: 600
	},
	{
		id: 15970, name: "Xã Hoằng Đại", province: 51, district: 600
	},
	{
		id: 16009, name: "Xã Hoằng Anh", province: 51, district: 600
	},
	{
		id: 16379, name: "Phường An Hoạch", province: 51, district: 600
	},
	{
		id: 16396, name: "Xã Đông Lĩnh", province: 51, district: 600
	},
	{
		id: 16429, name: "Xã Đông Vinh", province: 51, district: 600
	},
	{
		id: 16432, name: "Xã Đông Tân", province: 51, district: 600
	},
	{
		id: 16435, name: "Xã Đông Hưng", province: 51, district: 600
	},
	{
		id: 16441, name: "Xã Quảng Thịnh", province: 51, district: 600
	},
	{
		id: 16459, name: "Xã Quảng Đông", province: 51, district: 600
	},
	{
		id: 16507, name: "Xã Quảng Cát", province: 51, district: 600
	},
	{
		id: 16522, name: "Xã Quảng Phú", province: 51, district: 600
	},
	{
		id: 16525, name: "Xã Quảng Tâm", province: 51, district: 600
	},
	{
		id: 14809, name: "Phường Bắc Sơn", province: 51, district: 601
	},
	{
		id: 14812, name: "Phường Ba Đình", province: 51, district: 601
	},
	{
		id: 14815, name: "Phường Lam Sơn", province: 51, district: 601
	},
	{
		id: 14818, name: "Phường Ngọc Trạo", province: 51, district: 601
	},
	{
		id: 14821, name: "Phường Đông Sơn", province: 51, district: 601
	},
	{
		id: 14823, name: "Phường Phú Sơn", province: 51, district: 601
	},
	{
		id: 14824, name: "Xã Quang Trung", province: 51, district: 601
	},
	{
		id: 14827, name: "Xã Hà Lan", province: 51, district: 601
	},
	{
		id: 14830, name: "Phường Trung Sơn", province: 51, district: 602
	},
	{
		id: 14833, name: "Phường Bắc Sơn", province: 51, district: 602
	},
	{
		id: 14836, name: "Phường Trường Sơn", province: 51, district: 602
	},
	{
		id: 14839, name: "Xã Quảng Cư", province: 51, district: 602
	},
	{
		id: 14842, name: "Phường Quảng Tiến", province: 51, district: 602
	},
	{
		id: 16528, name: "Xã Quảng Thọ", province: 51, district: 602
	},
	{
		id: 14869, name: "Thị trấn Quan Hóa", province: 51, district: 603
	},
	{
		id: 14872, name: "Xã Thành Sơn", province: 51, district: 603
	},
	{
		id: 14875, name: "Xã Trung Sơn", province: 51, district: 603
	},
	{
		id: 14878, name: "Xã Phú Thanh", province: 51, district: 603
	},
	{
		id: 14881, name: "Xã Trung Thành", province: 51, district: 603
	},
	{
		id: 14884, name: "Xã Phú Lệ", province: 51, district: 603
	},
	{
		id: 14887, name: "Xã Phú Sơn", province: 51, district: 603
	},
	{
		id: 14890, name: "Xã Phú Xuân", province: 51, district: 603
	},
	{
		id: 14893, name: "Xã Thanh Xuân", province: 51, district: 603
	},
	{
		id: 14896, name: "Xã Hiền Chung", province: 51, district: 603
	},
	{
		id: 14899, name: "Xã Hiền Kiệt", province: 51, district: 603
	},
	{
		id: 14902, name: "Xã Nam Tiến", province: 51, district: 603
	},
	{
		id: 14905, name: "Xã Hồi Xuân", province: 51, district: 603
	},
	{
		id: 14908, name: "Xã Thiên Phủ", province: 51, district: 603
	},
	{
		id: 14911, name: "Xã Phú Nghiêm", province: 51, district: 603
	},
	{
		id: 14914, name: "Xã Nam Xuân", province: 51, district: 603
	},
	{
		id: 14917, name: "Xã Nam Động", province: 51, district: 603
	},
	{
		id: 14920, name: "Xã Xuân Phú", province: 51, district: 603
	},
	{
		id: 14992, name: "Thị trấn Quan Sơn", province: 51, district: 604
	},
	{
		id: 14995, name: "Xã Trung Xuân", province: 51, district: 604
	},
	{
		id: 14998, name: "Xã Trung Thượng", province: 51, district: 604
	},
	{
		id: 14999, name: "Xã Trung Tiến", province: 51, district: 604
	},
	{
		id: 15001, name: "Xã Trung Hạ", province: 51, district: 604
	},
	{
		id: 15004, name: "Xã Sơn Hà", province: 51, district: 604
	},
	{
		id: 15007, name: "Xã Tam Thanh", province: 51, district: 604
	},
	{
		id: 15010, name: "Xã Sơn Thủy", province: 51, district: 604
	},
	{
		id: 15013, name: "Xã Na Mèo", province: 51, district: 604
	},
	{
		id: 15016, name: "Xã Sơn Lư", province: 51, district: 604
	},
	{
		id: 15019, name: "Xã Tam Lư", province: 51, district: 604
	},
	{
		id: 15022, name: "Xã Sơn Điện", province: 51, district: 604
	},
	{
		id: 15025, name: "Xã Mường Mìn", province: 51, district: 604
	},
	{
		id: 14845, name: "Thị trấn Mường Lát", province: 51, district: 605
	},
	{
		id: 14848, name: "Xã Tam Chung", province: 51, district: 605
	},
	{
		id: 14851, name: "Xã Tén Tằn", province: 51, district: 605
	},
	{
		id: 14854, name: "Xã Mường Lý", province: 51, district: 605
	},
	{
		id: 14857, name: "Xã Trung Lý", province: 51, district: 605
	},
	{
		id: 14860, name: "Xã Quang Chiểu", province: 51, district: 605
	},
	{
		id: 14863, name: "Xã Pù Nhi", province: 51, district: 605
	},
	{
		id: 14864, name: "Xã Nhi Sơn", province: 51, district: 605
	},
	{
		id: 14866, name: "Xã Mường Chanh", province: 51, district: 605
	},
	{
		id: 14923, name: "Thị trấn Cành Nàng", province: 51, district: 606
	},
	{
		id: 14926, name: "Xã Điền Thượng", province: 51, district: 606
	},
	{
		id: 14929, name: "Xã Điền Hạ", province: 51, district: 606
	},
	{
		id: 14932, name: "Xã Điền Quang", province: 51, district: 606
	},
	{
		id: 14935, name: "Xã Điền Trung", province: 51, district: 606
	},
	{
		id: 14938, name: "Xã Thành Sơn", province: 51, district: 606
	},
	{
		id: 14941, name: "Xã Lương Ngoại", province: 51, district: 606
	},
	{
		id: 14944, name: "Xã Ái Thượng", province: 51, district: 606
	},
	{
		id: 14947, name: "Xã Lương Nội", province: 51, district: 606
	},
	{
		id: 14950, name: "Xã Điền Lư", province: 51, district: 606
	},
	{
		id: 14953, name: "Xã Lương Trung", province: 51, district: 606
	},
	{
		id: 14956, name: "Xã Lũng Niêm", province: 51, district: 606
	},
	{
		id: 14959, name: "Xã Lũng Cao", province: 51, district: 606
	},
	{
		id: 14962, name: "Xã Hạ Trung", province: 51, district: 606
	},
	{
		id: 14965, name: "Xã Cổ Lũng", province: 51, district: 606
	},
	{
		id: 14968, name: "Xã Thành Lâm", province: 51, district: 606
	},
	{
		id: 14971, name: "Xã Ban Công", province: 51, district: 606
	},
	{
		id: 14974, name: "Xã Kỳ Tân", province: 51, district: 606
	},
	{
		id: 14977, name: "Xã Văn Nho", province: 51, district: 606
	},
	{
		id: 14980, name: "Xã Thiết Ống", province: 51, district: 606
	},
	{
		id: 14983, name: "Xã Lâm Sa", province: 51, district: 606
	},
	{
		id: 14986, name: "Xã Thiết Kế", province: 51, district: 606
	},
	{
		id: 14989, name: "Xã Tân Lập", province: 51, district: 606
	},
	{
		id: 15604, name: "Thị trấn Thường Xuân", province: 51, district: 607
	},
	{
		id: 15607, name: "Xã Bát Mọt", province: 51, district: 607
	},
	{
		id: 15610, name: "Xã Yên Nhân", province: 51, district: 607
	},
	{
		id: 15619, name: "Xã Xuân Lẹ", province: 51, district: 607
	},
	{
		id: 15622, name: "Xã Vạn Xuân", province: 51, district: 607
	},
	{
		id: 15628, name: "Xã Lương Sơn", province: 51, district: 607
	},
	{
		id: 15631, name: "Xã Xuân Cao", province: 51, district: 607
	},
	{
		id: 15634, name: "Xã Luận Thành", province: 51, district: 607
	},
	{
		id: 15637, name: "Xã Luận Khê", province: 51, district: 607
	},
	{
		id: 15640, name: "Xã Xuân Thắng", province: 51, district: 607
	},
	{
		id: 15643, name: "Xã Xuân Lộc", province: 51, district: 607
	},
	{
		id: 15646, name: "Xã Xuân Cẩm", province: 51, district: 607
	},
	{
		id: 15649, name: "Xã Xuân Dương", province: 51, district: 607
	},
	{
		id: 15652, name: "Xã Thọ Thanh", province: 51, district: 607
	},
	{
		id: 15655, name: "Xã Ngọc Phụng", province: 51, district: 607
	},
	{
		id: 15658, name: "Xã Xuân Chinh", province: 51, district: 607
	},
	{
		id: 15661, name: "Xã Tân Thành", province: 51, district: 607
	},
	{
		id: 16174, name: "Thị trấn Yên Cát", province: 51, district: 608
	},
	{
		id: 16177, name: "Xã Bãi Trành", province: 51, district: 608
	},
	{
		id: 16180, name: "Xã Xuân Hoà", province: 51, district: 608
	},
	{
		id: 16183, name: "Xã Xuân Bình", province: 51, district: 608
	},
	{
		id: 16186, name: "Xã Hóa Quỳ", province: 51, district: 608
	},
	{
		id: 16189, name: "Xã Xuân Quỳ", province: 51, district: 608
	},
	{
		id: 16192, name: "Xã Yên Lễ", province: 51, district: 608
	},
	{
		id: 16195, name: "Xã Cát Vân", province: 51, district: 608
	},
	{
		id: 16198, name: "Xã Cát Tân", province: 51, district: 608
	},
	{
		id: 16201, name: "Xã Tân Bình", province: 51, district: 608
	},
	{
		id: 16204, name: "Xã Bình Lương", province: 51, district: 608
	},
	{
		id: 16207, name: "Xã Thanh Quân", province: 51, district: 608
	},
	{
		id: 16210, name: "Xã Thanh Xuân", province: 51, district: 608
	},
	{
		id: 16213, name: "Xã Thanh Hoà", province: 51, district: 608
	},
	{
		id: 16216, name: "Xã Thanh Phong", province: 51, district: 608
	},
	{
		id: 16219, name: "Xã Thanh Lâm", province: 51, district: 608
	},
	{
		id: 16222, name: "Xã Thanh Sơn", province: 51, district: 608
	},
	{
		id: 16225, name: "Xã Thượng Ninh", province: 51, district: 608
	},
	{
		id: 16228, name: "Thị trấn Bến Sung", province: 51, district: 609
	},
	{
		id: 16231, name: "Xã Cán Khê", province: 51, district: 609
	},
	{
		id: 16234, name: "Xã Xuân Du", province: 51, district: 609
	},
	{
		id: 16237, name: "Xã Xuân Thọ", province: 51, district: 609
	},
	{
		id: 16240, name: "Xã Phượng Nghi", province: 51, district: 609
	},
	{
		id: 16243, name: "Xã Mậu Lâm", province: 51, district: 609
	},
	{
		id: 16246, name: "Xã Xuân Khang", province: 51, district: 609
	},
	{
		id: 16249, name: "Xã Phú Nhuận", province: 51, district: 609
	},
	{
		id: 16252, name: "Xã Hải Long", province: 51, district: 609
	},
	{
		id: 16255, name: "Xã Hải Vân", province: 51, district: 609
	},
	{
		id: 16258, name: "Xã Xuân Thái", province: 51, district: 609
	},
	{
		id: 16261, name: "Xã Xuân Phúc", province: 51, district: 609
	},
	{
		id: 16264, name: "Xã Yên Thọ", province: 51, district: 609
	},
	{
		id: 16267, name: "Xã Yên Lạc", province: 51, district: 609
	},
	{
		id: 16270, name: "Xã Phúc Đường", province: 51, district: 609
	},
	{
		id: 16273, name: "Xã Thanh Tân", province: 51, district: 609
	},
	{
		id: 16276, name: "Xã Thanh Kỳ", province: 51, district: 609
	},
	{
		id: 15028, name: "Thị trấn Lang Chánh", province: 51, district: 610
	},
	{
		id: 15031, name: "Xã Yên Khương", province: 51, district: 610
	},
	{
		id: 15034, name: "Xã Yên Thắng", province: 51, district: 610
	},
	{
		id: 15037, name: "Xã Trí Nang", province: 51, district: 610
	},
	{
		id: 15040, name: "Xã Giao An", province: 51, district: 610
	},
	{
		id: 15043, name: "Xã Giao Thiện", province: 51, district: 610
	},
	{
		id: 15046, name: "Xã Tân Phúc", province: 51, district: 610
	},
	{
		id: 15049, name: "Xã Tam Văn", province: 51, district: 610
	},
	{
		id: 15052, name: "Xã Lâm Phú", province: 51, district: 610
	},
	{
		id: 15055, name: "Xã Quang Hiến", province: 51, district: 610
	},
	{
		id: 15058, name: "Xã Đồng Lương", province: 51, district: 610
	},
	{
		id: 15061, name: "Thị trấn Ngọc Lặc", province: 51, district: 611
	},
	{
		id: 15064, name: "Xã Lam Sơn", province: 51, district: 611
	},
	{
		id: 15067, name: "Xã Mỹ Tân", province: 51, district: 611
	},
	{
		id: 15070, name: "Xã Thúy Sơn", province: 51, district: 611
	},
	{
		id: 15073, name: "Xã Thạch Lập", province: 51, district: 611
	},
	{
		id: 15076, name: "Xã Vân Âm", province: 51, district: 611
	},
	{
		id: 15079, name: "Xã Cao Ngọc", province: 51, district: 611
	},
	{
		id: 15082, name: "Xã Ngọc Khê", province: 51, district: 611
	},
	{
		id: 15085, name: "Xã Quang Trung", province: 51, district: 611
	},
	{
		id: 15088, name: "Xã Đồng Thịnh", province: 51, district: 611
	},
	{
		id: 15091, name: "Xã Ngọc Liên", province: 51, district: 611
	},
	{
		id: 15094, name: "Xã Ngọc Sơn", province: 51, district: 611
	},
	{
		id: 15097, name: "Xã Lộc Thịnh", province: 51, district: 611
	},
	{
		id: 15100, name: "Xã Cao Thịnh", province: 51, district: 611
	},
	{
		id: 15103, name: "Xã Ngọc Trung", province: 51, district: 611
	},
	{
		id: 15106, name: "Xã Phùng Giáo", province: 51, district: 611
	},
	{
		id: 15109, name: "Xã Phùng Minh", province: 51, district: 611
	},
	{
		id: 15112, name: "Xã Phúc Thịnh", province: 51, district: 611
	},
	{
		id: 15115, name: "Xã Nguyệt Ấn", province: 51, district: 611
	},
	{
		id: 15118, name: "Xã Kiên Thọ", province: 51, district: 611
	},
	{
		id: 15121, name: "Xã Minh Tiến", province: 51, district: 611
	},
	{
		id: 15124, name: "Xã Minh Sơn", province: 51, district: 611
	},
	{
		id: 15187, name: "Thị trấn Kim Tân", province: 51, district: 612
	},
	{
		id: 15190, name: "Thị trấn Vân Du", province: 51, district: 612
	},
	{
		id: 15193, name: "Xã Thạch Tân", province: 51, district: 612
	},
	{
		id: 15196, name: "Xã Thạch Lâm", province: 51, district: 612
	},
	{
		id: 15199, name: "Xã Thạch Quảng", province: 51, district: 612
	},
	{
		id: 15202, name: "Xã Thạch Tượng", province: 51, district: 612
	},
	{
		id: 15205, name: "Xã Thạch Cẩm", province: 51, district: 612
	},
	{
		id: 15208, name: "Xã Thạch Sơn", province: 51, district: 612
	},
	{
		id: 15211, name: "Xã Thạch Bình", province: 51, district: 612
	},
	{
		id: 15214, name: "Xã Thạch Định", province: 51, district: 612
	},
	{
		id: 15217, name: "Xã Thạch Đồng", province: 51, district: 612
	},
	{
		id: 15220, name: "Xã Thạch Long", province: 51, district: 612
	},
	{
		id: 15223, name: "Xã Thành Mỹ", province: 51, district: 612
	},
	{
		id: 15226, name: "Xã Thành Yên", province: 51, district: 612
	},
	{
		id: 15229, name: "Xã Thành Vinh", province: 51, district: 612
	},
	{
		id: 15232, name: "Xã Thành Minh", province: 51, district: 612
	},
	{
		id: 15235, name: "Xã Thành Công", province: 51, district: 612
	},
	{
		id: 15238, name: "Xã Thành Tân", province: 51, district: 612
	},
	{
		id: 15241, name: "Xã Thành Trực", province: 51, district: 612
	},
	{
		id: 15244, name: "Xã Thành Vân", province: 51, district: 612
	},
	{
		id: 15247, name: "Xã Thành Tâm", province: 51, district: 612
	},
	{
		id: 15250, name: "Xã Thành An", province: 51, district: 612
	},
	{
		id: 15253, name: "Xã Thành Thọ", province: 51, district: 612
	},
	{
		id: 15256, name: "Xã Thành Tiến", province: 51, district: 612
	},
	{
		id: 15259, name: "Xã Thành Long", province: 51, district: 612
	},
	{
		id: 15262, name: "Xã Thành Kim", province: 51, district: 612
	},
	{
		id: 15265, name: "Xã Thành Hưng", province: 51, district: 612
	},
	{
		id: 15268, name: "Xã Ngọc Trạo", province: 51, district: 612
	},
	{
		id: 15127, name: "Thị trấn Cẩm Thủy", province: 51, district: 613
	},
	{
		id: 15130, name: "Xã Phúc Do", province: 51, district: 613
	},
	{
		id: 15133, name: "Xã Cẩm Thành", province: 51, district: 613
	},
	{
		id: 15136, name: "Xã Cẩm Quý", province: 51, district: 613
	},
	{
		id: 15139, name: "Xã Cẩm Lương", province: 51, district: 613
	},
	{
		id: 15142, name: "Xã Cẩm Thạch", province: 51, district: 613
	},
	{
		id: 15145, name: "Xã Cẩm Liên", province: 51, district: 613
	},
	{
		id: 15148, name: "Xã Cẩm Giang", province: 51, district: 613
	},
	{
		id: 15151, name: "Xã Cẩm Bình", province: 51, district: 613
	},
	{
		id: 15154, name: "Xã Cẩm Tú", province: 51, district: 613
	},
	{
		id: 15157, name: "Xã Cẩm Sơn", province: 51, district: 613
	},
	{
		id: 15160, name: "Xã Cẩm Châu", province: 51, district: 613
	},
	{
		id: 15163, name: "Xã Cẩm Tâm", province: 51, district: 613
	},
	{
		id: 15166, name: "Xã Cẩm Phong", province: 51, district: 613
	},
	{
		id: 15169, name: "Xã Cẩm Ngọc", province: 51, district: 613
	},
	{
		id: 15172, name: "Xã Cẩm Long", province: 51, district: 613
	},
	{
		id: 15175, name: "Xã Cẩm Yên", province: 51, district: 613
	},
	{
		id: 15178, name: "Xã Cẩm Tân", province: 51, district: 613
	},
	{
		id: 15181, name: "Xã Cẩm Phú", province: 51, district: 613
	},
	{
		id: 15184, name: "Xã Cẩm Vân", province: 51, district: 613
	},
	{
		id: 15481, name: "Thị trấn Thọ Xuân", province: 51, district: 614
	},
	{
		id: 15484, name: "Thị trấn Lam Sơn", province: 51, district: 614
	},
	{
		id: 15487, name: "Thị trấn Sao Vàng", province: 51, district: 614
	},
	{
		id: 15490, name: "Xã Xuân Khánh", province: 51, district: 614
	},
	{
		id: 15493, name: "Xã Thọ Nguyên", province: 51, district: 614
	},
	{
		id: 15496, name: "Xã Xuân Thành", province: 51, district: 614
	},
	{
		id: 15499, name: "Xã Hạnh Phúc", province: 51, district: 614
	},
	{
		id: 15502, name: "Xã Bắc Lương", province: 51, district: 614
	},
	{
		id: 15505, name: "Xã Nam Giang", province: 51, district: 614
	},
	{
		id: 15508, name: "Xã Xuân Phong", province: 51, district: 614
	},
	{
		id: 15511, name: "Xã Thọ Lộc", province: 51, district: 614
	},
	{
		id: 15514, name: "Xã Xuân Trường", province: 51, district: 614
	},
	{
		id: 15517, name: "Xã Xuân Hòa", province: 51, district: 614
	},
	{
		id: 15520, name: "Xã Thọ Hải", province: 51, district: 614
	},
	{
		id: 15523, name: "Xã Tây Hồ", province: 51, district: 614
	},
	{
		id: 15526, name: "Xã Xuân Giang", province: 51, district: 614
	},
	{
		id: 15529, name: "Xã Xuân Quang", province: 51, district: 614
	},
	{
		id: 15532, name: "Xã Xuân Sơn", province: 51, district: 614
	},
	{
		id: 15535, name: "Xã Xuân Hưng", province: 51, district: 614
	},
	{
		id: 15538, name: "Xã Thọ Diên", province: 51, district: 614
	},
	{
		id: 15541, name: "Xã Thọ Lâm", province: 51, district: 614
	},
	{
		id: 15544, name: "Xã Thọ Xương", province: 51, district: 614
	},
	{
		id: 15547, name: "Xã Xuân Bái", province: 51, district: 614
	},
	{
		id: 15550, name: "Xã Xuân Phú", province: 51, district: 614
	},
	{
		id: 15553, name: "Xã Xuân Thắng", province: 51, district: 614
	},
	{
		id: 15556, name: "Xã Xuân Lam", province: 51, district: 614
	},
	{
		id: 15559, name: "Xã Xuân Thiên", province: 51, district: 614
	},
	{
		id: 15562, name: "Xã Thọ Minh", province: 51, district: 614
	},
	{
		id: 15565, name: "Xã Xuân Châu", province: 51, district: 614
	},
	{
		id: 15568, name: "Xã Thọ Lập", province: 51, district: 614
	},
	{
		id: 15571, name: "Xã Quảng Phú", province: 51, district: 614
	},
	{
		id: 15574, name: "Xã Xuân Tín", province: 51, district: 614
	},
	{
		id: 15577, name: "Xã Phú Yên", province: 51, district: 614
	},
	{
		id: 15580, name: "Xã Xuân Yên", province: 51, district: 614
	},
	{
		id: 15583, name: "Xã Xuân Lai", province: 51, district: 614
	},
	{
		id: 15586, name: "Xã Xuân Lập", province: 51, district: 614
	},
	{
		id: 15589, name: "Xã Thọ Thắng", province: 51, district: 614
	},
	{
		id: 15592, name: "Xã Xuân Minh", province: 51, district: 614
	},
	{
		id: 15595, name: "Xã Xuân Tân", province: 51, district: 614
	},
	{
		id: 15598, name: "Xã Xuân Vinh", province: 51, district: 614
	},
	{
		id: 15601, name: "Xã Thọ Trường", province: 51, district: 614
	},
	{
		id: 15346, name: "Thị trấn Vĩnh Lộc", province: 51, district: 615
	},
	{
		id: 15349, name: "Xã Vĩnh Thành", province: 51, district: 615
	},
	{
		id: 15352, name: "Xã Vĩnh Quang", province: 51, district: 615
	},
	{
		id: 15355, name: "Xã Vĩnh Yên", province: 51, district: 615
	},
	{
		id: 15358, name: "Xã Vĩnh Tiến", province: 51, district: 615
	},
	{
		id: 15361, name: "Xã Vĩnh Long", province: 51, district: 615
	},
	{
		id: 15364, name: "Xã Vĩnh Phúc", province: 51, district: 615
	},
	{
		id: 15367, name: "Xã Vĩnh Hưng", province: 51, district: 615
	},
	{
		id: 15370, name: "Xã Vĩnh Minh", province: 51, district: 615
	},
	{
		id: 15373, name: "Xã Vĩnh Khang", province: 51, district: 615
	},
	{
		id: 15376, name: "Xã Vĩnh Hòa", province: 51, district: 615
	},
	{
		id: 15379, name: "Xã Vĩnh Hùng", province: 51, district: 615
	},
	{
		id: 15382, name: "Xã Vĩnh Tân", province: 51, district: 615
	},
	{
		id: 15385, name: "Xã Vĩnh Ninh", province: 51, district: 615
	},
	{
		id: 15388, name: "Xã Vĩnh Thịnh", province: 51, district: 615
	},
	{
		id: 15391, name: "Xã Vĩnh An", province: 51, district: 615
	},
	{
		id: 15772, name: "Thị trấn Vạn Hà", province: 51, district: 616
	},
	{
		id: 15775, name: "Xã Thiệu Ngọc", province: 51, district: 616
	},
	{
		id: 15778, name: "Xã Thiệu Vũ", province: 51, district: 616
	},
	{
		id: 15781, name: "Xã Thiệu Phúc", province: 51, district: 616
	},
	{
		id: 15784, name: "Xã Thiệu Tiến", province: 51, district: 616
	},
	{
		id: 15787, name: "Xã Thiệu Công", province: 51, district: 616
	},
	{
		id: 15790, name: "Xã Thiệu Phú", province: 51, district: 616
	},
	{
		id: 15793, name: "Xã Thiệu Long", province: 51, district: 616
	},
	{
		id: 15796, name: "Xã Thiệu Giang", province: 51, district: 616
	},
	{
		id: 15799, name: "Xã Thiệu Duy", province: 51, district: 616
	},
	{
		id: 15802, name: "Xã Thiệu Nguyên", province: 51, district: 616
	},
	{
		id: 15805, name: "Xã Thiệu Hợp", province: 51, district: 616
	},
	{
		id: 15808, name: "Xã Thiệu Thịnh", province: 51, district: 616
	},
	{
		id: 15811, name: "Xã Thiệu Quang", province: 51, district: 616
	},
	{
		id: 15814, name: "Xã Thiệu Thành", province: 51, district: 616
	},
	{
		id: 15817, name: "Xã Thiệu Toán", province: 51, district: 616
	},
	{
		id: 15820, name: "Xã Thiệu Chính", province: 51, district: 616
	},
	{
		id: 15823, name: "Xã Thiệu Hòa", province: 51, district: 616
	},
	{
		id: 15826, name: "Xã Thiệu Minh", province: 51, district: 616
	},
	{
		id: 15829, name: "Xã Thiệu Tâm", province: 51, district: 616
	},
	{
		id: 15832, name: "Xã Thiệu Viên", province: 51, district: 616
	},
	{
		id: 15835, name: "Xã Thiệu Lý", province: 51, district: 616
	},
	{
		id: 15838, name: "Xã Thiệu Vận", province: 51, district: 616
	},
	{
		id: 15841, name: "Xã Thiệu Trung", province: 51, district: 616
	},
	{
		id: 15844, name: "Xã Thiệu Đô", province: 51, district: 616
	},
	{
		id: 15847, name: "Xã Thiệu Châu", province: 51, district: 616
	},
	{
		id: 15853, name: "Xã Thiệu Giao", province: 51, district: 616
	},
	{
		id: 15862, name: "Xã Thiệu Tân", province: 51, district: 616
	},
	{
		id: 15664, name: "Thị trấn Triệu Sơn", province: 51, district: 617
	},
	{
		id: 15667, name: "Xã Thọ Sơn", province: 51, district: 617
	},
	{
		id: 15670, name: "Xã Thọ Bình", province: 51, district: 617
	},
	{
		id: 15673, name: "Xã Thọ Tiến", province: 51, district: 617
	},
	{
		id: 15676, name: "Xã Hợp Lý", province: 51, district: 617
	},
	{
		id: 15679, name: "Xã Hợp Tiến", province: 51, district: 617
	},
	{
		id: 15682, name: "Xã Hợp Thành", province: 51, district: 617
	},
	{
		id: 15685, name: "Xã Triệu Thành", province: 51, district: 617
	},
	{
		id: 15688, name: "Xã Hợp Thắng", province: 51, district: 617
	},
	{
		id: 15691, name: "Xã Minh Sơn", province: 51, district: 617
	},
	{
		id: 15694, name: "Xã Minh Dân", province: 51, district: 617
	},
	{
		id: 15697, name: "Xã Minh Châu", province: 51, district: 617
	},
	{
		id: 15700, name: "Xã Dân Lực", province: 51, district: 617
	},
	{
		id: 15703, name: "Xã Dân Lý", province: 51, district: 617
	},
	{
		id: 15706, name: "Xã Dân Quyền", province: 51, district: 617
	},
	{
		id: 15709, name: "Xã An Nông", province: 51, district: 617
	},
	{
		id: 15712, name: "Xã Văn Sơn", province: 51, district: 617
	},
	{
		id: 15715, name: "Xã Thái Hòa", province: 51, district: 617
	},
	{
		id: 15718, name: "Xã Tân Ninh", province: 51, district: 617
	},
	{
		id: 15721, name: "Xã Đồng Lợi", province: 51, district: 617
	},
	{
		id: 15724, name: "Xã Đồng Tiến", province: 51, district: 617
	},
	{
		id: 15727, name: "Xã Đồng Thắng", province: 51, district: 617
	},
	{
		id: 15730, name: "Xã Tiến Nông", province: 51, district: 617
	},
	{
		id: 15733, name: "Xã Khuyến Nông", province: 51, district: 617
	},
	{
		id: 15736, name: "Xã Xuân Thịnh", province: 51, district: 617
	},
	{
		id: 15739, name: "Xã Xuân Lộc", province: 51, district: 617
	},
	{
		id: 15742, name: "Xã Thọ Dân", province: 51, district: 617
	},
	{
		id: 15745, name: "Xã Xuân Thọ", province: 51, district: 617
	},
	{
		id: 15748, name: "Xã Thọ Tân", province: 51, district: 617
	},
	{
		id: 15751, name: "Xã Thọ Ngọc", province: 51, district: 617
	},
	{
		id: 15754, name: "Xã Thọ Cường", province: 51, district: 617
	},
	{
		id: 15757, name: "Xã Thọ Phú", province: 51, district: 617
	},
	{
		id: 15760, name: "Xã Thọ Vực", province: 51, district: 617
	},
	{
		id: 15763, name: "Xã Thọ Thế", province: 51, district: 617
	},
	{
		id: 15766, name: "Xã Nông Trường", province: 51, district: 617
	},
	{
		id: 15769, name: "Xã Bình Sơn", province: 51, district: 617
	},
	{
		id: 16279, name: "Thị trấn Nông Cống", province: 51, district: 618
	},
	{
		id: 16282, name: "Xã Tân Phúc", province: 51, district: 618
	},
	{
		id: 16285, name: "Xã Tân Thọ", province: 51, district: 618
	},
	{
		id: 16288, name: "Xã Hoàng Sơn", province: 51, district: 618
	},
	{
		id: 16291, name: "Xã Tân Khang", province: 51, district: 618
	},
	{
		id: 16294, name: "Xã Hoàng Giang", province: 51, district: 618
	},
	{
		id: 16297, name: "Xã Trung Chính", province: 51, district: 618
	},
	{
		id: 16300, name: "Xã Trung Ý", province: 51, district: 618
	},
	{
		id: 16303, name: "Xã Trung Thành", province: 51, district: 618
	},
	{
		id: 16306, name: "Xã Tế Tân", province: 51, district: 618
	},
	{
		id: 16309, name: "Xã Tế Thắng", province: 51, district: 618
	},
	{
		id: 16312, name: "Xã Minh Thọ", province: 51, district: 618
	},
	{
		id: 16315, name: "Xã Tế Lợi", province: 51, district: 618
	},
	{
		id: 16318, name: "Xã Tế Nông", province: 51, district: 618
	},
	{
		id: 16321, name: "Xã Minh Nghĩa", province: 51, district: 618
	},
	{
		id: 16324, name: "Xã Minh Khôi", province: 51, district: 618
	},
	{
		id: 16327, name: "Xã Vạn Hòa", province: 51, district: 618
	},
	{
		id: 16330, name: "Xã Trường Trung", province: 51, district: 618
	},
	{
		id: 16333, name: "Xã Vạn Thắng", province: 51, district: 618
	},
	{
		id: 16336, name: "Xã Trường Giang", province: 51, district: 618
	},
	{
		id: 16339, name: "Xã Vạn Thiện", province: 51, district: 618
	},
	{
		id: 16342, name: "Xã Thăng Long", province: 51, district: 618
	},
	{
		id: 16345, name: "Xã Trường Minh", province: 51, district: 618
	},
	{
		id: 16348, name: "Xã Trường Sơn", province: 51, district: 618
	},
	{
		id: 16351, name: "Xã Thăng Bình", province: 51, district: 618
	},
	{
		id: 16354, name: "Xã Công Liêm", province: 51, district: 618
	},
	{
		id: 16357, name: "Xã Tượng Văn", province: 51, district: 618
	},
	{
		id: 16360, name: "Xã Thăng Thọ", province: 51, district: 618
	},
	{
		id: 16363, name: "Xã Tượng Lĩnh", province: 51, district: 618
	},
	{
		id: 16366, name: "Xã Tượng Sơn", province: 51, district: 618
	},
	{
		id: 16369, name: "Xã Công Chính", province: 51, district: 618
	},
	{
		id: 16372, name: "Xã Công Bình", province: 51, district: 618
	},
	{
		id: 16375, name: "Xã Yên Mỹ", province: 51, district: 618
	},
	{
		id: 15271, name: "Thị trấn Hà Trung", province: 51, district: 619
	},
	{
		id: 15274, name: "Xã Hà Long", province: 51, district: 619
	},
	{
		id: 15277, name: "Xã Hà Vinh", province: 51, district: 619
	},
	{
		id: 15280, name: "Xã Hà Bắc", province: 51, district: 619
	},
	{
		id: 15283, name: "Xã Hà Vân", province: 51, district: 619
	},
	{
		id: 15286, name: "Xã Hà Yên", province: 51, district: 619
	},
	{
		id: 15289, name: "Xã Hà Thanh", province: 51, district: 619
	},
	{
		id: 15292, name: "Xã Hà Giang", province: 51, district: 619
	},
	{
		id: 15295, name: "Xã Hà Dương", province: 51, district: 619
	},
	{
		id: 15298, name: "Xã Hà Phú", province: 51, district: 619
	},
	{
		id: 15301, name: "Xã Hà Phong", province: 51, district: 619
	},
	{
		id: 15304, name: "Xã Hà Ngọc", province: 51, district: 619
	},
	{
		id: 15307, name: "Xã Hà Ninh", province: 51, district: 619
	},
	{
		id: 15310, name: "Xã Hà Lâm", province: 51, district: 619
	},
	{
		id: 15313, name: "Xã Hà Sơn", province: 51, district: 619
	},
	{
		id: 15316, name: "Xã Hà Lĩnh", province: 51, district: 619
	},
	{
		id: 15319, name: "Xã Hà Đông", province: 51, district: 619
	},
	{
		id: 15322, name: "Xã Hà Tân", province: 51, district: 619
	},
	{
		id: 15325, name: "Xã Hà Tiến", province: 51, district: 619
	},
	{
		id: 15328, name: "Xã Hà Bình", province: 51, district: 619
	},
	{
		id: 15331, name: "Xã Hà Lai", province: 51, district: 619
	},
	{
		id: 15334, name: "Xã Hà Châu", province: 51, district: 619
	},
	{
		id: 15337, name: "Xã Hà Toại", province: 51, district: 619
	},
	{
		id: 15340, name: "Xã Hà Thái", province: 51, district: 619
	},
	{
		id: 15343, name: "Xã Hà Hải", province: 51, district: 619
	},
	{
		id: 15865, name: "Thị trấn Bút Sơn", province: 51, district: 620
	},
	{
		id: 15871, name: "Xã Hoằng Giang", province: 51, district: 620
	},
	{
		id: 15874, name: "Xã Hoằng Xuân", province: 51, district: 620
	},
	{
		id: 15877, name: "Xã Hoằng Khánh", province: 51, district: 620
	},
	{
		id: 15880, name: "Xã Hoằng Phượng", province: 51, district: 620
	},
	{
		id: 15883, name: "Xã Hoằng Phú", province: 51, district: 620
	},
	{
		id: 15886, name: "Xã Hoằng Quỳ", province: 51, district: 620
	},
	{
		id: 15889, name: "Xã Hoằng Kim", province: 51, district: 620
	},
	{
		id: 15892, name: "Xã Hoằng Trung", province: 51, district: 620
	},
	{
		id: 15895, name: "Xã Hoằng Trinh", province: 51, district: 620
	},
	{
		id: 15898, name: "Xã Hoằng Sơn", province: 51, district: 620
	},
	{
		id: 15901, name: "Xã Hoằng Lương", province: 51, district: 620
	},
	{
		id: 15904, name: "Xã Hoằng Xuyên", province: 51, district: 620
	},
	{
		id: 15907, name: "Xã Hoằng Cát", province: 51, district: 620
	},
	{
		id: 15910, name: "Xã Hoằng Khê", province: 51, district: 620
	},
	{
		id: 15916, name: "Xã Hoằng Quý", province: 51, district: 620
	},
	{
		id: 15919, name: "Xã Hoằng Hợp", province: 51, district: 620
	},
	{
		id: 15928, name: "Xã Hoằng Minh", province: 51, district: 620
	},
	{
		id: 15931, name: "Xã Hoằng Phúc", province: 51, district: 620
	},
	{
		id: 15934, name: "Xã Hoằng Đức", province: 51, district: 620
	},
	{
		id: 15937, name: "Xã Hoằng Hà", province: 51, district: 620
	},
	{
		id: 15940, name: "Xã Hoằng Đạt", province: 51, district: 620
	},
	{
		id: 15943, name: "Xã Hoằng Vinh", province: 51, district: 620
	},
	{
		id: 15946, name: "Xã Hoằng Đạo", province: 51, district: 620
	},
	{
		id: 15949, name: "Xã Hoằng Thắng", province: 51, district: 620
	},
	{
		id: 15952, name: "Xã Hoằng Đồng", province: 51, district: 620
	},
	{
		id: 15955, name: "Xã Hoằng Thái", province: 51, district: 620
	},
	{
		id: 15958, name: "Xã Hoằng Thịnh", province: 51, district: 620
	},
	{
		id: 15961, name: "Xã Hoằng Thành", province: 51, district: 620
	},
	{
		id: 15964, name: "Xã Hoằng Lộc", province: 51, district: 620
	},
	{
		id: 15967, name: "Xã Hoằng Trạch", province: 51, district: 620
	},
	{
		id: 15973, name: "Xã Hoằng Phong", province: 51, district: 620
	},
	{
		id: 15976, name: "Xã Hoằng Lưu", province: 51, district: 620
	},
	{
		id: 15979, name: "Xã Hoằng Châu", province: 51, district: 620
	},
	{
		id: 15982, name: "Xã Hoằng Tân", province: 51, district: 620
	},
	{
		id: 15985, name: "Xã Hoằng Yến", province: 51, district: 620
	},
	{
		id: 15988, name: "Xã Hoằng Tiến", province: 51, district: 620
	},
	{
		id: 15991, name: "Xã Hoằng Hải", province: 51, district: 620
	},
	{
		id: 15994, name: "Xã Hoằng Ngọc", province: 51, district: 620
	},
	{
		id: 15997, name: "Xã Hoằng Đông", province: 51, district: 620
	},
	{
		id: 16000, name: "Xã Hoằng Thanh", province: 51, district: 620
	},
	{
		id: 16003, name: "Xã Hoằng Phụ", province: 51, district: 620
	},
	{
		id: 16006, name: "Xã Hoằng Trường", province: 51, district: 620
	},
	{
		id: 16093, name: "Thị trấn Nga Sơn", province: 51, district: 621
	},
	{
		id: 16096, name: "Xã Ba Đình", province: 51, district: 621
	},
	{
		id: 16099, name: "Xã Nga Vịnh", province: 51, district: 621
	},
	{
		id: 16102, name: "Xã Nga Văn", province: 51, district: 621
	},
	{
		id: 16105, name: "Xã Nga Thiện", province: 51, district: 621
	},
	{
		id: 16108, name: "Xã Nga Tiến", province: 51, district: 621
	},
	{
		id: 16111, name: "Xã Nga Lĩnh", province: 51, district: 621
	},
	{
		id: 16114, name: "Xã Nga Nhân", province: 51, district: 621
	},
	{
		id: 16117, name: "Xã Nga Trung", province: 51, district: 621
	},
	{
		id: 16120, name: "Xã Nga Bạch", province: 51, district: 621
	},
	{
		id: 16123, name: "Xã Nga Thanh", province: 51, district: 621
	},
	{
		id: 16126, name: "Xã Nga Hưng", province: 51, district: 621
	},
	{
		id: 16129, name: "Xã Nga Mỹ", province: 51, district: 621
	},
	{
		id: 16132, name: "Xã Nga Yên", province: 51, district: 621
	},
	{
		id: 16135, name: "Xã Nga Giáp", province: 51, district: 621
	},
	{
		id: 16138, name: "Xã Nga Hải", province: 51, district: 621
	},
	{
		id: 16141, name: "Xã Nga Thành", province: 51, district: 621
	},
	{
		id: 16144, name: "Xã Nga An", province: 51, district: 621
	},
	{
		id: 16147, name: "Xã Nga Phú", province: 51, district: 621
	},
	{
		id: 16150, name: "Xã Nga Điền", province: 51, district: 621
	},
	{
		id: 16153, name: "Xã Nga Tân", province: 51, district: 621
	},
	{
		id: 16156, name: "Xã Nga Thủy", province: 51, district: 621
	},
	{
		id: 16159, name: "Xã Nga Liên", province: 51, district: 621
	},
	{
		id: 16162, name: "Xã Nga Thái", province: 51, district: 621
	},
	{
		id: 16165, name: "Xã Nga Thạch", province: 51, district: 621
	},
	{
		id: 16168, name: "Xã Nga Thắng", province: 51, district: 621
	},
	{
		id: 16171, name: "Xã Nga Trường", province: 51, district: 621
	},
	{
		id: 16012, name: "Thị trấn Hậu Lộc", province: 51, district: 622
	},
	{
		id: 16015, name: "Xã Đồng Lộc", province: 51, district: 622
	},
	{
		id: 16018, name: "Xã Đại Lộc", province: 51, district: 622
	},
	{
		id: 16021, name: "Xã Triệu Lộc", province: 51, district: 622
	},
	{
		id: 16024, name: "Xã Châu Lộc", province: 51, district: 622
	},
	{
		id: 16027, name: "Xã Tiến Lộc", province: 51, district: 622
	},
	{
		id: 16030, name: "Xã Lộc Sơn", province: 51, district: 622
	},
	{
		id: 16033, name: "Xã Cầu Lộc", province: 51, district: 622
	},
	{
		id: 16036, name: "Xã Thành Lộc", province: 51, district: 622
	},
	{
		id: 16039, name: "Xã Tuy Lộc", province: 51, district: 622
	},
	{
		id: 16042, name: "Xã Phong Lộc", province: 51, district: 622
	},
	{
		id: 16045, name: "Xã Mỹ Lộc", province: 51, district: 622
	},
	{
		id: 16048, name: "Xã Văn Lộc", province: 51, district: 622
	},
	{
		id: 16051, name: "Xã Thuần Lộc", province: 51, district: 622
	},
	{
		id: 16054, name: "Xã Lộc Tân", province: 51, district: 622
	},
	{
		id: 16057, name: "Xã Xuân Lộc", province: 51, district: 622
	},
	{
		id: 16060, name: "Xã Thịnh Lộc", province: 51, district: 622
	},
	{
		id: 16063, name: "Xã Hoa Lộc", province: 51, district: 622
	},
	{
		id: 16066, name: "Xã Liên Lộc", province: 51, district: 622
	},
	{
		id: 16069, name: "Xã Quang Lộc", province: 51, district: 622
	},
	{
		id: 16072, name: "Xã Phú Lộc", province: 51, district: 622
	},
	{
		id: 16075, name: "Xã Hòa Lộc", province: 51, district: 622
	},
	{
		id: 16078, name: "Xã Minh Lộc", province: 51, district: 622
	},
	{
		id: 16081, name: "Xã Hưng Lộc", province: 51, district: 622
	},
	{
		id: 16084, name: "Xã Hải Lộc", province: 51, district: 622
	},
	{
		id: 16087, name: "Xã Đa Lộc", province: 51, district: 622
	},
	{
		id: 16090, name: "Xã Ngư Lộc", province: 51, district: 622
	},
	{
		id: 16561, name: "Thị trấn Tĩnh Gia", province: 51, district: 623
	},
	{
		id: 16564, name: "Xã Hải Châu", province: 51, district: 623
	},
	{
		id: 16567, name: "Xã Thanh Thủy", province: 51, district: 623
	},
	{
		id: 16570, name: "Xã Thanh Sơn", province: 51, district: 623
	},
	{
		id: 16573, name: "Xã Triêu Dương", province: 51, district: 623
	},
	{
		id: 16576, name: "Xã Hải Ninh", province: 51, district: 623
	},
	{
		id: 16579, name: "Xã Anh Sơn", province: 51, district: 623
	},
	{
		id: 16582, name: "Xã Ngọc Lĩnh", province: 51, district: 623
	},
	{
		id: 16585, name: "Xã Hải An", province: 51, district: 623
	},
	{
		id: 16588, name: "Xã Hùng Sơn", province: 51, district: 623
	},
	{
		id: 16591, name: "Xã Các Sơn", province: 51, district: 623
	},
	{
		id: 16594, name: "Xã Tân Dân", province: 51, district: 623
	},
	{
		id: 16597, name: "Xã Hải Lĩnh", province: 51, district: 623
	},
	{
		id: 16600, name: "Xã Định Hải", province: 51, district: 623
	},
	{
		id: 16603, name: "Xã Phú Sơn", province: 51, district: 623
	},
	{
		id: 16606, name: "Xã Ninh Hải", province: 51, district: 623
	},
	{
		id: 16609, name: "Xã Nguyên Bình", province: 51, district: 623
	},
	{
		id: 16612, name: "Xã Hải Nhân", province: 51, district: 623
	},
	{
		id: 16615, name: "Xã Hải Hòa", province: 51, district: 623
	},
	{
		id: 16618, name: "Xã Bình Minh", province: 51, district: 623
	},
	{
		id: 16621, name: "Xã Hải Thanh", province: 51, district: 623
	},
	{
		id: 16624, name: "Xã Phú Lâm", province: 51, district: 623
	},
	{
		id: 16627, name: "Xã Xuân Lâm", province: 51, district: 623
	},
	{
		id: 16630, name: "Xã Trúc Lâm", province: 51, district: 623
	},
	{
		id: 16633, name: "Xã Hải Bình", province: 51, district: 623
	},
	{
		id: 16636, name: "Xã Tân Trường", province: 51, district: 623
	},
	{
		id: 16639, name: "Xã Tùng Lâm", province: 51, district: 623
	},
	{
		id: 16642, name: "Xã Tĩnh Hải", province: 51, district: 623
	},
	{
		id: 16645, name: "Xã Mai Lâm", province: 51, district: 623
	},
	{
		id: 16648, name: "Xã Trường Lâm", province: 51, district: 623
	},
	{
		id: 16651, name: "Xã Hải Yến", province: 51, district: 623
	},
	{
		id: 16654, name: "Xã Hải Thượng", province: 51, district: 623
	},
	{
		id: 16657, name: "Xã Nghi Sơn", province: 51, district: 623
	},
	{
		id: 16660, name: "Xã Hải Hà", province: 51, district: 623
	},
	{
		id: 15394, name: "Thị trấn Quán Lào", province: 51, district: 624
	},
	{
		id: 15397, name: "Thị trấn Thống Nhất", province: 51, district: 624
	},
	{
		id: 15400, name: "Xã Yên Phú", province: 51, district: 624
	},
	{
		id: 15403, name: "Xã Yên Lâm", province: 51, district: 624
	},
	{
		id: 15406, name: "Xã Yên Tâm", province: 51, district: 624
	},
	{
		id: 15409, name: "Xã Yên Giang", province: 51, district: 624
	},
	{
		id: 15412, name: "Xã Qúi Lộc", province: 51, district: 624
	},
	{
		id: 15415, name: "Xã Yên Thọ", province: 51, district: 624
	},
	{
		id: 15418, name: "Xã Yên Trung", province: 51, district: 624
	},
	{
		id: 15421, name: "Xã Yên Trường", province: 51, district: 624
	},
	{
		id: 15424, name: "Xã Yên Bái", province: 51, district: 624
	},
	{
		id: 15427, name: "Xã Yên Phong", province: 51, district: 624
	},
	{
		id: 15430, name: "Xã Yên Thái", province: 51, district: 624
	},
	{
		id: 15433, name: "Xã Yên Hùng", province: 51, district: 624
	},
	{
		id: 15436, name: "Xã Yên Thịnh", province: 51, district: 624
	},
	{
		id: 15439, name: "Xã Yên Ninh", province: 51, district: 624
	},
	{
		id: 15442, name: "Xã Yên Lạc", province: 51, district: 624
	},
	{
		id: 15445, name: "Xã Định Tăng", province: 51, district: 624
	},
	{
		id: 15448, name: "Xã Định Hòa", province: 51, district: 624
	},
	{
		id: 15451, name: "Xã Định Thành", province: 51, district: 624
	},
	{
		id: 15454, name: "Xã Định Công", province: 51, district: 624
	},
	{
		id: 15457, name: "Xã Định Tân", province: 51, district: 624
	},
	{
		id: 15460, name: "Xã Định Tiến", province: 51, district: 624
	},
	{
		id: 15463, name: "Xã Định Long", province: 51, district: 624
	},
	{
		id: 15466, name: "Xã Định Liên", province: 51, district: 624
	},
	{
		id: 15469, name: "Xã Định Tường", province: 51, district: 624
	},
	{
		id: 15472, name: "Xã Định Hưng", province: 51, district: 624
	},
	{
		id: 15475, name: "Xã Định Hải", province: 51, district: 624
	},
	{
		id: 15478, name: "Xã Định Bình", province: 51, district: 624
	},
	{
		id: 16438, name: "Thị trấn Quảng Xương", province: 51, district: 625
	},
	{
		id: 16444, name: "Xã Quảng Tân", province: 51, district: 625
	},
	{
		id: 16447, name: "Xã Quảng Trạch", province: 51, district: 625
	},
	{
		id: 16450, name: "Xã Quảng Phong", province: 51, district: 625
	},
	{
		id: 16453, name: "Xã Quảng Đức", province: 51, district: 625
	},
	{
		id: 16456, name: "Xã Quảng Định", province: 51, district: 625
	},
	{
		id: 16462, name: "Xã Quảng Nhân", province: 51, district: 625
	},
	{
		id: 16465, name: "Xã Quảng Ninh", province: 51, district: 625
	},
	{
		id: 16468, name: "Xã Quảng Bình", province: 51, district: 625
	},
	{
		id: 16471, name: "Xã Quảng Hợp", province: 51, district: 625
	},
	{
		id: 16474, name: "Xã Quảng Văn", province: 51, district: 625
	},
	{
		id: 16477, name: "Xã Quảng Long", province: 51, district: 625
	},
	{
		id: 16480, name: "Xã Quảng Yên", province: 51, district: 625
	},
	{
		id: 16483, name: "Xã Quảng Hòa", province: 51, district: 625
	},
	{
		id: 16486, name: "Xã Quảng Lĩnh", province: 51, district: 625
	},
	{
		id: 16489, name: "Xã Quảng Khê", province: 51, district: 625
	},
	{
		id: 16492, name: "Xã Quảng Trung", province: 51, district: 625
	},
	{
		id: 16495, name: "Xã Quảng Chính", province: 51, district: 625
	},
	{
		id: 16498, name: "Xã Quảng Ngọc", province: 51, district: 625
	},
	{
		id: 16501, name: "Xã Quảng Trường", province: 51, district: 625
	},
	{
		id: 16504, name: "Xã Quảng Phúc", province: 51, district: 625
	},
	{
		id: 16510, name: "Xã Quảng Vọng", province: 51, district: 625
	},
	{
		id: 16513, name: "Xã Quảng Minh", province: 51, district: 625
	},
	{
		id: 16516, name: "Xã Quảng Hùng", province: 51, district: 625
	},
	{
		id: 16519, name: "Xã Quảng Giao", province: 51, district: 625
	},
	{
		id: 16531, name: "Xã Quảng Châu", province: 51, district: 625
	},
	{
		id: 16534, name: "Xã Quảng Vinh", province: 51, district: 625
	},
	{
		id: 16537, name: "Xã Quảng Đại", province: 51, district: 625
	},
	{
		id: 16540, name: "Xã Quảng Hải", province: 51, district: 625
	},
	{
		id: 16543, name: "Xã Quảng Lưu", province: 51, district: 625
	},
	{
		id: 16546, name: "Xã Quảng Lộc", province: 51, district: 625
	},
	{
		id: 16549, name: "Xã Quảng Lợi", province: 51, district: 625
	},
	{
		id: 16552, name: "Xã Quảng Nham", province: 51, district: 625
	},
	{
		id: 16555, name: "Xã Quảng Thạch", province: 51, district: 625
	},
	{
		id: 16558, name: "Xã Quảng Thái", province: 51, district: 625
	},
	{
		id: 16378, name: "Thị trấn Rừng Thông", province: 51, district: 626
	},
	{
		id: 16381, name: "Xã Đông Hoàng", province: 51, district: 626
	},
	{
		id: 16384, name: "Xã Đông Ninh", province: 51, district: 626
	},
	{
		id: 16387, name: "Xã Đông Khê", province: 51, district: 626
	},
	{
		id: 16390, name: "Xã Đông Hòa", province: 51, district: 626
	},
	{
		id: 16393, name: "Xã Đông Yên", province: 51, district: 626
	},
	{
		id: 16399, name: "Xã Đông Minh", province: 51, district: 626
	},
	{
		id: 16402, name: "Xã Đông Thanh", province: 51, district: 626
	},
	{
		id: 16405, name: "Xã Đông Tiến", province: 51, district: 626
	},
	{
		id: 16408, name: "Xã Đông Anh", province: 51, district: 626
	},
	{
		id: 16411, name: "Xã Đông Xuân", province: 51, district: 626
	},
	{
		id: 16414, name: "Xã Đông Thịnh", province: 51, district: 626
	},
	{
		id: 16417, name: "Xã Đông Văn", province: 51, district: 626
	},
	{
		id: 16420, name: "Xã Đông Phú", province: 51, district: 626
	},
	{
		id: 16423, name: "Xã Đông Nam", province: 51, district: 626
	},
	{
		id: 16426, name: "Xã Đông Quang", province: 51, district: 626
	},
	{
		id: 19744, name: "Phường Phú Thuận", province: 52, district: 644
	},
	{
		id: 19747, name: "Phường Phú Bình", province: 52, district: 644
	},
	{
		id: 19750, name: "Phường Tây Lộc", province: 52, district: 644
	},
	{
		id: 19753, name: "Phường Thuận Lộc", province: 52, district: 644
	},
	{
		id: 19756, name: "Phường Phú Hiệp", province: 52, district: 644
	},
	{
		id: 19759, name: "Phường Phú Hậu", province: 52, district: 644
	},
	{
		id: 19762, name: "Phường Thuận Hòa", province: 52, district: 644
	},
	{
		id: 19765, name: "Phường Thuận Thành", province: 52, district: 644
	},
	{
		id: 19768, name: "Phường Phú Hòa", province: 52, district: 644
	},
	{
		id: 19771, name: "Phường Phú Cát", province: 52, district: 644
	},
	{
		id: 19774, name: "Phường Kim Long", province: 52, district: 644
	},
	{
		id: 19777, name: "Phường Vĩ Dạ", province: 52, district: 644
	},
	{
		id: 19780, name: "Phường Phường Đúc", province: 52, district: 644
	},
	{
		id: 19783, name: "Phường Vĩnh Ninh", province: 52, district: 644
	},
	{
		id: 19786, name: "Phường Phú Hội", province: 52, district: 644
	},
	{
		id: 19789, name: "Phường Phú Nhuận", province: 52, district: 644
	},
	{
		id: 19792, name: "Phường Xuân Phú", province: 52, district: 644
	},
	{
		id: 19795, name: "Phường Trường An", province: 52, district: 644
	},
	{
		id: 19798, name: "Phường Phước Vĩnh", province: 52, district: 644
	},
	{
		id: 19801, name: "Phường An Cựu", province: 52, district: 644
	},
	{
		id: 19803, name: "Phường An Hoà", province: 52, district: 644
	},
	{
		id: 19804, name: "Phường Hương Sơ", province: 52, district: 644
	},
	{
		id: 19807, name: "Phường Thủy Biều", province: 52, district: 644
	},
	{
		id: 19810, name: "Phường Hương Long", province: 52, district: 644
	},
	{
		id: 19813, name: "Phường Thủy Xuân", province: 52, district: 644
	},
	{
		id: 19815, name: "Phường An Đông", province: 52, district: 644
	},
	{
		id: 19816, name: "Phường An Tây", province: 52, district: 644
	},
	{
		id: 19819, name: "Thị trấn Phong Điền", province: 52, district: 645
	},
	{
		id: 19822, name: "Xã Điền Hương", province: 52, district: 645
	},
	{
		id: 19825, name: "Xã Điền Môn", province: 52, district: 645
	},
	{
		id: 19828, name: "Xã Điền Lộc", province: 52, district: 645
	},
	{
		id: 19831, name: "Xã Phong Bình", province: 52, district: 645
	},
	{
		id: 19834, name: "Xã Điền Hòa", province: 52, district: 645
	},
	{
		id: 19837, name: "Xã Phong Chương", province: 52, district: 645
	},
	{
		id: 19840, name: "Xã Phong Hải", province: 52, district: 645
	},
	{
		id: 19843, name: "Xã Điền Hải", province: 52, district: 645
	},
	{
		id: 19846, name: "Xã Phong Hòa", province: 52, district: 645
	},
	{
		id: 19849, name: "Xã Phong Thu", province: 52, district: 645
	},
	{
		id: 19852, name: "Xã Phong Hiền", province: 52, district: 645
	},
	{
		id: 19855, name: "Xã Phong Mỹ", province: 52, district: 645
	},
	{
		id: 19858, name: "Xã Phong An", province: 52, district: 645
	},
	{
		id: 19861, name: "Xã Phong Xuân", province: 52, district: 645
	},
	{
		id: 19864, name: "Xã Phong Sơn", province: 52, district: 645
	},
	{
		id: 19867, name: "Thị trấn Sịa", province: 52, district: 646
	},
	{
		id: 19870, name: "Xã Quảng Thái", province: 52, district: 646
	},
	{
		id: 19873, name: "Xã Quảng Ngạn", province: 52, district: 646
	},
	{
		id: 19876, name: "Xã Quảng Lợi", province: 52, district: 646
	},
	{
		id: 19879, name: "Xã Quảng Công", province: 52, district: 646
	},
	{
		id: 19882, name: "Xã Quảng Phước", province: 52, district: 646
	},
	{
		id: 19885, name: "Xã Quảng Vinh", province: 52, district: 646
	},
	{
		id: 19888, name: "Xã Quảng An", province: 52, district: 646
	},
	{
		id: 19891, name: "Xã Quảng Thành", province: 52, district: 646
	},
	{
		id: 19894, name: "Xã Quảng Thọ", province: 52, district: 646
	},
	{
		id: 19897, name: "Xã Quảng Phú", province: 52, district: 646
	},
	{
		id: 19996, name: "Phường Tứ Hạ", province: 52, district: 647
	},
	{
		id: 19999, name: "Xã Hải Dương", province: 52, district: 647
	},
	{
		id: 20002, name: "Xã Hương Phong", province: 52, district: 647
	},
	{
		id: 20005, name: "Xã Hương Toàn", province: 52, district: 647
	},
	{
		id: 20008, name: "Phường Hương Vân", province: 52, district: 647
	},
	{
		id: 20011, name: "Phường Hương Văn", province: 52, district: 647
	},
	{
		id: 20014, name: "Xã Hương Vinh", province: 52, district: 647
	},
	{
		id: 20017, name: "Phường Hương Xuân", province: 52, district: 647
	},
	{
		id: 20020, name: "Phường Hương Chữ", province: 52, district: 647
	},
	{
		id: 20023, name: "Phường Hương An", province: 52, district: 647
	},
	{
		id: 20026, name: "Xã Hương Bình", province: 52, district: 647
	},
	{
		id: 20029, name: "Phường Hương Hồ", province: 52, district: 647
	},
	{
		id: 20032, name: "Xã Hương Thọ", province: 52, district: 647
	},
	{
		id: 20035, name: "Xã Bình Điền", province: 52, district: 647
	},
	{
		id: 20038, name: "Xã Hồng Tiến", province: 52, district: 647
	},
	{
		id: 20041, name: "Xã Bình Thành", province: 52, district: 647
	},
	{
		id: 19900, name: "Thị trấn Thuận An", province: 52, district: 648
	},
	{
		id: 19903, name: "Xã Phú Thuận", province: 52, district: 648
	},
	{
		id: 19906, name: "Xã Phú Dương", province: 52, district: 648
	},
	{
		id: 19909, name: "Xã Phú Mậu", province: 52, district: 648
	},
	{
		id: 19912, name: "Xã Phú An", province: 52, district: 648
	},
	{
		id: 19915, name: "Xã Phú Hải", province: 52, district: 648
	},
	{
		id: 19918, name: "Xã Phú Xuân", province: 52, district: 648
	},
	{
		id: 19921, name: "Xã Phú Diên", province: 52, district: 648
	},
	{
		id: 19924, name: "Xã Phú Thanh", province: 52, district: 648
	},
	{
		id: 19927, name: "Xã Phú Mỹ", province: 52, district: 648
	},
	{
		id: 19930, name: "Xã Phú Thượng", province: 52, district: 648
	},
	{
		id: 19933, name: "Xã Phú Hồ", province: 52, district: 648
	},
	{
		id: 19936, name: "Xã Vinh Xuân", province: 52, district: 648
	},
	{
		id: 19939, name: "Xã Phú Lương", province: 52, district: 648
	},
	{
		id: 19942, name: "Thị trấn Phú Đa", province: 52, district: 648
	},
	{
		id: 19945, name: "Xã Vinh Thanh", province: 52, district: 648
	},
	{
		id: 19948, name: "Xã Vinh An", province: 52, district: 648
	},
	{
		id: 19951, name: "Xã Vinh Phú", province: 52, district: 648
	},
	{
		id: 19954, name: "Xã Vinh Thái", province: 52, district: 648
	},
	{
		id: 19957, name: "Xã Vinh Hà", province: 52, district: 648
	},
	{
		id: 19960, name: "Phường Phú Bài", province: 52, district: 649
	},
	{
		id: 19963, name: "Xã Thủy Vân", province: 52, district: 649
	},
	{
		id: 19966, name: "Xã Thủy Thanh", province: 52, district: 649
	},
	{
		id: 19969, name: "Phường Thủy Dương", province: 52, district: 649
	},
	{
		id: 19972, name: "Phường Thủy Phương", province: 52, district: 649
	},
	{
		id: 19975, name: "Phường Thủy Châu", province: 52, district: 649
	},
	{
		id: 19978, name: "Phường Thủy Lương", province: 52, district: 649
	},
	{
		id: 19981, name: "Xã Thủy Bằng", province: 52, district: 649
	},
	{
		id: 19984, name: "Xã Thủy Tân", province: 52, district: 649
	},
	{
		id: 19987, name: "Xã Thủy Phù", province: 52, district: 649
	},
	{
		id: 19990, name: "Xã Phú Sơn", province: 52, district: 649
	},
	{
		id: 19993, name: "Xã Dương Hòa", province: 52, district: 649
	},
	{
		id: 20107, name: "Thị trấn Phú Lộc", province: 52, district: 650
	},
	{
		id: 20110, name: "Thị trấn Lăng Cô", province: 52, district: 650
	},
	{
		id: 20113, name: "Xã Vinh Mỹ", province: 52, district: 650
	},
	{
		id: 20116, name: "Xã Vinh Hưng", province: 52, district: 650
	},
	{
		id: 20119, name: "Xã Vinh Hải", province: 52, district: 650
	},
	{
		id: 20122, name: "Xã Vinh Giang", province: 52, district: 650
	},
	{
		id: 20125, name: "Xã Vinh Hiền", province: 52, district: 650
	},
	{
		id: 20128, name: "Xã Lộc Bổn", province: 52, district: 650
	},
	{
		id: 20131, name: "Xã Lộc Sơn", province: 52, district: 650
	},
	{
		id: 20134, name: "Xã Lộc Bình", province: 52, district: 650
	},
	{
		id: 20137, name: "Xã Lộc Vĩnh", province: 52, district: 650
	},
	{
		id: 20140, name: "Xã Lộc An", province: 52, district: 650
	},
	{
		id: 20143, name: "Xã Lộc Điền", province: 52, district: 650
	},
	{
		id: 20146, name: "Xã Lộc Thủy", province: 52, district: 650
	},
	{
		id: 20149, name: "Xã Lộc Trì", province: 52, district: 650
	},
	{
		id: 20152, name: "Xã Lộc Tiến", province: 52, district: 650
	},
	{
		id: 20155, name: "Xã Lộc Hòa", province: 52, district: 650
	},
	{
		id: 20158, name: "Xã Xuân Lộc", province: 52, district: 650
	},
	{
		id: 20161, name: "Thị trấn Khe Tre", province: 52, district: 651
	},
	{
		id: 20164, name: "Xã Hương Phú", province: 52, district: 651
	},
	{
		id: 20167, name: "Xã Hương Sơn", province: 52, district: 651
	},
	{
		id: 20170, name: "Xã Hương Lộc", province: 52, district: 651
	},
	{
		id: 20173, name: "Xã Thượng Quảng", province: 52, district: 651
	},
	{
		id: 20176, name: "Xã Hương Hoà", province: 52, district: 651
	},
	{
		id: 20179, name: "Xã Hương Giang", province: 52, district: 651
	},
	{
		id: 20182, name: "Xã Hương Hữu", province: 52, district: 651
	},
	{
		id: 20185, name: "Xã Thượng Lộ", province: 52, district: 651
	},
	{
		id: 20188, name: "Xã Thượng Long", province: 52, district: 651
	},
	{
		id: 20191, name: "Xã Thượng Nhật", province: 52, district: 651
	},
	{
		id: 20044, name: "Thị trấn A Lưới", province: 52, district: 652
	},
	{
		id: 20047, name: "Xã Hồng Vân", province: 52, district: 652
	},
	{
		id: 20050, name: "Xã Hồng Hạ", province: 52, district: 652
	},
	{
		id: 20053, name: "Xã Hồng Kim", province: 52, district: 652
	},
	{
		id: 20056, name: "Xã Hồng Trung", province: 52, district: 652
	},
	{
		id: 20059, name: "Xã Hương Nguyên", province: 52, district: 652
	},
	{
		id: 20062, name: "Xã Bắc Sơn", province: 52, district: 652
	},
	{
		id: 20065, name: "Xã Hồng Bắc", province: 52, district: 652
	},
	{
		id: 20068, name: "Xã A Ngo", province: 52, district: 652
	},
	{
		id: 20071, name: "Xã Sơn Thủy", province: 52, district: 652
	},
	{
		id: 20074, name: "Xã Phú Vinh", province: 52, district: 652
	},
	{
		id: 20077, name: "Xã Hồng Quảng", province: 52, district: 652
	},
	{
		id: 20080, name: "Xã Hương Phong", province: 52, district: 652
	},
	{
		id: 20083, name: "Xã Nhâm", province: 52, district: 652
	},
	{
		id: 20086, name: "Xã Hồng Thượng", province: 52, district: 652
	},
	{
		id: 20089, name: "Xã Hồng Thái", province: 52, district: 652
	},
	{
		id: 20092, name: "Xã Hương Lâm", province: 52, district: 652
	},
	{
		id: 20095, name: "Xã A Roằng", province: 52, district: 652
	},
	{
		id: 20098, name: "Xã Đông Sơn", province: 52, district: 652
	},
	{
		id: 20101, name: "Xã A Đớt", province: 52, district: 652
	},
	{
		id: 20104, name: "Xã Hồng Thủy", province: 52, district: 652
	},
	{
		id: 28249, name: "Phường 5", province: 53, district: 653
	},
	{
		id: 28252, name: "Phường 4", province: 53, district: 653
	},
	{
		id: 28255, name: "Phường 7", province: 53, district: 653
	},
	{
		id: 28258, name: "Phường 3", province: 53, district: 653
	},
	{
		id: 28261, name: "Phường 1", province: 53, district: 653
	},
	{
		id: 28264, name: "Phường 2", province: 53, district: 653
	},
	{
		id: 28267, name: "Phường 8", province: 53, district: 653
	},
	{
		id: 28270, name: "Phường 6", province: 53, district: 653
	},
	{
		id: 28273, name: "Phường 9", province: 53, district: 653
	},
	{
		id: 28276, name: "Phường 10", province: 53, district: 653
	},
	{
		id: 28279, name: "Phường Tân Long", province: 53, district: 653
	},
	{
		id: 28282, name: "Xã Đạo Thạnh", province: 53, district: 653
	},
	{
		id: 28285, name: "Xã Trung An", province: 53, district: 653
	},
	{
		id: 28288, name: "Xã Mỹ Phong", province: 53, district: 653
	},
	{
		id: 28291, name: "Xã Tân Mỹ Chánh", province: 53, district: 653
	},
	{
		id: 28567, name: "Xã Phước Thạnh", province: 53, district: 653
	},
	{
		id: 28591, name: "Xã Thới Sơn", province: 53, district: 653
	},
	{
		id: 28294, name: "Phường 3", province: 53, district: 654
	},
	{
		id: 28297, name: "Phường 2", province: 53, district: 654
	},
	{
		id: 28300, name: "Phường 4", province: 53, district: 654
	},
	{
		id: 28303, name: "Phường 1", province: 53, district: 654
	},
	{
		id: 28306, name: "Phường 5", province: 53, district: 654
	},
	{
		id: 28309, name: "Xã Long Hưng", province: 53, district: 654
	},
	{
		id: 28312, name: "Xã Long Thuận", province: 53, district: 654
	},
	{
		id: 28315, name: "Xã Long Chánh", province: 53, district: 654
	},
	{
		id: 28318, name: "Xã Long Hòa", province: 53, district: 654
	},
	{
		id: 28708, name: "Xã Bình Đông", province: 53, district: 654
	},
	{
		id: 28717, name: "Xã Bình Xuân", province: 53, district: 654
	},
	{
		id: 28729, name: "Xã Tân Trung", province: 53, district: 654
	},
	{
		id: 28360, name: "Thị trấn Cái Bè", province: 53, district: 655
	},
	{
		id: 28363, name: "Xã Hậu Mỹ Bắc B", province: 53, district: 655
	},
	{
		id: 28366, name: "Xã Hậu Mỹ Bắc A", province: 53, district: 655
	},
	{
		id: 28369, name: "Xã Mỹ Trung", province: 53, district: 655
	},
	{
		id: 28372, name: "Xã Hậu Mỹ Trinh", province: 53, district: 655
	},
	{
		id: 28375, name: "Xã Hậu Mỹ Phú", province: 53, district: 655
	},
	{
		id: 28378, name: "Xã Mỹ Tân", province: 53, district: 655
	},
	{
		id: 28381, name: "Xã Mỹ Lợi B", province: 53, district: 655
	},
	{
		id: 28384, name: "Xã Thiện Trung", province: 53, district: 655
	},
	{
		id: 28387, name: "Xã Mỹ Hội", province: 53, district: 655
	},
	{
		id: 28390, name: "Xã An Cư", province: 53, district: 655
	},
	{
		id: 28393, name: "Xã Hậu Thành", province: 53, district: 655
	},
	{
		id: 28396, name: "Xã Mỹ Lợi A", province: 53, district: 655
	},
	{
		id: 28399, name: "Xã Hòa Khánh", province: 53, district: 655
	},
	{
		id: 28402, name: "Xã Thiện Trí", province: 53, district: 655
	},
	{
		id: 28405, name: "Xã Mỹ Đức Đông", province: 53, district: 655
	},
	{
		id: 28408, name: "Xã Mỹ Đức Tây", province: 53, district: 655
	},
	{
		id: 28411, name: "Xã Đông Hòa Hiệp", province: 53, district: 655
	},
	{
		id: 28414, name: "Xã An Thái Đông", province: 53, district: 655
	},
	{
		id: 28417, name: "Xã Tân Hưng", province: 53, district: 655
	},
	{
		id: 28420, name: "Xã Mỹ Lương", province: 53, district: 655
	},
	{
		id: 28423, name: "Xã Tân Thanh", province: 53, district: 655
	},
	{
		id: 28426, name: "Xã An Thái Trung", province: 53, district: 655
	},
	{
		id: 28429, name: "Xã An Hữu", province: 53, district: 655
	},
	{
		id: 28432, name: "Xã Hòa Hưng", province: 53, district: 655
	},
	{
		id: 28438, name: "Xã Thạnh Lộc", province: 53, district: 656
	},
	{
		id: 28441, name: "Xã Mỹ Thành Bắc", province: 53, district: 656
	},
	{
		id: 28444, name: "Xã Phú Cường", province: 53, district: 656
	},
	{
		id: 28456, name: "Xã Mỹ Thành Nam", province: 53, district: 656
	},
	{
		id: 28465, name: "Xã Phú Nhuận", province: 53, district: 656
	},
	{
		id: 28471, name: "Xã Bình Phú", province: 53, district: 656
	},
	{
		id: 28489, name: "Xã Cẩm Sơn", province: 53, district: 656
	},
	{
		id: 28492, name: "Xã Phú An", province: 53, district: 656
	},
	{
		id: 28495, name: "Xã Mỹ Long", province: 53, district: 656
	},
	{
		id: 28498, name: "Xã Long Tiên", province: 53, district: 656
	},
	{
		id: 28501, name: "Xã Hiệp Đức", province: 53, district: 656
	},
	{
		id: 28504, name: "Xã Long Trung", province: 53, district: 656
	},
	{
		id: 28507, name: "Xã Hội Xuân", province: 53, district: 656
	},
	{
		id: 28510, name: "Xã Tân Phong", province: 53, district: 656
	},
	{
		id: 28513, name: "Xã Tam Bình", province: 53, district: 656
	},
	{
		id: 28516, name: "Xã Ngũ Hiệp", province: 53, district: 656
	},
	{
		id: 28519, name: "Thị trấn Tân Hiệp", province: 53, district: 657
	},
	{
		id: 28522, name: "Xã Tân Hội Đông", province: 53, district: 657
	},
	{
		id: 28525, name: "Xã Tân Hương", province: 53, district: 657
	},
	{
		id: 28528, name: "Xã Tân Lý Đông", province: 53, district: 657
	},
	{
		id: 28531, name: "Xã Tân Lý Tây", province: 53, district: 657
	},
	{
		id: 28534, name: "Xã Thân Cửu Nghĩa", province: 53, district: 657
	},
	{
		id: 28537, name: "Xã Tam Hiệp", province: 53, district: 657
	},
	{
		id: 28540, name: "Xã Điềm Hy", province: 53, district: 657
	},
	{
		id: 28543, name: "Xã Nhị Bình", province: 53, district: 657
	},
	{
		id: 28546, name: "Xã Dưỡng Điềm", province: 53, district: 657
	},
	{
		id: 28549, name: "Xã Đông Hòa", province: 53, district: 657
	},
	{
		id: 28552, name: "Xã Long Định", province: 53, district: 657
	},
	{
		id: 28555, name: "Xã Hữu Đạo", province: 53, district: 657
	},
	{
		id: 28558, name: "Xã Long An", province: 53, district: 657
	},
	{
		id: 28561, name: "Xã Long Hưng", province: 53, district: 657
	},
	{
		id: 28564, name: "Xã Bình Trưng", province: 53, district: 657
	},
	{
		id: 28570, name: "Xã Thạnh Phú", province: 53, district: 657
	},
	{
		id: 28573, name: "Xã Bàn Long", province: 53, district: 657
	},
	{
		id: 28576, name: "Xã Vĩnh Kim", province: 53, district: 657
	},
	{
		id: 28579, name: "Xã Bình Đức", province: 53, district: 657
	},
	{
		id: 28582, name: "Xã Song Thuận", province: 53, district: 657
	},
	{
		id: 28585, name: "Xã Kim Sơn", province: 53, district: 657
	},
	{
		id: 28588, name: "Xã Phú Phong", province: 53, district: 657
	},
	{
		id: 28594, name: "Thị trấn Chợ Gạo", province: 53, district: 658
	},
	{
		id: 28597, name: "Xã Trung Hòa", province: 53, district: 658
	},
	{
		id: 28600, name: "Xã Hòa Tịnh", province: 53, district: 658
	},
	{
		id: 28603, name: "Xã Mỹ Tịnh An", province: 53, district: 658
	},
	{
		id: 28606, name: "Xã Tân Bình Thạnh", province: 53, district: 658
	},
	{
		id: 28609, name: "Xã Phú Kiết", province: 53, district: 658
	},
	{
		id: 28612, name: "Xã Lương Hòa Lạc", province: 53, district: 658
	},
	{
		id: 28615, name: "Xã Thanh Bình", province: 53, district: 658
	},
	{
		id: 28618, name: "Xã Quơn Long", province: 53, district: 658
	},
	{
		id: 28621, name: "Xã Bình Phục Nhứt", province: 53, district: 658
	},
	{
		id: 28624, name: "Xã Đăng Hưng Phước", province: 53, district: 658
	},
	{
		id: 28627, name: "Xã Tân Thuận Bình", province: 53, district: 658
	},
	{
		id: 28630, name: "Xã Song Bình", province: 53, district: 658
	},
	{
		id: 28633, name: "Xã Bình Phan", province: 53, district: 658
	},
	{
		id: 28636, name: "Xã Long Bình Điền", province: 53, district: 658
	},
	{
		id: 28639, name: "Xã An Thạnh Thủy", province: 53, district: 658
	},
	{
		id: 28642, name: "Xã Xuân Đông", province: 53, district: 658
	},
	{
		id: 28645, name: "Xã Hòa Định", province: 53, district: 658
	},
	{
		id: 28648, name: "Xã Bình Ninh", province: 53, district: 658
	},
	{
		id: 28702, name: "Thị trấn Tân Hòa", province: 53, district: 659
	},
	{
		id: 28705, name: "Xã Tăng Hoà", province: 53, district: 659
	},
	{
		id: 28711, name: "Xã Tân Phước", province: 53, district: 659
	},
	{
		id: 28714, name: "Xã Gia Thuận", province: 53, district: 659
	},
	{
		id: 28720, name: "Thị trấn Vàm Láng", province: 53, district: 659
	},
	{
		id: 28723, name: "Xã Tân Tây", province: 53, district: 659
	},
	{
		id: 28726, name: "Xã Kiểng Phước", province: 53, district: 659
	},
	{
		id: 28732, name: "Xã Tân Đông", province: 53, district: 659
	},
	{
		id: 28735, name: "Xã Bình Ân", province: 53, district: 659
	},
	{
		id: 28738, name: "Xã Tân Điền", province: 53, district: 659
	},
	{
		id: 28741, name: "Xã Bình Nghị", province: 53, district: 659
	},
	{
		id: 28744, name: "Xã Phước Trung", province: 53, district: 659
	},
	{
		id: 28747, name: "Xã Tân Thành", province: 53, district: 659
	},
	{
		id: 28651, name: "Thị trấn Vĩnh Bình", province: 53, district: 660
	},
	{
		id: 28654, name: "Xã Đồng Sơn", province: 53, district: 660
	},
	{
		id: 28657, name: "Xã Bình Phú", province: 53, district: 660
	},
	{
		id: 28660, name: "Xã Đồng Thạnh", province: 53, district: 660
	},
	{
		id: 28663, name: "Xã Thành Công", province: 53, district: 660
	},
	{
		id: 28666, name: "Xã Bình Nhì", province: 53, district: 660
	},
	{
		id: 28669, name: "Xã Yên Luông", province: 53, district: 660
	},
	{
		id: 28672, name: "Xã Thạnh Trị", province: 53, district: 660
	},
	{
		id: 28675, name: "Xã Thạnh Nhựt", province: 53, district: 660
	},
	{
		id: 28678, name: "Xã Long Vĩnh", province: 53, district: 660
	},
	{
		id: 28681, name: "Xã Bình Tân", province: 53, district: 660
	},
	{
		id: 28684, name: "Xã Vĩnh Hựu", province: 53, district: 660
	},
	{
		id: 28687, name: "Xã Long Bình", province: 53, district: 660
	},
	{
		id: 28321, name: "Thị trấn Mỹ Phước", province: 53, district: 661
	},
	{
		id: 28324, name: "Xã Tân Hòa Đông", province: 53, district: 661
	},
	{
		id: 28327, name: "Xã Thạnh Tân", province: 53, district: 661
	},
	{
		id: 28330, name: "Xã Thạnh Mỹ", province: 53, district: 661
	},
	{
		id: 28333, name: "Xã Thạnh Hoà", province: 53, district: 661
	},
	{
		id: 28336, name: "Xã Phú Mỹ", province: 53, district: 661
	},
	{
		id: 28339, name: "Xã Tân Hòa Thành", province: 53, district: 661
	},
	{
		id: 28342, name: "Xã Hưng Thạnh", province: 53, district: 661
	},
	{
		id: 28345, name: "Xã Tân Lập 1", province: 53, district: 661
	},
	{
		id: 28348, name: "Xã Tân Hòa Tây", province: 53, district: 661
	},
	{
		id: 28351, name: "Xã Mỹ Phước", province: 53, district: 661
	},
	{
		id: 28354, name: "Xã Tân Lập 2", province: 53, district: 661
	},
	{
		id: 28357, name: "Xã Phước Lập", province: 53, district: 661
	},
	{
		id: 28690, name: "Xã Tân Thới", province: 53, district: 720
	},
	{
		id: 28693, name: "Xã Tân Phú", province: 53, district: 720
	},
	{
		id: 28696, name: "Xã Phú Thạnh", province: 53, district: 720
	},
	{
		id: 28699, name: "Xã Tân Thạnh", province: 53, district: 720
	},
	{
		id: 28750, name: "Xã Phú Đông", province: 53, district: 720
	},
	{
		id: 28753, name: "Xã Phú Tân", province: 53, district: 720
	},
	{
		id: 28435, name: "Phường 1", province: 53, district: 753
	},
	{
		id: 28436, name: "Phường 2", province: 53, district: 753
	},
	{
		id: 28437, name: "Phường 3", province: 53, district: 753
	},
	{
		id: 28439, name: "Phường 4", province: 53, district: 753
	},
	{
		id: 28440, name: "Phường 5", province: 53, district: 753
	},
	{
		id: 28447, name: "Xã Mỹ Phước Tây", province: 53, district: 753
	},
	{
		id: 28450, name: "Xã Mỹ Hạnh Đông", province: 53, district: 753
	},
	{
		id: 28453, name: "Xã Mỹ Hạnh Trung", province: 53, district: 753
	},
	{
		id: 28459, name: "Xã Tân Phú", province: 53, district: 753
	},
	{
		id: 28462, name: "Xã Tân Bình", province: 53, district: 753
	},
	{
		id: 28468, name: "Xã Tân Hội", province: 53, district: 753
	},
	{
		id: 28474, name: "Phường Nhị Mỹ", province: 53, district: 753
	},
	{
		id: 28477, name: "Xã Nhị Quý", province: 53, district: 753
	},
	{
		id: 28480, name: "Xã Thanh Hòa", province: 53, district: 753
	},
	{
		id: 28483, name: "Xã Phú Quý", province: 53, district: 753
	},
	{
		id: 28486, name: "Xã Long Khánh", province: 53, district: 753
	},
	{
		id: 29236, name: "Phường 4", province: 54, district: 662
	},
	{
		id: 29239, name: "Phường 1", province: 54, district: 662
	},
	{
		id: 29242, name: "Phường 3", province: 54, district: 662
	},
	{
		id: 29245, name: "Phường 2", province: 54, district: 662
	},
	{
		id: 29248, name: "Phường 5", province: 54, district: 662
	},
	{
		id: 29251, name: "Phường 6", province: 54, district: 662
	},
	{
		id: 29254, name: "Phường 7", province: 54, district: 662
	},
	{
		id: 29257, name: "Phường 8", province: 54, district: 662
	},
	{
		id: 29260, name: "Phường 9", province: 54, district: 662
	},
	{
		id: 29263, name: "Xã Long Đức", province: 54, district: 662
	},
	{
		id: 29266, name: "Thị trấn Càng Long", province: 54, district: 663
	},
	{
		id: 29269, name: "Xã Mỹ Cẩm", province: 54, district: 663
	},
	{
		id: 29272, name: "Xã An Trường A", province: 54, district: 663
	},
	{
		id: 29275, name: "Xã An Trường", province: 54, district: 663
	},
	{
		id: 29278, name: "Xã Huyền Hội", province: 54, district: 663
	},
	{
		id: 29281, name: "Xã Tân An", province: 54, district: 663
	},
	{
		id: 29284, name: "Xã Tân Bình", province: 54, district: 663
	},
	{
		id: 29287, name: "Xã Bình Phú", province: 54, district: 663
	},
	{
		id: 29290, name: "Xã Phương Thạnh", province: 54, district: 663
	},
	{
		id: 29293, name: "Xã Đại Phúc", province: 54, district: 663
	},
	{
		id: 29296, name: "Xã Đại Phước", province: 54, district: 663
	},
	{
		id: 29299, name: "Xã Nhị Long Phú", province: 54, district: 663
	},
	{
		id: 29302, name: "Xã Nhị Long", province: 54, district: 663
	},
	{
		id: 29305, name: "Xã Đức Mỹ", province: 54, district: 663
	},
	{
		id: 29308, name: "Thị trấn Cầu Kè", province: 54, district: 664
	},
	{
		id: 29311, name: "Xã Hòa Ân", province: 54, district: 664
	},
	{
		id: 29314, name: "Xã Châu Điền", province: 54, district: 664
	},
	{
		id: 29317, name: "Xã An Phú Tân", province: 54, district: 664
	},
	{
		id: 29320, name: "Xã Hoà Tân", province: 54, district: 664
	},
	{
		id: 29323, name: "Xã Ninh Thới", province: 54, district: 664
	},
	{
		id: 29326, name: "Xã Phong Phú", province: 54, district: 664
	},
	{
		id: 29329, name: "Xã Phong Thạnh", province: 54, district: 664
	},
	{
		id: 29332, name: "Xã Tam Ngãi", province: 54, district: 664
	},
	{
		id: 29335, name: "Xã Thông Hòa", province: 54, district: 664
	},
	{
		id: 29338, name: "Xã Thạnh Phú", province: 54, district: 664
	},
	{
		id: 29341, name: "Thị trấn Tiểu Cần", province: 54, district: 665
	},
	{
		id: 29344, name: "Thị trấn Cầu Quan", province: 54, district: 665
	},
	{
		id: 29347, name: "Xã Phú Cần", province: 54, district: 665
	},
	{
		id: 29350, name: "Xã Hiếu Tử", province: 54, district: 665
	},
	{
		id: 29353, name: "Xã Hiếu Trung", province: 54, district: 665
	},
	{
		id: 29356, name: "Xã Long Thới", province: 54, district: 665
	},
	{
		id: 29359, name: "Xã Hùng Hòa", province: 54, district: 665
	},
	{
		id: 29362, name: "Xã Tân Hùng", province: 54, district: 665
	},
	{
		id: 29365, name: "Xã Tập Ngãi", province: 54, district: 665
	},
	{
		id: 29368, name: "Xã Ngãi Hùng", province: 54, district: 665
	},
	{
		id: 29371, name: "Xã Tân Hòa", province: 54, district: 665
	},
	{
		id: 29374, name: "Thị trấn Châu Thành", province: 54, district: 666
	},
	{
		id: 29377, name: "Xã Đa Lộc", province: 54, district: 666
	},
	{
		id: 29380, name: "Xã Mỹ Chánh", province: 54, district: 666
	},
	{
		id: 29383, name: "Xã Thanh Mỹ", province: 54, district: 666
	},
	{
		id: 29386, name: "Xã Lương Hoà A", province: 54, district: 666
	},
	{
		id: 29389, name: "Xã Lương Hòa", province: 54, district: 666
	},
	{
		id: 29392, name: "Xã Song Lộc", province: 54, district: 666
	},
	{
		id: 29395, name: "Xã Nguyệt Hóa", province: 54, district: 666
	},
	{
		id: 29398, name: "Xã Hòa Thuận", province: 54, district: 666
	},
	{
		id: 29401, name: "Xã Hòa Lợi", province: 54, district: 666
	},
	{
		id: 29404, name: "Xã Phước Hảo", province: 54, district: 666
	},
	{
		id: 29407, name: "Xã Hưng Mỹ", province: 54, district: 666
	},
	{
		id: 29410, name: "Xã Hòa Minh", province: 54, district: 666
	},
	{
		id: 29413, name: "Xã Long Hòa", province: 54, district: 666
	},
	{
		id: 29461, name: "Thị trấn Trà Cú", province: 54, district: 667
	},
	{
		id: 29462, name: "Thị trấn Định An", province: 54, district: 667
	},
	{
		id: 29464, name: "Xã Phước Hưng", province: 54, district: 667
	},
	{
		id: 29467, name: "Xã Tập Sơn", province: 54, district: 667
	},
	{
		id: 29470, name: "Xã Tân Sơn", province: 54, district: 667
	},
	{
		id: 29473, name: "Xã An Quảng Hữu", province: 54, district: 667
	},
	{
		id: 29476, name: "Xã Lưu Nghiệp Anh", province: 54, district: 667
	},
	{
		id: 29479, name: "Xã Ngãi Xuyên", province: 54, district: 667
	},
	{
		id: 29482, name: "Xã Kim Sơn", province: 54, district: 667
	},
	{
		id: 29485, name: "Xã Thanh Sơn", province: 54, district: 667
	},
	{
		id: 29488, name: "Xã Hàm Giang", province: 54, district: 667
	},
	{
		id: 29489, name: "Xã Hàm Tân", province: 54, district: 667
	},
	{
		id: 29491, name: "Xã Đại An", province: 54, district: 667
	},
	{
		id: 29494, name: "Xã Định An", province: 54, district: 667
	},
	{
		id: 29503, name: "Xã Ngọc Biên", province: 54, district: 667
	},
	{
		id: 29506, name: "Xã Long Hiệp", province: 54, district: 667
	},
	{
		id: 29509, name: "Xã Tân Hiệp", province: 54, district: 667
	},
	{
		id: 29416, name: "Thị trấn Cầu Ngang", province: 54, district: 668
	},
	{
		id: 29419, name: "Thị trấn Mỹ Long", province: 54, district: 668
	},
	{
		id: 29422, name: "Xã Mỹ Long Bắc", province: 54, district: 668
	},
	{
		id: 29425, name: "Xã Mỹ Long Nam", province: 54, district: 668
	},
	{
		id: 29428, name: "Xã Mỹ Hòa", province: 54, district: 668
	},
	{
		id: 29431, name: "Xã Vĩnh Kim", province: 54, district: 668
	},
	{
		id: 29434, name: "Xã Kim Hòa", province: 54, district: 668
	},
	{
		id: 29437, name: "Xã Hiệp Hòa", province: 54, district: 668
	},
	{
		id: 29440, name: "Xã Thuận Hòa", province: 54, district: 668
	},
	{
		id: 29443, name: "Xã Long Sơn", province: 54, district: 668
	},
	{
		id: 29446, name: "Xã Nhị Trường", province: 54, district: 668
	},
	{
		id: 29449, name: "Xã Trường Thọ", province: 54, district: 668
	},
	{
		id: 29452, name: "Xã Hiệp Mỹ Đông", province: 54, district: 668
	},
	{
		id: 29455, name: "Xã Hiệp Mỹ Tây", province: 54, district: 668
	},
	{
		id: 29458, name: "Xã Thạnh Hòa Sơn", province: 54, district: 668
	},
	{
		id: 29497, name: "Xã Đôn Xuân", province: 54, district: 669
	},
	{
		id: 29500, name: "Xã Đôn Châu", province: 54, district: 669
	},
	{
		id: 29513, name: "Thị trấn Long Thành", province: 54, district: 669
	},
	{
		id: 29521, name: "Xã Long Khánh", province: 54, district: 669
	},
	{
		id: 29530, name: "Xã Ngũ Lạc", province: 54, district: 669
	},
	{
		id: 29533, name: "Xã Long Vĩnh", province: 54, district: 669
	},
	{
		id: 29536, name: "Xã Đông Hải", province: 54, district: 669
	},
	{
		id: 29512, name: "Phường 1", province: 54, district: 759
	},
	{
		id: 29515, name: "Xã Long Toàn", province: 54, district: 759
	},
	{
		id: 29516, name: "Phường 2", province: 54, district: 759
	},
	{
		id: 29518, name: "Xã Long Hữu", province: 54, district: 759
	},
	{
		id: 29524, name: "Xã Dân Thành", province: 54, district: 759
	},
	{
		id: 29527, name: "Xã Trường Long Hòa", province: 54, district: 759
	},
	{
		id: 29539, name: "Xã Hiệp Thạnh", province: 54, district: 759
	},
	{
		id: 2200, name: "Phường Phan Thiết", province: 55, district: 670
	},
	{
		id: 2203, name: "Phường Minh Xuân", province: 55, district: 670
	},
	{
		id: 2206, name: "Phường Tân Quang", province: 55, district: 670
	},
	{
		id: 2209, name: "Xã Tràng Đà", province: 55, district: 670
	},
	{
		id: 2212, name: "Phường Nông Tiến", province: 55, district: 670
	},
	{
		id: 2215, name: "Phường Ỷ La", province: 55, district: 670
	},
	{
		id: 2216, name: "Phường Tân Hà", province: 55, district: 670
	},
	{
		id: 2218, name: "Phường Hưng Thành", province: 55, district: 670
	},
	{
		id: 2503, name: "Xã An Khang", province: 55, district: 670
	},
	{
		id: 2512, name: "Xã An Tường", province: 55, district: 670
	},
	{
		id: 2515, name: "Xã Lưỡng Vượng", province: 55, district: 670
	},
	{
		id: 2521, name: "Xã Thái Long", province: 55, district: 670
	},
	{
		id: 2524, name: "Xã Đội Cấn", province: 55, district: 670
	},
	{
		id: 2221, name: "Thị trấn Nà Hang", province: 55, district: 671
	},
	{
		id: 2227, name: "Xã Sinh Long", province: 55, district: 671
	},
	{
		id: 2230, name: "Xã Thượng Giáp", province: 55, district: 671
	},
	{
		id: 2239, name: "Xã Thượng Nông", province: 55, district: 671
	},
	{
		id: 2245, name: "Xã Côn Lôn", province: 55, district: 671
	},
	{
		id: 2248, name: "Xã Yên Hoa", province: 55, district: 671
	},
	{
		id: 2254, name: "Xã Hồng Thái", province: 55, district: 671
	},
	{
		id: 2260, name: "Xã Đà Vị", province: 55, district: 671
	},
	{
		id: 2263, name: "Xã Khau Tinh", province: 55, district: 671
	},
	{
		id: 2275, name: "Xã Sơn Phú", province: 55, district: 671
	},
	{
		id: 2281, name: "Xã Năng Khả", province: 55, district: 671
	},
	{
		id: 2284, name: "Xã Thanh Tương", province: 55, district: 671
	},
	{
		id: 2287, name: "Thị trấn Vĩnh Lộc", province: 55, district: 672
	},
	{
		id: 2299, name: "Xã Phúc Sơn", province: 55, district: 672
	},
	{
		id: 2302, name: "Xã Minh Quang", province: 55, district: 672
	},
	{
		id: 2305, name: "Xã Trung Hà", province: 55, district: 672
	},
	{
		id: 2308, name: "Xã Tân Mỹ", province: 55, district: 672
	},
	{
		id: 2311, name: "Xã Hà Lang", province: 55, district: 672
	},
	{
		id: 2314, name: "Xã Hùng Mỹ", province: 55, district: 672
	},
	{
		id: 2317, name: "Xã Yên Lập", province: 55, district: 672
	},
	{
		id: 2320, name: "Xã Tân An", province: 55, district: 672
	},
	{
		id: 2323, name: "Xã Bình Phú", province: 55, district: 672
	},
	{
		id: 2326, name: "Xã Xuân Quang", province: 55, district: 672
	},
	{
		id: 2329, name: "Xã Ngọc Hội", province: 55, district: 672
	},
	{
		id: 2332, name: "Xã Phú Bình", province: 55, district: 672
	},
	{
		id: 2335, name: "Xã Hòa Phú", province: 55, district: 672
	},
	{
		id: 2338, name: "Xã Phúc Thịnh", province: 55, district: 672
	},
	{
		id: 2341, name: "Xã Kiên Đài", province: 55, district: 672
	},
	{
		id: 2344, name: "Xã Tân Thịnh", province: 55, district: 672
	},
	{
		id: 2347, name: "Xã Trung Hòa", province: 55, district: 672
	},
	{
		id: 2350, name: "Xã Kim Bình", province: 55, district: 672
	},
	{
		id: 2353, name: "Xã Hòa An", province: 55, district: 672
	},
	{
		id: 2356, name: "Xã Vinh Quang", province: 55, district: 672
	},
	{
		id: 2359, name: "Xã Tri Phú", province: 55, district: 672
	},
	{
		id: 2362, name: "Xã Nhân Lý", province: 55, district: 672
	},
	{
		id: 2365, name: "Xã Yên Nguyên", province: 55, district: 672
	},
	{
		id: 2368, name: "Xã Linh Phú", province: 55, district: 672
	},
	{
		id: 2371, name: "Xã Bình Nhân", province: 55, district: 672
	},
	{
		id: 2374, name: "Thị trấn Tân Yên", province: 55, district: 673
	},
	{
		id: 2377, name: "Xã Yên Thuận", province: 55, district: 673
	},
	{
		id: 2380, name: "Xã Bạch Xa", province: 55, district: 673
	},
	{
		id: 2383, name: "Xã Minh Khương", province: 55, district: 673
	},
	{
		id: 2386, name: "Xã Yên Lâm", province: 55, district: 673
	},
	{
		id: 2389, name: "Xã Minh Dân", province: 55, district: 673
	},
	{
		id: 2392, name: "Xã Phù Lưu", province: 55, district: 673
	},
	{
		id: 2395, name: "Xã Minh Hương", province: 55, district: 673
	},
	{
		id: 2398, name: "Xã Yên Phú", province: 55, district: 673
	},
	{
		id: 2401, name: "Xã Tân Thành", province: 55, district: 673
	},
	{
		id: 2404, name: "Xã Bình Xa", province: 55, district: 673
	},
	{
		id: 2407, name: "Xã Thái Sơn", province: 55, district: 673
	},
	{
		id: 2410, name: "Xã Nhân Mục", province: 55, district: 673
	},
	{
		id: 2413, name: "Xã Thành Long", province: 55, district: 673
	},
	{
		id: 2416, name: "Xã Bằng Cốc", province: 55, district: 673
	},
	{
		id: 2419, name: "Xã Thái Hòa", province: 55, district: 673
	},
	{
		id: 2422, name: "Xã Đức Ninh", province: 55, district: 673
	},
	{
		id: 2425, name: "Xã Hùng Đức", province: 55, district: 673
	},
	{
		id: 2428, name: "Thị trấn Tân Bình", province: 55, district: 674
	},
	{
		id: 2431, name: "Xã Quí Quân", province: 55, district: 674
	},
	{
		id: 2434, name: "Xã Lực Hành", province: 55, district: 674
	},
	{
		id: 2437, name: "Xã Kiến Thiết", province: 55, district: 674
	},
	{
		id: 2440, name: "Xã Trung Minh", province: 55, district: 674
	},
	{
		id: 2443, name: "Xã Chiêu Yên", province: 55, district: 674
	},
	{
		id: 2446, name: "Xã Trung Trực", province: 55, district: 674
	},
	{
		id: 2449, name: "Xã Xuân Vân", province: 55, district: 674
	},
	{
		id: 2452, name: "Xã Phúc Ninh", province: 55, district: 674
	},
	{
		id: 2455, name: "Xã Hùng Lợi", province: 55, district: 674
	},
	{
		id: 2458, name: "Xã Trung Sơn", province: 55, district: 674
	},
	{
		id: 2461, name: "Xã Tân Tiến", province: 55, district: 674
	},
	{
		id: 2464, name: "Xã Tứ Quận", province: 55, district: 674
	},
	{
		id: 2467, name: "Xã Đạo Viện", province: 55, district: 674
	},
	{
		id: 2470, name: "Xã Tân Long", province: 55, district: 674
	},
	{
		id: 2473, name: "Xã Thắng Quân", province: 55, district: 674
	},
	{
		id: 2476, name: "Xã Kim Quan", province: 55, district: 674
	},
	{
		id: 2479, name: "Xã Lang Quán", province: 55, district: 674
	},
	{
		id: 2482, name: "Xã Phú Thịnh", province: 55, district: 674
	},
	{
		id: 2485, name: "Xã Công Đa", province: 55, district: 674
	},
	{
		id: 2488, name: "Xã Trung Môn", province: 55, district: 674
	},
	{
		id: 2491, name: "Xã Chân Sơn", province: 55, district: 674
	},
	{
		id: 2494, name: "Xã Thái Bình", province: 55, district: 674
	},
	{
		id: 2497, name: "Xã Kim Phú", province: 55, district: 674
	},
	{
		id: 2500, name: "Xã Tiến Bộ", province: 55, district: 674
	},
	{
		id: 2506, name: "Xã Mỹ Bằng", province: 55, district: 674
	},
	{
		id: 2509, name: "Xã Phú Lâm", province: 55, district: 674
	},
	{
		id: 2518, name: "Xã Hoàng Khai", province: 55, district: 674
	},
	{
		id: 2527, name: "Xã Nhữ Hán", province: 55, district: 674
	},
	{
		id: 2530, name: "Xã Nhữ Khê", province: 55, district: 674
	},
	{
		id: 2533, name: "Xã Đội Bình", province: 55, district: 674
	},
	{
		id: 2536, name: "Thị trấn Sơn Dương", province: 55, district: 675
	},
	{
		id: 2539, name: "Xã Trung Yên", province: 55, district: 675
	},
	{
		id: 2542, name: "Xã Minh Thanh", province: 55, district: 675
	},
	{
		id: 2545, name: "Xã Tân Trào", province: 55, district: 675
	},
	{
		id: 2548, name: "Xã Vĩnh Lợi", province: 55, district: 675
	},
	{
		id: 2551, name: "Xã Thượng Ấm", province: 55, district: 675
	},
	{
		id: 2554, name: "Xã Bình Yên", province: 55, district: 675
	},
	{
		id: 2557, name: "Xã Lương Thiện", province: 55, district: 675
	},
	{
		id: 2560, name: "Xã Tú Thịnh", province: 55, district: 675
	},
	{
		id: 2563, name: "Xã Cấp Tiến", province: 55, district: 675
	},
	{
		id: 2566, name: "Xã Hợp Thành", province: 55, district: 675
	},
	{
		id: 2569, name: "Xã Phúc Ứng", province: 55, district: 675
	},
	{
		id: 2572, name: "Xã Đông Thọ", province: 55, district: 675
	},
	{
		id: 2575, name: "Xã Kháng Nhật", province: 55, district: 675
	},
	{
		id: 2578, name: "Xã Hợp Hòa", province: 55, district: 675
	},
	{
		id: 2581, name: "Xã Thanh Phát", province: 55, district: 675
	},
	{
		id: 2584, name: "Xã Quyết Thắng", province: 55, district: 675
	},
	{
		id: 2587, name: "Xã Đồng Quý", province: 55, district: 675
	},
	{
		id: 2590, name: "Xã Tuân Lộ", province: 55, district: 675
	},
	{
		id: 2593, name: "Xã Vân Sơn", province: 55, district: 675
	},
	{
		id: 2596, name: "Xã Văn Phú", province: 55, district: 675
	},
	{
		id: 2599, name: "Xã Chi Thiết", province: 55, district: 675
	},
	{
		id: 2602, name: "Xã Đông Lợi", province: 55, district: 675
	},
	{
		id: 2605, name: "Xã Thiện Kế", province: 55, district: 675
	},
	{
		id: 2608, name: "Xã Hồng Lạc", province: 55, district: 675
	},
	{
		id: 2611, name: "Xã Phú Lương", province: 55, district: 675
	},
	{
		id: 2614, name: "Xã Ninh Lai", province: 55, district: 675
	},
	{
		id: 2617, name: "Xã Đại Phú", province: 55, district: 675
	},
	{
		id: 2620, name: "Xã Sơn Nam", province: 55, district: 675
	},
	{
		id: 2623, name: "Xã Hào Phú", province: 55, district: 675
	},
	{
		id: 2626, name: "Xã Tam Đa", province: 55, district: 675
	},
	{
		id: 2629, name: "Xã Sầm Dương", province: 55, district: 675
	},
	{
		id: 2632, name: "Xã Lâm Xuyên", province: 55, district: 675
	},
	{
		id: 2233, name: "Xã Phúc Yên", province: 55, district: 744
	},
	{
		id: 2242, name: "Xã Xuân Lập", province: 55, district: 744
	},
	{
		id: 2251, name: "Xã Khuôn Hà", province: 55, district: 744
	},
	{
		id: 2266, name: "Xã Lăng Can", province: 55, district: 744
	},
	{
		id: 2269, name: "Xã Thượng Lâm", province: 55, district: 744
	},
	{
		id: 2290, name: "Xã Bình An", province: 55, district: 744
	},
	{
		id: 2293, name: "Xã Hồng Quang", province: 55, district: 744
	},
	{
		id: 2296, name: "Xã Thổ Bình", province: 55, district: 744
	},
	{
		id: 30730, name: "Phường Vĩnh Thanh Vân", province: 56, district: 362
	},
	{
		id: 30733, name: "Phường Vĩnh Thanh", province: 56, district: 362
	},
	{
		id: 30736, name: "Phường Vĩnh Quang", province: 56, district: 362
	},
	{
		id: 30739, name: "Phường Vĩnh Hiệp", province: 56, district: 362
	},
	{
		id: 30742, name: "Phường Vĩnh Bảo", province: 56, district: 362
	},
	{
		id: 30745, name: "Phường Vĩnh Lạc", province: 56, district: 362
	},
	{
		id: 30748, name: "Phường An Hòa", province: 56, district: 362
	},
	{
		id: 30751, name: "Phường An Bình", province: 56, district: 362
	},
	{
		id: 30754, name: "Phường Rạch Sỏi", province: 56, district: 362
	},
	{
		id: 30757, name: "Phường Vĩnh Lợi", province: 56, district: 362
	},
	{
		id: 30760, name: "Phường Vĩnh Thông", province: 56, district: 362
	},
	{
		id: 30763, name: "Xã Phi Thông", province: 56, district: 362
	},
	{
		id: 30766, name: "Phường Tô Châu", province: 56, district: 363
	},
	{
		id: 30769, name: "Phường Đông Hồ", province: 56, district: 363
	},
	{
		id: 30772, name: "Phường Bình San", province: 56, district: 363
	},
	{
		id: 30775, name: "Phường Pháo Đài", province: 56, district: 363
	},
	{
		id: 30778, name: "Xã Mỹ Đức", province: 56, district: 363
	},
	{
		id: 30781, name: "Xã Tiên Hải", province: 56, district: 363
	},
	{
		id: 30784, name: "Xã Thuận Yên", province: 56, district: 363
	},
	{
		id: 30787, name: "Thị trấn Kiên Lương", province: 56, district: 364
	},
	{
		id: 30790, name: "Xã Kiên Bình", province: 56, district: 364
	},
	{
		id: 30802, name: "Xã Hòa Điền", province: 56, district: 364
	},
	{
		id: 30805, name: "Xã Dương Hòa", province: 56, district: 364
	},
	{
		id: 30808, name: "Xã Bình An", province: 56, district: 364
	},
	{
		id: 30809, name: "Xã Bình Trị", province: 56, district: 364
	},
	{
		id: 30811, name: "Xã Sơn Hải", province: 56, district: 364
	},
	{
		id: 30814, name: "Xã Hòn Nghệ", province: 56, district: 364
	},
	{
		id: 30817, name: "Thị trấn Hòn Đất", province: 56, district: 365
	},
	{
		id: 30820, name: "Thị trấn Sóc Sơn", province: 56, district: 365
	},
	{
		id: 30823, name: "Xã Bình Sơn", province: 56, district: 365
	},
	{
		id: 30826, name: "Xã Bình Giang", province: 56, district: 365
	},
	{
		id: 30828, name: "Xã Mỹ Thái", province: 56, district: 365
	},
	{
		id: 30829, name: "Xã Nam Thái Sơn", province: 56, district: 365
	},
	{
		id: 30832, name: "Xã Mỹ Hiệp Sơn", province: 56, district: 365
	},
	{
		id: 30835, name: "Xã Sơn Kiên", province: 56, district: 365
	},
	{
		id: 30836, name: "Xã Sơn Bình", province: 56, district: 365
	},
	{
		id: 30838, name: "Xã Mỹ Thuận", province: 56, district: 365
	},
	{
		id: 30840, name: "Xã Lình Huỳnh", province: 56, district: 365
	},
	{
		id: 30841, name: "Xã Thổ Sơn", province: 56, district: 365
	},
	{
		id: 30844, name: "Xã Mỹ Lâm", province: 56, district: 365
	},
	{
		id: 30847, name: "Xã Mỹ Phước", province: 56, district: 365
	},
	{
		id: 30850, name: "Thị trấn Tân Hiệp", province: 56, district: 366
	},
	{
		id: 30853, name: "Xã Tân Hội", province: 56, district: 366
	},
	{
		id: 30856, name: "Xã Tân Thành", province: 56, district: 366
	},
	{
		id: 30859, name: "Xã Tân Hiệp B", province: 56, district: 366
	},
	{
		id: 30860, name: "Xã Tân Hòa", province: 56, district: 366
	},
	{
		id: 30862, name: "Xã Thạnh Đông B", province: 56, district: 366
	},
	{
		id: 30865, name: "Xã Thạnh Đông", province: 56, district: 366
	},
	{
		id: 30868, name: "Xã Tân Hiệp A", province: 56, district: 366
	},
	{
		id: 30871, name: "Xã Tân An", province: 56, district: 366
	},
	{
		id: 30874, name: "Xã Thạnh Đông A", province: 56, district: 366
	},
	{
		id: 30877, name: "Xã Thạnh Trị", province: 56, district: 366
	},
	{
		id: 30880, name: "Thị trấn Minh Lương", province: 56, district: 367
	},
	{
		id: 30883, name: "Xã Mong Thọ A", province: 56, district: 367
	},
	{
		id: 30886, name: "Xã Mong Thọ B", province: 56, district: 367
	},
	{
		id: 30887, name: "Xã Mong Thọ", province: 56, district: 367
	},
	{
		id: 30889, name: "Xã Giục Tượng", province: 56, district: 367
	},
	{
		id: 30892, name: "Xã Vĩnh Hòa Hiệp", province: 56, district: 367
	},
	{
		id: 30893, name: "Xã Vĩnh Hoà Phú", province: 56, district: 367
	},
	{
		id: 30895, name: "Xã Minh Hòa", province: 56, district: 367
	},
	{
		id: 30898, name: "Xã Bình An", province: 56, district: 367
	},
	{
		id: 30901, name: "Xã Thạnh Lộc", province: 56, district: 367
	},
	{
		id: 30904, name: "Thị trấn Giồng Riềng", province: 56, district: 368
	},
	{
		id: 30907, name: "Xã Thạnh Hưng", province: 56, district: 368
	},
	{
		id: 30910, name: "Xã Thạnh Phước", province: 56, district: 368
	},
	{
		id: 30913, name: "Xã Thạnh Lộc", province: 56, district: 368
	},
	{
		id: 30916, name: "Xã Thạnh Hòa", province: 56, district: 368
	},
	{
		id: 30917, name: "Xã Thạnh Bình", province: 56, district: 368
	},
	{
		id: 30919, name: "Xã Bàn Thạch", province: 56, district: 368
	},
	{
		id: 30922, name: "Xã Bàn Tân Định", province: 56, district: 368
	},
	{
		id: 30925, name: "Xã Ngọc Thành", province: 56, district: 368
	},
	{
		id: 30928, name: "Xã Ngọc Chúc", province: 56, district: 368
	},
	{
		id: 30931, name: "Xã Ngọc Thuận", province: 56, district: 368
	},
	{
		id: 30934, name: "Xã Hòa Hưng", province: 56, district: 368
	},
	{
		id: 30937, name: "Xã Hoà Lợi", province: 56, district: 368
	},
	{
		id: 30940, name: "Xã Hoà An", province: 56, district: 368
	},
	{
		id: 30943, name: "Xã Long Thạnh", province: 56, district: 368
	},
	{
		id: 30946, name: "Xã Vĩnh Thạnh", province: 56, district: 368
	},
	{
		id: 30947, name: "Xã Vĩnh Phú", province: 56, district: 368
	},
	{
		id: 30949, name: "Xã Hòa Thuận", province: 56, district: 368
	},
	{
		id: 30950, name: "Xã Ngọc Hoà", province: 56, district: 368
	},
	{
		id: 30952, name: "Thị trấn Gò Quao", province: 56, district: 369
	},
	{
		id: 30955, name: "Xã Vĩnh Hòa Hưng Bắc", province: 56, district: 369
	},
	{
		id: 30958, name: "Xã Định Hòa", province: 56, district: 369
	},
	{
		id: 30961, name: "Xã Thới Quản", province: 56, district: 369
	},
	{
		id: 30964, name: "Xã Định An", province: 56, district: 369
	},
	{
		id: 30967, name: "Xã Thủy Liểu", province: 56, district: 369
	},
	{
		id: 30970, name: "Xã Vĩnh Hòa Hưng Nam", province: 56, district: 369
	},
	{
		id: 30973, name: "Xã Vĩnh Phước A", province: 56, district: 369
	},
	{
		id: 30976, name: "Xã Vĩnh Phước B", province: 56, district: 369
	},
	{
		id: 30979, name: "Xã Vĩnh Tuy", province: 56, district: 369
	},
	{
		id: 30982, name: "Xã Vĩnh Thắng", province: 56, district: 369
	},
	{
		id: 30985, name: "Thị trấn Thứ Ba", province: 56, district: 370
	},
	{
		id: 30988, name: "Xã Tây Yên", province: 56, district: 370
	},
	{
		id: 30991, name: "Xã Tây Yên A", province: 56, district: 370
	},
	{
		id: 30994, name: "Xã Nam Yên", province: 56, district: 370
	},
	{
		id: 30997, name: "Xã Hưng Yên", province: 56, district: 370
	},
	{
		id: 31000, name: "Xã Nam Thái", province: 56, district: 370
	},
	{
		id: 31003, name: "Xã Nam Thái A", province: 56, district: 370
	},
	{
		id: 31006, name: "Xã Đông Thái", province: 56, district: 370
	},
	{
		id: 31009, name: "Xã Đông Yên", province: 56, district: 370
	},
	{
		id: 31018, name: "Thị trấn Thứ Mười Một", province: 56, district: 371
	},
	{
		id: 31021, name: "Xã Thuận Hoà", province: 56, district: 371
	},
	{
		id: 31024, name: "Xã Đông Hòa", province: 56, district: 371
	},
	{
		id: 31030, name: "Xã Đông Thạnh", province: 56, district: 371
	},
	{
		id: 31031, name: "Xã Tân Thạnh", province: 56, district: 371
	},
	{
		id: 31033, name: "Xã Đông Hưng", province: 56, district: 371
	},
	{
		id: 31036, name: "Xã Đông Hưng A", province: 56, district: 371
	},
	{
		id: 31039, name: "Xã Đông Hưng B", province: 56, district: 371
	},
	{
		id: 31042, name: "Xã Vân Khánh", province: 56, district: 371
	},
	{
		id: 31045, name: "Xã Vân Khánh Đông", province: 56, district: 371
	},
	{
		id: 31048, name: "Xã Vân Khánh Tây", province: 56, district: 371
	},
	{
		id: 30164, name: "Xã Bình Minh", province: 56, district: 372
	},
	{
		id: 31051, name: "Thị trấn Vĩnh Thuận", province: 56, district: 372
	},
	{
		id: 31060, name: "Xã Vĩnh Bình Bắc", province: 56, district: 372
	},
	{
		id: 31063, name: "Xã Vĩnh Bình Nam", province: 56, district: 372
	},
	{
		id: 31069, name: "Xã Vĩnh Thuận", province: 56, district: 372
	},
	{
		id: 31072, name: "Xã Tân Thuận", province: 56, district: 372
	},
	{
		id: 31074, name: "Xã Phong Đông", province: 56, district: 372
	},
	{
		id: 31075, name: "Xã Vĩnh Phong", province: 56, district: 372
	},
	{
		id: 31078, name: "Thị trấn Dương Đông", province: 56, district: 373
	},
	{
		id: 31081, name: "Thị trấn An Thới", province: 56, district: 373
	},
	{
		id: 31084, name: "Xã Cửa Cạn", province: 56, district: 373
	},
	{
		id: 31087, name: "Xã Gành Dầu", province: 56, district: 373
	},
	{
		id: 31090, name: "Xã Cửa Dương", province: 56, district: 373
	},
	{
		id: 31093, name: "Xã Hàm Ninh", province: 56, district: 373
	},
	{
		id: 31096, name: "Xã Dương Tơ", province: 56, district: 373
	},
	{
		id: 31099, name: "Xã Hòn Thơm", province: 56, district: 373
	},
	{
		id: 31102, name: "Xã Bãi Thơm", province: 56, district: 373
	},
	{
		id: 31105, name: "Xã Thổ Châu", province: 56, district: 373
	},
	{
		id: 31108, name: "Xã Hòn Tre", province: 56, district: 374
	},
	{
		id: 31111, name: "Xã Lại Sơn", province: 56, district: 374
	},
	{
		id: 31114, name: "Xã An Sơn", province: 56, district: 374
	},
	{
		id: 31115, name: "Xã Nam Du", province: 56, district: 374
	},
	{
		id: 31012, name: "Xã Thạnh Yên", province: 56, district: 732
	},
	{
		id: 31015, name: "Xã Thạnh Yên A", province: 56, district: 732
	},
	{
		id: 31027, name: "Xã An Minh Bắc", province: 56, district: 732
	},
	{
		id: 31054, name: "Xã Vĩnh Hòa", province: 56, district: 732
	},
	{
		id: 31057, name: "Xã Hoà Chánh", province: 56, district: 732
	},
	{
		id: 31066, name: "Xã Minh Thuận", province: 56, district: 732
	},
	{
		id: 30791, name: "Xã Vĩnh Phú", province: 56, district: 733
	},
	{
		id: 30793, name: "Xã Vĩnh Điều", province: 56, district: 733
	},
	{
		id: 30796, name: "Xã Tân Khánh Hòa", province: 56, district: 733
	},
	{
		id: 30797, name: "Xã Phú Lợi", province: 56, district: 733
	},
	{
		id: 30799, name: "Xã Phú Mỹ", province: 56, district: 733
	},
	{
		id: 8707, name: "Phường Tích Sơn", province: 57, district: 685
	},
	{
		id: 8710, name: "Phường Liên Bảo", province: 57, district: 685
	},
	{
		id: 8713, name: "Phường Hội Hợp", province: 57, district: 685
	},
	{
		id: 8716, name: "Phường Đống Đa", province: 57, district: 685
	},
	{
		id: 8719, name: "Phường Ngô Quyền", province: 57, district: 685
	},
	{
		id: 8722, name: "Phường Đồng Tâm", province: 57, district: 685
	},
	{
		id: 8725, name: "Xã Định Trung", province: 57, district: 685
	},
	{
		id: 8728, name: "Phường Khai Quang", province: 57, district: 685
	},
	{
		id: 8731, name: "Xã Thanh Trù", province: 57, district: 685
	},
	{
		id: 8869, name: "Thị trấn Hợp Hòa", province: 57, district: 686
	},
	{
		id: 8872, name: "Xã Hoàng Hoa", province: 57, district: 686
	},
	{
		id: 8875, name: "Xã Đồng Tĩnh", province: 57, district: 686
	},
	{
		id: 8878, name: "Xã Kim Long", province: 57, district: 686
	},
	{
		id: 8881, name: "Xã Hướng Đạo", province: 57, district: 686
	},
	{
		id: 8884, name: "Xã Đạo Tú", province: 57, district: 686
	},
	{
		id: 8887, name: "Xã An Hòa", province: 57, district: 686
	},
	{
		id: 8890, name: "Xã Thanh Vân", province: 57, district: 686
	},
	{
		id: 8893, name: "Xã Duy Phiên", province: 57, district: 686
	},
	{
		id: 8896, name: "Xã Hoàng Đan", province: 57, district: 686
	},
	{
		id: 8899, name: "Xã Hoàng Lâu", province: 57, district: 686
	},
	{
		id: 8902, name: "Xã Vân Hội", province: 57, district: 686
	},
	{
		id: 8905, name: "Xã Hợp Thịnh", province: 57, district: 686
	},
	{
		id: 8761, name: "Thị trấn Lập Thạch", province: 57, district: 687
	},
	{
		id: 8764, name: "Xã Quang Sơn", province: 57, district: 687
	},
	{
		id: 8767, name: "Xã Ngọc Mỹ", province: 57, district: 687
	},
	{
		id: 8770, name: "Xã Hợp Lý", province: 57, district: 687
	},
	{
		id: 8785, name: "Xã Bắc Bình", province: 57, district: 687
	},
	{
		id: 8788, name: "Xã Thái Hòa", province: 57, district: 687
	},
	{
		id: 8789, name: "Thị trấn Hoa Sơn", province: 57, district: 687
	},
	{
		id: 8791, name: "Xã Liễn Sơn", province: 57, district: 687
	},
	{
		id: 8794, name: "Xã Xuân Hòa", province: 57, district: 687
	},
	{
		id: 8797, name: "Xã Vân Trục", province: 57, district: 687
	},
	{
		id: 8812, name: "Xã Liên Hòa", province: 57, district: 687
	},
	{
		id: 8815, name: "Xã Tử Du", province: 57, district: 687
	},
	{
		id: 8833, name: "Xã Bàn Giản", province: 57, district: 687
	},
	{
		id: 8836, name: "Xã Xuân Lôi", province: 57, district: 687
	},
	{
		id: 8839, name: "Xã Đồng Ích", province: 57, district: 687
	},
	{
		id: 8842, name: "Xã Tiên Lữ", province: 57, district: 687
	},
	{
		id: 8845, name: "Xã Văn Quán", province: 57, district: 687
	},
	{
		id: 8857, name: "Xã Đình Chu", province: 57, district: 687
	},
	{
		id: 8863, name: "Xã Triệu Đề", province: 57, district: 687
	},
	{
		id: 8866, name: "Xã Sơn Đông", province: 57, district: 687
	},
	{
		id: 9076, name: "Thị trấn Vĩnh Tường", province: 57, district: 688
	},
	{
		id: 9079, name: "Xã Kim Xá", province: 57, district: 688
	},
	{
		id: 9082, name: "Xã Yên Bình", province: 57, district: 688
	},
	{
		id: 9085, name: "Xã Chấn Hưng", province: 57, district: 688
	},
	{
		id: 9088, name: "Xã Nghĩa Hưng", province: 57, district: 688
	},
	{
		id: 9091, name: "Xã Yên Lập", province: 57, district: 688
	},
	{
		id: 9094, name: "Xã Việt Xuân", province: 57, district: 688
	},
	{
		id: 9097, name: "Xã Bồ Sao", province: 57, district: 688
	},
	{
		id: 9100, name: "Xã Đại Đồng", province: 57, district: 688
	},
	{
		id: 9103, name: "Xã Tân Tiến", province: 57, district: 688
	},
	{
		id: 9106, name: "Xã Lũng Hoà", province: 57, district: 688
	},
	{
		id: 9109, name: "Xã Cao Đại", province: 57, district: 688
	},
	{
		id: 9112, name: "Thị trấn Thổ Tang", province: 57, district: 688
	},
	{
		id: 9115, name: "Xã Vĩnh Sơn", province: 57, district: 688
	},
	{
		id: 9118, name: "Xã Bình Dương", province: 57, district: 688
	},
	{
		id: 9121, name: "Xã Tân Cương", province: 57, district: 688
	},
	{
		id: 9124, name: "Xã Phú Thịnh", province: 57, district: 688
	},
	{
		id: 9127, name: "Xã Thượng Trưng", province: 57, district: 688
	},
	{
		id: 9130, name: "Xã Vũ Di", province: 57, district: 688
	},
	{
		id: 9133, name: "Xã Lý Nhân", province: 57, district: 688
	},
	{
		id: 9136, name: "Xã Tuân Chính", province: 57, district: 688
	},
	{
		id: 9139, name: "Xã Vân Xuân", province: 57, district: 688
	},
	{
		id: 9142, name: "Xã Tam Phúc", province: 57, district: 688
	},
	{
		id: 9145, name: "Thị trấn Tứ Trưng", province: 57, district: 688
	},
	{
		id: 9148, name: "Xã Ngũ Kiên", province: 57, district: 688
	},
	{
		id: 9151, name: "Xã An Tường", province: 57, district: 688
	},
	{
		id: 9154, name: "Xã Vĩnh Thịnh", province: 57, district: 688
	},
	{
		id: 9157, name: "Xã Phú Đa", province: 57, district: 688
	},
	{
		id: 9160, name: "Xã Vĩnh Ninh", province: 57, district: 688
	},
	{
		id: 9025, name: "Thị trấn Yên Lạc", province: 57, district: 689
	},
	{
		id: 9028, name: "Xã Đồng Cương", province: 57, district: 689
	},
	{
		id: 9031, name: "Xã Đồng Văn", province: 57, district: 689
	},
	{
		id: 9034, name: "Xã Bình Định", province: 57, district: 689
	},
	{
		id: 9037, name: "Xã Trung Nguyên", province: 57, district: 689
	},
	{
		id: 9040, name: "Xã Tề Lỗ", province: 57, district: 689
	},
	{
		id: 9043, name: "Xã Tam Hồng", province: 57, district: 689
	},
	{
		id: 9046, name: "Xã Yên Đồng", province: 57, district: 689
	},
	{
		id: 9049, name: "Xã Văn Tiến", province: 57, district: 689
	},
	{
		id: 9052, name: "Xã Nguyệt Đức", province: 57, district: 689
	},
	{
		id: 9055, name: "Xã Yên Phương", province: 57, district: 689
	},
	{
		id: 9058, name: "Xã Hồng Phương", province: 57, district: 689
	},
	{
		id: 9061, name: "Xã Trung Kiên", province: 57, district: 689
	},
	{
		id: 9064, name: "Xã Liên Châu", province: 57, district: 689
	},
	{
		id: 9067, name: "Xã Đại Tự", province: 57, district: 689
	},
	{
		id: 9070, name: "Xã Hồng Châu", province: 57, district: 689
	},
	{
		id: 9073, name: "Xã Trung Hà", province: 57, district: 689
	},
	{
		id: 8935, name: "Thị trấn Hương Canh", province: 57, district: 690
	},
	{
		id: 8936, name: "Thị trấn Gia Khánh", province: 57, district: 690
	},
	{
		id: 8938, name: "Xã Trung Mỹ", province: 57, district: 690
	},
	{
		id: 8944, name: "Xã Bá Hiến", province: 57, district: 690
	},
	{
		id: 8947, name: "Xã Thiện Kế", province: 57, district: 690
	},
	{
		id: 8950, name: "Xã Hương Sơn", province: 57, district: 690
	},
	{
		id: 8953, name: "Xã Tam Hợp", province: 57, district: 690
	},
	{
		id: 8956, name: "Xã Quất Lưu", province: 57, district: 690
	},
	{
		id: 8959, name: "Xã Sơn Lôi", province: 57, district: 690
	},
	{
		id: 8962, name: "Xã Đạo Đức", province: 57, district: 690
	},
	{
		id: 8965, name: "Xã Tân Phong", province: 57, district: 690
	},
	{
		id: 8968, name: "Thị trấn Thanh Lãng", province: 57, district: 690
	},
	{
		id: 8971, name: "Xã Phú Xuân", province: 57, district: 690
	},
	{
		id: 8734, name: "Phường Trưng Trắc", province: 57, district: 692
	},
	{
		id: 8737, name: "Phường Hùng Vương", province: 57, district: 692
	},
	{
		id: 8740, name: "Phường Trưng Nhị", province: 57, district: 692
	},
	{
		id: 8743, name: "Phường Phúc Thắng", province: 57, district: 692
	},
	{
		id: 8746, name: "Phường Xuân Hoà", province: 57, district: 692
	},
	{
		id: 8747, name: "Phường Đồng Xuân", province: 57, district: 692
	},
	{
		id: 8749, name: "Xã Ngọc Thanh", province: 57, district: 692
	},
	{
		id: 8752, name: "Xã Cao Minh", province: 57, district: 692
	},
	{
		id: 8755, name: "Xã Nam Viêm", province: 57, district: 692
	},
	{
		id: 8758, name: "Xã Tiền Châu", province: 57, district: 692
	},
	{
		id: 8908, name: "Thị trấn Tam Đảo", province: 57, district: 693
	},
	{
		id: 8911, name: "Xã Hợp Châu", province: 57, district: 693
	},
	{
		id: 8914, name: "Xã Đạo Trù", province: 57, district: 693
	},
	{
		id: 8917, name: "Xã Yên Dương", province: 57, district: 693
	},
	{
		id: 8920, name: "Xã Bồ Lý", province: 57, district: 693
	},
	{
		id: 8923, name: "Xã Đại Đình", province: 57, district: 693
	},
	{
		id: 8926, name: "Xã Tam Quan", province: 57, district: 693
	},
	{
		id: 8929, name: "Xã Hồ Sơn", province: 57, district: 693
	},
	{
		id: 8932, name: "Xã Minh Quang", province: 57, district: 693
	},
	{
		id: 8773, name: "Xã Lãng Công", province: 57, district: 735
	},
	{
		id: 8776, name: "Xã Quang Yên", province: 57, district: 735
	},
	{
		id: 8779, name: "Xã Bạch Lưu", province: 57, district: 735
	},
	{
		id: 8782, name: "Xã Hải Lựu", province: 57, district: 735
	},
	{
		id: 8800, name: "Xã Đồng Quế", province: 57, district: 735
	},
	{
		id: 8803, name: "Xã Nhân Đạo", province: 57, district: 735
	},
	{
		id: 8806, name: "Xã Đôn Nhân", province: 57, district: 735
	},
	{
		id: 8809, name: "Xã Phương Khoan", province: 57, district: 735
	},
	{
		id: 8818, name: "Xã Tân Lập", province: 57, district: 735
	},
	{
		id: 8821, name: "Xã Nhạo Sơn", province: 57, district: 735
	},
	{
		id: 8824, name: "Thị trấn Tam Sơn", province: 57, district: 735
	},
	{
		id: 8827, name: "Xã Như Thụy", province: 57, district: 735
	},
	{
		id: 8830, name: "Xã Yên Thạch", province: 57, district: 735
	},
	{
		id: 8848, name: "Xã Đồng Thịnh", province: 57, district: 735
	},
	{
		id: 8851, name: "Xã Tứ Yên", province: 57, district: 735
	},
	{
		id: 8854, name: "Xã Đức Bác", province: 57, district: 735
	},
	{
		id: 8860, name: "Xã Cao Phong", province: 57, district: 735
	},
	{
		id: 26506, name: "Phường 1", province: 58, district: 77
	},
	{
		id: 26508, name: "Phường Thắng Tam", province: 58, district: 77
	},
	{
		id: 26509, name: "Phường 2", province: 58, district: 77
	},
	{
		id: 26512, name: "Phường 3", province: 58, district: 77
	},
	{
		id: 26515, name: "Phường 4", province: 58, district: 77
	},
	{
		id: 26518, name: "Phường 5", province: 58, district: 77
	},
	{
		id: 26521, name: "Phường 6", province: 58, district: 77
	},
	{
		id: 26524, name: "Phường 7", province: 58, district: 77
	},
	{
		id: 26526, name: "Phường Nguyễn An Ninh", province: 58, district: 77
	},
	{
		id: 26527, name: "Phường 8", province: 58, district: 77
	},
	{
		id: 26530, name: "Phường 9", province: 58, district: 77
	},
	{
		id: 26533, name: "Phường Thắng Nhất", province: 58, district: 77
	},
	{
		id: 26535, name: "Phường Rạch Dừa", province: 58, district: 77
	},
	{
		id: 26536, name: "Phường 10", province: 58, district: 77
	},
	{
		id: 26539, name: "Phường 11", province: 58, district: 77
	},
	{
		id: 26542, name: "Phường 12", province: 58, district: 77
	},
	{
		id: 26545, name: "Xã Long Sơn", province: 58, district: 77
	},
	{
		id: 26548, name: "Phường Phước Hưng", province: 58, district: 78
	},
	{
		id: 26551, name: "Phường Phước Hiệp", province: 58, district: 78
	},
	{
		id: 26554, name: "Phường Phước Nguyên", province: 58, district: 78
	},
	{
		id: 26557, name: "Phường Long Toàn", province: 58, district: 78
	},
	{
		id: 26558, name: "Phường Long Tâm", province: 58, district: 78
	},
	{
		id: 26560, name: "Phường Phước Trung", province: 58, district: 78
	},
	{
		id: 26563, name: "Phường Long Hương", province: 58, district: 78
	},
	{
		id: 26566, name: "Phường Kim Dinh", province: 58, district: 78
	},
	{
		id: 26567, name: "Xã Tân Hưng", province: 58, district: 78
	},
	{
		id: 26569, name: "Xã Long Phước", province: 58, district: 78
	},
	{
		id: 26572, name: "Xã Hoà Long", province: 58, district: 78
	},
	{
		id: 26620, name: "Thị trấn Phước Bửu", province: 58, district: 79
	},
	{
		id: 26623, name: "Xã Phước Thuận", province: 58, district: 79
	},
	{
		id: 26626, name: "Xã Phước Tân", province: 58, district: 79
	},
	{
		id: 26629, name: "Xã Xuyên Mộc", province: 58, district: 79
	},
	{
		id: 26632, name: "Xã Bông Trang", province: 58, district: 79
	},
	{
		id: 26635, name: "Xã Tân Lâm", province: 58, district: 79
	},
	{
		id: 26638, name: "Xã Bàu Lâm", province: 58, district: 79
	},
	{
		id: 26641, name: "Xã Hòa Bình", province: 58, district: 79
	},
	{
		id: 26644, name: "Xã Hòa Hưng", province: 58, district: 79
	},
	{
		id: 26647, name: "Xã Hòa Hiệp", province: 58, district: 79
	},
	{
		id: 26650, name: "Xã Hòa Hội", province: 58, district: 79
	},
	{
		id: 26653, name: "Xã Bưng Riềng", province: 58, district: 79
	},
	{
		id: 26656, name: "Xã Bình Châu", province: 58, district: 79
	},
	{
		id: 26659, name: "Thị trấn Long Điền", province: 58, district: 80
	},
	{
		id: 26662, name: "Thị trấn Long Hải", province: 58, district: 80
	},
	{
		id: 26665, name: "Xã An Ngãi", province: 58, district: 80
	},
	{
		id: 26668, name: "Xã Tam Phước", province: 58, district: 80
	},
	{
		id: 26671, name: "Xã An Nhứt", province: 58, district: 80
	},
	{
		id: 26674, name: "Xã Phước Tỉnh", province: 58, district: 80
	},
	{
		id: 26677, name: "Xã Phước Hưng", province: 58, district: 80
	},
	{
		id: 26704, name: "Thị trấn Phú Mỹ", province: 58, district: 82
	},
	{
		id: 26707, name: "Xã Tân Hoà", province: 58, district: 82
	},
	{
		id: 26710, name: "Xã Tân Hải", province: 58, district: 82
	},
	{
		id: 26713, name: "Xã Phước Hoà", province: 58, district: 82
	},
	{
		id: 26716, name: "Xã Tân Phước", province: 58, district: 82
	},
	{
		id: 26719, name: "Xã Mỹ Xuân", province: 58, district: 82
	},
	{
		id: 26722, name: "Xã Sông Xoài", province: 58, district: 82
	},
	{
		id: 26725, name: "Xã Hắc Dịch", province: 58, district: 82
	},
	{
		id: 26728, name: "Xã Châu Pha", province: 58, district: 82
	},
	{
		id: 26731, name: "Xã Tóc Tiên", province: 58, district: 82
	},
	{
		id: 26574, name: "Xã Bàu Chinh", province: 58, district: 83
	},
	{
		id: 26575, name: "Thị trấn Ngãi Giao", province: 58, district: 83
	},
	{
		id: 26578, name: "Xã Bình Ba", province: 58, district: 83
	},
	{
		id: 26581, name: "Xã Suối Nghệ", province: 58, district: 83
	},
	{
		id: 26584, name: "Xã Xuân Sơn", province: 58, district: 83
	},
	{
		id: 26587, name: "Xã Sơn Bình", province: 58, district: 83
	},
	{
		id: 26590, name: "Xã Bình Giã", province: 58, district: 83
	},
	{
		id: 26593, name: "Xã Bình Trung", province: 58, district: 83
	},
	{
		id: 26596, name: "Xã Xà Bang", province: 58, district: 83
	},
	{
		id: 26599, name: "Xã Cù Bị", province: 58, district: 83
	},
	{
		id: 26602, name: "Xã Láng Lớn", province: 58, district: 83
	},
	{
		id: 26605, name: "Xã Quảng Thành", province: 58, district: 83
	},
	{
		id: 26608, name: "Xã Kim Long", province: 58, district: 83
	},
	{
		id: 26611, name: "Xã Suối Rao", province: 58, district: 83
	},
	{
		id: 26614, name: "Xã Đá Bạc", province: 58, district: 83
	},
	{
		id: 26617, name: "Xã Nghĩa Thành", province: 58, district: 83
	},
	{
		id: 26680, name: "Thị trấn Đất Đỏ", province: 58, district: 84
	},
	{
		id: 26683, name: "Xã Phước Long Thọ", province: 58, district: 84
	},
	{
		id: 26686, name: "Xã Phước Hội", province: 58, district: 84
	},
	{
		id: 26689, name: "Xã Long Mỹ", province: 58, district: 84
	},
	{
		id: 26692, name: "Thị trấn Phước Hải", province: 58, district: 84
	},
	{
		id: 26695, name: "Xã Long Tân", province: 58, district: 84
	},
	{
		id: 26698, name: "Xã Láng Dài", province: 58, district: 84
	},
	{
		id: 26701, name: "Xã Lộc An", province: 58, district: 84
	},
	{
		id: 556677, name: "Thị trấn Côn Đảo", province: 58, district: 754
	},
	{
		id: 4249, name: "Phường Yên Thịnh", province: 59, district: 676
	},
	{
		id: 4252, name: "Phường Yên Ninh", province: 59, district: 676
	},
	{
		id: 4255, name: "Phường Minh Tân", province: 59, district: 676
	},
	{
		id: 4258, name: "Phường Nguyễn Thái Học", province: 59, district: 676
	},
	{
		id: 4261, name: "Phường Đồng Tâm", province: 59, district: 676
	},
	{
		id: 4264, name: "Phường Nguyễn Phúc", province: 59, district: 676
	},
	{
		id: 4267, name: "Phường Hồng Hà", province: 59, district: 676
	},
	{
		id: 4270, name: "Xã Minh Bảo", province: 59, district: 676
	},
	{
		id: 4273, name: "Phường Nam Cường", province: 59, district: 676
	},
	{
		id: 4276, name: "Xã Tuy Lộc", province: 59, district: 676
	},
	{
		id: 4279, name: "Xã Tân Thịnh", province: 59, district: 676
	},
	{
		id: 4540, name: "Xã Âu Lâu", province: 59, district: 676
	},
	{
		id: 4543, name: "Xã Giới Phiên", province: 59, district: 676
	},
	{
		id: 4546, name: "Phường Hợp Minh", province: 59, district: 676
	},
	{
		id: 4549, name: "Xã Văn Tiến", province: 59, district: 676
	},
	{
		id: 4552, name: "Xã Phúc Lộc", province: 59, district: 676
	},
	{
		id: 4558, name: "Xã Văn Phú", province: 59, district: 676
	},
	{
		id: 4282, name: "Phường Pú Trạng", province: 59, district: 677
	},
	{
		id: 4285, name: "Phường Trung Tâm", province: 59, district: 677
	},
	{
		id: 4288, name: "Phường Tân An", province: 59, district: 677
	},
	{
		id: 4291, name: "Phường Cầu Thia", province: 59, district: 677
	},
	{
		id: 4294, name: "Xã Nghĩa Lợi", province: 59, district: 677
	},
	{
		id: 4297, name: "Xã Nghĩa Phúc", province: 59, district: 677
	},
	{
		id: 4300, name: "Xã Nghĩa An", province: 59, district: 677
	},
	{
		id: 4375, name: "Thị trấn Mậu A", province: 59, district: 678
	},
	{
		id: 4378, name: "Xã Lang Thíp", province: 59, district: 678
	},
	{
		id: 4381, name: "Xã Lâm Giang", province: 59, district: 678
	},
	{
		id: 4384, name: "Xã Châu Quế Thượng", province: 59, district: 678
	},
	{
		id: 4387, name: "Xã Châu Quế Hạ", province: 59, district: 678
	},
	{
		id: 4390, name: "Xã An Bình", province: 59, district: 678
	},
	{
		id: 4393, name: "Xã Quang Minh", province: 59, district: 678
	},
	{
		id: 4396, name: "Xã Đông An", province: 59, district: 678
	},
	{
		id: 4399, name: "Xã Đông Cuông", province: 59, district: 678
	},
	{
		id: 4402, name: "Xã Phong Dụ Hạ", province: 59, district: 678
	},
	{
		id: 4405, name: "Xã Mậu Đông", province: 59, district: 678
	},
	{
		id: 4408, name: "Xã Ngòi A", province: 59, district: 678
	},
	{
		id: 4411, name: "Xã Xuân Tầm", province: 59, district: 678
	},
	{
		id: 4414, name: "Xã Tân Hợp", province: 59, district: 678
	},
	{
		id: 4417, name: "Xã An Thịnh", province: 59, district: 678
	},
	{
		id: 4420, name: "Xã Yên Thái", province: 59, district: 678
	},
	{
		id: 4423, name: "Xã Phong Dụ Thượng", province: 59, district: 678
	},
	{
		id: 4426, name: "Xã Yên Hợp", province: 59, district: 678
	},
	{
		id: 4429, name: "Xã Đại Sơn", province: 59, district: 678
	},
	{
		id: 4432, name: "Xã Yên Hưng", province: 59, district: 678
	},
	{
		id: 4435, name: "Xã Đại Phác", province: 59, district: 678
	},
	{
		id: 4438, name: "Xã Yên Phú", province: 59, district: 678
	},
	{
		id: 4441, name: "Xã Xuân Ái", province: 59, district: 678
	},
	{
		id: 4444, name: "Xã Hoàng Thắng", province: 59, district: 678
	},
	{
		id: 4447, name: "Xã Viễn Sơn", province: 59, district: 678
	},
	{
		id: 4450, name: "Xã Mỏ Vàng", province: 59, district: 678
	},
	{
		id: 4453, name: "Xã Nà Hẩu", province: 59, district: 678
	},
	{
		id: 4555, name: "Xã Văn Lãng", province: 59, district: 679
	},
	{
		id: 4714, name: "Thị trấn Yên Bình", province: 59, district: 679
	},
	{
		id: 4717, name: "Thị trấn Thác Bà", province: 59, district: 679
	},
	{
		id: 4720, name: "Xã Xuân Long", province: 59, district: 679
	},
	{
		id: 4723, name: "Xã Tích Cốc", province: 59, district: 679
	},
	{
		id: 4726, name: "Xã Cảm Nhân", province: 59, district: 679
	},
	{
		id: 4729, name: "Xã Ngọc Chấn", province: 59, district: 679
	},
	{
		id: 4732, name: "Xã Tân Nguyên", province: 59, district: 679
	},
	{
		id: 4735, name: "Xã Phúc Ninh", province: 59, district: 679
	},
	{
		id: 4738, name: "Xã Bảo Ái", province: 59, district: 679
	},
	{
		id: 4741, name: "Xã Mỹ Gia", province: 59, district: 679
	},
	{
		id: 4744, name: "Xã Xuân Lai", province: 59, district: 679
	},
	{
		id: 4747, name: "Xã Mông Sơn", province: 59, district: 679
	},
	{
		id: 4750, name: "Xã Cẩm Ân", province: 59, district: 679
	},
	{
		id: 4753, name: "Xã Yên Thành", province: 59, district: 679
	},
	{
		id: 4756, name: "Xã Tân Hương", province: 59, district: 679
	},
	{
		id: 4759, name: "Xã Phúc An", province: 59, district: 679
	},
	{
		id: 4762, name: "Xã Bạch Hà", province: 59, district: 679
	},
	{
		id: 4765, name: "Xã Vũ Linh", province: 59, district: 679
	},
	{
		id: 4768, name: "Xã Đại Đồng", province: 59, district: 679
	},
	{
		id: 4771, name: "Xã Vĩnh Kiên", province: 59, district: 679
	},
	{
		id: 4774, name: "Xã Yên Bình", province: 59, district: 679
	},
	{
		id: 4777, name: "Xã Thịnh Hưng", province: 59, district: 679
	},
	{
		id: 4780, name: "Xã Hán Đà", province: 59, district: 679
	},
	{
		id: 4783, name: "Xã Phú Thịnh", province: 59, district: 679
	},
	{
		id: 4786, name: "Xã Đại Minh", province: 59, district: 679
	},
	{
		id: 4456, name: "Thị trấn Mù Cang Chải", province: 59, district: 680
	},
	{
		id: 4459, name: "Xã Hồ Bốn", province: 59, district: 680
	},
	{
		id: 4462, name: "Xã Nậm Có", province: 59, district: 680
	},
	{
		id: 4465, name: "Xã Khao Mang", province: 59, district: 680
	},
	{
		id: 4468, name: "Xã Mồ Dề", province: 59, district: 680
	},
	{
		id: 4471, name: "Xã Chế Cu Nha", province: 59, district: 680
	},
	{
		id: 4474, name: "Xã Lao Chải", province: 59, district: 680
	},
	{
		id: 4477, name: "Xã Kim Nọi", province: 59, district: 680
	},
	{
		id: 4480, name: "Xã Cao Phạ", province: 59, district: 680
	},
	{
		id: 4483, name: "Xã La Pán Tẩn", province: 59, district: 680
	},
	{
		id: 4486, name: "Xã Dế Xu Phình", province: 59, district: 680
	},
	{
		id: 4489, name: "Xã Chế Tạo", province: 59, district: 680
	},
	{
		id: 4492, name: "Xã Púng Luông", province: 59, district: 680
	},
	{
		id: 4495, name: "Xã Nậm Khắt", province: 59, district: 680
	},
	{
		id: 4621, name: "Thị trấn Nông Trường Liên Sơn", province: 59, district: 681
	},
	{
		id: 4624, name: "Thị trấn Nông Trường Nghĩa Lộ", province: 59, district: 681
	},
	{
		id: 4627, name: "Thị trấn Nông Trường Trần Phú", province: 59, district: 681
	},
	{
		id: 4630, name: "Xã Tú Lệ", province: 59, district: 681
	},
	{
		id: 4633, name: "Xã Nậm Búng", province: 59, district: 681
	},
	{
		id: 4636, name: "Xã Gia Hội", province: 59, district: 681
	},
	{
		id: 4639, name: "Xã Sùng Đô", province: 59, district: 681
	},
	{
		id: 4642, name: "Xã Nậm Mười", province: 59, district: 681
	},
	{
		id: 4645, name: "Xã An Lương", province: 59, district: 681
	},
	{
		id: 4648, name: "Xã Nậm Lành", province: 59, district: 681
	},
	{
		id: 4651, name: "Xã Sơn Lương", province: 59, district: 681
	},
	{
		id: 4654, name: "Xã Suối Quyền", province: 59, district: 681
	},
	{
		id: 4657, name: "Xã Suối Giàng", province: 59, district: 681
	},
	{
		id: 4660, name: "Xã Sơn A", province: 59, district: 681
	},
	{
		id: 4663, name: "Xã Phù Nham", province: 59, district: 681
	},
	{
		id: 4666, name: "Xã Nghĩa Sơn", province: 59, district: 681
	},
	{
		id: 4669, name: "Xã Suối Bu", province: 59, district: 681
	},
	{
		id: 4672, name: "Xã Sơn Thịnh", province: 59, district: 681
	},
	{
		id: 4675, name: "Xã Thanh Lương", province: 59, district: 681
	},
	{
		id: 4678, name: "Xã Hạnh Sơn", province: 59, district: 681
	},
	{
		id: 4681, name: "Xã Phúc Sơn", province: 59, district: 681
	},
	{
		id: 4684, name: "Xã Thạch Lương", province: 59, district: 681
	},
	{
		id: 4687, name: "Xã Đại Lịch", province: 59, district: 681
	},
	{
		id: 4690, name: "Xã Đồng Khê", province: 59, district: 681
	},
	{
		id: 4693, name: "Xã Cát Thịnh", province: 59, district: 681
	},
	{
		id: 4696, name: "Xã Tân Thịnh", province: 59, district: 681
	},
	{
		id: 4699, name: "Xã Chấn Thịnh", province: 59, district: 681
	},
	{
		id: 4702, name: "Xã Bình Thuận", province: 59, district: 681
	},
	{
		id: 4705, name: "Xã Thượng Bằng La", province: 59, district: 681
	},
	{
		id: 4708, name: "Xã Minh An", province: 59, district: 681
	},
	{
		id: 4711, name: "Xã Nghĩa Tâm", province: 59, district: 681
	},
	{
		id: 4498, name: "Thị trấn Cổ Phúc", province: 59, district: 682
	},
	{
		id: 4501, name: "Xã Tân Đồng", province: 59, district: 682
	},
	{
		id: 4504, name: "Xã Báo Đáp", province: 59, district: 682
	},
	{
		id: 4507, name: "Xã Đào Thịnh", province: 59, district: 682
	},
	{
		id: 4510, name: "Xã Việt Thành", province: 59, district: 682
	},
	{
		id: 4513, name: "Xã Hòa Cuông", province: 59, district: 682
	},
	{
		id: 4516, name: "Xã Minh Quán", province: 59, district: 682
	},
	{
		id: 4519, name: "Xã Quy Mông", province: 59, district: 682
	},
	{
		id: 4522, name: "Xã Cường Thịnh", province: 59, district: 682
	},
	{
		id: 4525, name: "Xã Kiên Thành", province: 59, district: 682
	},
	{
		id: 4528, name: "Xã Nga Quán", province: 59, district: 682
	},
	{
		id: 4531, name: "Xã Y Can", province: 59, district: 682
	},
	{
		id: 4534, name: "Xã Minh Tiến", province: 59, district: 682
	},
	{
		id: 4537, name: "Xã Lương Thịnh", province: 59, district: 682
	},
	{
		id: 4561, name: "Xã Bảo Hưng", province: 59, district: 682
	},
	{
		id: 4564, name: "Xã Việt Cường", province: 59, district: 682
	},
	{
		id: 4567, name: "Xã Minh Quân", province: 59, district: 682
	},
	{
		id: 4570, name: "Xã Hồng Ca", province: 59, district: 682
	},
	{
		id: 4573, name: "Xã Hưng Thịnh", province: 59, district: 682
	},
	{
		id: 4576, name: "Xã Hưng Khánh", province: 59, district: 682
	},
	{
		id: 4579, name: "Xã Việt Hồng", province: 59, district: 682
	},
	{
		id: 4582, name: "Xã Vân Hội", province: 59, district: 682
	},
	{
		id: 4585, name: "Thị trấn Trạm Tấu", province: 59, district: 683
	},
	{
		id: 4588, name: "Xã Túc Đán", province: 59, district: 683
	},
	{
		id: 4591, name: "Xã Pá Lau", province: 59, district: 683
	},
	{
		id: 4594, name: "Xã Xà Hồ", province: 59, district: 683
	},
	{
		id: 4597, name: "Xã Phình Hồ", province: 59, district: 683
	},
	{
		id: 4600, name: "Xã Trạm Tấu", province: 59, district: 683
	},
	{
		id: 4603, name: "Xã Tà Si Láng", province: 59, district: 683
	},
	{
		id: 4606, name: "Xã Pá Hu", province: 59, district: 683
	},
	{
		id: 4609, name: "Xã Làng Nhì", province: 59, district: 683
	},
	{
		id: 4612, name: "Xã Bản Công", province: 59, district: 683
	},
	{
		id: 4615, name: "Xã Bản Mù", province: 59, district: 683
	},
	{
		id: 4618, name: "Xã Hát Lừu", province: 59, district: 683
	},
	{
		id: 4303, name: "Thị trấn Yên Thế", province: 59, district: 684
	},
	{
		id: 4306, name: "Xã Tân Phượng", province: 59, district: 684
	},
	{
		id: 4309, name: "Xã Lâm Thượng", province: 59, district: 684
	},
	{
		id: 4312, name: "Xã Khánh Thiện", province: 59, district: 684
	},
	{
		id: 4315, name: "Xã Minh Chuẩn", province: 59, district: 684
	},
	{
		id: 4318, name: "Xã Mai Sơn", province: 59, district: 684
	},
	{
		id: 4321, name: "Xã Khai Trung", province: 59, district: 684
	},
	{
		id: 4324, name: "Xã Mường Lai", province: 59, district: 684
	},
	{
		id: 4327, name: "Xã An Lạc", province: 59, district: 684
	},
	{
		id: 4330, name: "Xã Minh Xuân", province: 59, district: 684
	},
	{
		id: 4333, name: "Xã Tô Mậu", province: 59, district: 684
	},
	{
		id: 4336, name: "Xã Tân Lĩnh", province: 59, district: 684
	},
	{
		id: 4339, name: "Xã Yên Thắng", province: 59, district: 684
	},
	{
		id: 4342, name: "Xã Khánh Hoà", province: 59, district: 684
	},
	{
		id: 4345, name: "Xã Vĩnh Lạc", province: 59, district: 684
	},
	{
		id: 4348, name: "Xã Liễu Đô", province: 59, district: 684
	},
	{
		id: 4351, name: "Xã Động Quan", province: 59, district: 684
	},
	{
		id: 4354, name: "Xã Tân Lập", province: 59, district: 684
	},
	{
		id: 4357, name: "Xã Minh Tiến", province: 59, district: 684
	},
	{
		id: 4360, name: "Xã Trúc Lâu", province: 59, district: 684
	},
	{
		id: 4363, name: "Xã Phúc Lợi", province: 59, district: 684
	},
	{
		id: 4366, name: "Xã Phan Thanh", province: 59, district: 684
	},
	{
		id: 4369, name: "Xã An Phú", province: 59, district: 684
	},
	{
		id: 4372, name: "Xã Trung Tâm", province: 59, district: 684
	},
	{
		id: 29542, name: "Phường 9", province: 60, district: 35
	},
	{
		id: 29545, name: "Phường 5", province: 60, district: 35
	},
	{
		id: 29548, name: "Phường 1", province: 60, district: 35
	},
	{
		id: 29551, name: "Phường 2", province: 60, district: 35
	},
	{
		id: 29554, name: "Phường 4", province: 60, district: 35
	},
	{
		id: 29557, name: "Phường 3", province: 60, district: 35
	},
	{
		id: 29560, name: "Phường 8", province: 60, district: 35
	},
	{
		id: 29563, name: "Xã Tân Ngãi", province: 60, district: 35
	},
	{
		id: 29566, name: "Xã Tân Hòa", province: 60, district: 35
	},
	{
		id: 29569, name: "Xã Tân Hội", province: 60, district: 35
	},
	{
		id: 29572, name: "Xã Trường An", province: 60, district: 35
	},
	{
		id: 29575, name: "Thị trấn Long Hồ", province: 60, district: 36
	},
	{
		id: 29578, name: "Xã Đồng Phú", province: 60, district: 36
	},
	{
		id: 29581, name: "Xã Bình Hòa Phước", province: 60, district: 36
	},
	{
		id: 29584, name: "Xã Hòa Ninh", province: 60, district: 36
	},
	{
		id: 29587, name: "Xã An Bình", province: 60, district: 36
	},
	{
		id: 29590, name: "Xã Thanh Đức", province: 60, district: 36
	},
	{
		id: 29593, name: "Xã Tân Hạnh", province: 60, district: 36
	},
	{
		id: 29596, name: "Xã Phước Hậu", province: 60, district: 36
	},
	{
		id: 29599, name: "Xã Long Phước", province: 60, district: 36
	},
	{
		id: 29602, name: "Xã Phú Đức", province: 60, district: 36
	},
	{
		id: 29605, name: "Xã Lộc Hòa", province: 60, district: 36
	},
	{
		id: 29608, name: "Xã Long An", province: 60, district: 36
	},
	{
		id: 29611, name: "Xã Phú Quới", province: 60, district: 36
	},
	{
		id: 29614, name: "Xã Thạnh Quới", province: 60, district: 36
	},
	{
		id: 29617, name: "Xã Hòa Phú", province: 60, district: 36
	},
	{
		id: 29620, name: "Thị trấn Cái Nhum", province: 60, district: 37
	},
	{
		id: 29623, name: "Xã Mỹ An", province: 60, district: 37
	},
	{
		id: 29626, name: "Xã Mỹ Phước", province: 60, district: 37
	},
	{
		id: 29629, name: "Xã An Phước", province: 60, district: 37
	},
	{
		id: 29632, name: "Xã Nhơn Phú", province: 60, district: 37
	},
	{
		id: 29635, name: "Xã Long Mỹ", province: 60, district: 37
	},
	{
		id: 29638, name: "Xã Hòa Tịnh", province: 60, district: 37
	},
	{
		id: 29641, name: "Xã Chánh Hội", province: 60, district: 37
	},
	{
		id: 29644, name: "Xã Bình Phước", province: 60, district: 37
	},
	{
		id: 29647, name: "Xã Chánh An", province: 60, district: 37
	},
	{
		id: 29650, name: "Xã Tân An Hội", province: 60, district: 37
	},
	{
		id: 29653, name: "Xã Tân Long", province: 60, district: 37
	},
	{
		id: 29656, name: "Xã Tân Long Hội", province: 60, district: 37
	},
	{
		id: 29770, name: "Phường Cái Vồn", province: 60, district: 38
	},
	{
		id: 29771, name: "Phường Thành Phước", province: 60, district: 38
	},
	{
		id: 29806, name: "Xã Thuận An", province: 60, district: 38
	},
	{
		id: 29809, name: "Xã Đông Thạnh", province: 60, district: 38
	},
	{
		id: 29812, name: "Xã Đông Bình", province: 60, district: 38
	},
	{
		id: 29813, name: "Phường Đông Thuận", province: 60, district: 38
	},
	{
		id: 29815, name: "Xã Mỹ Hòa", province: 60, district: 38
	},
	{
		id: 29818, name: "Xã Đông Thành", province: 60, district: 38
	},
	{
		id: 29821, name: "Thị trấn Trà Ôn", province: 60, district: 39
	},
	{
		id: 29824, name: "Xã Xuân Hiệp", province: 60, district: 39
	},
	{
		id: 29827, name: "Xã Nhơn Bình", province: 60, district: 39
	},
	{
		id: 29830, name: "Xã Hòa Bình", province: 60, district: 39
	},
	{
		id: 29833, name: "Xã Thới Hòa", province: 60, district: 39
	},
	{
		id: 29836, name: "Xã Trà Côn", province: 60, district: 39
	},
	{
		id: 29839, name: "Xã Tân Mỹ", province: 60, district: 39
	},
	{
		id: 29842, name: "Xã Hựu Thành", province: 60, district: 39
	},
	{
		id: 29845, name: "Xã Vĩnh Xuân", province: 60, district: 39
	},
	{
		id: 29848, name: "Xã Thuận Thới", province: 60, district: 39
	},
	{
		id: 29851, name: "Xã Phú Thành", province: 60, district: 39
	},
	{
		id: 29854, name: "Xã Thiện Mỹ", province: 60, district: 39
	},
	{
		id: 29857, name: "Xã Lục Sỹ Thành", province: 60, district: 39
	},
	{
		id: 29860, name: "Xã Tích Thiện", province: 60, district: 39
	},
	{
		id: 29719, name: "Thị trấn Tam Bình", province: 60, district: 40
	},
	{
		id: 29722, name: "Xã Tân Lộc", province: 60, district: 40
	},
	{
		id: 29725, name: "Xã Phú Thịnh", province: 60, district: 40
	},
	{
		id: 29728, name: "Xã Hậu Lộc", province: 60, district: 40
	},
	{
		id: 29731, name: "Xã Hòa Thạnh", province: 60, district: 40
	},
	{
		id: 29734, name: "Xã Hoà Lộc", province: 60, district: 40
	},
	{
		id: 29737, name: "Xã Phú Lộc", province: 60, district: 40
	},
	{
		id: 29740, name: "Xã Song Phú", province: 60, district: 40
	},
	{
		id: 29743, name: "Xã Hòa Hiệp", province: 60, district: 40
	},
	{
		id: 29746, name: "Xã Mỹ Lộc", province: 60, district: 40
	},
	{
		id: 29749, name: "Xã Tân Phú", province: 60, district: 40
	},
	{
		id: 29752, name: "Xã Long Phú", province: 60, district: 40
	},
	{
		id: 29755, name: "Xã Mỹ Thạnh Trung", province: 60, district: 40
	},
	{
		id: 29758, name: "Xã Tường Lộc", province: 60, district: 40
	},
	{
		id: 29761, name: "Xã Loan Mỹ", province: 60, district: 40
	},
	{
		id: 29764, name: "Xã Ngãi Tứ", province: 60, district: 40
	},
	{
		id: 29767, name: "Xã Bình Ninh", province: 60, district: 40
	},
	{
		id: 29659, name: "Thị trấn Vũng Liêm", province: 60, district: 41
	},
	{
		id: 29662, name: "Xã Tân Quới Trung", province: 60, district: 41
	},
	{
		id: 29665, name: "Xã Quới Thiện", province: 60, district: 41
	},
	{
		id: 29668, name: "Xã Quới An", province: 60, district: 41
	},
	{
		id: 29671, name: "Xã Trung Chánh", province: 60, district: 41
	},
	{
		id: 29674, name: "Xã Tân An Luông", province: 60, district: 41
	},
	{
		id: 29677, name: "Xã Thanh Bình", province: 60, district: 41
	},
	{
		id: 29680, name: "Xã Trung Thành Tây", province: 60, district: 41
	},
	{
		id: 29683, name: "Xã Trung Hiệp", province: 60, district: 41
	},
	{
		id: 29686, name: "Xã Hiếu Phụng", province: 60, district: 41
	},
	{
		id: 29689, name: "Xã Trung Thành Đông", province: 60, district: 41
	},
	{
		id: 29692, name: "Xã Trung Thành", province: 60, district: 41
	},
	{
		id: 29695, name: "Xã Trung Hiếu", province: 60, district: 41
	},
	{
		id: 29698, name: "Xã Trung Ngãi", province: 60, district: 41
	},
	{
		id: 29701, name: "Xã Hiếu Thuận", province: 60, district: 41
	},
	{
		id: 29704, name: "Xã Trung Nghĩa", province: 60, district: 41
	},
	{
		id: 29707, name: "Xã Trung An", province: 60, district: 41
	},
	{
		id: 29710, name: "Xã Hiếu Nhơn", province: 60, district: 41
	},
	{
		id: 29713, name: "Xã Hiếu Thành", province: 60, district: 41
	},
	{
		id: 29716, name: "Xã Hiếu Nghĩa", province: 60, district: 41
	},
	{
		id: 29773, name: "Xã Tân Hưng", province: 60, district: 739
	},
	{
		id: 29776, name: "Xã Tân Thành", province: 60, district: 739
	},
	{
		id: 29779, name: "Xã Thành Trung", province: 60, district: 739
	},
	{
		id: 29782, name: "Xã Tân An Thạnh", province: 60, district: 739
	},
	{
		id: 29785, name: "Xã Tân Lược", province: 60, district: 739
	},
	{
		id: 29788, name: "Xã Nguyễn Văn Thảnh", province: 60, district: 739
	},
	{
		id: 29791, name: "Xã Thành Đông", province: 60, district: 739
	},
	{
		id: 29794, name: "Xã Mỹ Thuận", province: 60, district: 739
	},
	{
		id: 29797, name: "Xã Tân Bình", province: 60, district: 739
	},
	{
		id: 29800, name: "Xã Thành Lợi", province: 60, district: 739
	},
	{
		id: 29803, name: "Xã Tân Quới", province: 60, district: 739
	},
	{
		id: 25741, name: "Phường Hiệp Thành", province: 61, district: 85
	},
	{
		id: 25744, name: "Phường Phú Lợi", province: 61, district: 85
	},
	{
		id: 25747, name: "Phường Phú Cường", province: 61, district: 85
	},
	{
		id: 25750, name: "Phường Phú Hòa", province: 61, district: 85
	},
	{
		id: 25753, name: "Phường Phú Thọ", province: 61, district: 85
	},
	{
		id: 25756, name: "Phường Chánh Nghĩa", province: 61, district: 85
	},
	{
		id: 25759, name: "Phường Định Hòa", province: 61, district: 85
	},
	{
		id: 25760, name: "Phường Hòa Phú", province: 61, district: 85
	},
	{
		id: 25762, name: "Phường Phú Mỹ", province: 61, district: 85
	},
	{
		id: 25763, name: "Phường Phú Tân", province: 61, district: 85
	},
	{
		id: 25765, name: "Phường Tân An", province: 61, district: 85
	},
	{
		id: 25768, name: "Phường Hiệp An", province: 61, district: 85
	},
	{
		id: 25771, name: "Phường Tương Bình Hiệp", province: 61, district: 85
	},
	{
		id: 25774, name: "Phường Chánh Mỹ", province: 61, district: 85
	},
	{
		id: 25816, name: "Xã Trừ Văn Thố", province: 61, district: 86
	},
	{
		id: 25819, name: "Xã Cây Trường Ii", province: 61, district: 86
	},
	{
		id: 25822, name: "Xã Lai Uyên", province: 61, district: 86
	},
	{
		id: 25825, name: "Xã Tân Hưng", province: 61, district: 86
	},
	{
		id: 25828, name: "Xã Long Nguyên", province: 61, district: 86
	},
	{
		id: 25831, name: "Xã Hưng Hòa", province: 61, district: 86
	},
	{
		id: 25834, name: "Xã Lai Hưng", province: 61, district: 86
	},
	{
		id: 25894, name: "Xã Tân Định", province: 61, district: 87
	},
	{
		id: 25897, name: "Xã Bình Mỹ", province: 61, district: 87
	},
	{
		id: 25900, name: "Xã Tân Bình", province: 61, district: 87
	},
	{
		id: 25903, name: "Xã Tân Lập", province: 61, district: 87
	},
	{
		id: 25906, name: "Xã Tân Thành", province: 61, district: 87
	},
	{
		id: 25907, name: "Xã Đất Cuốc", province: 61, district: 87
	},
	{
		id: 25908, name: "Xã Hiếu Liêm", province: 61, district: 87
	},
	{
		id: 25909, name: "Xã Lạc An", province: 61, district: 87
	},
	{
		id: 25918, name: "Xã Tân Mỹ", province: 61, district: 87
	},
	{
		id: 25927, name: "Xã Thường Tân", province: 61, district: 87
	},
	{
		id: 25963, name: "Phường An Thạnh", province: 61, district: 88
	},
	{
		id: 25966, name: "Phường Lái Thiêu", province: 61, district: 88
	},
	{
		id: 25969, name: "Phường Bình Chuẩn", province: 61, district: 88
	},
	{
		id: 25972, name: "Phường Thuận Giao", province: 61, district: 88
	},
	{
		id: 25975, name: "Phường An Phú", province: 61, district: 88
	},
	{
		id: 25978, name: "Phường Hưng Định", province: 61, district: 88
	},
	{
		id: 25981, name: "Xã An Sơn", province: 61, district: 88
	},
	{
		id: 25984, name: "Phường Bình Nhâm", province: 61, district: 88
	},
	{
		id: 25987, name: "Phường Bình Hòa", province: 61, district: 88
	},
	{
		id: 25990, name: "Phường Vĩnh Phú", province: 61, district: 88
	},
	{
		id: 25942, name: "Phường Dĩ An", province: 61, district: 89
	},
	{
		id: 25945, name: "Phường Tân Bình", province: 61, district: 89
	},
	{
		id: 25948, name: "Phường Tân Đông Hiệp", province: 61, district: 89
	},
	{
		id: 25951, name: "Phường Bình An", province: 61, district: 89
	},
	{
		id: 25954, name: "Phường Bình Thắng", province: 61, district: 89
	},
	{
		id: 25957, name: "Phường Đông Hòa", province: 61, district: 89
	},
	{
		id: 25960, name: "Phường An Bình", province: 61, district: 89
	},
	{
		id: 25858, name: "Thị trấn Phước Vĩnh", province: 61, district: 90
	},
	{
		id: 25861, name: "Xã An Linh", province: 61, district: 90
	},
	{
		id: 25864, name: "Xã Phước Sang", province: 61, district: 90
	},
	{
		id: 25865, name: "Xã An Thái", province: 61, district: 90
	},
	{
		id: 25867, name: "Xã An Long", province: 61, district: 90
	},
	{
		id: 25870, name: "Xã An Bình", province: 61, district: 90
	},
	{
		id: 25873, name: "Xã Tân Hiệp", province: 61, district: 90
	},
	{
		id: 25876, name: "Xã Tam Lập", province: 61, district: 90
	},
	{
		id: 25879, name: "Xã Tân Long", province: 61, district: 90
	},
	{
		id: 25882, name: "Xã Vĩnh Hoà", province: 61, district: 90
	},
	{
		id: 25885, name: "Xã Phước Hoà", province: 61, district: 90
	},
	{
		id: 25777, name: "Thị trấn Dầu Tiếng", province: 61, district: 91
	},
	{
		id: 25780, name: "Xã Minh Hoà", province: 61, district: 91
	},
	{
		id: 25783, name: "Xã Minh Thạnh", province: 61, district: 91
	},
	{
		id: 25786, name: "Xã Minh Tân", province: 61, district: 91
	},
	{
		id: 25789, name: "Xã Định An", province: 61, district: 91
	},
	{
		id: 25792, name: "Xã Long Hoà", province: 61, district: 91
	},
	{
		id: 25795, name: "Xã Định Thành", province: 61, district: 91
	},
	{
		id: 25798, name: "Xã Định Hiệp", province: 61, district: 91
	},
	{
		id: 25801, name: "Xã An Lập", province: 61, district: 91
	},
	{
		id: 25804, name: "Xã Long Tân", province: 61, district: 91
	},
	{
		id: 25807, name: "Xã Thanh An", province: 61, district: 91
	},
	{
		id: 25810, name: "Xã Thanh Tuyền", province: 61, district: 91
	},
	{
		id: 25813, name: "Phường Mỹ Phước", province: 61, district: 751
	},
	{
		id: 25837, name: "Phường Chánh Phú Hòa", province: 61, district: 751
	},
	{
		id: 25840, name: "Xã An Điền", province: 61, district: 751
	},
	{
		id: 25843, name: "Xã An Tây", province: 61, district: 751
	},
	{
		id: 25846, name: "Phường Thới Hòa", province: 61, district: 751
	},
	{
		id: 25849, name: "Phường Hòa Lợi", province: 61, district: 751
	},
	{
		id: 25852, name: "Phường Tân Định", province: 61, district: 751
	},
	{
		id: 25855, name: "Xã Phú An", province: 61, district: 751
	},
	{
		id: 25888, name: "Phường Uyên Hưng", province: 61, district: 752
	},
	{
		id: 25891, name: "Phường Tân Phước Khánh", province: 61, district: 752
	},
	{
		id: 25912, name: "Xã Vĩnh Tân", province: 61, district: 752
	},
	{
		id: 25915, name: "Xã Hội Nghĩa", province: 61, district: 752
	},
	{
		id: 25920, name: "Phường Tân Hiệp", province: 61, district: 752
	},
	{
		id: 25921, name: "Phường Khánh Bình", province: 61, district: 752
	},
	{
		id: 25924, name: "Xã Phú Chánh", province: 61, district: 752
	},
	{
		id: 25930, name: "Xã Bạch Đằng", province: 61, district: 752
	},
	{
		id: 25933, name: "Xã Tân Vĩnh Hiệp", province: 61, district: 752
	},
	{
		id: 25936, name: "Phường Thạnh Phước", province: 61, district: 752
	},
	{
		id: 25937, name: "Xã Thạnh Hội", province: 61, district: 752
	},
	{
		id: 25939, name: "Phường Thái Hòa", province: 61, district: 752
	},
	{
		id: 24611, name: "Phường Nghĩa Đức", province: 62, district: 204
	},
	{
		id: 24612, name: "Phường Nghĩa Thành", province: 62, district: 204
	},
	{
		id: 24614, name: "Phường Nghĩa Phú", province: 62, district: 204
	},
	{
		id: 24615, name: "Phường Nghĩa Tân", province: 62, district: 204
	},
	{
		id: 24617, name: "Phường Nghĩa Trung", province: 62, district: 204
	},
	{
		id: 24618, name: "Xã Đắk R'moan", province: 62, district: 204
	},
	{
		id: 24619, name: "Xã Quảng Thành", province: 62, district: 204
	},
	{
		id: 24628, name: "Xã Đắk Nia", province: 62, district: 204
	},
	{
		id: 24717, name: "Thị trấn Đức An", province: 62, district: 205
	},
	{
		id: 24718, name: "Xã Đắk Môl", province: 62, district: 205
	},
	{
		id: 24719, name: "Xã Đắk Hoà", province: 62, district: 205
	},
	{
		id: 24721, name: "Xã Nam Bình", province: 62, district: 205
	},
	{
		id: 24722, name: "Xã Thuận Hà", province: 62, district: 205
	},
	{
		id: 24724, name: "Xã Thuận Hạnh", province: 62, district: 205
	},
	{
		id: 24727, name: "Xã Đắk Rung", province: 62, district: 205
	},
	{
		id: 24728, name: "Xã Nâm N'jang", province: 62, district: 205
	},
	{
		id: 24730, name: "Xã Trường Xuân", province: 62, district: 205
	},
	{
		id: 24640, name: "Thị trấn Ea T'ling", province: 62, district: 206
	},
	{
		id: 24643, name: "Xã Đắk Wil", province: 62, district: 206
	},
	{
		id: 24646, name: "Xã Ea Pô", province: 62, district: 206
	},
	{
		id: 24649, name: "Xã Nam Dong", province: 62, district: 206
	},
	{
		id: 24652, name: "Xã Đắk Drông", province: 62, district: 206
	},
	{
		id: 24655, name: "Xã Tâm Thắng", province: 62, district: 206
	},
	{
		id: 24658, name: "Xã Cư Knia", province: 62, district: 206
	},
	{
		id: 24661, name: "Xã Trúc Sơn", province: 62, district: 206
	},
	{
		id: 24688, name: "Thị trấn Đắk Mâm", province: 62, district: 207
	},
	{
		id: 24691, name: "Xã Đắk Sôr", province: 62, district: 207
	},
	{
		id: 24692, name: "Xã Nam Xuân", province: 62, district: 207
	},
	{
		id: 24694, name: "Xã Buôn Choah", province: 62, district: 207
	},
	{
		id: 24697, name: "Xã Nam Đà", province: 62, district: 207
	},
	{
		id: 24699, name: "Xã Tân Thành", province: 62, district: 207
	},
	{
		id: 24700, name: "Xã Đắk Drô", province: 62, district: 207
	},
	{
		id: 24703, name: "Xã Nâm Nung", province: 62, district: 207
	},
	{
		id: 24706, name: "Xã Đức Xuyên", province: 62, district: 207
	},
	{
		id: 24709, name: "Xã Đắk Nang", province: 62, district: 207
	},
	{
		id: 24712, name: "Xã Quảng Phú", province: 62, district: 207
	},
	{
		id: 24715, name: "Xã Nâm N'đir", province: 62, district: 207
	},
	{
		id: 24616, name: "Xã Quảng Sơn", province: 62, district: 208
	},
	{
		id: 24620, name: "Xã Quảng Hoà", province: 62, district: 208
	},
	{
		id: 24622, name: "Xã Đắk Ha", province: 62, district: 208
	},
	{
		id: 24625, name: "Xã Đắk R'măng", province: 62, district: 208
	},
	{
		id: 24631, name: "Xã Quảng Khê", province: 62, district: 208
	},
	{
		id: 24634, name: "Xã Đắk Plao", province: 62, district: 208
	},
	{
		id: 24637, name: "Xã Đắk Som", province: 62, district: 208
	},
	{
		id: 24664, name: "Thị trấn Đắk Mil", province: 62, district: 209
	},
	{
		id: 24667, name: "Xã Đắk Lao", province: 62, district: 209
	},
	{
		id: 24670, name: "Xã Đắk R'la", province: 62, district: 209
	},
	{
		id: 24673, name: "Xã Đắk Gằn", province: 62, district: 209
	},
	{
		id: 24676, name: "Xã Đức Mạnh", province: 62, district: 209
	},
	{
		id: 24677, name: "Xã Đắk N'drót", province: 62, district: 209
	},
	{
		id: 24678, name: "Xã Long Sơn", province: 62, district: 209
	},
	{
		id: 24679, name: "Xã Đắk Sắk", province: 62, district: 209
	},
	{
		id: 24682, name: "Xã Thuận An", province: 62, district: 209
	},
	{
		id: 24685, name: "Xã Đức Minh", province: 62, district: 209
	},
	{
		id: 24733, name: "Thị trấn Kiến Đức", province: 62, district: 210
	},
	{
		id: 24745, name: "Xã Quảng Tín", province: 62, district: 210
	},
	{
		id: 24750, name: "Xã Đắk Wer", province: 62, district: 210
	},
	{
		id: 24751, name: "Xã Nhân Cơ", province: 62, district: 210
	},
	{
		id: 24754, name: "Xã Kiến Thành", province: 62, district: 210
	},
	{
		id: 24756, name: "Xã Nghĩa Thắng", province: 62, district: 210
	},
	{
		id: 24757, name: "Xã Đạo Nghĩa", province: 62, district: 210
	},
	{
		id: 24760, name: "Xã Đắk Sin", province: 62, district: 210
	},
	{
		id: 24761, name: "Xã Hưng Bình", province: 62, district: 210
	},
	{
		id: 24763, name: "Xã Đắk Ru", province: 62, district: 210
	},
	{
		id: 24766, name: "Xã Nhân Đạo", province: 62, district: 210
	},
	{
		id: 24736, name: "Xã Quảng Trực", province: 62, district: 718
	},
	{
		id: 24739, name: "Xã Đắk Búk So", province: 62, district: 718
	},
	{
		id: 24740, name: "Xã Quảng Tâm", province: 62, district: 718
	},
	{
		id: 24742, name: "Xã Đắk R'tíh", province: 62, district: 718
	},
	{
		id: 24746, name: "Xã Đắk Ngo", province: 62, district: 718
	},
	{
		id: 24748, name: "Xã Quảng Tân", province: 62, district: 718
	},
	{
		id: 29902, name: "Phường 3", province: 63, district: 211
	},
	{
		id: 29905, name: "Phường 1", province: 63, district: 211
	},
	{
		id: 29908, name: "Phường 4", province: 63, district: 211
	},
	{
		id: 29911, name: "Phường 2", province: 63, district: 211
	},
	{
		id: 29914, name: "Xã Tân Khánh Đông", province: 63, district: 211
	},
	{
		id: 29917, name: "Phường Tân Quy Đông", province: 63, district: 211
	},
	{
		id: 29919, name: "Phường An Hoà", province: 63, district: 211
	},
	{
		id: 29920, name: "Xã Tân Quy Tây", province: 63, district: 211
	},
	{
		id: 29923, name: "Xã Tân Phú Đông", province: 63, district: 211
	},
	{
		id: 29863, name: "Phường 11", province: 63, district: 212
	},
	{
		id: 29866, name: "Phường 1", province: 63, district: 212
	},
	{
		id: 29869, name: "Phường 2", province: 63, district: 212
	},
	{
		id: 29872, name: "Phường 4", province: 63, district: 212
	},
	{
		id: 29875, name: "Phường 3", province: 63, district: 212
	},
	{
		id: 29878, name: "Phường 6", province: 63, district: 212
	},
	{
		id: 29881, name: "Xã Mỹ Ngãi", province: 63, district: 212
	},
	{
		id: 29884, name: "Xã Mỹ Tân", province: 63, district: 212
	},
	{
		id: 29887, name: "Xã Mỹ Trà", province: 63, district: 212
	},
	{
		id: 29888, name: "Phường Mỹ Phú", province: 63, district: 212
	},
	{
		id: 29890, name: "Xã Tân Thuận Tây", province: 63, district: 212
	},
	{
		id: 29892, name: "Phường Hoà Thuận", province: 63, district: 212
	},
	{
		id: 29893, name: "Xã Hòa An", province: 63, district: 212
	},
	{
		id: 29896, name: "Xã Tân Thuận Đông", province: 63, district: 212
	},
	{
		id: 29899, name: "Xã Tịnh Thới", province: 63, district: 212
	},
	{
		id: 29926, name: "Thị trấn Sa Rài", province: 63, district: 213
	},
	{
		id: 29929, name: "Xã Tân Hộ Cơ", province: 63, district: 213
	},
	{
		id: 29932, name: "Xã Thông Bình", province: 63, district: 213
	},
	{
		id: 29935, name: "Xã Bình Phú", province: 63, district: 213
	},
	{
		id: 29938, name: "Xã Tân Thành A", province: 63, district: 213
	},
	{
		id: 29941, name: "Xã Tân Thành B", province: 63, district: 213
	},
	{
		id: 29944, name: "Xã Tân Phước", province: 63, district: 213
	},
	{
		id: 29947, name: "Xã Tân Công Chí", province: 63, district: 213
	},
	{
		id: 29950, name: "Xã An Phước", province: 63, district: 213
	},
	{
		id: 29956, name: "Xã Thường Phước 1", province: 63, district: 214
	},
	{
		id: 29962, name: "Xã Thường Thới Hậu A", province: 63, district: 214
	},
	{
		id: 29968, name: "Xã Thường Thới Hậu B", province: 63, district: 214
	},
	{
		id: 29971, name: "Xã Thường Thới Tiền", province: 63, district: 214
	},
	{
		id: 29974, name: "Xã Thường Phước 2", province: 63, district: 214
	},
	{
		id: 29977, name: "Xã Thường Lạc", province: 63, district: 214
	},
	{
		id: 29980, name: "Xã Long Khánh A", province: 63, district: 214
	},
	{
		id: 29983, name: "Xã Long Khánh B", province: 63, district: 214
	},
	{
		id: 29992, name: "Xã Long Thuận", province: 63, district: 214
	},
	{
		id: 29995, name: "Xã Phú Thuận B", province: 63, district: 214
	},
	{
		id: 29998, name: "Xã Phú Thuận A", province: 63, district: 214
	},
	{
		id: 30001, name: "Thị trấn Tràm Chim", province: 63, district: 215
	},
	{
		id: 30004, name: "Xã Hoà Bình", province: 63, district: 215
	},
	{
		id: 30007, name: "Xã Tân Công Sính", province: 63, district: 215
	},
	{
		id: 30010, name: "Xã Phú Hiệp", province: 63, district: 215
	},
	{
		id: 30013, name: "Xã Phú Đức", province: 63, district: 215
	},
	{
		id: 30016, name: "Xã Phú Thành B", province: 63, district: 215
	},
	{
		id: 30019, name: "Xã An Hòa", province: 63, district: 215
	},
	{
		id: 30022, name: "Xã An Long", province: 63, district: 215
	},
	{
		id: 30025, name: "Xã Phú Cường", province: 63, district: 215
	},
	{
		id: 30028, name: "Xã Phú Ninh", province: 63, district: 215
	},
	{
		id: 30031, name: "Xã Phú Thọ", province: 63, district: 215
	},
	{
		id: 30034, name: "Xã Phú Thành A", province: 63, district: 215
	},
	{
		id: 30130, name: "Thị trấn Thanh Bình", province: 63, district: 216
	},
	{
		id: 30133, name: "Xã Tân Quới", province: 63, district: 216
	},
	{
		id: 30136, name: "Xã Tân Hòa", province: 63, district: 216
	},
	{
		id: 30139, name: "Xã An Phong", province: 63, district: 216
	},
	{
		id: 30142, name: "Xã Phú Lợi", province: 63, district: 216
	},
	{
		id: 30145, name: "Xã Tân Mỹ", province: 63, district: 216
	},
	{
		id: 30148, name: "Xã Bình Tấn", province: 63, district: 216
	},
	{
		id: 30151, name: "Xã Tân Huề", province: 63, district: 216
	},
	{
		id: 30154, name: "Xã Tân Bình", province: 63, district: 216
	},
	{
		id: 30157, name: "Xã Tân Thạnh", province: 63, district: 216
	},
	{
		id: 30160, name: "Xã Tân Phú", province: 63, district: 216
	},
	{
		id: 30163, name: "Xã Bình Thành", province: 63, district: 216
	},
	{
		id: 30166, name: "Xã Tân Long", province: 63, district: 216
	},
	{
		id: 30076, name: "Thị trấn Mỹ Thọ", province: 63, district: 217
	},
	{
		id: 30079, name: "Xã Gáo Giồng", province: 63, district: 217
	},
	{
		id: 30082, name: "Xã Phương Thịnh", province: 63, district: 217
	},
	{
		id: 30085, name: "Xã Ba Sao", province: 63, district: 217
	},
	{
		id: 30088, name: "Xã Phong Mỹ", province: 63, district: 217
	},
	{
		id: 30091, name: "Xã Tân Nghĩa", province: 63, district: 217
	},
	{
		id: 30094, name: "Xã Phương Trà", province: 63, district: 217
	},
	{
		id: 30097, name: "Xã Nhị Mỹ", province: 63, district: 217
	},
	{
		id: 30100, name: "Xã Mỹ Thọ", province: 63, district: 217
	},
	{
		id: 30103, name: "Xã Tân Hội Trung", province: 63, district: 217
	},
	{
		id: 30106, name: "Xã An Bình", province: 63, district: 217
	},
	{
		id: 30109, name: "Xã Mỹ Hội", province: 63, district: 217
	},
	{
		id: 30112, name: "Xã Mỹ Hiệp", province: 63, district: 217
	},
	{
		id: 30115, name: "Xã Mỹ Long", province: 63, district: 217
	},
	{
		id: 30118, name: "Xã Bình Hàng Trung", province: 63, district: 217
	},
	{
		id: 30121, name: "Xã Mỹ Xương", province: 63, district: 217
	},
	{
		id: 30124, name: "Xã Bình Hàng Tây", province: 63, district: 217
	},
	{
		id: 30127, name: "Xã Bình Thạnh", province: 63, district: 217
	},
	{
		id: 30169, name: "Thị trấn Lấp Vò", province: 63, district: 218
	},
	{
		id: 30172, name: "Xã Mỹ An Hưng A", province: 63, district: 218
	},
	{
		id: 30175, name: "Xã Tân Mỹ", province: 63, district: 218
	},
	{
		id: 30178, name: "Xã Mỹ An Hưng B", province: 63, district: 218
	},
	{
		id: 30181, name: "Xã Tân Khánh Trung", province: 63, district: 218
	},
	{
		id: 30184, name: "Xã Long Hưng A", province: 63, district: 218
	},
	{
		id: 30187, name: "Xã Vĩnh Thạnh", province: 63, district: 218
	},
	{
		id: 30190, name: "Xã Long Hưng B", province: 63, district: 218
	},
	{
		id: 30193, name: "Xã Bình Thành", province: 63, district: 218
	},
	{
		id: 30196, name: "Xã Định An", province: 63, district: 218
	},
	{
		id: 30199, name: "Xã Định Yên", province: 63, district: 218
	},
	{
		id: 30202, name: "Xã Hội An Đông", province: 63, district: 218
	},
	{
		id: 30205, name: "Xã Bình Thạnh Trung", province: 63, district: 218
	},
	{
		id: 30037, name: "Thị trấn Mỹ An", province: 63, district: 219
	},
	{
		id: 30040, name: "Xã Thạnh Lợi", province: 63, district: 219
	},
	{
		id: 30043, name: "Xã Hưng Thạnh", province: 63, district: 219
	},
	{
		id: 30046, name: "Xã Trường Xuân", province: 63, district: 219
	},
	{
		id: 30049, name: "Xã Tân Kiều", province: 63, district: 219
	},
	{
		id: 30052, name: "Xã Mỹ Hòa", province: 63, district: 219
	},
	{
		id: 30055, name: "Xã Mỹ Quý", province: 63, district: 219
	},
	{
		id: 30058, name: "Xã Mỹ Đông", province: 63, district: 219
	},
	{
		id: 30061, name: "Xã Đốc Binh Kiều", province: 63, district: 219
	},
	{
		id: 30064, name: "Xã Mỹ An", province: 63, district: 219
	},
	{
		id: 30067, name: "Xã Phú Điền", province: 63, district: 219
	},
	{
		id: 30070, name: "Xã Láng Biển", province: 63, district: 219
	},
	{
		id: 30073, name: "Xã Thanh Mỹ", province: 63, district: 219
	},
	{
		id: 30208, name: "Thị trấn Lai Vung", province: 63, district: 230
	},
	{
		id: 30211, name: "Xã Tân Dương", province: 63, district: 230
	},
	{
		id: 30214, name: "Xã Hòa Thành", province: 63, district: 230
	},
	{
		id: 30217, name: "Xã Long Hậu", province: 63, district: 230
	},
	{
		id: 30220, name: "Xã Tân Phước", province: 63, district: 230
	},
	{
		id: 30223, name: "Xã Hòa Long", province: 63, district: 230
	},
	{
		id: 30226, name: "Xã Tân Thành", province: 63, district: 230
	},
	{
		id: 30229, name: "Xã Long Thắng", province: 63, district: 230
	},
	{
		id: 30232, name: "Xã Vĩnh Thới", province: 63, district: 230
	},
	{
		id: 30235, name: "Xã Tân Hòa", province: 63, district: 230
	},
	{
		id: 30238, name: "Xã Định Hòa", province: 63, district: 230
	},
	{
		id: 30241, name: "Xã Phong Hòa", province: 63, district: 230
	},
	{
		id: 30244, name: "Thị trấn Cái Tàu Hạ", province: 63, district: 231
	},
	{
		id: 30247, name: "Xã An Hiệp", province: 63, district: 231
	},
	{
		id: 30250, name: "Xã An Nhơn", province: 63, district: 231
	},
	{
		id: 30253, name: "Xã Tân Nhuận Đông", province: 63, district: 231
	},
	{
		id: 30256, name: "Xã Tân Bình", province: 63, district: 231
	},
	{
		id: 30259, name: "Xã Tân Phú Trung", province: 63, district: 231
	},
	{
		id: 30262, name: "Xã Phú Long", province: 63, district: 231
	},
	{
		id: 30265, name: "Xã An Phú Thuận", province: 63, district: 231
	},
	{
		id: 30268, name: "Xã Phú Hựu", province: 63, district: 231
	},
	{
		id: 30271, name: "Xã An Khánh", province: 63, district: 231
	},
	{
		id: 30274, name: "Xã Tân Phú", province: 63, district: 231
	},
	{
		id: 30277, name: "Xã Hòa Tân", province: 63, district: 231
	},
	{
		id: 29954, name: "Phường An Lộc", province: 63, district: 740
	},
	{
		id: 29955, name: "Phường An Thạnh", province: 63, district: 740
	},
	{
		id: 29959, name: "Xã Bình Thạnh", province: 63, district: 740
	},
	{
		id: 29965, name: "Xã Tân Hội", province: 63, district: 740
	},
	{
		id: 29978, name: "Phường An Lạc", province: 63, district: 740
	},
	{
		id: 29986, name: "Xã An Bình B", province: 63, district: 740
	},
	{
		id: 29989, name: "Xã An Bình A", province: 63, district: 740
	},
	{
		id: 11950, name: "Phường Lam Sơn", province: 64, district: 344
	},
	{
		id: 11953, name: "Phường An Tảo", province: 64, district: 344
	},
	{
		id: 11956, name: "Phường Hiến Nam", province: 64, district: 344
	},
	{
		id: 11959, name: "Phường Lê Lợi", province: 64, district: 344
	},
	{
		id: 11962, name: "Phường Hồng Châu", province: 64, district: 344
	},
	{
		id: 11965, name: "Phường Minh Khai", province: 64, district: 344
	},
	{
		id: 11968, name: "Phường Quang Trung", province: 64, district: 344
	},
	{
		id: 11971, name: "Xã Bảo Khê", province: 64, district: 344
	},
	{
		id: 11974, name: "Xã Trung Nghĩa", province: 64, district: 344
	},
	{
		id: 11977, name: "Xã Liên Phương", province: 64, district: 344
	},
	{
		id: 11980, name: "Xã Hồng Nam", province: 64, district: 344
	},
	{
		id: 11983, name: "Xã Quảng Châu", province: 64, district: 344
	},
	{
		id: 12331, name: "Xã Phú Cường", province: 64, district: 344
	},
	{
		id: 12334, name: "Xã Hùng Cường", province: 64, district: 344
	},
	{
		id: 12382, name: "Xã Phương Chiểu", province: 64, district: 344
	},
	{
		id: 12385, name: "Xã Tân Hưng", province: 64, district: 344
	},
	{
		id: 12388, name: "Xã Hoàng Hanh", province: 64, district: 344
	},
	{
		id: 12280, name: "Thị trấn Lương Bằng", province: 64, district: 345
	},
	{
		id: 12283, name: "Xã Nghĩa Dân", province: 64, district: 345
	},
	{
		id: 12286, name: "Xã Toàn Thắng", province: 64, district: 345
	},
	{
		id: 12289, name: "Xã Vĩnh Xá", province: 64, district: 345
	},
	{
		id: 12292, name: "Xã Phạm Ngũ Lão", province: 64, district: 345
	},
	{
		id: 12295, name: "Xã Thọ Vinh", province: 64, district: 345
	},
	{
		id: 12298, name: "Xã Đồng Thanh", province: 64, district: 345
	},
	{
		id: 12301, name: "Xã Song Mai", province: 64, district: 345
	},
	{
		id: 12304, name: "Xã Chính Nghĩa", province: 64, district: 345
	},
	{
		id: 12307, name: "Xã Nhân La", province: 64, district: 345
	},
	{
		id: 12310, name: "Xã Phú Thịnh", province: 64, district: 345
	},
	{
		id: 12313, name: "Xã Mai Động", province: 64, district: 345
	},
	{
		id: 12316, name: "Xã Đức Hợp", province: 64, district: 345
	},
	{
		id: 12319, name: "Xã Hùng An", province: 64, district: 345
	},
	{
		id: 12322, name: "Xã Ngọc Thanh", province: 64, district: 345
	},
	{
		id: 12325, name: "Xã Vũ Xá", province: 64, district: 345
	},
	{
		id: 12328, name: "Xã Hiệp Cường", province: 64, district: 345
	},
	{
		id: 12142, name: "Thị trấn Ân Thi", province: 64, district: 346
	},
	{
		id: 12145, name: "Xã Phù Ủng", province: 64, district: 346
	},
	{
		id: 12148, name: "Xã Bắc Sơn", province: 64, district: 346
	},
	{
		id: 12151, name: "Xã Bãi Sậy", province: 64, district: 346
	},
	{
		id: 12154, name: "Xã Đào Dương", province: 64, district: 346
	},
	{
		id: 12157, name: "Xã Tân Phúc", province: 64, district: 346
	},
	{
		id: 12160, name: "Xã Vân Du", province: 64, district: 346
	},
	{
		id: 12163, name: "Xã Quang Vinh", province: 64, district: 346
	},
	{
		id: 12166, name: "Xã Xuân Trúc", province: 64, district: 346
	},
	{
		id: 12169, name: "Xã Hoàng Hoa Thám", province: 64, district: 346
	},
	{
		id: 12172, name: "Xã Quảng Lãng", province: 64, district: 346
	},
	{
		id: 12175, name: "Xã Văn Nhuệ", province: 64, district: 346
	},
	{
		id: 12178, name: "Xã Đặng Lễ", province: 64, district: 346
	},
	{
		id: 12181, name: "Xã Cẩm Ninh", province: 64, district: 346
	},
	{
		id: 12184, name: "Xã Nguyễn Trãi", province: 64, district: 346
	},
	{
		id: 12187, name: "Xã Đa Lộc", province: 64, district: 346
	},
	{
		id: 12190, name: "Xã Hồ Tùng Mậu", province: 64, district: 346
	},
	{
		id: 12193, name: "Xã Tiền Phong", province: 64, district: 346
	},
	{
		id: 12196, name: "Xã Hồng Vân", province: 64, district: 346
	},
	{
		id: 12199, name: "Xã Hồng Quang", province: 64, district: 346
	},
	{
		id: 12202, name: "Xã Hạ Lễ", province: 64, district: 346
	},
	{
		id: 12205, name: "Thị trấn Khoái Châu", province: 64, district: 347
	},
	{
		id: 12208, name: "Xã Đông Tảo", province: 64, district: 347
	},
	{
		id: 12211, name: "Xã Bình Minh", province: 64, district: 347
	},
	{
		id: 12214, name: "Xã Dạ Trạch", province: 64, district: 347
	},
	{
		id: 12217, name: "Xã Hàm Tử", province: 64, district: 347
	},
	{
		id: 12220, name: "Xã Ông Đình", province: 64, district: 347
	},
	{
		id: 12223, name: "Xã Tân Dân", province: 64, district: 347
	},
	{
		id: 12226, name: "Xã Tứ Dân", province: 64, district: 347
	},
	{
		id: 12229, name: "Xã An Vĩ", province: 64, district: 347
	},
	{
		id: 12232, name: "Xã Đông Kết", province: 64, district: 347
	},
	{
		id: 12235, name: "Xã Bình Kiều", province: 64, district: 347
	},
	{
		id: 12238, name: "Xã Dân Tiến", province: 64, district: 347
	},
	{
		id: 12241, name: "Xã Đồng Tiến", province: 64, district: 347
	},
	{
		id: 12244, name: "Xã Hồng Tiến", province: 64, district: 347
	},
	{
		id: 12247, name: "Xã Tân Châu", province: 64, district: 347
	},
	{
		id: 12250, name: "Xã Liên Khê", province: 64, district: 347
	},
	{
		id: 12253, name: "Xã Phùng Hưng", province: 64, district: 347
	},
	{
		id: 12256, name: "Xã Việt Hòa", province: 64, district: 347
	},
	{
		id: 12259, name: "Xã Đông Ninh", province: 64, district: 347
	},
	{
		id: 12262, name: "Xã Đại Tập", province: 64, district: 347
	},
	{
		id: 12265, name: "Xã Chí Tân", province: 64, district: 347
	},
	{
		id: 12268, name: "Xã Đại Hưng", province: 64, district: 347
	},
	{
		id: 12271, name: "Xã Thuần Hưng", province: 64, district: 347
	},
	{
		id: 12274, name: "Xã Thành Công", province: 64, district: 347
	},
	{
		id: 12277, name: "Xã Nhuế Dương", province: 64, district: 347
	},
	{
		id: 12052, name: "Thị trấn Yên Mỹ", province: 64, district: 348
	},
	{
		id: 12055, name: "Xã Giai Phạm", province: 64, district: 348
	},
	{
		id: 12058, name: "Xã Nghĩa Hiệp", province: 64, district: 348
	},
	{
		id: 12061, name: "Xã Đồng Than", province: 64, district: 348
	},
	{
		id: 12064, name: "Xã Ngọc Long", province: 64, district: 348
	},
	{
		id: 12067, name: "Xã Liêu Xá", province: 64, district: 348
	},
	{
		id: 12070, name: "Xã Hoàn Long", province: 64, district: 348
	},
	{
		id: 12073, name: "Xã Tân Lập", province: 64, district: 348
	},
	{
		id: 12076, name: "Xã Thanh Long", province: 64, district: 348
	},
	{
		id: 12079, name: "Xã Yên Phú", province: 64, district: 348
	},
	{
		id: 12082, name: "Xã Việt Cường", province: 64, district: 348
	},
	{
		id: 12085, name: "Xã Trung Hòa", province: 64, district: 348
	},
	{
		id: 12088, name: "Xã Yên Hòa", province: 64, district: 348
	},
	{
		id: 12091, name: "Xã Minh Châu", province: 64, district: 348
	},
	{
		id: 12094, name: "Xã Trung Hưng", province: 64, district: 348
	},
	{
		id: 12097, name: "Xã Lý Thường Kiệt", province: 64, district: 348
	},
	{
		id: 12100, name: "Xã Tân Việt", province: 64, district: 348
	},
	{
		id: 12337, name: "Thị trấn Vương", province: 64, district: 349
	},
	{
		id: 12340, name: "Xã Hưng Đạo", province: 64, district: 349
	},
	{
		id: 12343, name: "Xã Ngô Quyền", province: 64, district: 349
	},
	{
		id: 12346, name: "Xã Nhật Tân", province: 64, district: 349
	},
	{
		id: 12349, name: "Xã Dị Chế", province: 64, district: 349
	},
	{
		id: 12352, name: "Xã Lệ Xá", province: 64, district: 349
	},
	{
		id: 12355, name: "Xã An Viên", province: 64, district: 349
	},
	{
		id: 12358, name: "Xã Đức Thắng", province: 64, district: 349
	},
	{
		id: 12361, name: "Xã Trung Dũng", province: 64, district: 349
	},
	{
		id: 12364, name: "Xã Hải Triều", province: 64, district: 349
	},
	{
		id: 12367, name: "Xã Thủ Sỹ", province: 64, district: 349
	},
	{
		id: 12370, name: "Xã Thiện Phiến", province: 64, district: 349
	},
	{
		id: 12373, name: "Xã Thụy Lôi", province: 64, district: 349
	},
	{
		id: 12376, name: "Xã Cương Chính", province: 64, district: 349
	},
	{
		id: 12379, name: "Xã Minh Phương", province: 64, district: 349
	},
	{
		id: 12391, name: "Thị trấn Trần Cao", province: 64, district: 350
	},
	{
		id: 12394, name: "Xã Minh Tân", province: 64, district: 350
	},
	{
		id: 12397, name: "Xã Phan Sào Nam", province: 64, district: 350
	},
	{
		id: 12400, name: "Xã Quang Hưng", province: 64, district: 350
	},
	{
		id: 12403, name: "Xã Minh Hoàng", province: 64, district: 350
	},
	{
		id: 12406, name: "Xã Đoàn Đào", province: 64, district: 350
	},
	{
		id: 12409, name: "Xã Tống Phan", province: 64, district: 350
	},
	{
		id: 12412, name: "Xã Đình Cao", province: 64, district: 350
	},
	{
		id: 12415, name: "Xã Nhật Quang", province: 64, district: 350
	},
	{
		id: 12418, name: "Xã Tiền Tiến", province: 64, district: 350
	},
	{
		id: 12421, name: "Xã Tam Đa", province: 64, district: 350
	},
	{
		id: 12424, name: "Xã Minh Tiến", province: 64, district: 350
	},
	{
		id: 12427, name: "Xã Nguyên Hòa", province: 64, district: 350
	},
	{
		id: 12430, name: "Xã Tống Trân", province: 64, district: 350
	},
	{
		id: 12103, name: "Thị trấn Bần Yên Nhân", province: 64, district: 351
	},
	{
		id: 12106, name: "Xã Phan Đình Phùng", province: 64, district: 351
	},
	{
		id: 12109, name: "Xã Cẩm Xá", province: 64, district: 351
	},
	{
		id: 12112, name: "Xã Dương Quang", province: 64, district: 351
	},
	{
		id: 12115, name: "Xã Hòa Phong", province: 64, district: 351
	},
	{
		id: 12118, name: "Xã Nhân Hòa", province: 64, district: 351
	},
	{
		id: 12121, name: "Xã Dị Sử", province: 64, district: 351
	},
	{
		id: 12124, name: "Xã Bạch Sam", province: 64, district: 351
	},
	{
		id: 12127, name: "Xã Minh Đức", province: 64, district: 351
	},
	{
		id: 12130, name: "Xã Phùng Chí Kiên", province: 64, district: 351
	},
	{
		id: 12133, name: "Xã Xuân Dục", province: 64, district: 351
	},
	{
		id: 12136, name: "Xã Ngọc Lâm", province: 64, district: 351
	},
	{
		id: 12139, name: "Xã Hưng Long", province: 64, district: 351
	},
	{
		id: 11986, name: "Thị trấn Như Quỳnh", province: 64, district: 352
	},
	{
		id: 11989, name: "Xã Lạc Đạo", province: 64, district: 352
	},
	{
		id: 11992, name: "Xã Chỉ Đạo", province: 64, district: 352
	},
	{
		id: 11995, name: "Xã Đại Đồng", province: 64, district: 352
	},
	{
		id: 11998, name: "Xã Việt Hưng", province: 64, district: 352
	},
	{
		id: 12001, name: "Xã Tân Quang", province: 64, district: 352
	},
	{
		id: 12004, name: "Xã Đình Dù", province: 64, district: 352
	},
	{
		id: 12007, name: "Xã Minh Hải", province: 64, district: 352
	},
	{
		id: 12010, name: "Xã Lương Tài", province: 64, district: 352
	},
	{
		id: 12013, name: "Xã Trưng Trắc", province: 64, district: 352
	},
	{
		id: 12016, name: "Xã Lạc Hồng", province: 64, district: 352
	},
	{
		id: 12019, name: "Thị trấn Văn Giang", province: 64, district: 353
	},
	{
		id: 12022, name: "Xã Xuân Quan", province: 64, district: 353
	},
	{
		id: 12025, name: "Xã Cửu Cao", province: 64, district: 353
	},
	{
		id: 12028, name: "Xã Phụng Công", province: 64, district: 353
	},
	{
		id: 12031, name: "Xã Nghĩa Trụ", province: 64, district: 353
	},
	{
		id: 12034, name: "Xã Long Hưng", province: 64, district: 353
	},
	{
		id: 12037, name: "Xã Vĩnh Khúc", province: 64, district: 353
	},
	{
		id: 12040, name: "Xã Liên Nghĩa", province: 64, district: 353
	},
	{
		id: 12043, name: "Xã Tân Tiến", province: 64, district: 353
	},
	{
		id: 12046, name: "Xã Thắng Lợi", province: 64, district: 353
	},
	{
		id: 12049, name: "Xã Mễ Sở", province: 64, district: 353
	},
	{
		id: 23281, name: "Phường Quang Trung", province: 65, district: 375
	},
	{
		id: 23284, name: "Phường Duy Tân", province: 65, district: 375
	},
	{
		id: 23287, name: "Phường Quyết Thắng", province: 65, district: 375
	},
	{
		id: 23290, name: "Phường Trường Chinh", province: 65, district: 375
	},
	{
		id: 23293, name: "Phường Thắng Lợi", province: 65, district: 375
	},
	{
		id: 23296, name: "Phường Ngô Mây", province: 65, district: 375
	},
	{
		id: 23299, name: "Phường Thống Nhất", province: 65, district: 375
	},
	{
		id: 23302, name: "Phường Lê Lợi", province: 65, district: 375
	},
	{
		id: 23305, name: "Phường Nguyễn Trãi", province: 65, district: 375
	},
	{
		id: 23308, name: "Phường Trần Hưng Đạo", province: 65, district: 375
	},
	{
		id: 23311, name: "Xã Đắk Cấm", province: 65, district: 375
	},
	{
		id: 23314, name: "Xã Kroong", province: 65, district: 375
	},
	{
		id: 23317, name: "Xã Ngọk Bay", province: 65, district: 375
	},
	{
		id: 23320, name: "Xã Vinh Quang", province: 65, district: 375
	},
	{
		id: 23323, name: "Xã Đắk Blà", province: 65, district: 375
	},
	{
		id: 23326, name: "Xã Ia Chim", province: 65, district: 375
	},
	{
		id: 23327, name: "Xã Đăk Năng", province: 65, district: 375
	},
	{
		id: 23329, name: "Xã Đoàn Kết", province: 65, district: 375
	},
	{
		id: 23332, name: "Xã Chư Hreng", province: 65, district: 375
	},
	{
		id: 23335, name: "Xã Đắk Rơ Wa", province: 65, district: 375
	},
	{
		id: 23338, name: "Xã Hòa Bình", province: 65, district: 375
	},
	{
		id: 23341, name: "Thị trấn Đắk Glei", province: 65, district: 376
	},
	{
		id: 23344, name: "Xã Đắk Plô", province: 65, district: 376
	},
	{
		id: 23347, name: "Xã Đắk Man", province: 65, district: 376
	},
	{
		id: 23350, name: "Xã Đắk Nhoong", province: 65, district: 376
	},
	{
		id: 23353, name: "Xã Đắk Pék", province: 65, district: 376
	},
	{
		id: 23356, name: "Xã Đắk Choong", province: 65, district: 376
	},
	{
		id: 23359, name: "Xã Xốp", province: 65, district: 376
	},
	{
		id: 23362, name: "Xã Mường Hoong", province: 65, district: 376
	},
	{
		id: 23365, name: "Xã Ngọc Linh", province: 65, district: 376
	},
	{
		id: 23368, name: "Xã Đắk Long", province: 65, district: 376
	},
	{
		id: 23371, name: "Xã Đắk Kroong", province: 65, district: 376
	},
	{
		id: 23374, name: "Xã Đắk Môn", province: 65, district: 376
	},
	{
		id: 23377, name: "Thị trấn Plei Cần", province: 65, district: 377
	},
	{
		id: 23380, name: "Xã Đắk Ang", province: 65, district: 377
	},
	{
		id: 23383, name: "Xã Đắk Dục", province: 65, district: 377
	},
	{
		id: 23386, name: "Xã Đắk Nông", province: 65, district: 377
	},
	{
		id: 23389, name: "Xã Đắk Xú", province: 65, district: 377
	},
	{
		id: 23392, name: "Xã Đắk Kan", province: 65, district: 377
	},
	{
		id: 23395, name: "Xã Pờ Y", province: 65, district: 377
	},
	{
		id: 23398, name: "Xã Sa Loong", province: 65, district: 377
	},
	{
		id: 23401, name: "Thị trấn Đắk Tô", province: 65, district: 378
	},
	{
		id: 23427, name: "Xã Đăk Rơ Nga", province: 65, district: 378
	},
	{
		id: 23428, name: "Xã Ngọk Tụ", province: 65, district: 378
	},
	{
		id: 23430, name: "Xã Đăk Trăm", province: 65, district: 378
	},
	{
		id: 23431, name: "Xã Văn Lem", province: 65, district: 378
	},
	{
		id: 23434, name: "Xã Kon Đào", province: 65, district: 378
	},
	{
		id: 23437, name: "Xã Tân Cảnh", province: 65, district: 378
	},
	{
		id: 23440, name: "Xã Diên Bình", province: 65, district: 378
	},
	{
		id: 23443, name: "Xã Pô Kô", province: 65, district: 378
	},
	{
		id: 23527, name: "Thị trấn Sa Thầy", province: 65, district: 379
	},
	{
		id: 23530, name: "Xã Rơ Kơi", province: 65, district: 379
	},
	{
		id: 23533, name: "Xã Sa Nhơn", province: 65, district: 379
	},
	{
		id: 23534, name: "Xã Hơ Moong", province: 65, district: 379
	},
	{
		id: 23535, name: "Xã Ia Đal", province: 65, district: 379
	},
	{
		id: 23536, name: "Xã Mô Rai", province: 65, district: 379
	},
	{
		id: 23537, name: "Xã Ia Dom", province: 65, district: 379
	},
	{
		id: 23538, name: "Xã Ia Tơi", province: 65, district: 379
	},
	{
		id: 23539, name: "Xã Sa Sơn", province: 65, district: 379
	},
	{
		id: 23542, name: "Xã Sa Nghĩa", province: 65, district: 379
	},
	{
		id: 23545, name: "Xã Sa Bình", province: 65, district: 379
	},
	{
		id: 23548, name: "Xã Ya Xiêr", province: 65, district: 379
	},
	{
		id: 23551, name: "Xã Ya Tăng", province: 65, district: 379
	},
	{
		id: 23554, name: "Xã Ya Ly", province: 65, district: 379
	},
	{
		id: 23452, name: "Xã Đắk Nên", province: 65, district: 380
	},
	{
		id: 23455, name: "Xã Đắk Ring", province: 65, district: 380
	},
	{
		id: 23458, name: "Xã Măng Buk", province: 65, district: 380
	},
	{
		id: 23461, name: "Xã Đắk Tăng", province: 65, district: 380
	},
	{
		id: 23464, name: "Xã Ngok Tem", province: 65, district: 380
	},
	{
		id: 23467, name: "Xã Pờ Ê", province: 65, district: 380
	},
	{
		id: 23470, name: "Xã Măng Cành", province: 65, district: 380
	},
	{
		id: 23473, name: "Xã Đắk Long", province: 65, district: 380
	},
	{
		id: 23476, name: "Xã Hiếu", province: 65, district: 380
	},
	{
		id: 23500, name: "Thị trấn Đắk Hà", province: 65, district: 381
	},
	{
		id: 23503, name: "Xã Đắk Pxi", province: 65, district: 381
	},
	{
		id: 23504, name: "Xã Đăk Long", province: 65, district: 381
	},
	{
		id: 23506, name: "Xã Đắk Hring", province: 65, district: 381
	},
	{
		id: 23509, name: "Xã Đắk Ui", province: 65, district: 381
	},
	{
		id: 23510, name: "Xã Đăk Ngọk", province: 65, district: 381
	},
	{
		id: 23512, name: "Xã Đắk Mar", province: 65, district: 381
	},
	{
		id: 23515, name: "Xã Ngok Wang", province: 65, district: 381
	},
	{
		id: 23518, name: "Xã Ngok Réo", province: 65, district: 381
	},
	{
		id: 23521, name: "Xã Hà Mòn", province: 65, district: 381
	},
	{
		id: 23524, name: "Xã Đắk La", province: 65, district: 381
	},
	{
		id: 23479, name: "Thị trấn Đắk Rve", province: 65, district: 382
	},
	{
		id: 23482, name: "Xã Đắk Kôi", province: 65, district: 382
	},
	{
		id: 23485, name: "Xã Đắk Tơ Lung", province: 65, district: 382
	},
	{
		id: 23488, name: "Xã Đắk Ruồng", province: 65, district: 382
	},
	{
		id: 23491, name: "Xã Đắk Pne", province: 65, district: 382
	},
	{
		id: 23494, name: "Xã Đắk Tờ Re", province: 65, district: 382
	},
	{
		id: 23497, name: "Xã Tân Lập", province: 65, district: 382
	},
	{
		id: 23404, name: "Xã Ngọk Lây", province: 65, district: 383
	},
	{
		id: 23407, name: "Xã Đắk Na", province: 65, district: 383
	},
	{
		id: 23410, name: "Xã Măng Ri", province: 65, district: 383
	},
	{
		id: 23413, name: "Xã Ngok Yêu", province: 65, district: 383
	},
	{
		id: 23416, name: "Xã Đắk Sao", province: 65, district: 383
	},
	{
		id: 23417, name: "Xã Đăk Rơ Ông", province: 65, district: 383
	},
	{
		id: 23419, name: "Xã Đắk Tơ Kan", province: 65, district: 383
	},
	{
		id: 23422, name: "Xã Tu Mơ Rông", province: 65, district: 383
	},
	{
		id: 23425, name: "Xã Đắk Hà", province: 65, district: 383
	},
	{
		id: 23446, name: "Xã Tê Xăng", province: 65, district: 383
	},
	{
		id: 23449, name: "Xã Văn Xuôi", province: 65, district: 383
	},
	{
		id: 14320, name: "Phường Đông Thành", province: 66, district: 436
	},
	{
		id: 14323, name: "Phường Tân Thành", province: 66, district: 436
	},
	{
		id: 14326, name: "Phường Thanh Bình", province: 66, district: 436
	},
	{
		id: 14329, name: "Phường Vân Giang", province: 66, district: 436
	},
	{
		id: 14332, name: "Phường Bích Đào", province: 66, district: 436
	},
	{
		id: 14335, name: "Phường Phúc Thành", province: 66, district: 436
	},
	{
		id: 14338, name: "Phường Nam Bình", province: 66, district: 436
	},
	{
		id: 14341, name: "Phường Nam Thành", province: 66, district: 436
	},
	{
		id: 14344, name: "Phường Ninh Khánh", province: 66, district: 436
	},
	{
		id: 14347, name: "Xã Ninh Nhất", province: 66, district: 436
	},
	{
		id: 14350, name: "Xã Ninh Tiến", province: 66, district: 436
	},
	{
		id: 14353, name: "Xã Ninh Phúc", province: 66, district: 436
	},
	{
		id: 14356, name: "Phường Ninh Sơn", province: 66, district: 436
	},
	{
		id: 14359, name: "Phường Ninh Phong", province: 66, district: 436
	},
	{
		id: 14362, name: "Phường Bắc Sơn", province: 66, district: 437
	},
	{
		id: 14365, name: "Phường Trung Sơn", province: 66, district: 437
	},
	{
		id: 14368, name: "Phường Nam Sơn", province: 66, district: 437
	},
	{
		id: 14369, name: "Phường Tây Sơn", province: 66, district: 437
	},
	{
		id: 14371, name: "Xã Yên Sơn", province: 66, district: 437
	},
	{
		id: 14374, name: "Xã Yên Bình", province: 66, district: 437
	},
	{
		id: 14375, name: "Phường Tân Bình", province: 66, district: 437
	},
	{
		id: 14377, name: "Xã Quang Sơn", province: 66, district: 437
	},
	{
		id: 14380, name: "Xã Đông Sơn", province: 66, district: 437
	},
	{
		id: 14383, name: "Thị trấn Nho Quan", province: 66, district: 438
	},
	{
		id: 14386, name: "Xã Xích Thổ", province: 66, district: 438
	},
	{
		id: 14389, name: "Xã Gia Lâm", province: 66, district: 438
	},
	{
		id: 14392, name: "Xã Gia Sơn", province: 66, district: 438
	},
	{
		id: 14395, name: "Xã Thạch Bình", province: 66, district: 438
	},
	{
		id: 14398, name: "Xã Gia Thủy", province: 66, district: 438
	},
	{
		id: 14401, name: "Xã Gia Tường", province: 66, district: 438
	},
	{
		id: 14404, name: "Xã Cúc Phương", province: 66, district: 438
	},
	{
		id: 14407, name: "Xã Phú Sơn", province: 66, district: 438
	},
	{
		id: 14410, name: "Xã Đức Long", province: 66, district: 438
	},
	{
		id: 14413, name: "Xã Lạc Vân", province: 66, district: 438
	},
	{
		id: 14416, name: "Xã Đồng Phong", province: 66, district: 438
	},
	{
		id: 14419, name: "Xã Yên Quang", province: 66, district: 438
	},
	{
		id: 14422, name: "Xã Lạng Phong", province: 66, district: 438
	},
	{
		id: 14425, name: "Xã Thượng Hòa", province: 66, district: 438
	},
	{
		id: 14428, name: "Xã Văn Phong", province: 66, district: 438
	},
	{
		id: 14431, name: "Xã Văn Phương", province: 66, district: 438
	},
	{
		id: 14434, name: "Xã Thanh Lạc", province: 66, district: 438
	},
	{
		id: 14437, name: "Xã Sơn Lai", province: 66, district: 438
	},
	{
		id: 14440, name: "Xã Sơn Thành", province: 66, district: 438
	},
	{
		id: 14443, name: "Xã Văn Phú", province: 66, district: 438
	},
	{
		id: 14446, name: "Xã Phú Lộc", province: 66, district: 438
	},
	{
		id: 14449, name: "Xã Kỳ Phú", province: 66, district: 438
	},
	{
		id: 14452, name: "Xã Quỳnh Lưu", province: 66, district: 438
	},
	{
		id: 14455, name: "Xã Sơn Hà", province: 66, district: 438
	},
	{
		id: 14458, name: "Xã Phú Long", province: 66, district: 438
	},
	{
		id: 14461, name: "Xã Quảng Lạc", province: 66, district: 438
	},
	{
		id: 14464, name: "Thị trấn Me", province: 66, district: 439
	},
	{
		id: 14467, name: "Xã Gia Hòa", province: 66, district: 439
	},
	{
		id: 14470, name: "Xã Gia Hưng", province: 66, district: 439
	},
	{
		id: 14473, name: "Xã Liên Sơn", province: 66, district: 439
	},
	{
		id: 14476, name: "Xã Gia Thanh", province: 66, district: 439
	},
	{
		id: 14479, name: "Xã Gia Vân", province: 66, district: 439
	},
	{
		id: 14482, name: "Xã Gia Phú", province: 66, district: 439
	},
	{
		id: 14485, name: "Xã Gia Xuân", province: 66, district: 439
	},
	{
		id: 14488, name: "Xã Gia Lập", province: 66, district: 439
	},
	{
		id: 14491, name: "Xã Gia Vượng", province: 66, district: 439
	},
	{
		id: 14494, name: "Xã Gia Trấn", province: 66, district: 439
	},
	{
		id: 14497, name: "Xã Gia Thịnh", province: 66, district: 439
	},
	{
		id: 14500, name: "Xã Gia Phương", province: 66, district: 439
	},
	{
		id: 14503, name: "Xã Gia Tân", province: 66, district: 439
	},
	{
		id: 14506, name: "Xã Gia Thắng", province: 66, district: 439
	},
	{
		id: 14509, name: "Xã Gia Trung", province: 66, district: 439
	},
	{
		id: 14512, name: "Xã Gia Minh", province: 66, district: 439
	},
	{
		id: 14515, name: "Xã Gia Lạc", province: 66, district: 439
	},
	{
		id: 14518, name: "Xã Gia Tiến", province: 66, district: 439
	},
	{
		id: 14521, name: "Xã Gia Sinh", province: 66, district: 439
	},
	{
		id: 14524, name: "Xã Gia Phong", province: 66, district: 439
	},
	{
		id: 14527, name: "Thị trấn Thiên Tôn", province: 66, district: 450
	},
	{
		id: 14530, name: "Xã Ninh Giang", province: 66, district: 450
	},
	{
		id: 14533, name: "Xã Trường Yên", province: 66, district: 450
	},
	{
		id: 14536, name: "Xã Ninh Khang", province: 66, district: 450
	},
	{
		id: 14539, name: "Xã Ninh Mỹ", province: 66, district: 450
	},
	{
		id: 14542, name: "Xã Ninh Hòa", province: 66, district: 450
	},
	{
		id: 14545, name: "Xã Ninh Xuân", province: 66, district: 450
	},
	{
		id: 14548, name: "Xã Ninh Hải", province: 66, district: 450
	},
	{
		id: 14551, name: "Xã Ninh Thắng", province: 66, district: 450
	},
	{
		id: 14554, name: "Xã Ninh Vân", province: 66, district: 450
	},
	{
		id: 14557, name: "Xã Ninh An", province: 66, district: 450
	},
	{
		id: 14701, name: "Thị trấn Yên Thịnh", province: 66, district: 451
	},
	{
		id: 14704, name: "Xã Khánh Thượng", province: 66, district: 451
	},
	{
		id: 14707, name: "Xã Khánh Dương", province: 66, district: 451
	},
	{
		id: 14710, name: "Xã Mai Sơn", province: 66, district: 451
	},
	{
		id: 14713, name: "Xã Khánh Thịnh", province: 66, district: 451
	},
	{
		id: 14719, name: "Xã Yên Phong", province: 66, district: 451
	},
	{
		id: 14722, name: "Xã Yên Hòa", province: 66, district: 451
	},
	{
		id: 14725, name: "Xã Yên Thắng", province: 66, district: 451
	},
	{
		id: 14728, name: "Xã Yên Từ", province: 66, district: 451
	},
	{
		id: 14731, name: "Xã Yên Hưng", province: 66, district: 451
	},
	{
		id: 14734, name: "Xã Yên Thành", province: 66, district: 451
	},
	{
		id: 14737, name: "Xã Yên Nhân", province: 66, district: 451
	},
	{
		id: 14740, name: "Xã Yên Mỹ", province: 66, district: 451
	},
	{
		id: 14743, name: "Xã Yên Mạc", province: 66, district: 451
	},
	{
		id: 14746, name: "Xã Yên Đồng", province: 66, district: 451
	},
	{
		id: 14749, name: "Xã Yên Thái", province: 66, district: 451
	},
	{
		id: 14752, name: "Xã Yên Lâm", province: 66, district: 451
	},
	{
		id: 14620, name: "Thị trấn Phát Diệm", province: 66, district: 452
	},
	{
		id: 14623, name: "Thị trấn Bình Minh", province: 66, district: 452
	},
	{
		id: 14626, name: "Xã Xuân Thiện", province: 66, district: 452
	},
	{
		id: 14629, name: "Xã Hồi Ninh", province: 66, district: 452
	},
	{
		id: 14632, name: "Xã Chính Tâm", province: 66, district: 452
	},
	{
		id: 14635, name: "Xã Kim Định", province: 66, district: 452
	},
	{
		id: 14638, name: "Xã Ân Hòa", province: 66, district: 452
	},
	{
		id: 14641, name: "Xã Hùng Tiến", province: 66, district: 452
	},
	{
		id: 14644, name: "Xã Yên Mật", province: 66, district: 452
	},
	{
		id: 14647, name: "Xã Quang Thiện", province: 66, district: 452
	},
	{
		id: 14650, name: "Xã Như Hòa", province: 66, district: 452
	},
	{
		id: 14653, name: "Xã Chất Bình", province: 66, district: 452
	},
	{
		id: 14656, name: "Xã Đồng Hướng", province: 66, district: 452
	},
	{
		id: 14659, name: "Xã Kim Chính", province: 66, district: 452
	},
	{
		id: 14662, name: "Xã Thượng Kiệm", province: 66, district: 452
	},
	{
		id: 14665, name: "Xã Lưu Phương", province: 66, district: 452
	},
	{
		id: 14668, name: "Xã Tân Thành", province: 66, district: 452
	},
	{
		id: 14671, name: "Xã Yên Lộc", province: 66, district: 452
	},
	{
		id: 14674, name: "Xã Lai Thành", province: 66, district: 452
	},
	{
		id: 14677, name: "Xã Định Hóa", province: 66, district: 452
	},
	{
		id: 14680, name: "Xã Văn Hải", province: 66, district: 452
	},
	{
		id: 14683, name: "Xã Kim Tân", province: 66, district: 452
	},
	{
		id: 14686, name: "Xã Kim Mỹ", province: 66, district: 452
	},
	{
		id: 14689, name: "Xã Cồn Thoi", province: 66, district: 452
	},
	{
		id: 14692, name: "Xã Kim Hải", province: 66, district: 452
	},
	{
		id: 14695, name: "Xã Kim Trung", province: 66, district: 452
	},
	{
		id: 14698, name: "Xã Kim Đông", province: 66, district: 452
	},
	{
		id: 14560, name: "Thị trấn Yên Ninh", province: 66, district: 453
	},
	{
		id: 14563, name: "Xã Khánh Tiên", province: 66, district: 453
	},
	{
		id: 14566, name: "Xã Khánh Phú", province: 66, district: 453
	},
	{
		id: 14569, name: "Xã Khánh Hòa", province: 66, district: 453
	},
	{
		id: 14572, name: "Xã Khánh Lợi", province: 66, district: 453
	},
	{
		id: 14575, name: "Xã Khánh An", province: 66, district: 453
	},
	{
		id: 14578, name: "Xã Khánh Cường", province: 66, district: 453
	},
	{
		id: 14581, name: "Xã Khánh Cư", province: 66, district: 453
	},
	{
		id: 14584, name: "Xã Khánh Thiện", province: 66, district: 453
	},
	{
		id: 14587, name: "Xã Khánh Hải", province: 66, district: 453
	},
	{
		id: 14590, name: "Xã Khánh Trung", province: 66, district: 453
	},
	{
		id: 14593, name: "Xã Khánh Mậu", province: 66, district: 453
	},
	{
		id: 14596, name: "Xã Khánh Vân", province: 66, district: 453
	},
	{
		id: 14599, name: "Xã Khánh Hội", province: 66, district: 453
	},
	{
		id: 14602, name: "Xã Khánh Công", province: 66, district: 453
	},
	{
		id: 14608, name: "Xã Khánh Thành", province: 66, district: 453
	},
	{
		id: 14611, name: "Xã Khánh Nhạc", province: 66, district: 453
	},
	{
		id: 14614, name: "Xã Khánh Thủy", province: 66, district: 453
	},
	{
		id: 14617, name: "Xã Khánh Hồng", province: 66, district: 453
	},
	{
		id: 3646, name: "Phường Chiềng Lề", province: 67, district: 580
	},
	{
		id: 3649, name: "Phường Tô Hiệu", province: 67, district: 580
	},
	{
		id: 3652, name: "Phường Quyết Thắng", province: 67, district: 580
	},
	{
		id: 3655, name: "Phường Quyết Tâm", province: 67, district: 580
	},
	{
		id: 3658, name: "Xã Chiềng Cọ", province: 67, district: 580
	},
	{
		id: 3661, name: "Xã Chiềng Đen", province: 67, district: 580
	},
	{
		id: 3664, name: "Xã Chiềng Xôm", province: 67, district: 580
	},
	{
		id: 3667, name: "Phường Chiềng An", province: 67, district: 580
	},
	{
		id: 3670, name: "Phường Chiềng Cơi", province: 67, district: 580
	},
	{
		id: 3673, name: "Xã Chiềng Ngần", province: 67, district: 580
	},
	{
		id: 3676, name: "Xã Hua La", province: 67, district: 580
	},
	{
		id: 3679, name: "Phường Chiềng Sinh", province: 67, district: 580
	},
	{
		id: 3682, name: "Xã Mường Chiên", province: 67, district: 581
	},
	{
		id: 3685, name: "Xã Cà Nàng", province: 67, district: 581
	},
	{
		id: 3688, name: "Xã Chiềng Khay", province: 67, district: 581
	},
	{
		id: 3694, name: "Xã Mường Giôn", province: 67, district: 581
	},
	{
		id: 3697, name: "Xã Pá Ma Pha Khinh", province: 67, district: 581
	},
	{
		id: 3700, name: "Xã Chiềng Ơn", province: 67, district: 581
	},
	{
		id: 3703, name: "Xã Mường Giàng", province: 67, district: 581
	},
	{
		id: 3706, name: "Xã Chiềng Bằng", province: 67, district: 581
	},
	{
		id: 3709, name: "Xã Mường Sại", province: 67, district: 581
	},
	{
		id: 3712, name: "Xã Nậm Ét", province: 67, district: 581
	},
	{
		id: 3718, name: "Xã Chiềng Khoang", province: 67, district: 581
	},
	{
		id: 3808, name: "Thị trấn Ít Ong", province: 67, district: 582
	},
	{
		id: 3811, name: "Xã Nậm Giôn", province: 67, district: 582
	},
	{
		id: 3814, name: "Xã Chiềng Lao", province: 67, district: 582
	},
	{
		id: 3817, name: "Xã Hua Trai", province: 67, district: 582
	},
	{
		id: 3820, name: "Xã Ngọc Chiến", province: 67, district: 582
	},
	{
		id: 3823, name: "Xã Mường Trai", province: 67, district: 582
	},
	{
		id: 3826, name: "Xã Nậm Păm", province: 67, district: 582
	},
	{
		id: 3829, name: "Xã Chiềng Muôn", province: 67, district: 582
	},
	{
		id: 3832, name: "Xã Chiềng Ân", province: 67, district: 582
	},
	{
		id: 3835, name: "Xã Pi Toong", province: 67, district: 582
	},
	{
		id: 3838, name: "Xã Chiềng Công", province: 67, district: 582
	},
	{
		id: 3841, name: "Xã Tạ Bú", province: 67, district: 582
	},
	{
		id: 3844, name: "Xã Chiềng San", province: 67, district: 582
	},
	{
		id: 3847, name: "Xã Mường Bú", province: 67, district: 582
	},
	{
		id: 3850, name: "Xã Chiềng Hoa", province: 67, district: 582
	},
	{
		id: 3853, name: "Xã Mường Chùm", province: 67, district: 582
	},
	{
		id: 3721, name: "Thị trấn Thuận Châu", province: 67, district: 583
	},
	{
		id: 3724, name: "Xã Phỏng Lái", province: 67, district: 583
	},
	{
		id: 3727, name: "Xã Mường É", province: 67, district: 583
	},
	{
		id: 3730, name: "Xã Chiềng Pha", province: 67, district: 583
	},
	{
		id: 3733, name: "Xã Chiềng La", province: 67, district: 583
	},
	{
		id: 3736, name: "Xã Chiềng Ngàm", province: 67, district: 583
	},
	{
		id: 3739, name: "Xã Liệp Tè", province: 67, district: 583
	},
	{
		id: 3742, name: "Xã É Tòng", province: 67, district: 583
	},
	{
		id: 3745, name: "Xã Phỏng Lập", province: 67, district: 583
	},
	{
		id: 3751, name: "Xã Chiềng Ly", province: 67, district: 583
	},
	{
		id: 3754, name: "Xã Nong Lay", province: 67, district: 583
	},
	{
		id: 3757, name: "Xã Mường Khiêng", province: 67, district: 583
	},
	{
		id: 3760, name: "Xã Mường Bám", province: 67, district: 583
	},
	{
		id: 3763, name: "Xã Long Hẹ", province: 67, district: 583
	},
	{
		id: 3766, name: "Xã Chiềng Bôm", province: 67, district: 583
	},
	{
		id: 3769, name: "Xã Thôn Mòn", province: 67, district: 583
	},
	{
		id: 3772, name: "Xã Tòng Lệnh", province: 67, district: 583
	},
	{
		id: 3775, name: "Xã Tòng Cọ", province: 67, district: 583
	},
	{
		id: 3778, name: "Xã Bó Mười", province: 67, district: 583
	},
	{
		id: 3781, name: "Xã Co Mạ", province: 67, district: 583
	},
	{
		id: 3784, name: "Xã Púng Tra", province: 67, district: 583
	},
	{
		id: 3787, name: "Xã Chiềng Pấc", province: 67, district: 583
	},
	{
		id: 3790, name: "Xã Nậm Lầu", province: 67, district: 583
	},
	{
		id: 3793, name: "Xã Bon Phặng", province: 67, district: 583
	},
	{
		id: 3796, name: "Xã Co Tòng", province: 67, district: 583
	},
	{
		id: 3799, name: "Xã Muội Nọi", province: 67, district: 583
	},
	{
		id: 3802, name: "Xã Pá Lông", province: 67, district: 583
	},
	{
		id: 3805, name: "Xã Bản Lầm", province: 67, district: 583
	},
	{
		id: 3856, name: "Thị trấn Bắc Yên", province: 67, district: 584
	},
	{
		id: 3859, name: "Xã Phiêng Ban", province: 67, district: 584
	},
	{
		id: 3862, name: "Xã Hang Chú", province: 67, district: 584
	},
	{
		id: 3865, name: "Xã Xín Vàng", province: 67, district: 584
	},
	{
		id: 3868, name: "Xã Tà Xùa", province: 67, district: 584
	},
	{
		id: 3869, name: "Xã Háng Đồng", province: 67, district: 584
	},
	{
		id: 3871, name: "Xã Bắc Ngà", province: 67, district: 584
	},
	{
		id: 3874, name: "Xã Làng Chếu", province: 67, district: 584
	},
	{
		id: 3877, name: "Xã Chim Vàn", province: 67, district: 584
	},
	{
		id: 3880, name: "Xã Mường Khoa", province: 67, district: 584
	},
	{
		id: 3883, name: "Xã Song Pe", province: 67, district: 584
	},
	{
		id: 3886, name: "Xã Hồng Ngài", province: 67, district: 584
	},
	{
		id: 3889, name: "Xã Tạ Khoa", province: 67, district: 584
	},
	{
		id: 3890, name: "Xã Hua Nhàn", province: 67, district: 584
	},
	{
		id: 3892, name: "Xã Phiêng Kôn", province: 67, district: 584
	},
	{
		id: 3895, name: "Xã Chiềng Sại", province: 67, district: 584
	},
	{
		id: 3898, name: "Thị trấn Phù Yên", province: 67, district: 585
	},
	{
		id: 3901, name: "Xã Suối Tọ", province: 67, district: 585
	},
	{
		id: 3904, name: "Xã Mường Thải", province: 67, district: 585
	},
	{
		id: 3907, name: "Xã Mường Cơi", province: 67, district: 585
	},
	{
		id: 3910, name: "Xã Quang Huy", province: 67, district: 585
	},
	{
		id: 3913, name: "Xã Huy Bắc", province: 67, district: 585
	},
	{
		id: 3916, name: "Xã Huy Thượng", province: 67, district: 585
	},
	{
		id: 3919, name: "Xã Tân Lang", province: 67, district: 585
	},
	{
		id: 3922, name: "Xã Gia Phù", province: 67, district: 585
	},
	{
		id: 3925, name: "Xã Tường Phù", province: 67, district: 585
	},
	{
		id: 3928, name: "Xã Huy Hạ", province: 67, district: 585
	},
	{
		id: 3931, name: "Xã Huy Tân", province: 67, district: 585
	},
	{
		id: 3934, name: "Xã Mường Lang", province: 67, district: 585
	},
	{
		id: 3937, name: "Xã Suối Bau", province: 67, district: 585
	},
	{
		id: 3940, name: "Xã Huy Tường", province: 67, district: 585
	},
	{
		id: 3943, name: "Xã Mường Do", province: 67, district: 585
	},
	{
		id: 3946, name: "Xã Sập Xa", province: 67, district: 585
	},
	{
		id: 3949, name: "Xã Tường Thượng", province: 67, district: 585
	},
	{
		id: 3952, name: "Xã Tường Tiến", province: 67, district: 585
	},
	{
		id: 3955, name: "Xã Tường Phong", province: 67, district: 585
	},
	{
		id: 3958, name: "Xã Tường Hạ", province: 67, district: 585
	},
	{
		id: 3961, name: "Xã Kim Bon", province: 67, district: 585
	},
	{
		id: 3964, name: "Xã Mường Bang", province: 67, district: 585
	},
	{
		id: 3967, name: "Xã Đá Đỏ", province: 67, district: 585
	},
	{
		id: 3970, name: "Xã Tân Phong", province: 67, district: 585
	},
	{
		id: 3973, name: "Xã Nam Phong", province: 67, district: 585
	},
	{
		id: 3976, name: "Xã Bắc Phong", province: 67, district: 585
	},
	{
		id: 4105, name: "Thị trấn Hát Lót", province: 67, district: 586
	},
	{
		id: 4108, name: "Xã Chiềng Sung", province: 67, district: 586
	},
	{
		id: 4111, name: "Xã Mường Bằng", province: 67, district: 586
	},
	{
		id: 4114, name: "Xã Chiềng Chăn", province: 67, district: 586
	},
	{
		id: 4117, name: "Xã Mương Tranh", province: 67, district: 586
	},
	{
		id: 4120, name: "Xã Chiềng Ban", province: 67, district: 586
	},
	{
		id: 4123, name: "Xã Chiềng Mung", province: 67, district: 586
	},
	{
		id: 4126, name: "Xã Mường Bon", province: 67, district: 586
	},
	{
		id: 4129, name: "Xã Chiềng Chung", province: 67, district: 586
	},
	{
		id: 4132, name: "Xã Chiềng Mai", province: 67, district: 586
	},
	{
		id: 4135, name: "Xã Hát Lót", province: 67, district: 586
	},
	{
		id: 4136, name: "Xã Nà Bó", province: 67, district: 586
	},
	{
		id: 4138, name: "Xã Cò Nòi", province: 67, district: 586
	},
	{
		id: 4141, name: "Xã Chiềng Nơi", province: 67, district: 586
	},
	{
		id: 4144, name: "Xã Phiêng Cằm", province: 67, district: 586
	},
	{
		id: 4147, name: "Xã Chiềng Dong", province: 67, district: 586
	},
	{
		id: 4150, name: "Xã Chiềng Kheo", province: 67, district: 586
	},
	{
		id: 4153, name: "Xã Chiềng Ve", province: 67, district: 586
	},
	{
		id: 4156, name: "Xã Chiềng Lương", province: 67, district: 586
	},
	{
		id: 4159, name: "Xã Phiêng Pằn", province: 67, district: 586
	},
	{
		id: 4162, name: "Xã Nà Ơt", province: 67, district: 586
	},
	{
		id: 4165, name: "Xã Tà Hộc", province: 67, district: 586
	},
	{
		id: 4060, name: "Thị trấn Yên Châu", province: 67, district: 587
	},
	{
		id: 4063, name: "Xã Chiềng Đông", province: 67, district: 587
	},
	{
		id: 4066, name: "Xã Sập Vạt", province: 67, district: 587
	},
	{
		id: 4069, name: "Xã Chiềng Sàng", province: 67, district: 587
	},
	{
		id: 4072, name: "Xã Chiềng Pằn", province: 67, district: 587
	},
	{
		id: 4075, name: "Xã Viêng Lán", province: 67, district: 587
	},
	{
		id: 4078, name: "Xã Chiềng Hặc", province: 67, district: 587
	},
	{
		id: 4081, name: "Xã Mường Lựm", province: 67, district: 587
	},
	{
		id: 4084, name: "Xã Chiềng On", province: 67, district: 587
	},
	{
		id: 4087, name: "Xã Yên Sơn", province: 67, district: 587
	},
	{
		id: 4090, name: "Xã Chiềng Khoi", province: 67, district: 587
	},
	{
		id: 4093, name: "Xã Tú Nang", province: 67, district: 587
	},
	{
		id: 4096, name: "Xã Lóng Phiêng", province: 67, district: 587
	},
	{
		id: 4099, name: "Xã Phiêng Khoài", province: 67, district: 587
	},
	{
		id: 4102, name: "Xã Chiềng Tương", province: 67, district: 587
	},
	{
		id: 4168, name: "Thị trấn Sông Mã", province: 67, district: 588
	},
	{
		id: 4171, name: "Xã Bó Sinh", province: 67, district: 588
	},
	{
		id: 4174, name: "Xã Pú Pẩu", province: 67, district: 588
	},
	{
		id: 4177, name: "Xã Chiềng Phung", province: 67, district: 588
	},
	{
		id: 4180, name: "Xã Chiềng En", province: 67, district: 588
	},
	{
		id: 4183, name: "Xã Mường Lầm", province: 67, district: 588
	},
	{
		id: 4186, name: "Xã Nậm Ty", province: 67, district: 588
	},
	{
		id: 4189, name: "Xã Đứa Mòn", province: 67, district: 588
	},
	{
		id: 4192, name: "Xã Yên Hưng", province: 67, district: 588
	},
	{
		id: 4195, name: "Xã Chiềng Sơ", province: 67, district: 588
	},
	{
		id: 4198, name: "Xã Nà Ngựu", province: 67, district: 588
	},
	{
		id: 4201, name: "Xã Nậm Mằn", province: 67, district: 588
	},
	{
		id: 4204, name: "Xã Chiềng Khoong", province: 67, district: 588
	},
	{
		id: 4207, name: "Xã Chiềng Cang", province: 67, district: 588
	},
	{
		id: 4210, name: "Xã Huổi Một", province: 67, district: 588
	},
	{
		id: 4213, name: "Xã Mường Sai", province: 67, district: 588
	},
	{
		id: 4216, name: "Xã Mường Cai", province: 67, district: 588
	},
	{
		id: 4219, name: "Xã Mường Hung", province: 67, district: 588
	},
	{
		id: 4222, name: "Xã Chiềng Khương", province: 67, district: 588
	},
	{
		id: 3979, name: "Thị trấn Mộc Châu", province: 67, district: 589
	},
	{
		id: 3982, name: "Thị trấn Nt Mộc Châu", province: 67, district: 589
	},
	{
		id: 3985, name: "Xã Chiềng Sơn", province: 67, district: 589
	},
	{
		id: 3988, name: "Xã Tân Hợp", province: 67, district: 589
	},
	{
		id: 3991, name: "Xã Qui Hướng", province: 67, district: 589
	},
	{
		id: 3997, name: "Xã Tân Lập", province: 67, district: 589
	},
	{
		id: 4000, name: "Xã Nà Mường", province: 67, district: 589
	},
	{
		id: 4003, name: "Xã Tà Lai", province: 67, district: 589
	},
	{
		id: 4012, name: "Xã Chiềng Hắc", province: 67, district: 589
	},
	{
		id: 4015, name: "Xã Hua Păng", province: 67, district: 589
	},
	{
		id: 4024, name: "Xã Chiềng Khừa", province: 67, district: 589
	},
	{
		id: 4027, name: "Xã Mường Sang", province: 67, district: 589
	},
	{
		id: 4030, name: "Xã Đông Sang", province: 67, district: 589
	},
	{
		id: 4033, name: "Xã Phiêng Luông", province: 67, district: 589
	},
	{
		id: 4045, name: "Xã Lóng Sập", province: 67, district: 589
	},
	{
		id: 4225, name: "Xã Sam Kha", province: 67, district: 590
	},
	{
		id: 4228, name: "Xã Púng Bánh", province: 67, district: 590
	},
	{
		id: 4231, name: "Xã Xốp Cộp", province: 67, district: 590
	},
	{
		id: 4234, name: "Xã Dồm Cang", province: 67, district: 590
	},
	{
		id: 4237, name: "Xã Nậm Lạnh", province: 67, district: 590
	},
	{
		id: 4240, name: "Xã Mường Lèo", province: 67, district: 590
	},
	{
		id: 4243, name: "Xã Mường Và", province: 67, district: 590
	},
	{
		id: 4246, name: "Xã Mường Lạn", province: 67, district: 590
	},
	{
		id: 3994, name: "Xã Suối Bàng", province: 67, district: 746
	},
	{
		id: 4006, name: "Xã Song Khủa", province: 67, district: 746
	},
	{
		id: 4009, name: "Xã Liên Hoà", province: 67, district: 746
	},
	{
		id: 4018, name: "Xã Tô Múa", province: 67, district: 746
	},
	{
		id: 4021, name: "Xã Mường Tè", province: 67, district: 746
	},
	{
		id: 4036, name: "Xã Chiềng Khoa", province: 67, district: 746
	},
	{
		id: 4039, name: "Xã Mường Men", province: 67, district: 746
	},
	{
		id: 4042, name: "Xã Quang Minh", province: 67, district: 746
	},
	{
		id: 4048, name: "Xã Vân Hồ", province: 67, district: 746
	},
	{
		id: 4051, name: "Xã Lóng Luông", province: 67, district: 746
	},
	{
		id: 4054, name: "Xã Chiềng Yên", province: 67, district: 746
	},
	{
		id: 4056, name: "Xã Chiềng Xuân", province: 67, district: 746
	},
	{
		id: 4057, name: "Xã Xuân Nha", province: 67, district: 746
	},
	{
		id: 4058, name: "Xã Tân Xuân", province: 67, district: 746
	}
];

module.exports = {
	LIST_PROVINCE,
	LIST_DISTRICT,
	LIST_WARD
};

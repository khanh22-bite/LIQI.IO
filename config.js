const CONFIG = {
  API_URL: "https://www.tienrv.com/api/vps/public/accounts",
  CTV_NAME: "Khánh LIQI",
  CTV_PHONE: "0329675037",
  ZALO_LINK: "https://zalo.me/0329675037",
  ACCOUNT_PREFIX: "KK", // Tiền tố mới hiển thị (ví dụ: KK361)
  
  // Hàm tính tiền chênh lệch tự động dựa trên mức giá gốc của acc
  getExtraPrice: function(basePrice) {
    if (basePrice < 1000000) {
      return 50000;      // Dưới 1 triệu: cộng 50k
    } else if (basePrice < 2000000) {
      return 100000;     // Từ 1 - 2 triệu: cộng 100k
    } else if (basePrice < 3000000) {
      return 200000;     // Từ 2 - 3 triệu: cộng 200k
    } else if (basePrice <= 5000000) {
      return 250000;     // Từ 3 - 5 triệu: cộng 250k
    } else if (basePrice <= 10000000) {
      return 350000;     // Từ 5 - 10 triệu: cộng 350k
    } else {
      return 500000;     // Trên 10 triệu: cộng 500k
    }
  }
};

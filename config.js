const CONFIG = {
  API_URL: "https://www.tienrv.com/api/vps/public/accounts",
  CTV_NAME: "Khánh LIQI",
  CTV_PHONE: "0329675037",
  ZALO_LINK: "https://zalo.me/0329675037",
  ACCOUNT_PREFIX: "KK",
  
  getExtraPrice: function(basePrice) {
    if (basePrice < 1000000) {
      return 50000;
    } else if (basePrice < 2000000) {
      return 100000;
    } else if (basePrice < 3000000) {
      return 200000;
    } else if (basePrice <= 5000000) {
      return 250000;
    } else if (basePrice <= 10000000) {
      return 350000;
    } else {
      return 500000;
    }
  }
};

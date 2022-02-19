import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          "Home":
            "Home",
          "Page": "Page",
        'Category':"Category",
        'Signin':"Signin ",
        "Signup":"Signup",
        "Signout":"Signout",
        "Login":"Login",
        "Total items":"Total items",
        "sneaker":"sneaker",
        "Pant":"Pant",
        "Clother":"Clother",
        "Total Price":"Total Price",
        }
      },
      vi: {
        translations: {
          "Home":
            "Trang Chủ",
            "Category":'Danh Mục',
          "Page": "Trang",
          "Pant":"Quần",
          "sneaker":'Giày',
          
          'Clother':'Áo',
          'Signin':"Đăng Nhập",
        "Signup":"Đăng Kí",
      "Signout":"Đăng Xuất",
      "Login":"Đăng Nhập",
      "Delete":"xóa",
      "Total Price":"Tổng Tiền",
      "Total items":"Tổng Sản Phẩm",
      "Clear Cart":"Xóa Giỏ Hàng"

        }
      }
    },
    fallbackLng: "vi",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

import { ICON_PACKS, TRANS_TYPE } from "configs";
import _ from "lodash";
import moment from "moment";

export const _mockDetailReport = {
  total: 2000000,
  transactionBooks: [
    {
      icon: {
        name: "archive"
      },
      description: "Tiền ăn chi tiêu hằng ngày",
      amount: 1500000,
      title: "Tiền mặt"
    },
    {
      icon: {
        name: "credit-card"
      },
      description: "Nhận lương và chi tiêu online",
      amount: 500000,
      title: "Techcombank"
    },
  ]
}

export const _mockDetailTransBook = {
  total: -550000,
  transactions: [
    {
      group: {
        title: "Ăn uống",
        icon: {
          name: "home"
        }
      },
      description: "Ăn lẩu buffet hải sản",
      amount: -500000,
      date: moment().add(-1, "day")
    },
    {
      group: {
        title: "Xe cộ",
        icon: {
          name: "car"
        }
      },
      description: "Đổ xăng",
      amount: -50000,
      date: moment().add(-2, "day")
    },
  ]
}

export const _mockTransGroups = [
  {
    icon: {
      name: "heart",
    },
    title: "Bạn bè & Người yêu",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "shield-outline",
    },
    title: "Bảo hiểm",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "car",
    },
    title: "Di chuyển",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "tools",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Bảo dưỡng",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "parking",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Gửi xe",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "taxi",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Taxi",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "fuel",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Xăng dầu",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "navigation-2",
    },
    title: "Du lịch",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "family-restroom",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Gia đình",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "child-friendly",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Con cái",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "home",
    },
    title: "Dịch vụ gia đình",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "home-currency-usd",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Sửa chữa nhà cửa",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "dog-service",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Vật nuôi",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "history-edu",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Giáo dục",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "book",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Sách",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "gamepad-variant",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Giải trí",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "film",
    },
    title: "Phim ảnh",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "gamepad-variant",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Trò chơi",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "attach-money",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Hoá đơn & Tiện ích",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "gas-station",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Hoá đơn gas",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "television-box",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Hoá đơn TV",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "microsoft-internet-explorer",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Hoá đơn Internet",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "droplet",
    },
    title: "Hoá đơn nước",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "flash",
    },
    title: "Hoá đơn điện",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "phone",
    },
    title: "Hoá đơn điện thoại",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "home-plus",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Thuê nhà",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "shopping-cart",
    },
    title: "Mua sắm",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "shoe-formal",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Mua giày dép",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "ring",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Mua phụ kiện",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "tshirt-crew",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Mua quần áo",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "camera",
    },
    title: "Mua thiết bị điện tử",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "gift",
    },
    title: "Quà tặng & Quyên góp",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "money",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Rút tiền",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "food",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Sức khoẻ",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "heart-plus",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Khám chữa bệnh",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "medical-bag",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Thuốc",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "sports-handball",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Thể thao",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "food",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Ăn uống",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "local-cafe",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Cà phê",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "restaurant-menu",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Nhà hàng",
    type: TRANS_TYPE.OUTPUT.value,
  },
  {
    icon: {
      name: "clipboard-arrow-up",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Các chi phí khác",
    type: TRANS_TYPE.OUTPUT.value,
    children: []
  },
  {
    icon: {
      name: "archive-arrow-up-outline",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Bán đồ",
    type: TRANS_TYPE.INPUT.value,
    children: []
  },
  {
    icon: {
      name: "cash-plus",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Lương",
    type: TRANS_TYPE.INPUT.value,
    children: []
  },
  {
    icon: {
      name: "award",
    },
    title: "Thưởng",
    type: TRANS_TYPE.INPUT.value,
    children: []
  },
  {
    icon: {
      name: "clipboard-plus-outline",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Thu nhập khác",
    type: TRANS_TYPE.INPUT.value,
    children: []
  },
  // {
  //   icon: {
  //     name: "food",
  //     pack: ICON_PACKS.MATERIAL_COMMUNITY
  //   },
  //   title: "Thu nợ",
  //   type: TRANS_TYPE.LOAN,
  // },
  // {
  //   icon: {
  //     name: "food",
  //     pack: ICON_PACKS.MATERIAL_COMMUNITY
  //   },
  //   title: "Đi vay",
  //   type: TRANS_TYPE.LOAN,
  // },
  // {
  //   icon: {
  //     name: "food",
  //     pack: ICON_PACKS.MATERIAL_COMMUNITY
  //   },
  //   title: "Cho vay",
  //   type: TRANS_TYPE.LOAN,
  // },
  // {
  //   icon: {
  //     name: "food",
  //     pack: ICON_PACKS.MATERIAL_COMMUNITY
  //   },
  //   title: "Trả nợ",
  //   type: TRANS_TYPE.LOAN,
  // },
]
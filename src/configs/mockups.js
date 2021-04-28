import { ICON_PACKS, PLAN_GROUPS, TRANS_TYPE } from "configs";
import _ from "lodash";
import moment from "moment";

export const _mockupPlans = [
  {
    title: "Phương pháp 6 hũ tiền (JARS)",
    name: "JARS",
    description: "Phương pháp 6 hũ tiền có thể giúp kiểm soát tài chính của gia đình mình một cách thông thái với việc phân chia tài chính hợp lý với 6 chiếc hũ riêng biệt.",
    icon: {
      name: "cube"
    },
    groups: [
      {
        title: "NEC (Quỹ thiết yếu)",
        value: 0.55,
        name: PLAN_GROUPS.NEC,
        description: "NEC giúp bạn đảm bảo nhu cầu thiết yếu, sinh hoạt hàng ngày của cuộc sống như ăn uống, sinh hoạt, chi trả hóa đơn và mua sắm cần thiết."
      },
      {
        title: "LTS (Quỹ tiết kiệm dài hạn)",
        value: 0.1,
        name: PLAN_GROUPS.SAVE,
        description: "LTS giúp bạn đảm bảo những mục tiêu dài hạn như mua nhà, mua xe, hoặc sử dụng cho mục đích trong tương lai."
      },
      {
        title: "EDU (Quỹ giáo dục)",
        value: 0.1,
        name: PLAN_GROUPS.EDU,
        description: "EDU giúp bạn đầu tư cho bản thân, nhằm nâng cao trình độ và kiến thức góp phần tăng thu nhập chung của bạn."
      },
      {
        title: "PLAY (Quỹ hưởng thụ)",
        value: 0.1,
        name: PLAN_GROUPS.PLAY,
        description: "PLAY giúp bạn chi trả cho các mục đích giải trí, mua sắm xa xỉ, bạn bè, ..."
      },
      {
        title: "FFA (Quỹ tự do tài chính)",
        value: 0.1,
        name: PLAN_GROUPS.FFA,
        description: "FFA có thể coi như quỹ đầu tư cho mục đích khác, nhằm đem lại lợi nhuận cho mình như việc tiết kiệm, hoặc đầu tư chứng khoán, ... Chú ý chỉ dùng quỹ này cho mục đích đầu tư."
      },
      {
        title: "GIVE (Quỹ từ thiện)",
        value: 0.05,
        name: PLAN_GROUPS.GIVE,
        description: "GIVE là quỹ được sử dụng để giúp đỡ người khác như bạn bè, cộng đồng."
      },
    ]
  },
  {
    title: "Phương pháp 50/20/30",
    name: "50/20/30",
    description: "Phương pháp đơn giản và hiệu quả để quản lý nguồn tiền bằng cách chia thành 3 nhóm chi chủ yếu với tối đa chi phí bạn có thể bỏ ra dựa trên nguồn tiền của mình",
    icon: {
      name: "bar-chart"
    },
    groups: [
      {
        title: "NEC (Quỹ thiết yếu)",
        value: 0.5,
        name: PLAN_GROUPS.NEC,
        description: "NEC giúp bạn đảm bảo nhu cầu thiết yếu, sinh hoạt hàng ngày của cuộc sống như ăn uống, sinh hoạt, chi trả hóa đơn và mua sắm cần thiết."
      },
      {
        title: "SAVE (Quỹ tiết kiệm)",
        value: 0.2,
        name: PLAN_GROUPS.SAVE,
        description: "SAVE giúp bạn đảm bảo những mục tiêu dài hạn như mua nhà, mua xe, hoặc sử dụng cho mục đích trong tương lai."
      },
      {
        title: "NEED (Quỹ hưởng thụ)",
        value: 0.3,
        name: PLAN_GROUPS.NEED,
        description: "PLAY giúp bạn chi trả cho các mục đích giải trí, mua sắm xa xỉ, bạn bè, ..."
      },
    ]
  }
]

export const _mockupTransGroupColors = {
  "Bạn bè & Người yêu": "#5b6d5b",
  "Bảo hiểm": "#ca8a8b",
  "Di chuyển": "#e2bcb7",
  "Bảo dưỡng": "#f6e6e4",
  "Gửi xe": "#fbe0c4",
  "Taxi": "#8ab6d6",
  "Xăng dầu": "#2978b5",
  "Du lịch": "#0061a8",
  "Gia đình": "#845460",
  "Con cái": "#ead3cb",
  "Dịch vụ gia đình": "#bdc7c9",
  "Sửa chữa nhà cửa": "#2b4f60",
  "Vật nuôi": "#f8f5f1",
  "Giáo dục": "#f8a488",
  "Sách": "#5aa897",
  "Giải trí": "#45526c",
  "Phim ảnh": "#f7f3e9",
  "Trò chơi": "#a3d2ca",
  "Hoá đơn & Tiện ích": "#5eaaa8",
  "Hoá đơn gas": "#f05945",
  "Hoá đơn TV": "#3a6351",
  "Hoá đơn Internet": "#f2edd7",
  "Hoá đơn nước": "#e48257",
  "Hoá đơn điện": "#393232",
  "Hoá đơn điện thoại": "#cc7351",
  "Thuê nhà": "#e08f62",
  "Mua sắm": "#ded7b1",
  "Mua giày dép": "#9dab86",
  "Mua phụ kiện": "#c5d7bd",
  "Mua quần áo": "#9fb8ad",
  "Mua thiết bị điện tử": "#383e56",
  "Quà tặng & Quyên góp": "#fb743e",
  "Sức khoẻ": "#ef4f4f",
  "Khám chữa bệnh": "#ee9595",
  "Thuốc": "#ffcda3",
  "Thể thao": "#74c7b8",
  "Ăn uống": "#999b84",
  "Cà phê": "#d8ac9c",
  "Nhà hàng": "#efd9d1",
  "Các chi phí khác": "#f4eeed",
  "Bán đồ": "#fcdada",
  "Lương": "#5c969e",
  "Thưởng": "#ffa5a5",
  "Thu nhập khác": "#3d7ea6",
}

export const _mockTransGroups = [
  {
    icon: {
      name: "heart",
    },
    title: "Bạn bè & Người yêu",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED],
  },
  {
    icon: {
      name: "shield-outline",
    },
    title: "Bảo hiểm",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "car",
    },
    title: "Di chuyển",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "tools",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Bảo dưỡng",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "parking",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Gửi xe",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "taxi",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Taxi",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "fuel",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Xăng dầu",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "navigation-2",
    },
    title: "Du lịch",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "family-restroom",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Gia đình",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "child-friendly",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Con cái",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "home",
    },
    title: "Dịch vụ gia đình",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "home-currency-usd",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Sửa chữa nhà cửa",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "dog-service",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Vật nuôi",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "history-edu",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Giáo dục",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.EDU, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "book",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Sách",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.EDU, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "gamepad-variant",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Giải trí",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "film",
    },
    title: "Phim ảnh",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "gamepad-variant",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Trò chơi",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "attach-money",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Hoá đơn & Tiện ích",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "gas-station",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Hoá đơn gas",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "television-box",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Hoá đơn TV",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "microsoft-internet-explorer",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Hoá đơn Internet",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "droplet",
    },
    title: "Hoá đơn nước",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "flash",
    },
    title: "Hoá đơn điện",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "phone",
    },
    title: "Hoá đơn điện thoại",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "home-plus",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Thuê nhà",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "shopping-cart",
    },
    title: "Mua sắm",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "shoe-formal",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Mua giày dép",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "ring",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Mua phụ kiện",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "tshirt-crew",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Mua quần áo",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "camera",
    },
    title: "Mua thiết bị điện tử",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "gift",
    },
    title: "Quà tặng & Quyên góp",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.GIVE, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "food",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Sức khoẻ",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.NEC, PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "heart-plus",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Khám chữa bệnh",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "medical-bag",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Thuốc",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "sports-handball",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Thể thao",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "food",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Ăn uống",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.NEC]
  },
  {
    icon: {
      name: "local-cafe",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Cà phê",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "restaurant-menu",
      pack: ICON_PACKS.MATERIAL
    },
    title: "Nhà hàng",
    type: TRANS_TYPE.OUTPUT.value,
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
  },
  {
    icon: {
      name: "clipboard-arrow-up",
      pack: ICON_PACKS.MATERIAL_COMMUNITY
    },
    title: "Các chi phí khác",
    type: TRANS_TYPE.OUTPUT.value,
    children: [],
    groups: [PLAN_GROUPS.PLAY, PLAN_GROUPS.NEED]
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

export const _mockupSelectTimes = [
  {
    icon: {
      pack: ICON_PACKS.MATERIAL_COMMUNITY,
      name: "calendar-week"
    },
    name: "Tuần",
    formatRange: (date) => ({
      start: moment(date).startOf("w").toDate(),
      end: moment(date).endOf("w").toDate()
    }),
    formatChart: "DD",
    format: "w",
    title: (date) => `${moment(date).startOf("w").format("DD/MM")} - ${moment(date).endOf("w").format("DD/MM")}`,
    getLabel: (date) => `${date.format("DD")}`
  },
  {
    icon: {
      pack: ICON_PACKS.MATERIAL_COMMUNITY,
      name: "calendar-month"
    },
    name: "Tháng",
    formatRange: (date) => ({
      start: moment(date).startOf("M").toDate(),
      end: moment(date).endOf("M").toDate()
    }),
    formatChart: "w",
    format: "M",
    title: (date) => `${moment(date).format("MM")}`,
    getLabel: (date) => `${date.startOf("w").format("DD")} - ${date.endOf("w").format("DD")}`
  },
  {
    icon: {
      pack: ICON_PACKS.MATERIAL_COMMUNITY,
      name: "calendar-text"
    },
    name: "Quý",
    formatRange: (date) => ({
      start: moment(date).startOf("Q").toDate(),
      end: moment(date).endOf("Q").toDate()
    }),
    formatChart: "M",
    format: "Q",
    title: (date) => `${moment(date).format("Q")}`,
    getLabel: (date) => `${date.format("M")}`
  },
  {
    icon: {
      pack: ICON_PACKS.MATERIAL_COMMUNITY,
      name: "calendar-blank"
    },
    name: "Năm",
    formatRange: (date) => ({
      start: moment(date).startOf("YYYY").toDate(),
      end: moment(date).endOf("YYYY").toDate()
    }),
    formatChart: "Q",
    format: "YYYY",
    title: (date) => `${moment(date).format("YYYY")}`,
    getLabel: (date) => `${date.format("Q")}`
  },
  // {
  //   icon: {
  //     pack: ICON_PACKS.MATERIAL_COMMUNITY,
  //     name: "infinity"
  //   },
  //   name: "Tất cả"
  // }
]
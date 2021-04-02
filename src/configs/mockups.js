import moment from "moment";

export const _mockDetailReport = {
  total: 2000000,
  transactionBooks: [
    {
      icon: {
        name: "archive"
      },
      description: "Tiền ăn chi tiêu hằng ngày",
      totalAmount: 1500000,
      title: "Tiền mặt"
    },
    {
      icon: {
        name: "credit-card"
      },
      description: "Nhận lương và chi tiêu online",
      totalAmount: 500000,
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
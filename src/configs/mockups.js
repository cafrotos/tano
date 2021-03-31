import moment from "moment";

export const _mockDetailReport = {
  total: -100000,
  transactions: [
    {
      groupName: "Ăn uống",
      description: "Ăn sinh nhạt bạn miuu",
      date: moment().add(-2 , "days"),
      amount: -50000
    },
    {
      groupName: "Ăn uống",
      description: "Ăn liên hoan ",
      date: moment().add(-3 , "days"),
      amount: -50000
    }
  ]
}
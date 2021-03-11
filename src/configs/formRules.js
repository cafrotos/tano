import { REGEX } from "configs";

export const inputPhone = [
  {
    required: true,
    message: "Hãy nhập số điện thoại của cô/chú!"
  },
  {
    pattern: REGEX.PHONE_NUMBER,
    message: "Số điện thoại không chính xác, vui lòng kiểm tra lại!"
  }
]

export const inputCode = [
  {
    required: true,
    message: "Cô/chú hãy nhập mã số trong tin nhắn!"
  },
  {
    len: 6,
    message: "Mã xác thực phải có 6 ký tự!"
  }
]
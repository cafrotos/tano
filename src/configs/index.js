export const REGEX = {
  PHONE_NUMBER: /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/
}

export const CONTEXTS = {
  MAIN: "MAIN"
}

export const FORMAT_NUMBER_OPTIONS = {
  "vi-VN": {
    style: 'currency',
    currency: 'VND'
  }
}

export const REALM_PATH = "com.cafrotos.kltn.tano"

export const ICON_PACKS = {
  MATERIAL_COMMUNITY: "materialcommunity",
  MATERIAL: "material",
  EVA: "eva"
}

export const TRANS_TYPE = {
  OUTPUT: {
    title: "Khoản chi",
    value: "output"
  },
  INPUT: {
    title: "Khoản thu",
    value: "input"
  },
  LOAN: "loan"
}

export const COLLECTION_NAMES = {
  TRANSBOOKS: "transBooks",
  TRANSACTIONS: "transactions",
  USERS: "users",
  TRANSGROUPS: "transGroups",
  PLANS: "plans"
}

export const PLAN_GROUPS = {
  // Plan JARS
  SAVE: "SAVE",
  NEC: "NEC",
  EDU: "EDU",
  PLAY: "PLAY",
  FFA: "FFA",
  GIVE: "GIVE",
  // Plan 50/20/30
  NEED: "NEED"
}
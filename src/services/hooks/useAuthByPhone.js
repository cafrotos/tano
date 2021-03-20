import { signInWithPhone } from "services/firebase/auth"

const configs = {
  confirmation: null,
  phone: null
}

export default () => ({
  signIn: async (phone) => {
    configs["confirmation"] = await signInWithPhone(phone || configs[phone]);
    if (phone) {
      configs["phone"] = phone
    }
    return configs["confirmation"]
  },
  confirmation: configs["confirmation"]
})
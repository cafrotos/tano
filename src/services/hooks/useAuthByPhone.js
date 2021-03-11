import { signInWithPhone } from "services/firebase/auth"

const configs = {
  confirmation: null
}

export default () => ({
  signIn: async (phone) => {
    configs["confirmation"] = await signInWithPhone(phone);
    return configs["confirmation"]
  },
  confirmation: configs["confirmation"]
})
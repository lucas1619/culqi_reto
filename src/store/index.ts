import { createStore } from "vuex";
import { User } from "@/models/user";

export default createStore({
  state: {
    user: localStorage.getItem("culqiUser")
      ? (JSON.parse(localStorage.getItem("culqiUser") as string) as User)
      : null,
  },
  getters: {},
  mutations: {
    setUser(state, user: User) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
});

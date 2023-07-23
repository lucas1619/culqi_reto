import { createStore } from "vuex";
import { User } from "@/models/user";

export default createStore({
  state: {
    user: null as User | null,
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

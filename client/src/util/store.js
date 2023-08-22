import { create } from "zustand";
import { persist } from "zustand/middleware";

const user = (set) => ({
  user: {},
  token: null,
  setUser: (params) => {
    const { user } = params;

    set((state) => {
      user: user;
    });
  },

  logOut: (params) => {
    set((state) => {
      user: null;
      token: null;
    });
  },

  logIn: (params) => {
    const { user } = params;
    console.log(user);
    set((state) => {
      return {
        user: user,
        token: user.token,
      };
    });
  },
});

const useUser = create(persist(user, { name: "_auth" }));
export default useUser;

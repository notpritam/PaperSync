import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const user = (set) => ({
  user: {},
  token: null,
  authenticate: async () => {
    set((state) => {});
  },
  docTitle: null,
  setDocTitle: (params) => {
    set((state) => {
      return {
        docTitle: params,
      };
    });
  },
  setToken: (params) => {
    const { token } = params;

    set((state) => {
      return {
        token: token,
      };
    });
  },

  logOut: (params) => {
    set((state) => {
      return {
        user: null,
        token: null,
      };
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

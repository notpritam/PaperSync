import { create } from "zustand";
import { persist } from "zustand/middleware";

const user = (set) => ({
  user: null,
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
    console.log(params);
    // set((state) => {
    //   user: user;
    //   token: user;
    // });
  },
});

const useUser = create(persist(user, { name: "_auth" }));
export default useUser;

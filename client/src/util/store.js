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
  document: null,
  setDocument: (params) => {
    set((state) => {
      return {
        document: params,
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

const modal = (set) => ({
  modal: null,
  setModal: (parmas) => {
    set((state) => {
      return {
        modal: parmas,
      };
    });
  },
  closeModal: () => {
    set((state) => {
      return {
        modal: null,
      };
    });
  },
});

const drawer = (set) => ({
  drawer: null,
  setDrawer: (parmas) => {
    set((state) => {
      return {
        drawer: parmas,
      };
    });
  },
  closeDrawer: () => {
    set((state) => {
      return {
        drawer: null,
      };
    });
  },
});

export const useUser = create(persist(user, { name: "_auth" }));
export const useModal = create(modal);
export const useDrawer = create(drawer);

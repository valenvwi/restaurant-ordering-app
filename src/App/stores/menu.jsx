import { create } from "zustand";

export const useMenuStore = create((set) => ({
  menuId: null,
  setMenuId: (menuId) => set({ menuId }),
}));

import { create } from "zustand";

export const useMenuStore = create((set) => ({
  menuId: null,
  category: null,
  setMenuId: (menuId) => set({ menuId }),
  setCategory: (category) => set({ category }),
}));

import { create } from "zustand";
export const useTheme = create((set) => ({
  color: "#eef5eb",
  backgroundColor: "#272926",
  setColor: (data, bgData) => set({ color: data, backgroundColor: bgData }),
  setDefault: () => set({ color: "#272926", backgroundColor: "#eef5eb" }),
}));

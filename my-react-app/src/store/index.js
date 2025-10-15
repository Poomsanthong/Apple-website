import { create } from "zustand";

const useMacStore = create((set) => ({
  // Define your state and actions here

  color: "#2e2e2e",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  reset: () => set({ color: "#2e2e2e", scale: 0.08 }),
}));

export default useMacStore;

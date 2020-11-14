import create from "zustand";

const useStore = create((set) => ({
  windowWidth: 0,
  windowHeight: 0,
  isSmallScreen: 0,
}));

export default useStore;

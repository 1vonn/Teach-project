import create from 'zustand';

const useStore = create((set) => ({
  isLoggedIn: false,
  setLoggedIn: (status) => set({ isLoggedIn: status }),
}));

export default useStore;

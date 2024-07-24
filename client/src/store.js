import create from 'zustand';

const useStore = create((set) => ({
  isLoggedIn: false,
  isAdmin: false,
  setLoggedIn: (status) => set({ isLoggedIn: status }),
  setAdmin: (status) => set({ isAdmin: status })
}));

export default useStore;

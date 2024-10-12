import { create } from 'zustand';

const useAuthStore = create((set) => ({
    token : null,
    user : null,
    setToken : (token) => set({token}),
    setUser: (user) => set({user})
}));

export default useAuthStore;
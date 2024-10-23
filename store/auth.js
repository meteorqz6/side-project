import { create } from 'zustand'; // zustand 라이브러리에서 create 함수 가져오기 

const useAuthStore = create((set) => ({
    token : null,
    user : null,
    setToken : (token) => set({token}), // 전달 받은 token 값을 전역 상태에 저장
    setUser: (user) => set({user}) // 전달 받은 사용자 정보 user를 전역 상태에 저장
}));

export default useAuthStore;
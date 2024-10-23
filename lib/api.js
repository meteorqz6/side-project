import axios from "axios";
import useAuthStore from "../store/auth";

// Axios 인스턴스 생성
const api = axios.create({
    // baseURL : 'http://127.0.0.1:3000'
});

// Axios 인터셉터를 사용해 모든 요청을 보내기 전에 전처리
api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token; // zustand 상태 저장소에서 현재 저장된 토큰 가져오기
    // 토큰이 존재하면 Authorization 헤더에 토큰 추가
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

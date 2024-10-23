import axios from "axios";
import useAuthStore from "../store/auth";

// Axios 인스턴스 생성
const api = axios.create({
    // baseURL : 'http://127.0.0.1:3000'
});

export default api;

import { useState } from 'react';
import { useRouter } from 'next/router';
import useAuthStore from '../store/auth';
import api from '../lib/api';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const { setToken } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/sign', { username, password });
      console.log('로그인 성공 :', response.data);
      
      const { token } = response.data; // 응답에서 token 추출
      setToken(token); // 상태에 토큰 저장

      // 로그인 성공 후 사용자 정보 페이지로 이동
      router.push('/user'); 
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        </div>
        <br></br>
        <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        </div>
        <br></br>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

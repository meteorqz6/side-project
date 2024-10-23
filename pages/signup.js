import { useState } from 'react';
import { useRouter } from 'next/router';
import useAuthStore from '../store/auth';
import api from '../lib/api';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const router = useRouter();

  // zustand의 setUser 함수 가져오기
  const { setUser } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/signup', { username, password, nickname });
      console.log('회원가입 성공 :', response.data);

      // 응답에서 username, nickname, authorities 추출 후 zustand에 저장 
      const { username, nickname, authorities } = response.data;
      setUser({ username, nickname, authorities });

      // 회원가입 성공 후 로그인 페이지로 이동
      router.push('/sign'); 
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
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
        <div>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname"
        />
        </div>
        <br></br>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

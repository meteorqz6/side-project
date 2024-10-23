import useAuthStore from '../store/auth';

export default function UserProfile() {
  const { user } = useAuthStore();  // Zustand에서 사용자 정보 가져오기

  if (!user) {
    return <div>사용자 정보가 없습니다. 다시 로그인 해주세요.</div>;
  }

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>Username: {user.username}</p>
      <p>Nickname: {user.nickname}</p>
      <p>Role: {user.authorities[0].authorityName}</p>
    </div>
  );
}

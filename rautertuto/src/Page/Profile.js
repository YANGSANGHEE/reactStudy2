import { useParams } from 'react-router-dom';

const data = {
  sanghee: {
    name: '상희짱',
    description: '흰머리 생성퀸',
  },
  gildong: {
    name: '홍길동',
    description: '아버님이 누구니',
  },
};

const Profile = () => {
  const params = useParams('');
  const profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <h2>{profile.description}</h2>
        </div>
      ) : (
        <p>존재하지않은 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;

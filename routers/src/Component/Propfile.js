import { useParams } from 'react-router-dom';

const data = {
  veloper: {
    name: '김민준',
    description: '리액트 좋아하는 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '고전소설 홍길동의 주인공',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.user]; // Router 에서 URL파라미터로 정한 것을 가져온다.

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <h2>{profile.description}</h2>
        </div>
      ) : (
        <p>존재하지 않은 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;

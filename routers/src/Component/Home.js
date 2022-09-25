import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>홈페이지 입니다.</p>
      <Link to='/About'>소개</Link>
      <ul>
        <li>
          <Link to='/Profile/veloper'>veloper 프로필</Link>
        </li>
        <li>
          <Link to='/Profile/gildong'>홍길동 프로필</Link>
        </li>
        <li>
          <Link to='/Profile/void'>존재하지않은 프로필</Link>
        </li>
        <li>
          <Link to='/articles'>게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

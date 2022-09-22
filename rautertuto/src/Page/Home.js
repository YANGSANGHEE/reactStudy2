import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>라우터 홈 입니다.</h1>
      <p>첫번째 페이지 입니다.</p>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/Profile/sanghee'>sanghee의 프로필</Link>
        </li>
        <li>
          <Link to='/Profile/gildong'>gildong의 프로필</Link>
        </li>
        <li>
          <Link to='/Profile/void'>존재하진않은</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

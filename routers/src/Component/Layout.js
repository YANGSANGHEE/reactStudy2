import { Outlet, useNavigate } from 'react-router-dom';
// Outlet 해당 컴포넌트 태그의 Children을 보여줌
import Styled from 'styled-components';

const Header = Styled.header`
  padding : 1rem;
  background: salmon;
  font-size: 1.5rem;
  color: #fff;
  text-align:center;
`;
const Footer = Styled.footer`
  padding : 1rem;
  background: salmon;
  font-size: 1.5rem;
  color: #fff;
  text-align:center;
`;
const Layout = () => {
  const Navigate = useNavigate(); // Link 컴포넌트 안이용하고 가야 할떄

  const Back = () => {
    Navigate(-1);
  }; // 뒤로가기
  const Articles = () => {
    Navigate('/articles', { replace: 'true' });
  }; //게시글 목록가기
  //replace : true => 페이지를 이동할때 현제 페이지를 페이지 기록에 남기지 않음

  return (
    <>
      <Header>
        Header
        <button onClick={Back}>뒤로가기</button>
        <button onClick={Articles}>게시글목록가기</button>
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer>Footer</Footer>
    </>
  );
};

export default Layout;

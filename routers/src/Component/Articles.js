import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
  return (
    <>
      <Outlet />
      {/* <ul>
        <li> */}
      {/* <NavLink
        to='/articles/1'
        style={({ isActive }) => (isActive ? articleStyle : undefined)}
      >
        게시글 1
      </NavLink> */}
      {/* NavLink : 링크에서 사용한느 경로가 현재 라우트 경로와 일치하는경우 특정 스타일 또는 css 클래스를 적용하는 컴포넌트 */}
      {/* artcles/parms(useParams()) */}
      {/* </li>
        <li>
          <NavLink
            to='/articles/2'
            style={({ isActive }) => (isActive ? articleStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/articles/3'
            style={({ isActive }) => (isActive ? articleStyle : undefined)}
          >
            게시글 3
          </NavLink>
        </li>
      </ul> */}
      <ul>
        <ArticleItem id={1}></ArticleItem>
        <ArticleItem id={2}></ArticleItem>
        <ArticleItem id={3}></ArticleItem>
      </ul>
    </>
  );
};

const ArticleItem = ({ id }) => {
  const articleStyle = {
    color: 'red',
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? articleStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;

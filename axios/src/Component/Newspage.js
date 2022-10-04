import { useParams } from "react-router-dom";
import Categories from "./Categories";
import NewsList from "./NewsList";

const Newspage = () => {
  const params = useParams();
  //category가 선택되지 않으면 기본으로 'all'세팅
  const category = params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  )
}

export default Newspage;
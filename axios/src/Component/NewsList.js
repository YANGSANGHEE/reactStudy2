
import { useState, useEffect } from 'react'
import styled from "styled-components";
import Newsitem from "./Newsitem";
import axios from 'axios'

const NewsItemBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width:768px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ddc865f33fba478abee63d4e43282167`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  }, [category])

  //대기중일때
  if (loading) { // loading = true
    return <NewsItemBlock>대기중</NewsItemBlock>
  }
  //articles 값이 설정 안되어 있을때
  if (!articles) { // articles=false
    return null;
  }

  //article값이 유효할때
  return (
    <NewsItemBlock>
      {articles.map(article => (
        <Newsitem key={article.url} article={article} />
      ))}
    </NewsItemBlock>
  )
}

export default NewsList;
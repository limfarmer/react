import styled from "styled-components";
import NewsItem from "./NewsItem";
const NewsListBoard = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;
const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "http://google.com",
  urlToImage: "http://via.placeholder.com/160",
};

const NewList = () => {
  return (
    <>
      <NewsListBoard>
        <NewsItem aritcle={sampleArticle}></NewsItem>
        <NewsItem aritcle={sampleArticle}></NewsItem>
        <NewsItem aritcle={sampleArticle}></NewsItem>
        <NewsItem aritcle={sampleArticle}></NewsItem>
      </NewsListBoard>
    </>
  );
};
export default NewList;

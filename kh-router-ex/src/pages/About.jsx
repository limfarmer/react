import { useLocation } from "react-router-dom";
// 쿼리스트링은 URL 파라미터와 달리 별도 설정이 필요 없음

const About = () => {
  const loc = useLocation();
  return (
    <>
      <h1>여기가 소개 페이지 입니다.</h1>
      <p>라우팅를 사용해서 이동한 페이지 입니다.</p>
      <p>쿼리 스트링 : {loc.search}</p>
    </>
  );
};
export default About;

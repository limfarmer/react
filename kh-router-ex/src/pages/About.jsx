import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <h1>여기가 소개 페이지 입니다.</h1>
      <p>라우팅를 사용해서 이동한 페이지 입니다.</p>
      <Link to="/">홈으로</Link>
    </>
  );
};
export default About;

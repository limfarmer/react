import { Link } from "react-router-dom";

const Home = () => {
  const age = "3";
  return (
    <>
      <h1>여기가 홈입니다.</h1>
      <p>가장 먼저 보이는 페이지 입니다.</p>
      <Link to="/about">소개 페이지로 이동</Link>
      <p>
        <Link to="/Profile/frontend">FE 프로필 보기</Link>
      </p>
      <p>
        <Link to="/Profile/backend">FE 프로필 보기</Link>
      </p>
      <p>
        <Link to="/Profile/dba">FE 프로필 보기</Link>
      </p>
      <p>
        <Link to={`/age/${age}`}>나이 전달 하기</Link>
      </p>
      <p>
        <Link to={`/Articles`}>게시판</Link>
      </p>
    </>
  );
};
export default Home;

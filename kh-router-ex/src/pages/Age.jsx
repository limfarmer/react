import { useParams, Link, useNavigate } from "react-router-dom";
const Age = () => {
  const { age } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>전달 받은 나이는 {age}살 입니다.</h1>
      <Link to="/about">소개</Link>
      {/* navigate(-1)도 가능 (상위 페이지 이동) */}
      <p onClick={() => navigate("/about")}>소개페이지로 이동</p>
    </>
  );
};
export default Age;

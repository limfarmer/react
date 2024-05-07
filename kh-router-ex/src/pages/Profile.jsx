import { useParams } from "react-router-dom";
// useParamas : 리액트 라우터에서 URL 파라미터 값을 가져오기 위해
// 사용되는 Hook

const data = {
  frontend: {
    name: "임농부",
    description: "리액트를 배우는 개발자(진)",
  },
  backend: {
    name: "임어부",
    description: "스프링 부트도 배우고 싶어하는 개발자(진)",
  },
  dba: {
    name: "임정후",
    description: "mysql도 공부해야된다..",
  },
};
const Profile = () => {
  const params = useParams();
  const profile = data[params.username]; // key를 넣으면 값이 나옴 [키]
  return (
    <>
      <h1>사용자 프로픨</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </>
  );
};
export default Profile;

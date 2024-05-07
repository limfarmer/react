import { Outlet } from "react-router-dom";
// Outlet은 중첩된 라우트와 outlet은 페이지끼리 공통적으로 보여줘야하는
// 레이아웃이 있을 때도 유용하게 사용
const Layout = () => {
  return (
    <>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
      </header>
      <main>
        <Outlet />
      </main>
      <footer
        style={{ background: "darkgray", padding: 32, fontSize: 16 }}
      ></footer>
    </>
  );
};
export default Layout;

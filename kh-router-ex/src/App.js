import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Age from "./pages/Age";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route
            path="/Profile/:username"
            element={<Profile></Profile>}
          ></Route>
          <Route path="/Age/:age" element={<Age></Age>}></Route>
        </Route>
        <Route path="/articles" element={<Articles></Articles>}>
          <Route path=":id" element={<Article></Article>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

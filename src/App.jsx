import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./components/Content/Content";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import CreatePlayList from "./pages/CreatePlayList";
import CreatePlayList2 from "./pages/CreatePlayList2";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Content />}>
            <Route path="" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="createlist" element={<CreatePlayList />} />
            <Route path="createList2" element={<CreatePlayList2 />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

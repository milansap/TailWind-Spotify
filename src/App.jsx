import { Route, Routes } from "react-router-dom";
import "./App.css";

import Search from "./pages/Search";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import CreatePlayList from "./pages/CreatePlayList";
import CreatePlayList2 from "./pages/CreatePlayList2";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import LoginLayout from "./pages/login/LoginLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="createlist" element={<CreatePlayList />} />
          <Route path="createList2" element={<CreatePlayList2 />} />
        </Route>
        <Route path="" element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";

import Search from "./pages/search/Search";
import Home from "./pages/home/Home";
import Layout from "./components/Layout/Layout";
import CreatePlayList from "./pages/playlists/CreatePlayList";
import CreatePlayList2 from "./pages/playlists/CreatePlayList2";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import LoginLayout from "./pages/login/LoginLayout";

import Protected from "./components/Protected";

import DashBoard from "./pages/admin/pages/dashboard/DashBoard";
import Contact from "./pages/contact/Contact";
import AllContent from "./pages/admin/pages/AllContent/AllContent";
import DynRoute from "./pages/dynamicRoute/DynRoute";
import About from "./pages/about/About";
import Premium from "./pages/about/pages/premium/Premium";
import Support from "./pages/about/pages/support/Support";
import Download from "./pages/about/pages/download/Download";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/createlist" element={<CreatePlayList />} />
          <Route path="/createList2" element={<CreatePlayList2 />} />
        </Route>
        <Route path="" element={<LoginLayout />}>
          <Route path="/DynRoute/:id" element={<DynRoute />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/about" element={<About />}>
            <Route path="pre/:name" element={<Premium />} />
            <Route path="sup/:name" element={<Support />} />
            <Route path="down" element={<Download />} />
          </Route>
        </Route>

        <Route path="/admin" element={<Protected />}>
          <Route index element={<DashBoard />} />
          <Route path="allcontant" element={<AllContent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

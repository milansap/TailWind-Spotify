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
import AboutLayout from "./pages/about/layout/AboutLayout";
import UserAdmin from "./pages/admin/pages/userAdmin/UserAdmin";
import Default from "./pages/admin/pages/userAdmin/pages/U-Dashboard/Default";
import Analytic from "./pages/admin/pages/userAdmin/pages/U-Dashboard/Analytic";
import GlobalContext from "./pages/GlobalContext";
import { useState } from "react";
import NOtFound from "./pages/PageNotFound/NOtFound";
import Sales from "./pages/admin/pages/userAdmin/pages/U-Dashboard/Sales";
import ReactHookForm from "./pages/forTheRecord/ReactHookForm";
import DataTable from "./pages/table/DataTable";
import DataFromDatabase from "./pages/table/DataFromDatabase";
import LoginPage from "./pages/login&register/LoginPage";
import RegisterPage from "./pages/login&register/RegisterPage";

function App() {
  const [theme, setTheme] = useState({
    background: " 	#0F172A",
    color: "white",
  });

  return (
    <>
      <GlobalContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/createlist" element={<CreatePlayList />} />
            <Route path="/createList2" element={<CreatePlayList2 />} />
            <Route path="/database" element={<DataFromDatabase />} />
          </Route>

          <Route path="/LoginCookie" element={<LoginLayout />}>
            <Route index element={<LoginPage />} />
          </Route>

          <Route path="/register" element={<LoginLayout />}>
            <Route index element={<RegisterPage />} />
          </Route>

          <Route path="/datatable" element={<LoginLayout />}>
            <Route index element={<DataTable />} />
          </Route>

          <Route path="/reactform" element={<LoginLayout />}>
            <Route index element={<ReactHookForm />} />
          </Route>

          <Route path="/login" element={<LoginLayout />}>
            <Route path="DynRoute/:id" element={<DynRoute />} />
            <Route index element={<Login />} />
          </Route>

          <Route path="/contact" element={<LoginLayout />}>
            <Route index element={<Contact />} />
          </Route>
          <Route path="signup" element={<LoginLayout />}>
            <Route index element={<SignUp />} />
          </Route>
          <Route path="*" element={<NOtFound />} />
          <Route path="/about" element={<AboutLayout />}>
            <Route index element={<About />} />
            <Route path="pre/:name" element={<Premium />} />
            <Route path="sup/:name" element={<Support />} />
            <Route path="down" element={<Download />} />
          </Route>

          <Route path="/admin" element={<Protected />}>
            <Route index element={<DashBoard />} />
            <Route path="allcontant" element={<AllContent />} />
          </Route>
          <Route path="/useradmin" element={<UserAdmin />}>
            <Route index element={<Default />} />
            <Route path="analytic" element={<Analytic />} />
            <Route path="sales" element={<Sales />} />
          </Route>
        </Routes>
      </GlobalContext.Provider>
    </>
  );
}

export default App;

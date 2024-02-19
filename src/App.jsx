import { Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./components/Content/Content";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Content />}>
            <Route path="" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;

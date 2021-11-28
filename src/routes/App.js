import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home/Home";
import Login from "../containers/Login/Login";
import Control from "../containers/Control/Control";
import NotFound from "../containers/NotFound/NotFound";

function App() {
  let val = localStorage.getItem("admin");
  const [toggleRoutesPermission, setToggleRoutesPermission] =
    React.useState(val);
  // const toggleRoutesPermission = false;
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {toggleRoutesPermission && (
            <Route path="/control" element={<Control />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home/Home";
import Login from "../containers/Login/Login";
import Control from "../containers/Control/Control";
import Foro from "../containers/Foro/Foro";
import SubForos from "../containers/Foro/SubForos";
import Publication from "../containers/Foro/Publication";
import Lineas from "../containers/Lineas/Lineas";
import NotFound from "../containers/NotFound/NotFound";
import Mapa from "../components/Mapa";
import MapaDetalle from "../containers/Mapa/MapaDetalle";
import MReporte from "../containers/Mapa/MReporte";
import ReporteInfo from "../containers/Mapa/ReporteInfo";

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
          <Route path="/foro" element={<Foro />} />
          <Route path="/lineas" element={<Lineas />} />
          <Route path="/subforos" element={<SubForos />} />

          <Route path="/publication" element={<Publication />} />
          <Route path="/map" element={<Mapa />} />
          <Route path="/mapdetail" element={<MapaDetalle />} />
          <Route path="/report" element={<MReporte />} />
          <Route path="/reportInformation" element={<ReporteInfo />} />

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

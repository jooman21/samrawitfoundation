import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Gallaries from './pages/Gallaries'
import Samrawit from './pages/Samrawit'
import TeamMembers from './pages/TeamMembers'
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";

function App() {
  return (
  <>
    <BrowserRouter >
      <Routes>
        <Route  path="/" exact  element={<Samrawit />}></Route>
        <Route  path="/galleries" element={<Gallaries />}></Route>
        <Route  path="/teamembers" element={<TeamMembers />}></Route>
      </Routes>

      <Scrollup />
      <footer className="appjsfooter"><Footer /></footer>
    </BrowserRouter>
      
    </>
  );
}


export default App;

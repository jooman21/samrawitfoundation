import React from "react";
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import Gallaries from './pages/Gallaries'
import Samrawit from './pages/Samrawit'
import TeamMembers from './pages/TeamMembers'
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
import Foundation from "./components/Foundations/Foundation";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Teams from "./components/teams/Teams";
import Services from "./components/Services/Services";
function App() {
  return (
  <>
     {/* <HashRouter> */}
      <Routes>
        <Route  path="/" exact  element={<Samrawit />}></Route>
        <Route  path="/galleries" element={<Gallaries />}></Route>
        <Route  path="/teamembers" element={<TeamMembers />}></Route>
        <Route  path="/foundation" element={<Foundation />}></Route>
        <Route  path="/about" element={<About />}></Route>
        <Route  path="/contact" element={<Contact />}></Route>
        <Route  path="/teams" element={<Teams />}></Route>
        <Route  path="/services" element={<Services />}></Route>
      </Routes>

      <Scrollup />
      <footer className="appjsfooter"><Footer /></footer>
      {/* </HashRouter> */}
      
    </>
  );
}


export default App;

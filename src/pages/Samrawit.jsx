import React from 'react';
// import { BrowserRouter as Router, Routes,Route, Link,} from "react-router-dom";
import Header from '../components/header/Header';
import Home from "../components/home/Home";
import About from "../components/About/About";
import Foundation from '../components/Foundations/Foundation';
import Services from '../components/Services/Services';
import Contact from "../components/contact/Contact";
import Map from "../components/map/Map";
import Teams from "../components/teams/Teams";
import Introduction from "../components/introduction/Introduction";

const Samrawit = () => {
    return (
    <>
      <div className="back">
        <Header />
        <Home />
      </div>
  
      <main className="container main">
        <Introduction />
        <Foundation />
        <About />
        <Services />
        <Teams />
        <Contact />
        <Map />
      </main>
    </>
      
    );
  };

export default Samrawit
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../componentes/templates/Footer";
import Logo from "../componentes/templates/Logo";
import Nav from "../componentes/templates/Nav";
import "./App.css";
import Routes from "./Routes";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;

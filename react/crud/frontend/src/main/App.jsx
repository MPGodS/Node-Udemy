import React from "react";
import "./App.css";

import Footer from "../componentes/templates/Footer";
import Logo from "../componentes/templates/Logo";
import Main from "../componentes/templates/Main";
import Nav from "../componentes/templates/Nav";

export default (props) => (
  <div className="app">
    <Logo />
    <Nav />
    <Main />
    <Footer />
  </div>
);

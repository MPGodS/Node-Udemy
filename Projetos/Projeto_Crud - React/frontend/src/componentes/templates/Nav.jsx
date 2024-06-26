import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"></i> Inicio
      </Link>
      <Link to="/users">
        <i className="fa fa-user"></i> Cadastro de usuários
      </Link>
    </nav>
  </aside>
);

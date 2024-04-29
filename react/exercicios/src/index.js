import React from "react";
import ReactDOM from "react-dom";
import Saudacao from "./componentes/saudacao";
ReactDOM.render(
  <div>
    <Saudacao tipo="bom dia" nome="Ana" />
  </div>,
  document.getElementById("root")
);
